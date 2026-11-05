---
name: test-analysis
description: Analyze a reviewed engineering specification, implementation plan, and repository to assess existing coverage, prioritize failure and regression risks, and scope downstream test design. Use after specification review and engineering planning, before specialized test design or when those inputs change. Does not write test cases or implement tests.
---

# Test Analysis

Determine what verification the planned change needs, what existing tests actually establish, and where failures would matter most. Produce an evidence-backed analysis that specialized test-design work can use without repeating initial discovery.

## Responsibilities and boundaries

Produce seven connected outputs, proportionate to the assignment:

1. **Change Summary** — intended behavior, affected implementation areas, and direct or indirect impacts.
2. **Testing Scope Assessment** — justified verification depth for each affected area.
3. **Existing Coverage Inventory** — inspected tests, actual assertions, limits, gaps, and recommended actions.
4. **Risk Register** — prioritized failure conditions, consequences, and verification focus.
5. **Testing Recommendations** — bounded work packages for relevant test-design categories.
6. **Testability Concerns** — feasibility gaps, dependencies, and required planning or specification corrections.
7. **Traceability** — requirement and acceptance coverage linked to plan areas, existing tests, risks, and recommendations.

Analyze testing needs; do not implement tests, write detailed executable cases, choose selectors or assertion code, or modify production code or the implementation plan. Reuse supplied acceptance scenarios as behavioral authority without expanding them into a test suite. Required fixes are handoff actions, not silent edits to approved sources.

Keep effort proportional to changed behavior, complexity, existing coverage, criticality, and the cost of undetected failure. New tests and every possible testing category are not mandatory. A small change may need only existing checks or inspection; a cross-domain change may need several complementary levels.

## 1. Receive and check the engineering handoff

Expect a complete specification from the `spec-*` workflow and a substantive implementation plan. Read the assembled **Engineering Specification**, normally `engineering-specification.md`, and its linked current catalogs and review verdict from [spec-review](../spec-review/SKILL.md). Consume:

- Objective, scope and exclusions, confirmed Add/Change/Remove/Preserve behavior, actors, states, data, and integration obligations.
- User stories and scenarios, functional and non-functional requirements, acceptance criteria, and Definition of Done.
- Applicable constraints, confirmed decisions, canonical D/A/Q register, review findings, and any required approval evidence.

Read the full supplied implementation plan: proposed components, interfaces, APIs, business rules, state/data changes, migrations, dependencies, sequencing, and relevant rollout or compatibility work. Identify its location and existing task/step IDs; no particular plan filename or planning skill is required. Use the specification for required outcomes and the plan for the intended implementation. A plan cannot override a confirmed requirement.

Record input versions, repository/revision and relevant local changes, analysis boundary, and available access. Check that the specification is **Ready for engineering** and **Current**, with approval only where the assignment requires it, and that the plan covers the same baseline. Equivalent supplied artifacts are sufficient when they establish the same authority and detail; prior skill invocation and filenames are not gates. Consult intake/discovery/refinement sources only where linked context or a suspected discrepancy requires it, rather than repeating their work.

If a required input is absent, stale, inaccessible, or materially inconsistent, identify the affected records and exact missing information. Continue independent analysis where useful, keeping dependent conclusions provisional. Do not invent a plan, intended behavior, or evidence of approval. If no further useful work can resolve a material gap, save the partial report as **Blocked at test analysis** with the required source, decision, or access.

## 2. Map the change and inspect existing coverage

Map each current in-scope `FR`/`NFR` and its material `AC` outcomes to planned areas, interfaces, and affected journeys. Include preserved and removed behavior and indirect consumers of shared code, data, events, or contracts. Distinguish current implementation, planned changes, and implemented portions when implementation has already begun. Inspect relevant entry points and dependency paths to verify the plan's impact map; record significant mismatches without silently rewriting the plan.

Find the relevant test suites, utilities, fixtures, configuration, and CI selection rules. Reuse supplied coverage reports, known defects, incident evidence, and design references where relevant and current. Inspect test bodies, assertions, setup, mocks, and execution selection, not just filenames or test titles. Determine:

- Which exact behavior, input partitions, state/data effects, and acceptance outcomes existing assertions verify.
- Whether mocked boundaries omit an integration contract, and whether skipped, disabled, flaky, or excluded tests can supply reliable evidence.
- Which tests to **Retain**, **Extend**, **Modify**, **Replace**, or **Run for regression**, with the reason and any dependency on planned changes. Replacement should retain still-required obligations.
- Missing or weak coverage, relevant frameworks and conventions, fixture limitations, and local/CI execution constraints.

Use precise locators: repository/path plus test or symbol, document section and version, or observed command/result. Retain the repository's evidence claim statuses: **Observed**, **Supported**, **Reported**, **Inferred**, or **Unknown**. Reading a test supports an assertion-coverage claim; it does not establish a pass, CI inclusion, or continued applicability after a future change. Coverage percentages do not prove behavioral coverage. An absent search result is not proof of no tests; record the search boundary and unavailable suites.

Run existing focused checks only when they materially resolve an analysis uncertainty and are feasible within the authorized environment. Record actual command, revision, environment, outcome, and limits; otherwise state **Not run**. Distinguish a current failure from a predicted failure under the plan. For a new capability or repository with no tests, record the absent baseline and assess surrounding contracts and setup needs without inventing coverage.

**Coverage gate:** All current requirements and material acceptance outcomes have an assessed disposition. Relevant coverage claims are grounded in inspected assertions, and unexamined or unavailable evidence remains explicit.

## 3. Decide verification depth and discover risks

Use these classifications for each affected area, allowing different classifications within one assignment:

| Classification | Meaning |
| --- | --- |
| Verification only | No new automated tests are justified; identify the required manual, visual, static, or other inspection and its evaluation basis |
| Existing coverage sufficient | Inspected, applicable automated tests cover the required outcomes; identify the existing checks to execute and any execution limits |
| Focused testing | Specific coverage gaps need new or modified tests at selected levels |
| Comprehensive testing | Several complementary levels or substantial regression work are justified by the change and its risks |

Give an explicit rationale for every decision to omit new tests, grounded in changed behavior, inspected coverage or an appropriate alternative verification method, impact, and remaining risk. Missing access or infrastructure cannot justify a sufficiency claim. Distinguish **Verification only** from **Existing coverage sufficient** by the evidence needed to verify the change. Give an overall assessment that summarizes the area decisions without averaging away a high-risk gap.

Use [the analysis guide](references/analysis-guide.md) to select relevant risk lenses, calibrate priorities, and allocate coverage. Assess requirement boundaries and invalid inputs, state/lifecycle transitions and recovery, architecture and integration failures, asynchronous or concurrent effects, change-induced regressions, critical business paths, and available defect history. Select relevant lenses rather than populating unrelated categories.

For each significant risk, record trigger conditions, potential failure and consequence, affected requirement/AC and plan area, supporting evidence or explicit inference, likelihood and impact with reasons, priority, and recommended verification focus. Separate a credible future failure from a known defect or unresolved choice. Deduplicate risks with the same cause and consequence while retaining their affected outcomes.

A missing behavioral answer is a specification question, not permission to choose an expected result. Do not invent numeric quality thresholds, retry or retention rules, security policies, or preservation obligations. Route objective/scope choices to intake, baseline or intended-behavior gaps to discovery, derivation/AC gaps to refinement, and review/assembly/readiness discrepancies to review. Route implementation feasibility and testability corrections to the plan owner. Record exact affected IDs, consequence, dependency, and observable unblock condition.

**Risk gate:** Material failure modes and regression paths have evidence or a defensible causal explanation, priority, and a verification or explicit unresolved disposition. Scope and no-new-test decisions agree with those risks.

## 4. Scope downstream test design and assess feasibility

Recommend only categories justified by an identified requirement, risk, or applicable project obligation: unit, integration, E2E, component, visual, accessibility, security, performance, or another established category. Prefer the least costly reliable level for a behavior, adding another level when it verifies a distinct boundary, outcome, or mandated assurance. Explain useful overlap; avoid duplicating all acceptance scenarios at every level.

For each work package, identify:

- Category and existing specialized skill if available; otherwise name the capability needed without inventing a skill or invoking it.
- Requirement/AC IDs, risks, impacted areas and plan tasks, priority, and behavioral focus or invariant to verify.
- Relevant existing tests and their proposed actions, fixtures, utilities, conventions, and source locators.
- Intended observation boundary, real versus simulated dependencies where material, and constraints needed for reliable verification.
- Dependencies, prerequisites, and boundaries with other work packages; expected design output and what evidence it should eventually establish.

For areas requiring no new design, hand off the selected existing checks or inspection focus and evaluation basis instead. Keep recommendations at the level of coverage objectives and meaningful partitions; leave detailed test cases, datasets, execution steps, and implementation to downstream design.

Identify missing deterministic data or clocks, dependency controls, environments, observability, stable interfaces, design baselines, or CI capability only where they obstruct recommended verification. State why existing facilities are insufficient, the required capability or plan correction, responsible owner if known, and resolution evidence. Distinguish a prerequisite for **test design** from one needed later for **implementation/execution**; a bounded later setup task need not block design. Flag any unresolved choice that could materially change scope, expected outcomes, category selection, or feasibility as a design blocker.

## 5. Reconcile, package, and maintain currency

Use [the test analysis template](assets/test-analysis-template.md). Adapt tables and depth to the assignment; combine concise records or explain irrelevant sections rather than manufacturing content. Save at the requested destination or established assignment location. Otherwise use `test-analysis.md` beside the engineering specification, or in the assignment working directory when no specification file exists. Inspect an existing destination before updating it so an unrelated assignment is not overwritten.

Preserve inherited `E/CB/I/B/D/A/Q/US/SC/FR/NFR/AC` IDs and any review or plan IDs. Follow established assignment conventions; otherwise use `TA1` for scope areas, `TC1` for existing coverage records, `TR1` for risks, `TD1` for downstream work packages, and `TB1` for testability or blocking concerns. Continue sequences on updates and retain supersession links. Continue the established E sequence for new evidence, or cite precise sources directly when separate evidence records add no value.

Trace every current requirement and its material acceptance outcomes to plan areas, inspected coverage and gaps, risks where applicable, and a recommendation or justified no-new-test disposition. Reverse-check that every proposed testing activity addresses an in-scope obligation or credible change-related risk. No-risk-found and not-applicable links need reasons, not fabricated risks or blanket mappings. Inherited superseded records retain replacement links and do not count toward current coverage.

Link questions and decisions to the assignment's canonical D/A/Q register, normally discovery report section 5; do not create a competing register. Add or resolve canonical records only within the authorized assignment and preserve sources and history. Otherwise record the proposed update and exact owning-stage action in the concern/handoff record. Analysis recommendations are not confirmed product decisions.

On updates, compare specification, plan, code, and test versions with the prior analysis. Reassess affected coverage, risks, recommendations, and trace rows; preserve independent valid findings. Track **Current** or **Needs revalidation** separately from stage status. Mark this analysis and affected downstream test-design artifacts **Needs revalidation** when their sources change materially, identifying affected IDs/versions and required checks in the handoff when direct updates are unavailable. Restore currency only after the affected checks pass. Do not claim to change upstream approval or review verdicts; report the discrepancy to the owning stage.

## Completion and test-design handoff

Mark the report **Ready for test design** only when:

- The current specification and implementation plan are sufficient, mutually consistent, and tied to the recorded repository baseline.
- Every current in-scope requirement and material acceptance outcome has been considered, including preservation, removal, and relevant non-functional obligations.
- Relevant existing tests and actual assertions have been examined; execution status and evidence limits are explicit.
- Area classifications and every decision to omit new tests are justified; material failure and regression risks are prioritized and dispositioned.
- Recommended categories address the identified needs with purposeful overlap, and work packages give downstream designers sufficient sources, scope, and context.
- Testability concerns have owners or required actions, dependencies distinguish design from execution, and no unresolved material choice or evidence gap prevents design.
- Traceability resolves in both directions and the analysis is **Current** for its declared inputs.

Use **In progress** while investigation or clarification continues. Use **Blocked at test analysis** when a material gap prevents completion and no further independent work can resolve it; save useful partial findings and name exact unblock actions. Bounded execution prerequisites may remain nonblocking when they cannot change the design conclusions. Do not describe an inaccessible coverage area as assessed merely to pass the gate.

Return the report location, readiness and currency, overall testing scope, downstream categories or justified no-new-test outcome, and remaining blockers. Readiness means that test design can proceed; it does not establish that tests passed, coverage has been implemented, or the change is ready for release.
