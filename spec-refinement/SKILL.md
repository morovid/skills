---
name: spec-refinement
description: Turn an Initial Assignment Brief and discovery report into traceable user stories, end-to-end scenarios, functional and non-functional requirements, acceptance criteria, and an assignment-level Definition of Done. Use after behavioral discovery, or to address a spec-review rework handoff before re-review or engineering planning.
---

# Specification Refinement

Translate confirmed behavior into a precise, verifiable specification without changing the assignment's intent. Produce a refinement report that reviewers can understand using its linked sources, without relying on chat history or repeating discovery.

## Responsibilities and boundaries

Refinement produces three connected groups of outputs:

1. **User Story Catalog and E2E Scenario Map** — actors, goals, and relevant existing, modified, and new flows, including alternative, boundary, failure, and recovery paths.
2. **Requirements Catalog and Traceability Matrix** — functional and relevant non-functional obligations linked to the objective, scope, confirmed behaviors, impacts, and decisions.
3. **Acceptance Criteria and Definition of Done** — observable pass/fail outcomes for the requirements and assignment-level completion conditions.

Scale the detail to the assignment. A narrow change can use a few linked records; shared data, lifecycle changes, and cross-domain workflows need deeper coverage. Preserve important behavior even when sections are combined.

Define behavior and supplied constraints. Leave implementation plans, algorithms, architecture choices, UI automation, and unit-test implementation to engineering. Preserve a supplied technical constraint and its authority without treating repository implementation details or suggestions as requirements. Refinement checks its own consistency; independent review, final assembly, stakeholder approval where required, and engineering readiness remain downstream work.

## 1. Receive and check the handoff

Read the available assignment artifacts, normally `initial-assignment-brief.md` from `spec-intake` and `discovery-report.md` from `spec-discovery`:

- From intake: objective, actors, intended outcomes, supplied success measures, scope and exclusions, constraints, complexity, and decision/assumption/question records.
- From discovery: Current State Behavior Map, Cross-Domain Impact Matrix, Behavioral Change Map, Confirmed Behavioral Specification, Decision Register, evidence index, readiness findings, and nonblocking follow-up.

Record the artifact locations and versions or revisions when available. Use the latest confirmed scope and decisions, retaining the sources of any authorized changes since intake. Preserve inherited `E`, `CB`, `I`, `B`, `D`, `A`, and `Q` identifiers and their meanings. Do not renumber them or turn a proposed behavior into a confirmed one.

Check that discovery is **Ready for requirements**, is **Current** rather than **Needs revalidation**, and that its material decisions and evidence remain applicable. Equivalent supplied artifacts are sufficient if they establish the same behavioral authority, baseline, impacts, and boundaries; identify them and assess the same conditions rather than requiring a particular filename or an invocation of another skill.

If an upstream artifact is blocked, missing, contradictory, or materially out of date, identify the affected scope and the exact gap. Refine independent, confirmed portions where useful, but keep affected records explicitly incomplete and do not mark the report ready. Use available sources for focused verification of a suspected gap rather than restarting discovery by default. Continue the evidence ID sequence for new findings and record their claim status, locator, and limits; source inspection does not establish that a test passed.

Distinguish a faithful derivation of confirmed behavior from a new behavioral choice. Existing requester instructions are already authority; do not ask for confirmation of their restatement. Resolve factual questions through available evidence. For a material choice about scope, permissions, ownership, state, compatibility, outcomes, or a required target, ask the requester or designated decision-maker and record the answer and source. Continue independent drafting while a question is pending. If no further useful work can resolve the gap, save the partial report as **Blocked at refinement** with a concrete unblock action.

### Receive a review return, when supplied

Read `review-report.md` and `review-rework.md`, or equivalent supplied findings, alongside the original brief, discovery report, and current refinement baseline. Preserve inherited `RV` finding and `RW` task IDs; the review remains authoritative for finding definitions and closure. A return supplements the behavioral sources and does not authorize a new product rule.

Check the returned versions against the current artifacts. Follow task dependencies: an unresolved intake boundary, discovery evidence gap, or material behavioral choice must be resolved in its owning stage before dependent records can be complete. Continue independent confirmed work, retaining affected records as incomplete. A review recommendation is not a confirmed decision.

For refinement-owned tasks, repair the identified `US/SC/FR/NFR/AC` records using existing authority, retaining IDs and supersession links. Reconcile related traceability, Definition of Done, and dependent records without restarting unrelated discovery. Record each RV/RW ID, changed artifact/version and record IDs, authority, and any remaining blocker in the report. Mark the affected assembly and review baselines **Needs revalidation** and invalidate affected version-bound approvals until rechecked.

Submit fixes as **Addressed—pending recheck**. Refinement's own **Ready for review** status does not close review findings or establish engineering readiness; the reviewer verifies the stated closure criteria. Return the updated refinement report and correction summary, or the exact upstream unblock action for tasks that remain blocked.

Read the packet's shared attempt history before another correction and record the attempted action, changed versions, new evidence, and actual gate result. After two consecutive unsuccessful review rechecks of the same blocking finding without material progress, stop that correction loop and save a **Blocked at refinement** report with the attempted fixes and exact unblock action. Exclude the original review; changing stages, task IDs, or sessions does not reset the count. Continue independent work, and resume the loop only when new evidence, a confirmed decision, access, or another documented change addresses its blocker.

## 2. Build user stories and end-to-end scenarios

Start from confirmed `B` records and their `CB`/`I` relationships. Reuse discovery's existing flow evidence; inspect a relevant entry point or dependency only when the supplied map cannot establish a necessary scenario. Keep baseline claim status and uncertainty visible.

For each meaningful actor goal, write a story with the actor, desired capability, and intended benefit. Link it to the objective, in-scope behaviors, and relevant decisions or impacts. External systems may be actors. Represent a system-level obligation directly as a requirement or scenario when forcing it into a user story would obscure its purpose. Assign priorities only when supplied or confirmed.

Map scenarios as **Existing—preserve**, **Existing—modify**, **New**, or **Existing—remove**. For a modified or removed flow, identify the baseline and explain the intended difference; do not copy the old behavior as the target. A new capability may have no baseline, but still has surrounding contracts and impacts.

Each significant scenario should establish:

- Actor or external trigger, permissions, preconditions, and starting state or data.
- Domain-level actions and interactions across the relevant boundaries.
- Observable outcomes, resulting state or data, and effects on other actors or systems.
- Relevant alternatives, boundaries, invalid actions, failures, and recovery behavior.
- What must remain true, with the source of each preservation obligation.

Distinguish request acceptance, intermediate progress, and completed external effects. For repeated actions, concurrent changes, partial outcomes, or recovery, use confirmed rules; an uncovered material choice becomes a question rather than an invented rule. Describe functional usage instead of selectors, clicks, test fixtures, or test code.

Use [the refinement guide](references/refinement-guide.md) when selecting scenario coverage, exposing hidden choices, or checking traceability. Its coverage lenses are prompts, not a mandatory checklist for unrelated concerns.

**Scenario gate:** Important user-facing and system-level flows are represented, their changes and preservation obligations are clear, and their outcomes agree with confirmed behavior and cross-domain relationships. Identify incomplete scenarios and their blocking questions.

## 3. Define functional and non-functional requirements

Derive requirements from the confirmed behaviors, scenarios, applicable constraints, and decisions. Give each requirement a stable ID and one independently verifiable obligation. State the responsible actor or system, triggering conditions, required behavior, and observable result. Separate obligations with different conditions, authority, or verification needs.

Functional requirements should cover relevant processing rules, calculations, permissions, data changes, ownership, lifecycle, allowed and invalid state transitions, cross-domain outcomes, and preservation constraints. Specify calculation inputs, boundaries, units, and rounding only where applicable and established. Express behavioral invariants as requirements that must hold across the relevant scenarios, with their authority and validation method.

Define non-functional requirements only where relevant to the assignment or an applicable obligation: performance, security, privacy, reliability, accessibility, durability, or compatibility. State the condition, required property, evaluation method, and source. Quantitative requirements need an agreed threshold and measurement context such as workload, timing boundary, environment, and observation window where material. A categorical property can be verifiable without a numeric target. Avoid duplicating a functional permission or lifecycle rule merely to populate a quality category.

Carry supplied success measures through with their original meaning. Distinguish business outcome measures from delivery acceptance conditions; do not promise an unconfirmed business result as an engineering obligation. Do not invent response times, retry limits, availability targets, retention periods, standards versions, or policies. If a required measure or rule is missing, record the decision needed and leave the affected requirement incomplete. Read the guide's requirement and measurement sections when this distinction is unclear.

Use **Defined**, **Incomplete**, or **Superseded** to describe requirement records. Defined means the obligation is fully specified and grounded in authority; it does not mean independently reviewed, implemented, or approved. Keep suggestions outside the normative catalog until confirmed. Evidence of current behavior supports the baseline, but only a sourced preservation obligation makes that behavior mandatory after the change.

**Requirements gate:** Every significant in-scope behavior and relevant constraint has clear, consistent, verifiable coverage. Each requirement has a source, a reason to exist, and an explicit disposition for any unresolved dependency.

## 4. Write acceptance criteria and Definition of Done

Give acceptance criteria stable IDs and link them to the requirements and relevant scenarios. Use Given/When/Then when a scenario is clearest, or an equally precise condition, evaluation, and expected result for an invariant or non-functional property.

For each criterion, specify the starting conditions or inputs, action or observation, and observable pass/fail result. Include a verification method or evidence source sufficient for a reviewer to evaluate it without deciding new behavior. Name an observable result rather than requiring a particular test framework or internal design. Do not claim that a criterion has passed merely because it has been written.

Cover normal, alternative, boundary, denial, failure, and recovery outcomes as relevant. Include cross-domain integration results, data/state effects, and preservation checks. A generic “existing behavior still works” criterion is insufficient: identify the preserved rule, its baseline reference, and the condition under which it is evaluated. For asynchronous flows, separately evaluate acceptance and eventual outcomes when both are part of the confirmed behavior.

For non-functional criteria, retain the agreed threshold or categorical property, measurement conditions, and method. “Fast,” “secure,” or “all tests pass” alone cannot establish acceptance. A criterion cannot introduce a product choice, numeric target, or technical constraint absent from its requirement's authority. If writing it exposes a missing rule, return to the affected requirement and decision record.

Define an assignment-level **Definition of Done** that brings together acceptance coverage, preserved behavior and integrations, relevant non-functional obligations, and any supplied delivery or approval conditions. Distinguish later delivery evidence from conditions actually checked during refinement. Reference existing team completion rules when supplied; do not invent release processes, approvals, tooling mandates, or unrelated quality requirements.

**Acceptance gate:** Every defined requirement has sufficient objective acceptance coverage, and assignment completion can be evaluated without additional product decisions. Incomplete requirements and criteria remain visible and prevent readiness when material.

## 5. Trace, reconcile, and package

Use [the refinement report template](assets/refinement-report-template.md). It packages all output groups, input provenance, unresolved items, and readiness findings. Adapt tables and section depth to the assignment; combine concise sections or mark irrelevant categories not applicable with a reason. Remove unused placeholder rows rather than manufacturing content.

Follow established assignment IDs. Otherwise use `US1` for user stories, `SC1` for scenarios, `FR1` and `NFR1` for requirements, and `AC1` for acceptance criteria. Continue existing sequences without reusing IDs for different meanings. Retain superseded records or an explicit replacement link when needed by downstream references.

Trace from the objective and scope through confirmed behavior, impacts and decisions, stories where applicable, scenarios, requirements, and acceptance criteria. Check both directions:

- Every confirmed in-scope `B` record, including removals and preservation obligations, reaches requirements and acceptance criteria, with stories and scenarios where applicable.
- Every requirement, scenario, story, and criterion has an in-scope source; no detail silently expands scope or contradicts an exclusion.
- Every current, defined requirement has sufficient acceptance coverage; each criterion maps to the exact obligations it evaluates. Superseded records retain replacement links but are excluded from current coverage claims.
- Impact and dependency records are addressed or explicitly dispositioned. A justified non-applicable link is clearer than a fabricated story or a blanket link to every record.

Keep decisions, assumptions, and questions distinct. Locate the assignment's canonical D/A/Q register, normally discovery report section 5, and add or update records there within the available authorization. Continue its ID sequences; preserve sources, affected IDs, and resolution history. A changed confirmed decision receives a new D ID with a supersession link. In this report, link canonical entries and summarize their effects; do not redefine inherited records or maintain another current register. If canonical updates are unavailable, list proposed updates separately with the required owner/action and keep dependent material records incomplete until registered. An assumption cannot substitute for a material decision; deferring a blocking question does not resolve it.

When refinement reveals a changed decision or discovery gap, identify the exact upstream correction. Update supplied upstream artifacts when available and authorized by the assignment, or record the required correction in the handoff. Revalidate affected stories, scenarios, requirements, criteria, and existing downstream artifacts. Mark affected artifacts **Needs revalidation** and invalidate their prior readiness and version-bound approvals until the responsible checks pass; record affected IDs/versions and required checks even when a dependent artifact cannot be edited. Track currency separately from stage status, and restore **Current** only after the affected gates pass. Link to detailed upstream evidence instead of maintaining competing copies of the baseline or confirmed specification.

Save at the requested destination or follow the assignment convention. Otherwise use `refinement-report.md` beside the discovery report, or in the assignment working directory when no report file exists. Inspect an existing destination before updating it so an unrelated assignment is not overwritten. Split large catalogs into linked files only when useful, retaining one index with the overall status and input versions.

## Completion and review handoff

Mark the report **Ready for review** only when:

- The intake intent, current scope, and discovery handoff are consistent and sufficient; material upstream gaps and conflicts are resolved.
- Important existing, modified, removed, and new flows have appropriate success, alternative, boundary, failure, and recovery coverage.
- Significant in-scope behavior, relevant non-functional obligations, and preservation rules have sourced, precise, verifiable requirements.
- Every current in-scope requirement is defined, acceptance criteria cover its material outcomes, and the Definition of Done is evaluable without further product decisions.
- Traceability resolves in both directions, no unsupported scope or implementation prescriptions were introduced, and all affected records reflect the latest decisions.
- No material question or unsupported assumption remains; any nonblocking follow-up is bounded and cannot alter agreed behavior or acceptance.

Use **In progress** while useful drafting, verification, or clarification continues. Use **Blocked at refinement** when a material upstream gap, decision, dependency, or required measure prevents completion and no further independent work can resolve it. Name the affected records, consequence, person or source if known, and exact unblock action. Do not cycle indefinitely or pass a failed gate by leaving a choice for implementation.

Readiness covers refinement's own checks. It does not establish independent validation, stakeholder approval, successful implementation tests, or engineering readiness. Hand the report and its linked inputs to independent specification review, identifying review-sensitive areas and artifacts needing correction or revalidation.

Return the report location, readiness status, a concise account of the refined scope, and any remaining blockers or required upstream corrections.
