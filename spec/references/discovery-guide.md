# Discovery investigation and refinement guide

Use the relevant sections when selecting investigation depth, interpreting evidence, or turning findings into questions. The tables are prompts for judgment, not a requirement to inspect every category for every assignment.

## Evidence and claim status

| Claim status | Use when | Important limitation |
| --- | --- | --- |
| Observed | The behavior was directly observed in a recorded check or execution | Scope the claim to the exercised scenario, environment, and version; one observation does not establish all paths |
| Supported | Inspected code, tests, data definitions, or an applicable authoritative contract supports the claim | Name the supporting source and its limits; source inspection does not prove deployed runtime behavior |
| Reported | A requester, supplied document, or other unverified account describes the behavior | Attribute it and identify what would verify it |
| Inferred | Available evidence suggests the behavior but a relevant link has not been established | State the reasoning and the missing evidence; do not treat it as confirmation |
| Unknown | Available sources do not establish the behavior, or conflict remains unresolved | Record the missing evidence or contradiction and its material consequence |

These labels apply to claims about existing behavior. **Confirmed** target behavior means a requester instruction, a confirmed decision, or an applicable established constraint supports the intended behavior. A code finding is not stakeholder approval for a new product rule.

For each important evidence record, capture a locator precise enough for another reader to find the source, the claim it supports, and its limits. Prefer durable source references with a revision where available. Never invent paths, line numbers, passing tests, decision dates, or stakeholder approval.

When sources disagree:

1. Separate the claims. A test may describe intended behavior while code and an observation describe an implementation discrepancy.
2. Check the relevant version, environment, feature conditions, entry point, and execution path before concluding that the sources conflict.
3. Record the discrepancy with both sources if it remains unresolved. Identify whether the assignment needs to preserve existing behavior, restore intended behavior, or make a new choice.
4. Resolve the factual question through evidence where possible. Ask the requester to resolve the behavioral choice when competing outcomes remain.

A search with no results bounds the investigation; it does not establish that a capability or dependency cannot exist. Describe where and how the search was conducted when the absence matters.

## Investigation lenses

Start with the requested workflow and its immediate dependencies. Expand when findings show shared rules, shared state, consumers, or external effects. Distinguish a domain relationship with evidence from a merely conceivable concern.

| Lens | Questions that may change the behavioral specification | Useful evidence |
| --- | --- | --- |
| Actors and authorization | Who can start, view, complete, or reverse the action? Does tenant or resource ownership affect eligibility? | Entry points, permission checks, policy definitions, authorization tests |
| States and lifecycle | What states allow the action? Which transitions follow? What happens after expiration, cancellation, deletion, or repeated action? | Domain rules, state definitions, lifecycle jobs, transition tests |
| Data relationships | What owns the relevant information? Which identities, uniqueness rules, or references connect it to other behavior? | Models, schemas, validation, data contracts, related workflows |
| Cross-domain interactions | Who produces or consumes the changed information? Which adjacent workflows depend on the old meaning? | Callers, consumers, events, integration contracts, end-to-end tests |
| Asynchronous outcomes | When is the action considered complete? Can accepted work later fail? What is observable during a partial outcome? | Job behavior, callbacks, delivery receipts, status handling, failure tests |
| Alternatives and failures | What happens on invalid input, denied access, stale state, unavailable dependencies, or duplicate attempts? | Error handling, boundary tests, existing user-visible outcomes |
| Compatibility and preservation | Do older clients, external consumers, or established workflows depend on the current behavior? Which rules must remain? | Public contracts, versioned APIs, compatibility tests, requester constraints |
| Sensitive data and ownership | Does the change alter who can access, retain, transfer, or delete information? Which established policies apply? | Access rules, ownership model, supplied policies, lifecycle behavior |
| Operational constraints | Are there supplied limits or evidenced behavior affecting volume, timing, delivery, or auditability? | Existing limits, supplied service constraints, audit behavior, relevant checks |

For shared data or lifecycle changes, inspect representative producers and consumers across domain boundaries. For an isolated presentation change, focus on the affected visible behavior and any actual dependencies. Record meaningful exclusions and access gaps without manufacturing a long risk list.

## Questions that produce actionable decisions

A useful question names the triggering scenario, established facts, remaining choice, and behavioral consequence. Resolve it at the level of observable outcomes rather than asking the requester to choose an implementation technique.

Example pattern:

> In <scenario>, evidence establishes <current rule>, but does not establish <target outcome>. Should <option A> or <option B> apply? A would mean <behavioral consequence>; B would mean <behavioral consequence>. This affects <behavior and impact IDs>.

Record an option as selected only when the requester or designated decision-maker has chosen it, including through an explicit earlier instruction. If a choice is already implied unambiguously by a confirmed constraint, apply that constraint and record the trace instead of asking the same question again.

Distinguish:

- **Evidence question:** What happens today, which contract applies, or which dependency exists? Investigate available sources first.
- **Behavioral decision:** What should happen when existing rules and the requested change allow different outcomes? Obtain confirmation.
- **Scope decision:** Does the assignment include a newly discovered required effect or a change to an exclusion? Explain the dependency and obtain confirmation.
- **Implementation choice:** Which algorithm, framework, storage design, or delivery mechanism should realize the agreed behavior? Leave it to later engineering work unless the requester supplied a binding constraint.

An unresolved item blocks discovery when its answer could materially change scope, eligibility, lifecycle, data ownership, observable outcomes, compatibility, or a required dependency. An unknown that affects only implementation detail may be carried forward, with a reason it cannot alter the agreed behavior. Renaming a material ambiguity an assumption or future task does not make it nonblocking.

## Worked trace: resend pending invitations

This illustration continues the request used in the intake template: allow account owners to resend pending team invitations while keeping current permissions and expiration rules. **All evidence and findings below are hypothetical.** They demonstrate record relationships, not facts about a repository; a real report must replace them with inspected sources.

### Intake handoff

The supplied brief is ready for discovery and carries:

- Q1: How are pending invitations, permissions, and expiration currently defined?
- Q2: Does existing resend or email-delivery behavior impose relevant limits?
- A requester instruction to preserve current invitation permissions and expiration rules.

### Evidence and baseline

- E1: Hypothetical inspection of permission and expiration rules establishes that only an account owner can manage the invitation and that eligibility uses the original invitation deadline. The evidence locator would identify the actual code and applicable tests.
- E2: Hypothetical inspection of delivery behavior establishes that a mail request can be accepted before delivery succeeds. It does not establish which target outcome the new resend action should report.
- CB1, Supported by E1: Existing invitation access and expiry rules define who is eligible and when an invitation ceases to be usable.
- CB2, Supported by E2: Acceptance of a mail request and successful delivery are different outcomes.
- Q1 is resolved with the specific rules and E1 as its source. Q2 is only resolved to the extent established by E2; any unverified limit remains explicit.

### Impacts and change map

- I1: Resending connects invitation lifecycle behavior to email delivery. Permission and expiry eligibility must be checked against the preserved rules; delivery completion has a distinct meaning from accepting the resend request.
- B1, Add, initially Proposed: An eligible account owner can request another invitation email. The externally visible result is incomplete until the asynchronous-outcome question is settled.
- B2, Preserve, Confirmed by the original request: Existing permission and expiration rules continue to apply. CB1 and E1 define the preserved baseline; resending does not extend the original invitation deadline.

### Ambiguity and decision

- Q3, Blocking: When the mail system accepts the resend request, should the result mean that another email has been requested, or should success require confirmed delivery? The options affect B1 and I1. The agent may recommend an outcome but must not select one without authority.
- Hypothetical requester answer: Acceptance means another email has been requested; delivery is not guaranteed by that result.
- D1: Record that answer, its actual source, the confirming requester, and links to B1, CB2, I1, and Q3. Mark Q3 resolved by D1.
- B1 can now define the agreed observable outcome using D1, while B2 retains the original preservation constraint. Any additional material eligibility or failure questions discovered during investigation must also be resolved before readiness.

### Handoff consequence

Later requirements and acceptance work should trace B1 to the original objective, I1, and D1, and B2 to the request and E1. Before the hypothetical answer, the report remains in progress or blocked when no independent work remains. After that answer, readiness still depends on all other relevant gates passing; resolving one question does not establish complete discovery.
