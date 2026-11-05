# Specialist: Additional Test Type

## Goal and inputs

Design the single additional type assigned by the coordinator, such as accessibility, security or performance. Each selected type gets its own agent and output; this reference does not combine categories. Use exact analysis/specification/plan versions, assigned TD/TA/TC/TR/TB and requirement/AC IDs, repository evidence and applicable project guidance. Follow SKILL.md's shared rules. Design only; do not implement or execute new tests, perform an external audit, or change other artifacts.

## Design focus

1. Inspect existing checks, actual assertions, configuration and relevant measurement/observation facilities. Reuse available category-specific project guidance or skills; do not invent an installed capability.
2. Define the required property, authoritative target or categorical rule, observation boundary, methods and representative conditions. Missing material targets/rules remain questions with affected IDs.
3. Apply only the relevant lens for the assigned type:
   - **Accessibility:** confirmed accessibility obligations, interaction/semantic checks, applicable supplied standard/version, assistive technology or manual checks where necessary, and limits of automation.
   - **Security:** confirmed trust/permission/data boundaries, applicable threat or regression scenario, isolation and observable denial/no-leak/no-mutation outcomes. Plan within assignment authorization; do not imply permission to probe live external systems.
   - **Performance:** sourced thresholds and units, workload, data volume, concurrency, environment, warmup, timing boundary, sampling/observation window and evaluation method. Mock timing cannot establish real system performance.
   - **Other type:** applicable project method, exact property being verified, authoritative evidence and limits.
4. Specify deterministic data and controls where appropriate, fixtures, environment, execution instructions and expected evidence. Separate design blockers from bounded later setup.
5. Route overlap and missing capabilities to the coordinator. Do not replace this type with unrelated checks or broaden it into a generic audit.

## Output

Write only the assigned `<type>.md`, using [the category template](../assets/category-design-template.md) and [case template](../assets/test-case-template.md). Include TC actions, detailed cases or inspection procedures, targets, measurement/evaluation basis, dependencies and evidence limits. Return package/case dispositions, discovered risks, required corrections, blockers and completion status.
