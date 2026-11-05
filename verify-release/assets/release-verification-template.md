# Release Verification: <assignment / candidate>

Round / report version: <round, version, actual date if known>
Verdict: <PASS | REVISE | BLOCKED>
Currency: <Current | Needs revalidation>
Readiness: <Ready for release | Not ready for release>
Boundary: <Full gate | Limited; exact product/change scope and target environment>
Gate operator / release owner: <identities; independent gate operator only where policy mandates>

<!-- Preserve candidate-bound history, finding IDs, and attempts. Remove placeholders/comments in completed output. Redact sensitive values; link evidence rather than duplicating secrets or upstream verdicts. -->

## 1. Exact release candidate

| Identity component | Pinned value / evidence | Scope and limitations |
| --- | --- | --- |
| Source repository and revision/snapshot | <immutable revision or reproducible snapshot locator> | <relevant local changes and payload boundary> |
| Dependencies and toolchain | <lockfile/version/digest, runtime/build tool versions> | <resolution and environment assumptions> |
| Build and relevant configuration | <versioned config, flags and inputs; secrets redacted> | <source-to-artifact linkage> |
| Release artifact | <immutable artifact digest/version or justified non-applicability> | <tested artifact identity and provenance where required> |
| Target environment/distribution | <platform, environment/config versions and exposure> | <differences from check environments and dispositions> |

Initial / final identity check: <evidence the candidate is unchanged, or new candidate and affected revalidation>
Report/evidence location relative to payload: <explicit excluded boundary or payload effect>

## 2. Authority and review evidence chain

| Input / review | Exact path / version / reviewed snapshot | Status / verdict / currency / independence | Candidate match, drift disposition, and limits |
| --- | --- | --- | --- |
| Specification and spec-review package index, canonical catalogs/decisions | <sources> | <Ready for engineering; Current> | <included authority and gaps> |
| Implementation plan and independent plan review | <sources> | <Ready for implementation; PASS; Current> | <assumptions and material changes> |
| Test analysis, category designs, test plan and design review | <sources> | <Ready for test design / implementation; review and currency> | <coverage, existing-check/no-new-test dispositions> |
| Production code review | <source> | <full independent PASS; Current> | <candidate match and findings> |
| Implemented test review | <source> | <full independent PASS; Current> | <candidate match and findings> |
| Security review | <source> | <full independent PASS; Current> | <exposure, dependencies, advisory freshness and findings> |
| Release policy/runbooks, relevant repository instructions, prior gate/responses | <sources> | <authority and required approvals> | <scope, exceptions and revalidation> |

Upstream findings / minor follow-up dispositions: <existing IDs, owners, closure evidence, rationale/authority; or None>
Missing/stale/conflicting evidence: <affected IDs/checks, owner and exact unblock action; or None>

## 3. Required check register and results

| Gate / subcheck ID | Authority and applicability | Command / method, target, dependencies | Required outcome / established threshold | Result | Evidence / limits / finding |
| --- | --- | --- | --- | --- | --- |
| <one row per RG1–RG10; split mandatory subchecks and add assignment conditions> | <requirement/AC/DoD/policy/plan/case IDs and non-applicability reasons> | <grounded command/inspection and environment> | <sourced criterion; missing choices explicit> | <Pass / Fail / Not assessed / Not applicable> | <actual run or review locator, confidence and gap> |

No-new-test / exclusions / verification-only dispositions: <exact existing checks, inspection evidence, authority and preserved outcomes; or None>
Unregistered obligations and reverse reconciliation: <full catalog/plan/policy boundary, omissions/unsupported conditions; or None>

## 4. Actual execution and reusable evidence

| Check / run or CI job identity | Actual command / configuration / tool version | Candidate / artifact / environment | Actual date, selection and result | Logs/artifacts, limits, reuse rationale |
| --- | --- | --- | --- | --- |
| <executed now, reused evidence, or Not run; proposed commands labeled> | <command/method and relevant flags> | <exact identities> | <start/end or result date, exit status, tests/shards, passed/failed/skipped counts where relevant> | <inspectable locators; what is established and unknown> |

Test completeness: <required versus discovered/executed suites, shards and environments; skips/filters/exclusions and authority>
Failures and retries: <first results, diagnosis, cause/correction, subsequent valid runs, policy and remaining concern; or None>
Build/quality summary: <production artifact, type/lint/static checks, established budgets and outcomes>
Security summary: <review match, scan scope, advisory source/database date, required freshness and findings>
Non-functional summary: <sourced budgets and actual workload/environment/statistic/baseline evidence; or justified Not applicable>

## 5. Acceptance, delivery, and operations

| Current obligation / delivery condition | Actual evidence and owner | Result / gaps / upstream finding |
| --- | --- | --- |
| <FR/NFR/AC/B/I/DoD, critical journey, regression, documentation or release obligation> | <matching reviewed/executed outcome and exact locators> | <result and limits> |

| Deployment/distribution condition | Required evidence and actual assessment | Owner / result / remaining action |
| --- | --- | --- |
| Configuration, secrets availability, compatibility and dependencies | <references without secret values> | <owner/result> |
| Migration and mixed-version operation | <plan and required validation; data effects> | <owner/result or justified Not applicable> |
| Backup, rollback or forward recovery | <feasibility, required rehearsal/restore evidence and limits> | <owner/result or justified Not applicable> |
| Health signals, observability, rollout stop/recovery conditions | <actual mechanisms and sourced thresholds; staged rollout if applicable> | <owner/result or justified Not applicable> |
| Post-deployment/distribution smoke and health verification | <planned commands/methods and success/stop criteria; not claimed executed> | <deployment owner and next action> |

Required approvals: <only mandated approvals; authority/source, approver, exact candidate scope and evidence, or justified Not applicable>

## 6. Findings and correction handoff

### RG-001 — <failed release condition>

- Severity / check: <Blocking | Major | Minor; rubric/register condition>
- Authority / evidence / claim status: <exact source and actual result; Observed/Supported/Reported/Inferred/Unknown and limits>
- Candidate / affected IDs: <snapshot/artifact, upstream obligation/task/case/finding IDs>
- Consequence: <concrete release impact>
- Owner / correction: <code/test/security/planning/specification/operations/policy owner and exact required action>
- Closure condition: <observable evidence, affected reviews and checks needing revalidation>
- Disposition / closure: <Open | Resolved | Nonblocking follow-up | Superseded; verified evidence and exact version>
- Permitted risk/exception authority: <only where allowed; rationale, owner, scope, expiry/review condition; or Not applicable>

Unassessed conditions: <missing evidence/access/decision, affected checks, owner and exact unblock action; or None>

## 7. Rechecks and candidate history

| Round / candidate / finding | Response and changed inputs | Owner review revalidation / actual gate recheck | Material progress / unsuccessful recheck count | Next action |
| --- | --- | --- | --- | --- |
| <round / immutable ID / RG or linked finding> | <response locator, correction and dependencies> | <closure or remaining condition; retained evidence rationale> | <reason/count; exclude initial gate/self-checks> | <owner/action or stop affected loop> |

Prior verdicts and retained evidence: <candidate-bound history and reasons evidence remains applicable>
Changed inputs / downstream currency: <versions/IDs, affected reviews/checks, required revalidation and freshness limits>

## 8. Verdict and release handoff

Gate rationale: <why PASS/REVISE/BLOCKED follows from all mandatory checks and upstream judgments>
Readiness/currency: <Ready for release only for full PASS + Current + mandated approvals; otherwise Not ready for release>
Open blockers: <exact correction/unblock evidence, owner and affected checks; or None>
Nonblocking follow-up: <bounded actions, rationale and required authority; or None>
Eligible candidate/artifact: <exact identity for a ready candidate; otherwise None>
Next owner/action: <deployment/distribution handoff with planned smoke/health checks, or precise correction owner>

PASS is evidence of readiness only for this candidate, target assumptions, and declared boundary. It does not authorize publishing, merging, tagging, deploying, or production migration, and does not establish post-release production health.
