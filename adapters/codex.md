# Adapter: Codex

The root `AGENTS.md` directs Codex to `trickster/AGENTS.md`. Restart Codex after installation when project instructions were already loaded.

Map role operations as follows:

| Operation | Codex capability |
|---|---|
| Start a role | `spawn_agent` with the role contract, stage, approved input paths, and allowed writes |
| Wait | `wait_agent` |
| Continue the same stage | `followup_task` |
| Send relevant new input | `send_message` |
| Stop out-of-scope work | `interrupt_agent` |

Use subagents of the current task rather than separate user tasks. Do not rotate an agent merely to reduce context. Research Planning and Design reference research may run in parallel only after Research approval; all app-code and Simulator work has one owner.

If collaboration tools are unavailable, follow `generic.md` sequentially. Verify that shell, Xcode, Simulator control, image viewing, and the catalog URL are actually available before relying on them.
