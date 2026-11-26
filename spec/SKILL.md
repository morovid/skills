---
name: spec
description: Turn a change request into reviewed, verifiable requirements through intake, discovery of current behavior and impacts, requirements with acceptance criteria, and independent review. Ends with a passed spec that planning can use. Part of the feature workflow.
---

# Spec

This stage is part of the [feature workflow](../feature/SKILL.md). Follow its [principles](../feature/references/principles.md), [artifacts](../feature/references/artifacts.md), [delegation](../feature/references/delegation.md) and [review protocol](../feature/references/review-protocol.md). You are the lead.

**Roles:**
- The lead does intake and discovery, using scouts, and is the only one who asks the requester.
- On M and L, a `morovid-author` writes the requirements.
- A reviewer, chosen per [delegation](../feature/references/delegation.md#which-reviewer), gives the verdict.
- The lead never writes M/L requirements and never reviews.

If `spec` runs without `feature`, set up the assignment folder and `STATE.md` first ([artifacts](../feature/references/artifacts.md)).

## 1. Intake

Apply [intake](references/intake.md) and choose the [track](../feature/references/tracks.md).
- **M/L:** write `spec/brief.md`.
- **S:** start `spec/spec.md` from the [S template](assets/spec-small-template.md).

## 2. Discovery

Apply [discovery](references/discovery.md), sending bounded questions to scouts in parallel.
- **M/L:** write `spec/discovery.md`.
- **S:** fill in the discovery sections of `spec.md`.

Settle facts from evidence before asking anyone. Batch the questions that remain, ask, and record the answers in the brief's register.

## 3. Requirements

- **M/L:** start a fresh `morovid-author` with a handoff file:
  - Procedure: [requirements](references/requirements.md).
  - Template: [requirements template](assets/requirements-template.md).
  - Inputs: the brief and discovery, by section and ID range.
  - Output: `spec/requirements.md`.

  When the author returns gaps or questions, resolve them (targeted discovery, or the requester), then answer in the same session within the round.
- **S:** write the requirements sections of `spec.md` yourself, following the same procedure.

## 4. Review

1. Commit and tag the submission (`spec r<N>: submit`).
2. Start the reviewer with a handoff file:
   - Rubric: [spec rubric](references/review-rubric.md).
   - Files: the spec files under review.
   - The round tag and the project commit.
   - Open findings and, on rechecks, the changes since the last round.
   - Output: `spec/review.md`.
3. Commit and tag the saved verdict, add the trailers, and append to `findings.jsonl`.
4. Act on the verdict:
   - **PASS:** apply the Editorial findings, make the pass commit, and set spec `passed` in `STATE.md`. Hand off to [plan](../plan/SKILL.md).
   - **REVISE:** route each Blocking finding by its `Owner`. Intake and discovery findings are yours, and so are requirements findings on S. On M/L, requirements findings go to a fresh author, whose handoff lists the finding IDs and the changes. Authors fill in the `Response:` lines. Then resubmit.
   - **BLOCKED or round limit:** follow the [feature workflow](../feature/SKILL.md#stop-and-report).

## Changes after a pass

A requester change after PASS starts a new round. Don't edit passed files outside a round. Mark plan, implement and review `stale` if they rely on the changed IDs.
