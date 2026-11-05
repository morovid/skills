# Engineering workflow skills

This repo contains following engineering skills:

## Catalog

| Skill | Purpose |
| --- | --- |
| [spec-intake](spec-intake/SKILL.md) | Establish the objective, initial scope, constraints, and discovery handoff. |
| [spec-discovery](spec-discovery/SKILL.md) | Investigate current behavior, impacts, intended behavior, and decisions. |
| [spec-refinement](spec-refinement/SKILL.md) | Formalize requirements, acceptance criteria, and Definition of Done. |
| [spec-review](spec-review/SKILL.md) | Review the specification, route corrections, and assemble the engineering package. |
| [implementation](implementation/SKILL.md) | Create and revise a repository-grounded production implementation plan. |
| [implementation-review](implementation-review/SKILL.md) | Independently review the implementation plan and recheck corrections. |
| [test-analysis](test-analysis/SKILL.md) | Assess existing coverage, risks, and justified test work. |
| [test-design](test-design/SKILL.md) | Coordinate specialist agents to produce a reviewed test implementation plan. |
| [review-code](review-code/SKILL.md) | Review production code against the specification, plan, and repository. |
| [review-tests](review-tests/SKILL.md) | Review test implementation, assertions, and required coverage. |
| [review-security](review-security/SKILL.md) | Review change-related security risks, controls, and evidence. |
| [verify-release](verify-release/SKILL.md) | Execute the candidate-specific release gate and report readiness. |

## Install

Run from the target project, replacing `morovid/skills-engineering` with this checkout's path:

```sh
# List available skills
npx skills add morovid/skills-engineering --list --full-depth

# Install all skills for Codex
npx skills add morovid/skills-engineering --skill '*' --agent codex --full-depth --yes

# Install selected skills
npx skills add morovid/skills-engineering --skill spec-intake spec-discovery --agent codex --full-depth --yes

# Install all skills globally
npx skills add morovid/skills-engineering --skill '*' --agent codex --full-depth --global --yes
```
