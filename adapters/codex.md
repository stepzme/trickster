# Adapter: Codex

This adapter implements the [universal contract](contract.md) using Codex capabilities.

## Project loading

- The root `AGENTS.md` directs Codex to `trickster/AGENTS.md`.
- Before the selection, Codex loads the raw GitHub catalog and the documents for up to three candidates according to `trickster/workflow/style-reference.md`; after the selection, it uses only `trickster/design/`.
- Restart Codex after installation if the project instructions have already been loaded in the current session.

## Orchestration operations

| Operation | Codex tool |
|---|---|
| `SPAWN(role, task)` | `spawn_agent` with the role's stable ID; pass only the required context |
| `WAIT(role)` | `wait_agent` |
| `CONTINUE(role, task)` | `followup_task` for the same agent |
| `MESSAGE(role, information)` | `send_message` |
| `STOP(role)` | `interrupt_agent` |

Create agents as subagents of the current task, not as separate user tasks. When possible, use `fork_turns="none"` or minimal history and pass inputs explicitly. User questions and mandatory confirmation gates always remain with the master.

If collaboration tools are unavailable, execute the roles sequentially using the [generic adapter](generic.md) and record `sequential fallback` in `review.md`.

## Adapter verification

- `codex` is available in `PATH`.
- The raw GitHub catalog URL is accessible, or a complete `trickster/design/` has already been saved in the project.
- Shell, Xcode, Simulator, UI interaction, and image viewing are available.
- If delegated mode is claimed, a trial subagent is spawned, completes, and returns a handoff.
