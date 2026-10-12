# Content fidelity skill: usage and evidence

Skill: `agent-ready-content-fidelity`

Example: `Use $agent-ready-content-fidelity to verify the map's content and stage membership against the source image.`

## Applied on 2026-10-12

Froze the project's reviewed image transcription as `references/source-map.json` inside the skill. Added a Node helper that compares the complete application data with that baseline, plus regression tests demonstrating that matching counts are insufficient to establish fidelity.

Run from the repository root:

```sh
node .agents/skills/agent-ready-content-fidelity/scripts/check-source.mjs
node --test .agents/skills/agent-ready-content-fidelity/scripts/check-source.test.mjs
```

## Observed validation

- Source check passed: 4 stages, 10 tiles, 33 bullets, 8 descriptions.
- All five tests passed: original data accepted; altered wording, swapped membership, reversed stages, and an invented foundation description rejected.
- Expanded all ten tiles through actual browser controls and compared each rendered number, title, bullet array, and optional description with the baseline. All matched.
- Confirmed both foundation tiles have no added descriptions.
- Browser positions and arrow transforms confirmed the stage sequence and foundations below the complete workflow at five widths.
- Skill frontmatter validation passed.

The JSON baseline protects the reviewed source contract. It does not perform OCR or establish visual correctness by itself. Update it only when the user intentionally revises the source content, not automatically from the application under test.
