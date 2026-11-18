## TEST-<type>-<number>: <specific expected behavior>

- **Traceability:** <TD/TA; FR/NFR and exact AC/DoD outcomes, including preservation/removal as applicable; TR/TC/TB; link exact source versions and plan mapping/task sections. Explain non-applicable links rather than inventing IDs.>
- **Priority:** <inherited priority and rationale; preserve established scale>
- **Type / tool / observation boundary:** <single assigned category, project tool, and where the outcome can be observed>
- **Action:** <Retain | Extend | Modify | Replace | Run for regression | Create | Verification only>
- **Existing / target file:** <actual file and test/symbol, or explicitly proposed path/interface; replacement link and retained obligations where applicable>
- **Given / setup:** <initial state, roles, data, fixtures, services, deterministic clock/randomness and isolation controls>
- **When:** <inputs, sequence, event or inspection; failure injection where relevant>
- **Then / spec-derived assertions:** <specific observable outcomes/invariants sourced to the authoritative specification; include state/effects and forbidden mutations where required. For a change-risk-only check, state its observation and rationale without claiming a new requirement. Do not assert incidental internals solely because the production plan mentions them.>
- **Intended implementation-path check:** <exact DES/IMP or equivalent locator; entry/caller and affected consumer, how this input/setup reaches the actual intended seam, what is observed there or downstream, and what runs for real versus is stubbed/simulated (with reasons and limits). Name a plausible wrong path, misuse, or bypass this observation would detect and why. Link the plan mapping; if this case is not path evidence, state that limit and link any relevant separate check or evidenced disposition.>
- **Data variations:** <concrete representative and boundary values grounded in confirmed rules; parameter table if useful>
- **Dependencies and timing:** <TB/task links, shared fixtures, implementation seams, approved designs; design blocker versus later setup/execution>
- **Execution instructions:** <confirmed project/command and source locator, or proposed/unknown command with resolution task; manual inspection method and evaluation basis where applicable>
- **Execution evidence:** <Not run, or actual command/result, revision, environment and limits; proposed assertions are not observed results>
- **Design disposition:** <Designed | Blocked | Superseded; unresolved question or replacement link>
- **Notes:** <distinct purpose of cross-level coverage, justified exclusions, residual risk and implementation handoff>
