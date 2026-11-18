# Production code quality rubric

For a full gate assess every row as Pass, Fail, Not assessed, or justified Not applicable. Add assignment-specific obligations with their authority; do not invent tooling mandates or thresholds.

| Check | Pass condition |
| --- | --- |
| CR1 — Authority and baseline | Exact current specification, reviewed plan, canonical decisions, repository snapshot/local changes, instructions, independence, and any mandated approvals are established; material drift is reconciled. |
| CR2 — Specification coverage | Each in-scope production obligation or dependency has inspected implementation evidence or a supported no-code-change disposition. Actual outcomes match authority. Security-control clauses are assigned to Security rather than independently scored in Code. |
| CR3 — Plan conformity and scope | Production DES/DEC/IMP commitments and completion conditions map to code/evidence; Security owns control commitments. Missing tasks and material deviations within Code's scope have owner-verified dispositions and required plan revalidation; reverse tracing finds no unsupported behavior. |
| CR4 — Logic, state, and failure behavior | Relevant paths implement required success, business rejection, failure, cancellation/retry, concurrency, recovery, and partial-effect behavior with coherent invariants. Check downstream behavior when a control denies an action; Security checks the denial rule and enforcement. |
| CR5 — Integration and compatibility | Relevant consumers, routes, registrations, events, configuration, persistence, migrations, cleanup, and transitions are connected. Required preserved behavior and compatibility remain intact; removals leave no required consumer broken. |
| CR6 — Applicable quality constraints | Implemented production code meets sourced performance, accessibility, reliability, and other applicable quality constraints within Code's scope; internal choices fit repository capabilities without unnecessary scope or unresolved material decisions. Security owns control assurance. |
| CR7 — Verification evidence | Meaningful completion checks and risk-relevant execution/inspection evidence support the conclusions for this snapshot. Failures, unavailable environments, and evidence limits are explicit; existing suite success is not substituted for requirement reconciliation. |
| CR8 — Review integrity | Findings, author responses, verified closure, exact versions, separate specification/plan conclusions, inspection limits, and required revalidation are recorded; no failed condition is hidden as later testing work. |

Compare material clauses, not counts or linked IDs alone. For a relevant flow ask whether a reachable input, state transition, consumer, or failure would violate the specification despite every planned task being marked complete. Cite the exact path and consequence for diagnosed defects; uncertainty without sufficient evidence remains Not assessed.
