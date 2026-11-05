# Specification Rework Handoff: <assignment title>

Status: <Open | In progress | Blocked | Addressed—pending recheck | Closed>
Source review: <review-report.md and exact round/version; authoritative RV finding definitions>
Returned baseline: <original artifact set and versions>
Return order: <Intake → Discovery → Refinement → Review, including only needed stages>
Canonical D/A/Q register: <exact location; normally discovery report section 5>

<!-- This packet supplements the original stage inputs. It is a correction request, not a new source of product authority or approval. Replace placeholders, remove unused records/comments, and preserve RV/RW and inherited IDs across rounds. Keep finding details authoritative in the review report; link them here. -->

## Inputs and preserved authority

| Input | Location / version | Use |
| --- | --- | --- |
| Original brief / request | <source> | <objective, actors, confirmed scope/exclusions and constraints> |
| Discovery / behavioral authority | <source> | <confirmed B/CB/I/E/D records and any unresolved upstream choices> |
| Refinement / current catalogs | <source> | <existing US/SC/FR/NFR/AC IDs, traceability, DoD> |
| Review / prior returns | <source> | <RV/RW IDs and previous closure/reopening evidence> |

- Confirmed scope and exclusions to preserve: <source-linked boundaries>
- Confirmed rules to derive from: <B/D/constraint IDs and exact locators; distinguish baseline evidence from target authority>
- Open choices that this packet does not settle: <existing Q/A IDs and owning register or precise question for owning stage; or None>
- Material that remains usable: <independent confirmed records and any limits>
- Evidence/access limits: <what is missing, consequence, and resolution source; or None>

Register updates belong at the canonical location. If unavailable, identify proposed updates and the required owner/action; this packet does not create another current D/A/Q register.

## Correction tasks in dependency order

### RW1 — <bounded correction>

- Findings addressed: <RV IDs and review anchors>
- Primary owning skill/stage: <spec-intake / spec-discovery / spec-refinement / review>
- Person or source, if known: <decision-maker, reviewer, repository/contract, or Unknown>
- Depends on: <RW IDs and required outputs; or None>
- Target artifacts / records: <paths, source versions, exact affected sections and IDs>
- Gap to resolve: <concise diagnosis linked to the finding>
- Existing authority: <confirmed B/D/constraint/process sources; or authority still needed>
- Required action: <specific evidence investigation, decision, derivation, coverage repair, or assembly correction; do not select an unconfirmed behavior>
- Required decision or evidence, if any: <specific question/source, consequence, and owning stage; or None>
- Expected native stage output and gate: <updated brief Ready for discovery / discovery Ready for requirements / refinement Ready for review / review recheck; otherwise retain that stage's blocked status>
- Dependent records to reconcile: <US/SC/FR/NFR/AC, traceability, DoD, upstream B/I/D, assembled package, and approval applicability as relevant>
- Closure criteria for review: <what a reviewer must compare or evaluate against which authoritative source>
- Status / response: <Open / In progress / Blocked / Addressed—pending recheck / Closed; what changed or exact blocker>

### Refinement-specific instructions, when applicable

<!-- Keep this section only for a refinement return; reference task IDs instead of duplicating diagnoses. -->

- Start from: <original brief/discovery/refinement baseline plus RW tasks; no restart for unrelated confirmed content>
- Repair stories and scenarios: <US/SC IDs, missing paths or outcomes, confirmed B/D source; or None>
- Repair requirements: <FR/NFR IDs, exact obligation/condition/source; or None>
- Repair acceptance: <AC IDs or next available IDs, exact uncovered obligations/boundaries, evaluation conditions; or None>
- Reconcile traceability and DoD: <specific affected relationships and completion conditions>
- Preserve identifiers and authority: <existing IDs retained, replacement links for superseded records, questions that must remain incomplete until upstream resolution>
- Return: <updated refinement report, change summary mapping each RV/RW to revised records, unresolved blockers, and own readiness gate; review alone closes findings>

## Return submission and revalidation

| Task / finding | Revised artifact / version and changed IDs | Evidence or decision source | Author disposition / remaining blocker | Reviewer recheck and final disposition |
| --- | --- | --- | --- | --- |
| <RW / RV IDs> | <paths, versions, IDs, replacement links> | <E/D/constraint locators or source comparison> | <Addressed—pending recheck or Blocked with action> | <review evidence and Closed/Reopened; Pending until actually checked> |

Affected downstream artifacts: <what is no longer current, required regeneration/review, and approval applicability; or None>

Re-review request: <review baseline to compare, affected QC checks and dependencies, and remaining independent review needed>

### Shared attempt history and stalled-loop blocker

Count consecutive unsuccessful review rechecks of the same blocking finding without material progress across all stages. Exclude the original review and author self-checks. Progress means a closure condition is satisfied or new evidence materially narrows the remaining cause and supports a concrete next correction. Wording changes, new versions/IDs, stage changes, and new sessions do not reset the count.

After two such rechecks, stop the affected automatic loop and mark its task and the packet Blocked. Preserve any independent usable work and issue the owning stage's blocker report. Stop sooner if no useful action remains. Resume only when a documented change addresses the blocker; record the reason before resetting the count. Review alone records recheck outcomes and closes findings.

| Finding / task and attempt | Stage and input → output versions | Attempted correction / new evidence | Author gate result and reviewer recheck evidence | Material progress / consecutive no-progress rechecks |
| --- | --- | --- | --- | --- |
| <RV/RW IDs; persistent underlying finding if split> | <owning stage and exact baselines> | <actual action and evidence/source links> | <author result; reviewer result/closure checks or Pending> | <closure condition satisfied or narrowed cause; count maintained by review> |

Stalled-loop blocker: <persistent condition, attempted fixes/history links, affected records, exact missing evidence/decision/access or other unblock action and owner; or None>

Resume evidence: <documented change addressing the blocker, enabled next action, and reason to reset the count; or Not resumed>

Completion: <all required tasks submitted and reviewer-verified, or exact pending/blocked action; author completion does not establish review closure or engineering readiness>
