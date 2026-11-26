# Plan: <assignment>

Track: S · Inputs: <spec pass tag> · project <commit>

<!-- The S track's single plan: design, tasks and test cases together. Same rules as the M files. Remove comments in the saved file. -->

## Design

<A few lines: what changes where (path › symbol), the contract, and the consumers affected. DEC-1 only if there is a real alternative.>

## Tasks

| IMP | Change (path › symbol) | Covers | Done when |
| --- | --- | --- | --- |
| IMP-1 | <change> | <FR/AC/B IDs> | <outcome; command> |

## Tests

Defaults: <tool and command · location · real versus simulated boundary · fixtures>

| Case | Covers | Given / When | Expect | Action |
| --- | --- | --- | --- | --- |
| TEST-unit-1 | <AC/IMP IDs> | <setup / action> | <observable outcome> | <Create / Extend `<test>` / …> |

Existing checks relied on: <file › test: why it's enough; or None>

## Coverage

| Obligation | Tasks | Cases |
| --- | --- | --- |
| <FR1, AC1> | <IMP-1> | <TEST-unit-1> |

Open issues: <issue, owner and action; or None>
