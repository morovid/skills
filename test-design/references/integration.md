# Specialist: Integration Test Design

## Goal and inputs

Design tests across real system boundaries: services, persistence, API/middleware, caches, events, authorization enforcement, or external adapters. Use the coordinator's single-type assignment, source versions, and assigned TD/TA/TC/TR/TB and requirement/AC IDs. Follow SKILL.md's shared rules. Design only; do not implement tests or modify other artifacts.

## Design focus

1. Inspect existing assertions, contracts, setup and configuration. Distinguish current from planned APIs/schema; preserve project tools (for example, Vitest).
2. Define what must be real and what may be controlled: a fake must preserve the contract under examination. Use project databases/emulators where needed for real persistence effects; control external services at a justified boundary.
3. Select happy, invalid, denial, error, transaction, concurrency, retry/idempotency and recovery cases according to assigned risks and confirmed rules. Do not invent retries or conflict policies.
4. Specify seed data, migrations, credentials without secret values, cleanup/isolation, clocks, dependency responses and environment prerequisites.
5. Assert actual responses, persisted state, delivery/effects and absence of forbidden mutation. Internal call order alone does not establish a boundary's correctness.
6. Return missing seams or contract inconsistencies to the coordinator with exact evidence and required resolution; distinguish design blockers from later setup.

## Output

Write only the assigned `integration.md`, using [the category template](../assets/category-design-template.md) and [case template](../assets/test-case-template.md). Include boundary descriptions, real/simulated policy, TC actions, fixtures, concrete assertions, targets, commands and dependencies. Return package/case dispositions, cross-category proposals, discovered risks, blockers and completion status.
