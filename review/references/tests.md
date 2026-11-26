# Tests review: implemented tests and assertion fidelity

Use this with the [review protocol](../../feature/references/review-protocol.md). Finding prefix: `tests-F`. The plan review already established that the test plan is sufficient; this review checks that the implemented tests match it and actually work.

| Check | Passes when |
| --- | --- |
| T1 Author separation | Per the record, no test was written or edited by the coder who wrote the production code it checks. |
| T2 Plan conformity | Every planned case, existing-test action (Retain, Extend, Modify, Replace, Run for regression) and WORK task is implemented, or has a logged deviation that the planner accepted. A replacement keeps the required assertions. |
| T3 Oracle fidelity | Assertions check the spec's expected results, including required no-change effects, not the current behavior of the product. |
| T4 Effectiveness | A plausible wrong implementation would fail the assertion. Look for wrong observation boundaries, over-mocking, tautologies, swallowed errors, missing awaits, disabled tests and weak negative assertions. |
| T5 Determinism and isolation | Clock, randomness, ordering, data isolation and cleanup are controlled as the category Defaults specify. |
| T6 Execution | Runs for this snapshot show the tests are selected (discovery, filters, CI), pass, and skip nothing unexpected. Test, product and environment failures are kept distinct. |

**Focus:**
- Read each case together with its category file's Defaults.
- Give each category file to a fresh scout with a checklist, for example: "for each case, find the implementing test and report whether its assertion matches Expect". Then verify what the scout flags.
- Never weaken assertions, change fixtures or regenerate snapshots to reach a PASS.
- A correct test that exposes a product defect isn't a test defect; send that to Code.

**Owners:**
- `implement/test-coder` for test defects;
- `plan/test-planner` for coverage, oracle or boundary gaps;
- `implement/production-coder` for product defects that a test exposes.
