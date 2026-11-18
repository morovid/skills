# Engineering workflow skills

Use the full workflow for a feature, or start at the first missing or stale handoff. Each skill can also stop at its own boundary.

## Catalog

| Skill | Responsibility | Handoff |
| --- | --- | --- |
| [spec](spec/SKILL.md) | Confirm intent and scope, investigate current behavior and impacts, refine verifiable requirements, and review them against their sources. | **Ready for engineering**: `engineering-specification.md`, `review-report.md`, and linked sources. |
| [plan-code](plan-code/SKILL.md) | Design production changes and sequence their tasks. One independent review loop checks feasibility and fidelity to the spec. | **Ready for implementation**: `plan-code.md` and its matching full **PASS** in `plan-code-review.md`. |
| [plan-tests](plan-tests/SKILL.md) | Decide how to verify required outcomes and material implementation paths. One independent Test Analysis review loop checks the plan. | **Ready for test implementation**: `plan-tests.md`, applicable designs, and the matching full **PASS** in `plan-tests-review.md`. |
| [implement](implement/SKILL.md) | Execute both plans, integrate the changes, run the prescribed checks, and route fixes or upstream gaps. | `implementation-record.md` with the exact implementation snapshot, authors, evidence, and responses for review. |
| [review](review/SKILL.md) | Independently assess production behavior, implemented tests, and security controls on the same snapshot. | `review.md` indexing the category reports. A full, **Current PASS** returns to `implement` as **Implementation reviewed**. |

## Run a feature end to end

> Use `implement` to take this feature from request through implementation and independent review: …

`implement` starts at the earliest missing or invalid stage. With reviewed plans already in hand, give it their paths and it starts with implementation. To stop earlier, invoke `spec`, `plan-code`, or `plan-tests` directly. Use “`review`, Tests phase only” (or Code or Security) for a targeted assessment, not a full implementation verdict.

Resume with the saved artifacts and the missing decision, evidence, access, or correction; don't regenerate unchanged work. Equivalent artifacts can use different filenames. Review findings go back to the owner: implementation defects to authors; coverage or oracle gaps to `plan-tests`; infeasible design or contracts to `plan-code`; and ambiguous intent, scope, or requirements to `spec`. Revalidate affected handoffs before picking up dependent work. None of these skills authorizes merge, release, or deployment.

## Agent and check policy

- **Match agent capability to the work.** Use the smallest capable model or agent for bounded searches, file reads, mechanical edits, and established checks. Use stronger agents for coordination, substantive decisions, and independent verification. If the host has no model selector, use the suitable agent type and scope the task narrowly. On hosts without nested delegation, the lead dispatches scoped work and relays the results.
- **Start each review and recheck in a fresh session.** Use saved artifacts, exact versions, and prior findings, not the author's or previous reviewer's conversation. No author, author-side helper, or lead can provide the independent verdict on their own work. A relay within the same active round isn't a new review. When required independence is unavailable, save progress and report the blocker.
- **Verify changes without repeating unchanged work.** The first assessment covers the applicable scope. On a revision, a fresh verifier checks the changes, finding closure, and dependencies and may reuse evidence shown to still apply. Share matching execution evidence across categories rather than running the same command repeatedly. Author checks and independent judgments serve different purposes.

## Older workflows

- `spec` replaces `spec-intake`, `spec-discovery`, `spec-refinement`, and `spec-review`.
- `plan-code` replaces the planning-only `implementation` and `implementation-review` skills; `implement` is the execution stage.
- `plan-tests` replaces `test-design` and the standalone `test-analysis`. Legacy analysis is optional evidence after revalidation, not a prerequisite or a verdict.
- `review` replaces `review-code`, `review-tests`, and `review-security`. Existing reports and finding IDs can be resumed in place. Release verification is outside this workflow; follow the project's release process after implementation review.

## Install

Run from the target project. To install from a local checkout, replace `morovid/skills` with the checkout's path:

```sh
# List available skills
npx skills add morovid/skills --list --full-depth

# Install all skills for Codex
npx skills add morovid/skills --skill '*' --agent codex --full-depth --yes

# Install selected skills
npx skills add morovid/skills --skill spec plan-code plan-tests implement review --agent codex --full-depth --yes

# Install all skills globally
npx skills add morovid/skills --skill '*' --agent codex --full-depth --global --yes
```
