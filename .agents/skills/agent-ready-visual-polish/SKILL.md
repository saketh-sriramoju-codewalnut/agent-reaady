---
name: agent-ready-visual-polish
description: Refine card depth, radii, controls, hover feedback, or motion in the Agent-ready map after its content hierarchy and readable layout are established.
---

# Agent-ready visual polish

Use this skill for finishing the map's existing visual system, rather than choosing its information architecture.

## Project treatment

The current direction is a light, structured diagram with restrained depth. Work primarily in `src/repository-map.css` and the `Tile` and `Icon` components in `src/RepositoryMap.jsx`.

- Preserve the colored dashed stage frames: they encode the groups from the supplied image.
- Keep each tile's outer shell and inner core. Calculate the inner radius from the outer radius minus the shell inset so nested corners remain concentric.
- Prefer subtle highlights and diffused shadows. Distinguish hierarchy with spacing and source colors, not heavy drop shadows.
- Use the existing rounded controls and precise SVG icons. The whole tile heading is the touch target; its small plus/minus icon is a visual indicator.
- Keep expansion feedback tied to user actions. Reuse the custom cubic-bezier curve and animate transform or opacity. Respect `prefers-reduced-motion`.
- Keep blur limited to the sticky header. Do not add blur to scrolling tile content.
- Remove unused or conflicting styles when refining a component, but preserve responsive behavior.

## Review

Inspect collapsed and expanded tiles, plus/minus feedback, keyboard focus, and a narrow layout. Verify the shell inset and radii, legibility on each tone, and that polish has not obscured connectors or changed source content. Run `npm run build` for code changes and record the checks actually performed.

Preserve the user's readability and exact-flow requirements over stylistic suggestions. Do not introduce dependencies or elaborate animation solely to satisfy an aesthetic checklist.

## Attribution

This is an original project-specific adaptation informed by [Leonxlnx high-end-visual-design](https://github.com/Leonxlnx/taste-skill/blob/main/skills/soft-skill/SKILL.md), particularly its nested surfaces, spacing, and controlled motion. It does not copy its full instructions or claim to be the upstream skill.