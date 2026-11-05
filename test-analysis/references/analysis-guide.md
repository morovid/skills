# Risk and coverage analysis guide

Use the relevant lenses to challenge the supplied specification, plan, and inspected coverage. These are investigation prompts, not additional product requirements or mandatory testing categories.

## Risk lenses

| Lens | Investigate when relevant | Evidence and coverage focus |
| --- | --- | --- |
| Requirements and input partitions | Omitted outcomes, empty/invalid inputs, conflicting conditions, limits, units, rounding, or denied actions | Exact FR/NFR/AC outcomes; identify confirmed boundary partitions and missing behavioral decisions separately |
| State, data, and lifecycle | Invalid transitions, stale state, ownership, persistence, deletion, migration, partial updates, or recovery | Authoritative state/data invariants before and after the action, including required absence of side effects |
| Integration and architecture | Changed schemas, shared libraries, API/event contracts, consumers, timeouts, unavailable dependencies, or compatibility | Trace both producers and consumers; identify what mocks establish and which real boundary remains unverified |
| Asynchrony and concurrency | Queued work, completion signals, retries, duplicate events, races, ordering, cancellation, or interrupted work | Distinguish request acceptance from eventual effect; use confirmed repetition and recovery rules, recording missing ones as questions |
| Change and regression | Shared paths, removals, preservation obligations, data migrations, configuration, feature switches, or rollout stages | Explain the causal path from a planned modification to affected existing behavior; avoid unrelated regression inventories |
| Critical operations | Money, permissions, irreversible state, important journeys, or shared business invariants | Consequence of failure and observation at the authoritative boundary, including required denial/no-change outcomes |
| Relevant quality obligations | Supplied performance, accessibility, security, privacy, durability, visual, or compatibility requirements | Agreed target/property and measurement context; screenshots cannot establish accessibility, nor mocked timing real performance |
| Historical evidence | Prior defects, flaky suites, incidents, complex modules, or stale fixtures | Applicable version and failure mechanism; absence of incident reports does not establish low risk |

Stop expanding a dependency path when no credible causal connection to the planned change remains. Record material access limits rather than inferring safety. A risk can be relevant without a prior defect, but its trigger and consequence must be plausible in the supplied architecture or behavior.

## Likelihood, impact, and priority

Use supplied project scales when available. Otherwise use qualitative **High / Medium / Low / Unknown** likelihood and impact with a short explanation. Likelihood reflects exposure and the opportunity for this failure in the planned change; impact reflects consequences for this assignment. Avoid invented probability estimates or numeric scores.

Prioritize severe consequences, critical journeys, heavily shared behavior, and plausible failures hidden by current assertions. **High** priority calls for early design attention, **Medium** for targeted coverage within the assignment, and **Low** for proportionate checks or a justified omission. Explain the combination rather than applying a mechanical average. Unknown likelihood cannot alone justify low priority when impact is high. Priority does not grant permission to defer a required acceptance outcome.

For each risk, retain its evidence strength: an inspected contract mismatch differs from a plausible race inferred from a plan. A low-risk requirement still needs an assessed verification disposition; it need not have an invented risk record.

## Coverage sufficiency

Assess sufficiency against the target outcome and the planned change, not the size of a suite. Check whether an implementation could violate the requirement while the inspected assertions still pass. Common gaps include testing only a response without the persisted effect, checking that a dependency was called without verifying its contract, asserting an error without the required absence of mutation, and covering a preserved value without its associated behavioral rule.

Mocks are useful at a local boundary but do not establish real serialization, authorization enforcement, persistence, external delivery, or cross-process ordering unless those effects are actually exercised. Identify the boundary rather than treating all mocked coverage as weak. A passing result for the current revision cannot prove that the planned implementation will preserve coverage.

Inspect CI filters and configuration where claims depend on tests being selected. Skipped or unstable tests may reveal intended coverage but require an explicit reliability or execution prerequisite. Label environmental failures separately from confirmed product failures when the evidence permits that distinction.

## Allocating coverage without duplication

- **Unit:** isolated decisions, calculations, transformations, and state rules whose outcomes can be established locally.
- **Integration:** contracts and effects across real component, persistence, service, or event boundaries.
- **E2E:** critical actor journeys and orchestration whose correctness depends on the assembled system.
- **Component:** component behavior and interaction at a controlled UI boundary.
- **Visual:** appearance or layout obligations with an authoritative baseline and stable rendering conditions.
- **Accessibility, security, performance, and other specialist categories:** applicable obligations and concrete change-related risks requiring their methods, rather than generic audits.

Use existing project categories and tools where they provide the required observation. Assign a primary category to each risk/outcome and add complementary coverage only when it establishes something distinct. The presence of a UI does not automatically require E2E or visual tests; a backend change may still need a critical journey check if shared behavior is affected.

## Example: preserving invitation expiration

Hypothetical supplied specification: resending an invitation must preserve its original deadline T (`FR2/AC2`) and eligibility must remain true before T and false at or after T (`FR3/AC3`). The plan changes the resend service and persistence path. An inspected existing test asserts only that the deadline is unchanged.

The existing assertion supports FR2 but does not establish FR3. Record partial coverage with its exact locator, a risk that eligibility changes while the stored deadline stays intact, and focused verification of the confirmed eligibility partitions. Recommend a suitable local rule check and a persistence-boundary check only where the changed path needs distinct assurance. Link the supplied AC rather than generating executable cases. Record **Not run** if only source was inspected.

If eligibility at T was never confirmed, do not invent it. Record the affected requirement/AC gap, route the behavioral choice upstream, and keep the dependent design scope blocked. If an inspected existing suite already covers both obligations and the plan preserves its applicability, identify those checks and justify omitting new tests instead.
