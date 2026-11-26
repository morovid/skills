# Shared principles

Every skill and agent in this workflow follows these rules. Stage skills add only what is specific to their stage.

## Authority

- The requester, through the lead, decides intent, scope and target behavior. Code shows what exists, not what should happen.
- Don't invent behavior, numbers (limits, timeouts, thresholds), policies or approvals. A missing rule is a question.
- Only the lead talks to the requester. Everyone else returns questions to the lead with the affected IDs, the exact question, the options and their consequences.
- Upstream wins: the requester over the spec, the spec over the plan, the plan over the code. Send a conflict to its owner ([routing](routing.md)); never resolve it silently downstream.
- Authors never review their own work, and the lead never gives a verdict. Independence comes from launching a fresh reviewer session; don't record it in artifacts.

## Evidence

- A claim about current behavior is **verified** (you read the source or ran a check, and the locator says which) or **unverified** (reported, inferred or not found; say why). Verified is the default and isn't written.
- Reading a test isn't a passing result; only a recorded run is.
- A search that finds nothing bounds the search; it doesn't prove absence.
- Locators: `path › symbol` (a line number only when the symbol isn't enough), `file.md#section` or a record ID, or a run ID.

## Writing

Every artifact is read many times by later agents, and its length multiplies their cost. Precision comes from exact conditions and outcomes, not from length.

- **One fact, one place.** Link by ID instead of restating. A rule lives in its requirement, evidence in discovery, a decision in the register, a case in its category file, a finding in its review report.
- **Write only exceptions.** Defaults aren't written: records are complete, evidence is verified, tasks are Modify, cases are Create and not yet run. Leave out sections that don't apply.
- **Depth follows risk.** Shared data, permissions, lifecycle, migrations and cross-domain flows get full records. A local change gets one line.
- **No history in artifacts.** No revision markers, change logs, review-return maps, contributor or session lists, and no archived copies (`-rev5.md`, `-round-2.md`). Git holds history ([artifacts](artifacts.md)).
- **Size cap.** Keep each file under about 40 KB. Above that, split by catalog (for example `requirements/AC.md`) behind a short index, so readers load only what they need.
- **Brevity pass.** Before returning, remove repetition, defaults and history. Report file sizes in your reply.

## IDs

| Records | IDs |
| --- | --- |
| Register (brief) | `D1` decision, `A1` assumption, `Q1` question |
| Discovery | `E1` evidence, `CB1` current behavior, `I1` impact, `B1` target behavior |
| Requirements | `US1` story, `SC1` scenario, `FR1`/`NFR1` requirement, `AC1` acceptance criterion |
| Code plan | `DES-1` design element, `DEC-1` technical decision, `IMP-1` task |
| Test plan | `TR1` risk, `TD1` design package, `TEST-<category>-<n>` case, `WORK-1` test task |
| Implementation | `R1` check run |
| Findings | `<report>-F<n>`: `spec-F1`, `plan-F1`, `code-F1`, `tests-F1`, `sec-F1` |

IDs are stable: never renumber or reuse them. A replaced record keeps a "Superseded by" link.

## Working rules for every agent

- Follow your handoff file. It names your procedure, inputs, outputs and what to return.
- Return once, when done. Don't send progress messages.
- Read by section, not whole files. Start from ID catalogs and indexes; read a record's full text only when you work on it.
- Run one git command per shell call, read-only, as `git -C <dir> <subcommand>`: no `cd`, pipes, `;`, `&&`, redirects or heredocs. Use the edit and write tools to change files.
- Edit large files with targeted edits; don't rewrite them whole.
- Write only your assigned paths. Never commit; the lead commits.
