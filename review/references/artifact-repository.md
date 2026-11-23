# Artifact repository

Workflow artifacts (briefs, reports, specifications, plans, reviews, implementation records) live in a hidden local git repository, separate from the project repository. It organizes the work into rounds and gives every artifact version a fingerprint. It has no remote: never add one or push. Uploading artifacts is planned for later.

## Location and setup

- Use the location the assignment names. Otherwise use `.artifacts/` at the root of the main checkout: the parent of `git rev-parse --path-format=absolute --git-common-dir`. Linked worktrees share the main checkout's `.artifacts/`.
- If it doesn't exist, the lead creates it with `git init` and adds `.artifacts/` to the project's local exclude file (`git rev-parse --git-path info/exclude`), not to `.gitignore`. Nothing in the project repository changes.
- Each assignment gets one folder, for example `.artifacts/invoice-export/`. This is the **assignment folder**; the skills' default file names apply inside it. Check existing folders before creating one, and never write in another assignment's folder.
- Run every command against this repository with `git -C <artifacts>`, so nothing touches the project repository by mistake.

## Commits and tags

Only the lead commits and tags. Subagents write their assigned files; the lead commits them. Subagents may run only the read-only commands listed under [Reading history](#reading-history).

| Checkpoint | Commit message | Tag |
| --- | --- | --- |
| An author submission is ready for review | `<stage> r<N>: submit` | `<assignment>/<stage>/r<N>` |
| A review report is saved | `<stage> r<N>: <verdict>` | `<assignment>/<stage>/r<N>-<verdict>` |
| A drift check is recorded | `<stage> r<N>: drift check` | None |
| Any other stop: pause, blocker, escalation, recorded answer | `<stage>: <short reason>` | None |

`<stage>` is `spec`, `plan-code`, `plan-tests`, `implement`, or `review`. `<N>` is the review round (1–5, continuing after a human-authorized extension). `<verdict>` is `pass`, `revise`, `blocked`, or `escalated` (for `spec`: Ready for engineering = `pass`, Needs rework = `revise`, Blocked at review = `blocked`).

The `-pass` tag is the stage's handoff: downstream stages cite it as the reviewed package. It also pins a report saved in the same commit as the artifacts it approves (such as the engineering specification).

Never amend, rebase, reset, force-push, or delete tags: the history is the record of the rounds. If git has no identity configured, commit with `-c user.name=workflow -c user.email=workflow@localhost`.

## Fingerprints

Wherever the skills ask for an artifact's "exact version", use its commit in this repository.

- **Artifacts:** the short commit SHA of the artifact repository, written `artifacts@<sha>`. One fingerprint covers every artifact in that commit; don't hash individual files. Refer to one file as `<path>@<sha>`, or by tag.
- **Project code:** the project commit SHA, written `repo@<sha>`. With uncommitted changes, add the hash of the diff: `repo@<sha>+<hash>`, where `<hash>` is the output of `git diff HEAD | git hash-object --stdin`; list untracked files that belong to the change.
- A review records the fingerprints it reviewed in its header. The lead gives the reviewer the round tag and the project fingerprint.

## Keep reports to the current round

Overwrite artifacts and reports in place; git keeps every earlier round. A review report contains only:

- the current round: header, baseline, checks, and verdict;
- **open findings** in full, each with `Attempts: <n>; no-progress rechecks: <m>` so the stalled-loop guard needs no old rounds;
- findings **closed this round**, one line each: ID and closure evidence;
- **earlier rounds**, one line each: `<tag> — <verdict>, <open findings>`.

Delete findings closed in earlier rounds, earlier rounds' check tables, evidence, and rationale. Don't copy them into another file. The same applies to author responses and rework packets: keep only what the next round needs.

## Reading history

Use these exact commands, with `<a>` for the artifact repository path (normally `.artifacts`), `<asg>` for the assignment folder, and `<stage>` as above:

| Need | Command |
| --- | --- |
| List the rounds and verdicts | `git -C <a> tag -l '<asg>/<stage>/*'` |
| What changed since the last review | `git -C <a> diff --stat <asg>/<stage>/r<N-1> <asg>/<stage>/r<N> -- <asg>/` |
| The changed lines only | `git -C <a> diff <asg>/<stage>/r<N-1> <asg>/<stage>/r<N> -- <path>` |
| An earlier finding's full text | `git -C <a> grep -n -A 30 '<finding ID>' <tag> -- <path>` |
| When a finding was added or removed | `git -C <a> log --oneline -S '<finding ID>' -- <path>` |
| An earlier file in full (last resort) | `git -C <a> show <tag>:<path>` |

Start every recheck and every revision from the diff, then read only the changed sections, the sections they depend on, and the open findings. Read a whole earlier file only when the diff and `grep` aren't enough.

A verdict stays **Current** while `git -C <a> diff --quiet <reviewed-tag> HEAD -- <reviewed paths>` reports no change, apart from edits to status or readiness fields.

Link artifacts to each other with plain relative paths. The commit pins them, so no digests or backlink rules are needed.

## Drift check

Use a drift check instead of a full author and review round when a stage has a current **PASS**, the reviewed artifacts are unchanged, and only the project (or an upstream input) moved a little since the reviewed fingerprint: at most 3 changed files, per `git diff --stat <reviewed-sha>` in the project (or the artifact diff for an upstream input).

1. The lead starts a `morovid-scout` with the diff and the paths, symbols, contracts, and IDs the passed artifact relies on. The scout reports which changed lines touch them, with locators.
2. The lead reads the scout's report and the diff. If nothing the artifact relies on changed, the lead adds a one-line **Drift check** entry to the review report (`repo@<old> → repo@<new>: no effect on <artifact>; scout <session>`), keeps the verdict **Current**, and commits it. This is not a review round and doesn't count toward the five-round limit.
3. If anything the artifact relies on changed, or the lead is unsure, mark the artifact **Needs revalidation** and run a normal author and review round, scoped to the affected sections.

A drift check only confirms currency. It never changes the artifact, closes findings, or replaces a review of changed artifact content.
