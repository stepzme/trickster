# Adapter contract

An adapter connects the harness-neutral Trickster process to a specific agent harness. It does not change the roles, stages, inputs, acceptance criteria, or artifact structure.

## Required capabilities

The adapter must describe:

- how the master loads `trickster/AGENTS.md` and the workflow;
- how the master accesses the GitHub catalog during reference research and `trickster/design/` after the approved concern-level composition is saved;
- how `SPAWN`, `WAIT`, `CONTINUE`, `MESSAGE`, and `STOP` are performed;
- how role context is isolated and write paths are restricted;
- how an agent returns a handoff;
- how to operate without separate agents;
- how to verify shell, Xcode, Simulator, physical-device access, UI interaction, and image viewing.

## Invariants

- The source of each role contract is `trickster/roles/<role>.md`.
- Roles exchange information through `trickster/artifacts/<run-id>/` and a verifiable handoff.
- The user communicates only with the master.
- An individual role has no authority to change the reconciled scope, the approved design composition, feedback approvals, or acceptance criteria.
- Product-definition, design-composition, Core UI, app-icon, and per-frame store-screenshot confirmations remain with the master and the user.
- If the harness cannot spawn agents, the master executes the same role contracts sequentially.
- A missing capability is explicitly marked `UNVERIFIED`; the adapter does not pretend it is available.

## Adding a harness

Create `trickster/adapters/<harness>.md`, implement every operation in this contract, and write the adapter name to `trickster/HARNESS`. Harness-specific logic must not be added to `workflow/` or `roles/`.
