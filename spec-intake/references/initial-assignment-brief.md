# Initial Assignment Brief: template and example

Use the template as an output structure, replacing placeholders with assignment-specific content. Combine sections for a small request. Use “Not specified” or “Unknown” where appropriate; do not fill gaps with invented facts. A brief may be ready for discovery while retaining questions that repository exploration can answer.

## Template

```markdown
# Initial Assignment Brief: <assignment title>

Status: <Ready for discovery | Blocked at intake>
Currency: <Current | Needs revalidation; prior readiness is unusable while revalidation is pending>
Canonical D/A/Q register: <this brief until transfer to discovery, or established register location>
Review return, if any: <review report/rework packet and exact versions; or None>

## Request and sources

<Faithful summary of the initial assignment. Preserve material wording where it affects interpretation. Reference the supplied message, document, or existing decision; do not invent a link.>

## Purpose and intended outcomes

- Problem or opportunity: <why the change is wanted>
- Target users or actors: <who needs or is affected by the behavior>
- Intended outcome: <what should become possible or improve>
- Supplied success measures: <measures provided by the requester, or Not specified>

## Requested behavior and initial scope

- Requested behavior: <observable behavior at intake depth>
- Confirmed in scope: <requester-stated or confirmed boundaries>
- Confirmed exclusions: <explicit exclusions, or Not specified>
- Tentative scope: <interpretations that remain unconfirmed, if any>
- Constraints and known dependencies: <supplied limits or dependencies, with sources, or Not specified>

## Decisions, assumptions, and reported behavior

<!-- Define D/A/Q records here only while this brief owns the canonical register. After transfer, link the canonical records and identify any retained copies as historical snapshots with their baseline. Put unavailable canonical updates under Pending canonical updates rather than creating another register. -->

- D1 — <significant confirmed decision, who confirmed it, and source; omit if none>
- A1 — <working assumption, why it is needed, and how it will be checked; omit if none>
- Reported current behavior: <claim and source; indicate whether repository evidence was supplied, or that verification is pending>

## Open questions

| ID | Question | Blocking intake or deferred to discovery | Why it matters / how to resolve |
| --- | --- | --- | --- |
| Q1 | <specific missing input or uncertainty> | <Blocking intake / Discovery> | <what depends on the answer and who or what can answer it> |

Pending canonical updates: <proposed additions or changed dispositions, required owner/action, and material blocker; or None>

## Apparent complexity and discovery depth

- Classification: <Small / Moderate / Complex / Uncertain>
- Rationale: <signals in the request and relevant uncertainty>
- Suggested discovery depth: <proportionate investigation focus>

## Readiness and handoff

<Explain why exploration can begin, or identify the exact missing input that blocks it.>

Discovery should investigate:

- <behavior, interaction, dependency, or reported claim to verify>
- <question that requires repository evidence>

### Source changes and downstream revalidation

<!-- Keep when revising an existing assignment. Currency is separate from stage status. Do not reuse an invalidated readiness verdict or approval until its affected checks pass. -->

| Artifact / records and version | Source change | Invalidated readiness / approval | Required checks and next owner | Currency |
| --- | --- | --- | --- | --- |
| <brief or affected discovery/refinement/review/assembly records> | <changed scope, objective, or D ID and authority> | <prior verdict/baseline or None> | <checks needed, responsible stage, and evidence when rechecked> | <Current / Needs revalidation> |

### Review-return corrections, when applicable

| Finding / task | Updated artifact/version and records | Authority and correction evidence | Submission disposition / blocker |
| --- | --- | --- | --- |
| <RV/RW IDs and review source> | <changed brief sections and canonical D/A/Q links> | <requester decision/source and exact correction> | <Addressed—pending recheck / Blocked; dependent work or exact unblock action> |

Shared rework history: <review-rework.md attempt history and current no-progress count; or None>

Review alone verifies finding closure; this brief's readiness does not restore dependent readiness.
```

## Example: concise request with discovery questions

The requester supplies: “Let account owners resend pending team invitations so people who missed the first email can still join. Keep the current invite permissions and expiration rules.”

```markdown
# Initial Assignment Brief: Resend pending team invitations

Status: Ready for discovery
Currency: Current
Canonical D/A/Q register: Open questions in this brief; discovery will transfer these records and record the new location here.

## Request and purpose

Source: Requester's intake message: “Let account owners resend pending team invitations so people who missed the first email can still join. Keep the current invite permissions and expiration rules.”

Account owners need to resend pending team invitations so invitees who missed the first email can still join. No measurable success target was supplied.

## Requested behavior and initial scope

- In scope: Allow account owners to resend pending team invitations.
- Preservation constraint: Keep current invitation permissions and expiration rules.
- Explicit exclusions and other constraints: Not specified.
- Reported behavior: An initial invitation email exists. This is implied by the request and remains unverified in the repository.
- No additional behavioral decisions have been confirmed.

## Open questions

| ID | Question | Blocking intake or deferred to discovery | Why it matters / how to resolve |
| --- | --- | --- | --- |
| Q1 | How are pending invitations, permissions, and expiration currently defined? | Discovery | Inspect existing invitation behavior and evidence to identify the rules to preserve. |
| Q2 | Does existing resend or email-delivery behavior impose relevant limits? | Discovery | Explore existing behavior before asking the requester to decide any new limits. |

## Apparent complexity and discovery depth

Provisional classification: Small. The request describes one action within an existing invitation flow. Explore that flow and its permission, expiration, and email-delivery dependencies. Discovery may reveal broader effects and change this assessment.

## Readiness and handoff

The actor, desired outcome, requested action, and preservation boundaries are clear enough to start discovery. No intake question blocks exploration. Verify the reported invitation flow and identify whether resending creates unresolved behavioral choices before refining the specification.
```
