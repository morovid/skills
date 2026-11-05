---
name: test-design
description: Turn a current test-analysis handoff, reviewed specification, implementation plan, and repository evidence into a reviewed test implementation plan. Delegate each justified test type to its own specialist agent. Use after test analysis or when its inputs change; design tests without implementing them.
---

# Test Design

Produce traceable, implementation-ready test designs from the analysis handoff. Coordinate a separate specialist agent for each selected test type, then reconcile their designs into one implementation plan.

## Responsibilities and boundaries

Produce three connected outputs, proportionate to the assignment:

1. **Category designs** — detailed cases, existing-test actions, observation boundaries, fixtures, and prerequisites from assigned specialists.
2. **Test Implementation Plan** — consolidated coverage, existing checks and inspection work, setup tasks, sequencing, commands, and implementation handoff.
3. **Design Review** — gate results, reconciliation findings, corrections, and remaining blockers.

Design tests; do not implement tests, modify production code or approved upstream sources, run a new suite as if it existed, or approve screenshot baselines. Focused inspection or existing checks may resolve a design uncertainty within the authorized environment. Record actual execution separately from proposed commands and intended assertions.

Use the specification for required outcomes, the implementation plan for intended structure, and test analysis for scope, inspected coverage, risks, and work packages. Neither planned nor existing code overrides a confirmed requirement. Do not invent product rules, thresholds, tooling mandates, or approvals. Preserve project tools and conventions where they establish the required observation; reference-file tools are options unless supplied constraints require them.

## 1. Receive and check the analysis handoff

Read [test-analysis](../test-analysis/SKILL.md)'s report, normally `test-analysis.md`, its linked current engineering specification and review, the full implementation plan, and relevant repository/test configuration. Record locations, versions, revision, and relevant local changes. Equivalent supplied artifacts suffice when they establish the same authority and detail; filenames and prior skill invocation are not gates.

Check that analysis is **Ready for test design** and **Current**, the specification is **Ready for engineering** and **Current**, and the plan covers the same baseline. Require approval evidence only where the assignment requires it. Consume all seven analysis outputs without repeating initial discovery:

| Analysis output | Design responsibility |
| --- | --- |
| Change Summary | Retain affected areas, Add/Change/Remove/Preserve behavior, indirect impacts, and plan links |
| Testing Scope Assessment | Preserve each `TA` classification and rationale, including no-new-test decisions |
| Existing Coverage Inventory | Carry `TC` locators, actual asserted outcomes, actions, evidence limits, and execution status |
| Risk Register | Allocate `TR` failure scenarios and priorities to cases or justified dispositions |
| Testing Recommendations | Dispatch `TD` packages with their boundaries, expected evidence, and dependencies |
| Testability Concerns | Carry `TB` concerns; distinguish design blockers from later setup/execution prerequisites |
| Traceability | Extend requirement/AC-to-plan/TA/TC/TR/TD links to cases, verification actions, and implementation tasks |

Preserve inherited `E/CB/I/B/D/A/Q/US/SC/FR/NFR/AC`, review, plan, and `TA/TC/TR/TD/TB` IDs and meanings. Follow established case conventions; otherwise use `TEST-<type>-<number>` with a distinct category prefix. `TC` remains existing coverage; `TD` remains an analysis work package. Continue sequences on updates and retain supersession links.

Keep evidence claim statuses **Observed**, **Supported**, **Reported**, **Inferred**, or **Unknown**, with precise locators and limits. Reading an assertion is not a passing result. Reinspect only sources needed for concrete design choices or suspected discrepancies.

If inputs are missing, stale, inaccessible, or contradictory, identify affected IDs and exact gaps. Continue independent design with dependent records provisional. A materially blocked or stale analysis cannot yield a ready design. Route scope/coverage corrections to test-analysis, behavioral questions to their owning specification stage, and feasibility corrections to the plan owner. Link canonical D/A/Q records; propose unavailable updates instead of creating a competing register or silently editing upstream artifacts.

## 2. Select categories and dispatch separate agents

Build a dispatch table from analysis work packages and its no-new-design handoff. Retain exact area classifications: **Verification only**, **Existing coverage sufficient**, **Focused testing**, or **Comprehensive testing**. Do not spawn every category by default. Existing checks or inspection alone may justify no specialist agents and no new cases; retain their evaluation basis, execution instructions, and residual risk in the plan.

For every category requiring new or changed design, use the available agent-spawning tool to launch **one distinct specialist agent per test type**. Multiple `TD` packages of the same type may share that agent. Split mixed packages into bounded assignments while preserving their original `TD` IDs. Component and visual are separate types even when they share browser tooling. Never delegate all types to one agent or present role headings as spawned agents.

| Type | Specialist guidance | Default output under the design destination |
| --- | --- | --- |
| Unit | [unit design](references/unit.md) | `unit.md` |
| Integration | [integration design](references/integration.md) | `integration.md` |
| E2E | [E2E design](references/e2e.md) | `e2e.md` |
| Component | [component design](references/component.md) | `component.md` |
| Visual | [visual design](references/visual.md) | `visual.md` |
| Accessibility, security, performance, or another justified type | [specialist design](references/specialist.md), plus applicable project guidance | `<type>.md`, separately for each selected type |

References are internal specialist instructions, not independently installed skills. Name another specialized skill only when available and applicable. Do not merge accessibility into visual work or drop a recommended category because it lacks a dedicated reference or installed skill.

Give each agent a self-contained assignment containing:

- Its single type, relevant guidance, and design-only boundary.
- Exact source paths/versions: analysis sections, specification/AC, plan tasks, repository baseline, relevant tests/configuration, fixtures, and designs.
- Assigned `TD/TA/TC/TR/TB` and requirement/AC IDs, priority, observation boundary, existing-test actions, exclusions, and adjacent agents' responsibilities.
- Design blockers versus later prerequisites, applicable tools/constraints, and unknown facts to keep explicit.
- The [category template](assets/category-design-template.md), [case template](assets/test-case-template.md), assigned case prefix, and exclusive output file.
- Required return: file location, addressed packages, case IDs and dispositions, discovered risks, blockers, evidence limits, and completion status.

Keep shared `test-implementation-plan.md` and `review.md` owned by the coordinator. Agents write only their assigned category file and return cross-category proposals for reconciliation. Launch independent categories in parallel up to available capacity; queue remaining types and create a separate agent for each. Supply cross-agent dependencies before dependent conclusions become final.

Track each category's agent identity, packages, output, status, and outstanding findings. Wait for and inspect every selected agent's actual output; a spawn acknowledgment is not completion. Retry a failed agent's bounded assignment or retain an explicit blocked disposition. If spawning is unavailable, save useful intake/routing work and mark required specialist work blocked; do not claim separate-agent completion or readiness.

In environments exposing `collaboration`, use `spawn_agent` with a unique task name such as `design_unit` and the assignment above; use `send_message` for a running specialist, `followup_task` for corrections to an idle specialist, and `wait_agent` for completion updates. Use equivalent lifecycle tools in other environments. Read returned messages and files before recording completion, and release completed agents when supported so queued types can run.

## 3. Design and reconcile coverage

Require specialists to use both templates, inspect relevant assertions and configuration, and distinguish existing from proposed interfaces/files. Cases need concrete setup, inputs/partitions, actions, observable assertions and authority, real/simulated dependencies, deterministic controls, and grounded execution instructions. Missing future setup may become an implementation task; an unknown expected outcome is a design blocker.

Preserve analysis actions **Retain**, **Extend**, **Modify**, **Replace**, and **Run for regression**; use **Create** for new cases and **Verification only** for inspection actions. Account for every relevant `TC`, including unchanged checks. Replacements must name the original check and preserve its still-required obligations. Record execution as **Not run** unless supported by actual command/result, revision, environment, and limits.

Review every returned design against its `TD` boundaries and the current specification. Merge shared fixture/environment needs and reconcile conflicting ownership. Assign an outcome to the least costly reliable level; retain cross-level coverage when it establishes distinct behavior, a real boundary, or required assurance. Before removing a duplicate, name the retained case, exact overlapping outcomes, and distinct assertions to preserve. Keep supersession links for removed case IDs.

Map every current requirement and material AC outcome, applicable DoD condition, `TA`, relevant `TC`, material `TR`, and `TD` to a case, existing check, inspection, or justified exclusion. Carry unresolved `TB` dependencies. Reverse-check each case/task for an in-scope obligation or credible change-related risk. Do not fabricate risks for risk-free outcomes. No-new-test decisions require concrete checks and evaluation bases, not empty catalogs.

If evidence contradicts analysis or reveals a new risk/category, record affected IDs, evidence, proposed correction, and owning-stage action. Keep dependent conclusions provisional until reconciled; do not silently expand scope or rewrite analysis. Send concrete design findings to the responsible specialist, inspect corrected output, and recheck affected coverage. After two consecutive unsuccessful rechecks of the same blocking finding without material progress, stop that loop, record attempts and the exact unblock action, and continue independent work. New evidence or a resolved dependency permits resumption.

## 4. Package and maintain the implementation handoff

Use [the implementation plan template](assets/test-implementation-plan-template.md) and [the review template](assets/design-review-template.md). Detailed cases remain authoritative in category files; link them rather than copying competing definitions.

Sequence actionable tasks with case/verification IDs, existing or explicitly proposed target files, data/fixture/setup needs, intended assertions, dependencies, commands, and completion evidence. Identify cases suitable before implementation, those awaiting planned interfaces, and visual cases needing independently approved references. Unconfirmed commands/paths remain proposed or unknown with a resolution task. Setup must be bounded enough to implement without choosing new expected behavior or observation boundaries.

Save at the requested destination or established assignment location; otherwise use `test-design/` beside the analysis report, or in the assignment working directory if no report file exists. Inspect existing destinations so another assignment is not overwritten. Create category files only for dispatched work. When no new design is justified, produce the plan and review with existing-check/inspection instructions and reasoned category omissions.

On updates, compare analysis, specification, plan, code, configuration, and design versions. Preserve valid independent work and stable IDs. Mark affected designs and downstream implementation handoffs **Needs revalidation**, recording changed versions/IDs and required checks even when direct updates are unavailable. Restore **Current** only after affected gates pass. Report upstream discrepancies to their owners; do not change upstream review or approval verdicts.

## Completion and implementation handoff

Use **PASS**, **REVISE**, or **BLOCKED** for the review verdict. PASS requires applicable gates to pass and all selected specialist outputs to be inspected. REVISE means concrete design corrections remain possible with current authority; BLOCKED means required evidence, a decision, access, or agent capability is unavailable. Bounded later implementation/execution prerequisites may remain nonblocking when they cannot change design conclusions.

Mark the plan **Ready for test implementation** only when:

- Source authority, readiness, currency, and repository baselines are sufficient and consistent.
- Every selected type has a separate agent's completed, inspected output, or no new design is justified.
- Requirements, material AC outcomes, risks, existing-test actions, and packages have coherent forward/reverse traceability.
- Cases have sourced expected outcomes, appropriate observation boundaries, deterministic setup, and actionable dependencies.
- No obligation was lost through replacement/deduplication; omissions and overlaps are justified.
- No material design choice remains, the review verdict is PASS, and currency is **Current**.

Use **In progress** while useful design/revision continues. Use **Blocked at test design** when a material gap prevents completion and independent work is exhausted; save partial outputs with exact unblock actions. Track **Current** or **Needs revalidation** separately; stale designs cannot be ready.

Return plan/review locations, category outputs, readiness and currency, verdict, blockers, and bounded follow-up. Design readiness establishes an implementation handoff, not implemented coverage, passing tests, accepted visual baselines, or release readiness.
