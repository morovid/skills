# Tests phase — implemented tests and assertion fidelity

Coordinate the independent implemented-test review using the [shared procedure](coordinator.md), [test rubric](tests-rubric.md), and [test report template](../assets/test-review-template.md). Default finding IDs: `TREV-001`. Preserve TA/TC/TR/TD/TB, case and test-work IDs; `TC` denotes existing coverage.

## Establish the additional baseline

The test plan must be **Ready for test implementation** and **Current**, with a matching full independent **PASS** for its exact version, linked category designs, and applicable baseline. Earlier diagnostic analysis is not the plan verdict. Account for interfaces, tests, fixtures, runner/CI, test environment and reference baselines. Material changes to contracts, expected outcomes, coverage dispositions or observation boundaries require owner revalidation.

## Assign and verify the review

- **Specification conformity:** trace each in-scope required outcome to actual assertions, existing checks or justified inspection/no-new-test dispositions. Verify the oracle against authority, not current product behavior. Check intended acceptance, rejection, preservation and removal. Use reviewed coverage dispositions to set scope, not to demand a new test per requirement. Flag omitted outcomes and risks to the planner; require prescribed evidence even when no new test is needed.
- **Test-plan conformity:** trace designed cases, material risks, existing-test actions, verification-only actions, setup and execution obligations to actual implementation/evidence or owner-dispositioned deviations. Link the detailed category cases and reverse-check tests for unsupported product expectations. Verify **Retain**, **Extend**, **Modify**, **Replace**, and **Run for regression** by outcome and observation boundary; test counts don't establish equivalence. Require independently approved visual references only when mandated; don't approve baselines in this phase.
- Inspect actual bodies, assertions, helpers, fixtures, mocks, setup/cleanup, production boundaries, and discovery/configuration. Check whether a plausible wrong result would trigger the intended assertion: look for wrong observation boundaries, fixtures bypassing paths, overmocking, tautologies, swallowed failures, missing awaits, ineffective negative assertions, disabled tests, and isolation/determinism gaps. Don't require mutation tooling or artificial failures universally.
- Use authorized, relevant existing checks and configured suites where needed. Verify actual discovery, selection, skips and failures. Separate test, product, environment and unresolved failures; a passing run establishes only what ran. Static inspection is not runtime evidence. Never weaken assertions, change fixtures or regenerate snapshots to obtain PASS.

## Route and hand off

Send implementation defects to test authors and design/coverage/oracle/boundary gaps to [plan-tests](../../plan-tests/SKILL.md). Send product defects to the production author and [Code phase](code.md); send production design infeasibility to [plan-code](../../plan-code/SKILL.md) and behavioral ambiguity to the owning [spec](../../spec/SKILL.md) phase. Preserve correct assertions that expose a product defect; a known material product failure prevents full Tests PASS without making the test itself defective. Keep specification, test-plan, and execution conclusions distinct. Tests PASS does not replace Code review or release acceptance.
