# Code review: production behavior and plan conformity

Use this with the [review protocol](../../feature/references/review-protocol.md). Finding prefix: `code-F`.

| Check | Passes when |
| --- | --- |
| C1 Spec conformity | Each in-scope production obligation (FR, NFR, AC, B, including Preserve and Remove) has implementing code whose actual outcome matches the spec, or an evidenced "no code change". |
| C2 Plan conformity | DES, DEC and IMP commitments are implemented. Deviations are logged in the record and don't change behavior or contracts. No unsupported changes were made. |
| C3 Logic, state and failure | The success, rejection, failure, retry, concurrency, recovery and partial-effect paths behave as required. Invariants hold. |
| C4 Integration and compatibility | Consumers, routes, registrations, events, configuration, persistence and migrations are connected. Preserved behavior and compatibility are intact, and removals strand no consumer. |
| C5 Quality constraints | Sourced performance, accessibility and reliability constraints within production code are met, and the code fits the repository's patterns. |
| C6 Evidence | Completion and regression runs for this snapshot support the conclusions. Failures and unrun checks are explicit. |

**Focus:**
- Follow one risky flow through the diff, from entry point to persisted effect and consumers. Ask whether a reachable input, state or failure would violate the spec even though every task is marked done.
- A passing suite doesn't prove spec coverage, and reading code doesn't prove that it runs correctly.
- When Security also runs, it owns permission-rule enforcement. Code still checks how a denial propagates and that the business state stays consistent.

**Owners:** `implement/production-coder` for defects, `plan/code-planner` for design gaps, and spec stages for ambiguity. Send test concerns to Tests.
