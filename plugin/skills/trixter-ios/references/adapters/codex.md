# Adapter: Codex

The root `AGENTS.md` directs Codex to `trixter/AGENTS.md`. Restart Codex after installation when project instructions were already loaded.

Map role operations as follows:

| Operation | Codex capability |
|---|---|
| Start a role | `spawn_agent` with the role contract, stage, approved input paths, and allowed writes |
| Wait | `wait_agent` |
| Continue the same stage | `followup_task` |
| Send relevant new input | `send_message` |
| Stop out-of-scope work | `interrupt_agent` |

Use subagents of the current task rather than separate user tasks. Do not rotate an agent merely to reduce context. Research Planning and Design reference research may run in parallel only after Research approval; all app-code and Simulator work has one owner.

## Create visual assets

During Design and Publish, use Codex `imagegen` for original raster illustrations and edits to raster artwork. Use procedural SVG, SwiftUI shapes, Canvas drawing, gradients, and SF Symbols for assets whose approved visual role is genuinely procedural. Do not replace a required illustration with generic geometry merely to avoid image generation.

If `imagegen` is unavailable in the current session, follow the procedural fallback in `generic.md`. A compositionally correct placeholder may be used during Design, but Publish is not complete while an approved visual direction still requires a missing final illustration. Generated visuals remain subject to the approval rules in the current stage.

If collaboration tools are unavailable, follow `generic.md` sequentially. Verify that shell, Xcode, Simulator control, image viewing, and the catalog URL are actually available before relying on them.
