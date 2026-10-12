# Browser QA skill: usage and evidence

Skill: `agent-ready-browser-qa`

Example: `Use $agent-ready-browser-qa to verify this map's responsive sequence, tile controls, and keyboard behavior.`

## Applied on 2026-10-12

Used the computer-use Playwright interface against the project's running Vite preview at `http://127.0.0.1:5173/#map`. Source baseline: `2258577`, with the frontend type-token and visual-polish working changes.

| Case | Observed result |
| --- | --- |
| Fresh load | 10 collapsed tiles |
| Enter on Local setup | One panel open, correct details, visible focus outline |
| Open Finding the right files | Both panels remained open |
| Space on Local setup | Local setup closed; the other panel remained open |
| Expand all | 10 panels, 33 bullets, 8 descriptions; exact text matched for every tile |
| Collapse all | 10 collapsed buttons, zero visible panels, count reset to zero |
| 320 and 390px | Stacked stages and tiles; arrows rotated downward |
| 768px | Stacked stages, two tiles per stage, downward arrows |
| 1280 and 1440px | Four stages in one row, right-pointing arrows |
| All five widths | No horizontal overflow or clipped tile text; foundations followed the full sequence |
| Typography and targets | 16px body copy, 18px tile headings; buttons at least 48px tall |
| Contrast | Body at least 12.01:1; colored tile headings at least 5.22:1 |
| Accessibility linkage | Local setup's aria-controls and its panel's aria-labelledby matched |
| Console | No captured errors after interaction checks |
| Build and skill validation | Passed |

Desktop and phone screenshots were inspected and saved as local review evidence outside the repository. Temporary viewport overrides were reset afterward.

Reduced-motion CSS was reviewed, but the browser preference was not emulated. These are manual browser results, not a newly installed Playwright test suite or a CI check. Repeat the skill after future UI changes rather than reusing this report as fresh evidence.
