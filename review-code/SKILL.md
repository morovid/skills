---
name: review-code
description: Review implemented production code against the engineering specification and implementation plan, report defects and plan deviations, and verify corrections. Use after coding or when reviewed code or source inputs change; does not review plan readiness or implement fixes.
---

# Production Code Review

Determine whether actual production code satisfies the confirmed specification and realizes the reviewed implementation plan. Own `code-review.md`; code authors own fixes and planners own plan changes. [implementation-review](../implementation-review/SKILL.md) reviews plan readiness; [review-tests](../review-tests/SKILL.md) reviews implemented tests. Neither replaces this review.

## 1. Establish the baseline

Read the current engineering specification, spec-review package index, relevant canonical catalogs and D/A/Q decisions, complete implementation plan and its review, repository instructions, relevant code and consumers, and prior code review/responses. Equivalent artifacts suffice when they establish the same authority and detail; filenames and prior skill invocation are not gates.

Record exact source versions, repository revision or reproducible snapshot, relevant local changes, author/reviewer identities, inspection boundary, and execution environment. Confirm the specification is **Ready for engineering** and **Current**, and the plan has a full independent PASS supporting **Ready for implementation** for its applicable baseline. Reconcile intended coding changes against that baseline; expected implementation changes do not alone invalidate the plan, but changed assumptions, contracts, or sources require revalidation. Require approval evidence only where the assignment mandates it.

Use a distinct reviewer invocation or agent for independent readiness. A same-author pass is a self-check and cannot establish independent PASS. Do not spawn agents unless the caller requests delegation. If a required source, decision, access, currency check, or independence is missing, continue useful checks and mark dependent conditions **Not assessed**. Never infer product intent to fill gaps.

Preserve upstream and DES/DEC/IMP IDs. Follow assignment finding conventions; otherwise use `CR-001`, retaining IDs and supersession links across rounds. Record precise evidence locators and **Observed**, **Supported**, **Reported**, **Inferred**, or **Unknown** claim status and limits.

## 2. Review actual behavior and plan conformity

Apply [the quality rubric](references/quality-rubric.md). Inspect the actual current requirement/AC/B/I/DoD catalogs and code, not only the diff, task checkboxes, coverage tables, or author's summary. Follow relevant execution paths, consumers, configuration, registrations, persistence, and preserved behavior. Scale depth to the change; record uninspected areas.

Keep two separate assessments:

- **Specification conformity:** each current in-scope obligation reaches production code or an evidenced no-code-change disposition; inspect behavior directly against its authoritative outcome.
- **Plan conformity:** each applicable design commitment/task reaches actual code and completion evidence, or a justified deviation requiring the appropriate owner's disposition. Reverse-check code for unsupported scope.

A code/plan match cannot excuse a specification violation. A specification-compliant deviation is not automatically a code defect: explain its impact and route material plan reconciliation to the planner and plan reviewer. Do not silently update the plan or report a full PASS while material reconciliation remains unresolved. Distinguish optional internal choices from required contracts.

Use focused existing tests, builds, static checks, or bounded reproductions where they substantiate a conclusion within the authorized environment. Record actual commands, revision/local-change boundary, environment, results, and limits. Separate proposed checks from execution. A passing suite does not prove specification coverage; reading code does not establish runtime success. Missing execution evidence is **Not assessed** where needed for a condition, not an invented functional defect. Do not alter production code, tests, configuration, or upstream artifacts to obtain a passing review.

For each actionable finding capture ID, severity, failed condition, exact source/plan/code evidence, affected IDs, realistic consequence, owner, correction, and observable closure condition. Use **Blocking** for failed mandatory gates or material unresolved authority/choices, **Major** for material behavior/integration/task defects, and **Minor** for bounded follow-up that cannot change required behavior or mandatory gate conclusions. Avoid preference-only findings.

Route implementation defects to the code author; design/task defects to [implementation](../implementation/SKILL.md) and its reviewer; scope/behavior/requirement ambiguity to the owning spec-intake/discovery/refinement stage; package/readiness discrepancies to spec-review. Send test adequacy concerns to review-tests or test-analysis/design as appropriate. Report exact affected records without rewriting their authority or closing another stage's findings.

## 3. Report and recheck

Use [the report template](assets/code-review-template.md). Save beside the implementation plan unless the caller or assignment specifies another destination. Inspect existing reports to preserve assignment identity, findings, version-bound verdicts, and round history. Write only this review; authors supply response locators and corrected versions. Remove output placeholders.

On resubmission, inspect exact changes and author responses, verify closure conditions directly, and recheck affected dependencies and regressions. Reuse unchanged evidence only with recorded reasons and limits. An author's claim is not closure; reopen findings when evidence warrants it. Broaden inspection if the change boundary is unclear.

Maintain one attempt history across rounds/sessions. After two consecutive unsuccessful reviewer rechecks of the same blocking finding without material progress, stop that correction loop and return BLOCKED with attempts, persistent condition, owner, and exact unblock action. Exclude initial review and author self-checks. Rewording or new versions do not reset the count; material progress meets a closure condition or establishes evidence for a different correction. Stop sooner when no useful correction exists, continue independent checks, and resume the loop only after a documented change addresses its blocker.

## 4. Decide and hand off

For each rubric condition use **Pass**, **Fail**, **Not assessed**, or source-justified **Not applicable**. Every applicable rubric condition is mandatory for a full gate; a limited review cannot establish full readiness.

- **PASS:** full independent review of the exact code/source baseline; all applicable conditions pass, justified non-applicability is recorded, no open Blocking/Major findings or material plan discrepancies remain. Minor follow-up needs an explicit rationale and authority where required.
- **REVISE:** concrete defects or discrepancies remain correctable with available authority and evidence.
- **BLOCKED:** missing evidence, authority, access, independent review, or a stalled correction prevents completion. Include known defects alongside missing checks. For limited reviews use REVISE for diagnosed defects, otherwise BLOCKED for the unassessed full gate.

Track **Current** / **Needs revalidation** separately. Relevant code, configuration, specification, or plan changes invalidate affected conclusions until rechecked. Record affected versions/IDs and downstream revalidation even when those artifacts cannot be updated; historical PASS remains bound to its reviewed baseline.

Return report path/round, reviewed snapshot, verdict/currency, separate specification and plan conclusions, and next owner/action. PASS establishes production-code conformity within the assessed boundary; test adequacy and release acceptance require their own evidence.
