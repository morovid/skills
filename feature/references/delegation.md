# Delegation

## Agents

| Agent | Tier | Use for | May start |
| --- | --- | --- | --- |
| `morovid-scout` | fast | One bounded, read-only question: locate, trace, find consumers or tests | none |
| `morovid-runner` | fast | One established check (tests, lint, type check, build) | none |
| `morovid-author` | standard | Requirements, code plan, test plan; revisions | scout, runner |
| `morovid-designer` | standard | Test cases for one category package (L track) | scout |
| `morovid-coder` | standard | Production tasks or test cases, never both | scout, runner |
| `morovid-checker` | standard | S-track reviews and all rechecks | scout (check runs: asks the lead) |
| `morovid-reviewer` | strong | First review of an M or L stage; every Security review | scout (check runs: asks the lead) |
| `morovid-lead` | standard (primary) | Optional primary agent for running the workflow | all of the above |

On OpenCode, use these exact agents. If one is missing, stop and ask the user to install them (see the README); don't substitute `general` or `explore`. On other hosts, use the closest available agent with the same handoff. The separation of roles still applies.

## Which reviewer

- **First review of a stage:** `morovid-reviewer` on M and L, `morovid-checker` on S.
- **Recheck:** `morovid-checker`. Use `morovid-reviewer` instead if the revision rewrote more than about a third of the reviewed files, or if the checker returns "needs reviewer".
- **Security:** always `morovid-reviewer`.
- Always use a new session, never an author's or an earlier reviewer's.

## Sessions

- Start a fresh author session for the first draft and for each revision after a review.
- Within one round, before submission, the lead may send follow-ups to the same author session (for example, answers to the author's questions).
- Coders get a fresh session per assignment and per fix.

## Handoff files

For anything larger than a one-line question, the delegating agent writes `<stage>/handoffs/<task>.md`, and the prompt is only: "Read `<path>` and do the task."

```markdown
# <task>

Goal: <one or two lines>
Procedure: <skill reference path#section>; template <path>; principles <feature/references/principles.md>
Inputs: <path#section or ID ranges; quote short obligations inline>
Changes since last round: <pasted `git diff --stat` and changed paths; revisions and rechecks only>
Open findings: <IDs in <stage>/review.md>
Output: <exact paths; what must stay unchanged>
Return: <what the reply must contain>
```

Don't include session-ID lists, transcripts or pasted whole documents. Quote only the clauses the agent needs.

## Limits

- The lead runs up to 4 subagents at a time; authors, checkers and reviewers up to 3. Queue the rest.
- Subagents return once. The lead doesn't relay or narrate their progress. It reports to the user at stage boundaries, questions and blockers.
