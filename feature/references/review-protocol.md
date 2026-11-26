# Review protocol

This applies to every review: spec, plan, and each implementation review category. The stage supplies the rubric and its focus; this file supplies everything else.

## Inputs

Your handoff gives you:
- the round tag and the files under review;
- the rubric;
- the upstream pass tags and the project commit;
- the open findings;
- on a recheck, the changes since the previous round.

## Assess

- Challenge the material against its sources: requester intent in the brief, upstream passed artifacts, and the code. Don't rely on the authors' summaries or earlier verdicts.
- **Round 1:** assess every rubric row and raise every finding you can establish; each later round costs a full author and review cycle.
- **Recheck:** start from the changes. Verify each open finding against its `Closure`, then check the changed sections and what depends on them. Outside the changed areas, raise only Blocking findings.
- Keep your context small. Read by section, and give per-catalog checks to fresh scouts, for example "list each AC with its FR and flag any whose Then has no observable outcome". Verify what they flag yourself; a scout's summary isn't evidence.
- Judge content, not length. Linking by ID, omitted defaults and short records aren't defects. Contradictions between files are.
- **Checker only:** if the material needs deeper judgment than a recheck allows (a redesign, or a new risk area), return "needs reviewer" with the reason instead of a verdict.

## Findings

```markdown
### <prefix>-F<n> — <the problem in one line>

Severity: <Blocking | Minor | Editorial> · Check: <rubric ID> · Owner: <routing owner> · Opened: r<N>
Evidence: <locators>
Problem: <what is wrong, and what would go wrong because of it>
Closure: <what the next reviewer must observe>
Response: <filled in by the author on revision: the fix, or a disagreement with evidence>
Status: Stalled   <!-- only when stalled -->
```

- **Blocking:** a rubric condition fails, or can't be assessed for lack of input. It prevents PASS.
- **Minor:** a real but bounded defect that can't change behavior, scope, acceptance or feasibility. It doesn't block PASS; the authors fix it if there's another revision.
- **Editorial:** wording, formatting or navigation. It never blocks and never causes a round by itself; the lead applies it before the pass commit, or the authors fix it with the next revision.
- Preferences and optional improvements aren't findings.

Owners come from [routing](routing.md). A finding diagnoses a problem; it isn't authority for new behavior.

## Verdict

- **PASS:** no open Blocking finding.
- **REVISE:** Blocking findings remain that the owners can correct with the available authority.
- **BLOCKED:** a missing input, access or decision prevents a conclusion, or a finding is Stalled. Name the unblock action and owner.

**Stalled:** a Blocking finding that made no material progress over two rechecks. Rewording, new IDs or a different session aren't progress. Mark it `Status: Stalled`.

**Round limit:** five rounds per stage. Write "Round N of 5". If round 5 doesn't pass, say in Next that the lead must escalate to a human.

## Report

Use the [review template](../assets/review-template.md) at the path in your handoff. Write only your report; authors fill in the `Response:` lines. Keep it to the current round:
- open findings in full;
- findings closed this round, one line each;
- earlier rounds, one line each.

Delete everything older; git keeps it. List only the checks that failed or weren't assessed; PASS implies the rest passed.

## Return

Return the report path, the verdict, the open Blocking IDs with their owners, and a one-line next action. Nothing else.
