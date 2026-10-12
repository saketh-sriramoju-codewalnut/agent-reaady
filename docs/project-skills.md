# Project skills

Repository skills live under `.agents/skills`. Each folder contains a `SKILL.md` and UI metadata. They can be selected automatically for matching work, or explicitly invoked with their `$skill-name`. See the [official skill discovery documentation](https://learn.chatgpt.com/docs/build-skills#where-codex-loads-local-skills).

## Skills and usage evidence

| Skill | Purpose | Recorded use | Pull request |
| --- | --- | --- | --- |
| `agent-ready-frontend-design` | Readable typography and diagram hierarchy | [Frontend design](skills/frontend-design.md) | [PR #1](https://github.com/saketh-sriramoju-codewalnut/agent-reaady/pull/1) |
| `agent-ready-visual-polish` | Nested card surfaces and controlled motion | [Visual polish evidence](https://github.com/saketh-sriramoju-codewalnut/agent-reaady/blob/skills/visual-polish/docs/skills/visual-polish.md) | [PR #2](https://github.com/saketh-sriramoju-codewalnut/agent-reaady/pull/2) |
| `agent-ready-content-fidelity` | Exact image content, membership, and sequence | [Content fidelity evidence](https://github.com/saketh-sriramoju-codewalnut/agent-reaady/blob/skills/content-fidelity/docs/skills/content-fidelity.md) | [PR #3](https://github.com/saketh-sriramoju-codewalnut/agent-reaady/pull/3) |
| `agent-ready-browser-qa` | Responsive layouts, controls, and accessibility | [Browser QA evidence](https://github.com/saketh-sriramoju-codewalnut/agent-reaady/blob/skills/browser-qa/docs/skills/browser-qa.md) | [PR #4](https://github.com/saketh-sriramoju-codewalnut/agent-reaady/pull/4) |

The four independent PRs target `main`. The evidence links for PRs #2-4 point to their own branches so they can be reviewed before merging. Once merged, their reports also live alongside the frontend report under `docs/skills`.

Example prompt:

```text
Use $agent-ready-frontend-design to improve this map's layout and readability while preserving its source flow.
Use $agent-ready-visual-polish to refine the map's nested card surfaces and controls.
Use $agent-ready-content-fidelity to verify exact image content and flow.
Use $agent-ready-browser-qa to check responsive layouts and keyboard expansion.
```

These files guide the coding agent. They are not runtime features or npm dependencies. The two design skills are project-specific adaptations with upstream attribution, rather than verbatim copies of the skills previously used in the chat. The content and browser skills are original workflows for this application.

## Demonstrate the skills

Open the PR table and each usage report to show what was added and which checks were actually performed. Skill creation was validated with the bundled Skill Creator validator; each SKILL.md's name, description, and instructions passed.

The content skill includes a reusable check and five regression tests. After PR #3 is present, run:

```sh
node .agents/skills/agent-ready-content-fidelity/scripts/check-source.mjs
node --test .agents/skills/agent-ready-content-fidelity/scripts/check-source.test.mjs
```

Browser QA was performed through real browser controls at 320, 390, 768, 1280, and 1440px, with desktop and phone screenshots inspected. See its usage report for outcomes and limitations. These historical reports should not be presented as fresh verification of later changes.
