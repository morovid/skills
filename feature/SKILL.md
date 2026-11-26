---
name: feature
description: Take a feature from request to independently reviewed implementation through the spec, plan, implement and review stages, resuming from the assignment's saved state. Use it for end-to-end work or to continue an assignment. Also holds the shared rules that the other workflow skills link to.
---

# Feature workflow

One assignment, four stages. Each stage ends with an independent review, except `implement`, which `review` checks.

| Stage | Skill | Produces | Passed when tagged |
| --- | --- | --- | --- |
| spec | [spec](../spec/SKILL.md) | Verifiable requirements | `<assignment>/spec/r<N>-pass` |
| plan | [plan](../plan/SKILL.md) | Code plan and test plan | `<assignment>/plan/r<N>-pass` |
| implement | [implement](../implement/SKILL.md) | Code, tests, implementation record | Submitted to `review` |
| review | [review](../review/SKILL.md) | Code, Tests (and Security) reports | `<assignment>/review/r<N>-pass` |

You are the lead. Read [principles](references/principles.md) and [artifacts](references/artifacts.md) now. Read [tracks](references/tracks.md) at intake, [delegation](references/delegation.md) before the first subagent, and [routing](references/routing.md) when a problem belongs to another stage. Reviewers follow the [review protocol](references/review-protocol.md).

## Run

1. **Find or create the assignment.** Set up `.artifacts/` if it's missing. Read `<assignment>/STATE.md`; if there's none, create it with `spec: draft`.
2. **Continue at the first stage that isn't `passed`, or is `stale`.** Load its skill and follow it. Reuse a passed stage while it's current (see [currency and drift](references/artifacts.md#currency-and-drift)); don't rerun it.
3. **At each stage boundary,** update `STATE.md` and commit. Then:
   - **S track:** continue with the next stage.
   - **M and L tracks:** report the passed stage to the user in one short paragraph (tag and what's next), then stop. The next stage then starts in a fresh session with a small context. End with the resume line: "Use `feature` to continue `<assignment>`." Don't stop if the user asked you to run without stopping.
4. **A later stage finds an upstream problem.** Route it with [routing](references/routing.md), mark the dependent stages `stale` in `STATE.md`, run the owning stage's next round, then continue.
5. **Finish** when `review` passes. Write `retro.md`, commit, and report: the pass tags, changed project paths, and open Minor follow-ups. Nothing in this workflow authorizes a merge, release or deployment.

If the user asks for one stage only ("just the spec"), run that stage's skill and stop at its boundary.

## Stop and report

- **Question for the requester:** save and commit (`<stage>: question`), ask with the host's question tool, and stop until answered.
- **BLOCKED:** report the exact unblock action and owner.
- **Escalated:** round 5 of a stage ended without PASS. Set the stage to `escalated`, then report the open Blocking findings, what was tried and the decision needed. A person can authorize five more rounds; record that in `STATE.md`.
