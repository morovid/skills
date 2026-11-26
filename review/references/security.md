# Security review: controls and exposure

Use this with the [review protocol](../../feature/references/review-protocol.md). Finding prefix: `sec-F`. This review runs only when the [security trigger](../../feature/references/tracks.md) applies. It is defensive review, not penetration testing.

| Check | Passes when |
| --- | --- |
| X1 Scope | The protected assets, actors and tenants, entry points, trust boundaries and sensitive data flows touched by the change are mapped from code and configuration. Applicable policies and supplied standards (with their versions) are identified. |
| X2 Access control | Permission and ownership rules from the spec are enforced at the server boundary. Denials leave no unauthorized effect or data exposure. Client checks and mocks don't count. |
| X3 Input and output handling | Untrusted input is validated or encoded for each sink: queries, commands, templates, paths, deserialization, redirects. Errors don't leak sensitive data. |
| X4 Secrets and data | No secrets in code, logs or test data. Sensitive data is stored, logged, retained and transferred as the spec and policy require. |
| X5 Dependencies | New or changed dependencies are triaged against advisories for their resolved versions and actual usage. Suppressions carry an owner, a reason and an expiry. |
| X6 Evidence | Supporting scans and tests ran on this snapshot, with tool, configuration and date recorded where they matter. A clean scan isn't proof of absence. |

**Limits:**
- No exploit development, intrusive probing, credential use, third-party scans, or uploading proprietary code.
- Keep secrets and personal data out of handoffs and reports.
- Describe a weakness by the asset, prerequisites and consequence, without payloads.
- Confirm time-sensitive advisory facts from authoritative sources (web access is allowed for this).

**Owners:** `implement/production-coder` for code, configuration and dependency defects, `plan/code-planner` for design gaps, `implement/test-coder` for missing defensive tests, and spec stages for undecided policy.
