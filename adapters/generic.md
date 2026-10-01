# Adapter: generic

This adapter lets Trickster run in any harness that can read project instructions and work with files and a shell. It assumes no specific tool names.

## Setup

1. Configure the harness so the master reads `trickster/AGENTS.md`.
2. Verify access to the raw GitHub URL in `workflow/style-reference.md`, or confirm that a complete previously approved design composition exists in `trickster/design/`.
3. Ensure that shell, Xcode, Simulator, physical-device access, UI interaction, and image viewing are available. Record unavailable physical hardware or services because mandatory capability evidence may remain `UNVERIFIED`.

## Orchestration operations

If the harness supports child agents, map its primitives to `SPAWN`, `WAIT`, `CONTINUE`, `MESSAGE`, and `STOP` from the [contract](contract.md). Use a stable role ID, a phase-scoped execution identifier, a constrained prompt, explicit input paths, allowed write paths, and a file-based handoff. Start a fresh execution session after each phase gate; use `CONTINUE` only inside the current phase or feedback loop.

If even the basic `SPAWN` and `WAIT` operations are unavailable, the master executes the roles sequentially:

1. read one role contract;
2. execute only its current phase;
3. save the required artifacts and handoff;
4. validate the phase handoff and clear working context as far as the harness permits;
5. continue to the next role after verifying the result.

This mode is a fully functional fallback, but `review.md` must identify it as `sequential fallback`; the independence of the acceptance reviewer must be identified as limited unless a separate agent performed the review.

## Adapter verification

- Trickster instructions have actually been loaded.
- The GitHub catalog or a complete previously approved design composition in `trickster/design/` is available.
- Files and commands are restricted to the project where the harness supports such restrictions.
- Delegation has either been tested in practice or the sequential fallback has been explicitly selected.
- Run state records every available session ID, role, and phase for later usage analysis.
