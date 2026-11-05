# Discovery Report: <assignment title>

Status: <In progress | Blocked at discovery | Ready for requirements>
Currency: <Current | Needs revalidation; prior readiness is unusable while revalidation is pending>
Source brief or request: <assignment artifact link or supplied source>
Canonical D/A/Q register: <section 5 of this report, or established register location>
Review return, if any: <review report/rework packet and exact versions; or None>
Evidence baseline: <repository/revision, document versions, or known limitations>
Discovery depth: <Small | Moderate | Complex | Uncertain; rationale and any change from intake>

<!-- Replace placeholders with assignment-specific content. Keep all five output categories, but combine concise sections or replace tables with prose for a small change. Remove these comments from the completed report. Use Not specified, Unknown, or Not applicable with a reason where appropriate. Never present a proposed decision as confirmed. -->

## Assignment and intake handoff

- Objective and intended outcome: <why the change is wanted and what should become possible>
- Actors: <users, external systems, or other affected actors>
- Supplied success measures: <measures from intake or Not specified; do not invent targets>
- Confirmed scope: <included behavior and source>
- Confirmed exclusions: <explicit exclusions or Not specified>
- Tentative scope: <unconfirmed interpretation or None>
- Constraints and dependencies: <supplied constraints and verified obligations, with sources>
- Inherited records: <D/A/Q identifiers and their current disposition; retain source attribution>
- Register handoff: <canonical location, transferred intake IDs/history, and updated brief locator or explicit transfer notice when the brief cannot be edited; or existing register retained>
- Intake readiness: <status and any clarification that resolved an intake blocker>

## 1. Current State Behavior Map

### System context and investigation boundary

<Describe the relevant domains, components, entry points, actors, and external systems. Explain the investigation boundary, unavailable sources, and any baseline that does not yet exist.>

### Current behavior

| ID | Actor, trigger, and preconditions | Existing behavior and outcome | Domain or boundary | Evidence and claim status | Unknowns or conflicts |
| --- | --- | --- | --- | --- | --- |
| CB1 | <who acts, when, under which conditions> | <rules, observable result, and relevant failure behavior> | <responsible domain and connected parties> | <E IDs; Observed / Supported / Reported / Inferred / Unknown> | <Q/A IDs or None> |

### Relevant data, states, and flows

<Describe entities, ownership, relationships, state transitions, information exchanged across boundaries, and asynchronous outcomes. Reference CB/E IDs. Use a transition table or diagram only where it clarifies the behavior; omit this subsection if the current-behavior records already capture the relevant detail.>

### Evidence index

| ID | Source and locator | What it establishes | Limits or conflicting evidence |
| --- | --- | --- | --- |
| E1 | <repository/path and symbol or line; test case; document section; requester message; observed check> | <specific claim supported by this source> | <version, environment, not executed, reported only, incomplete coverage, or discrepancy> |

Checks performed: <checks actually run, their outcomes, and relevant environment; or Not run and the evidence used instead>

## 2. Cross-Domain Impact Matrix

| ID | Domain, actor, or integration | Direct or indirect effect and causal link | Baseline and evidence | Change or preservation implication | Dependencies, conflicts, or questions | Related behavior |
| --- | --- | --- | --- | --- | --- | --- |
| I1 | <affected area> | <effect, why it follows from the assignment, and whether verified or potential> | <CB/E IDs or explicit gap> | <observable consequence or preservation obligation and its authority> | <connected system, scope implication, D/A/Q IDs, or None> | <B IDs> |

Investigation limits and excluded impact paths: <what was not traced further and why; distinguish confirmed exclusions from unverified boundaries>

## 3. Behavioral Change Map

<!-- Use B IDs again in section 4. Keep the full target definition there; this map summarizes the delta and its authority. Add/Change/Remove/Preserve are change types, not confirmation statuses. A proposed preservation rule remains proposed until its authority is established. -->

| ID | Type | Current behavior | Intended difference or invariant | Affected domains and impacts | Authority and confirmation status |
| --- | --- | --- | --- | --- | --- |
| B1 | <Add / Change / Remove / Preserve> | <CB IDs, or No existing baseline with reason> | <short summary; full definition in section 4 when confirmed> | <domains and I IDs> | <brief/request, D IDs, or sourced constraint; Confirmed / Proposed / Blocked> |

## 4. Confirmed Behavioral Specification

Confirmed coverage: <which B IDs are defined and confirmed; identify blocked or proposed B IDs that are not yet confirmed>

<!-- Repeat the record below for each significant behavior, or combine closely related behaviors into a coherent workflow with stable B references. Include only relevant fields; make material gaps visible. Do not fill a gap by selecting an unconfirmed option. -->

### B1 — <behavior or workflow name>

- Confirmation source: <explicit request, confirmed D IDs, or applicable established constraint>
- Actor and trigger: <who or what starts the behavior>
- Preconditions and permissions: <conditions, authorization, ownership, and applicable states>
- Expected behavior: <business rules and externally observable results>
- State and data effects: <transitions, relationships, ownership, and lifecycle consequences>
- Cross-domain outcomes: <interactions, information exchanged, and what completion means>
- Alternative and failure paths: <relevant invalid state, denial, dependency failure, repeated action, or partial outcome>
- Preservation and compatibility: <existing behavior or contracts that remain applicable, with references>
- Traceability: <objective/scope source, CB IDs, I IDs, D IDs, and evidence where relevant>

Incomplete behaviors: <B IDs, related Q/A IDs, and what cannot yet be specified; or None>

## 5. Decision Register

<!-- This section is canonical unless the assignment already has another canonical register. In that case, link its exact location instead of reproducing these tables as a second current register. Preserve inherited IDs, sources, and history; update the brief's canonical-location pointer on transfer or record an explicit transfer notice above. Later stages add/update records at this location. A changed confirmed decision gets a new D ID and supersession link. -->

### Confirmed decisions

| ID | Decision and rationale | Confirmed by and source | Affected records | Status or supersession |
| --- | --- | --- | --- | --- |
| D1 | <chosen behavior and relevant tradeoff; distinguish from repository findings> | <requester or designated decision-maker; message/document and date if available> | <scope, CB/I/B IDs, or downstream artifacts> | <Current / Superseded by D ID> |

### Working assumptions

| ID | Unverified premise and why it is needed | Consequence if false | Verification action and person or source | Status and affected records |
| --- | --- | --- | --- | --- |
| A1 | <working premise, not a behavioral decision> | <effect on scope, evidence, or expected behavior> | <how and by whom it can be checked, if known> | <Open / Verified / Rejected; E/D/Q and CB/I/B links> |

### Questions and blockers

| ID | Question or missing evidence | Why it matters and affected records | Blocking or nonblocking; rationale | Person or source and next action | Status and resolution source |
| --- | --- | --- | --- | --- | --- |
| Q1 | <specific unresolved fact, choice, or conflict> | <behavior, scope, impact, or gate affected> | <Blocking / Nonblocking; behavioral consequence or reason it cannot change agreed behavior> | <who or what can resolve it and what is needed> | <Open / Resolved / Deferred; answer and E/D IDs when resolved> |

<!-- Preserve inherited D/A/Q IDs. Continue existing sequences. Keep superseded decisions traceable. If a category has no records, say None rather than retaining a placeholder row. Resolved questions keep their answer and source. -->

Pending canonical updates: <proposed transfer/addition/disposition change that could not be registered, required owner/action, and material blocker; or None. These are not current authoritative records.>

## Readiness and downstream handoff

### Review-return corrections, when applicable

| Finding / task | Updated artifact/version and records | Authority and correction evidence | Submission disposition / blocker |
| --- | --- | --- | --- |
| <RV/RW IDs and review source> | <changed E/CB/I/B records and canonical D/A/Q links> | <inspected evidence or confirmed decision and exact correction> | <Addressed—pending recheck / Blocked; dependent work or exact unblock action> |

Shared rework history: <review-rework.md attempt history and current no-progress count; or None>

Review alone verifies finding closure; discovery readiness does not restore dependent readiness.

### Gate assessment

| Gate | Result | Evidence or remaining gap |
| --- | --- | --- |
| Intake intent and scope are consistent and sufficiently clear | <Pass / Fail> | <source, clarification, or blocker> |
| Current-state behavior and significant impacts are supported | <Pass / Fail> | <coverage, evidence limits, and unresolved conflicts> |
| Requested changes and preservation obligations are mapped | <Pass / Fail> | <B/I coverage and authority> |
| Material behavioral ambiguities and assumptions are resolved | <Pass / Fail> | <D/A/Q references> |
| Behavioral specification and traceability are coherent | <Pass / Fail> | <complete B coverage and source links> |

Readiness rationale: <why the overall status follows from the gate results; any failed gate prevents Ready for requirements>

Blocking items: <Q/A IDs, affected outputs, required input or decision, and person or source if known; or None>

Nonblocking follow-up: <bounded follow-up and why it cannot materially change confirmed behavior or scope; or None>

Downstream drafting should use:

- <confirmed B IDs and workflows to carry into user stories, requirements, and acceptance criteria>
- <preservation obligations, dependencies, and decisions that need downstream traceability>

### Source changes and dependent revalidation

| Artifact / records and version | Source change | Invalidated readiness / approval | Required checks and next owner | Currency |
| --- | --- | --- | --- | --- |
| <affected brief/discovery/refinement/review/assembly records> | <changed E/CB/I/B/D record and authority> | <prior verdict/baseline or None> | <checks needed, responsible stage, and evidence when rechecked> | <Current / Needs revalidation> |

<!-- Use None if no source change requires revalidation. Record invalidation here even when a dependent artifact cannot be edited. Restore Current only after affected checks pass; currency is separate from stage status. -->

This status covers discovery readiness for requirements work. It does not establish final approval or engineering readiness.
