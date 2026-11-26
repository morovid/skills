# Code plan: <assignment>

Inputs: <spec pass tag> · project <commit>

<!-- Cite spec and discovery IDs; don't restate them. Describe changes by path › symbol, contract and behavior. Leave out sections without content. Remove comments in the saved file. -->

## Scope

<Two or three lines linking the spec summary; any exclusions or constraints that shape the design, by ID.>

## New evidence

<!-- Only facts that aren't already in discovery. -->

| ID | Locator | Fact | Affects |
| --- | --- | --- | --- |
| PE1 | <path › symbol> | <one line> | <DES/IMP> |

## Design

| DES | Responsibility and change | Modules and contracts | Covers |
| --- | --- | --- | --- |
| DES-1 | <one or two lines> | <path › symbol; mark proposed> | <FR/AC/B IDs> |

### Notes

<!-- Only the topics that apply: contracts and invariants, ownership and permissions, failure/concurrency/recovery, consumers, migration and rollout, test seams. -->

### Decisions

| DEC | Choice | Rejected alternative and why | Consequences |
| --- | --- | --- | --- |
| DEC-1 | <one line> | <material alternatives only> | <tradeoffs> |

## Tasks

| Order | IMP | Summary | Depends on |
| --- | --- | --- | --- |
| 1 | IMP-1 | <one line> | <IDs or None> |

### IMP-1 — <action>

Covers: <FR/AC/B · DES/DEC>
Change: <path › symbol: the change; Create or Remove when it isn't Modify>
Done when: <observable outcome; command>

## Coverage

| Obligation | DES / IMP | Note |
| --- | --- | --- |
| <FR1, AC1–AC3> | <DES-1, IMP-1> | <only for no code change, indirect or blocked, with the reason> |

## Open issues

| Issue | Affected IDs | Blocking? | Owner and action |
| --- | --- | --- | --- |
| <one line> | <IDs> | <Yes / No> | <owner; action> |
