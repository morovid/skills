# Security Review: <assignment>

Round / report version: <round, version, actual date if known>
Verdict: <PASS | REVISE | BLOCKED>
Currency: <Current | Needs revalidation>
Boundary: <Full gate | Limited; exact system/change scope and exclusions>
Author / reviewer: <identities and independent invocation evidence; or self-check>

<!-- Preserve findings, attempts, and historical version-bound verdicts. Remove placeholders/comments in completed output. Redact sensitive values and use synthetic examples. -->

## 1. Reviewed baseline and authority

| Input | Exact location / version / snapshot | Readiness, authority, currency, and limits |
| --- | --- | --- |
| Specification, review index, relevant catalogs, canonical decisions | <sources> | <confirmed obligations and required approvals> |
| Implementation plan and plan review | <sources> | <readiness and drift reconciliation> |
| Applicable security policy, threat model, selected external controls | <sources and exact versions> | <mandatory controls, exceptions authority, or no supplied policy> |
| Repository/instructions, production code, dependency locks, build/config/deployment definitions | <revision/snapshot, paths, local changes> | <inspection boundary and environment assumptions> |
| Relevant test analysis/design, tests, code/test reviews, existing scan evidence | <sources and versions> | <established evidence and remaining limits> |
| Prior security review / author responses | <sources and rounds> | <retained checks and required revalidation> |

Execution/target authorization and data handling: <authorized environments/checks, relevant restrictions, redaction/artifact handling>
Uninspected scope / unavailable evidence: <exact surfaces, reason, affected checks and unblock action; or None>

## 2. Assets, threats, and trust boundaries

| Asset / protected operation | Actors and attacker capabilities | Entry point / sensitive flow / boundary | Controls and actual code/config evidence | Threat assessment / limits |
| --- | --- | --- | --- | --- |
| <data/capability> | <identity, privileges, control, prerequisites> | <path through consumers and sinks> | <enforcement points and configuration> | <credible bypass, prevented threat, or unassessed condition> |

Deployment assumptions: <exposure, tenancy, identity/dependency services and evidence; unresolved conditions>
Applicable controls and exclusions: <authority, exact external control IDs if used, applicability rationale>

## 3. Quality checks

| Check / applicable subcontrol | Result | Precise evidence, claim status, and limits | Finding / non-applicability rationale |
| --- | --- | --- | --- |
| <one row per SR1–SR10; split differing subcontrol outcomes; add supplied conditions> | <Pass / Fail / Not assessed / Not applicable> | <locators and assessment boundary> | <IDs or source-based reason> |

## 4. Separate conformity and threat assessments

| Current security obligation / material acceptance outcome | Actual control and verification evidence | Security conformity conclusion / gap |
| --- | --- | --- |
| <FR/NFR/AC/B/I/DoD or policy/control ID and version> | <code/config/test locators and limits> | <result, supported non-applicability, or finding> |

| Security-relevant design commitment / task | Actual implementation / completion evidence | Plan conclusion / deviation / owner disposition |
| --- | --- | --- |
| <DES/DEC/IMP and version> | <locators> | <result and required revalidation> |

Threat conclusion: <reachable attack paths, effective protections, demonstrated weaknesses absent from specs, unconfirmed concerns, and unassessed boundaries>
Reverse scope and inherited exposure: <unsupported assumptions/behavior, relevant pre-existing issues and dispositions; or None>

## 5. Verification and advisory evidence

| Actual check / tool / command / configuration | Target snapshot, environment, and authorization boundary | Result / artifacts / selection / failures | Evidence limits / affected conditions |
| --- | --- | --- | --- |
| <inspection, negative test, scan, or bounded reproduction; Not run/proposed where appropriate> | <versions, local changes, tool version> | <actual result with redacted evidence> | <what it establishes and leaves unknown> |

| Dependency / advisory / scanner item | Resolved version, advisory source and assessment date / database timestamp | Usage, exposure, prerequisites, and controls | Disposition / policy authority / required action |
| --- | --- | --- | --- |
| <actual item; omit table when inapplicable> | <exact lock/artifact locator and authoritative advisory> | <reachability evidence and limits> | <confirmed issue, supported false positive/non-applicability, unresolved, or permitted exception with owner/scope/expiry where required> |

Verification conclusion: <required checks completed, missing runtime evidence, freshness limits, precise next evidence>

## 6. Findings and corrections

### SEC-001 — <concrete weakness or failed control>

- Severity / check: <Blocking | Major | Minor; rubric/control ID; external advisory severity separately if applicable>
- Evidence / confidence: <Observed/Supported/Reported/Inferred/Unknown; exact source/plan/code/config/test locators and limits>
- Affected IDs / asset: <obligations, design/tasks, cases, advisory links and protected data/capability>
- Attacker path / prerequisites: <entry point, controlled input/identity, failed enforcement, existing controls and bypass>
- Consequence: <realistic unauthorized effect or other material failure>
- Owner / correction: <implementation author, planner, test owner, specification/policy owner; required action>
- Closure condition: <observable control behavior, negative verification, and containment/rotation evidence where applicable>
- Disposition / closure: <Open | Resolved | Nonblocking follow-up | Superseded; reviewer evidence and exact corrected version>
- Risk or exception authority: <only when permitted; authority, rationale, scope and expiry/review conditions; or Not applicable>

Unassessed conditions / unconfirmed concerns: <evidence needed, owner, affected checks and exact next action; do not present speculation as confirmed defects>
Optional hardening: <bounded non-gating advice with rationale; or None>

## 7. Rechecks, verdict, and handoff

| Round / finding | Submitted snapshot / response | Reviewer recheck and closure evidence | Material progress / unsuccessful recheck count | Next action |
| --- | --- | --- | --- | --- |
| <round / SEC ID> | <version / locator> | <verified result, bypass recheck and remaining condition> | <reason/count; exclude initial review/self-checks> | <owner/action or stop affected loop> |

Security conformity conclusion: <supported obligations, defects, and unassessed conditions>
Threat/implementation conclusion: <control effectiveness, weaknesses, material plan deviations and remaining assumptions>
Gate rationale: <why PASS/REVISE/BLOCKED follows from checks, findings, and required evidence>
Open blockers / next owner: <exact correction or unblock evidence; or None>
Nonblocking follow-up: <bounded action, rationale, required authority; or None>
History / retained evidence: <prior version-bound verdicts and reasons unchanged evidence remains valid>
Currency / downstream revalidation: <changed inputs/IDs, dependency/advisory freshness, affected code/test/planning handoffs and future release evidence; required rechecks>

PASS supplies security evidence only for the reviewed snapshot, exposure assumptions, and declared scope. It does not establish whole-system security, compliance certification, or deployment authorization.
