# Refinement guide: coverage, verifiability, and traceability

Read the sections relevant to a difficult scenario, requirement, or acceptance gap. The worked trace continues the invitation example used by intake and discovery; it is an illustration, not a source of product rules.

## Choose useful coverage

Start with confirmed behavior, preservation obligations, and evidenced impacts. Use the following lenses only when a plausible relationship to the assignment exists. A newly uncovered outcome is a question until its rule follows from authority or is confirmed.

| Lens | Scenario or requirement question | What makes coverage useful |
| --- | --- | --- |
| Actor and authorization | Who may start, observe, complete, or reverse the action? What happens outside that authority? | An eligible actor path and relevant denial cases with observable outcomes and data effects |
| State and lifecycle | Which starting states allow the action? What remains true after expiry, cancellation, completion, or deletion? | Allowed and invalid transitions, boundary conditions, ownership, and preservation rules |
| Input and calculations | Which values or combinations change the outcome? Are units, precision, rounding, and inclusive boundaries established? | Representative rule partitions and material boundaries, without arbitrary sample values becoming requirements |
| Shared data and domains | Which producers, consumers, or workflows depend on the changed data or rule? | Results at each affected boundary and the invariants that connect them |
| Asynchronous work | What does acceptance mean? What can happen before or after completion? | Separate observable intermediate, final, and failure outcomes only where required by confirmed behavior |
| Repetition and concurrency | Can another attempt or a state change occur before completion? Which outcomes are acceptable? | Confirmed duplicate, stale-state, or conflict rules; no invented locking or retry mechanism |
| Failure and recovery | What can fail, what remains committed, and what can the actor do next? | Observable partial results, preserved data, recovery eligibility, and no implied rollback promise |
| Removal and compatibility | What happens to attempts to use a removed flow? Who depends on the old contract? | Explicit target behavior for remaining actors/consumers and sourced compatibility obligations |
| Relevant quality constraints | Does an applicable performance, security, privacy, reliability, accessibility, durability, or compatibility obligation change the result? | Verifiable properties and measurement context tied to this assignment rather than a generic checklist |

A scenario may contain a compact alternative branch when the outcome remains easy to follow. Split it into another `SC` record when it has distinct preconditions, cross-domain effects, or acceptance obligations. Avoid making one scenario carry an entire feature with incompatible starting states.

A **story** explains an actor goal and benefit. A **scenario** describes a concrete flow. A **requirement** states a binding obligation across applicable cases. An **acceptance criterion** defines an observable check of that obligation. They are linked views, not four copies of the same paragraph. System-level invariants can have requirements and acceptance criteria without a fabricated human story.

## Derive requirements without inventing decisions

A useful requirement pattern is:

> Under <conditions>, <responsible system or actor> must <observable behavior or property>, resulting in <outcome>.

Keep the detailed rule in the requirement and use links to establish its authority. A source link alone does not replace a precise obligation. Split separate obligations when a reader could satisfy one and violate another, especially when they have different conditions or acceptance methods. Keep closely related rule details together when splitting would obscure their meaning.

| Source situation | Refinement action | Limit |
| --- | --- | --- |
| Confirmed behavior specifies an outcome | Derive the obligation and acceptance result, retaining B/D links | Do not add eligibility conditions or side effects that the source does not establish |
| Requester requires preservation and discovery establishes the baseline | State the preserved rule precisely, with the preservation source and CB/E references | Existing code alone does not make every detail a preservation obligation |
| An applicable external or team constraint is supplied | Preserve its scope, version if known, and authority; define how this assignment satisfies it | Do not invent a standard, version, or broader policy |
| A rule has only one interpretation under confirmed constraints | State the derivation and cite those constraints | No repeat confirmation is needed for a faithful derivation |
| Several observable outcomes remain possible | Record a Q item, affected IDs, and consequences; keep that part incomplete | A recommendation, assumption, or default is not confirmation |
| Source evidence conflicts or is stale | Seek focused evidence and record the upstream correction needed | Do not silently choose a new baseline or claim discovery remains current |
| A desired result dictates no particular implementation | Specify the result and verification conditions | Do not choose a queue, schema, algorithm, framework, or internal transaction design |
| A business success measure depends on later user behavior | Preserve it as an outcome measure and link relevant requirements | Do not make engineering guarantee a metric it cannot establish through delivery acceptance |

Refinement can expose an upstream omission. Record the missing factual evidence or decision, affected scope and IDs, and required correction. Resume only the affected records after resolution; preserve useful independent work. A material correction prevents readiness until the affected upstream authority and downstream records are reconciled.

## Make quality requirements and acceptance measurable

Quantitative properties need enough context that two evaluators would reach the same conclusion:

- **Quantity and boundary:** What is measured, with which units, and from which event to which event?
- **Population and conditions:** Which actors, states, inputs, volume, environment, or dependency conditions are included?
- **Evaluation rule:** Which threshold, distribution/statistic, sample, observation window, and exclusions apply where material?
- **Authority and method:** Who or what establishes the target, and what observation can verify it?

Do not fill a missing dimension with a plausible number. Ask only for dimensions that can change the pass/fail result. A fully specified categorical property does not need a numeric threshold: for example, a sourced permission rule can be evaluated by checking the denied outcome and absence of unauthorized data changes.

| Weak statement | Refinement needed |
| --- | --- |
| “The action is fast.” | Obtain the required timing target and material measurement conditions, or retain it as a qualitative goal rather than a defined acceptance obligation |
| “The system is secure.” | Identify the applicable permission, exposure, or other security property and its source, then define an observable evaluation |
| “Delivery is reliable.” | Establish whether the contract concerns acceptance, delivery, data retention, recovery, or an agreed service measure; these are different obligations |
| “Preserve all existing behavior.” | Identify the relevant sourced preservation rules and the baseline outcomes to compare |
| “All tests pass.” | State the product outcome being evaluated; existing tests may provide evidence, but their passing alone does not define missing behavior |

Acceptance criteria should cover enough conditions to distinguish compliance from plausible incorrect behavior. One happy-path criterion rarely evaluates a requirement that also governs denied states, unchanged data, or a cross-domain failure. Several criteria may evaluate one requirement; a criterion may evaluate several requirements only when its expected result actually checks each one.

For preserved behavior, identify the rule and evidence baseline, then define the comparison condition. For a quality property, include the agreed context and method. For an integration, identify the externally observable result at the boundary. Do not require a particular automated suite or test type unless it is an established assignment constraint.

## Reconcile traceability

Use source locators with upstream IDs so references resolve outside the chat. Keep one authoritative definition for each record. A trace row should express a real relationship, not imply that every listed criterion evaluates every listed requirement.

Review both directions:

1. **Source to outcome:** For each confirmed in-scope B, find its requirements and sufficient acceptance coverage. Include Preserve and Remove entries. Carry related impacts and decisions. Link stories and scenarios when they express a meaningful actor goal or flow.
2. **Outcome to source:** For each story, scenario, requirement, and criterion, identify the objective/scope, confirmed behavior, or applicable constraint that warrants it. Unsupported details are proposed decisions or out-of-scope additions until resolved.
3. **Impact disposition:** Check each significant I record. It may produce a changed requirement, a preservation obligation, a resolved question, or a sourced explanation that no new obligation follows. Not every impact requires a new feature.
4. **Requirement to evaluation:** Check every material condition, outcome, and invariant in each defined requirement against its criteria. A linked AC ID does not establish sufficient coverage by itself.
5. **Change propagation:** After a source changes, find all linked records, revise them, and invalidate any dependent downstream readiness until rechecked. Retain supersession links instead of reusing IDs for unrelated obligations.

Use a justified “Not applicable” when a user story or flow does not fit a direct quality constraint. Preserve a supplied constraint's locator if no B record covers it. If the missing B represents a material discovery omission rather than a direct supplied constraint, identify the upstream correction instead of bypassing discovery's gate.

## Worked trace: resending a pending invitation

**All findings, decisions, and expected results below are hypothetical.** They continue the intake/discovery illustration and demonstrate refinement structure only. They are not facts about any repository, a complete specification, or evidence that any check passed.

### Supplied authority for this slice

- Intake objective: account owners can resend pending invitations; existing permission and expiration rules must remain.
- CB1 / E1: hypothetical evidence defines existing owner authorization and expiration eligibility. For this illustration, expiration eligibility is true before the original deadline T and false at or after T. A real report must use its own inspected rule and source locator.
- CB2 / E2: hypothetical evidence distinguishes mail-request acceptance from successful delivery.
- I1: resending connects invitation lifecycle behavior with the delivery boundary.
- B1, Add, confirmed: an eligible owner can request another invitation email.
- B2, Preserve, confirmed by intake: existing permission and expiration rules remain; resending does not extend the original deadline.
- D1: the hypothetical requester confirmed that mail-request acceptance means another email was requested, not that it was delivered.

### Derived story, scenarios, and requirements

- **US1:** As an account owner, I want to request another email for an eligible pending invitation so that an invitee who missed the first email has another opportunity to join. Sources: intake objective and B1.
- **SC1, New, normal:** Given an owner and a pending invitation eligible under CB1, the owner requests a resend and the mail system accepts the request. The outcome means another email was requested; delivery remains unconfirmed. Sources: B1, I1, D1.
- **SC2, Existing—preserve, lifecycle boundary:** After a resend, evaluate expiration eligibility before, at, and after the original deadline T. It remains true before T and false at or after T. Sources: B2, CB1/E1.
- **FR1, Defined:** When an eligible owner requests a resend and the mail system accepts that request, the system must report that another invitation email was requested without representing acceptance as confirmed delivery. Sources: B1, CB2/E2, D1. Scenario: SC1.
- **FR2, Defined:** Resending an invitation must preserve its original expiration deadline T. Sources: intake preservation instruction, B2, CB1/E1. Scenario: SC1.
- **FR3, Defined:** For an invitation that has been resent, expiration eligibility must remain true for time t < T and false for t ≥ T, holding other eligibility conditions fixed. Sources: intake preservation instruction, B2, CB1/E1. Scenario: SC2.

FR2 and FR3 are separate obligations: retaining the stored deadline and applying the eligibility rule require different checks, and either can be satisfied while the other is violated.

### Derived acceptance examples

**AC1 → FR1 / SC1**

- Given an eligible owner and pending invitation under CB1, with mail-request acceptance but no delivery confirmation;
- When the owner requests another invitation email and the mail system accepts the request;
- Then the observable result indicates that another email was requested and does not indicate confirmed delivery.
- Evaluation: observe the result at the agreed interface and the mail-request acceptance outcome. No particular UI text, transport, or test framework is prescribed.

**AC2 → FR2 / SC1**

- Given an eligible pending invitation with original deadline T;
- When a resend request is accepted;
- Then the invitation retains deadline T.
- Evaluation: compare the authoritative deadline before and after the action using the source-of-truth evidence established in discovery.

**AC3 → FR3 / SC2**

- Given an invitation that has been resent and original deadline T;
- When expiration eligibility is evaluated at times t < T, t = T, and t > T;
- Then it is true for t < T and false for t = T and t > T.
- Evaluation: compare the eligibility outcomes with CB1/E1 at these three boundary partitions, holding other eligibility conditions constant.

### Trace rows for this slice

| Source | Behavior / impact / decision | Story | Scenario | Requirement | Acceptance |
| --- | --- | --- | --- | --- | --- |
| Intake resend objective | B1 / I1 / D1 | US1 | SC1 | FR1 | AC1 |
| Intake preservation instruction; CB1/E1 | B2 / I1 | US1 | SC1 | FR2 | AC2 |
| Intake preservation instruction; CB1/E1 | B2 / I1 | US1 | SC2 | FR3 | AC3 |

### What still cannot be assumed

If dependency rejection, expired-invitation requests, or repeated attempts are relevant but lack a confirmed outcome, add Q records and keep those scenario/requirement portions incomplete. The trace above does not establish full scenario coverage or readiness.

If the requester adds “resends must be fast,” record the missing performance decision. Do not invent a response-time target or infer it from a single observation. A new required NFR remains incomplete until its target and material evaluation conditions have authority. If no quantitative obligation is intended, retain the qualitative goal with its disposition instead of presenting it as a measurable requirement.

If a later decision changes success from request acceptance to confirmed delivery, record D2 superseding D1 in the canonical register and revise B1, then revalidate SC1, FR1, AC1, the traceability rows, and the Definition of Done. FR2 and FR3 are unaffected unless the decision also changes expiration behavior; revalidation follows actual dependencies.
