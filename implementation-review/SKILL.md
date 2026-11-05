---
name: implementation-review
description: Independently review a production implementation plan against the current engineering specification and repository, return actionable findings to the planner, and recheck revisions. Use after implementation planning or when its inputs change; review plans without implementing code or designing test cases.
---

# Implementation Plan Review

Determine whether the proposed design and ordered tasks can implement the confirmed specification in the actual repository. Own `implementation-review.md`; the [implementation](../implementation/SKILL.md) skill owns the plan and responses. Challenge source claims and task coverage rather than accepting the planner's summaries as evidence.

## 1. Establish the review baseline

Read the full plan and linked design/evidence material, the engineering specification and spec-review package index, needed canonical catalogs and D/A/Q decisions, repository instructions and relevant code, and any prior review/responses. Record exact versions, repository revision/snapshot, relevant local changes, inspection boundary, author/reviewer identities, and independence evidence. Use a distinct reviewer invocation or agent. A same-author pass is a self-check and cannot establish independent readiness; report the missing review instead of claiming it occurred. Do not spawn agents unless the caller requests delegation.

Normal upstream inputs are `engineering-specification.md` and `review-report.md` showing **Ready for engineering** and **Current** for their included versions. Equivalent artifacts are valid; filenames and prior skill invocation are not gates. Confirm the plan covers that same authority and applicable baseline. A partial or stale specification verdict cannot support readiness. Require approval evidence only where mandated by the assignment.

If an input is missing, stale, contradictory, or inaccessible, continue useful independent checks while recording dependent checks as Not assessed. Do not infer intended behavior or waive a failed gate. Retain inherited specification and engineering IDs. Follow existing review conventions; otherwise use `REV-001`, continuing across rounds with supersession links when needed.

## 2. Assess the plan independently

Use [the review rubric](references/quality-rubric.md). For a full gate assess every row and any supplied assignment-specific condition. A requested limited review leaves out-of-scope checks **Not assessed** and cannot produce a full PASS. Use:

- **Pass:** inspected evidence establishes the condition for this version and boundary.
- **Fail:** a concrete defect violates the condition.
- **Not assessed:** evidence, access, independence, or scope prevents a conclusion.
- **Not applicable:** the condition has no bearing on this assignment, with a source-based reason.

Inspect relevant code and consumers directly. Preserve evidence claim status and limits; identify current facts separately from proposed contracts and assumptions. Walk important control/data/state flows and realistic failure counterexamples, without writing test cases. Reconcile the complete current requirement/AC/B/I/DoD catalogs, including no-code-change dispositions, rather than sampling linked IDs or trusting a coverage table.

For each actionable defect record finding ID, severity, failed check, precise source/plan/code evidence, affected upstream/DES/DEC/IMP IDs, realistic consequence, owning stage, requested correction, and observable closure condition. Use **Blocking** for a failed mandatory gate or material unresolved choice, **Major** for a material design/task defect, and **Minor** for bounded follow-up that cannot change required behavior, feasibility, acceptance, or mandatory gate results. Major findings prevent PASS. Missing evidence is an unassessed condition, not an invented defect. Avoid preference-only changes.

Route repository/design/task defects to the planner. Route objective/scope to spec-intake, baseline/impact/behavior/decisions to spec-discovery, requirements/AC/DoD to spec-refinement, and assembly/readiness to spec-review. Describe exact affected records and unblock evidence; do not silently rewrite the specification or close its RV/RW findings.

## 3. Return findings and recheck revisions

Use [the review template](assets/implementation-review-template.md). Send the planner the report path/round, exact reviewed plan version, actionable findings, closure conditions, and next owner. Write only the review and its history; the planner owns technical changes and a per-finding response in the plan. A review never fixes and then independently approves its own substantive design edits.

On resubmission, compare exact versions and responses. Verify each claimed fix against evidence and closure conditions, inspect changed dependencies for regressions, and confirm retained checks still apply. Keep finding IDs, dispositions, and closure evidence. Reopen findings when necessary; a planner's response is not closure. Broaden review if the change boundary is unclear. Record disagreements and their evidence instead of repeatedly requesting the same unsupported correction.

Maintain one attempt history across rounds/agents/sessions. Count consecutive unsuccessful reviewer rechecks of the same blocking finding without material progress; exclude the initial review and author self-checks. Material progress satisfies a closure condition or establishes evidence supporting a different correction. Renaming/rewording or new versions/sessions do not reset the count. After two such rechecks, or sooner when no useful corrective action exists, stop the affected automatic loop and return BLOCKED with attempted changes, persistent condition, owner, and exact unblock action. Continue independent checks. Resume only after documenting new evidence, a decision, access, or another change that addresses the blocker.

## 4. Decide and hand off

Use these verdicts consistently:

- **PASS:** full independent review of the exact plan/source/repository baseline; all applicable mandatory checks pass, remaining checks have justified non-applicability, and no open Blocking/Major findings or material choices remain. Minor follow-up must be explicitly dispositioned with rationale and any required authority.
- **REVISE:** diagnosed plan defects remain correctable with available authority/evidence; return the concrete corrections to the planner.
- **BLOCKED:** a required source, decision, access, independent check, or stalled correction prevents completion. Include known defects alongside missing evidence. A completed limited review records its boundary and withholds PASS; use REVISE for actionable defects, otherwise BLOCKED for the unassessed full gate.

Track **Current** / **Needs revalidation** separately from verdicts. Source, relevant repository, or technical plan changes invalidate affected conclusions until rechecked; historical verdicts remain version-bound. Record affected IDs/versions, downstream handoffs, and required revalidation even when those files cannot be updated. Restore Current only after applicable checks pass.

Save beside the plan unless the caller specifies another destination. Inspect existing files to preserve assignment identity, stable findings, and round history. The review indexes exact reviewed inputs, check results, coverage reconciliation, finding dispositions, shared attempt history, verdict, currency, and next action. Remove output placeholders.

Return review path/round, reviewed plan version, verdict/currency, and blockers or next action. A Current full PASS lets the planner mark that exact plan **Ready for implementation**; a pending or same-author review does not. This verdict establishes plan readiness, not completed coding, testing, or delivery acceptance.
