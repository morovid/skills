# Production Code Review: <assignment>

Round / report version: <round, version, actual date if known>
Verdict: <PASS | REVISE | BLOCKED>
Currency: <Current | Needs revalidation>
Boundary: <Full gate | Limited; exact scope and exclusions>
Author / reviewer: <identities and independence evidence; or self-check>

## 1. Reviewed baseline

| Input | Exact location / version / snapshot | Readiness, currency, and limits |
| --- | --- | --- |
| Specification, review index, catalogs, canonical decisions | <sources> | <authority and required approval evidence> |
| Implementation plan and plan review | <sources> | <verdict and drift reconciliation> |
| Repository, instructions, relevant configuration | <revision/snapshot, local changes, paths> | <inspection boundary and environment> |
| Prior code review and author responses | <sources> | <retained checks and revalidation> |

## 2. Quality checks

| Check | Result | Precise evidence and limits | Finding / non-applicability rationale |
| --- | --- | --- | --- |
| <one row for each CR1–CR8 and supplied condition> | <Pass / Fail / Not assessed / Not applicable> | <locators and claim status> | <IDs or reason> |

## 3. Separate conformity assessments

| Current source obligation / material outcome | Actual implementation or no-code-change evidence | Specification conclusion / gap |
| --- | --- | --- |
| <FR/NFR/AC/B/I/DoD and version> | <code paths, behavior, limits> | <result and finding> |

| Plan commitment / task | Actual implementation and completion evidence | Plan conclusion / deviation / owner disposition |
| --- | --- | --- |
| <DES/DEC/IMP and version> | <locators> | <result, rationale, required reconciliation> |

Reverse scope check and inspected flows: <unsupported changes, consumers/failures examined, exclusions and uninspected areas>

## 4. Execution evidence

| Command / check | Snapshot and environment | Actual result / evidence | Limits and affected conditions |
| --- | --- | --- | --- |
| <actual check or Not run; proposed checks labeled> | <versions/local changes> | <exit status, relevant output or artifact> | <what it establishes and leaves unknown> |

## 5. Findings and corrections

### CR-001 — <concrete issue>

- Severity / check: <Blocking | Major | Minor; rubric condition>
- Evidence / claim status: <exact source, plan, code, execution locators and limits>
- Affected IDs / consequence: <obligations and realistic failure>
- Owner / correction: <code author, planner, or owning upstream stage; required action>
- Closure condition: <observable evidence>
- Disposition / closure: <Open | Resolved | Nonblocking follow-up | Superseded; reviewer evidence/version and authority where required>

## 6. Rechecks and verdict

| Round / finding | Submitted snapshot / response | Recheck evidence and result | Material progress / unsuccessful recheck count | Next action |
| --- | --- | --- | --- | --- |
| <round / ID> | <version / locator> | <closure or remaining condition> | <reason/count> | <owner/action> |

Specification conclusion: <supported conformity, defects, and unassessed obligations>
Plan conclusion: <supported conformity, deviations, and reconciliation>
Gate rationale: <why verdict follows; minor follow-up disposition>
Blockers / next owner: <exact action and evidence; or None>
History / revalidation: <prior version-bound verdicts, retained evidence, affected downstream versions/IDs and required checks>

PASS is bound to this production-code/source snapshot and review boundary. It does not independently establish test adequacy or release acceptance.
