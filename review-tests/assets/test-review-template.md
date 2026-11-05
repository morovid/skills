# Implemented Test Review: <assignment>

Round / report version: <round, version, actual date if known>
Verdict: <PASS | REVISE | BLOCKED>
Currency: <Current | Needs revalidation>
Boundary: <Full gate | Limited; categories, areas, exclusions>
Author / reviewer: <identities and independence evidence; or self-check>

## 1. Reviewed baseline

| Input | Exact location / version / snapshot | Readiness, currency, and limits |
| --- | --- | --- |
| Specification, review index, catalogs, canonical decisions | <sources> | <authority and required approvals> |
| Production implementation plan and review | <sources> | <readiness and drift reconciliation> |
| Test analysis, category designs, test implementation plan and review | <sources> | <scope, readiness, no-new-test dispositions> |
| Repository/instructions, production code, tests, fixtures, runner/CI | <revision/snapshot and local changes> | <inspection boundary, environment and reference versions> |
| Prior test review / author responses | <sources> | <retained checks and revalidation> |

## 2. Quality checks

| Check | Result | Precise evidence and limits | Finding / non-applicability rationale |
| --- | --- | --- | --- |
| <one row per TRV1–TRV8 and supplied condition> | <Pass / Fail / Not assessed / Not applicable> | <locators and claim status> | <IDs or reason> |

## 3. Separate conformity assessments

| Current source obligation / exact material outcome | Oracle authority | Actual assertion, existing check, or justified inspection/disposition | Specification conclusion / gap |
| --- | --- | --- | --- |
| <FR/NFR/AC/B/I/DoD and version> | <source clause> | <test/helper locators, observed boundary, evidence limits> | <result and finding> |

| Designed case / plan work / TA/TC/TR/TD/TB | Planned action and boundary | Actual implementation or verification evidence | Plan conclusion / deviation / owner disposition |
| --- | --- | --- | --- |
| <IDs and category version> | <Create/Retain/Extend/Modify/Replace/Run for regression/Verification only; task and dependencies> | <test, fixture, config, assertion/check locators> | <result and required reconciliation> |

Reverse scope check: <unsupported expectations or None; uninspected scope>
Sensitivity assessment: <plausible violations, actual detecting assertions, masking/boundary defects and evidence>
Retained/replacement coverage: <original and retained outcomes, deduplication dispositions, no-new-test evidence>

## 4. Execution evidence

| Actual command / discovery / selection | Snapshot and environment | Result / skips / failures / artifacts | Limits and failure classification |
| --- | --- | --- | --- |
| <actual check or Not run; proposed commands labeled> | <production/test/config/reference versions and local changes> | <exit status, case results, evidence> | <test/product/environment/unresolved with evidence; affected gates> |

Execution conclusion: <what ran, what remains unverified, required next evidence>

## 5. Findings and corrections

### TREV-001 — <concrete issue>

- Severity / check: <Blocking | Major | Minor; rubric condition>
- Evidence / claim status: <exact spec/design/plan/test/product/execution locators and limits>
- Affected IDs / consequence: <missed violation, false failure, lost coverage, or other actual defect>
- Owner / correction: <test author, designer, analyst, production author, or specification owner; required action>
- Closure condition: <observable evidence; preserve correct assertions exposing product defects>
- Disposition / closure: <Open | Resolved | Nonblocking follow-up | Superseded; reviewer evidence/version and authority where required>

## 6. Rechecks and verdict

| Round / finding | Submitted snapshot / response | Recheck evidence and result | Material progress / unsuccessful recheck count | Next action |
| --- | --- | --- | --- | --- |
| <round / ID> | <version / locator> | <closure or remaining condition> | <reason/count> | <owner/action> |

Specification conclusion: <supported outcomes, oracle defects, coverage gaps and unassessed obligations>
Test-plan conclusion: <implemented coverage, existing-test actions, deviations and reconciliation>
Gate rationale: <why verdict follows; required execution and minor follow-up dispositions>
Blockers / next owner: <exact action and evidence; or None>
History / revalidation: <prior version-bound verdicts, retained evidence, affected downstream versions/IDs and required checks>

PASS is bound to this test/source/product snapshot and scope. It does not replace production-code review or release acceptance.
