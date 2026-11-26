# Engineering workflow skills

One workflow takes a feature from request to independently reviewed implementation. Each stage ends with an independent review, and every round is versioned in a hidden git repository.

```text
feature ─┬─ spec       intent, current behavior, requirements and acceptance  → spec/r<N>-pass
         ├─ plan       code plan and test plan, reviewed together               → plan/r<N>-pass
         ├─ implement  parallel production and test coders, check runs          → submitted
         └─ review     Code, Tests and (when triggered) Security                 → review/r<N>-pass
```

| Skill | Responsibility |
| --- | --- |
| [feature](feature/SKILL.md) | Runs the stages in order from `STATE.md`. Also holds the shared rules: [principles](feature/references/principles.md), [artifacts and history](feature/references/artifacts.md), [tracks](feature/references/tracks.md), [delegation](feature/references/delegation.md), [review protocol](feature/references/review-protocol.md) and [routing](feature/references/routing.md). |
| [spec](spec/SKILL.md) | Intake and discovery (by the lead), requirements (by an author), independent review. |
| [plan](plan/SKILL.md) | Code plan, then test plan (and category designers on L), with one review of both. |
| [implement](implement/SKILL.md) | Batches of separate production and test coders, integration, recorded check runs; fixes after review. |
| [review](review/SKILL.md) | Category reviews of the implementation snapshot, plus a short index of their verdicts. |

## Use it

> Use `feature` to take this request through implementation and review: …

- **Resuming:** `feature` reads `.artifacts/<assignment>/STATE.md` and continues at the first stage that hasn't passed.
- **One stage only:** ask for just the spec or just the plan; the skill stops at that stage's boundary.
- **Pauses:** on the M and L tracks, the workflow stops after each passed stage, so the next stage starts in a fresh session with a small context. Resume with "Use `feature` to continue `<assignment>`".

**Tracks** scale the ceremony to the change ([details](feature/references/tracks.md)):
- **S:** local changes. One spec file and one plan file; a Sonnet checker reviews each stage.
- **M:** the default.
- **L:** shared data or lifecycle and high-risk changes. Category designers write the test cases.

Security review runs only when the change touches permissions, untrusted input, secrets, dependencies or external exposure.

None of these skills authorizes a merge, release or deployment.

## Artifacts and history

Artifacts live in `.artifacts/` at the project root: a local git repository, excluded through `.git/info/exclude`, with no remote.
- Each assignment has a `STATE.md`, one folder per stage, an append-only `findings.jsonl`, and a closing `retro.md`.
- The lead commits every submission and verdict and tags each round, adding trailers that record the round, verdict, finding counts, agents and project commit.
- Reports hold only the current round; git and `findings.jsonl` keep the history.
- Passed files are never edited outside a new round.

To review the process across assignments:

```sh
git -C .artifacts log --format='%s%n%(trailers)'
cat .artifacts/*/findings.jsonl
```

## Agents and cost

| Agent | Model (GitHub Copilot) | Role |
| --- | --- | --- |
| `morovid-scout` | Haiku `low` | One bounded read-only question |
| `morovid-runner` | Haiku `low` | One established check |
| `morovid-author` | Sonnet `medium` | Requirements, code plan, test plan |
| `morovid-designer` | Sonnet `low` | Test cases for one category package (L) |
| `morovid-coder` | Sonnet `medium` | Production tasks or test cases, never both |
| `morovid-checker` | Sonnet `medium` | S-track reviews and all rechecks |
| `morovid-reviewer` | Opus `medium` | First review of M/L stages, and Security |
| `morovid-lead` | Sonnet `medium` | Optional primary agent that runs the workflow |

Cost controls built into the workflow:
- Opus runs only first reviews.
- Rechecks start from the git diff.
- Editorial findings never cause a round.
- Each M/L stage starts with a fresh lead.
- Handoffs are short files of locators, not pasted documents.

## Install

Run from the target project. Install all the skills; they link to `feature`'s shared references.

```sh
npx skills add morovid/skills --skill '*' --agent opencode --full-depth --yes            # this project
npx skills add morovid/skills --skill '*' --agent opencode --full-depth --global --yes   # every project
```

Copy the agents without renaming them, and allow one level of nested delegation (authors, coders and reviewers start scouts and runners):

```sh
mkdir -p .opencode/agents && cp <path-to-skills>/agents/opencode/*.md .opencode/agents/
# or: ~/.config/opencode/agents/
```

```jsonc
// .opencode/opencode.jsonc (or add the key to your existing config); see agents/opencode.jsonc
{ "experimental": { "subagent_depth": 2 } }
```

Check with `opencode debug agents`.
- **Another provider:** change the `model` line in each agent file (`opencode models` lists what's available).
- **Primary agent:** select `morovid-lead` for workflow sessions. Otherwise, the lead runs on whatever model your session uses.
- **Missing agents:** when the agents are missing, the skills stop and ask you to install them rather than fall back to `general`.

**Upgrading from the previous layout:**
- `plan-code` and `plan-tests` are now `plan`.
- `morovid-scribe` is gone; delete `morovid-scribe.md` from your agents folder.
- Re-copy all the agent files.

## Development

`node scripts/check.mjs` checks that:
- relative links resolve;
- every agent named in a skill exists;
- every skill has a description;
- files stay within their size budgets.

CI runs it on every push. [docs/skillpack-requirements.md](docs/skillpack-requirements.md) describes the planned installer for versioned skill packs.
