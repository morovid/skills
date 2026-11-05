---
name: spec-discovery
description: Turn an Initial Assignment Brief into evidence-backed current-state and cross-domain impact maps, a confirmed behavioral specification, and a decision register. Use after intake, before requirements, or to correct discovery findings from a spec-review return.
---

# Specification Discovery

Establish how the relevant system behaves today, what the assignment would change across its boundaries, and which intended behaviors the requester has confirmed. Produce a discovery report that later specification work can use without repeating the investigation or relying on chat history.

## Responsibilities and boundaries

Discovery produces five connected outputs:

1. **Current State Behavior Map** — relevant actors, rules, states, data, and interactions, with evidence and unknowns.
2. **Cross-Domain Impact Matrix** — direct and indirect effects, dependencies, preservation obligations, and conflicts.
3. **Behavioral Change Map** — what will be added, changed, removed, or preserved relative to the baseline.
4. **Confirmed Behavioral Specification** — the agreed observable behavior and constraints, including relevant alternative and failure paths.
5. **Decision Register** — confirmed decisions, working assumptions, open questions, and blockers, including items inherited from intake.

Keep the investigation proportional to the assignment. A narrow change may need only a few linked records; shared data, lifecycle changes, and cross-domain workflows require deeper coverage. Revise intake's provisional complexity when the evidence warrants it and explain why.

Define behavior and supplied constraints. Leave formal user stories, detailed requirements, acceptance criteria, implementation plans, algorithms, and architecture choices to later work. Repository details explain the baseline and impacts; they do not automatically become requirements. Do not implement the proposed change as part of discovery.

## Receive the intake handoff

1. Read the **Initial Assignment Brief** produced by `spec-intake`, normally `initial-assignment-brief.md`, at the supplied or established assignment location. Use its objective, actors, intended outcomes, supplied success measures, confirmed and tentative scope, exclusions, constraints, reported behavior, decisions, assumptions, open questions, complexity, and investigation priorities as the starting point.
2. Preserve inherited decision, assumption, and question identifiers and their sources. Do not reopen settled decisions without new contradictory evidence or a requester change. Mark an inherited question resolved only when its answer and supporting source are recorded.
3. Check readiness and currency. If the brief is **Blocked at intake** or **Needs revalidation**, use any subsequent clarification to resolve the stated gap or report what is still missing; a prior readiness label is insufficient. Continue independent investigation where useful, but do not invent an objective or scope to pass the gate.
4. If there is no brief, use an equivalent supplied request when the objective, actors, and initial boundaries are clear enough. Record that source and any missing intake fields. If missing information prevents meaningful exploration, report the intake gap and ask only for the necessary clarification.
5. Identify available repositories, documentation, tests, and integration evidence. Record relevant versions or revisions when available. Missing access is a limitation; it blocks readiness only when the unavailable evidence is needed to settle material behavior or impact.

Treat requester descriptions of current behavior as **reported** until verified. Preserve the distinction between requested outcomes, confirmed constraints, and tentative interpretations throughout discovery.

### Receive a review return, when supplied

Read `review-report.md` and `review-rework.md`, or equivalent supplied findings, alongside the original request/brief, returned discovery baseline, and linked downstream artifacts. Compare versions and preserve `RV` finding and `RW` task IDs. The review owns finding definitions and closure; a return does not confirm a proposed behavior.

Follow task dependencies: resolve an intake-owned scope or intent correction before completing dependent discovery records, while retaining independent confirmed work. Repair the identified `E/CB/I/B` records and canonical `D/A/Q` entries, preserving identifiers and supersession history. Reconcile affected maps, behavioral definitions, evidence, and gates; identify the dependent refinement and assembly repairs. Return the updated discovery report, its own gate result, and a summary mapping RV/RW IDs to changed versions/records, authority, and remaining blockers. Submit fixes as **Addressed—pending recheck**; **Ready for requirements** does not close findings or restore downstream readiness.

Read the packet's shared attempt history before another correction and record the attempted action, changed versions, new evidence, and actual gate result. After two consecutive unsuccessful review rechecks of the same blocking finding without material progress, stop that correction loop and save a **Blocked at discovery** report with the attempted fixes and exact unblock action. Exclude the original review; changing stages, task IDs, or sessions does not reset the count. Continue independent work, and resume the loop only when new evidence, a confirmed decision, access, or another documented change addresses its blocker.

## 1. Explore current-state behavior

Start with the entry points and domain concepts named in the brief. Trace relevant behavior through code, tests, documentation, data definitions, and connected components. Follow dependencies in both directions when shared rules, data, events, or external contracts could be affected. Search by behavior and domain terms as well as file or component names.

Capture the relevant:

- Actors, permissions, ownership boundaries, and preconditions.
- Triggers, business rules, outcomes, state transitions, and invalid transitions.
- Business entities, relationships, sources of truth, and lifecycle rules.
- Cross-domain interactions, information flows, external systems, and asynchronous work.
- Existing alternative paths, failure behavior, and compatibility constraints.

Use [the discovery guide](references/discovery-guide.md) when choosing investigation lenses, evaluating conflicting evidence, or framing a behavioral question. Inspect only the lenses relevant to this assignment.

Support important findings with precise references: repository and path plus symbol or line location, a document section, a test case, or an observed check. Record what each source establishes and its limits. A test that was read establishes an expectation; report a passing result only if it was run. Use existing checks when they materially strengthen a finding, and record the actual outcome and environment.

Label baseline claims **Observed**, **Supported**, **Reported**, **Inferred**, or **Unknown**, following the guide. Do not treat an inference, stale document, or missing search result as proof. When sources disagree, retain the conflicting claims and resolve or expose the discrepancy rather than silently choosing one.

For a new system or capability, identify which baseline is absent and inspect any existing surrounding behavior or integration contracts. Do not invent a current implementation.

**Exploration gate:** The relevant behavior and immediate relationships are mapped with supporting evidence; important unknowns, access limits, and unexamined boundaries are explicit. Unknowns may continue into impact analysis, but cannot silently become confirmed facts.

## 2. Analyze impacts and behavioral changes

Compare the requested direction with the baseline. For each significant proposed behavior, trace effects through affected domains, shared entities, consumers, integrations, and lifecycle transitions. Follow significant dependencies beyond the initially named feature. Stop tracing a path when there is no supported or plausible connection to the requested behavior, or when evidence is unavailable; record any material limitation. A confirmed exclusion limits proposed changes, but does not erase an impact or dependency.

For each impact, record:

- The affected domain or actor and the causal relationship to the assignment.
- The current behavior and supporting evidence.
- The intended change, or the behavioral choice that remains open.
- Existing behavior that must be preserved and the source of that obligation.
- Relevant compatibility, authorization, ownership, lifecycle, or external dependency implications.
- Conflicts, blockers, questions, and the related behavioral records.

Separate evidenced effects from potential effects requiring verification. A newly discovered dependency does not automatically expand confirmed scope. If meeting the objective appears to require a scope change, explain the consequence and obtain the requester's decision; retain the unresolved dependency meanwhile.

Create the Behavioral Change Map using **Add**, **Change**, **Remove**, and **Preserve**. Explicitly include important preservation requirements from intake. Link each entry to the relevant baseline, impacts, and authority for the intended behavior. Assign stable behavior IDs here and reuse them in the behavioral specification.

Do not label observed functionality a preservation requirement merely because it exists. Distinguish requester-required preservation, compatibility obligations supported by evidence, and proposed preservation still needing confirmation. Do not invent performance targets, retry limits, retention periods, or security policies.

**Impact gate:** All reasonably discoverable significant direct and indirect impacts are documented. Proposed changes, preservation obligations, scope implications, and unresolved behavioral choices are visible and traceable.

## 3. Resolve ambiguities and refine behavior

Derive questions from the intake handoff, baseline evidence, and impact analysis. Resolve repository questions through investigation before asking the requester for facts the available sources can establish. Product choices and conflicting stakeholder instructions require a decision from the requester or designated decision-maker.

For each material choice:

1. State the concrete scenario, the evidence or gap that raises the question, and what depends on the answer.
2. Present plausible options and their behavioral consequences when that helps the decision. Identify a recommendation as a recommendation, with its rationale.
3. Record the answer, its source, who confirmed it, and the affected scope, behaviors, and impacts. An explicit instruction already supplied by the requester is confirmation; do not ask them to repeat it.
4. Revisit the affected baseline interpretation, impact analysis, and proposed behaviors when the decision introduces new consequences.

Prioritize questions that affect scope, permissions, ownership, state transitions, externally visible outcomes, data loss, or compatibility. Batch related questions when useful and continue independent work while answers are pending. Avoid repeatedly asking an unanswered question without new information. If no further evidence or independent work can resolve a material gap, save the partial report as **Blocked at discovery** with a concrete unblock action.

Maintain separate records for **decisions**, **assumptions**, and **questions**. An assumption records an unverified working premise and how it will be checked; it cannot substitute for confirmation of a material behavioral choice. Keep rejected or superseded decisions traceable when they explain a changed dependency, but identify which decision is current.

Use the assignment's established canonical D/A/Q register; otherwise section 5 of the discovery report becomes canonical. When establishing that register, transfer any temporary intake records before further updates, preserving IDs, sources, and history. Point the brief to the new location; if it cannot be edited, record the transfer explicitly in this report's handoff. Identify retained intake entries as historical snapshots. An already established register outside the brief remains canonical. Later stages use the same canonical location rather than establishing new registers. Allocate new IDs there, update question/assumption dispositions in place with resolution evidence, and record a changed confirmed decision under a new D ID that supersedes the prior one. If a required canonical update cannot be completed within available access and authorization, identify the proposed update separately; dependent material behavior cannot be ready until the canonical records agree.

Write the Confirmed Behavioral Specification around observable behavior: actor and trigger, preconditions, business rules, state or data changes, cross-domain outcomes, preservation constraints, and relevant failure or alternative paths. Group these by workflow or domain as appropriate. Distinguish completion from intermediate outcomes such as queued external work.

Reuse behavior IDs from the change map. Keep detailed target behavior in the specification and refer to it from the map instead of maintaining two competing definitions. Include only behavior supported by explicit requester direction, confirmed decisions, or applicable established constraints. Keep undecided alternatives in the question register; identify affected specification entries as incomplete rather than calling them confirmed.

**Refinement gate:** No unresolved ambiguity or unsupported assumption remains that could materially change the intended functional behavior. If that condition is not met, preserve confirmed portions and report the remaining blockers.

## Package the discovery report

Use [the discovery report template](assets/discovery-report-template.md) as the output starting point. It packages all five outputs, an evidence index, the intake handoff, and readiness findings in one document. Adapt tables and section depth to the assignment; omit irrelevant optional detail with a brief reason instead of filling empty tables. Keep missing information explicit.

Save at the requested destination or follow the established assignment convention. Otherwise use `discovery-report.md` beside the brief, or in the assignment working directory when no brief exists. Inspect an existing destination before updating it so an unrelated assignment is not overwritten. Split the report into linked files only when the assignment's conventions or size justify it; retain one index with the readiness status.

Use stable IDs when records need cross-references: `E1` for evidence, `CB1` for current behavior, `I1` for impacts, and `B1` for proposed or preserved behavior. Continue inherited `D1`, `A1`, and `Q1` sequences for decisions, assumptions, and questions without renumbering or reusing identifiers. Follow existing assignment conventions when they differ.

Keep the trace from the intake objective and scope through evidence, baseline behavior, impacts, decisions, and intended behavior. If a clarification changes intake's objective, scope, or a significant decision, update the supplied brief when available and authorized by the assignment, or identify the exact correction needed in the handoff. Revalidate affected records and mark dependent artifacts **Needs revalidation**, invalidating their prior readiness and version-bound approvals until rechecked. Record affected IDs/versions, next owners, and required checks; if a dependent artifact cannot be updated, put its invalidation in the handoff. Do not silently overwrite a confirmed decision or leave dependent artifacts marked current.

Track **Current** or **Needs revalidation** separately from stage status. A prior **Ready for requirements** verdict is unusable while its supporting records need revalidation; restore currency only after the affected gates pass.

## Completion and handoff

Mark the report **Ready for requirements** only when:

- Intake intent and current scope are clear, consistent with the report, and preserved or explicitly revised by an authorized decision.
- Relevant baseline claims and significant impacts have evidence; material conflicts and evidence gaps are resolved.
- The change map covers the requested behavior and important preservation obligations, with links to impacts and decision sources.
- The behavioral specification defines the relevant success, alternative, failure, state, and cross-domain outcomes without material unanswered choices.
- Significant decisions are confirmed and sourced; assumptions and remaining questions cannot materially alter the agreed behavior or scope.
- The five outputs agree, references resolve, and the handoff identifies downstream work and any bounded, nonblocking follow-up.

Use **In progress** while investigation or clarification continues. Use **Blocked at discovery** when a material decision, evidence gap, dependency, or unresolved intake blocker prevents completion; name the affected records, consequence, responsible person or source if known, and what will unblock it. Do not pass a failed gate by deferring a material choice to implementation.

Readiness indicates that discovery is complete enough to draft user stories, requirements, and acceptance criteria. It does not imply independent validation, final approval, or engineering readiness.

Return the report location, readiness status, a concise account of the significant behavioral findings, and any remaining blockers. When ready, identify the confirmed behavior and traceability records that downstream specification work should use.
