# Artifact repository

Workflow artifacts (briefs, reports, specifications, plans, reviews, implementation records) live in a hidden local git repository, separate from the project repository. It organizes the work into rounds and gives every artifact version a fingerprint. It has no remote: never add one or push. Uploading artifacts is planned for later.

## Location and setup

- Use the location the assignment names. Otherwise use `.artifacts/` at the root of the main checkout: the parent of `git rev-parse --path-format=absolute --git-common-dir`. Linked worktrees share the main checkout's `.artifacts/`.
- If it doesn't exist, the lead creates it with `git init` and adds `.artifacts/` to the project's local exclude file (`git rev-parse --git-path info/exclude`), not to `.gitignore`. Nothing in the project repository changes.
- Each assignment gets one folder, for example `.artifacts/invoice-export/`. This is the **assignment folder**; the skills' default file names apply inside it. Check existing folders before creating one, and never write in another assignment's folder.
- Run every command against this repository with `git -C <artifacts>`, so nothing touches the project repository by mistake.

## Commits and tags

Only the lead commits. Subagents write their assigned files; the lead commits them. Subagents may run read-only git (`log`, `show`, `diff`, `status`) in the artifact repository.

| Checkpoint | Commit message | Tag |
| --- | --- | --- |
| An author submission is ready for review | `<stage> r<N>: submit` | `<assignment>/<stage>/r<N>` |
| A review report is saved | `<stage> r<N>: <verdict>` | On a full pass only: `<assignment>/<stage>/r<N>-pass` |
| Any other stop: pause, blocker, escalation, recorded answer | `<stage>: <short reason>` | None |

`<stage>` is `spec`, `plan-code`, `plan-tests`, `implement`, or `review`. `<N>` is the review round (1–5, continuing after a human-authorized extension). The `-pass` tag is the stage's handoff: downstream stages cite it as the reviewed package. It also solves pinning a report that is saved in the same commit as the artifacts it approves (such as the engineering specification).

Never amend, rebase, reset, force-push, or delete tags: the history is the record of the rounds. If git has no identity configured, commit with `-c user.name=workflow -c user.email=workflow@localhost`.

## Fingerprints

Wherever the skills ask for an artifact's "exact version", use its commit in this repository.

- **Artifacts:** the short commit SHA of the artifact repository, written `artifacts@<sha>`. One fingerprint covers every artifact in that commit; don't hash individual files. Refer to one file as `<path>@<sha>`, or by round tag.
- **Project code:** the project commit SHA, written `repo@<sha>`. With uncommitted changes, add the hash of the diff: `repo@<sha>+<hash>`, where `<hash>` is the output of `git diff HEAD | git hash-object --stdin`; list untracked files that belong to the change.
- A review records the fingerprints it reviewed in its header. The lead gives the reviewer the round tag and the project fingerprint.

## Using the history

- Overwrite artifacts in place. Earlier rounds stay in the history; reports list round tags and verdicts instead of copying earlier rounds.
- Read an earlier round with `git -C <artifacts> show <tag>:<path>`.
- Start a recheck from the changes since the last reviewed round: `git -C <artifacts> diff <previous-tag> <tag> -- <assignment>/`.
- A verdict stays **Current** while `git -C <artifacts> diff --quiet <reviewed-sha> HEAD -- <reviewed paths>` reports no change, apart from edits to status or readiness fields.
- Link artifacts to each other with plain relative paths. The commit pins them, so no digests or backlink rules are needed.
