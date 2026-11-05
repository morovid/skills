---
name: implementation
description: Turn a current engineering specification and repository evidence into a production implementation plan, or revise that plan from implementation-review findings. Use after specification review and before coding or test analysis. Plans code changes without implementing them or designing test cases.
---

# Implementation Planning

Produce a repository-grounded plan that a coding agent can execute without making unresolved product or major technical decisions. Keep evidence, technical design, ordered tasks, and coverage in one plan; a separate [implementation-review](../implementation-review/SKILL.md) skill owns independent review.

## Responsibilities and boundaries

Write `implementation-plan.md` using [the plan template](assets/implementation-plan-template.md). Scale detail to the change; split substantial supporting material into linked files only when useful, keeping the plan as the versioned index. No manifest, separate decision register, or machine-readable traceability file is required.

Plan production code and system integration. Do not implement code, design test cases, or silently edit authoritative specifications or reviewer-owned findings. Identify testability concerns and meaningful completion checks for downstream [test-analysis](../test-analysis/SKILL.md) and [test-design](../test-design/SKILL.md). Distinguish proposed commands from checks actually run.

## 1. Receive the specification or review return

Read the assembled `engineering-specification.md` and `review-report.md` package index from [spec-review](../spec-review/SKILL.md), plus linked catalogs needed for this change. Equivalent supplied documents are valid when they establish the same authority and detail; filenames and prior skill invocation are not gates.

| Upstream material | Planning use |
| --- | --- |
| Engineering specification and review package index | Exact included versions, scope, constraints, readiness, review limits, and required approval evidence, if any |
| Refinement catalogs | Current US/SC/FR/NFR/AC, exact acceptance outcomes, traceability, and Definition of Done |
| Discovery report | E/CB baseline, I impacts, B Add/Change/Remove/Preserve, evidence limits, and canonical D/A/Q register, normally section 5 |
| Intake brief | Objective, actors, exclusions, supplied constraints, and unresolved source discrepancies |

Confirm **Ready for engineering** and **Current** for the exact package being used. A partial review, **Ready for review**, stale verdict, or draft specification cannot establish this gate. Require approvals only when the assignment mandates them. Inspect repository instructions, revision/snapshot and relevant local changes; recheck material evidence if the baseline has drifted. Record source paths, versions, canonical decision location, and limitations in the plan.

Preserve inherited E/CB/I/B/D/A/Q/US/SC/FR/NFR/AC and RV/RW IDs and meanings. Follow established engineering IDs; otherwise use `DES-001` for design elements, `DEC-001` for internal technical decisions, and `IMP-001` for tasks. Continue sequences across revisions and retain supersession links. Engineering decisions may choose internal mechanisms; they cannot create new product behavior or replace canonical D/A/Q records.

For a revision, read the complete `implementation-review.md`, exact reviewed plan version, prior responses, and changes since review. Treat every open finding as a work item to fix, challenge with evidence, or route to its owner. A claimed fix remains pending reviewer verification.

If authority, access, currency, or a material choice is missing, identify affected IDs and the exact unblock action. Continue independent planning with dependent content visibly provisional. Route objective/scope gaps to spec-intake, baseline/impact/behavior/decision gaps to spec-discovery, requirements/AC/DoD gaps to spec-refinement, and assembly/readiness discrepancies to spec-review. Do not repair product ambiguity by assumption.

## 2. Ground the design and tasks in the repository

Use [the planning guide](references/planning-guide.md) for focused exploration, design, and task decomposition. Reuse discovery evidence; inspect only implementation facts, consumers, and suspected drift needed for this plan. Distinguish current facts and their evidence status from proposed files/interfaces, technical choices, assumptions, and unknowns.

Design the smallest coherent change that implements confirmed outcomes and constraints. Explain interfaces, state/data ownership, important control and failure flows, old/new code connections, and migration/rollout dependencies where relevant. Record material technical alternatives and rationale in the plan. Avoid invented APIs, observed paths, preservation obligations, or quality thresholds.

Order actionable tasks with verified existing targets or explicitly proposed targets, coding instructions, integration work, dependencies, linked obligations/design elements, and observable completion conditions. Trace each current FR/NFR, material AC outcome, confirmed B obligation, significant I dependency, and applicable DoD condition to design/tasks or an evidence-based **No code change** disposition. Do not describe planned work as implemented. Reverse-check tasks for unsupported scope and reconcile omissions explicitly.

## 3. Submit and revise through separate review

Self-check source consistency, coverage, feasibility, integration, task order, and links before submission. Mark a complete, current submission **Ready for implementation review**. This status means author checks passed; it does not establish independent review or readiness for coding.

Hand the reviewer the plan path/version, specification package index and linked source versions, repository baseline/local-change boundary, canonical decisions, prior review, responses, and changed sections/IDs. The reviewer reads the actual sources and repository, not only the planner's summary.

The skills support separate manual invocations or two agents. When the caller requests the two-agent loop, use a distinct planning agent and reviewer agent with separate write ownership: planner writes the plan and linked design material; reviewer writes the review. Send paths and versioned handoffs between them, inspect each returned artifact, and request corrections from the owning agent. Otherwise hand off to a separate reviewer invocation; do not spawn agents solely because this skill was selected. A same-author pass is a self-check and cannot satisfy the independent-review gate. If distinct review is unavailable, retain **Ready for implementation review** and report the missing check.

For each finding, keep a planner response with finding ID, action or evidence-based disagreement, changed sections/IDs, submitted version, and pending verification. Let the reviewer close findings and issue the verdict. An accepted nonblocking risk needs rationale and authority where required; a failed mandatory condition cannot be waived by relabeling it.

Keep one attempt history in the review report across agents and sessions. After two consecutive unsuccessful reviewer rechecks of the same blocking finding without material progress, stop the affected automatic loop and record the persistent condition, attempted changes, owner, and exact unblock action. The initial review and author self-checks do not count. New wording, versions, IDs, or sessions do not reset the count. Material progress satisfies a closure condition or establishes evidence supporting a different corrective action. Stop sooner if no useful correction is possible; continue independent work. Resume with documented new evidence, a decision, access, or other change that addresses the blocker.

## 4. Save and hand off

Use the requested destination or assignment convention. Otherwise save `implementation-plan.md` beside the engineering specification, or in the assignment working directory if no specification file exists. Inspect existing files before updates to preserve assignment identity and history. Remove template placeholders from outputs; use explicit Unknown or justified Not applicable where appropriate.

Track stage status separately from **Current** / **Needs revalidation**:

- **In progress:** useful design, investigation, or revision continues.
- **Ready for implementation review:** the current submission is complete and author-checked.
- **Blocked at implementation planning:** a material gap prevents completion and independent work cannot resolve it; record the precise unblock action.
- **Ready for implementation:** a distinct reviewer has issued a full PASS for this exact plan/source/repository baseline; all applicable gates pass, no blocking findings or material choices remain, currency is Current, and any mandated approvals have evidence.

On source, design, task, or relevant repository changes, mark affected planning and downstream handoffs **Needs revalidation**. Record changed versions/IDs and required checks even if downstream artifacts cannot be edited. Historical verdicts apply only to their reviewed versions. Restore Current and readiness only after affected checks pass; preserve valid independent work. Updating only status and the link to a matching review does not itself change the reviewed technical content.

Return plan location/version, status and currency, review location/verdict if available, and exact next action or blockers. A ready plan supplies production implementation instructions and input to test-analysis; test-analysis/design own coverage decisions and cases. Their feasibility findings return to planning and review rather than silently changing the plan. Readiness is not implementation, successful testing, or delivery acceptance.
