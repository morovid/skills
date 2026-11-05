# <Test type> Design: <assignment title>

Status: <In progress | Complete | Blocked>
Currency: <Current | Needs revalidation>
Design version: <version and actual date if known>
Specialist: <agent identity; single assigned type and case prefix>
Inputs: <analysis/specification/plan locations and versions; repository revision and relevant local changes>
Assigned scope: <TD/TA/TC/TR/TB, FR/NFR/AC, plan IDs; exact boundaries and exclusions>

<!-- Adapt depth to the assignment. Remove unused rows/comments. Complete means the specialist finished its assigned design; coordinator review determines overall readiness. -->

## Context and observation boundary

Tools and conventions: <inspected configuration, fixtures, utilities, CI selection and locators>

Boundary: <observable behavior; real versus simulated dependencies and why; adjacent category ownership>

Evidence limits: <claim statuses and precise locators; unknown facts and design consequences>

## Cases

<!-- Repeat assets/test-case-template.md for each case. Keep definitions here and link them from the consolidated plan. -->

## Existing-test impact

| TC / precise test locator | Actual asserted outcomes and limits | Action and reason | Case / retained obligation | Execution evidence |
| --- | --- | --- | --- | --- |
| <TC ID; file/test/symbol> | <FR/NFR/AC and boundary> | <Retain / Extend / Modify / Replace / Run for regression> | <case ID or check; preserve obligations of replacements> | <Not run, or actual command/result, revision, environment and limits> |

## Coverage and handoff

| Assigned package / obligation | Cases or existing verification | Disposition and rationale | Dependencies / adjacent owner |
| --- | --- | --- | --- |
| <TD/TA/TR/FR/NFR/AC or applicable DoD> | <case IDs or exact check/inspection and evaluation basis> | <Designed / Existing check / Verification only / Blocked / Excluded with reason> | <TB or proposed concern; design versus later execution> |

New risks or analysis discrepancies: <precise evidence/inference, trigger, failure, consequence, affected IDs, and proposed owning-stage correction; do not allocate competing TR/TD IDs>

Required testability changes: <existing TB links or proposed correction, why current facilities fail, owner/action and resolution evidence>

Uncovered/deferred obligations: <exact IDs, reason, consequence, required action; required acceptance cannot be silently waived>

Cross-category proposals: <overlap, missing boundary, shared fixtures and proposed ownership; coordinator reconciles>

Return summary: <output location, completed packages/cases, remaining blockers, evidence limits, and next action>
