# <Category> tests: <assignment>

Packages: <TD IDs>

## Defaults for every case

- Tool and command: <project tool and command, with source; or proposed, and the WORK task that confirms it>
- Location: <test folder or file pattern>
- Boundary: <what runs for real, what is simulated and why, what this level can't observe>
- Fixtures: <ID: what it provides and where it lives; owned here, or a link to the owning file>
- Determinism: <clock, randomness, ordering and isolation controls>

<!--
Cases state only what differs from these defaults. Link spec and plan IDs; quote a value only when it is the assertion.
Required per case: heading, Covers, Expect. Given/When when the action isn't obvious from the heading.
Catches: required for H priority and for any case whose path to the changed code isn't obvious.
Not covered / Blocked: only when they apply. Remove comments in the saved file.
-->

## Cases

### TEST-<category>-1: <expected behavior in one line> [<H | M | L>]

Covers: <AC/FR · IMP/DES · TR IDs> · <Create | Extend | Modify | Replace | Retain | Run for regression | Verification only> `<target>`
Given: <setup that differs from the defaults>
When: <input, action or event>
Expect: <observable outcomes and required no-change effects; use a table for partitions>
Catches: <the plausible wrong implementation this fails on; real versus simulated where it differs from the defaults>

## Existing tests

| Test (file › name) | Action | Reason; assertions kept on replacement |
| --- | --- | --- |
| <locator> | <Retain / Extend / Modify / Replace / Run for regression> | <one line> |

## Open issues

| Issue | Affected IDs | Owner and action |
| --- | --- | --- |
| <blocker, risk, testability gap or overlap> | <IDs> | <owner; action> |
