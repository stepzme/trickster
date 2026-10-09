# Adapter: Claude Code

> Experimental support. This adapter was checked against the official Claude Code documentation on 2026-10-09, but the complete Trickster workflow has not yet been run end to end in a real Claude Code session.

## Load the project instructions

The root `CLAUDE.md` imports `@trickster/AGENTS.md`. Start a new Claude Code session after installation, then use `/context` to confirm that the project memory includes both files. Claude Code treats `CLAUDE.md` and imported files as context, not as an enforced security boundary.

The main agent owns communication with the user, validation of role output, recording approvals, and every stage transition. A subagent performs only its assigned role and stage.

## Map role operations

Use Claude Code's built-in `general-purpose` subagent for this first integration; do not create project definitions under `.claude/agents/`.

| Operation | Claude Code capability |
|---|---|
| Start a role | Call the `Agent` tool with `subagent_type: general-purpose` and a focused prompt |
| Wait for completion | A foreground invocation blocks until it returns; for a background invocation, wait for Claude Code's completion notification and use `/tasks` only to inspect its status or transcript |
| Continue the same role | Use `SendMessage` with the returned agent ID or stable name in the `to` field |
| Send feedback or relevant new input | Use `SendMessage` to the same agent ID or name |
| Stop out-of-scope or conflicting work | Use `TaskStop`, then verify that the run and any shared-resource processes have ended |

Every new `Agent` invocation creates another subagent instance. Preserve the returned agent ID or name in the current conversation and use `SendMessage` when continuing an existing role. Prefer the returned ID; a stable name is also valid when the session configuration does not turn named subagents into agent-team teammates. Resume through `SendMessage` does not itself require agent teams. If resume is unavailable or refused, start a new `general-purpose` subagent and give it the actual artifacts, current application revision, partial changes, and precise unfinished work.

## Delegate a role

A role assignment must contain:

- the role contract and current stage document;
- the goal and objective completion conditions;
- paths to every approved upstream artifact;
- exact paths the role is allowed to write;
- the current application revision when an app already exists;
- the checks and user-approval boundary that belong to the stage.

Non-fork subagents start with a fresh context and do not inherit the main conversation, previously invoked skills, or files already read by the main agent. Put the necessary context in the assignment and point to durable artifacts. Allowed write paths are behavioral instructions only; they are not filesystem isolation or a security guarantee. The main agent reviews returned output before treating a stage as complete.

## Own app code and Simulator

Only one role at a time may change app code or control Simulator. The main agent must not use those shared resources concurrently with their owner. Designer owns them through approval of the running design; Implementation Owner receives them afterward. Acceptance Reviewer does not edit app code.

Before transferring ownership, wait for the current agent to finish or stop it with `TaskStop`. Confirm that processes it started which use Xcode, the build directory, or Simulator have also ended. Pass the current application revision and approved artifacts to the next owner.

## Create visual assets

Before creating original raster illustrations or editing raster artwork, inspect the tools available in the current Claude Code session for a suitable image-generation MCP server. If one is available, the Designer may use it and must still follow the stage's approval rules. Do not assume a particular server name, install one without the user's request, or claim that Claude Code provides built-in image generation.

When no suitable image-generation MCP tool is available, create assets procedurally when that can honestly satisfy the approved visual direction: for example with SVG, SwiftUI shapes, Canvas drawing, gradients, or SF Symbols. Do not silently reduce a required illustration to generic geometry. A compositionally correct placeholder may be used during Design, but Publish is not complete while the approved direction still requires a missing final illustration. In that case, state that the user must provide the asset or enable an appropriate external tool.

## Recover from failure

When a subagent fails or stops early:

1. inspect its returned or partial output and the actual file changes;
2. keep the stage incomplete;
3. resume the same subagent with `SendMessage` when possible;
4. otherwise start another `general-purpose` subagent with the actual artifacts, partial changes, and remaining task;
5. repeat user approval only when an artifact changed materially, including any downstream work affected by that change.

Do not infer completion from a successful tool call or a written summary.

## Sequential fallback

If `Agent`, `SendMessage`, or `TaskStop` is unavailable, or delegation is disabled by Claude Code permissions, run one role at a time in the main conversation using `generic.md`. Keep the same role boundaries and stage artifacts. Request only the approvals already required by the stage. When the main agent also performs Polish, call it a self-review, not an independent review.

## Verify capabilities before app work

Check the actual session for:

- shell execution in the project;
- Xcode and a suitable Simulator runtime;
- building and launching the app and controlling the Simulator UI;
- viewing current screenshots rather than relying on descriptions;
- an image-generation MCP tool when the approved direction requires original raster illustration, or a valid procedural fallback;
- access to the GitHub design catalog;
- `Agent`, `SendMessage`, and `TaskStop`, or a usable sequential fallback.

Do not assume any particular MCP server exists. Record unavailable operations plainly and continue independent work where possible; never report an unavailable visual review, launch, or test as successful.

## Version notes

The current documentation names the delegation tool `Agent`; Claude Code renamed the earlier `Task` tool in version 2.1.63 and retains older references as aliases. The documented resume path uses `SendMessage`, and the documented stop path uses `TaskStop`. Tool availability can still be restricted by settings and permission rules. No specific Claude Code version is claimed as tested by Trickster until the future end-to-end validation is completed.
