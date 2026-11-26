---
name: plan
description: Turn a passed spec into a repository-grounded code plan and test plan, reviewed together by an independent reviewer. Ends with a passed plan for implementation. Doesn't write code or tests. Part of the feature workflow.
---

# Plan

This stage is part of the [feature workflow](../feature/SKILL.md). Follow its [principles](../feature/references/principles.md), [artifacts](../feature/references/artifacts.md), [delegation](../feature/references/delegation.md) and [review protocol](../feature/references/review-protocol.md). You are the lead: you coordinate and commit, and you don't write or review the plans.

**Roles:**
- The code planner is a `morovid-author`.
- The test planner is a separate `morovid-author` session.
- On L, one `morovid-designer` per test package writes the cases.
- A reviewer, chosen per [delegation](../feature/references/delegation.md#which-reviewer), reviews both plans together.

## 0. Check the input

`STATE.md` must show spec `passed` and current. Planners start from the spec's summary and ID catalogs, and read a record's full text only when they plan for it.

## 1. Code plan

Start a fresh `morovid-author` with a handoff file:
- Procedure: [code planning](references/code-planning.md).
- Template: [code plan template](assets/code-plan-template.md).
- Inputs: the spec pass tag with its catalog sections, and the project commit.
- Output: `plan/code.md`.

**S track:** one author writes `plan/plan.md` from the [S template](assets/plan-small-template.md), following both [code planning](references/code-planning.md) and [test planning](references/test-planning.md). Then go to step 3.

## 2. Test plan

Start a fresh `morovid-author`, not the code planner's session, with a handoff file:
- Procedure: [test planning](references/test-planning.md).
- Templates: [test plan template](assets/test-plan-template.md) and [category template](assets/category-template.md).
- Inputs: the spec's AC and DoD catalogs, and the DES/IMP lists from `plan/code.md`.
- Output: `plan/tests.md` and `plan/tests/<category>.md`.

Then, by track:
- **M:** the test planner writes the category files itself.
- **L, or more than about 30 cases:** the test planner writes one handoff per package (`plan/handoffs/TD<n>.md`) and returns. Start one `morovid-designer` per package, in parallel. Then start a fresh test-planner session to reconcile the cases with the traceability.

## 3. Submit and review

1. Commit and tag the submission (`plan r<N>: submit`).
2. Start one reviewer for both plans with a handoff file:
   - Rubric: [plan rubric](references/review-rubric.md).
   - Inputs: the round tag, the spec pass tag and the project commit.
   - Open findings and, on rechecks, the changes since the last round.
   - Output: `plan/review.md`.
3. Commit and tag the verdict, add the trailers, and append to `findings.jsonl`.

## 4. Act on the verdict

- **PASS:** apply the Editorial findings, make the pass commit, set plan `passed`, and hand off to [implement](../implement/SKILL.md).
- **REVISE:** route each finding by its `Owner`.
  - Code-planner findings go to a fresh code-planner session.
  - Test-planner findings go to a fresh test-planner session, plus designers only for packages whose cases must change.
  - If a code-plan fix changes DES or IMP records that the tests rely on, the test planner checks the affected cases in the same round.
  - Authors fill in the `Response:` lines. Then resubmit.
- **Spec gaps:** planners return them to you. Route them with [routing](../feature/references/routing.md); never fill a product gap by assumption.
- **BLOCKED or round limit:** follow the [feature workflow](../feature/SKILL.md#stop-and-report).
