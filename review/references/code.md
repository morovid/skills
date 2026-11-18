# Code phase — production behavior and plan conformity

Coordinate the independent production-code review using the [shared procedure](coordinator.md), [code rubric](code-rubric.md), and [code report template](../assets/code-review-template.md). Default finding IDs: `CR-001`. Keep the specification and plan conclusions separate.

## Assign and verify the review

- **Specification conformity:** trace applicable production obligations to actual outcomes or evidenced no-code-change dispositions. Follow consumers, registrations, persistence, transitions, failure paths, and preserved behavior. [Security](security.md) owns whether controls enforce security obligations, including required permission denials; link those clauses to its assessment rather than repeating control verification. Code still checks distinct integration behavior such as correct propagation of a denial and consistency of business state after rejection. A Code-only verdict excludes control assurance and does not require the Security report to complete the Code checks.
- **Plan conformity:** trace applicable production DES/DEC/IMP commitments to code and evidence; reverse-check for unsupported changes. Route security-control commitments to Security while checking how they integrate into production flows. A code/plan match cannot excuse a specification violation. Material deviations need planner and plan reviewer disposition; no full PASS while a material deviation within Code's scope remains unresolved.
- Use focused existing tests, builds, and static checks where authorized and useful. Passing suites don't prove specification coverage; reading code doesn't establish runtime success. Note uninspected boundaries and use **Not assessed** when a required conclusion lacks execution evidence.

## Route and hand off

Send implementation defects to the code author, design/task defects to [plan-code](../../plan-code/SKILL.md), and scope or behavior ambiguity to the owning phase of [spec](../../spec/SKILL.md). Send package/readiness discrepancies to the spec review phase. Route planned test coverage/design gaps to [plan-tests](../../plan-tests/SKILL.md), implemented-test concerns to the [Tests phase](tests.md), and security concerns to the [Security phase](security.md). A Code PASS is not test adequacy or release acceptance.
