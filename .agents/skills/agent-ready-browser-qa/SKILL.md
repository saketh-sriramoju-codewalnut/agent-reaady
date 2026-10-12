---
name: agent-ready-browser-qa
description: Verify the Agent-ready map in a real browser after UI or interaction changes, including responsive sequence, tile expansion, keyboard controls, readability, and console errors.
---

# Agent-ready browser QA

Use this skill after changes to map layout, styling, or interaction. Follow [references/browser-checks.md](references/browser-checks.md) for the concrete cases.

## Environment

This is a React and Vite application. Use the URL printed by `npm run dev`; do not assume a port. Prefer the current project's already-running preview. Use the browser tools available in the session, such as the computer-use Playwright interface. Read their documentation before calling unfamiliar APIs.

## Verification

Exercise real controls instead of changing React state through injected JavaScript. Use read-only DOM inspection for measurements. Check both collapsed and fully expanded views, then individual tile and keyboard behavior.

At 320, 390, 768, 1280, and 1440px, check content order, horizontal overflow, long headings, foundations, readable typography, and touch targets. Inspect screenshots at desktop and phone sizes. Restore temporary viewport overrides before handing the preview back.

Run `npm run build` when code changed. Capture the tested commit, browser URL, viewport dimensions, observed outcomes, and any limitations. Save evidence outside the public repository unless the user wants screenshots checked in; avoid publishing unrelated browser state.

If browser tools are unavailable, run available checks and explicitly mark browser verification as pending. Source inspection or a successful build alone is not a browser pass. Opening a PR does not authorize merging or deployment.