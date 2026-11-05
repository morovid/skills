---
name: review-security
description: Review implemented code and relevant configuration for exploitable security weaknesses and conformity to security requirements and the implementation plan. Use before release or when security-relevant inputs change; reports findings and verifies corrections without implementing fixes or conducting an unrestricted penetration test.
---

# Security Review

Assess whether the implemented change protects relevant assets and trust boundaries and satisfies confirmed security obligations. Own `security-review.md`; implementation authors own fixes, planners own design changes, and specification owners own product decisions. Complement [review-code](../review-code/SKILL.md) and [review-tests](../review-tests/SKILL.md) with adversarial analysis and security evidence. Scanner success alone cannot establish security readiness.

## 1. Establish authority, scope, and baseline

Read the current engineering specification and review package index, applicable requirement/AC/B/I/DoD catalogs and canonical D/A/Q decisions, implementation plan and its review, repository instructions, relevant code/configuration and consumers, and prior security findings/responses. Read relevant threat models, security policy, test analysis/design, tests, dependency lockfiles, build/deployment definitions, and existing scan evidence where they bear on the change. Equivalent supplied artifacts suffice when they establish the same authority and detail; filenames and prior skill invocation are not gates.

Record exact source versions, repository revision or reproducible snapshot, relevant local changes, author/reviewer identities, review boundary, environment assumptions, and evidence limits. For a full gate confirm the specification is **Ready for engineering** and **Current**, and the plan has a full independent PASS supporting **Ready for implementation** for its applicable baseline. Reconcile expected implementation changes separately from material changes to contracts, trust boundaries, or assumptions that need revalidation. Earlier design or partial implementation reviews remain useful but cannot establish final implemented-security readiness.

Use a distinct reviewer invocation or agent for independent PASS. Same-author work is a self-check; do not spawn agents unless the caller requests delegation. Missing sources, access, authority, currency, or independence leave dependent checks **Not assessed** while useful inspection continues. Require approval evidence only where the assignment mandates it.

Preserve upstream, DES/DEC/IMP, test, and existing finding IDs. Follow assignment conventions; otherwise use `SEC-001`, retaining IDs and supersession links across rounds. Record precise locators with **Observed**, **Supported**, **Reported**, **Inferred**, or **Unknown** evidence status and limits. Do not reproduce live secrets, tokens, personal data, or sensitive payloads in the report; cite redacted locations and minimal synthetic examples.

## 2. Map assets, threats, and applicable controls

Build a compact review map from actual code and relevant deployment evidence: protected data/capabilities, legitimate actors and attacker capabilities, entry points, identities/roles/tenants, trust boundaries, sensitive flows and sinks, and external dependencies. Trace changed paths through shared services and indirect consumers where they affect security; unchanged code is relevant when the change exposes or relies on it. State exclusions and uninspected surfaces rather than implying a whole-system audit.

Apply [the quality rubric](references/quality-rubric.md). Select applicable controls from confirmed requirements, repository policy, and evidenced threats. If a named standard is required, record its exact version, applicable controls, exclusions, and evidence; use authoritative documentation when resolving unfamiliar or version-dependent controls. Do not claim compliance from a scan or impose an entire framework, tool, numeric threshold, or approval process without authority.

Keep two distinct conclusions:

- **Security conformity:** map every current in-scope security requirement and material acceptance/DoD outcome to inspected control behavior and verification evidence, or a source-justified non-applicability disposition.
- **Threat and implementation assessment:** determine whether realistic attacker-controlled paths can bypass protections or violate trust boundaries, including weaknesses absent from the specification. Also reconcile security-relevant DES/DEC/IMP commitments with actual implementation and disposition material deviations.

A specification/plan match cannot excuse a demonstrated vulnerability. For an evidenced weakness, describe the attacker prerequisites, reachable path, affected asset, existing protections and bypass, and consequence even if no explicit requirement covers it. Distinguish that from a preference, hypothetical hardening idea, or unresolved policy choice. Missing intent belongs to the canonical decision owner; do not invent product rules or silently repair the specification.

## 3. Inspect controls and gather verification evidence

Follow actual authorization and data flow through entry points, middleware, shared helpers, persistence, background work, and output/external calls. Check required denials and absence of unauthorized side effects, not only successful authorized flows. Inspect applicable authentication/session controls, object/action/tenant authorization, injection boundaries, sensitive data/secrets, outbound requests, file operations, resource abuse, configuration, and dependency/build exposure using the rubric. Evaluate controls at the boundary where they must hold; a client check or mocked service assertion does not establish server enforcement.

Use existing security tests, source/secret/dependency scans, container or infrastructure checks, and bounded reproductions when they materially support the review. Inspect commands and configuration before running tools; stay within authorized targets, execution permissions, and data handling. Use local disposable fixtures for reproductions where feasible. Review authorization does not grant permission for intrusive production probing, credential use, third-party scans, destructive actions, or uploading proprietary source to an external scanner. If a required check exceeds existing authority, record the exact missing permission and continue independent checks.

Record actual tool/version/configuration, advisory database timestamp when available, command, target snapshot/environment, discovery/selection, result/artifacts, and limits. Separate proposed checks, static evidence, and executed results. An unavailable tool or inaccessible environment is **Not assessed** where required, not a clean result. Do not install new mandatory tooling or weaken checks to obtain PASS.

Triage scanner findings against actual resolved dependency versions, usage/reachability, deployment exposure, exploit prerequisites, and compensating controls. Verify changing advisory facts against authoritative advisories or vendor documentation when making a vulnerability disposition; record the source and assessment date. A clean scan does not prove absence of vulnerabilities; a version match alone does not prove exploitability. Where policy blocks a vulnerable dependency regardless of reachability, enforce that policy. Existing suppressions need evidence, scope, owner, and expiry/review conditions where required; do not add suppressions yourself.

## 4. Report findings and recheck corrections

Use [the report template](assets/security-review-template.md). Save beside the implementation plan unless the assignment specifies another destination. Inspect an existing destination to preserve assignment identity, findings, historical verdicts, and attempts. Write only the review; do not change code, tests, configuration, dependencies, authoritative sources, or another reviewer's findings. Bounded temporary reproductions must not alter the submitted baseline.

Each actionable finding needs stable ID, failed control/check, precise evidence, affected source/plan/code IDs, attacker path and impact, owner, correction, and observable closure condition. Record evidence confidence separately from severity. Use assignment severity conventions where established; otherwise use **Blocking** for failed mandatory gates or material unresolved authority/choices, **Major** for a material exploitable weakness or missing protection, and **Minor** for bounded follow-up that cannot change mandatory gate conclusions. Retain any externally assigned advisory severity separately; do not equate a scanner label with the review's decision. Avoid preference-only findings, and keep uncertain suspected weaknesses visibly unconfirmed until evidence supports a defect.

Route implementation/configuration defects to their author; security design/task gaps to [implementation](../implementation/SKILL.md) and its reviewer; security verification gaps to [test-analysis](../test-analysis/SKILL.md), [test-design](../test-design/SKILL.md), or review-tests as appropriate; behavioral/policy ambiguity to the owning specification stage or policy owner. Relevant pre-existing weaknesses need an explicit owner and gate disposition; do not silently dismiss them as outside the diff. Any risk acceptance needs the authority, scope, rationale, and time limits required by policy. A failed mandatory condition cannot be waived merely by relabeling it accepted risk.

On resubmission compare exact versions and author responses. Verify closure against the attacker path and required control, recheck affected consumers, and confirm the change did not move the bypass or weaken assertions. An author response, scanner suppression, or upgraded version alone is not closure evidence. Reuse unchanged evidence only with recorded reasons and limits; reopen findings when warranted.

Maintain one attempt history across rounds/sessions. After two consecutive unsuccessful reviewer rechecks of the same blocking finding without material progress, stop the affected correction loop and return BLOCKED with attempts, persistent condition, owner, and exact unblock action. Exclude initial review and author self-checks. New wording/versions do not reset the count; material progress meets a closure condition or establishes evidence for a different correction. Stop sooner when no useful correction exists, continue independent checks, and resume only after a documented change addresses the blocker.

## 5. Decide and hand off

For each rubric condition use **Pass**, **Fail**, **Not assessed**, or source-justified **Not applicable**. Every applicable condition is mandatory for a full gate; scale inspection to the declared change boundary and threat exposure. Limited scope cannot establish full readiness.

- **PASS:** full independent review of the exact source/code/configuration baseline and declared threat boundary; all applicable conditions pass, non-applicability is justified, required verification evidence exists, and no open Blocking/Major findings or material security/plan discrepancies remain. Minor follow-up needs an explicit rationale and authority where required.
- **REVISE:** diagnosed security/control/design defects remain correctable with available authority and evidence.
- **BLOCKED:** missing evidence, decisions, access, independent review, or stalled correction prevents completion. Include known defects alongside missing checks. For limited reviews use REVISE for actionable defects, otherwise BLOCKED for the unassessed full gate.

Track **Current** / **Needs revalidation** separately. Relevant source, code, configuration, dependency, deployment-exposure, or advisory changes invalidate affected conclusions until rechecked. Record affected versions/IDs and required downstream revalidation even when those artifacts cannot be updated; historical verdicts remain version-bound. State time-sensitive advisory evidence and any required freshness policy rather than treating a scan as permanently valid.

Return report path/round, reviewed snapshot and boundary, verdict/currency, separate conformity and threat conclusions, verification status, and next owner/action. PASS supplies security evidence for a future release gate; it is not a whole-system security guarantee, compliance certification, or authorization to deploy.
