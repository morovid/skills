# Test planning (author)

You decide how to verify the required outcomes and the risky paths of the planned change, and you write the cases unless designers are assigned. Write the files from these templates:
- `plan/tests.md` from the [test plan template](../assets/test-plan-template.md): the index of scope, packages, traceability and work order.
- `plan/tests/<category>.md` from the [category template](../assets/category-template.md): the cases.

On S, write the test sections of `plan/plan.md` instead.

## Inputs

- The spec's AC, FR and DoD catalogs. The spec decides expected results.
- The code plan's DES and IMP lists. The code plan decides paths and seams, but never expected results.
- The existing tests, fixtures and CI selection that you inspect, through scouts for broad searches.

## Scope and risk

- For each affected area, give a classification:
  - **Verification only:** inspection is enough.
  - **Existing coverage sufficient:** named existing checks already cover it.
  - **Focused:** new or changed tests for specific outcomes.
  - **Comprehensive:** broad new coverage.
- Name a risk (TR) only when it has a plausible trigger and consequence in this change. Check, for example:
  - partitions and boundaries;
  - state and lifecycle;
  - contracts and consumers;
  - async and concurrency;
  - regressions in shared paths;
  - money, permissions or irreversible effects;
  - supplied quality targets.
- Before relying on an existing test, inspect its assertions, mocks and CI selection. A test title isn't coverage, and reading a test isn't a pass.
- A mock doesn't establish real persistence, serialization, authorization, delivery or ordering. Say what is real and what is simulated.

## Choose categories

| Category | Use for |
| --- | --- |
| unit | Isolated rules, calculations, transformations and state transitions |
| integration | Contracts and effects across real component, persistence, service or event boundaries |
| e2e | Critical actor journeys that depend on the assembled system |
| component | UI component behavior at a controlled boundary |
| visual | Appearance or layout with an authoritative baseline and stable rendering |
| specialist | Accessibility, security, performance or another type, only for a sourced obligation or a concrete risk |

Use the cheapest reliable level, and give each outcome one primary category. Add another category only when it observes something distinct. Use the project's existing tools and conventions. For what each category's cases must focus on, see [category focus](categories.md).

## Write cases

Follow the [category template](../assets/category-template.md):
- State the file defaults (tool, command, location, real versus simulated boundary, fixtures, determinism) once.
- A case writes only what differs from the defaults.
- Take expected results from the spec, never from the code or the plan. An unknown expected outcome is a gap for the lead, not a guess.
- For existing tests, record what happens to each: Retain, Extend, Modify, Replace, or Run for regression. A replacement keeps every assertion that's still required.

## Packages and designers (L)

- Group cases into TD packages by category.
- For each package, write `plan/handoffs/TD<n>.md` in the [handoff format](../../feature/references/delegation.md#handoff-files). Quote the obligations with their IDs and give the repository pointers and the exclusions.
- Return after writing the handoffs. Designers write the category files; a fresh test-planner session then fills in the traceability.

## Traceability

Fill in two tables, by ID:
- **Spec to tests:** every AC, every applicable DoD condition, and every Preserve and Remove obligation, mapped to cases, existing checks or inspections.
- **Plan to tests:** every material IMP or DES, mapped to the case that reaches it. Indirect coverage or "no separate check" needs a reason.

Then check the reverse direction: every case and test task serves an outcome or a credible risk.

## Revise and return

- **On a revision:** fix your findings with targeted edits and fill in their `Response:` lines. List the packages whose cases a designer must change.
- **Return:** the paths, the case counts per file, gaps for the lead, and the file sizes.
