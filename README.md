# Agent-ready Repository Map

Responsive React + Vite visualization of the user's "What Makes a Repository Agent-Ready?" image, using an expandable map interaction inspired by https://www.deeplearning.ai/resources/ai-engineering-skills.

Each of the ten numbered tiles expands inline to reveal the image's bullet points and, where present, its description. Multiple tiles can stay open together. Expand all / Collapse all includes the foundation tiles. Buttons support keyboard activation and expose expansion state to assistive technology.

## Source hierarchy

The headings, bullets, descriptions, and footer note are transcribed in `src/mapContent.js` from the supplied image. The stages form a sequence, rather than independent branches from a root:

1. Set up and find: 01 Local setup; 02 Finding the right files.
2. Understand the work: 03 Architecture and conventions; 04 Domain knowledge.
3. Check the change: 05 Code quality checks; 06 Tests.
4. Deliver and operate: 07 Pull request workflow; 08 Observability.

Foundations support every stage: 09 Agent skills; 10 Guardrails. The source has no separate descriptions for these two tiles, so their expanded panels show only their bullets.

The four stages run left to right on desktop. On tablets and phones, stages run top to bottom with downward arrows to retain the same sequence. Tablet stages show two tiles beside one another; phone stages stack their two tiles. Foundations remain below the complete workflow.

## Run

```sh
npm install
npm run dev
```

Use the URL printed by Vite. To specify a port: `npm run dev -- --port 5175 --strictPort`.

## Build

```sh
npm run build
npm run preview
```

Requires a Node version supported by Vite 7 (20.19+ or 22.12+). Output is written to `dist/`. Fonts load from Google Fonts with system fallbacks. No backend or environment variables are required.

- `src/mapContent.js`: content and hierarchy.
- `src/App.jsx`: application entry component.
- `src/RepositoryMap.jsx`: workflow, foundations, and expansion controls.
- `src/repository-map.css`: design, connectors, and responsive layouts.

## Project skills

Reusable coding-agent instructions and records of their actual use are documented in [Project skills](docs/project-skills.md). Each skill is reviewed in its own pull request.
