# Intake (lead)

Goal: establish enough intent and boundaries for discovery to start on the right problem. Scale to what's missing; a request that arrives with a full draft may only need checking.

Write `brief.md` from the [brief template](../assets/brief-template.md). On S, write the same content in `spec.md`.

1. **Request.** Summarize it faithfully, with its source. Quote the wording where it affects interpretation.
2. **Purpose.** Objective, actors and intended outcome. Include success measures only if the requester supplied them.
3. **Boundaries.** Scope, exclusions, constraints and known dependencies, each with its source. A supplied solution is a constraint only if the requester requires it.
4. **Track.** S, M or L, with a one-line reason (see [tracks](../../feature/references/tracks.md)).
5. **Register.** Decisions, assumptions and questions. The register stays in the brief for the whole assignment; later stages cite it, and only the lead adds to it.
   - **D:** the decision, who confirmed it, and the source. A changed decision gets a new D that supersedes the old one.
   - **A:** the premise, the consequence if it's false, and how to verify it. An assumption can't stand in for a material decision.
   - **Q:** the question, what it affects, whether it blocks, and who can answer. When resolved, record the answer and its D or E ID.

Ask the requester only what prevents meaningful investigation: the objective, the actors, or a boundary. Questions the repository can answer go to discovery.

**Gate:** the objective, actors and boundaries are clear enough that discovery can't drift to a different problem.
