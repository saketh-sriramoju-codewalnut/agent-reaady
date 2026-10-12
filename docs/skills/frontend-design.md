# Frontend design skill: usage and evidence

Skill: `agent-ready-frontend-design`

Example: `Use $agent-ready-frontend-design to improve the map's layout and readability while keeping the supplied image's flow.`

The skill guides information hierarchy and readable typography in this React/Vite project. It is an original project adaptation informed by Anthropic's frontend-design guidance, not an unchanged upstream installation. Source attribution is included in its SKILL.md.

## Applied on 2026-10-12

Reviewed the existing source-colored diagram and extracted the tile/body type scale into reusable rem-based CSS tokens. At default font settings the result remains 16px for bullets and descriptions, 18px for tile headings, and 20px for headings on wide screens. Source text and stage membership were unchanged.

## Observed validation

- Real browser preview: `http://127.0.0.1:5173/#map`.
- Tested widths: 320, 390, 768, 1280, and 1440px.
- Expanded body text remained 16px; headings remained 18px at the tested widths.
- No document horizontal overflow or clipping of tile title/content boxes.
- Normal body contrast was at least 12.01:1; source-colored tile heading contrast at least 5.22:1 against its tile surface.
- The longest architecture heading and pull-request bullet remained readable.
- Keyboard activation showed a visible focus outline.
- `npm run build` passed; the skill's bundled frontmatter validator passed.

Browser checks exercised the current working patch on base commit `2258577`. These results describe that run, not a guarantee for later changes.
