---
name: agent-ready-frontend-design
description: Improve typography, hierarchy, spacing, or layout in the Agent-ready React and Vite map while preserving its source content and sequential workflow.
---

# Agent-ready frontend design

Use this skill for layout or readability work in this repository. Start with `src/RepositoryMap.jsx`, `src/repository-map.css`, and `src/mapContent.js`.

## Design decisions

- Make the four-stage diagram the primary navigation. Stage containers group two numbered tiles; foundations support the entire workflow. Do not turn it into unrelated feature cards or independent branches.
- Keep source text in `mapContent.js`. Add instructional UI copy only when it helps a visitor use the map. The supplied image determines content; the DeepLearning.AI reference informs interaction and appearance.
- The current visual direction uses Plus Jakarta Sans, a cool neutral background, and blue, green, purple, and amber accents. Reuse existing tokens unless the requested redesign calls for a different direction.
- Maintain readable body copy at 16px or larger, tile headings at 18px or larger, and secondary labels at 14px or larger at normal browser settings. Stack content earlier rather than shrinking typography to fit columns.
- Preserve the reading sequence across breakpoints: four stages left to right from 1280px; stage rows below that; single-column tiles below 768px. Change breakpoints when needed for readability while retaining the same sequence.
- Let spacing and type hierarchy communicate groups. Avoid adding decorative statistics, tiny labels, or competing headline treatments.

## Apply and verify

Describe a short design direction, edit the relevant components and styles, then inspect the rendered result. Check the longest headings and the expanded pull request tile, which has the longest bullet. Check a desktop and a narrow phone view, focus indicators, overflow, and expansion behavior. Run `npm run build` for code changes. Report the actual changes and observed checks; do not claim a skill was used solely because its folder exists.

User instructions override these local design preferences.

## Attribution

This is an original project-specific adaptation informed by [Anthropic frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md), not a verbatim installation of the upstream skill. Visual reference: [DeepLearning.AI AI Engineering Skills](https://www.deeplearning.ai/resources/ai-engineering-skills).