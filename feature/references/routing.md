# Routing problems to their owner

Route the cause, not the symptom: send a problem to the earliest stage that owns it. Only the lead reopens an upstream stage. The reopened stage runs a normal round, and every downstream stage that relies on the changed IDs becomes `stale` in `STATE.md`. Unaffected work continues.

| Problem | Owner |
| --- | --- |
| Objective, actors, scope, exclusions or constraints are unclear or conflict | spec, intake: the lead, with the requester if needed |
| Current behavior, an impact, a dependency or a preservation rule is missing or unsupported; a behavioral choice is undecided | spec, discovery: the lead, with the requester for choices |
| Behavior is confirmed, but a requirement, acceptance criterion, traceability or Definition of Done is wrong or incomplete | spec, requirements author |
| A design is infeasible, a contract or consumer is missing, or task order is wrong | plan, code planner |
| Coverage, an expected result, a test boundary or test data is wrong | plan, test planner (or the package's designer). A test seam missing from the design goes to the code planner. |
| Production code defect | implement, fresh production coder |
| Test code defect | implement, fresh test coder |
| Missing access, evidence, decision or a required approval | Lead, to whoever can supply it; the dependent work is BLOCKED |

A finding's `Owner` field uses these names, for example `spec/requirements`, `plan/code-planner`, `implement/test-coder`.
