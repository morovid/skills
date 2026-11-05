# Repository-grounded planning

## Focused exploration

Start with discovery's E/CB/I/B maps and the current specification, rather than repeating intake or discovery. Inspect relevant repository instructions, dependency versions, entry points, symbols, callers, registrations, state/data owners, and configuration. Follow shared contracts or indirect consumers when there is a concrete compatibility or integration concern. A narrow local change does not need a whole-system inventory.

Record precise locators (path plus symbol/line, document section/version, or command/result and environment). Retain evidence statuses **Observed**, **Supported**, **Reported**, **Inferred**, or **Unknown**, with their limits. Separately identify proposed files/interfaces and internal design decisions. A source assertion is not a passing test; an unsuccessful search is not proof that a consumer is absent. State the inspection boundary and unavailable evidence.

For a new capability or repository, identify absent baseline areas and inspect surrounding contracts. Do not invent existing modules. When code drift contradicts confirmed behavior, record both sources and route the discrepancy upstream if it invalidates the specification; repository behavior cannot silently override the specification.

## Technical design

Assign stable DES IDs to meaningful solution elements, not every file. Cover what materially affects this assignment:

- Component responsibilities, reuse, proposed/changed interfaces, validation, permissions, and sources of truth.
- Normal, denial, invalid-input, failure, retry/cancel, duplicate/concurrent, and recovery flows where applicable; state transitions and partial effects.
- Existing callers and consumers, imports/exports, routes, dependency injection, event subscriptions, UI composition, persistence mappings, cache updates, configuration, and removal of obsolete connections.
- Contracts, schema/data migrations, backfills, deployment order, compatibility windows, flags, rollback limits, and operational visibility where warranted.
- Testability seams or deterministic controls needed to observe required outcomes; leave case design and testing-level choices to test analysis/design.

Choose minimal coherent changes using established patterns. Validate framework/runtime capabilities against installed dependencies or authoritative documentation when necessary. Record material alternatives, rationale, and consequences under DEC IDs; avoid a separate copy of canonical product decisions. Diagrams or pseudocode are useful only when they clarify a difficult flow. Unknown expected behavior requires an upstream decision; an implementation prerequisite can be deferred only when its resolution cannot change the design.

## Executable task instructions

Prefer independently understandable slices with stable intermediate states. Each IMP task needs its purpose and linked obligations/design, create/modify/remove actions, verified existing targets or explicitly proposed targets, concrete instructions, old/new integration, dependencies, and completion evidence. Include removal and preservation work; do not stop at adding new modules.

Check dependency order for cycles and incompatible intermediate states. Name required schema, consumer, configuration, rollout, and cleanup work rather than burying it in a generic integration task. Identify blockers separately from bounded later prerequisites and optional polish.

Use observable production outcomes and project-appropriate build/type/configuration or existing-check commands for completion conditions. Record proposed commands as Not run unless actually executed with evidence. Do not create detailed cases, fixtures, selectors, or assertions, or claim planned outcomes already pass.

## Coverage reconciliation

Reconcile complete current catalogs. For every FR/NFR and material AC clause, confirmed B Add/Change/Remove/Preserve obligation, significant I dependency, and applicable DoD condition, explain how DES/IMP records realize it or why no code change is needed. Link relevant US/SC and canonical decisions without inventing relationships. A link alone does not establish that all outcomes are covered.

A No code change row needs inspected evidence and a reason; it still carries any downstream verification obligation. Blocked rows remain explicit and prevent readiness when material. Reverse-trace every task and design element to an obligation, compatibility need, or necessary change-related refactoring. Keep proposed improvements outside mandatory work unless authorized.
