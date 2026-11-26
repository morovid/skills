# Category focus (test planner and designers)

Read only the section for your category. All of them follow [test planning](test-planning.md#write-cases) and the [category template](../assets/category-template.md).

## unit

- Cover the relevant partitions, each grounded in confirmed behavior: normal, invalid or missing, boundary, precision and rounding, ordering, transitions. Use a parameter table.
- Control the clock and randomness. Assert public behavior, not private names or call counts. Never mock the subject under test.
- Obligations that need a real boundary (persistence, serialization, authorization) belong in integration; hand them back to the planner.

## integration

- Exercise the real boundary that the obligation is about, such as the database, a service, an event or the serialization format. Simulate only what is outside the boundary, and say why.
- Assert the effect at the authoritative place, such as the stored row or the emitted event, and the required absence of side effects.
- Isolate data per test and control ordering. Name the shared fixtures and who owns them.

## e2e

- Cover only critical actor journeys whose correctness depends on the assembled system. Use domain-level steps, not selectors.
- Define the environment, seed data and cleanup once in the defaults. Avoid sleeps; wait on observable conditions.
- Don't repeat rules that unit or integration cases already establish. Here, check only the orchestration.

## component

- Render the component at a controlled boundary, with props, state, mocked services and user interactions. Assert what the user can observe: text, roles, states and emitted events.
- Use accessible queries, and keep component tests separate from visual ones.

## visual

- Use only with an authoritative baseline, and state who approves baseline changes. Designers never approve baselines.
- Fix the viewport, fonts, data, animations and the time.
- A screenshot doesn't establish accessibility or behavior.

## specialist (accessibility, security, performance, other)

- Design only for a sourced obligation or a concrete risk of this change, never a generic audit. A missing target is a question, not a number you choose.
- **Accessibility:** the supplied standard and its version, the interactions and semantics to check, and the manual checks that automation can't cover.
- **Security:** the trust boundary, then the denial, no-leak and no-mutation outcomes, checked at the server boundary. No probing of live external systems.
- **Performance:** the sourced threshold and units, workload, data volume, environment, warmup and measurement window. Mocked timing establishes nothing.
