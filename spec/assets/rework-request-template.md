# Specification Rework Handoff: <assignment title>

Status: <Open | In progress | Blocked | Addressed—pending recheck | Closed>
Source review: <stable review-report.md path and originating round ID; authoritative RV finding definitions>
Returned baseline: <round tag and artifacts@sha of the reviewed submission>
Resume with: `spec` using this packet and its linked baseline; return the response to the independent review phase in the same workflow
Return order: <needed spec phases and RW dependencies; any separate review-local prerequisites>
Canonical D/A/Q register: <exact location; normally discovery report section 5>

<!-- This packet lets spec resume without chat history. It supplements the original inputs and is not new product authority or approval. Replace placeholders, remove unused records/comments, and preserve RV/RW and inherited IDs across rounds. Keep finding details authoritative in the review report; link them here. -->

## Inputs and preserved authority

| Input | Path (at the returned baseline) | Use |
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
- Primary owning phase: <spec: Intake / Discovery / Refinement; keep review-local actions in the review report>
- Person or source, if known: <decision-maker, reviewer, repository/contract, or Unknown>
- Depends on: <RW IDs and required outputs; or None>
- Target artifacts / records: <paths, source versions, exact affected sections and IDs>
- Gap to resolve: <concise diagnosis linked to the finding>
- Existing authority: <confirmed B/D/constraint/process sources; or authority still needed>
- Required action: <specific evidence investigation, decision, derivation, coverage repair, or assembly correction; do not select an unconfirmed behavior>
- Required decision or evidence, if any: <specific scenario and unanswered choice, decision-maker or source to inspect, and what it blocks; or None>
- Expected authoring output and gate: <updated brief Ready for discovery / discovery Ready for requirements / refinement Ready for review; otherwise retain that phase's blocked status>
- Dependent records to reconcile: <US/SC/FR/NFR/AC, traceability, DoD, upstream B/I/D, assembled package, and approval applicability as relevant>
- Closure criteria for review: <link to the RV closure criteria, plus any task-specific comparison against authoritative sources>
- Author response: <link to the submission for this RW, or Pending>

### Refinement-specific instructions, when applicable

<!-- Keep this section only for a refinement return; reference task IDs instead of duplicating diagnoses. -->

- Start from: <original brief/discovery/refinement baseline plus RW tasks; no restart for unrelated confirmed content>
- Repair stories and scenarios: <US/SC IDs, missing paths or outcomes, confirmed B/D source; or None>
- Repair requirements: <FR/NFR IDs, exact obligation/condition/source; or None>
- Repair acceptance: <AC IDs or next available IDs, exact uncovered obligations/boundaries, evaluation conditions; or None>
- Reconcile traceability and DoD: <specific affected relationships and completion conditions>
- Preserve identifiers and authority: <existing IDs retained, replacement links for superseded records, questions that must remain incomplete until upstream resolution>
- Return: <updated refinement report with its own readiness gate; map each RV/RW to revised records and remaining blockers in the author response below or linked response>

## Return submission and revalidation

<!-- The lead records the author response and attempts in this packet, or supplies one linked response with these sections if the packet is not writable. Findings, reviewer recheck evidence, and closure are authoritative in the review report. -->

| Task / finding | Revised artifact / version and changed IDs | Evidence or decision source | Author disposition / remaining blocker |
| --- | --- | --- | --- |
| <RW / RV IDs and finding link> | <paths, versions, affected sections/IDs, replacement links> | <exact correction and requester/B/E/D/constraint locators or source comparison> | <Addressed—pending recheck or Blocked with dependency and exact unblock action> |

Affected downstream artifacts: <what is no longer current, required regeneration/review, and approval applicability; or None>

Re-review request: <review baseline to compare, affected QC checks and dependencies, and remaining independent review needed>

### Shared attempt history and stalled-loop blocker

Count consecutive unsuccessful review rechecks of the same blocking finding without material progress across all stages. Exclude the original review and author self-checks. Progress means a closure condition is satisfied or new evidence materially narrows the remaining cause and supports a concrete next correction. Wording changes, new versions/IDs, stage changes, and new sessions do not reset the count.

After two such rechecks, stop the affected automatic loop, mark the packet Blocked, and identify the blocked task below. Preserve any independent usable work and issue the owning stage's blocker report. Stop sooner if no useful action remains. Resume only when a documented change addresses the blocker; record the reason before resetting the count. The reviewer records recheck outcomes and closes findings in the review report; link those records here.

| Finding / task and attempt | Stage and input → output versions | Attempted correction / new evidence | Author gate and reviewer recheck links | Material progress / consecutive no-progress rechecks |
| --- | --- | --- | --- | --- |
| <RV IDs and RW IDs where applicable; persistent underlying finding if split> | <owning stage (including Review for review-local actions) and exact baselines> | <actual action and evidence/source links> | <local author gate if applicable and review report recheck for this attempt; Pending until rechecked> | <closure condition satisfied or narrowed cause; count maintained by review> |

Stalled-loop blocker: <persistent condition, attempted fixes/history links, affected records, exact missing evidence/decision/access or other unblock action and owner; or None>

Resume evidence: <documented change addressing the blocker, enabled next action, and reason to reset the count; or Not resumed>

Completion: <link to review-verified closure for all required tasks, or exact pending/blocked action; author completion does not establish review closure or engineering readiness>
