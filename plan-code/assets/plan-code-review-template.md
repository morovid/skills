# Implementation Plan Review: <assignment>

Round / report version: <Round N of 5 (plus any human-authorized extension), actual date if known>
Reviewed fingerprints: <round tag and artifacts@sha; repo@sha (+diff hash for local changes)>
Verdict: <PASS | REVISE | BLOCKED>
Currency: <Current | Needs revalidation>
Review boundary: <exact scope assessed this round, including changes and limits>
Roles and independence: <actual reviewer agent/session and evidence of separation from the lead, authors, author helpers, and all prior reviewer sessions for this plan>

<!-- Record one round per submitted baseline, with a fresh independent reviewer. This report owns findings and the current verdict. Keep it to the current round: open findings in full, closed-this-round and earlier rounds as one line each; earlier details stay in the artifact repository history. Remove placeholders/comments in completed output. -->

## 1. Exact reviewed baseline

| Input | Location (at the reviewed artifacts@sha unless noted) | Readiness, currency, and limits |
| --- | --- | --- |
| `plan-code.md` (or assigned plan path) and supporting files | <paths> | <submission and change boundary> |
| Engineering specification and specification review package index | <paths> | <Ready for engineering, Current, included catalogs, approvals only where required> |
| Canonical catalogs / D/A/Q | <paths/sections> | <authority and supersessions> |
| Repository / instructions | <repo@sha (+diff hash), instruction paths> | <inspection boundary, drift disposition, unavailable areas> |
| Prior review / responses | <previous round tag and author response locators, or None> | <changes and findings to recheck> |

## 2. Quality checks

<!-- The first review covers the whole plan. Rechecks target changes and their effects, including affected findings. Carry forward only checks demonstrated unchanged: cite the prior result and evidence and show why the check and its inputs still apply. A full PASS requires current passing results for all applicable rubric checks and assignment conditions. Justify Not applicable and give an unblock action for Not assessed. -->

| Check | Result | Evidence and assessment boundary | Findings / justified non-applicability |
| --- | --- | --- | --- |
| IP1 Authority and currency | <Pass/Fail/Not assessed/Not applicable> | <source locators and limits> | <IDs or rationale> |
| IP2 Repository grounding | <result> | <evidence> | <disposition> |
| IP3 Coverage and scope | <result> | <evidence> | <disposition> |
| IP4 Logic, state, ownership | <result> | <evidence> | <disposition> |
| IP5 Integration and compatibility | <result> | <evidence> | <disposition> |
| IP6 Feasibility and proportionality | <result> | <evidence> | <disposition> |
| IP7 Execution and transitions | <result> | <evidence> | <disposition> |
| IP8 Handoff and review integrity | <result> | <evidence> | <disposition> |

Assignment-specific checks: <source-linked conditions and results, or None>

## 3. Independent coverage reconciliation

<!-- Reconcile the complete applicable catalogs for the initial review. On recheck, identify the changed coverage and show why any carried-forward reconciliation remains valid. -->

| Source catalog / material obligation | Reviewed DES/IMP links or No code change evidence | Coverage conclusion and missing outcomes |
| --- | --- | --- |
| <exact FR/NFR/AC/B/I/DoD records and versions; related US/SC> | <inspected plan/code locators> | <complete, gap, or unassessed; finding IDs> |

Reverse-trace and scope check: <unsupported work, exclusions, or None; full catalog reconciliation boundary>
Flow/integration counterexamples: <inspected paths, relevant failures, conclusions and evidence; not test cases>

## 4. Findings and rework handoff

### REV-001 — <concrete issue>

- Severity / check: <Blocking | Major | Minor; IP or supplied condition>
- Evidence and claim status: <source/plan/code locators; Observed/Supported/Reported/Inferred/Unknown and limits>
- Affected IDs: <upstream, DES/DEC/IMP>
- Defect and consequence: <what can fail and why>
- Owner / requested correction: <planner or specific upstream stage; exact change needed>
- Closure condition: <observable evidence the reviewer must verify>
- Disposition: <Open | Reopened | Nonblocking follow-up | Superseded; rationale and replacement links>
- Attempts: <n>; no-progress rechecks: <m>
- Resolution / risk authority: <reviewer verification evidence and version; required acceptance authority if applicable>

<!-- Repeat only for actual findings. An unassessed condition needs a missing-evidence action, not an invented defect. -->

## 5. Rounds

Closed this round: <one line per finding: ID — closure evidence; or None>

Earlier rounds: <one line per round: tag — verdict, open findings. Don't copy earlier details; read them with `git -C .artifacts grep -n -A 30 '<finding ID>' <tag> -- <path>`>

## 6. Verdict and next owner

Round conclusion: <why the verdict follows from current applicable checks and findings>
Open blockers / unassessed conditions: <affected IDs, missing source/decision/access, exact unblock action; or None>
Nonblocking follow-up: <bounded actions, rationale, authority if required; or None>
Next handoff: <fresh planner revision and resubmission for REVISE, unblock owner for BLOCKED, escalation to a human if round 5 ended without PASS, or exact plan eligible for Ready for implementation on a Current full PASS>
Changed inputs / downstream revalidation: <versions/IDs, affected handoffs and required checks; or None>

A PASS applies only to the exact reviewed technical content, source versions, and applicable repository baseline. It does not establish implemented behavior or successful tests.
