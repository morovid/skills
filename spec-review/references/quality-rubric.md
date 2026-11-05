# Specification quality rubric and return routing

Use this rubric for a full review or select the explicitly requested subset for a limited review. Each QC row is a mandatory assessment; conditional content may be Not applicable with a reason. Evaluate supplied assignment-specific quality conditions as additional checks, retaining their identifiers and authority. Do not replace a supplied condition with a weaker rubric summary.

## Quality checks

| ID | Quality condition | Pass evidence | Typical failure and owner |
| --- | --- | --- | --- |
| QC1 | Upstream gates and currency | Intake, discovery, and refinement readiness conditions are satisfied by current, mutually compatible artifacts or equivalent supplied content; later changes and explicit handoff invalidations are accounted for | A readiness label conceals an unresolved material question, Needs revalidation currency, or superseded source; owning upstream stage |
| QC2 | Faithful intent and scope | Actors, objective, outcome, scope/exclusions, and constraints agree with requester authority; business measures retain their meaning | A requirement expands scope, ignores an exclusion, or promises an unconfirmed business result; intake for a boundary choice, otherwise the stage that introduced the drift |
| QC3 | Decisions and uncertainty | Significant choices have explicit authority; one canonical D/A/Q register retains sources, current/superseded status, and resolutions; earlier copies are identified as historical snapshots; no material choice is disguised as an assumption | An author selected a new retry or retention rule without a decision, or competing registers disagree; discovery, or intake when the choice changes initial direction |
| QC4 | Evidence and baseline integrity | Material current-state claims have precise, applicable sources and honest claim status; contradictory evidence and unavailable boundaries are resolved or bounded without affecting readiness | A test was only read but reported as passing; unsupported baseline or preservation rule; discovery or the stage recording the new claim |
| QC5 | Impacts, dependencies, and feasibility | Significant direct/indirect impacts and external contracts are dispositioned; outcomes are achievable within known constraints; required external capability is evidenced | A consumer still relies on a removed state, or a known constraint makes the outcome impossible; discovery, with intake if scope must change |
| QC6 | Actor goals and end-to-end coverage | Important user/system flows cover relevant normal, alternative, boundary, denial, failure, and recovery outcomes; existing/new/modified/removed/preserved flows are distinguished | Only happy paths exist, or an actor cannot reach the required outcome; refinement if behavior is known, discovery if not |
| QC7 | State, data, and lifecycle completeness | Relevant valid/invalid transitions, ownership, invariants, creation/update/deletion/retention effects, and intermediate/final/partial outcomes are coherent; repetition/concurrency rules are established where material | Success is declared at enqueue time although the confirmed outcome requires completion; discovery for an undecided contract, refinement for incorrect derivation |
| QC8 | Functional requirement quality | Every current obligation is in scope, sourced, precise, independently verifiable, and consistent about responsible system, trigger, rules, and outcomes; no material requirement remains Incomplete | One statement permits mutually incompatible results, or adds a technical design without authority; refinement unless a new behavior decision is required |
| QC9 | Relevant non-functional quality | Applicable performance, security, privacy, reliability, accessibility, durability, compatibility, or other supplied obligations are addressed with sourced targets/properties, conditions, and evaluation methods | “Fast” is marked Defined without an agreed target, or a relevant supplied accessibility obligation is omitted; discovery for a needed choice, refinement for a missed supplied rule |
| QC10 | Acceptance and Definition of Done | Every current requirement's material outcomes have objective pass/fail evaluation; preserved rules name comparison conditions; NFR checks retain measurement context; DoD is evaluable and separates delivery evidence from specification review | Linked AC IDs check only success, missing a required denial/no-data-change outcome; refinement |
| QC11 | Bidirectional traceability | Objective/scope, confirmed B and significant I/D/constraints connect to current requirements and adequate AC, with stories/scenarios where useful; reverse tracing reveals no orphans or unsupported additions | Remove/Preserve B records disappear from the trace, or one AC is linked to unrelated obligations; refinement; discovery if source authority is missing |
| QC12 | Logical and cross-artifact consistency | Terminology, roles, rules, units, calculations, states, scenarios, decisions, requirements, AC, and DoD agree; source changes propagated to dependent records | A resolved D permits an action that FR/AC still deny, or rounding differs across catalogs; affected owning stages |
| QC13 | Required independent validation | Applicable independence rules are identified; a distinct reviewer or independent review artifact covers the current material, with reviewer/baseline/coverage evidence | An author labels their own fresh pass independent, or substantial corrections have only an author self-check; review. Use N/A only if no applicable rule requires independence |
| QC14 | Assembly completeness and usability | The assembled document and accessible catalogs form a coherent engineering specification, preserve normative meaning and IDs, retain necessary context, resolve links, and justify irrelevant sections | A required behavior is lost in assembly or conflicting copies remain; review/assembly; normative corrections return to their source stage |
| QC15 | Applicable approvals | Every approval actually required by supplied assignment/team rules is evidenced for this baseline by the appropriate authority | “Approved” has no source or the approval applies to a superseded decision; designated approver, coordinated in review. N/A if no approval is required |
| QC16 | Final package and finding closure | Package index pins the reviewed artifacts; all blockers are closed with recheck evidence; corrections and dependent revalidation cover this version; residual follow-up cannot change acceptance or mandatory gates | Report reviews revision A but hands off revision B, or “fixed” findings were never rechecked; review and the owner of affected records |

For QC9, assess relevance rather than adding every quality category. A categorical constraint can be objectively verifiable without a number. A numeric obligation needs units, measurement boundary, workload/environment, and statistic/window where those can change the result. Unconfirmed numbers are not a repair.

For QC13, use the applicable project rule, not an invented review ceremony. In this repository, `specifications/rules.md` requires independent critical validation. Record independence against the reviewed authorship and versions. Several perspectives from the same author are useful self-checks, not evidence of reviewer independence. An independent report may be reused only within its demonstrated scope and version applicability.

For aggregate checks such as QC1 and QC16, retain the distinction between known defects and missing verification. A known dependency failure makes the aggregate Fail; an otherwise unverified dependency makes it Not assessed. Recording an open finding for missing evidence does not itself turn that uncertainty into a proven defect. An absent approval is unverified; evidence that the designated authority rejected this baseline is a Fail.

## Gate interpretation

A **Fail** establishes nonconformance; **Not assessed** records an unverified condition. Both prevent a full readiness pass for an applicable mandatory check. **Not applicable** requires a concrete applicability reason and cannot hide a missing artifact, unconfirmed target, inaccessible source, or pending review/approval. In a limited review, unreviewed checks remain Not assessed rather than being called irrelevant; list them as scope limits without manufacturing findings. Give a scoped conclusion and withhold an overall pass.

Report failure whenever at least one mandatory check fails. Report overall quality Not established when none fail but required checks remain unassessed. Report quality met only when all applicable mandatory checks pass. Do not calculate an average, a percentage-based acceptance threshold, or a readiness score. A count may summarize coverage, but it does not decide the gate.

| Finding class | Meaning | Readiness consequence |
| --- | --- | --- |
| Critical | Supported defect could cause severe harm within this assignment, such as unauthorized access, irreversible loss, or a fundamentally impossible objective | Blocking; explain the concrete consequence rather than speculating |
| Major | Material ambiguity, contradiction, coverage failure, unsourced rule, or failed/unverified mandatory condition | Blocking; includes missing required independent review or approval |
| Minor | Local presentation or navigation defect with no effect on source authority, behavior, evaluation, or any mandatory condition | Nonblocking only when that limitation is defensible; raise to Major if a mandatory condition is not met |
| Suggestion | Optional improvement beyond what is required for this assignment | Not a defect, gate, or required return task |

Keep optional enhancements separate. A reviewer preference is not a new requirement. A proposed scope expansion remains a proposal even when the reviewer recommends it.

## Choosing the return stage

Route the cause before its downstream symptoms. A return can contain ordered tasks for several stages. Reuse an existing Q record if it already describes the gap; record a new decision only after actual authority exists.

| Situation | Primary return | Follow-on work |
| --- | --- | --- |
| Objective or exclusion conflicts with a newly requested outcome | Intake: obtain/record the boundary decision | Discovery revisits impacts/behavior; refinement updates dependent records; review rechecks |
| Current rule, external contract, or important consumer is not established | Discovery: investigate sources and update CB/I/E records | Confirm any resulting B/D choices before revising requirements and acceptance |
| Intended failure, lifecycle, repetition, or completion outcome admits materially different choices | Discovery: resolve the specific behavioral question | Refinement derives affected SC/FR/NFR/AC; avoid choosing a convenient default |
| Behavior and authority are clear, but requirement wording or acceptance coverage is incomplete | Refinement: correct identified records from existing B/D/constraint sources | Reconcile trace and DoD; recheck dependent assembly without reopening settled scope |
| Agreed quality target exists, but conditions or criteria omit it | Refinement: carry the sourced target into NFR/AC with its agreed measurement context | If a material context dimension was never agreed, discovery resolves that dimension first |
| Evidence or review independence is unavailable | Review coordinates the missing source/reviewer; discovery owns any resulting factual investigation | Keep the condition unassessed and readiness blocked; don't manufacture a refinement task |
| Catalog is correct but final assembly dropped a paragraph or points to another revision | Review/assembly: restore semantic equivalence and version links | Recheck package consistency; normative changes still need upstream authority and independent validation |
| An actually mandated approval is missing | Review records the exact requirement and designated authority | Obtain it only through authorized channels; do not claim approval or invent a new approval requirement |

Closure must be observable: identify the revised records and the comparison, scenario, trace, or evidence check that establishes correction. “Update the spec,” “address feedback,” and “all checks pass” are insufficient closure instructions.

## Worked return: missing preservation acceptance

**Hypothetical example only.** The supplied intake requires preserving invitation expiration. Discovery's B2 is Confirmed and CB1/E1 establish deadline T and eligibility `t < T`. Refinement's Defined FR2 preserves T and AC2 checks that T is unchanged. Its separate Defined FR3 preserves eligibility before, at, and after T, but AC3 checks only eligibility before T. These are illustrative records, not findings about this repository.

**RV1 — Major, blocking; QC10/QC11.** AC3 is linked to FR3 but evaluates only the pre-deadline partition. An implementation could retain T and allow redemption before T, yet incorrectly allow redemption at T and still satisfy the written acceptance criteria. Cite the actual FR3, AC3, B2, and CB1/E1 locators. Request acceptance coverage of the sourced eligibility partitions, not a new expiration rule. FR2/AC2 remain valid and do not need to be merged with FR3.

**RW1 — spec-refinement; no upstream dependency.** Use the original brief/discovery/refinement versions plus RV1. Keep FR2/FR3/B2 and existing IDs. Repair SC2/AC3 to evaluate eligibility before, at, and after T while other conditions remain fixed. Continue the AC sequence only if additional criteria are needed, update exact FR3 trace relationships and relevant DoD references, and mark the revised refinement ready only after its own gates pass. Preserve FR2/AC2 as independent unchanged coverage.

**Closure:** review the revised AC3 for `t < T`, `t = T`, and `t > T`; verify expected results match CB1/B2; verify coverage of FR3 and continued applicability of FR2/AC2; check traceability and the assembled catalog version. Mark RV1 Addressed—pending recheck when submitted and Closed only after those checks. This verifies specification quality, not that an implementation passed those scenarios.

If discovery had never established expiration eligibility, the same proposed AC would invent behavior. Route that factual gap to discovery first; create a dependent refinement task after the rule is established. If a requester changes the intended rule, record the decision and revalidate every affected behavior, scenario, requirement, criterion, and approval instead of closing the original finding against the old baseline.
