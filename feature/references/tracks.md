# Tracks

The lead chooses a track at intake, records it in `STATE.md` with a one-line reason, and can change it later (recording why). The track sets how much ceremony each stage gets; the stages and their gates stay the same.

| | S | M | L |
| --- | --- | --- | --- |
| **When** | Local change: one component, no shared data, permissions, lifecycle or external contracts; a few files | Default | Shared data or lifecycle, permissions, migrations, several domains or consumers, or a high cost of failure |
| **spec** | Lead writes `spec.md`; `morovid-checker` reviews | Lead writes brief and discovery; `morovid-author` writes requirements; `morovid-reviewer` reviews | As M, with discovery following every relevant lens |
| **plan** | One `morovid-author` writes `plan.md` (tasks and cases); `morovid-checker` reviews | Code planner, then a test planner who also writes the cases; `morovid-reviewer` reviews both | As M, but one `morovid-designer` per test package writes the cases |
| **implement** | Separate production and test coders | Same | Same |
| **review** | One `morovid-checker` reviews Code and Tests in one report | Code and Tests by separate reviewers | Same |
| **Security review** | Only if triggered | Only if triggered | Only if triggered |
| **Stop between stages** | No | Yes, resume in a fresh session | Yes |

Rechecks use `morovid-checker` on every track (see [delegation](delegation.md#which-reviewer)).

**Security trigger:** the change touches authentication or permissions, parses untrusted input, handles secrets or cryptography, adds or upgrades dependencies, adds external exposure (endpoints, files, messages, webhooks), or changes access to personal or cross-tenant data. Record the trigger, or "not triggered", in `STATE.md`.

**Changing track:** if discovery shows the S assumptions don't hold, switch to M. Split `spec.md` into the M files, keeping IDs.
