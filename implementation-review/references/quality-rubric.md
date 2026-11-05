# Implementation plan quality rubric

For a full gate, assess every row as Pass, Fail, Not assessed, or justified Not applicable. Each applicable row is mandatory. Scale inspection depth to concrete change risk; do not invent product or process requirements. Extend checks with supplied assignment obligations.

| Check | Pass condition | Typical correction owner |
| --- | --- | --- |
| IP1 — Authority and currency | The exact specification package is Ready for engineering and Current; canonical decisions, reviewed catalogs, plan inputs, repository drift, and any mandated approvals are reconciled. | Planner for baseline records; owning specification stage for substantive gaps |
| IP2 — Repository grounding | Material existing paths, symbols, interfaces, capabilities, and consumers are supported by inspected evidence with limits; proposed targets and assumptions are explicit. | Planner: focused exploration |
| IP3 — Complete coverage and scope | Every current FR/NFR, material AC outcome, B Add/Change/Remove/Preserve obligation, significant I dependency, and applicable DoD condition reaches design/tasks or an evidenced No code change disposition. Reverse links justify all planned work; no unsupported behavior or dropped clause. | Planner; spec-refinement/discovery for source ambiguity |
| IP4 — Logic, state, and ownership | Relevant success, rejection, failure, retry/cancel, concurrency, recovery, and partial-effect flows have coherent contracts, invariants, permissions, and data ownership implementing confirmed behavior. | Planner: technical design; specification owner for missing behavior |
| IP5 — Integration and compatibility | Direct and relevant indirect consumers, registrations, routes, composition, events, caches, configuration, persistence, removals, and preserved behavior remain connected and compatible under the proposed change. | Planner: design and tasks |
| IP6 — Feasibility and proportionality | Proposed architecture/contracts fit installed capabilities and supplied constraints, with grounded alternatives/tradeoffs and no unresolved material technical choice or unnecessary mandatory work. | Planner: design; upstream owner for conflicting constraints |
| IP7 — Execution and transitions | Tasks have actionable targets/instructions, coverage links, completion conditions, acyclic dependencies, and coherent intermediate states. Applicable migration/backfill/deployment/rollback work and prerequisites are explicit and feasible. | Planner: tasks and rollout design |
| IP8 — Handoff and review integrity | Exact versions, author/reviewer independence, prior findings, responses/closure evidence, and revalidation are recorded. Testability concerns and later prerequisites are bounded; proposed commands/results are distinguished. No blocker is hidden as downstream test design or implementation work. | Planner for handoff; reviewer for review records |

## Coverage and counterexamples

Compare the actual catalogs to the plan, not just counts. Read material AC clauses, Remove/Preserve obligations, dependency dispositions, and no-code-change evidence. Record uninspected portions rather than treating them as covered. A review can reuse valid evidence for demonstrably unchanged content, with its original locator and limits.

Trace a relevant flow through existing and proposed components. Ask whether an implementation following the instructions could omit a consumer, violate an ownership rule, lose preserved behavior, leave an incompatible intermediate state, or appear complete while missing an acceptance outcome. A plausible failure identifies the missing design/task obligation; it does not authorize inventing a new requirement or a detailed test suite.

Findings need precise evidence and closure conditions, not generic requests for more rigor. A mandatory failure remains blocking even if risk is described as accepted. Minor follow-up is acceptable only when it cannot change a mandatory gate conclusion.
