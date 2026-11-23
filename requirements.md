# Skill pack installer: requirements and first iteration plan

Working name: **`skillpack`** (the CLI, run as `npx skillpack …`). The npm name, manifest file name and lock file name are placeholders until we check availability on npm.

## 1. Goal

A CLI, run with `npx`, that installs **skill packs** from a git repository into a project or the user's home, for **OpenCode** and **Codex**. A skill pack is a versioned repository of skills plus harness-neutral **agent definitions**. Unlike `npx skills` (vercel-labs/skills), it:

1. installs a specific **version** of a pack, declared in a manifest at the pack root;
2. generates **agent configs** for each harness from neutral definitions;
3. **scopes** skill and agent names to their source, so two packs can each ship `implement`;
4. asks the user which agent or model fills each **role**, saves the choices in a config file, and regenerates skills and agents when the choices change;
5. checks the pack's **model requirements** and warns when the models aren't available.

The same pack repository must keep working with `npx skills`. The pack ships a generated **plain build**: skills under their plain, unprefixed names (as `npx skills` installs them today), placeholders replaced with fallback text, no agents (section 3.8).

It should feel like `npx skills`: same source formats, the same `-g`, `-a`, `-s` and `-y` flags, project scope by default, and a committed lock file.

## 2. Terms

| Term | Meaning |
|---|---|
| Pack | A git repo (or a subfolder of one) with a manifest at its root |
| Manifest | `skillpack.json` at the pack root: name, version, scope, contents, requirements |
| Scope | Short namespace for a pack's skills and agents, e.g. `morovid`. Used as a name prefix. |
| Skill source | A skill in the pack's source folder, written with placeholders (`src/skills/<name>/SKILL.md`) |
| Plain build | Skills generated from the source for `npx skills`: plain (unprefixed) names, placeholders replaced with fallback text, no agents |
| Fallback text | A short phrase that each agent definition provides. It replaces `{{agent:<role>}}` wherever there's no concrete agent to name: in the plain build, and when the user binds a role to **none**. It describes the kind of helper to use, so the skill still reads correctly. See R-PH-4. |
| Rendered skill | A skill as `skillpack` installs it: prefixed name, placeholders replaced with the user's chosen agents |
| Agent definition | A harness-neutral agent file in the pack: role, model tier, capabilities, fallback text, instructions |
| Role | The pack-local name of an agent definition (`scout`, `author`, …), referenced by placeholders |
| Binding | The user's choice for a role in one harness: a generated agent with a chosen model, an existing agent, or none |
| Selection config | The file that stores bindings (`skillpack.config.json`). It's the user's intent and is edited by `configure` or by hand. |
| Lock file | The resolved result: commits, rendered files, hashes, models in use (`skillpack-lock.json`) |
| Harness | Target tool: `opencode` or `codex` |
| Model tier | Named capability level (`fast`, `standard`, `strong`) that agents ask for |
| Profile | A pack-supplied mapping from tiers to suggested model IDs for one harness or provider |

## 3. Requirements

Priority: **M** = must have in v1, **S** = should have in v1, **L** = later.

### 3.1 Sources and CLI

| ID | Pri | Requirement |
|---|---|---|
| R-SRC-1 | M | Accept the same source formats as `npx skills add`: `owner/repo` (GitHub), full git URLs (HTTPS or SSH), a `tree/<ref>/<path>` URL for a pack in a subfolder, and a local path. |
| R-SRC-2 | M | Use the user's existing git credentials (git credential helper, SSH). Never read or store tokens itself. `GITHUB_TOKEN` / `GH_TOKEN` are only used when already set. |
| R-SRC-3 | M | A repo without a manifest installs as an **unversioned** pack. Use `npx skills` discovery to find its skills. The scope comes from the repo owner, the version is the commit SHA, and there are no placeholders or agents. Warn that it's unversioned. |
| R-CLI-1 | M | Commands: `add`, `remove`, `list`, `update`, `check`, `install` (restore from the lock file), `configure` (change bindings), `sync` (regenerate from the selection config), `doctor` (requirements check). Pack authors also get `validate`, `build` (plain build) and `render` (preview without installing). |
| R-CLI-2 | M | Flags: `-g/--global`, `-a/--harness <opencode\|codex\|*>` (also accept `--agent` as an alias, to match `npx skills`), `-s/--skill <names\|*>`, `--agents <names\|*\|none>`, `--as <scope>`, `--profile <id>`, `-y/--yes`, `--dry-run`, `--force`, `--frozen-lockfile`, `--strict`. |
| R-CLI-3 | M | Interactive by default: pick skills, agents, harnesses and bindings. With `-y` it never prompts, uses the recommended bindings (R-CFG-3), and can run in CI. |
| R-CLI-4 | S | Detect installed harnesses: `opencode`/`codex` on `PATH`, plus the folders `.opencode/` and `.codex/` and their global config folders. Only offer the ones detected unless `-a` is given. |
| R-CLI-5 | M | Runs on Node ≥ 22 on macOS, Linux and Windows, with few dependencies. |

### 3.2 Manifest and versioning

| ID | Pri | Requirement |
|---|---|---|
| R-VER-1 | M | The pack root holds `skillpack.json` (format below). Required fields: `name`, `version` (semver) and `scope`. Optional: `description`, `author`, `license`, `repository`, `source` (folders for skill sources and agent definitions), `build` (plain build output), `requirements`, `profiles`, `limits` and `engines` (the minimum `skillpack` version). |
| R-VER-2 | M | `add <source>@<version>` installs an exact version. `<version>` may be a semver version (`1.2.0`), a range (`^1.2`), a tag, a branch or a commit SHA. |
| R-VER-3 | M | Versions resolve to git tags named `v<version>`, falling back to `<version>`, found with `git ls-remote --tags`. Ranges pick the highest matching tag. With no version, use the default branch HEAD. |
| R-VER-4 | M | After checkout, the manifest's `version` must match the tag that was requested. If not, fail unless `--force` is passed. |
| R-VER-5 | M | Write a lock file, `skillpack-lock.json` (project) or `~/.config/skillpack/lock.json` (global). Each pack entry records: source, requested spec, resolved version, commit SHA, scope, harnesses, installed skills and agents, the bindings in effect, and a content hash for every written file. |
| R-VER-6 | M | `install` restores exactly the commits in the lock file, rendered with the current selection config. `--frozen-lockfile` fails on any difference. |
| R-VER-7 | M | `check` reports newer versions that match the requested range, plus newer major versions. `update` moves to them and re-renders using the saved bindings. It prompts only for roles that are new or were removed. |
| R-VER-8 | S | The manifest can also live in `package.json` under a `"skillpack"` key, for packs that are also npm packages. |
| R-VER-9 | L | Support npm packages as sources (`npm:@scope/pack@1.2.0`). |

### 3.3 Skill installation

| ID | Pri | Requirement |
|---|---|---|
| R-SKL-1 | M | Read skill sources from the manifest's `source.skills` folder (default `src/skills`). Each subfolder with a `SKILL.md` is one skill. |
| R-SKL-2 | M | Install rendered skills **flat** under the same folders `npx skills` uses: project `.agents/skills/<scope>-<name>/` for both OpenCode and Codex; global `~/.config/opencode/skills/` (OpenCode) and `~/.agents/skills/` (Codex). Copy files; don't symlink. |
| R-SKL-3 | M | Install the whole skill folder, including `references/`, `assets/` and scripts. Placeholders are replaced in every text file (`.md`, `.txt`, `.json`, `.yaml`, `.toml`); binary files are copied unchanged. |
| R-SKL-4 | M | Write a marker file (`.skillpack.json`) in each installed skill folder with pack, version and hash. Never overwrite or delete a folder that lacks this marker, or whose hash shows local edits, unless `--force` is passed. |
| R-SKL-5 | S | Show the skill name, description and source before installing. Warn about any executable scripts the skill contains. |

### 3.4 Scoping and naming

| ID | Pri | Requirement |
|---|---|---|
| R-SCP-1 | M | Every installed skill and agent gets a name prefixed with its pack's scope, so two packs can both ship `implement`. Skills use a **flat** layout, so prefixed names work in every IDE or harness that only reads one folder level. |
| R-SCP-2 | M | Installed skill name: `<scope>-<name>`, e.g. `morovid-implement`. Names follow the Agent Skills naming rules: lowercase letters, digits and single hyphens, at most 64 characters. The folder name equals the frontmatter `name`; the renderer writes both. |
| R-SCP-3 | M | Generated agents get **the same ID in every harness**, so one rendered skill folder (shared by OpenCode and Codex in `.agents/skills/`) is correct for both. ID: `<scope>-<name>` (fallback `<scope>_<name>` if Codex rejects hyphens). OpenCode: `.opencode/agents/<id>.md` (flat). Codex: `.codex/agents/<id>.toml` with `name = "<id>"`. |
| R-SCP-4 | M | Fail before writing anything if two packs resolve to the same scope or scoped name. `--as <scope>` lets the user choose a different scope. |
| R-SCP-5 | M | In rendered installs, rewrite relative links between a pack's skills to the prefixed folder names (`../review/SKILL.md` → `../morovid-review/SKILL.md`). The plain build keeps the source links, because its folder names aren't prefixed. |
| R-SCP-6 | M | Skill and agent sources refer to roles and other skills only through placeholders (section 3.7). Plain mentions of names are never rewritten. |

### 3.5 Agent definitions and generation

| ID | Pri | Requirement |
|---|---|---|
| R-AGT-1 | M | Packs define agents in `src/agents/<role>.md` (manifest `source.agents`): YAML frontmatter (format below) plus a Markdown body containing the instructions. One file serves every harness. |
| R-AGT-2 | M | The frontmatter covers: `description`; `model` (tier plus reasoning `effort`); `mode` (`subagent` or `primary`); `capabilities` (`read`, `search`, `edit` paths allowed/denied, `shell` allowed/denied patterns, `web`, `skills`); `spawn` (roles this agent may start; empty for leaf agents); `steps`; `fallback` (text used when the role has no agent, see R-PH-4); optional `existing` (suggested built-in agents per harness, e.g. `opencode: explore`, `codex: explorer`); and optional per-harness overrides under `harness.<id>`. |
| R-AGT-3 | M | **OpenCode adapter:** for each role bound to a generated agent, write a Markdown agent with V2 frontmatter (`description`, `mode`, `model: provider/model#variant`, `steps`, `permissions`). `permissions` is built from the capabilities: first deny everything, then allow what's listed, then apply the denials. `subagent` rules use the **bound** IDs of the roles in `spawn`. A role bound to an existing agent uses that agent's ID; a role bound to none is left out. |
| R-AGT-4 | M | **Codex adapter:** write TOML with `name`, `description`, `model`, `model_reasoning_effort` and `developer_instructions`. Set `features.shell_tool = false` when the agent has no shell. Set `skills.include_instructions = false` when `capabilities.skills` is false. |
| R-AGT-5 | M | **Enforcement report.** For every restriction the harness can't enforce, the adapter adds it to the instructions as text and records an "unenforced" warning. Codex examples: limits on edit paths, spawn allow-lists, step limits and read-only mode. `render`, `add`, `sync` and `doctor` print these warnings. |
| R-AGT-6 | M | The pack can override built-in agents with a reserved name and `override: true`, for example to set a model on OpenCode's `explore`/`general` or Codex's `explorer`. These keep their built-in IDs (not scoped) and need explicit confirmation, or `--yes`. |
| R-AGT-7 | M | Generated files start with a header: pack, version, source path, binding and "generated by skillpack, do not edit; change with `skillpack configure`". Same overwrite protection as R-SKL-4. |
| R-AGT-8 | M | `validate` checks every agent definition against the schema. It also checks that every `spawn` target exists, that no spawn cycles exist, that the nesting depth implied by `spawn` stays within `limits.maxDepth` (default 2), and that every role has `fallback` text. |
| R-AGT-9 | S | Optional harness settings: `harness.codex.config` (e.g. `[agents] max_concurrent_threads_per_session`) and `harness.opencode.config` (e.g. `default_agent`). By default these are printed as snippets. They're applied only with `--apply-config`, and then only for keys that are missing. The installer never rewrites keys the user has set. |
| R-AGT-10 | L | More harness adapters (Claude Code, Cursor, etc.) behind the same interface. Skills already work there through `.agents/skills`; the adapter adds agents and bindings. |

### 3.6 Bindings and the selection config

| ID | Pri | Requirement |
|---|---|---|
| R-CFG-1 | M | For each installed role and each target harness, `add` asks the user how the role is filled:<br>1. **Generate** the pack's agent, using the recommended model from the profile or another available model (picked from the list in R-REQ-3, or typed in);<br>2. **Use an existing agent**, chosen from the harness's agents (built-in, project and global) or typed in;<br>3. **None**: no agent, and skills fall back to the role's `fallback` text. |
| R-CFG-2 | M | Save the answers in a selection config. There are two layers: global `~/.config/skillpack/config.json` and project `skillpack.config.json` (meant to be committed and shared). Each holds the profile per harness and bindings per pack, harness and role. It's the user's intent, kept separate from the lock file (the resolved result). |
| R-CFG-3 | M | Recommended binding when `-y` is passed or the user accepts defaults: **generate**, with the first available candidate of the role's tier in the chosen profile. If no candidate is available, use the role's `existing` agent for that harness, otherwise **none**. Each fallback produces a warning (R-REQ-4). |
| R-CFG-4 | M | `configure [pack] [role…] [--harness]` re-asks for the chosen roles (or all), saves the config, then runs `sync`. |
| R-CFG-5 | M | `sync` regenerates every rendered skill and agent from the cached pack source (by commit), using the current selection config, **without fetching or changing versions**. It runs after the config is edited by hand or by `configure`. It adds, updates and removes generated agent files to match the bindings. Files edited by hand are protected (R-SKL-4). |
| R-CFG-6 | M | Keep the pack source for each locked commit in a local cache (`~/.cache/skillpack/…/<sha>`). If it's missing, `sync` fetches that commit again. |
| R-CFG-7 | M | Skills are shared by all harnesses in `.agents/skills/`. If a role is bound to **different IDs** in different harnesses (e.g. existing `explore` in OpenCode and `explorer` in Codex), render a harness-qualified phrase, e.g. "`explore` (Codex: `explorer`)". The phrase format comes from a template the pack can override. If the bindings agree, render the plain ID. |
| R-CFG-8 | S | `configure --show` prints the current bindings, models and warnings as a table. |
| R-CFG-9 | S | Unknown keys and roles that no longer exist are reported by `doctor`, and kept until the user removes them. |
| R-CFG-10 | M | **Per-project overrides.** Resolve each value in this order: project config, then global config, then the recommended binding (R-CFG-3). Merge per value (profile per harness; binding per pack, role and harness), not per file, so a project can override one role and inherit the rest. `configure` asks which layer to write to; inside a project the default is the project layer. `configure --show` shows where each value comes from. |
| R-CFG-11 | M | **Overriding a globally installed pack.** Rendered skills in the global folder are shared by every project, so a project can't change them in place. When the project's resolved bindings for a global pack differ from the global ones, `sync` also renders that pack into the project: skills into `.agents/skills/`, agents into `.opencode/agents/` and `.codex/agents/`. The copies have the same names, so they shadow the global ones (needs checking, see milestone 0). The project lock file records them as overrides. If the project's bindings match the global ones again, `sync` removes the project copies. |

### 3.7 Placeholders

| ID | Pri | Requirement |
|---|---|---|
| R-PH-1 | M | Syntax: `{{agent:<role>}}` (the bound agent ID), `{{skill:<name>}}` (the installed skill name: prefixed in rendered installs, plain in the plain build) and `{{scope}}`. Use `\{{` for a literal `{{`. |
| R-PH-2 | M | Placeholders may appear in skill files (R-SKL-3) and in agent definition bodies and descriptions. |
| R-PH-3 | M | `validate` and `build` fail on unknown placeholders, unknown roles or skills, and placeholders inside the frontmatter `name`. |
| R-PH-4 | M | Where there's no agent to name (a role bound to none, or the plain build), `{{agent:<role>}}` becomes the role's `fallback` text. Fallback text is one neutral phrase per role. It's written so the sentence around the placeholder still reads correctly, and it tells the model what to use instead. Example for `scout`: "a read-only exploration subagent (or do the search yourself, with a narrow scope)". The plain build doesn't know which harness will read it, so fallback text never names harness-specific agents. |
| R-PH-5 | M | Rendering is deterministic: the same source, bindings and harness set always produce byte-identical output, so hashes can be compared. |

### 3.8 Pack layout and `npx skills` compatibility

| ID | Pri | Requirement |
|---|---|---|
| R-PKG-1 | M | Layout: sources with placeholders in `src/skills/` and `src/agents/`. A generated **plain build** goes in `skills/<name>/` (plain, unprefixed names, as today), which `npx skills` discovers by default. Both folders are committed. |
| R-PKG-2 | M | Source `SKILL.md` frontmatter carries `metadata.internal: true`, so `npx skills` hides the placeholder versions even with `--full-depth`. `build` and the renderer remove that key from their output. |
| R-PKG-3 | M | `skillpack build` writes the plain build: source names unchanged, source links unchanged, placeholders replaced as in R-PH-4, no agents. After the frontmatter it adds a comment: "generated from `src/skills/<name>` by skillpack build; edit the source". |
| R-PKG-4 | M | `skillpack build --check` exits non-zero if `skills/` is out of date, for use in CI and pre-release checks. |
| R-PKG-5 | M | `skillpack` installs from `src/`, never from the plain build. |
| R-PKG-6 | S | `build` also writes ready-to-copy agents for the default profile to `dist/agents/opencode/` and `dist/agents/codex/`, for users who install skills with `npx skills` and want to add agents by hand. A short `dist/agents/README.md` explains this. |
| R-PKG-7 | S | `skillpack init` creates a pack skeleton: manifest, `src/skills/example`, `src/agents/example.md`, and a CI snippet for `build --check`. |

### 3.9 Model requirements

| ID | Pri | Requirement |
|---|---|---|
| R-REQ-1 | M | The manifest `requirements.models` declares tiers. Each has a `level` (`required` or `suggested`), a short `reason`, and is used by agent definitions through `model.tier`. |
| R-REQ-2 | M | `profiles` map tiers to suggested model IDs, in order of preference, for each harness and provider: `opencode/github-copilot`, `opencode/anthropic`, `codex`, … The OpenCode ID format `provider/model#variant` depends on the provider. Profiles are suggestions only; the user's binding is final. |
| R-REQ-3 | M | Check availability. OpenCode: run `opencode models` and match the output. Codex: check the profile's model names against `codex` output if a list is available. Otherwise report them as "unverified". The same list is offered in `configure`. |
| R-REQ-4 | M | If a **suggested** tier has no available model: warn, try the next candidate, then fall back as in R-CFG-3. Say in the warning that an agent without its own model uses the parent's model and can cost more. |
| R-REQ-5 | M | If a **required** tier has no available model: show a prominent warning, list the affected roles and skills, and ask whether to continue (`-y` continues). Fail under `--strict`. |
| R-REQ-6 | M | Warn when the user picks a model from a cheaper or stronger tier than the role asks for, e.g. "`author` asks for `standard`; you picked `fast`". Don't block. |
| R-REQ-7 | M | `doctor` re-runs the checks for everything installed. It reports missing models, bound agents that no longer exist, files that changed locally, files not owned by `skillpack`, and restrictions the harness can't enforce. |
| R-REQ-8 | S | `requirements.harness` declares minimum harness versions, e.g. `opencode >= 2.0`. Warn when an older version is detected. |

### 3.10 Safety and removal

| ID | Pri | Requirement |
|---|---|---|
| R-SAF-1 | M | `--dry-run` lists every file it would create, change or delete, and every config change. It works for `add`, `update`, `configure`, `sync` and `remove`. |
| R-SAF-2 | M | Write to temporary files, then rename them into place. If any step fails, leave the project unchanged. |
| R-SAF-3 | M | `remove <pack\|skill\|agent>` deletes only files recorded in the lock file whose hashes still match, and removes the pack's bindings from the selection config. Files edited since install are listed and kept unless `--force` is passed. |
| R-SAF-4 | M | Never run scripts from a pack during install, sync or build. |
| R-SAF-5 | S | Don't edit `.gitignore`. Print which generated paths and config files to commit for project scope. |
| R-SAF-6 | M | Leave alone skills installed by `npx skills` (no `.skillpack.json` marker). The plain build isn't prefixed, so the same pack installed both ways would load twice (`implement` and `morovid-implement`). Detect this from `skills-lock.json` (same source) or identical descriptions, warn, and suggest `npx skills remove <names>`. Never remove them automatically. |

## 4. File formats (draft)

### 4.1 Pack layout

```text
skillpack.json
src/
  skills/
    implement/SKILL.md          # placeholders, metadata.internal: true
    review/SKILL.md
    review/references/…
  agents/
    scout.md
    author.md
skills/                         # generated by `skillpack build`, for npx skills (plain names)
  implement/SKILL.md
  review/…
dist/agents/                    # optional (R-PKG-6)
  opencode/morovid-scout.md
  codex/morovid-scout.toml
```

### 4.2 `skillpack.json`

```jsonc
{
  "$schema": "https://…/skillpack.schema.json",
  "name": "@morovid/skills",
  "scope": "morovid",
  "version": "1.0.0",
  "description": "Engineering workflow: spec, plan-code, plan-tests, implement, review",
  "author": "morovid",
  "license": "MIT",
  "repository": "github:morovid/skills",
  "engines": { "skillpack": ">=0.1.0" },
  "source": { "skills": "src/skills", "agents": "src/agents" },
  "build": { "skills": "skills", "agents": "dist/agents", "defaultProfiles": ["opencode/github-copilot", "codex"] },
  "limits": { "maxDepth": 2 },
  "requirements": {
    "harness": { "opencode": ">=2.0.0" },
    "models": {
      "fast":     { "level": "suggested", "reason": "Search, mechanical edits, check runs" },
      "standard": { "level": "required",  "reason": "Authoring specs, plans and code" },
      "strong":   { "level": "suggested", "reason": "Independent review of risky changes" }
    }
  },
  "profiles": {
    "opencode/github-copilot": {
      "fast":     ["github-copilot/claude-haiku-5.5#low", "github-copilot/gpt-6-luna#low"],
      "standard": ["github-copilot/claude-sonnet-5.5#high", "github-copilot/gpt-6.2-sol#high"],
      "strong":   ["github-copilot/claude-opus-5.5#high"]
    },
    "opencode/anthropic": {
      "fast":     ["anthropic/claude-haiku-5-5#low"],
      "standard": ["anthropic/claude-sonnet-5-5#high"],
      "strong":   ["anthropic/claude-opus-5-5#high"]
    },
    "codex": {
      "fast":     [{ "model": "gpt-6-luna", "effort": "low" }],
      "standard": [{ "model": "gpt-6.2-sol", "effort": "high" }],
      "strong":   [{ "model": "gpt-6.2-sol", "effort": "xhigh" }]
    }
  }
}
```

### 4.3 Skill source with placeholders: `src/skills/plan-code/SKILL.md` (excerpt)

```md
---
name: plan-code
description: Design production changes and sequence their tasks …
metadata:
  internal: true
---
1. **Delegate planning.** Start a fresh {{agent:author}} with the planning guide …
2. **Use helpers for bounded work.** The planner delegates searches to {{agent:scout}} …
4. **Review independently.** For size S use {{agent:verifier}}; for M and L use {{agent:auditor}} …
After a PASS, hand off to {{skill:plan-tests}}.
```

The same line rendered three ways:

| Output | Rendered line |
|---|---|
| `skillpack`, role bound to a generated agent | Start a fresh `morovid-author` with the planning guide … |
| `skillpack`, `scout` bound to existing agents | delegates searches to `explore` (Codex: `explorer`) … |
| Plain build (`npx skills`) | Start a fresh document-authoring subagent (if none is configured, use the most capable available subagent with a narrow handoff) … |

### 4.4 Agent definition: `src/agents/author.md`

```md
---
description: Drafts or revises spec, plan and test-plan artifacts from a self-contained handoff.
mode: subagent
model: { tier: standard, effort: high }
steps: 80
spawn: [scout, scribe]
fallback: >-
  document-authoring subagent (if none is configured, use the most capable
  available subagent with a narrow handoff)
existing: { opencode: general, codex: default }
capabilities:
  read: true
  search: true
  web: false
  skills: false
  edit:  { allow: ["specs/**"] }
  shell: { allow: ["git diff*", "git log*", "git show*", "git status*"] }
harness:
  codex: { model: { effort: medium } }
---
You are a document author at depth 1. Use targeted edits, not full rewrites of large files.
Delegate searches to {{agent:scout}} and supplied mechanical edits to {{agent:scribe}}. Never start other agents.
```

### 4.5 Selection config: `skillpack.config.json`

```jsonc
{
  "configVersion": 1,
  "harnesses": {
    "opencode": { "profile": "opencode/github-copilot" },
    "codex":    { "profile": "codex" }
  },
  "packs": {
    "morovid": {
      "roles": {
        "scout": {
          "opencode": { "use": "existing", "agent": "explore" },
          "codex":    { "use": "generate", "model": "gpt-6-luna", "effort": "low" }
        },
        "author": {
          "opencode": { "use": "generate", "model": "github-copilot/claude-sonnet-5.5#high" },
          "codex":    { "use": "generate", "model": "gpt-6.2-sol", "effort": "medium" }
        },
        "auditor": {
          "opencode": { "use": "generate", "model": "github-copilot/gpt-6.2-sol#high" },
          "codex":    { "use": "none" }
        }
      }
    }
  }
}
```

Roles left out of the file use the recommended binding (R-CFG-3). `configure` writes every role explicitly, so later changes to the profile don't silently change bindings.

### 4.6 Generated OpenCode output: `.opencode/agents/morovid-author.md`

```md
---
# generated by skillpack from @morovid/skills@1.0.0 src/agents/author.md
# binding: generate github-copilot/claude-sonnet-5.5#high — change with `skillpack configure`
description: Drafts or revises spec, plan and test-plan artifacts from a self-contained handoff.
mode: subagent
model: github-copilot/claude-sonnet-5.5#high
steps: 80
permissions:
  - { action: "*", resource: "*", effect: deny }
  - { action: read, resource: "*", effect: allow }
  - { action: glob, resource: "*", effect: allow }
  - { action: grep, resource: "*", effect: allow }
  - { action: edit, resource: "specs/**", effect: allow }
  - { action: shell, resource: "git diff*", effect: allow }
  # …
  - { action: subagent, resource: "explore", effect: allow }         # scout → existing agent
  - { action: subagent, resource: "morovid-scribe", effect: allow }
---
…instructions with placeholders resolved…
```

### 4.7 Generated Codex output: `.codex/agents/morovid-author.toml`

```toml
# generated by skillpack from @morovid/skills@1.0.0 src/agents/author.md
# binding: generate gpt-6.2-sol/medium — change with `skillpack configure`
name = "morovid-author"
description = "Drafts or revises spec, plan and test-plan artifacts from a self-contained handoff."
model = "gpt-6.2-sol"
model_reasoning_effort = "medium"
developer_instructions = """
…instructions with placeholders resolved…

Restrictions (not enforced by Codex; follow them strictly):
- Edit only files matching specs/**.
- Start only these agents: morovid-scout, morovid-scribe.
- Stop and summarize after at most 80 steps.
"""

[skills]
include_instructions = false
```

### 4.8 `skillpack-lock.json`

```jsonc
{
  "lockfileVersion": 1,
  "packs": {
    "morovid": {
      "source": "github:morovid/skills",
      "requested": "^1.0",
      "version": "1.0.0",
      "commit": "386c5d6…",
      "harnesses": ["opencode", "codex"],
      "configHash": "…",                      // hash of this pack's bindings at last sync
      "skills": { "implement": { "installedAs": "morovid-implement", "path": ".agents/skills/morovid-implement", "hash": "…" } },
      "agents": {
        "author": {
          "opencode": { "path": ".opencode/agents/morovid-author.md", "model": "github-copilot/claude-sonnet-5.5#high", "hash": "…" },
          "codex":    { "path": ".codex/agents/morovid-author.toml", "model": "gpt-6.2-sol/medium", "hash": "…" }
        },
        "scout": { "opencode": { "existing": "explore" }, "codex": { "path": ".codex/agents/morovid-scout.toml", "model": "gpt-6-luna/low", "hash": "…" } }
      },
      "config": [{ "file": ".codex/config.toml", "key": "agents.max_concurrent_threads_per_session", "value": 6 }]
    }
  }
}
```

If `configHash` differs from the current selection config, `doctor` reports "out of sync; run `skillpack sync`", and `install --frozen-lockfile` fails.

## 5. Known harness limits

The tool has to report these limits, not hide them:

| Topic | OpenCode | Codex |
|---|---|---|
| Model per agent | Enforced | Enforced |
| Edit and shell restrictions | Enforced (`permissions`) | Not enforced: agents inherit the parent session's sandbox and approvals. Only `features.shell_tool` can be switched off. |
| Spawn allow-list (nesting depth) | Enforced (`subagent` rules) | Not enforced; instructions only. Need to check how deep Codex agents can actually nest. |
| Step limit | `steps` | None |
| Agent ID format | Flat file name → ID | `name` field; check whether hyphens are allowed (R-SCP-3) |
| Listing available models | `opencode models` | Need to check; otherwise report as unverified |
| Listing existing agents (for R-CFG-1) | Read `.opencode/agents`, global agents and config `agents`, plus the built-ins | Read `.codex/agents` and `~/.codex/agents`, plus the built-ins (`default`, `worker`, `explorer`) |
| Model ID portability | Depends on the provider (hence profiles) | Same across clients, though some models may be missing in the IDE extension |
| Shared skill folder | `.agents/skills` (also read by Codex) | `.agents/skills` (also read by OpenCode), hence R-SCP-3 and R-CFG-7 |

## 6. Out of scope for v1

- A registry or search service (`find`), and telemetry.
- Agent adapters for harnesses other than OpenCode and Codex. Skills still install to `.agents/skills`, which other tools also read.
- Running pack scripts or hooks after install.
- Dependencies between packs and npm sources (R-VER-9).

## 7. First iteration plan

Plan: a TypeScript CLI in a **separate repository** (`morovid/skillpack`), published to npm. This repo (`morovid/skills`) becomes the first pack and the main test fixture.

Dependencies: `yaml`, `smol-toml`, `semver`, `jsonc-parser`, `@clack/prompts` and `tinyglobby`, plus `git` installed on the system. Bundled with `tsup`, tested with `vitest`.

The core is a pure function, `render(packSource, bindings, harnesses) → files[]`, shared by `add`, `sync`, `build` and `render`. Commands only resolve inputs, call `render`, and hand the result to the transactional writer.

### Milestone 0: Schemas and checks (about 1 day)

1. Write JSON Schemas for `skillpack.json`, the agent frontmatter, the selection config and the lock file. `validate`, `configure` and the docs all use them.
2. Hands-on checks in both harnesses:
   - Does Codex accept `name = "morovid-scout"`, i.e. hyphens in agent names (R-SCP-3)?
   - Does `npx skills` hide `metadata.internal` skills when run with `--full-depth` (R-PKG-2)?
   - Does a deny-everything rule (`"*"`) block tools a subagent needs?
   - How deep can Codex agents nest?
   - How can Codex list available models?
   - Can OpenCode list its agents from the CLI?
   - Does a project skill or agent shadow a global one with the same name, in both OpenCode and Codex (R-CFG-11)?

### Milestone 1: Pack format, rendering and `build` (about 3 days)

1. Manifest and source loader; agent definition parser; `validate` (R-AGT-8, R-PH-3).
2. Placeholder engine: `{{agent:}}`, `{{skill:}}`, `{{scope}}`, escaping, fallback text and harness-qualified phrases (R-PH-1…5, R-CFG-7).
3. Skill renderer with two modes: **install** (prefixed names, frontmatter rewrite, link rewriting) and **plain** (names and links unchanged). Both remove `metadata.internal` (R-SCP-2, R-SCP-5, R-PKG-2, R-PKG-3).
4. `build` and `build --check` for the plain build (R-PKG-3, R-PKG-4).
5. Convert `morovid/skills` to the source layout on a branch, run `build`, and check that `npx skills add ./ --list` shows only the plain build.

Done when: `skillpack build --check` passes in CI for `morovid/skills`, and `npx skills add` installs the plain build with no `{{` left in any file.

### Milestone 2: Sources, versions, install and lock (about 3 days)

1. CLI skeleton: commands, flags, `--dry-run`, non-interactive `-y`.
2. Source resolver and cache: parse sources (R-SRC-1), resolve versions from tags (R-VER-2…4), cache each commit (R-CFG-6), fall back to the plain repo layout when there's no manifest (R-SRC-3).
3. Transactional writer: write to temp files, then rename; hash files, add markers and headers, protect against overwrites (R-SAF-1…3).
4. `add` for skills, using recommended bindings only (no prompts yet); write the lock file; `install` and `--frozen-lockfile` (R-VER-5, R-VER-6).
5. `list` and `remove`.

Done when: `npx skillpack add morovid/skills@1.0.0 -a opencode -a codex -y` installs prefixed, rendered skills; a second pack with an `implement` skill installs next to it; and `install --frozen-lockfile` reproduces both on a clean checkout.

### Milestone 3: Agents, bindings, `configure` and `sync` (about 4 days)

1. OpenCode and Codex adapters, permissions and the enforcement report (R-AGT-3…5, R-AGT-7).
2. Find existing agents and available models for each harness (section 5, R-REQ-3).
3. Interactive binding prompts in `add`; write the selection config (R-CFG-1…3).
4. `configure` and `sync`, including adding and removing agent files when bindings change, and `configHash` in the lock file (R-CFG-4, R-CFG-5).
5. Global and project config layers, per-value merging, and project copies that shadow a global pack (R-CFG-10, R-CFG-11).
6. Overrides of built-in agents with confirmation (R-AGT-6).
7. Snapshot tests for every adapter and binding type (generate / existing / none, same vs different IDs per harness).

Done when: switching `scout` in OpenCode from "generate" to the existing `explore` with `skillpack configure morovid scout` deletes `.opencode/agents/morovid-scout.md`, updates the `subagent` rules in `morovid-author.md`, and re-renders `.agents/skills/morovid-*` to say "`explore` (Codex: `morovid-scout`)". No network access is needed for any of this.

### Milestone 4: Model requirements, updates and release (about 3 days)

1. Tier and profile resolution, fallback warnings, tier-mismatch warnings, `--strict` (R-REQ-1…6).
2. `doctor` (R-REQ-7, R-CFG-9).
3. `check` and `update` with range semantics, keeping bindings and prompting only for new or removed roles (R-VER-7).
4. Harness config snippets and opt-in `--apply-config` (R-AGT-9).
5. `dist/agents` output (R-PKG-6) and `init` (R-PKG-7), if time allows.
6. Docs: README, pack author guide, and a guide for users coming from `npx skills`. Publish `0.1.0`; tag `morovid/skills` `v1.0.0`.

### Testing approach

- Unit tests: source parsing, version resolution, name validation, link rewriting, placeholder rendering (including escapes and harness-qualified phrases), both adapters, permission building, the hash function.
- Golden-file tests: for one fixture pack, render every combination of harness set and binding type, and compare with checked-in output (R-PH-5).
- Fixture packs: a minimal pack, a pack without a manifest, two packs that both define `implement`, a pack with a spawn cycle and one with an unknown placeholder (both must fail `validate`), and a pack whose required model is missing.
- End-to-end: run against temp git repos created during the test, with tags `v1.0.0` / `v1.1.0` / `v2.0.0`, for `add` → `configure` → `sync` → `update` → `remove` → `install --frozen-lockfile`.
- Compatibility: run `npx skills add <fixture> --list` (with and without `--full-depth`) to check that only the plain build is visible.
- Manual smoke test in OpenCode and Codex for each release: start the scoped role agents and check the model and permissions.

## 8. Decisions and open questions

### Decided

- Installed skills are flat and prefixed: `<scope>-<name>` (R-SCP-1, R-SCP-2).
- Skills and agents refer to roles and skills only through placeholders (R-PH-1…5).
- The user chooses how each role is filled for each harness. The choices live in `skillpack.config.json`, and `configure` / `sync` regenerate the files without re-fetching (R-CFG-1…7).
- `npx skills` keeps working through a committed plain build in `skills/`, generated from `src/`. The plain build keeps plain, unprefixed names, so `npx skills` users get the same names as today (R-PKG-1…5).
- A project config overrides the global config, value by value. A globally installed pack gets project copies when a project overrides its bindings (R-CFG-10, R-CFG-11).
- Fallback text is one neutral phrase per role and never names harness-specific agents (R-PH-4).

### Alternatives considered for `npx skills` compatibility

| Option | Why it wasn't chosen |
|---|---|
| Publish the plain build on a separate `dist` branch or tags | `main` stays clean, but `npx skills` users must remember `@dist`, and the two outputs drift apart more easily |
| No plain build: skills read agent names from a config file at runtime | No generation step, but costs tokens and is fragile, and it doesn't work without `skillpack` |
| One shared output for both tools, with fallback text where placeholders would go | Simpler, but loses exact agent names, which is the main point of the agent work |

### Open

1. **Names:** check that the CLI name, manifest name (`skillpack.json` or a `package.json` key?), config file name and lock file name are free on npm.
2. **Agent ID separator:** hyphen (`morovid-scout`) if Codex accepts it, otherwise underscore. This affects R-SCP-3 only.
3. **Codex model check:** is there a supported way to list available models, or should Codex models always be reported as "unverified"?
4. **Default profile:** when OpenCode has several providers configured, should the tool prompt for one, or prefer the provider of the user's default model?
5. **Global agents:** should `add -g` also install the pack's generated agents globally by default, or ask?
