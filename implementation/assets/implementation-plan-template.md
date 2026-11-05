# Implementation Plan: <assignment>

Status: <In progress | Ready for implementation review | Blocked at implementation planning | Ready for implementation>
Currency: <Current | Needs revalidation>
Plan version: <revision and actual date if known>
Author: <identity>
Review: <implementation-review.md location, round, verdict, exact reviewed plan version; or Pending>

<!-- Scale sections to the change; link large supporting files from this index with their versions. Preserve stable IDs and history. Remove placeholders/comments from completed outputs. -->

## 1. Sources, scope, and baseline

| Input | Location and exact version | Authority / readiness / limits |
| --- | --- | --- |
| Engineering specification | <path/version> | <Ready for engineering; currency> |
| Specification review package index | <review-report path/version> | <included catalogs, full verdict, independence and mandated approvals> |
| Canonical catalogs and D/A/Q register | <paths/versions/sections> | <current records, supersessions, limits> |
| Repository and instructions | <repository, revision/snapshot, instruction paths, relevant local changes> | <inspection boundary and drift disposition> |

Objective, actors, scope/exclusions, and supplied constraints: <source-linked summary>
Prior plan/review and change boundary: <versions, changed IDs/sections; or Initial submission>

## 2. Repository evidence and impact map

| Evidence / source status | Verified locator | Current behavior / contract | Affected obligation, consumer, and implementation consequence | Limits |
| --- | --- | --- | --- | --- |
| <inherited or continued E ID; Observed/Supported/Reported/Inferred/Unknown> | <path + symbol/line, section/version, or command/result> | <fact> | <B/I/FR/AC; direct/indirect consumers and reuse> | <unknowns or unavailable areas> |

Reused discovery evidence and focused rechecks: <what remains valid and why>
Proposed targets are described below; they are not existing-code evidence.

## 3. Technical design

### Design elements

| Design ID | Responsibility / intended change | Existing or proposed modules and contracts | Obligations and decisions |
| --- | --- | --- | --- |
| DES-001 | <solution element> | <label verified vs proposed> | <source-qualified IDs; DEC links> |

Interfaces, state/data ownership, permissions, and invariants: <concrete design and authority>
Normal, boundary, failure, and recovery flows: <relevant transitions and effects>
Existing-system integration: <callers, registrations, composition, events, caches, persistence, cleanup>
Compatibility, migration, deployment, and rollback: <sequence and limits, or justified Not applicable>
Testability concerns: <observation/seam constraints for test-analysis; no test cases>

### Technical decisions

| Decision ID | Choice and affected DES/IMP IDs | Alternatives and rationale | Consequences / source constraints |
| --- | --- | --- | --- |
| DEC-001 | <internal mechanism> | <material alternatives only> | <tradeoffs; canonical D links if relevant> |

## 4. Ordered implementation tasks

| Order | Task | Depends on | Purpose and affected areas |
| --- | --- | --- | --- |
| 1 | IMP-001 | <IDs or None> | <coherent slice> |

### IMP-001 — <action>

- Obligations and design: <FR/NFR/AC/B/I/DoD/SC and DES/DEC links as applicable>
- Actions and targets: <create/modify/remove; verified paths/symbols vs proposed targets>
- Coding instructions: <specific changes, contracts, state/data effects, and relevant failure logic>
- Integration and consumers: <exact existing/new connections and compatibility work>
- Dependencies and intermediate state: <task IDs; setup, migration, rollout constraints>
- Completion evidence: <observable outcomes and grounded commands; proposed commands marked Not run>
- Blockers / bounded later prerequisites: <owner, action, consequence; or None>

<!-- Repeat for actual tasks; optional polish stays separate from mandatory work. -->

## 5. Coverage and dispositions

| Current source obligation / exact outcome | Design | Tasks or No code change | Coverage explanation, inspected evidence, gaps, and downstream verification |
| --- | --- | --- | --- |
| <FR/NFR; material AC outcome; B including Preserve/Remove; I dependency; applicable DoD> | <DES IDs or justified N/A> | <IMP IDs or disposition> | <how the full obligation is realized; no-code rationale; blockers> |

Catalog reconciliation and reverse check: <which complete source catalogs were reconciled, exclusions, unsupported-work check, and limits>

## 6. Risks, open items, and upstream returns

| Item / affected IDs | Consequence and blocking status | Owner / canonical record | Exact action and unblock evidence |
| --- | --- | --- | --- |
| <gap or credible change risk> | <material blocker or bounded nonblocking prerequisite> | <stage/source and D/A/Q link; no duplicate register> | <required correction/evidence> |

## 7. Review responses and revision history

| Finding ID / review round | Planner response and evidence | Changed sections/IDs and submitted version | Reviewer verification |
| --- | --- | --- | --- |
| <REV ID> | <fix, disagreement, or upstream return> | <precise changes or None> | <Pending; link reviewer-owned disposition> |

Revision history: <prior version, meaningful changes, supersessions, affected downstream artifacts and required rechecks>

## 8. Handoff

Author self-check: <source consistency, coverage, feasibility, integrations, order, links; limits>
Independent review: <exact reviewed version/baseline and verdict evidence, or required next invocation>
Readiness and currency: <status, gate evidence, and blockers>
Next owner/action: <implementation-review, upstream correction, coding and test-analysis handoffs>
Downstream revalidation: <changed versions/IDs, affected artifacts, required checks; or None>

A plan records intended implementation. It does not establish implemented behavior, passing tests, or delivery acceptance.
