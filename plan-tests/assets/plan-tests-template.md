# Test Implementation Plan: <assignment title>

Status: <In progress | Ready for test plan review | Ready for test implementation | Blocked at test planning>
Currency: <Current | Needs revalidation>
Plan version: <exact saved technical version and actual date if known>
Readiness review: <plan-tests-review.md link to the current round and exact reviewed baseline; or Pending>

<!-- Default package: plan-tests.md, plan-tests-review.md, and only the selected category files. Adapt depth and remove unused rows/comments. This plan indexes versioned supporting files; link authoritative cases rather than copying their definitions. A justified existing-check/inspection-only plan is valid and follows the same review loop. -->

## 1. Inputs and scope

| Source or supporting file | Exact path / version / locator | Authority or evidence | Readiness, currency and limits |
| --- | --- | --- | --- |
| Engineering specification and spec package index (`review-report.md` or equivalent) | <exact spec and review versions; linked catalogs, evidence and decision records with versions> | <authority for behavior and expected outcomes> | <Ready for engineering and Current for these versions; required approvals, if any> |
| Production implementation plan and matching plan-code readiness review | <exact plan and review versions/round; linked material versions> | <intended logic, contracts, paths, consumers and dependencies; full PASS on the matching spec and relevant repository baseline> | <Ready for implementation and Current; discrepancies or required approvals> |
| Repository baseline and rules | <revision or reproducible snapshot; relevant local changes; applicable instructions, code/consumers, tests, fixtures and CI locators> | <what exists now vs. planned or already implemented> | <access limits, material drift and effect on evidence> |
| Test designs and supporting inventory/evidence | <exact version of each selected category file and each linked inventory/evidence file; use separate rows as needed> | <authoritative case locations and what the evidence establishes> | <inspection/execution limits and claim status> |

Canonical D/A/Q register: <exact source; linked existing questions or proposed owning-stage updates>

Optional coverage evidence: <link exact appendix version if useful, or None; revalidated legacy analysis may inform discovery but is not required>

Overall testing scope: <coverage classification and evidence-based rationale; material area differences>

| TA / area and affected consumers | Classification and rationale | Verification/design disposition | Dependencies or proposed upstream correction |
| --- | --- | --- | --- |
| <TA ID; scope, callers/consumers and exclusions> | <Verification only / Existing coverage sufficient / Focused testing / Comprehensive testing> | <TD and category output, existing checks or inspection/evaluation basis> | <TB; source/version and correction owner> |

## 2. Specialist dispatch and results

Lead and test planner: <distinct agent identities; lead coordinates, planner owns the plan and revisions>

Planning contributors: <actual identities, roles, bounded scope and outputs; distinguish specialist/other drafting authors from read-only evidence helpers; include helpers used by specialists>

| Test type / case prefix | TD packages and assigned obligations / paths | Specialist identity | Exclusive output / version | Completion and planner inspection |
| --- | --- | --- | --- | --- |
| <one row per selected type needing new/changed design; split mixed TD packages without renumbering> | <TA/TC/TR/FR/NFR/AC, DES/IMP, consumers and boundaries> | <actual spawned agent identity> | <category.md and exact version> | <queued/running/complete/blocked; inspection result and outstanding findings> |

Categories omitted: <types and evidence-based reasons; or no specialist work justified>

No-new-test decision (where applicable): <affected scope, exact existing checks or inspections to use, evaluation criteria, why their observed/asserted subset suffices, and residual risk; link supporting records rather than just noting that no cases were added>

Agent limitations: <failed/unavailable agent work and unblock action; or None>

## 3. Consolidated coverage

### Specification obligations and expected outcomes

| Current specification obligation / precise source | Required observable outcome | TA / TC coverage and action | TR risk | TD / category case or existing verification | Disposition / dependencies |
| --- | --- | --- | --- | --- | --- |
| <FR/NFR; exact material AC or applicable DoD clause; preserved or removed behavior; split where verification differs> | <what must be true per the specification, not what the code or plan happens to do> | <TA, TC; actual asserted subset, gap and action> | <TR or reason no material risk> | <linked case, exact existing check, or inspection with evaluation basis> | <Designed / Existing check / Verification only / Blocked / Excluded with reason; TB> |

### Planned implementation paths and consumers

| Material change / exact production plan reference | Intended entry point, seam and affected consumers | Check and meaningful observation | Real vs. simulated boundaries | Plausible fault detected | Disposition / evidence |
| --- | --- | --- | --- | --- | --- |
| <DES/IMP or equivalent IDs and locators for each material logic change, contract, data/state transition, and regression-sensitive path> | <how the check enters the path, reaches the intended seam, and exercises the affected calls/uses; split consumers if checks differ> | <case/check/inspection link and what it observes at which boundary; cite spec outcome or credible change risk> | <what executes as planned and what is stubbed/simulated; what cannot be inferred> | <wrong path, misuse/ignored result, or bypass that would fail the check and why> | <direct or indirect check, justified inspection, reasoned no-separate-check disposition, or blocker; exact evidence/evaluation criteria and limits> |

<!-- A task ID or a check that stubs out the changed boundary is not proof of covering that path. Mechanical tasks need no one-to-one test mapping. Use the production plan to locate paths and risks, not as sole authority for expected outcomes or to freeze incidental implementation details. -->

Reverse reconciliation: <every TA/relevant TC/material TR/TD accounted for; each case/task has a sourced outcome or credible change risk; superseded IDs retain links>

Existing-test actions: <link category TC records and list exact checks outside category designs; Retain / Extend / Modify / Replace / Run for regression; Create for new cases and Verification only for inspections; preserve required assertions on replacement>

Coverage evidence: <exact locators for test bodies, assertions, mocks, fixtures and selection rules; mark claims Observed / Supported / Reported / Inferred / Unknown with limits, distinguishing inspection, execution and planned checks>

Deduplication and purposeful overlap: <review findings, retained cases, exact preserved outcomes and distinct boundaries>

## 4. Implementation order and shared setup

| Task ID / priority | Cases / checks / source packages | Work and existing or proposed target files | Data, fixtures, services and controls | Dependencies / timing | Instructions and completion evidence |
| --- | --- | --- | --- | --- | --- |
| <assignment convention, otherwise WORK-1> | <case/TD/TC/TA IDs> | <setup, extend/modify/create, existing execution or inspection; intended assertions via case link> | <shared ownership, isolation and cleanup> | <before implementation / planned interface / later setup / approved visual reference; predecessor task/TB> | <confirmed command/locator or proposed/unknown with resolution task; expected evidence, not a claimed pass> |

Browser/device/environment matrix: <justified project coverage and determinism constraints, or N/A>

Execution status: <Not run unless actual command, revision, environment, result and limits are supplied>

## 5. Blockers, corrections and revalidation

| Concern / affected records | Evidence and consequence | Design blocker or later prerequisite | Owner / required action / resolution evidence |
| --- | --- | --- | --- |
| <TB/Q links or proposed concern; exact versions> | <missing authority, seam, access or baseline discrepancy> | <reason and impact on readiness> | <owning spec phase, plan-code or test planning; exact unblock condition> |

Changed baselines and supersession: <affected source/design/task IDs and versions, replacement links, downstream Needs revalidation and required checks; or None>

## 6. Author responses

| Finding / originating round | Versioned author response | Changed IDs / exact submitted versions |
| --- | --- | --- |
| <stable finding ID and review version/locator> | <author identity; correction, evidence-based disagreement, or upstream return with owner/action and evidence against closure condition> | <changed sections/IDs and plan/support versions; link the resubmission> |

<!-- Record author responses here or link their versioned location. The review report owns round history, findings, rechecks, and verdicts. Updating only readiness metadata or the review link does not change the reviewed technical version. -->

## Readiness and implementation handoff

Readiness rationale: <Ready for test plan review after author self-check; only a Current full PASS on this exact baseline, with no open Blocking/Major findings or unresolved material choices and with applicable approvals, establishes Ready for test implementation. On REVISE, return to In progress, record author responses and resubmit for independent recheck. Explain any Needs revalidation separately.>

Blocking items: <affected IDs, owner and exact unblock action; record Blocked at test planning when a blocker prevents readiness; or None>

Nonblocking follow-up: <bounded later setup/execution and why it cannot change design conclusions; or None>

Handoff to implement: <exact plan, review and selected category paths/versions, optional evidence appendix, exact upstream versions and relevant repository baseline; next executable work item only after readiness>

Design readiness does not establish implemented coverage, passing tests, approved visual baselines, or release readiness.
