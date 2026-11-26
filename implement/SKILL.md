---
name: implement
description: Execute a passed code plan and test plan in parallel batches, with production code and tests written by separate coders. Integrate the changes, run the prescribed checks, and submit to independent review, then fix what the review returns. Doesn't review its own work or authorize release. Part of the feature workflow.
---

# Implement

This stage is part of the [feature workflow](../feature/SKILL.md). Follow its [principles](../feature/references/principles.md), [artifacts](../feature/references/artifacts.md) and [delegation](../feature/references/delegation.md). You are the lead: you sequence and integrate the work, and `morovid-coder` sessions write the code and tests. [Review](../review/SKILL.md) gives the verdict.

## 0. Check the input

`STATE.md` must show spec and plan `passed` and current. Record the starting project commit in `implement/record.md`, using the [record template](assets/record-template.md). Leave unrelated work in the tree intact.

## 1. Plan the batches

- Group the IMP tasks (code plan) and the WORK tasks (test plan) into batches. A batch holds tasks that don't depend on each other and don't share files.
- Shared interfaces, contracts and fixtures go in the first batch.
- Every file in a batch has exactly one owner. When files can't be split cleanly, give the coders separate git worktrees and merge them yourself after the batch.

## 2. Dispatch

- **Separate authors.** Production code and tests always go to different coder sessions. A coder who wrote the production code for a behavior never writes or edits its tests, and the reverse.
- Test coders work from the cases and the planned interfaces, not from the production diff, so both kinds of coder can run in the same batch.
- Run up to 4 coders at a time, each in a fresh session, each with a handoff file (`implement/handoffs/<batch>-<n>.md`) containing:
  - its task or case IDs, with locators;
  - for test work, the category file's Defaults section;
  - the files it owns, the fixtures it may use but not edit, and its exclusions;
  - its completion condition.
- Wait for the whole batch, then integrate before starting the next one.

## 3. Integrate and check

- After each batch, inspect the diff against the assigned scope and update the record's Work table.
- A small mechanical adjustment that fits the plan is logged as a deviation.
- A behavior, design or coverage gap goes back to its owner ([routing](../feature/references/routing.md)). Continue the work it doesn't affect.
- Never change a correct assertion to make faulty behavior pass.
- Run the prescribed checks through `morovid-runner`, once per snapshot. Record each run in the Check runs table with an ID; reviewers cite these IDs. Reuse matching CI evidence where it exists. Keep failures, skips and environment problems distinct.

## 4. Submit and fix

1. Commit the record (`implement r<N>: submit`, with trailers including `Repo:`), then run [review](../review/SKILL.md).
2. On REVISE, route the findings:
   - A production finding goes to a fresh production coder.
   - A test finding goes to a fresh test coder.
   - An upstream finding goes to its stage.

   Each fix handoff gives the finding IDs, the record and the current diff. Batch independent fixes as in step 1, run the affected checks again, update the record, and resubmit.
3. Stop when `review` passes or escalates.

Nothing here authorizes a merge, release or deployment.
