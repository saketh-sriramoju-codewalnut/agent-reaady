# Visual polish skill: usage and evidence

Skill: `agent-ready-visual-polish`

Example: `Use $agent-ready-visual-polish to refine the map's card surfaces and controls without reducing readability.`

This project-specific adaptation is informed by Leonxlnx's high-end-visual-design guidance. It concentrates on nested surfaces and controlled interaction feedback; exact image content and readable typography take precedence over decorative suggestions.

## Applied on 2026-10-12

Made the tile shell radius and inset reusable CSS variables, with the inner radius calculated from their difference. The current appearance remains 20px outside, a 5px inset, and 15px inside. Removed the unused `.stage-step` rule left over from the extra stage numbers.

## Observed validation

- Checked actual computed shell radius, inset, and inner radius in the real browser.
- Inspected expanded and collapsed tiles and the plus/minus feedback on a 390px phone view.
- Verified visible keyboard focus after Enter activation.
- Verified the custom cubic-bezier transition; motion uses transform and opacity, with reduced-motion overrides in the stylesheet.
- Body copy remained 16px, and the narrow view had no horizontal overflow.
- `npm run build` and the source-content checker passed.
- Skill frontmatter validation passed.

The polish patch was exercised on top of the frontend-design change. Its radius calculation preserves the same values when applied independently to `main`. Reduced-motion CSS was inspected; preference emulation was not performed.
