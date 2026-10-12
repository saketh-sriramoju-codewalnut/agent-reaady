---
name: agent-ready-content-fidelity
description: Preserve or verify the supplied image's exact headings, bullets, descriptions, tile membership, and flow when editing the Agent-ready map content or rendering.
---

# Agent-ready content fidelity

Use this skill when changing or reviewing `src/mapContent.js`, stage rendering, expansion panels, or diagram connectors.

## Source contract

The current image defines four stages in this order:

1. Set up and find: 01 Local setup; 02 Finding the right files.
2. Understand the work: 03 Architecture and conventions; 04 Domain knowledge.
3. Check the change: 05 Code quality checks; 06 Tests.
4. Deliver and operate: 07 Pull request workflow; 08 Observability.

Foundations sit below the complete sequence: 09 Agent skills and 10 Guardrails. They support every stage, not only the last one. They have bullets but no separate descriptions. The current source contains 10 tiles, 33 bullets, and 8 descriptions.

The reviewed transcription is frozen in [references/source-map.json](references/source-map.json). Use it as an independent regression baseline; do not regenerate it from the current application merely to make a failing check pass.

## Verify

Run from the repository root:

```sh
node .agents/skills/agent-ready-content-fidelity/scripts/check-source.mjs
node --test .agents/skills/agent-ready-content-fidelity/scripts/check-source.test.mjs
```

The helper checks the complete data against the reviewed source baseline. It cannot prove that CSS, arrows, or hidden panels render correctly. Also inspect the browser: each tile must reveal its own bullets and description, stages must retain order, and foundations must remain below all four stages.

If the user supplies revised source content, update the application and baseline together after comparing against that source, and describe the intentional changes. Otherwise fix application drift instead of weakening the baseline. Record what was checked and any mismatch.