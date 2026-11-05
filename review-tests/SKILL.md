---
name: review-tests
description: Review implemented test code against the specification, test designs, and test implementation plan, assess assertion and coverage fidelity, and verify corrections. Use after tests are implemented or their inputs change; does not design a test suite or implement fixes.
---

# Implemented Test Review

Determine whether actual tests implement the intended verification and establish outcomes required by the specification. Own `test-review.md`; test authors own fixes, test-design owns cases and the test implementation plan, and test-analysis owns coverage recommendations. [review-code](../review-code/SKILL.md) separately assesses production-code conformity.

## 1. Establish the baseline

Read the current engineering specification and review package index, relevant canonical catalogs and D/A/Q decisions, implementation plan and review, test analysis, category designs, test implementation plan and design review, relevant tests/fixtures/configuration, production interfaces under test, repository instructions, and prior test review/responses. Equivalent artifacts suffice when they establish the same authority and detail; filenames and prior skill invocation are not gates.

Record exact versions, repository revision or reproducible snapshot, relevant local changes, author/reviewer identities, inspection boundary, and execution environment. Confirm specification **Ready for engineering**, implementation plan **Ready for implementation**, analysis **Ready for test design**, and test plan **Ready for test implementation**, with matching current review evidence. Reconcile the actual implementation against these inputs; expected coding changes alone are not stale design, but changed contracts, expected outcomes, coverage decisions, or observation boundaries require owner revalidation. Require approvals only where the assignment mandates them.

Use a distinct reviewer invocation or agent for independent PASS. Same-author work is a self-check; do not spawn agents unless the caller requests delegation. Missing source, authority, access, currency, or independence leaves dependent checks **Not assessed** while useful inspection continues. Do not invent expected behavior or treat existing implementation as the oracle.

Preserve specification, plan, TA/TC/TR/TD/TB, case, and test-work IDs. `TC` retains its existing-coverage meaning. Follow assignment finding conventions; otherwise use `TREV-001` with stable IDs and supersession links. Record precise evidence locators and **Observed**, **Supported**, **Reported**, **Inferred**, or **Unknown** claim status and limits.

## 2. Inspect coverage and assertion fidelity

Apply [the quality rubric](references/quality-rubric.md). Inspect actual test bodies, assertions, helpers, fixtures, mocks, setup/cleanup, discovery/configuration, and relevant production boundaries. A case ID, filename, coverage percentage, task checkbox, or passing suite alone cannot establish that an outcome is tested.

Keep two separate assessments:

- **Specification conformity:** trace current in-scope requirements and material AC outcomes to assertions, existing checks, or justified inspection/no-new-test dispositions. Check the oracle directly against authority. Verify both intended acceptance and relevant rejection/preservation/removal outcomes.
- **Test-plan conformity:** reconcile every designed case, material risk, existing-test action, verification-only action, setup task, and execution obligation with actual code/evidence or an owner-dispositioned deviation. Retain links to detailed category cases rather than replacing them with plan summaries. Reverse-check tests for unsupported product expectations.

Use analysis to establish this assignment's testing scope, not to demand a new test for every requirement. Reassess adequacy when direct specification inspection reveals an omitted outcome or risk; route the gap to analysis/design rather than accepting the omission or silently creating new cases. A justified no-new-test outcome still needs the specified existing-check or inspection evidence.

Check whether assertions could pass under a plausible violation of the intended behavior. Examine wrong observation boundaries, fixtures that bypass the relevant path, overmocking, tautological expectations, swallowed failures, missing awaits, ineffective negative checks, disabled/discovered tests, isolation, cleanup, and deterministic controls where relevant. Do not require mutation tooling or artificial failures universally; use a bounded counterexample or existing capability when needed to establish sensitivity.

For Retain/Extend/Modify/Replace/Run for regression actions verify actual retained outcomes; replacements must preserve still-required assertions or link to an approved coverage disposition. Reconcile deduplication by outcome and observation boundary. Test count equality is not coverage equality. Review visual references against independent approval evidence only when required; do not approve generated baselines yourself.

Run focused existing checks and relevant configured suites within the authorized environment where needed to support conclusions. Record commands, actual discovery/selection, snapshot, environment, results, failures/skips, and limits. Passing results establish only what actually ran. Static inspection does not prove a pass; missing runtime evidence is Not assessed where needed. Classify diagnosed failures as test, product, environment, or unresolved with supporting evidence. Do not weaken assertions, change fixtures/configuration, alter code, or regenerate snapshots to obtain PASS.

## 3. Return findings and verify revisions

Use [the report template](assets/test-review-template.md). Save beside the test implementation plan unless the caller or assignment specifies another destination. Inspect existing reports to preserve assignment identity, findings, round history, and version-bound verdicts. Write only the review; do not implement fixes or modify upstream authority. Remove output placeholders.

Each actionable finding needs stable ID, severity, failed check, exact spec/design/plan/test evidence, affected IDs, realistic missed failure or false failure, owner, requested correction, and observable closure condition. **Blocking** covers failed mandatory gates or unresolved material authority/choices; **Major** covers material coverage/assertion/execution defects; **Minor** covers bounded follow-up that cannot change required outcomes, acceptance, or mandatory gate results. Missing evidence is an unassessed condition, not an invented defect; avoid preference-only findings.

Route test implementation errors to the test author; case/oracle/boundary/task defects to [test-design](../test-design/SKILL.md); scope/risk/existing-coverage gaps to [test-analysis](../test-analysis/SKILL.md); product defects to the code author and review-code; production design infeasibility to implementation and its reviewer; behavioral ambiguity to the owning specification stage. A correct test exposing a production defect should retain its assertion, with closure routed to production. A known material product failure prevents a full PASS while the report makes clear the test itself is correct. Do not close another stage's findings or rewrite its decisions.

On resubmission inspect exact source and code changes, author responses, closure evidence, and affected regressions. Reuse unchanged evidence only with reasons and limits. An author's claim is not closure. Track one attempt history across rounds/sessions: after two consecutive unsuccessful reviewer rechecks of the same blocking finding without material progress, stop that loop and return BLOCKED with attempts, owner, and exact unblock action. Exclude the initial review and self-checks; renaming/version changes do not reset the count. Material progress meets a closure condition or establishes evidence for a different correction. Stop sooner if no useful correction exists, continue independent checks, and resume only after a documented change addresses the blocker.

## 4. Decide and hand off

Use **Pass**, **Fail**, **Not assessed**, or source-justified **Not applicable** per rubric condition. Every applicable condition is mandatory for a full gate; limited reviews withhold full PASS.

- **PASS:** full independent review of the exact test/source/product snapshot; all applicable conditions pass, non-applicability is justified, no open Blocking/Major findings or material design/coverage discrepancies remain, and required execution evidence supports the result. Minor follow-up needs explicit rationale and authority where required.
- **REVISE:** diagnosed test, design, coverage, or product defects remain correctable with available authority/evidence; route each to its owner.
- **BLOCKED:** missing evidence, decisions, access, independence, or a stalled correction prevents completion. Include known defects alongside missing checks. For a limited review use REVISE for diagnosed defects, otherwise BLOCKED for the unassessed full gate.

Track **Current** / **Needs revalidation** separately. Relevant specification, analysis, design, plan, production code, tests, fixtures, runner, environment, or baseline changes invalidate affected conclusions until rechecked. Record affected versions/IDs and downstream revalidation even when artifacts cannot be updated. Historical PASS remains bound to its reviewed snapshot.

Return report path/round, snapshot, verdict/currency, separate specification and test-plan conclusions, execution status, and next owner/action. PASS establishes reviewed test adequacy and fidelity within the declared scope; it does not replace production-code review or release acceptance.
