---
name: review
description: Independently review an implementation snapshot against the passed spec and plans, covering production code, implemented tests, and security when triggered. Consolidates the category verdicts and returns findings to their owners. Doesn't fix code or authorize release. Part of the feature workflow.
---

# Review

This stage is part of the [feature workflow](../feature/SKILL.md). Follow its [principles](../feature/references/principles.md), [artifacts](../feature/references/artifacts.md), [delegation](../feature/references/delegation.md) and [review protocol](../feature/references/review-protocol.md). You are the lead: you pin the snapshot, run the category reviews, and consolidate. You never give or change a category verdict.

## 1. Pin the snapshot

Record these at the top of `review/review.md`, from the [index template](assets/index-template.md), and nowhere else:
- the submitted project commit (with a diff hash for uncommitted changes);
- `implement/record.md`;
- the upstream pass tags.

Category reports link to this file instead of repeating it.

## 2. Run the categories

| Category | Procedure and rubric | Report | Runs when |
| --- | --- | --- | --- |
| Code | [code](references/code.md) | `review/code.md` | Always |
| Tests | [tests](references/tests.md) | `review/tests.md` | Always |
| Security | [security](references/security.md) | `review/security.md` | The [security trigger](../feature/references/tracks.md) applies |

- **S track:** one `morovid-checker` reviews Code and Tests together into `review/review.md`, with sections for each and finding prefixes `code-F` and `tests-F`. Security, if triggered, is a separate `morovid-reviewer`.
- **M and L tracks:** one reviewer per category, in parallel, each in a new session, chosen per [delegation](../feature/references/delegation.md#which-reviewer).
- Each reviewer gets a handoff file with:
  - the review protocol and its category procedure;
  - the snapshot;
  - the category boundary and its report path;
  - open findings and, on rechecks, the project diff since the reviewed commit.
- **Shared runs:** the record's Check runs table is the run list. A reviewer that needs a run that doesn't exist yet asks you for it. You start one `morovid-runner` per distinct request, add the result as a new run ID, and share it with every reviewer that needs it.

## 3. Consolidate

1. Read the saved category reports and check that each covers this exact snapshot.
2. Cross-link findings that share a cause, without renumbering them.
3. Update `review/review.md`.
4. Commit and tag the round (`review r<N>: <verdict>`, with trailers) and append to `findings.jsonl`.

The overall verdict:
- **PASS:** every category that ran passed on this snapshot.
- **BLOCKED:** any category is BLOCKED.
- **REVISE:** otherwise.

## 4. Return

- **On PASS:** set review `passed` and hand back to the [feature workflow](../feature/SKILL.md) to finish.
- **On REVISE:** hand the findings to [implement](../implement/SKILL.md). Findings owned upstream go to their stage per [routing](../feature/references/routing.md).
- **Rechecks:** use fresh reviewer sessions with the new snapshot and the diff. A category whose files and evidence didn't change keeps its verdict.
- **Small drift after PASS:** at most 3 changed files, none inside the reviewed change, gets a [drift check](../feature/references/artifacts.md#currency-and-drift) instead of a round.
