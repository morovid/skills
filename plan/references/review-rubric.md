# Plan review rubric

Use this with the [review protocol](../../feature/references/review-protocol.md). Finding prefix: `plan-F`. One review covers the code plan and the test plan.

| Check | Passes when | Typical owner |
| --- | --- | --- |
| P1 Grounding | Existing paths, symbols, consumers and capabilities the plan relies on are verified; proposed ones are marked. | plan/code-planner |
| P2 Code coverage | Every FR and NFR, material AC, B (including Remove and Preserve), significant I and applicable DoD reaches DES and IMP, or has an evidenced "no code change". No unsupported work. | plan/code-planner |
| P3 Design | The flows, state, ownership, failure handling and concurrency are coherent and implement the spec. Callers, consumers, configuration and persistence stay connected and compatible, and the design fits the repository's patterns. | plan/code-planner |
| P4 Tasks | Targets are actionable and done conditions observable. The order is acyclic, intermediate states are coherent, and migration or rollout work is explicit where needed. | plan/code-planner |
| P5 Test fidelity | Every required outcome has a case, existing check or inspection whose expected result is sourced from the spec, and which would fail on a material violation. | plan/test-planner |
| P6 Change paths | Material IMP and DES changes and risky paths are reached by a case whose real versus simulated boundary actually observes the effect. Existing checks relied on were inspected. | plan/test-planner |
| P7 Test design | Cases are deterministic, observable and implementable. Categories are justified, nothing is duplicated without reason, and replacements keep the required assertions. The work order fits the code plan. | plan/test-planner |
| P8 Consistency | Each fact has one home. The code plan, test plan and category files don't contradict each other or the spec. | owner of the contradicting file |

**Focus:** walk one risky flow from the spec through the DES and IMP records to the cases. Ask whether an implementation that follows every task could still miss a consumer, lose preserved behavior, or pass every case while violating an AC. One example is a response check with storage mocked, when the AC requires the stored value. Read the plans and cases by section, and give per-file case checks to fresh scouts.
