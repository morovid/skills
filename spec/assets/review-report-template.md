# Specification Review Report: <assignment title>

Status: <In progress | Needs rework | Blocked at review | Escalated to human | Limited review complete | Ready for engineering>
Currency: <Current | Needs revalidation; prior readiness is unusable while revalidation is pending>
Quality verdict: <Meets quality requirements | Does not meet quality requirements | Not established>
Review scope: <Full review, assembly, and readiness gate | Limited; exact assessed boundary>
Review round / date: <Round N of 5 (plus any human-authorized extension) and actual date>
Package ID: <same stable ID as in the assembled specification, or Not assembled>
Reviewed baseline: <round tag and artifacts@sha; repo@sha (+diff hash); see the input inventory and, when assembled, the package index>
Engineering readiness: <Ready for engineering | Not ready | Not established by limited review>

<!-- Replace placeholders, remove these comments and unused example records. Keep explicit assessment/disposition for all QC checks in a full review. N/A needs a reason; missing evidence is Not assessed. Retain finding IDs and history across rounds. A limited review cannot establish overall readiness. -->

## Assignment, sources, and review independence

- Objective, actors, and intended outcome: <faithful source-linked summary>
- Confirmed scope and exclusions: <boundaries and authority>
- Canonical D/A/Q register: <exact location, normally discovery report section 5; earlier copies are version-bound snapshots>
- Supplied success measures and quality obligations: <original meaning and sources; distinguish business outcomes from delivery conditions>
- Complexity and review depth: <rationale, relevant perspectives, investigation boundary>
- Applicable process rules: <source and applicable gates, independent review, or mandated approvals; do not invent them>
- Specification author(s): <identity/session or Unknown>
- Reviewer and independence evidence: <identity/session, relationship to authorship, independent review artifact and covered version if reused; or missing check>
- Evidence limits: <access, currency, sampling, uncertainty, and consequences; or None>

### Input inventory and upstream gates

| Artifact / role | Path (at the reviewed artifacts@sha) | Claimed stage status and currency | Verified applicability / actual remaining gap |
| --- | --- | --- | --- |
| Intake brief or equivalent request | <source> | <stage status; Current / Needs revalidation> | <objective, scope, and changes checked; evidence or finding IDs> |
| Discovery or equivalent behavioral handoff | <source> | <stage status; Current / Needs revalidation> | <behavior, impacts, evidence, and decision currency> |
| Refinement or equivalent catalogs | <source> | <stage status; Current / Needs revalidation> | <catalog completeness and source alignment> |
| Prior review / rework, if any | <prior round tag and rework source, or None> | <prior verdict and open IDs> | <what remains applicable and what changed> |

### Supplemental evidence

<!-- Link inherited E records to their source index. Add rows only for newly collected evidence, continuing the E sequence. Otherwise state None. -->

| ID | Source / locator / version | Claim and status | Limits or actual check result |
| --- | --- | --- | --- |
| <next E ID> | <precise source> | <claim; Observed / Supported / Reported / Inferred / Unknown> | <inspected versus executed; environment, result, unresolved conflict> |

## 1. Quality assessment

<!-- Criteria definitions live in the skill rubric; cite actual assignment evidence here. Add rows for supplied quality obligations not fully represented by the rubric. Every Pass needs evidence; every Fail or unassessed in-scope mandatory condition needs a finding/unblock action. Unreviewed checks outside a limited review are scope limits, not automatic findings. -->

| Check | Result | Reviewed records / evidence and rationale | Findings / missing action |
| --- | --- | --- | --- |
| QC1 — Upstream gates and currency | <Pass / Fail / Not assessed / Not applicable> | <source/version and conclusion> | <RV IDs or None> |
| QC2 — Faithful intent and scope | <result> | <evidence> | <IDs or None> |
| QC3 — Decisions and uncertainty | <result> | <evidence> | <IDs or None> |
| QC4 — Evidence and baseline integrity | <result> | <evidence> | <IDs or None> |
| QC5 — Impacts, dependencies, feasibility | <result> | <evidence> | <IDs or None> |
| QC6 — Actor goals and E2E coverage | <result> | <evidence> | <IDs or None> |
| QC7 — State, data, lifecycle | <result> | <evidence> | <IDs or None> |
| QC8 — Functional requirements | <result> | <evidence> | <IDs or None> |
| QC9 — Relevant non-functional quality | <result> | <evidence or applicability reason> | <IDs or None> |
| QC10 — Acceptance and DoD | <result> | <evidence> | <IDs or None> |
| QC11 — Bidirectional traceability | <result> | <evidence> | <IDs or None> |
| QC12 — Logical and cross-artifact consistency | <result> | <evidence> | <IDs or None> |
| QC13 — Independent validation | <result> | <reviewer/version/coverage evidence or gap> | <IDs or None> |
| QC14 — Assembly completeness and usability | <result> | <assembled version and reconciliation, or Not assessed — assembly deferred to the final round> | <IDs or None> |
| QC15 — Applicable approvals | <result> | <approval requirement and evidence or sourced N/A> | <IDs or None> |
| QC16 — Final package and finding closure | <result> | <package baseline and resolution evidence> | <IDs or None> |
| <supplied obligation ID, if additional> | <result> | <authority and evaluation> | <IDs or None> |

Verdict rationale: <derive from all applicable mandatory results; any Fail means Does not meet, otherwise a mandatory Not assessed means Not established; all Pass/justified N/A means Meets>

Limited-review conclusion, if applicable: <conclusion for the assessed subset, remaining unreviewed boundary, and why overall readiness is not established>

## 2. Coverage and consistency reconciliation

| Source behavior / constraint | Impacts / decisions | Stories / scenarios | Requirements | Acceptance criteria | Disposition and evidence / finding |
| --- | --- | --- | --- | --- | --- |
| <B ID/change type or direct constraint locator> | <I/D/source IDs> | <US/SC or justified N/A> | <FR/NFR IDs> | <exact AC relationships> | <Covered / Gap / justified N/A; inspected obligations and RV IDs> |

- Complete current catalogs assessed: <enumerate/range or linked inventory of B/I/US/SC/FR/NFR/AC records; exclude superseded records from active coverage>
- Add/Change/Remove/Preserve and cross-domain coverage: <what is covered and any gap>
- Requirement outcomes versus actual AC coverage: <boundaries, denial, failure, recovery, preservation, and quality checks as relevant>
- Reverse trace, exclusions, and unsupported additions: <dispositions and findings>
- Contradictions, state/data lifecycle, and known feasibility constraints: <reconciliation evidence and findings>
- Investigation limits: <what cannot be concluded; no exhaustive claim from sampled evidence>

## 3. Findings and required corrections

<!-- This report owns finding definitions, reviewer recheck evidence, and closure. Preserve the recheck record across rounds; link to the author response and attempt history rather than reproducing them here. -->

### RV1 — <concrete defect or unverified mandatory condition>

- Severity / readiness effect: <Critical / Major / Minor; Blocking / Nonblocking and concrete rationale>
- Quality checks: <QC IDs and supplied obligation IDs>
- Affected artifacts and records: <exact locators, reviewed versions, IDs>
- Expected condition and authority: <confirmed rule/constraint/process condition and source>
- Actual content or gap: <what is inconsistent, absent, unsupported, or unverified>
- Scenario and consequence: <how this permits a wrong result or prevents reliable evaluation>
- Required correction / unresolved decision: <bounded action; identify proposals as proposals>
- Owning stage / person or source: <Intake / Discovery / Refinement / Review; person/source if known>
- Dependent records and revalidation: <affected source/downstream IDs, assembly, reviews, approvals>
- Closure criteria: <observable source/content/coverage comparison sufficient to verify the fix>
- Rework task: <RW ID and packet link; or review-local action>
- Resolution: <Open / Addressed—pending recheck / Closed / Reopened; for each recheck, record the round, exact revised baseline, evidence against the closure criteria, disposition, reviewer, and date when actually known>

Nonblocking suggestions: <optional improvements and rationale; separate from mandatory corrections, or None>

## 4. Return and re-review handoff

Active rework packet for the lead: <review-rework.md link and applicable RW/RV IDs, or None>

Author response and shared attempt history: <links to the packet's response and attempt records, including the no-progress count, or the linked response if the packet is not writable; Pending / Not applicable as appropriate>

Review-local actions: <RV links, prerequisites (including any RW dependencies), expected outputs, and exact action and owner; or None>

Unblock action: <specific missing evidence/decision/reviewer/approval and responsible source if known; or None>

Unchanged material that remains usable: <confirmed records and limits of reuse>

Re-review boundary: <what must be rechecked and why; changed versions and affected dependencies>

Round limit: <rounds used of 5; if round 5 ends without Ready for engineering, Escalated to human with the decision or input needed; record any human authorization for more rounds; or Not reached>

### Review-only attempt history (when no rework packet exists)

Count consecutive unsuccessful review rechecks of the same blocking finding without material progress; exclude the original review and author self-checks. Progress requires satisfying a closure condition or materially narrowing the cause with evidence that supports a concrete next correction. Wording, version, ID, stage, or session changes do not reset the count.

| Finding and attempt | Input → output versions | Action / new evidence | Recheck link | Material progress / consecutive no-progress rechecks |
| --- | --- | --- | --- | --- |
| <RV ID and attempt; persistent finding if split> | <exact baselines> | <review-local action and evidence/source links> | <finding's resolution record for this attempt> | <closure condition satisfied or narrowed cause; current count> |

Stalled-loop disposition: <after two consecutive unsuccessful rechecks without material progress, or sooner if no useful action remains, stop the affected loop and mark Blocked at review; link attempts and state the persistent condition, exact unblock action, and owner; or Not triggered>

Resume evidence, if any: <documented change addressing the blocker and enabled next action, with the reason to reset the count; or Not resumed>

## 5. Assembly and final readiness gate

Engineering specification: <link to pinned assembly in the package index, or Not assembled: written only in the final round once every other check passes>
Assembly reconciliation: <source baselines, semantic equivalence, resolved links, retained obligations, and justified omissions>

Readiness prerequisites (use the linked results; do not score them again):

- Upstream gates remain valid for this baseline: [input inventory](#input-inventory-and-upstream-gates) and [QC1](#1-quality-assessment).
- All applicable mandatory quality checks pass or have justified non-applicability: [quality assessment](#1-quality-assessment), including assignment-specific checks.
- No blocking finding, material question, or unsupported critical assumption remains: [finding closure](#3-findings-and-required-corrections) and <canonical D/A/Q dispositions>.
- Independent validation covers this baseline: [QC13](#1-quality-assessment).
- Actually required approvals cover this baseline: [QC15](#1-quality-assessment).
- Assembly and package match the reviewed versions: [QC14 and QC16](#1-quality-assessment) and the [pinned package index](#package-index).

Status rationale: <why the overall status and engineering-readiness conclusion follow; a failed or unverified applicable mandatory condition prevents Ready for engineering>

Residual nonblocking follow-up: <bounded action, source/person if known, and why it cannot change behavior, acceptance, or gate satisfaction; or None>

### Package index

Report identity: <stable report path, review round, and package ID>
Reviewed submission: <round tag and artifacts@sha of the submitted package; repo@sha (+diff hash) of the project>
Handoff: <for Ready for engineering, the lead commits this report with the engineering specification and tags that commit `<assignment>/spec/r<N>-pass`; downstream stages cite that tag>

<!-- The artifact repository commit pins every artifact, so list paths only. If an artifact changes after the reviewed commit (apart from status fields), recheck the affected conditions before reporting readiness for the new version. -->

| Artifact | Path | Role and authority | Currency |
| --- | --- | --- | --- |
| Engineering specification | <path, or Not assembled> | <assembled specification for this package> | <Current / Needs revalidation> |
| <normative input; one row per source brief/request, discovery handoff, canonical catalog, D/A/Q register, or other applicable input> | <path, or external source locator with its own version> | <which scope, decisions, behavior, obligations, or acceptance conditions this input governs> | <Current / Needs revalidation> |
| <supporting evidence, rework history, or approval evidence, if applicable> | <locator or record ID> | <evidence, resolved history, or approval applicability> | <Current / Needs revalidation / Historical> |

Next owner and action: <lead routes the packet to its owning phase in spec, review-local unblock action, or Engineering planning>

This verdict concerns the specification and its reviewed baseline. Written acceptance criteria and engineering readiness do not establish successful implementation, delivery acceptance, or approval beyond the cited evidence.
