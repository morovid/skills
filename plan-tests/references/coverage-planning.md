# Coverage planning guide

The test planner uses this guide to draft `plan-tests.md`, the canonical index for test scope, designs, implementation tasks, and evidence. Record evidence in the plan or link the optional [coverage evidence appendix](../assets/coverage-evidence-template.md) when useful; keep coverage decisions in the plan, not in two documents. A legacy `test-analysis.md` can seed investigation after revalidation, not supply a verdict. Preserve stable IDs and supersession links.

## Inventory the baseline and exact impacts

- Record exact versions of the reviewed specification and production plan packages, the canonical D/A/Q register, and the repository snapshot (including relevant local changes, access limits, and drift). The specification is authoritative for required outcomes and expected results. The production plan describes intended logic, paths, seams, contracts, and dependencies; neither proposed nor current implementation overrides confirmed behavior.
- Trace from changed logic, contracts, and data/state transitions to the affected entry points, producers, consumers, and shared paths. Record the exact affected IDs, file/symbol or interface, conditions, and observable impact, including preserved and removed behavior. Distinguish current, proposed, and already implemented work; note downstream effects and exclusions with a causal reason.
- Inspect relevant test bodies, assertions, mocks, fixtures, and CI selection rules before relying on coverage. Record precise locators and limits, including what was inspected versus run and which paths or effects remain unobserved. If authorized and useful, run an existing check and record the actual command, snapshot, environment, outcome, and limits; otherwise record **Not run**. An unsuccessful search bounds the investigation; it is not proof of absence.
- Label claims **Observed** (directly established by a recorded check or execution), **Supported** (backed by inspected sources or an applicable authoritative contract), **Reported** (attributed but not verified), **Inferred** (plausible from evidence with a missing link), or **Unknown** (unestablished or unresolved). Describe what the evidence establishes, not what the label might imply: inspected assertions are not a passing result, and a proposed path is not a current fact.
- Keep `TA` for scope, `TC` for existing coverage, `TR` for risks, `TD` for design work packages, and `TB` for testability. Follow existing sequences, link inherited spec and production-plan IDs, and point to canonical D/A/Q records instead of starting another register.

## Assess scope and risk

Classify each affected area as **Verification only** (inspection is sufficient), **Existing coverage sufficient** (identified existing checks are sufficient without new or changed tests), **Focused testing**, or **Comprehensive testing**. Justify the depth by outcome, actual coverage, credible change risk, and feasibility. Use the relevant lenses below as investigation prompts, not additional product requirements or mandatory categories.

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

## Trace both coverage dimensions

- **Forward from specification:** Give every current obligation (including material AC/DoD, relevant NFRs, and preserved or removed behavior) an authoritative expected outcome and a verification disposition. Split outcomes where decisions or checks differ. Do not infer missing behavior from a mock, a historical assertion, or the production design.
- **Forward from planned change:** Separately map each material `IMP`, `DES`, or equivalent change or design decision and its risks, including changed logic, contracts, real boundaries, data/state transitions, and regression-sensitive paths or consumers. Link the exact case or existing check, the trigger and path it exercises or is designed to exercise, the real versus simulated dependencies, the effect it checks, and a plausible wrong result or bypass it would catch. A task ID, title, or mock that substitutes for the changed boundary is not evidence that the path is covered. Use a reasoned inspection with a locator and evaluation criterion, or a reasoned no-separate-check disposition, when appropriate. For example, identify the check that indirectly covers a mechanical step or explain why the step creates no distinct material risk. No one-test-per-task rule; do not drop a specification obligation to justify an omission. Record unresolved material gaps explicitly rather than calling them covered.
- **Reverse from cases and work:** Trace every case, existing check selected for the plan, inspection, and test implementation task to a sourced outcome or a credible change risk; link the relevant `IMP`/`DES` and path or boundary where it motivates the work. For a shared setup task, link to the checks and outcomes it enables. Remove or justify work without a meaningful link; do not freeze incidental internals. Reconcile retained overlap and preserve required assertions when replacing checks, with replacement or supersession links.

### Existing checks, inspection, and no new tests

Use **Retain**, **Extend**, **Modify**, **Replace**, and **Run for regression** for existing checks, **Create** for new cases, and **Verification only** for inspection actions. If existing checks or inspection suffice, omit new design packages and specialist work. The plan still needs concrete checks or inspections, commands or locators, evaluation criteria, applicable prerequisites, and a residual-risk rationale that addresses both dimensions. Neither a low-risk classification nor a test title or coverage percentage is sufficient justification.

## Allocating coverage without duplication

- **Unit:** isolated decisions, calculations, transformations, and state rules whose outcomes can be established locally.
- **Integration:** contracts and effects across real component, persistence, service, or event boundaries.
- **E2E:** critical actor journeys and orchestration whose correctness depends on the assembled system.
- **Component:** component behavior and interaction at a controlled UI boundary.
- **Visual:** appearance or layout obligations with an authoritative baseline and stable rendering conditions.
- **Accessibility, security, performance, and other specialist categories:** applicable obligations and concrete change-related risks requiring their methods, rather than generic audits.

Use existing project categories and tools where they provide the required observation. Assign a primary category to each risk/outcome and add complementary coverage only when it establishes something distinct. The presence of a UI does not automatically require E2E or visual tests; a backend change may still need a critical journey check if shared behavior is affected.

Give each justified `TD` package its exact obligations, planned paths and observation boundaries, existing assets/actions, exclusions and adjacent ownership, and feasibility constraints. Keep detailed cases in linked category designs, not in the inventory.

## Return discrepancies and record feasibility

Resolve factual questions from available sources first. If sources still conflict, retain both exact locators and versions, the affected outcomes and paths, and which plan sections, case IDs, or tasks are blocked or need revalidation. Record a `TB` or link a canonical question with the consequence, owner, required correction, and evidence that would unblock it. Distinguish material design blockers (such as an unknown expected outcome or unresolved choice of seam) from bounded implementation or execution prerequisites (such as provisioning a known fixture). Continue independent work and mark affected content provisional.

The lead routes objective/scope gaps to `spec` intake; baseline, impact, behavior, or decision gaps to discovery; requirements, AC, or DoD gaps to refinement; and package/readiness discrepancies to the `spec` review phase. Return infeasible or inconsistent implementation designs and missing material test seams to `plan-code`. Only the lead raises requester questions. Do not edit upstream artifacts or silently pick a new expected outcome. Record changed source versions and IDs, affected evidence/design/tasks, and required revalidation in the plan; inventory drafting has no separate readiness checkpoint.

## Example: preserving invitation expiration

Hypothetical supplied specification: resending an invitation must preserve its original deadline T (`FR2/AC2`) and eligibility must remain true before T and false at or after T (`FR3/AC3`). `IMP4` changes the resend service and persistence path. An inspected service test (`TC1`) asserts that the returned deadline is unchanged, with storage mocked.

`TC1` supports the returned value under its setup, not the persisted deadline or eligibility. Trace `FR3/AC3` to a controlled-clock check before, at, and after T; trace `IMP4` and `FR2/AC2` to a check that invokes resend and reloads the invitation through real persistence. An implementation that returns T but saves a reset deadline could pass `TC1` and fail the latter check. Reverse-link each check to its outcome and the persistence check to the changed path and risk; link a shared clock fixture task to the checks that need it. Keep complementary checks only for distinct observations. Record **Not run** if only source was inspected.

If eligibility at T was never confirmed, do not invent it. Record the exact requirement/AC gap, route the behavioral choice upstream, and mark the dependent design blocked. If inspected existing checks cover both obligations and actually reach the affected paths with meaningful assertions, identify them, their evaluation criteria and limits, and justify omitting new tests instead.
