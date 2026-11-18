---
name: review
description: Independently review implemented production code, tests, and security against the current specification and plans. Delegate each category, verify findings and corrections, and consolidate verdicts. Use after implementation or when reviewed inputs change; does not implement fixes or authorize release.
---

# Implementation Review

Run one review of a pinned implementation snapshot: pin the common baseline, assess **Code** (production behavior and implementation commitments), **Tests** (implemented assertions, coverage and execution), and **Security** (controls and exposure), then consolidate. The lead owns the common snapshot and cross-category routing; independent category coordinators own category findings and verdicts. Authors and upstream owners make corrections.

## 1. Pin the review baseline

- Pin one common baseline: assignment, scope, rules, authors, exact source revision or reproducible snapshot (including local changes), execution environment and permissions, and output paths. Reuse an accurate implementation handoff if supplied. Link exact versions of the specification and code plan packages and their readiness evidence; include the test plan and matching independent PASS for Tests and applicable test evidence for Security. Code does not wait on the test plan. Include relevant configuration, locks, and deployment assumptions. Equivalent evidence is valid; filenames and prior invocations are not gates.
- Locate prior reports, findings, and author responses. Keep existing report destinations and history on resume. Otherwise follow the requested destination or assignment convention; by default save `review.md`, `code-review.md`, and `security-review.md` beside the implementation plan, and `test-review.md` beside the test implementation plan (use the assignment working directory if the corresponding plan file is absent). Use distinct paths and exclude review artifacts from the implementation snapshot. Never overwrite another assignment's reports.
- Default to all three categories. If the requester explicitly limits the scope, mark omitted categories **Not assessed** in the consolidated report; don't overwrite their reports or imply a full gate. A selected category may still reach its own full verdict if its complete boundary was reviewed. Missing inputs or access should not stop independent checks elsewhere.

## 2. Run the category phases

For the first assessment of each selected category and every recheck of a saved verdict, launch a stronger independent coordinator in a new session. This includes rechecks where only evidence or access changed and applicability decisions for a new snapshot. Exclude the lead, authors and author-side contributors for that material, and prior reviewer sessions. Run independent assignments in parallel where supported. The lead is not a substitute coordinator, and author checks are not independent review.

| Phase | Coordinator procedure | Rubric | Report template |
| --- | --- | --- | --- |
| Code | [Production code](references/code.md) | [CR1–CR8](references/code-rubric.md) | [Code report](assets/code-review-template.md) |
| Tests | [Implemented tests](references/tests.md) | [TRV1–TRV8](references/tests-rubric.md) | [Test report](assets/test-review-template.md) |
| Security | [Security controls and exposure](references/security.md) | [SR1–SR10](references/security-rubric.md) | [Security report](assets/security-review-template.md) |

Every coordinator receives the [shared coordinator procedure](references/coordinator.md) and its own procedure, rubric, and template. Hand off the common baseline, locators, category boundary, exclusive report path, and any prior report/response, changed IDs, and closure conditions, not the conversation transcript. Use the smallest capable workers for bounded discovery, bulk reads, established check execution, and mechanical report edits; reserve substantive verification and sign-off for the stronger coordinator.

If the host forbids nested delegation, the lead dispatches scoped helper assignments and relays results within the same active round, before a verdict is issued. If a session is lost, hand the saved inputs and evidence to a fresh independent replacement. If no suitable helper is available, the coordinator can do bounded work directly; helper availability is not a gate. If required independent verification or evidence is unavailable, mark dependent checks **Not assessed** and name the unblock action.

**Share run evidence, not verdicts.** The lead points all categories to matching author or CI evidence. For an authorized check without suitable evidence, coordinators request a run before launching it. The lead tracks requests by exact snapshot, command/configuration, environment, and selection, assigns one runner per matching request, and shares the actual result and locator with all consumers. Identical runs are not separate category tasks; different conditions or required independent execution must be justified.

## 3. Consolidate and hand off

1. Read the actual saved category reports. Verify ownership and independence, exact common snapshot and category-specific source versions, scope, required check/evidence coverage, verdict and currency. Recheck the snapshot at completion. If it drifted, identify affected checks and send them back for revalidation; never merge incompatible snapshots into a pass.
2. Cross-link findings that share a cause without renumbering them or losing category-specific impacts, owners, or closure criteria. When a verdict has already been saved, use a fresh coordinator for any necessary recheck of a conflict or new evidence. The lead does not override verdicts or close category findings. Keep unresolved conflicts visible and withhold PASS.
3. Write [the consolidated report](assets/review-template.md) as an index, not a second authority for findings. Preserve earlier rounds and remove placeholders. **PASS** requires all three full independent category **PASS** results to be **Current** for the applicable boundaries of this exact snapshot, with no unresolved material conflict. **BLOCKED** applies when a missing prerequisite (including required delegation), stale evidence, unresolved conflict, or a stalled correction prevents completion; retain diagnosed defects. Otherwise use **REVISE** for diagnosed correctable defects. For an intentionally limited review with no other blocker use **REVISE** if actionable defects were diagnosed, otherwise **BLOCKED** for the unassessed full gate. Track **Current** / **Needs revalidation** separately from verdict; a current limited report is not a full gate.
4. On resubmission, give fresh category coordinators exact changes and author responses. Reuse evidence unchanged in scope only after the new coordinator records why it still applies. An exact-snapshot, still-current report needs no repeat review. Preserve prior rounds and the stalled-loop guard. Return findings and closure conditions to [implement](../implement/SKILL.md) or the owning upstream phase; do not make fixes here.

Return the consolidated report path/round, exact snapshot, overall verdict/currency, each category's verdict and report (or reason not assessed), and the next owners and actions. An implementation review is not release acceptance or deployment authorization.
