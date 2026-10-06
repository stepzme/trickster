# Adapter: generic

Configure the harness so the master reads `trickster/AGENTS.md`. Map its child-agent primitives to starting, waiting for, continuing, messaging, and stopping the roles in `workflow/orchestration.md`.

Each role receives its contract, current stage document, approved upstream artifact paths, and exact write paths. The stage artifact is the handoff.

When child agents are unavailable, the master performs one role at a time:

1. read that role contract and stage document;
2. work only within its ownership boundary;
3. save the stage artifact or app revision;
4. verify the result and request the required user approval;
5. continue only after approval.

Before app work, verify shell, Xcode, Simulator interaction, image viewing, and catalog access. State unavailable capabilities plainly.
