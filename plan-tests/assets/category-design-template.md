# <Test type> Design: <assignment title>

Status: <In progress | Complete | Blocked>
Currency: <Current | Needs revalidation>
Design version: <round tag of the latest submission, or Not yet submitted; actual date if known>
Specialist: <actual agent identity; single assigned type and case prefix>
Contributors: <actual drafting author and evidence helper identities, assigned scope and evidence locators; or None>
Inputs: <assignment and supporting files, engineering specification and package review/index, production plan and matching readiness review, all at artifacts@sha; repo@sha (+diff hash for local changes). Optional inventory or revalidated legacy analysis is supporting evidence only.>
Assigned scope: <TD/TA/TC/TR/TB, FR/NFR/AC/DoD, DES/IMP or equivalent; intended seams, affected consumers and exclusions>

<!-- Adapt depth to the assignment. Remove unused rows/comments. Complete means the specialist finished its assigned design; it does not establish that the overall plan is Ready for test implementation. -->

## Context and observation boundary

Tools and conventions: <inspected configuration, fixtures, utilities, CI selection and locators>

Boundary: <observable behavior, intended entry points and seams; real versus simulated dependencies and why, including what cannot be observed; adjacent category ownership>

Evidence limits: <claim statuses and precise locators; unknown facts and design consequences>

## Cases

<!-- Use test-case-template.md for each TEST-<type>-<number>. Keep authoritative definitions here; elsewhere link case IDs and exact locators instead of repeating definitions. -->

## Existing-test impact

| TC / precise test locator | Actual asserted outcomes and limits | Action and reason | Case / retained obligation | Execution evidence |
| --- | --- | --- | --- | --- |
| <TC ID; file/test/symbol> | <FR/NFR/AC and boundary> | <Retain / Extend / Modify / Replace / Run for regression> | <case ID or check; preserve obligations of replacements> | <Not run, or actual command/result, revision, environment and limits> |

## Coverage and handoff

| Assigned package / spec obligation | Cases or existing verification | Disposition and rationale | Dependencies / adjacent owner |
| --- | --- | --- | --- |
| <TD/TA/TR and exact FR/NFR/AC/DoD obligation; preserve/remove where applicable> | <case IDs or exact check/inspection and evaluation basis for the spec-derived outcome> | <Designed / Existing check / Verification only / Blocked / Excluded with reason> | <TB or proposed concern; design versus later execution> |

Planned-path handoff: <for each assigned material DES/IMP logic, contract, transition or path and affected consumer, link the cases or exact existing checks/inspections for the plan's separate mapping. Point to how the check reaches the intended seam, what it observes, real vs. stubbed boundaries, and which plausible wrong path, use or bypass it detects; give evidence and limits for an indirect, inspection, or no-separate-check disposition, or name the blocker. Link case details rather than duplicating them.>

No-new-test decisions: <affected scope, precise existing checks/inspections, evaluation criteria and residual risk; link recorded evidence>

New risks or baseline discrepancies: <precise evidence/inference, trigger, failure, consequence, affected IDs, and proposed owning-stage correction; do not allocate competing TR/TD IDs>

Required testability changes: <existing TB links or proposed correction, why current facilities fail, owner/action and resolution evidence>

Uncovered/deferred obligations: <exact IDs, reason, consequence, required action; required acceptance cannot be silently waived>

Cross-category proposals: <overlap, missing boundary, shared fixtures and proposed ownership; test planner reconciles>

Revision handoff: <stable finding IDs linked to the review report and versioned author responses or links; changed sections/IDs, exact resubmitted version, and evidence or upstream action; reviewer records closure in the report>

Return summary: <output path/version, completed packages/cases, remaining blockers, evidence limits, and next action>
