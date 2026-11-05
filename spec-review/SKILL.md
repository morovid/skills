---
name: spec-review
description: Review an assignment and its intake, discovery, and refinement artifacts against evidence-based specification quality gates. Produce a review report, actionable returns to earlier stages, and an assembled specification with an explicit engineering-readiness verdict. Use before engineering handoff or to re-review corrected specifications.
---

# Specification Review and Engineering Readiness

Determine whether the assignment is clear, complete, consistent, traceable, and verifiable enough for engineering. Challenge the specification against its sources rather than trusting earlier readiness labels. Make every failed or unverified quality condition actionable for the stage that can resolve it.

## Responsibilities and boundaries

Produce three connected outputs, proportionate to the assignment:

1. **Independent Review and Quality Validation Report** — reviewed versions, explicit quality-check results, coverage reconciliation, findings, and readiness verdict.
2. **Rework handoff**, when needed — source-linked corrections that `spec-intake`, `spec-discovery`, or `spec-refinement` can consume without reconstructing the conversation.
3. **Engineering Specification** — a coherent assembly of validated material, marked as a draft until the final readiness gate passes.

Default to the full review, assembly, and readiness gate. Honor a requested narrower review; state the assessed boundary and do not infer overall readiness from it. Review the supplied requirements and applicable process obligations, not a generic ideal product. The rubric evaluates specification quality; it does not authorize new features, quality targets, technical solutions, or approvals.

Define behavior and supplied constraints. Do not implement the assignment, select an architecture or algorithm, or silently repair a product decision while reviewing. Editorial assembly may clarify presentation without changing meaning. A substantive correction returns to the responsible stage and needs re-review. Do not describe written acceptance criteria as executed tests or engineering readiness as completed delivery.

## 1. Receive the assignment and establish the baseline

Read the request, supplied artifacts, applicable assignment/team rules, and any prior review. Use the existing process handoffs:

| Stage | Normal artifact and handoff | What review consumes |
| --- | --- | --- |
| [Intake](../spec-intake/SKILL.md) | `initial-assignment-brief.md`; **Ready for discovery** | Objective, actors, outcomes, success measures, scope/exclusions, constraints, complexity, D/A/Q records, and sources |
| [Discovery](../spec-discovery/SKILL.md) | `discovery-report.md`; **Ready for requirements** | Current State Behavior Map, Cross-Domain Impact Matrix, Behavioral Change Map, Confirmed Behavioral Specification, Decision Register, evidence, and limitations |
| [Refinement](../spec-refinement/SKILL.md) | `refinement-report.md`; **Ready for review** | Stories, scenarios, functional/non-functional requirements, acceptance criteria, traceability, Definition of Done, and unresolved items |

Equivalent supplied documents are valid if they establish the same authority, behavior, evidence, and coverage. A filename, template, or prior skill invocation is not a gate. A raw assignment can be reviewed, but missing material needed for engineering remains a gap; identify which earlier stage must produce it.

Record the assignment identity, artifact paths, versions/revisions or content digests where useful, repository baseline, and known limits. Inspect an existing output destination before updating it. Establish who authored the reviewed material, who is reviewing it, and what demonstrates independence. Use a distinct reviewer or supplied independent review when required by the applicable process. A fresh pass by the same author is a self-check; record a missing independent check instead of claiming one occurred. Do not start another agent unless the task or applicable instructions authorize delegation.

Preserve inherited `E`, `CB`, `I`, `B`, `D`, `A`, `Q`, `US`, `SC`, `FR`, `NFR`, and `AC` IDs and meanings. Follow established assignment conventions; otherwise use `RV1` for findings and `RW1` for rework tasks. Continue sequences across review rounds, retaining supersession links. Qualify IDs with the source artifact where needed.

Check earlier gate results against actual content and the latest confirmed decisions in the canonical D/A/Q register, normally discovery report section 5. Record that location and treat earlier copies as version-bound historical snapshots. A formerly ready artifact marked **Needs revalidation**, superseded, or invalidated in an upstream handoff cannot supply a current readiness verdict. Continue useful review of independent portions when an input is blocked or unavailable; identify the specific missing evidence or choice and its consequences.

## 2. Assess quality and coverage

Use [the quality rubric](references/quality-rubric.md) for check IDs, pass conditions, severity, and routing. Assess every rubric row for a full gate. Add source-linked assignment-specific obligations to the assessment; the rubric does not replace supplied quality requirements. For a limited review, identify checks outside the requested boundary as **Not assessed**. Those unreviewed checks are scope limits, not diagnosed defects or automatic rework tasks.

Use these results consistently:

- **Pass:** inspected evidence establishes the applicable condition for the reviewed version and scope.
- **Fail:** a concrete contradiction, omission, unsupported rule, or other deficiency violates the condition.
- **Not assessed:** evidence, access, required review, or requested scope does not permit a conclusion. It is not a pass.
- **Not applicable:** the condition has no bearing on this assignment, with a source-based reason. Missing information is not a reason for non-applicability.

Review from actor/workflow, domain/data, integration, acceptance, and delivery-boundary perspectives where relevant. A single reviewer may use several perspectives, but that does not create independent reviewers. Investigate suspected factual gaps through available sources before asking for information already accessible. Retain evidence claim status: **Observed**, **Supported**, **Reported**, **Inferred**, or **Unknown**. Continue the E sequence for new evidence, recording its locator, supported claim, and limits; a test read in source is not an executed result.

Reconcile the complete in-scope catalogs, not only a sample of linked rows:

- Trace objective/scope and each confirmed `B`, including Add, Change, Remove, and Preserve, to requirements and sufficient acceptance criteria; use stories/scenarios where meaningful.
- Check each significant `I` and dependency for an explicit disposition. An exclusion does not remove a real dependency; it may require a scope decision.
- Reverse-trace each current story, scenario, requirement, and criterion to confirmed behavior or an applicable constraint. A directly supplied constraint may legitimately have no B/story; explain the relationship.
- Inspect what each acceptance criterion actually evaluates. A link alone does not establish coverage of every permission, boundary, failure, state/data effect, or quality condition in a requirement.
- Compare decisions, scenarios, catalogs, traceability, and Definition of Done for incompatible outcomes. Check feasibility against known constraints; do not require an implementation proof or invent an estimate.

All current requirements need an assessed disposition. Sampling supporting evidence may be proportionate, but disclose its limits and do not claim that unexamined material passed. Resolve questions of fact with evidence; refer material product or scope choices to the requester/designated decision-maker. Existing explicit instructions already establish authority. Recommendations remain proposals until confirmed.

## 3. Record findings and return work to the responsible stage

Use [the review report template](assets/review-report-template.md). Each actionable finding needs:

- A stable RV ID, severity, affected quality checks, and whether it blocks readiness.
- The expected condition and its authority, actual conflicting or missing content, precise artifact/record locators, and a concrete scenario or consequence.
- A bounded correction or question, primary owning stage, dependencies, affected downstream records, and observable closure criteria.
- Resolution state and evidence: **Open**, **Addressed—pending recheck**, **Closed**, or **Reopened**. An author's claim that a correction is complete does not close it.

Use **Critical** for a supported contradiction or omission with severe consequences such as unauthorized access or irreversible data loss; **Major** for any other material failure or unverified mandatory gate; **Minor** for a nonblocking defect that cannot change behavior, scope, acceptance, or gate satisfaction. Keep optional improvements as **Suggestions**, outside required corrections. Explain severity using the actual consequence. Every failed or unverified applicable mandatory condition blocks readiness regardless of label; do not average results or waive a material gap by lowering its severity.

Route to the earliest stage that owns the unresolved content, while naming subsequent repair work:

- **Intake:** unclear or conflicting objective, actors, requested direction, scope/exclusions, or supplied constraints.
- **Discovery:** unsupported baseline, missing impact/dependency, material behavior/state/lifecycle choice, or unsourced preservation rule.
- **Refinement:** confirmed behavior exists, but stories/scenarios, requirements, measurements already agreed upstream, acceptance criteria, traceability, or Definition of Done are incomplete or inconsistent.
- **Review/assembly:** evidence-backed review corrections, editorial assembly, missing independent validation, final package mismatch, or an applicable approval not yet evidenced. Do not send these to refinement without a corresponding refinement defect.

For returns, produce [a rework handoff](assets/rework-request-template.md). Include the original brief, discovery and refinement baselines plus the review report; the packet supplements them. Give each RW task an ordered dependency, owning stage, affected IDs, exact gap, authority/decision needed, expected native stage output, and closure/revalidation checks. Link RV findings rather than maintaining competing finding definitions. A finding diagnoses a problem; it is not authority for a new behavior.

Make a refinement return directly executable: distinguish the confirmed rule to derive from a decision still needed upstream, identify affected `US/SC/FR/NFR/AC` records, preserve IDs, and name traceability and DoD repairs. State which independent records remain usable. Do not restart intake or discovery for an isolated acceptance gap. See the rubric's routing examples for mixed-stage returns.

Keep unresolved material choices as questions, continuing Q/A/D sequences only when adding to the canonical register within the available authorization. Record changed confirmed decisions as new D IDs with supersession links. Otherwise link the existing record or identify a proposed update for its owning stage; do not create duplicate authoritative registers. Continue independent work while clarification is pending. When no further useful work can resolve a blocker, save the report and handoff with the concrete unblock action. Do not repeatedly rerun unchanged failed checks.

## 4. Assemble the engineering specification

Use [the engineering specification template](assets/engineering-specification-template.md) for a full handoff. Assemble from the reviewed sources, preserving normative meaning and IDs. Include purpose and scope, relevant context and current/proposed behavior, interactions and data/state effects, stories/scenarios, requirements, acceptance, DoD, constraints, dependencies, decisions, and traceability. Combine or omit irrelevant sections with a reason.

Keep one authoritative definition per record. A version-bound linked catalog is sufficient when the package includes it and the assembly explains the relevant context without requiring repeated discovery. Copy a catalog only when needed by the destination format, retaining its source baseline and checking semantic equivalence. Do not leave divergent definitions or point to mutable, unversioned content as if it were the reviewed snapshot.

Reconcile the assembly against all significant upstream records and review findings: no changed decision, dropped preservation/removal obligation, lost quality condition, unresolved reference, or unsupported addition. Report any loss or drift and return substantive changes to their owner. When a blocked assignment still benefits from an assembled draft, mark it **Draft—needs rework** and identify its gaps; never package it as approved.

If assembly introduces or changes normative content, it needs the same source authority and independent validation required of the original. Checking the formatting of one's own substantive edits does not satisfy independent review.

## 5. Re-review changes and decide readiness

On a follow-up review, compare returned versions and the change summary with the prior baseline. Verify each claimed fix against its closure criteria. Keep RV/RW IDs, retain resolution evidence, and reopen findings when necessary. Check for new conflicts and follow actual dependencies through upstream and downstream artifacts, including the final assembly and any approvals. Mark affected artifacts **Needs revalidation** and invalidate their prior readiness and version-bound approvals until the affected checks pass; preserve historical verdicts as applying only to their reviewed versions. Restore **Current** only with revalidation evidence. An unchanged finding cannot be closed by deferral or a revised status label.

Recheck the affected conditions and confirm unchanged conditions still apply before issuing a new full verdict. Retain prior evidence only for demonstrably unchanged material; if the change boundary is unclear, broaden review. Avoid a complete rediscovery when a bounded correction and dependency check suffice.

Maintain one shared attempt history in the rework packet, using author submissions and reviewer results. Count consecutive unsuccessful review rechecks of the same underlying blocking finding without material progress across all stages; exclude the original review and author self-checks. Material progress satisfies a closure condition or establishes new evidence that materially narrows the remaining cause and supports a concrete next correction. Rewording, new versions/IDs, or moving between stages or sessions is not progress and does not reset the count. Preserve links if findings are split or renumbered.

After two such rechecks, stop the affected automatic rework loop and issue a **Blocked at review** report plus a blocked rework task/packet with the attempted fixes, persistent failed condition, affected records, and exact unblock action. Stop sooner when no useful action can address the blocker. Continue independent work where useful. Resume only when new evidence, a confirmed decision, restored access, or another documented change addresses the blocker; record why it enables a different action before resetting the count. A blocker report does not close the finding or waive its gate.

Derive the quality verdict from the assessment:

- **Does not meet quality requirements:** at least one applicable mandatory check fails, even if other checks are unassessed.
- **Not established:** no mandatory check is known to fail, but at least one remains unassessed.
- **Meets quality requirements:** all applicable mandatory checks pass and the rest have justified non-applicability. A limited review reports its scoped conclusion separately and leaves overall quality **Not established**, unless a reviewed mandatory check already establishes failure.

Use the overall status that describes the next action:

- **In progress:** useful assessment, assembly, or clarification is continuing.
- **Needs rework:** diagnosed defects require artifact corrections; provide the RV/RW handoff.
- **Blocked at review:** required evidence, access, decision, independent review, or mandated approval prevents completion and no further useful independent work can resolve it. Include any known defects as well.
- **Limited review complete:** the requested subset is assessed; explicitly withhold an overall engineering-readiness conclusion.
- **Ready for engineering:** the full gate passes for the exact packaged versions.

Mark **Ready for engineering** only when earlier gates remain valid; all applicable mandatory checks pass; no blocking finding, material question, or unsupported critical assumption remains; required independent validation and any actually mandated approvals cover this baseline; and the assembled specification, catalogs, traceability, and package index agree. Minor follow-up must be bounded and cannot alter behavior, acceptance, or a mandatory gate. Do not invent stakeholder approval requirements or claim approval without a source.

## Save and hand off

Use the requested destination or assignment convention. Otherwise save `review-report.md`, `review-rework.md` when returning work, and `engineering-specification.md` when assembling a full package beside the refinement report, or in the assignment working directory if no report exists. Read existing files first to preserve assignment history and avoid overwriting another assignment. Remove template placeholders from generated outputs; use Unknown/Not specified or a justified Not applicable for genuine gaps.

The review report is the package index: list exact artifact versions, quality verdict, gate status, finding dispositions, required approvals and their evidence or non-applicability, remaining follow-up, and next owning stage. Preserve earlier rounds or their versioned references. A ready package retains any prior rework history as resolved history, not an active return.

Return the report/specification locations, whether quality requirements are met, engineering-readiness status, and the most important blockers or next stage. Readiness permits engineering planning and implementation; delivery acceptance remains future work.
