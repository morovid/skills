# Implementation Plan Review: <assignment>

Round / report version: <round, revision, actual date if known>
Verdict: <PASS | REVISE | BLOCKED>
Currency: <Current | Needs revalidation>
Review boundary: <Full gate | Limited; exact assessed scope>
Author / reviewer: <identities and evidence of independent invocation/agent; or Self-check—independence missing>

<!-- Preserve findings, prior verdicts and attempt history across revisions. Remove placeholders/comments in completed output. -->

## 1. Exact reviewed baseline

| Input | Location and exact version | Readiness, currency, and limits |
| --- | --- | --- |
| Implementation plan and supporting files | <paths/versions> | <submission and change boundary> |
| Specification and spec-review package index | <paths/versions> | <Ready for engineering, Current, included catalogs, approvals only where required> |
| Canonical catalogs / D/A/Q | <paths/versions/sections> | <authority and supersessions> |
| Repository / instructions | <revision/snapshot, relevant local changes, instruction paths> | <inspection boundary, drift disposition, unavailable areas> |
| Prior review / responses | <report round/version and plan response sections> | <retained conclusions and required rechecks> |

## 2. Quality checks

| Check | Result | Evidence and assessment boundary | Findings / justified non-applicability |
| --- | --- | --- | --- |
| IP1 Authority and currency | <Pass/Fail/Not assessed/Not applicable> | <source locators and limits> | <IDs or rationale> |
| IP2 Repository grounding | <result> | <evidence> | <disposition> |
| IP3 Coverage and scope | <result> | <evidence> | <disposition> |
| IP4 Logic, state, ownership | <result> | <evidence> | <disposition> |
| IP5 Integration and compatibility | <result> | <evidence> | <disposition> |
| IP6 Feasibility and proportionality | <result> | <evidence> | <disposition> |
| IP7 Execution and transitions | <result> | <evidence> | <disposition> |
| IP8 Handoff and review integrity | <result> | <evidence> | <disposition> |

Assignment-specific checks: <source-linked conditions and results, or None>

## 3. Independent coverage reconciliation

| Source catalog / material obligation | Reviewed DES/IMP links or No code change evidence | Coverage conclusion and missing outcomes |
| --- | --- | --- |
| <exact FR/NFR/AC/B/I/DoD records and versions; related US/SC> | <inspected plan/code locators> | <complete, gap, or unassessed; finding IDs> |

Reverse-trace and scope check: <unsupported work, exclusions, or None; full catalog reconciliation boundary>
Flow/integration counterexamples: <inspected paths, relevant failures, conclusions and evidence; not test cases>

## 4. Findings and rework handoff

### REV-001 — <concrete issue>

- Severity / check: <Blocking | Major | Minor; IP or supplied condition>
- Evidence and claim status: <source/plan/code locators; Observed/Supported/Reported/Inferred/Unknown and limits>
- Affected IDs: <upstream, DES/DEC/IMP>
- Defect and consequence: <what can fail and why>
- Owner / requested correction: <planner or specific upstream stage; exact change needed>
- Closure condition: <observable evidence the reviewer must verify>
- Disposition: <Open | Resolved | Nonblocking follow-up | Superseded; rationale and replacement links>
- Resolution / risk authority: <reviewer verification evidence and version; required acceptance authority if applicable>

<!-- Repeat only for actual findings. An unassessed condition needs a missing-evidence action, not an invented defect. -->

## 5. Responses, rechecks, and shared attempt history

| Round / finding | Submitted plan version and response locator | Reviewer recheck and closure evidence | Material progress / consecutive unsuccessful rechecks | Next action |
| --- | --- | --- | --- | --- |
| <round / REV ID> | <exact version, attempted fix or disagreement> | <verified result and remaining condition> | <reason and count; exclude initial review/self-checks> | <continue, upstream return, stop affected loop, or closed> |

Prior verdicts / retained checks: <version-bound history, unchanged evidence reused, and reasons>

## 6. Verdict and next owner

Gate conclusion: <why PASS, REVISE, or BLOCKED follows from checks and findings>
Open blockers / unassessed conditions: <affected IDs, missing source/decision/access, exact unblock action; or None>
Nonblocking follow-up: <bounded actions, rationale, authority if required; or None>
Next handoff: <planner revision, upstream owner, separate reviewer, or exact plan eligible for Ready for implementation>
Changed inputs / downstream revalidation: <versions/IDs, affected handoffs and required checks; or None>

PASS applies only to the exact reviewed technical content, source versions, and applicable repository baseline. It does not establish implemented behavior or successful tests.
