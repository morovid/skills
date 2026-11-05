# Production code quality rubric

For a full gate assess every row as Pass, Fail, Not assessed, or justified Not applicable. Add assignment-specific obligations with their authority; do not invent tooling mandates or thresholds.

| Check | Pass condition |
| --- | --- |
| CR1 — Authority and baseline | Exact current specification, reviewed plan, canonical decisions, repository snapshot/local changes, instructions, independence, and any mandated approvals are established; material drift is reconciled. |
| CR2 — Specification coverage | Every current FR/NFR, material AC outcome, confirmed B Add/Change/Remove/Preserve obligation, significant I dependency, and applicable DoD condition has inspected implementation evidence or a supported no-code-change disposition. Actual outcomes match their authority. |
| CR3 — Plan conformity and scope | Applicable DES/DEC/IMP commitments and completion conditions map to code/evidence. Missing tasks and material deviations have owner-verified dispositions and required plan revalidation; reverse tracing finds no unsupported behavior. |
| CR4 — Logic, state, and failure behavior | Relevant control/data/state paths implement required success, rejection, failure, cancellation/retry, concurrency, recovery, permissions, and partial-effect behavior with coherent ownership and invariants. |
| CR5 — Integration and compatibility | Relevant consumers, routes, registrations, events, configuration, persistence, migrations, cleanup, and transitions are connected. Required preserved behavior and compatibility remain intact; removals leave no required consumer broken. |
| CR6 — Applicable quality constraints | Implemented code meets sourced security, performance, accessibility, reliability, and other quality constraints; internal choices fit actual repository capabilities without unnecessary scope or unresolved material decisions. |
| CR7 — Verification evidence | Meaningful completion checks and risk-relevant execution/inspection evidence support the conclusions for this snapshot. Failures, unavailable environments, and evidence limits are explicit; existing suite success is not substituted for requirement reconciliation. |
| CR8 — Review integrity | Findings, author responses, verified closure, exact versions, separate specification/plan conclusions, inspection limits, and required revalidation are recorded; no failed condition is hidden as later testing work. |

Compare material clauses, not counts or linked IDs alone. For a relevant flow ask whether a reachable input, state transition, consumer, or failure would violate the specification despite every planned task being marked complete. Cite the exact path and consequence for diagnosed defects; uncertainty without sufficient evidence remains Not assessed.
