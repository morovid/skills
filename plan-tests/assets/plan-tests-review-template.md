# Test Plan Review: <assignment title>

## Current round: <Round N of 5 (plus any human-authorized extension) and report version>

Verdict: <PASS / REVISE / BLOCKED>
Currency: <Current | Needs revalidation>
Reviewed baseline: <round tag and artifacts@sha (plan, designs, spec package, production plan and its review); repo@sha (+diff hash for local changes)>
Reviewer and independence: <actual reviewer agent/session and evidence of separation from the lead, authors, author helpers, and all prior reviewer sessions for this plan>
Scope and limits: <checked scope, repository/test/CI instructions and applicable approvals, inspected vs run, and changed boundary if rechecking>

<!-- Record one round per submitted baseline, with a fresh independent reviewer. This report owns findings, round verdicts, and recheck history across revisions. Remove placeholders/comments in completed output. -->

## Assessment

<!-- The first review covers the whole plan. Rechecks target changes and their effects, including affected findings. Carry forward only checks demonstrated unchanged: cite the prior result and evidence and show why the check and its inputs still apply. A full PASS requires current passing results for all applicable rubric checks and assignment conditions. Include reasons for Not applicable and exact unblock conditions for Not assessed. -->

| Check | Result | Independent evidence or exact remaining gap |
| --- | --- | --- |
| Authority, baseline, and independence | <Pass / Fail / Not assessed / Not applicable> | <source/review versions, roles, approvals, and discrepancies> |
| Specification fidelity | <result> | <exact required outcomes, sourced expected results and verification dispositions; omissions/unsupported assertions> |
| Planned implementation-path adequacy | <result> | <DES/IMP, material logic and consumers, paths actually reached and meaningful observations, real vs simulated; evidence-based dispositions> |
| Evidence, risks, and sufficiency | <result> | <assertions/selection inspected, execution status and limits, classifications, concrete existing checks or inspections, material risks> |
| Design and traceability | <result> | <specialist completions/omissions, reverse mapping, preserved assertions and overlap rationale> |
| Observable and implementable | <result> | <case/task locators, determinism, order, design vs later prerequisites> |
| Closure and currency | <result> | <prior findings and exact version rechecks, remaining bounded follow-up> |
| Applicable assignment condition | <result> | <source, evidence or missing prerequisite; add rows as needed> |

## Findings

| Finding ID / severity | Failed or unassessed check / affected IDs | Exact evidence, claim status, limits and consequence | Owner / required action and observable closure condition | Current disposition |
| --- | --- | --- | --- | --- |
| <assignment convention, otherwise DR-1; Blocking / Major / Minor> | <check and records> | <source/case/task and repository locators> | <owning phase; exact fix or unblock action> | <Open / Corrected / Blocked / justified follow-up; round/recheck pointer> |

## Round and recheck history

Earlier rounds: <round tag, reviewer session, scope, and verdict for each prior round; their content is in the artifact repository history>

| Finding / attempt | Author response / changed versions and IDs | Independent recheck and closure evidence | Remaining action / consecutive no-progress count |
| --- | --- | --- | --- |
| <finding/round; initial review not a recheck> | <link to versioned fix, disagreement, or upstream return; changed IDs and versions> | <actual evidence and result; reviewer identity> | <open/reopened/blocked/closed; owner and action> |

## Verdict and handoff

Verdict rationale: <why the current result follows from exact scope and evidence; only a Current full PASS on this exact baseline makes the plan Ready for test implementation>

Required unblock actions or bounded follow-up: <exact actions/owners and affected IDs; or None>

Next handoff: <exact plan and supporting paths/versions; fresh planner revision and resubmission for REVISE, unblock owner for BLOCKED, escalation to a human if round 5 ended without PASS, or first work item on a Current full PASS; downstream revalidation if affected>
