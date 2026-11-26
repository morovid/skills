# Requirements: <assignment>

<!-- The planner's entry point. Link brief and discovery by ID; define each rule once, in its FR. Records are complete unless marked Incomplete. Leave out sections that don't apply. Remove comments in the saved file. -->

## Summary

<Purpose and scope in two or three lines; the B changes by ID; links to brief.md and discovery.md.>

## Terms

- <Term>: <definition; only terms used normatively whose meaning isn't obvious>

## Scenarios

| ID | Flow | Type | Path | Covers |
| --- | --- | --- | --- | --- |
| SC1 | <one line> | <New / Modify / Preserve / Remove> | <normal / alternative / boundary / denial / failure / recovery> | <B IDs> |

### SC1 — <name>

<!-- Only for multi-step or cross-domain flows. -->

1. <action> → <observable result or state effect>

## Requirements

### FR1 — <name>

<Under <condition>, <system> must <observable outcome>.> Source: <B, D or constraint IDs>

### NFR1 — <quality>

<Property> · Target: <sourced threshold or categorical property> · Conditions: <workload, environment, window> · Method: <how it's checked> · Source: <IDs>

## Acceptance criteria

### AC1 — <outcome>

Checks: <FR IDs> · Given <state and inputs> · When <action> · Then <observable result, including required no-change effects>

<!-- Use a table for partitions: | input | expected | -->

## Traceability

| B | Scenarios | Requirements | Criteria | Note |
| --- | --- | --- | --- | --- |
| B1 | <SC IDs> | <FR IDs> | <AC IDs> | <only gaps or N/A reasons> |

## Definition of Done

- <condition, linking AC IDs>
