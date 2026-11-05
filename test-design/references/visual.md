# Specialist: Visual Test Design

## Goal and inputs

Design appearance/layout verification at component or page level. Use the coordinator's single-type assignment, source versions, authoritative designs/baselines, and assigned TD/TA/TC/TR/TB and requirement/AC IDs. Follow SKILL.md's shared rules. Design only; do not generate or approve baselines, implement tests, or modify other artifacts. Component interaction is a separate agent's responsibility.

## Design focus

1. Distinguish acceptance against a supplied design from regression against an approved baseline. Inspect existing screenshot assertions, comparison settings, baseline provenance and rendering configuration.
2. Use project tools. Vitest Browser Mode with a Playwright provider may suit isolated component appearance; Playwright Test may suit page-level screenshots and navigation-dependent visuals.
3. Select relevant states, long/localized content, overflow, themes and responsive breakpoints from assigned obligations. State why each viewport/browser is needed; do not invent a required matrix.
4. Specify deterministic fixtures, fonts, animation/motion controls, rendering readiness, dynamic-content masking and environment constraints. Masking must not hide the behavior being verified.
5. Name exact design/baseline versions, observable layout constraints and sourced comparison tolerances. Missing baselines may be a bounded later approval task if expected appearance is otherwise defined. Missing intended appearance is a design question, not permission to approve current rendering.
6. Keep required independent approval before new regression baselines become gating tests. Do not treat freshly generated images as accepted references. Targeted manual browser verification may suffice where analysis justifies it; name its evaluation basis.

## Output

Write only the assigned `visual.md`, using [the category template](../assets/category-design-template.md) and [case template](../assets/test-case-template.md). Include TC actions, component/page targets, states, viewports, reference status, assertions, CI stability controls, approval dependencies and commands. Return package/case dispositions, overlap proposals, discovered risks, blockers and completion status. Screenshots do not establish accessibility, security or interaction correctness.
