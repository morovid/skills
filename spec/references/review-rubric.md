# Spec review rubric

Use this with the [review protocol](../../feature/references/review-protocol.md). Finding prefix: `spec-F`.

| Check | Passes when | Typical owner |
| --- | --- | --- |
| S1 Intent and scope | Requirements match the requester's intent in the brief. Nothing expands scope or ignores an exclusion, and success measures keep their meaning. | spec/intake |
| S2 Decisions | Every material choice has authority in the register. No choice is disguised as an assumption, and superseded decisions are marked. | spec/discovery |
| S3 Evidence and impacts | Material baseline claims have locators and are verified (or say why not). Significant impacts and consumers have dispositions, and the outcomes are feasible within known constraints. | spec/discovery |
| S4 Flows and state | The relevant normal, alternative, denial, failure and recovery flows exist. Valid and invalid transitions, data effects and asynchronous completion are coherent. | spec/requirements, or spec/discovery if the behavior is undecided |
| S5 Requirements | Each requirement is in scope, sourced, precise and verifiable. None is Incomplete. Each NFR has a sourced target and conditions. | spec/requirements |
| S6 Acceptance | Each requirement's material outcomes have objective AC, including denials, no-change effects and preserved rules. The Definition of Done can be evaluated. | spec/requirements |
| S7 Traceability and consistency | Every B, including Remove and Preserve, reaches an FR and an AC. Nothing is orphaned, and no two records or files contradict each other. | spec/requirements |
| S8 Usable handoff | The summary orients a planner, links resolve, and each file respects the size cap. | spec/requirements |

**Focus:** look for an AC that is linked but doesn't test the requirement's hard partition. For example, an AC that checks eligibility before a deadline but not at or after it fails S6. The fix is better acceptance coverage, not a new rule. If the rule itself was never established, the owner is discovery, not requirements.
