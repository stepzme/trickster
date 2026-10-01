# Adapter: Codex

This adapter implements the [universal contract](contract.md) using Codex capabilities.

## Project loading

- The root `AGENTS.md` directs Codex to `trickster/AGENTS.md`.
- During reference research, Codex loads the raw GitHub catalog and the documents for up to three candidates according to `trickster/workflow/style-reference.md`; after the user approves the concern-level composition, it uses only `trickster/design/`.
- Restart Codex after installation if the project instructions have already been loaded in the current session.

## Orchestration operations

| Operation | Codex tool |
|---|---|
| `SPAWN(role, task)` | `spawn_agent` with a phase-scoped task name; pass only the required context |
| `WAIT(role)` | `wait_agent` |
| `CONTINUE(role, task)` | `followup_task` for the current agent inside the same phase or feedback loop |
| `MESSAGE(role, information)` | `send_message` |
| `STOP(role)` | `interrupt_agent` |

Create agents as subagents of the current task, not as separate user tasks. Use `fork_turns="none"`; pass the role contract, current phase, exact file paths, completion criteria, and prior verified handoff explicitly. Name repeated role assignments by phase, such as `implementation_owner_core`, `implementation_owner_full`, and `implementation_owner_hardening`, while recording the stable role ID in `run-state.json`.

Use `CONTINUE` only while the same phase, concept, storyboard, or individual frame remains open. After a phase gate, start a fresh agent instead of carrying the earlier conversation forward. Record every returned thread ID before waiting.

Prefer one event wait long enough for meaningful progress. An unchanged timeout does not justify a status message, file reinspection, or immediate short poll; wait again with backoff unless the user asks for status. When several independent roles run, wait on them together where supported.

Keep complete command logs on disk. Set bounded command-output budgets, return only relevant excerpts, and pass paths rather than pasting whole artifacts into messages.

If collaboration tools are unavailable, execute the roles sequentially using the [generic adapter](generic.md) and record `sequential fallback` in `review.md`.

## Adapter verification

- `codex` is available in `PATH`.
- The raw GitHub catalog URL is accessible, or a complete approved `trickster/design/` composition has already been saved in the project.
- Shell, Xcode, Simulator, physical-device access, UI interaction, and image viewing are available, or their exact limitations are recorded for mandatory capability verification.
- If delegated mode is claimed, a trial subagent is spawned, completes, and returns a handoff.
- `run-state.json` contains every master and role thread ID exposed by the harness for token-usage analysis; unavailable IDs are reported rather than invented.
