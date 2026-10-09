# Adapter: generic

Configure the harness so the master reads `trickster/AGENTS.md`. Map its child-agent primitives to starting, waiting for, continuing, messaging, and stopping the roles in `workflow/orchestration.md`.

Each role receives its contract, current stage document, approved upstream artifact paths, and exact write paths. The stage artifact is the handoff.

When child agents are unavailable, the master performs one role at a time:

1. read that role contract and stage document;
2. work only within its ownership boundary;
3. save the stage artifact or app revision;
4. verify the result and request the required user approval;
5. continue only after approval.

Do not add approval gates during the sequential fallback. Request only the approvals defined by the current stage. If the same agent performs Polish, identify the result as a self-review rather than an independent review.

For original visual assets, use a harness-provided image generator when one is actually available. Otherwise create procedural SVG, native drawing, gradients, shapes, or system-symbol compositions when they satisfy the approved direction. Do not silently replace a required illustration with generic geometry. Design may use a compositionally correct placeholder, but Publish remains incomplete until every required final illustration is supplied or produced and approved.

Before app work, verify shell, Xcode, Simulator interaction, image viewing, image-generation capability when required, and catalog access. State unavailable capabilities plainly.
