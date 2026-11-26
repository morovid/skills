# Artifact repository, state and history

Workflow artifacts live in a hidden local git repository, separate from the project. The lead commits every submission and review. Git holds every earlier version, so artifacts contain only the current round.

## Location and setup

- Use `.artifacts/` at the root of the main checkout (the parent of `git rev-parse --path-format=absolute --git-common-dir`) unless the assignment names another place. Linked worktrees share the main checkout's `.artifacts/`.
- If it's missing, the lead runs `git init .artifacts` and adds `.artifacts/` to the project's local exclude file (`git rev-parse --git-path info/exclude`), not to `.gitignore`. It has no remote; never push it.
- Each assignment gets its own folder. Check existing folders first, and never write in another assignment's folder.

## Layout

```text
<assignment>/
  STATE.md              stage status and pass tags (lead)
  findings.jsonl        finding history, append-only (lead)
  retro.md              lessons, written at the end (lead)
  spec/    brief.md  discovery.md  requirements.md  review.md      (S: spec.md, review.md)
  plan/    code.md  tests.md  tests/<category>.md  review.md        (S: plan.md, review.md)
  implement/ record.md
  review/  review.md  code.md  tests.md  security.md                (S: review.md)
  <stage>/handoffs/<task>.md   delegation handoffs (working files)
```

## STATE.md

The lead owns it. Every skill reads it first and updates it before its final commit.

```markdown
# <assignment>
Track: M — shared invitation lifecycle; two consumers
Stage: plan · Status: in-review · Round: 2 of 5

| Stage | Status | Tag |
| --- | --- | --- |
| spec | passed | invites/spec/r2-pass |
| plan | in-review | invites/plan/r2 |
| implement | — | |
| review | — | |

Next: checker recheck of plan-F3, plan-F5
Notes: <round extensions authorized by a person, track changes and why; one line each>
```

Statuses: `draft`, `in-review`, `passed`, `blocked`, `escalated`, `stale` (an upstream change affects a passed stage).

## Commits, tags and trailers

Only the lead commits and tags.

| Checkpoint | Commit message | Tag |
| --- | --- | --- |
| Submission for review | `<stage> r<N>: submit` | `<assignment>/<stage>/r<N>` |
| Review saved | `<stage> r<N>: <verdict>` | `<assignment>/<stage>/r<N>-<verdict>` |
| Drift check, question, blocker, other stop | `<stage>: <reason>` | none |

`<stage>` is `spec`, `plan`, `implement` or `review`. `<verdict>` is `pass`, `revise`, `blocked` or `escalated`. A `-pass` tag is the stage's handoff; downstream stages cite it.

Add trailers to every submission and review commit. They are the process record:

```text
plan r2: revise

Stage: plan
Round: 2
Track: M
Verdict: REVISE
Findings: blocking=2 minor=1 editorial=3
Origin: plan=2 spec=1
Agents: author=2 designer=0 reviewer=0 checker=1 scout=4 runner=0
Sessions: author=ses_…, checker=ses_…
Skills: <skills package commit or version, if known>
Repo: <project commit>[+<diff hash>]
```

Get the diff hash with `git diff HEAD | git hash-object --stdin` when there are uncommitted project changes. Get session IDs from the subagent tool results; agents don't record them in artifacts.

Never amend, rebase or reset commits, and never delete tags. If git has no identity, commit with `-c user.name=workflow -c user.email=workflow@localhost`.

## No edits after a pass

Don't edit files at a `-pass` tag outside a new round. The lead may apply the round's **Editorial** findings before the pass commit, listing them in an `Editorial:` trailer; they need no recheck. A later change, such as requester polish or new scope, starts the next round: set the stage back to `draft` and mark dependent stages `stale`. This keeps every passed version recoverable.

## findings.jsonl

After each review commit, the lead appends one line per finding event:

```json
{"id":"plan-F3","stage":"plan","round":2,"event":"opened","severity":"Blocking","check":"P5","owner":"plan/test-planner","origin":"plan"}
{"id":"plan-F1","stage":"plan","round":2,"event":"closed"}
```

Events: `opened`, `closed`, `reopened`, `stalled`. `origin` is the stage whose work caused the problem, which can differ from where it was found. Reports keep only the current round; this file keeps the whole history for later analysis.

## retro.md

When `review` passes or a stage escalates, the lead writes up to ten lines:
- rounds per stage;
- the findings that cost the most rounds and their origin;
- where agents misread instructions;
- one or two suggested changes to the skills.

Commit it with the final commit.

## Reading history

`<a>` is the artifact repository, `<asg>` the assignment folder.

| Need | Command |
| --- | --- |
| Rounds and verdicts | `git -C <a> tag -l '<asg>/<stage>/*'` |
| What changed since the last round | `git -C <a> diff --stat <asg>/<stage>/r<N-1> <asg>/<stage>/r<N> -- <asg>/` |
| Changed lines in one file | `git -C <a> diff <asg>/<stage>/r<N-1> <asg>/<stage>/r<N> -- <path>` |
| An earlier finding's text | `git -C <a> grep -n -A 12 '<finding ID>' <tag> -- <path>` |
| Process record | `git -C <a> log --format='%s%n%(trailers)' -- <asg>/` |
| A whole earlier file (last resort) | `git -C <a> show <tag>:<path>` |

For rechecks and revisions, the lead pastes the `diff --stat` output and the changed paths into the handoff, so subagents rarely need git themselves.

## Currency and drift

A pass stays current while `git -C <a> diff --quiet <pass-tag> HEAD -- <asg>/<stage>/` reports no change and the project hasn't moved in ways the stage relies on.

**Drift check:** the stage passed, its files are unchanged, and only the project or an upstream input moved, by at most 3 files. Then:
1. A scout gets the diff and the paths, symbols and IDs the passed artifact relies on, and reports which changed lines touch them.
2. If nothing relied on changed, the lead records a one-line note in `STATE.md` and commits `<stage>: drift check`. It isn't a review round.
3. Otherwise, mark the stage `stale` and run a normal round scoped to the affected sections.

## Backup

The repository has no remote. If the user wants a backup, the lead runs `git -C .artifacts bundle create <user-chosen path>/<project>-artifacts.bundle --all` after each pass.
