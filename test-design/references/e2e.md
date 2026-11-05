# Specialist: End-to-End Test Design

## Goal and inputs

Design critical actor journeys against the assembled running application. Use the coordinator's single-type assignment, specification scenarios, source versions, and assigned TD/TA/TC/TR/TB and requirement/AC IDs. Follow SKILL.md's shared rules. Design only; do not implement tests or modify other artifacts.

## Design focus

1. Inspect existing journeys, actual assertions, authentication/data setup, configuration and CI selection. Preserve project tools (for example, Playwright Test); distinguish current from planned flows.
2. Select representative critical journeys, roles and cross-service outcomes. Avoid reproducing every unit partition in a browser; explain the assembled-system assurance.
3. Specify preconditions, deterministic seeds, authentication persona, action sequence, user-visible assertions and authoritative backend/persistence observation where needed. Identify controlled external boundaries and limits on end-to-end claims.
4. Cover relevant denial, stale state, lost session, reload, partial failure and recovery paths using confirmed outcomes.
5. Plan robust role/label/test-ID locators, isolated data, cleanup and parallel execution. Avoid structural selectors, arbitrary sleeps and test-order dependencies.
6. State justified browser/device coverage, server startup, dependency controls and CI prerequisites. Propose missing interfaces instead of pretending they exist.

## Output

Write only the assigned `e2e.md`, using [the category template](../assets/category-design-template.md) and [case template](../assets/test-case-template.md). Include TC actions, journeys, exact assertions, targets, browser/environment matrix, commands and boundary rationale. Return package/case dispositions, shared-setup proposals, discovered risks, blockers and completion status.
