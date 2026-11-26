# Discovery (lead, with scouts)

Goal: establish how the system behaves today, what the change affects, and which target behavior is confirmed. After this, the requirements author doesn't need to investigate again.

## Investigate

- Start from the entry points and domain terms in the brief.
- Send bounded questions to scouts in parallel: an entry point, a flow or state transition, consumers, existing tests. Verify material claims at the source.
- Follow dependencies in both directions where rules, data, events or contracts are shared. Stop where no plausible connection remains, and record the boundary.
- Use the lenses that apply:
  - actors and permissions;
  - states and lifecycle;
  - data ownership;
  - consumers and integrations;
  - asynchronous outcomes (accepted versus completed);
  - failures, invalid input and duplicates;
  - compatibility;
  - sensitive data.

  On S, check only the lenses the change touches; on L, every relevant one.
- When sources conflict, keep both and check the version and conditions. If the conflict remains, it becomes a question.

## Record

Write `discovery.md` from the [template](../assets/discovery-template.md).

- **E, evidence:** the locator and the claim it supports. Mark unverified claims.
- **CB, current behavior:** the trigger, rule and outcome, with E IDs.
- **I, impacts:** the affected area, the causal link and the implication.
- **B, target behavior:**
  - Type: Add, Change, Remove or Preserve.
  - Baseline: the CB records it starts from.
  - Behavior: only what applies (trigger, rules, outcomes, failure paths, state effects).
  - Authority: the brief, a D, or a constraint. Until authority exists, the status is `Proposed`.

Existing behavior isn't a preservation obligation just because it exists. It becomes one when the requester, a contract or a compatibility need requires it.

## Questions

| Kind | What to do |
| --- | --- |
| Evidence question (what happens today) | Investigate |
| Behavioral or scope decision | Ask the requester |
| Implementation choice | Leave it to planning |

Ask with the scenario, the facts, the options and their consequences. Label your recommendation as one. Record each answer as a D in the brief's register and update the affected B records.

**Gate:**
- Every in-scope B has authority.
- No open question could change scope, eligibility, lifecycle, data ownership, observable outcomes or compatibility.
- Significant impacts have a disposition.
