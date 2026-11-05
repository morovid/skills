# Refinement Report: <assignment title>

Status: <In progress | Blocked at refinement | Ready for review>
Currency: <Current | Needs revalidation; prior readiness is unusable while revalidation is pending>
Source brief: <link or equivalent supplied request>
Source discovery: <link or equivalent behavioral handoff>
Review return, if any: <review report/rework packet and exact versions; or None>
Input baseline: <artifact versions/revisions and relevant repository revision, or known limitations>
Refinement depth: <Small | Moderate | Complex | Uncertain; rationale and any change from discovery>

<!-- Replace placeholders with assignment-specific content and remove these comments. Preserve the output categories, but combine sections or use prose for a small change. Use Unknown, Not specified, or Not applicable with a reason instead of inventing facts. Remove unused example rows. Defined requirements are fully specified, not independently reviewed or approved. -->

## Assignment and source handoff

- Objective and intended outcome: <source-linked purpose and desired result>
- Actors and boundaries: <users, systems, affected domains, and relevant terminology>
- Confirmed scope: <included behavior and authority>
- Confirmed exclusions: <explicit exclusions or Not specified>
- Supplied success measures: <measure and source, or Not specified; distinguish business outcomes from acceptance obligations>
- Constraints and dependencies: <applicable supplied constraints and verified obligations with sources>
- Upstream readiness: <intake/discovery status, applicability checks, and any resolved or remaining gap>
- Confirmed behavior to refine: <B IDs and locators; distinguish any proposed or blocked behaviors excluded from normative drafting>
- Inherited decisions, assumptions, and questions: <D/A/Q IDs, source register, and relevant dispositions>
- Evidence limits: <missing access, outdated sources, unverified claims, or None; retain upstream claim status>

### Supplemental evidence, if collected during refinement

<!-- Link to discovery's evidence index for existing findings. Add records here only for new evidence used during focused verification, continuing the E sequence. If no new evidence was needed, omit this subsection. -->

| ID | Source and locator | Claim established and status | Limits or check outcome |
| --- | --- | --- | --- |
| <next E ID> | <repository/revision/path and symbol; document section; observed check> | <specific finding; Observed / Supported / Reported / Inferred / Unknown> | <what was inspected versus executed, actual result, environment, or unresolved conflict> |

## 1. User Story Catalog

| ID | Actor, capability, and benefit | Source objective / behavior | Related impacts and decisions |
| --- | --- | --- | --- |
| US1 | As <actor>, I want <capability>, so that <benefit>. | <objective/scope locator; B IDs> | <I/D IDs or applicable source> |

System-level obligations without a user story: <requirement/scenario IDs and why a story adds no useful actor goal; or None>

## 2. E2E Scenario Map

<!-- Add scenario records as needed; the map summarizes coverage while each record defines the flow. Keep one authoritative definition of each scenario. Do not imply every scenario type applies to every assignment. -->

| ID | Flow and change type | Path / coverage purpose | Baseline | Related stories and behaviors |
| --- | --- | --- | --- | --- |
| SC1 | <flow; Existing—preserve / Existing—modify / New / Existing—remove> | <normal / alternative / boundary / denial / failure / recovery, as relevant> | <CB/E locator or no baseline with reason> | <US/B IDs; explicit reason if no story applies> |

### SC1 — <scenario name>

- Actor or external trigger: <who or what initiates the flow>
- Preconditions and starting state: <permissions, ownership, input boundaries, data, and relevant dependency state>
- Actions and cross-domain interactions:
  1. <domain-level action>
  2. <response or interaction at the next relevant boundary>
- Expected outcomes: <observable results for relevant actors/systems, including intermediate versus completed outcomes>
- State and data effects: <resulting states, ownership, lifecycle, and any unchanged data>
- Change from baseline: <what is modified or removed; or new/preserved behavior and its source>
- Alternative, failure, and recovery links: <other SC IDs or relevant outcomes captured here; omit irrelevant paths with a reason>
- Preservation obligations: <B/FR/NFR IDs and authority; or None relevant>
- Traceability: <US/B/CB/I/D/E IDs and applicable source locators>
- Completeness: <Complete / Incomplete; Q/A IDs and missing rule if incomplete>

Coverage and investigation limits: <significant paths assessed, justified exclusions, and unresolved scenarios; avoid claiming exhaustive coverage without support>

## 3. Requirements Catalog

<!-- Repeat the record for each FR/NFR. A compact table is also suitable if it preserves each obligation, its source, and verification conditions. Express behavioral invariants within this catalog rather than introducing an unlinked list of rules. -->

### Functional requirements

#### FR1 — <short name>

- Obligation: <under condition/trigger, the responsible actor/system must produce a specific observable outcome>
- Rules and boundaries: <applicable permissions, calculations and units, ownership, data/lifecycle/state rules, integration effects, or invariant scope>
- Authority and rationale: <brief/confirmed B/D/constraint source; why the obligation follows>
- Related records: <US/SC/I/CB IDs as applicable>
- Status: <Defined / Incomplete / Superseded; blocking Q/A IDs or replacement ID as applicable>

### Non-functional requirements

Relevance assessment: <which qualities apply and why; if none add a distinct obligation, explain with reference to the assignment boundary and applicable constraints>

#### NFR1 — <quality and short name>

- Obligation: <required property under stated conditions>
- Evaluation conditions: <workload, environment, population, timing boundary, observation window, or other material context>
- Pass/fail target: <sourced threshold with units or objectively verifiable categorical property; unresolved required targets remain explicit gaps>
- Verification method: <measurement or inspection that can establish the property, without prescribing an unrequired implementation>
- Authority and rationale: <supplied measure, confirmed D/B record, or applicable established constraint>
- Related records: <US/SC/I/CB IDs as applicable>
- Status: <Defined / Incomplete / Superseded; blocking Q/A IDs or replacement ID as applicable>

## 4. Acceptance Criteria

<!-- Repeat for each criterion. Use Given/When/Then or an equivalent condition/evaluation/result format. Each defined requirement needs sufficient coverage, not necessarily exactly one criterion. Criterion authoring is not evidence of a passed implementation check. -->

### AC1 — <observable outcome>

- Requirements evaluated: <exact FR/NFR IDs and obligations checked>
- Scenario coverage: <SC IDs or rationale for a direct invariant/quality check>
- Given / conditions: <starting state, actor eligibility, inputs, dependency conditions, or measurement context>
- When / evaluation: <action, event, inspection, or measurement>
- Then / pass-fail result: <observable output, state/data effects, preserved property, or threshold; include material boundaries>
- Verification method and expected evidence: <how the result can be evaluated; source of the expected result or comparison baseline>
- Completeness: <Complete / Incomplete; Q/A IDs and missing rule if incomplete>

## 5. Traceability Matrix

<!-- Use one row per meaningful coverage relationship; repeat IDs as needed. Do not group unrelated IDs in a row that implies every criterion checks every requirement. Upstream IDs link to their source artifacts. Every confirmed in-scope B must be covered, including preservation and removal. Requirements from a separate applicable constraint may cite that constraint directly and explain why no B applies. -->

| Objective / scope or constraint source | Behavior | Impacts / decisions / authority | Stories | Scenarios | Requirements | Acceptance criteria | Coverage disposition |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <source locator> | <B ID or reason no B applies> | <I/D IDs and other authority> | <US IDs or justified N/A> | <SC IDs or justified N/A> | <FR/NFR IDs> | <AC IDs> | <Covered / Gap / Not applicable with reason and any Q IDs> |

Coverage reconciliation:

- Confirmed in-scope behaviors, including removal and preservation: <coverage summary and any gaps>
- Significant impacts and dependencies: <where addressed or why no new requirement follows>
- Requirements and acceptance: <uncovered requirements, insufficient outcome coverage, or None>
- Reverse trace and scope: <orphan records, scope conflicts, unsupported additions, or None>

## 6. Assignment-Level Definition of Done

<!-- These describe eventual assignment completion. They are not claims that delivery, independent review, approval, or testing occurred during refinement. Include only applicable conditions grounded in this assignment or supplied team rules. -->

- Behavioral acceptance: <AC IDs/coverage needed and evidence that will establish satisfaction>
- Preservation and cross-domain outcomes: <required unchanged rules, integration results, and evidence>
- Relevant non-functional obligations: <NFR/AC IDs and required measurement or inspection evidence; or justified N/A>
- Supplied delivery, documentation, review, or approval conditions: <condition, source, and expected evidence; or Not specified>

## 7. Decisions, Assumptions, Questions, and Revalidation

Canonical D/A/Q register: <exact location, normally discovery report section 5; all current definitions and dispositions live there>

### Register updates and effects on refinement

<!-- Add/update canonical records first, then link them here. This table summarizes effects; it does not define another current register. New confirmed decisions get new D IDs with supersession links. Retained source snapshots are historical and version-bound. -->

| Canonical record and locator | Registered update and authority | Affected refinement records / consequence | Remaining action |
| --- | --- | --- | --- |
| <D/A/Q ID and canonical link> | <addition, sourced resolution, or supersession recorded there> | <US/SC/FR/NFR/AC/DoD IDs; blocking or nonblocking with reason> | <required follow-up and source/person, or None> |

Pending canonical updates: <proposed addition or disposition change that could not be registered, existing ID/link if any, required owner/action, and affected incomplete records; or None. Do not allocate authoritative IDs outside the canonical register.>

### Upstream corrections and dependent revalidation

| Artifact / record and version | Correction or source change | Dependent records and invalidated readiness / approval | Action taken or required and next owner | Currency |
| --- | --- | --- | --- | --- |
| <brief/discovery/downstream path and IDs> | <exact affected content and confirmed source, or discovery gap> | <IDs/artifacts and prior verdict/baseline affected> | <required checks and responsible stage; revalidation evidence when complete> | <Current / Needs revalidation> |

<!-- Currency is separate from stage status. Record invalidation even when a dependent artifact cannot be edited; restore Current only after affected checks pass. -->

## Readiness and Independent Review Handoff

### Review-return corrections, when applicable

<!-- Keep only when responding to review. Preserve RV/RW IDs; the reviewer verifies closure. -->

| Review finding / task | Revised artifact/version and records | Authority and correction evidence | Submission disposition / remaining action |
| --- | --- | --- | --- |
| <RV/RW IDs and review source link> | <US/SC/FR/NFR/AC, traceability, DoD, and any supersession links> | <confirmed B/D/constraint and specific change or comparison> | <Addressed—pending recheck / Blocked; exact upstream dependency or unblock action> |

Downstream revalidation: <assembled specification, review conditions, and approval baselines affected by these corrections; or None>

Shared rework history: <review-rework.md attempt history and current no-progress count; or None>

### Gate assessment

| Gate | Result | Evidence or remaining gap |
| --- | --- | --- |
| Intake intent, scope, and discovery are consistent and sufficient | <Pass / Fail> | <source versions, readiness checks, or blocker> |
| Important flows and outcomes are represented | <Pass / Fail> | <US/SC/B coverage and relevant path coverage> |
| Requirements are sourced, precise, and verifiable | <Pass / Fail> | <FR/NFR coverage, constraints, or missing rules/targets> |
| Acceptance and Definition of Done require no further product decisions | <Pass / Fail> | <AC coverage and objective evaluation conditions> |
| Traceability and dependent records are coherent and current | <Pass / Fail> | <forward/reverse checks and revalidation results> |
| No material questions or unsupported assumptions remain | <Pass / Fail> | <D/A/Q dispositions and bounded follow-up> |

Readiness rationale: <why the overall status follows; any failed gate prevents Ready for review>

Blocking items: <IDs, affected records, missing input/decision, and person/source if known; or None>

Nonblocking follow-up: <bounded action and why it cannot change agreed behavior or acceptance; or None>

Independent review should examine: <review-sensitive flows, boundaries, traceability, evidence limits, or changed decisions; scale to the assignment>

Review package: <this report, linked input versions, and any split catalogs or supporting evidence>

This status records refinement's own checks. It does not establish independent validation, stakeholder approval, successful implementation tests, or engineering readiness.
