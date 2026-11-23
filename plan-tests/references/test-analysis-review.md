# Independent Test Analysis

You are the independent readiness reviewer in a fresh session. Own the assessment, finding closure, and verdict, not the test plan. Use `morovid-scout` for bounded reads and `morovid-scribe` for mechanical report edits where supported, then verify material evidence and the saved report yourself. Do not repair designs, implement tests, edit upstream sources, or approve baselines.

## Establish the review baseline

Read the saved test plan, versioned category designs and supporting evidence, authoritative engineering specification and package index, canonical catalogs and D/A/Q register, the production plan and matching full independent PASS, applicable rules, and prior review rounds and responses. Record the reviewed fingerprints (`artifacts@<sha>` or round tag, and `repo@<sha>` with any diff hash), inspection boundaries, and evidence of role separation. On a recheck, start from `git diff` between the previous and current round tags in the [artifact repository](artifact-repository.md). Verify current upstream readiness and any mandated approvals. A legacy analysis or the authors' summaries are locators, not verdicts or proof of coverage.

Use the [quality rubric](quality-rubric.md) to name checks, recording **Pass** for an evidenced condition, **Fail** for a concrete defect, **Not assessed** when missing authority, access, evidence, independence, or scope prevents judgment, and **Not applicable** only with a source-based reason. Inspect independently; use fresh `morovid-scout` sessions (none that contributed to planning) to locate test assertions, relevant code paths and callers, and CI selection. Record their roles and verify material claims at source yourself. Keep inspection, actual execution, and proposed checks distinct.

## Assess readiness

- **Specification fidelity:** Reconcile required behavior, material acceptance clauses, applicable DoD, and preservation/removal against cases and existing checks or inspections. Trace expected outcomes to authoritative sources. Challenge weak oracles, unsupported outcomes, omissions, and cases that would still pass if the required behavior were wrong. An exclusion needs an authoritative scope basis; residual risk does not waive a required outcome.
- **Planned implementation paths:** Walk relevant current entry points, callers, and planned changes. Trace material logic, seams, contracts, state/data transitions, and regression-sensitive consumers from the exact code plan to checks that would reach those paths and detect a plausible wrong result or bypass. Check real versus simulated dependencies and what is actually observable. For example, a response assertion with a stubbed repository does not establish a required persisted effect of a changed write path. Accept justified inspection, indirect evidence, or no-separate-check dispositions; do not require a separate test for every production task or assertions about incidental internals. Reverse-trace cases and tasks to in-scope outcomes or credible planned-change risks.
- **Design and handoff:** Check sufficiency of existing assertions and selection rules, treatment of gaps and regression risks, category ownership/omissions, purposeful overlap, preservation on replacement/deduplication, deterministic setup, and feasibility and order of tasks. For no-new-test plans, assess the specific checks and evaluation basis as rigorously as new designs. Distinguish a missing prerequisite that can change design from bounded later setup.

On the first round assess the whole plan against every rubric row and applicable assignment condition, proportionate to risk. On revisions focus on changed areas, dependencies, and finding closure. Carry forward only demonstrably applicable evidence from a qualifying prior independent review, with recorded reasons and limits; broaden the review when change scope is unclear. Record an outcome for every condition before a full **PASS**.

- **PASS:** All applicable conditions pass for the exact current baseline. No open Blocking/Major findings or material choices remain; required approvals and role separation are evidenced. Disposition Minor follow-up explicitly.
- **REVISE:** Diagnosed defects remain correctable with available authority and evidence.
- **BLOCKED:** A missing prerequisite, limited assessment, or stalled correction prevents a full conclusion. Record known defects as well as missing evidence and exact unblock actions.

## Record actionable findings

Use the assignment convention or `DR-1` IDs, continuing across phases and rounds. For each finding record severity, failed or unassessed check, affected IDs, exact source and plan/code/test locators, claim status and limits, consequence, owner, required correction, and observable closure condition. Use **Blocking** for a failed mandatory gate or unresolved material choice, **Major** for a material coverage/design/task defect, and **Minor** for bounded follow-up that cannot affect a required outcome, feasibility, or mandatory check. Minor disposition needs a rationale and any applicable authority. Do not invent defects from missing evidence or turn stylistic preferences into gates.

Route scope, coverage, category, reconciliation, and test task defects to the test planner and appropriate specialist. Return production feasibility and testability gaps to `plan-code`, and specification gaps to the lead for the appropriate `spec` phase (intake, discovery, refinement, or review). Name the affected records and exact action. Do not rewrite sources or close upstream review findings.

## Recheck findings and stop stalled corrections

Compare exact revisions and author responses. Verify each claimed fix against evidence and its closure condition; inspect affected dependencies and preserve or reopen findings under the same ID. A response is not closure. Keep one history across rounds and resumed assignments; link superseded findings.

Count consecutive unsuccessful independent rechecks of the same readiness-blocking finding without material progress. Exclude its initial review and author self-checks. Material progress meets a closure condition or supplies new evidence justifying a different corrective action. Rewording, new versions/IDs, or a fresh reviewer does not reset the count. After two such rechecks, or sooner if no useful correction is possible, stop the affected loop and record **BLOCKED**, the attempts and persistent condition, owner, and exact unblock action. Continue independent checks and resume only on a documented change that addresses the blocker.

## Save the review round

Use [the review template](../assets/plan-tests-review-template.md) at the assigned path (default `plan-tests-review.md`). Earlier rounds' content stays in the artifact repository history; list each round's tag, scope, reviewer identity, and verdict instead of copying it. Keep one writer at a time. Number the round ("Round N of 5"); if this is round 5 and the verdict is not **PASS**, say in the handoff that the round limit is reached and the lead must escalate to a human. Return the report path, round, and reviewed baseline to the lead. Track **Current** / **Needs revalidation** separately from verdict; preserve historical verdicts only for their own baselines. Identify affected versions/IDs, downstream handoffs, and required rechecks.
