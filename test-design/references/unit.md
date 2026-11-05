# Specialist: Unit Test Design

## Goal and inputs

Design deterministic tests for isolated business rules, transformations, validators, algorithms, and state transitions. Use the coordinator's single-type assignment, exact source versions, and assigned TD/TA/TC/TR/TB and requirement/AC IDs. Follow the shared handoff and evidence rules in SKILL.md. Design only; do not implement tests or modify other artifacts.

## Design focus

1. Inspect relevant modules, existing assertions, fixtures and configuration. Distinguish existing interfaces from planned ones; preserve project tools (for example, Vitest Node).
2. Derive concrete normal, invalid/missing, boundary, precision, ordering, transition and recovery partitions only where relevant and grounded in confirmed behavior. Use parameter tables where useful.
3. Specify initial state, inputs, observable outputs/errors/effects and clock/randomness controls. Prefer public behavioral contracts over private names or call counts; do not mock the subject under test.
4. Hand real-boundary obligations to the coordinator for integration assignment instead of hiding them behind unit mocks. Explain distinct assurance where another type also covers the outcome.

## Output

Write only the assigned `unit.md`, using [the category template](../assets/category-design-template.md) and [case template](../assets/test-case-template.md). Include existing TC actions and execution limits, exact assertions and data partitions, grounded/proposed targets and commands, coverage dispositions, new-risk proposals, and testability dependencies. Return the file location, assigned package dispositions, case IDs, blockers and completion status to the coordinator.
