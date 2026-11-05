---
name: spec-intake
description: Turn an initial change request into an Initial Assignment Brief with a clear objective, initial scope, constraints, and open questions. Use before discovery or to correct intent and scope from a spec-review return.
---

# Specification Intake

Understand what the requester wants to achieve and establish enough initial boundaries to begin discovery. Accept anything from a one-sentence request to a complete specification; scale the intake to what is missing.

## Responsibilities and boundaries

- Capture the initial assignment and its business purpose, target users or external actors, intended outcomes, and requested behavior.
- Establish initial scope, explicit exclusions, constraints, dependencies, and assumptions.
- Classify the assignment's apparent complexity to guide the depth of subsequent analysis.
- Produce an Initial Assignment Brief and assess whether discovery can begin.

Keep intake focused on intent and observable behavior. Repository exploration, cross-domain impact analysis, detailed requirements, acceptance criteria, and implementation design belong to later stages. Record supplied technical constraints or proposed solutions as such; do not silently turn a suggestion into a requirement.

## Receive a review return, when supplied

Read `review-report.md` and `review-rework.md`, or equivalent supplied findings, alongside the original request and returned brief. Compare the returned versions with the current artifacts and preserve `RV` finding and `RW` task IDs. The review owns finding definitions and closure; a recommendation is not authority for a new scope or behavior.

Follow task dependencies and correct only the intake-owned objective, actors, direction, boundaries, or supplied constraints. Record any required requester decision in the canonical D/A/Q register. Retain independent confirmed content and identify discovery or refinement work that depends on the correction. Return the updated brief, its own gate result, and a summary mapping each RV/RW to changed versions/records, authority, and remaining blockers. Submit fixes as **Addressed—pending recheck**; **Ready for discovery** does not close findings or restore downstream readiness.

Read the packet's shared attempt history before another correction and record the attempted action, changed versions, new evidence, and actual gate result. After two consecutive unsuccessful review rechecks of the same blocking finding without material progress, stop that correction loop and save a **Blocked at intake** brief with the attempted fixes and exact unblock action. Exclude the original review; changing stages, task IDs, or sessions does not reset the count. Continue independent work, and resume the loop only when new evidence, a confirmed decision, access, or another documented change addresses its blocker.

## Gather and clarify the request

1. Read the request and any supplied context or specifications. Preserve existing decisions and reuse information already provided. For an existing brief, update the affected content without discarding still-valid context.
2. Identify the problem or opportunity, who is affected, the desired outcome, and the requested behavior. Distinguish the reason for the change from the requested feature. Record supplied success measures without inventing targets.
3. Establish what is initially in scope, explicitly out of scope, and constrained. Separate requester-confirmed boundaries from tentative interpretations. If exclusions or constraints are not supplied, mark them as unspecified rather than inventing them.
4. Identify missing or conflicting information. Ask focused questions when the answer is necessary to understand the objective, set initial boundaries, or resolve competing behavioral choices. Confirm significant behavioral decisions with the requester and record the answer and its source.
5. Carry questions that need repository evidence into discovery. Intake does not need to resolve every edge case or affected component. If necessary clarification remains unanswered, produce a blocked brief with the specific question and what it prevents; do not guess or repeat unanswered questions indefinitely.

Distinguish requester statements, confirmed decisions, working assumptions, and unknowns. Attribute important claims to the supplied source. Treat descriptions of current application behavior as reported behavior until supported by repository evidence, even when the requester is confident. Do not invent file references or imply that exploration has already occurred.

Use the assignment's established canonical D/A/Q register. Otherwise the brief owns those records until discovery transfers them to its register, preserving IDs, sources, and history and recording the new canonical location in the brief or an explicit transfer handoff. On a later intake return, follow that location instead of creating another register. Update question/assumption dispositions there; give a changed confirmed decision a new D ID with a supersession link. If a required canonical update is unavailable or outside the authorized scope, record it as a proposed update and block readiness when material; do not present it as registered authority.

## Assess apparent complexity

Use the available request to choose a provisional classification and explain the signals behind it:

| Classification | Signals in the request | Suggested discovery depth |
| --- | --- | --- |
| Small | Narrow behavioral change, few actors or rules, no indicated cross-domain effects | Focused exploration of the relevant behavior and immediate dependencies |
| Moderate | Several flows or rules, related areas, or meaningful data and integration questions | Explore connected behavior and the likely interaction boundaries |
| Complex | Cross-domain workflows, shared data or lifecycle changes, migrations, significant authorization implications, or conflicting business rules | Broad discovery with explicit impact and dependency analysis |

State uncertainty when the request does not support a classification. Brevity alone does not imply a small change. Distinguish inherent complexity from missing information and record what discovery must establish before revising the assessment.

## Produce the Initial Assignment Brief

Use [the brief template and example](references/initial-assignment-brief.md) when writing the output. Keep simple briefs concise; use the same information categories without forcing long tables or empty sections.

Save the brief at the requested destination or follow an established assignment artifact convention. If neither exists, use `initial-assignment-brief.md` in the assignment's working directory. Check an existing file before updating it so an unrelated assignment is not overwritten.

Keep the brief understandable without the chat history. Preserve the meaning of the original request and source references, separate confirmed scope from assumptions, and include open questions, provisional complexity, and a discovery handoff. Use stable identifiers for decisions, assumptions, and questions when they need to be referenced later.

## Completion gate

Mark the brief **Ready for discovery** when:

- The objective, intended users or actors, and requested behavioral direction are clear enough to guide repository exploration.
- Initial boundaries are explicit, with unspecified areas, constraints, and assumptions visible.
- No unanswered intake question prevents a meaningful start to exploration.
- Apparent complexity and the suggested discovery depth are documented, including uncertainty where needed.
- The handoff identifies what discovery should investigate and which reported claims need verification.

Otherwise mark it **Blocked at intake** and identify the missing input or decision needed to proceed. Readiness for discovery does not imply a confirmed behavioral specification or engineering readiness.

Before handing off, check that the brief faithfully reflects the request, contains no unconfirmed behavioral decisions presented as facts, and stays within intake scope. If a later clarification changes the objective, scope, or a significant decision, update the brief and trace the affected discovery, refinement, review, and assembled specification records. Mark affected artifacts **Needs revalidation** and invalidate their previous readiness verdicts and version-bound approvals until the responsible stages recheck them. Preserve unaffected work and record the source change, affected IDs/versions, next owner, and required checks in the brief's handoff. If a dependent artifact cannot be updated, record its invalidation explicitly in the handoff so its previous verdict cannot be reused.

Track **Current** or **Needs revalidation** separately from the brief's stage status. An outdated brief cannot serve as a ready input until its affected completion conditions are rechecked; changing only a currency label does not re-establish readiness.

Return the brief's location, readiness status, and any blocking questions to the requester.
