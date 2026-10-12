# Agent-ready browser cases

## Tile controls

1. Start with a fresh page. All ten tile buttons should have `aria-expanded="false"`.
2. Activate 01 Local setup. Only its panel should open, showing Prerequisites, Configuration, Startup commands, and the description about running and testing changes locally.
3. Open another tile. Both panels should remain open; closing one should leave the other open.
4. Use Enter and Space on a tile button. Verify expansion state, visible keyboard focus, and the associated panel's `aria-controls` / `aria-labelledby`.
5. Expand all should expose 10 panels, 33 bullets, and 8 descriptions. Both foundations must expand.
6. Collapse all should hide all panels and restore the expanded count to zero.

## Layout

- 1280px and wider: four stage containers are ordered left to right, with three right-pointing connectors.
- 768–1279px: stages stack top to bottom; each stage contains two tiles beside one another.
- Below 768px: both stages and their tiles stack. Stage connectors point downward.
- Foundations follow the full workflow at every width.
- At 320, 390, 768, 1280, and 1440px, `document.documentElement.scrollWidth <= window.innerWidth`, and title/content boxes must not clip text.
- At default font settings, bullets and descriptions are at least 16px; tile headings at least 18px; labels at least 14px. Full tile buttons and primary controls have touch targets at least 44px tall.
- Verify all source-colored text against its actual background. Use a 4.5:1 minimum for normal text.
- Inspect reduced-motion behavior when the tool supports preference emulation. Otherwise report that the CSS was reviewed without claiming emulated verification.
- Check browser console errors after exercising controls; report observed errors rather than clearing them to obtain a passing result.

## Useful read-only observations

Prefer stable selectors such as `#trigger-local-setup`, `.tile-trigger`, `.tile-content`, `.stage-heading`, and `.foundations`. Use semantic locators where possible.

Collect computed font sizes, bounds, grid columns, transform matrices of stage arrows, panel visibility, and rendered text. Compare every tile's rendered heading, bullets, and optional description with `src/mapContent.js`; counts alone cannot detect swapped content.