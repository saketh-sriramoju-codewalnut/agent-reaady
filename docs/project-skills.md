# Project skills

Repository skills live under `.agents/skills`. Each folder contains a `SKILL.md` and UI metadata. They can be selected automatically for matching work, or explicitly invoked with their `$skill-name`. See the [official skill discovery documentation](https://learn.chatgpt.com/docs/build-skills#where-codex-loads-local-skills).

## Skills and usage evidence

| Skill | Purpose | Recorded use |
| --- | --- | --- |
| `agent-ready-frontend-design` | Readable typography and diagram hierarchy | [Frontend design](skills/frontend-design.md) |

Example prompt:

```text
Use $agent-ready-frontend-design to improve this map's layout and readability while preserving its source flow.
```

These files guide the coding agent. They are not runtime features or npm dependencies. The design skill is a project-specific adaptation with upstream attribution, rather than a verbatim copy of the skill previously used in the chat.
