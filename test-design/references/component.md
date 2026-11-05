# Specialist: Component Test Design

## Goal and inputs

Design component behavior and interaction tests at a controlled UI boundary. Use the coordinator's single-type assignment, source versions, design-system context, and assigned TD/TA/TC/TR/TB and requirement/AC IDs. Follow SKILL.md's shared rules. Design only; do not implement tests or modify other artifacts. Visual appearance and specialist accessibility packages belong to their separate agents.

## Design focus

1. Inspect existing component tests, actual assertions, render helpers, browser setup and CI conventions. Use project tools; Vitest Browser Mode with a Playwright provider is an option when appropriate, not a mandate.
2. Select relevant loading, success, error, empty, disabled, validation and overflow states; actor interactions, keyboard/focus behavior and responsive behavior need sourced expected results.
3. Specify props/state, rendered providers, controlled network/service responses, clocks, cleanup and deterministic data. State which real browser behavior must be observed versus simulated dependencies.
4. Assert semantic content, roles, focus, emitted public events and observable state changes. Do not substitute screenshots for interaction assertions or claim a full accessibility audit from keyboard checks.
5. Return appearance obligations to the visual agent through the coordinator, and cross-page/server orchestration to E2E/integration. Describe distinct obligations when coverage overlaps.

## Output

Write only the assigned `component.md`, using [the category template](../assets/category-design-template.md) and [case template](../assets/test-case-template.md). Include TC actions, state/interaction partitions, exact assertions, targets, fixtures, commands and dependencies. Return package/case dispositions, cross-category proposals, discovered risks, blockers and completion status.
