# <Stage or category> review: <assignment>

Round <N> of 5 · Verdict: <PASS | REVISE | BLOCKED> · Reviewed: <round tag> · Project: <commit>
Scope: <Full | recheck of: changed sections and open findings> · Not inspected: <boundary and why, or None>

<!--
Current round only: open findings in full, closed this round and earlier rounds one line each. Git holds the rest.
List only checks that failed or weren't assessed. Cite by ID and locator; state what is wrong, not what the artifact says.
Remove placeholders and comments in the saved file.
-->

## Checks not passed

| Check | Result | Gap | Findings |
| --- | --- | --- | --- |
| <rubric ID> | <Fail / Not assessed> | <one line> | <IDs> |

<!-- Or write: All checks pass. -->

## Findings

### <prefix>-F1 — <the problem in one line>

Severity: <Blocking | Minor | Editorial> · Check: <ID> · Owner: <routing owner> · Opened: r<N>
Evidence: <locators>
Problem: <what is wrong and its consequence>
Closure: <what the next reviewer must observe>
Response: <author>

## Rounds

Closed this round: <ID — closure evidence; one line each, or None>
Earlier: <r1 — REVISE, 3 Blocking; one line per round, or None>

## Next

<One or two lines: the owners and actions, escalation if round 5 didn't pass, or "Passed; hand off to <next stage>".>
