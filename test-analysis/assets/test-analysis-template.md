# Test Analysis: <assignment title>

Status: <In progress | Blocked at test analysis | Ready for test design>
Currency: <Current | Needs revalidation; prior readiness is unusable while revalidation is pending>
Analysis version: <version and actual date if known>
Specification and review baseline: <engineering specification, canonical catalogs, and review verdict locations/versions>
Implementation plan: <location/version and relevant task/step IDs>
Repository baseline: <repository/revision, relevant local changes, and whether work is planned, partial, or implemented>
Canonical D/A/Q register: <exact source location/version>

<!-- Replace placeholders with source-backed findings. Keep all seven output categories; combine concise sections or explain non-applicability for small assignments. Remove unused rows and these comments. Unknown or inaccessible evidence is not a sufficient-coverage claim. -->

## Inputs and investigation boundary

| Source | Location and version | What it establishes | Currency, readiness, or limitation |
| --- | --- | --- | --- |
| <specification/catalog, review, plan, repository, policy, CI, report, design, or incident> | <precise locator> | <behavioral authority, proposed design, observed baseline, or execution evidence> | <actual checks and material limits> |

Investigation scope: <inspected modules, dependency paths, suites, search boundary, and unavailable evidence>

Input discrepancies: <affected IDs/versions, consequences, and linked TB/canonical question; or None>

## 1. Change Summary

Objective and scope: <intended outcome, actors, exclusions, and supplied constraints>

| Behavior / requirements | Change type and intended outcome | Planned areas and task IDs | Indirect impacts and preservation obligations |
| --- | --- | --- | --- |
| <B/FR/NFR/AC or exact source locator> | <Add / Change / Remove / Preserve; observable effect> | <modules, interfaces, state/data flows; distinguish current from planned> | <consumers, shared paths, integrations; sourced obligations> |

## 2. Testing Scope Assessment

Overall assessment: <Verification only / Existing coverage sufficient / Focused testing / Comprehensive testing; rationale and material area differences>

| ID / affected area | Requirements and plan links | Classification | Evidence and rationale | Required verification / residual risk |
| --- | --- | --- | --- | --- |
| TA1 / <area> | <FR/NFR/AC and tasks> | <classification> | <coverage, behavior change, complexity, impact; explicit justification if no new tests> | <TC/TR/TD or inspection method and evaluation basis; unresolved TB links> |

## 3. Existing Coverage Inventory

| ID / precise test locator | Requirements / outcomes actually asserted | Limits and gaps | Recommended action and reason | Execution evidence |
| --- | --- | --- | --- | --- |
| TC1 / <repository/path and test/symbol> | <exact FR/NFR/AC outcome or subset; claim status> | <missing partitions/effects, mocked boundary, CI exclusion, skip/flakiness, or future applicability> | <Retain / Extend / Modify / Replace / Run for regression; related TA/TR/TD> | <Not run, or actual command/result, revision, environment, and limits> |

Testing context: <frameworks, conventions, relevant fixtures/utilities, CI selection, commands, and constraints with source locators>

Missing or unavailable coverage: <searched areas with no relevant tests, inaccessible suites, or unsupported coverage-report claims; affected requirement/AC outcomes and consequences>

## 4. Risk Register

| ID / failure scenario and trigger | Affected behavior and consequence | Requirement / plan links and evidence | Likelihood / impact and rationale | Priority and recommended focus |
| --- | --- | --- | --- | --- |
| TR1 / <conditions and potential failure> | <effect on users, state, consumers, or preserved behavior> | <FR/NFR/AC, tasks/paths, sources; observed defect versus inferred risk> | <High / Medium / Low / Unknown for each, with reasons> | <High / Medium / Low with reason; TD/TC/TB links or justified disposition> |

Risk limits: <unresolved choices, inaccessible boundaries, deduplication or important no-risk-found conclusions; or None>

## 5. Testing Recommendations and Design Handoff

<!-- Repeat a concise work package per justified category or coherent focus. Name a specialized skill only if it actually exists in the target environment. Omit new-design packages when existing checks or inspection are sufficient, recording those actions below instead. -->

### TD1 — <category and behavioral focus>

- Designer/capability: <available specialized skill and location, or category needed>
- Priority and coverage: <TA/TR/FR/NFR/AC and plan IDs; why this category is needed>
- Verification focus: <observable outcomes, invariants, or meaningful partitions; no detailed test cases>
- Existing assets and actions: <TC IDs, precise test/fixture/utility locations, conventions>
- Observation boundary: <what must be observed, material real/simulated dependency constraints, and source context>
- Dependencies and feasibility: <TB IDs, upstream choices, prerequisites for design versus later execution>
- Coverage boundaries: <related TD packages, distinct purpose of any overlap, and exclusions>
- Expected handoff result: <design scope and evidence the eventual verification should establish>

Existing-check or inspection handoff: <TA/TC IDs, checks to execute or manual/visual/static focus and evaluation basis, responsible capability; or None>

## 6. Testability Concerns and Required Corrections

| ID / concern | Evidence and consequence | Affected records / dependency timing | Owner or required source | Required action and resolution evidence | Disposition |
| --- | --- | --- | --- | --- | --- |
| TB1 / <gap or unresolved choice> | <missing capability, contradiction, or unavailable fact; exact source> | <TA/TC/TR/TD/FR/NFR/AC/tasks; design prerequisite or later implementation/execution> | <intake/discovery/refinement/review, plan owner, or responsible source> | <specific correction, decision, setup, or access and observable unblock condition> | <Open / Resolved / Nonblocking follow-up; reason and evidence> |

Canonical register updates: <existing D/A/Q links and sourced changes registered there; or proposed updates with owning-stage action if unavailable. Do not define a competing register.>

## 7. Traceability and Currency

| Current requirement and material AC outcomes | Plan area / TA scope | Existing coverage and gaps | Risks | Recommended verification or justified no-new-test disposition |
| --- | --- | --- | --- | --- |
| <FR/NFR and exact AC coverage; split rows where dispositions differ> | <tasks/paths; TA IDs> | <TC IDs and covered/missing outcomes, or explicit absent/unavailable baseline> | <TR IDs or no material risk found with reason> | <TD IDs, existing checks, or inspection with rationale; TB dependencies> |

Reconciliation: <all current requirements and material AC outcomes considered; preserved/removed behavior, NFR and applicable DoD included; reverse-trace activities; superseded records excluded with replacement links>

Changed baselines and dependent revalidation: <changed source versions/IDs, affected analysis and downstream design records, Current / Needs revalidation, required checks and evidence; or None>

## Readiness and Handoff

| Gate | Result | Evidence or remaining gap |
| --- | --- | --- |
| Specification, plan, and repository baseline are sufficient and consistent | <Pass / Fail> | <input checks and TB links> |
| All requirements and material acceptance outcomes have an assessed disposition | <Pass / Fail> | <trace reconciliation and coverage limits> |
| Existing coverage claims reflect inspected assertions and honest execution status | <Pass / Fail> | <TC records and unavailable evidence> |
| Scope decisions, omissions, and material risks are justified | <Pass / Fail> | <TA/TR and no-new-test rationales> |
| Recommendations are actionable, proportionate, and complementary | <Pass / Fail> | <TD boundaries and context, or justified no-new-design handoff> |
| Testability and unresolved issues permit design | <Pass / Fail> | <TB dispositions; distinguish later execution prerequisites> |
| Traceability and input/dependent currency are reconciled | <Pass / Fail> | <version and forward/reverse checks> |

Readiness rationale: <why the overall status follows; any failed gate or Needs revalidation currency prevents Ready for test design>

Blocking items and exact unblock actions: <TB/Q IDs, affected outcomes, source/owner, and required correction; or None>

Nonblocking follow-up: <bounded later setup/execution work and why it cannot change design conclusions; or None>

Handoff package and next action: <this report, exact source versions and relevant test/plan locators, downstream categories or existing verification work>

This status establishes readiness for test design. It does not establish implemented coverage, passing tests, completed acceptance, or release readiness.
