# Adapter contract

An adapter maps Trickster's roles to an agent harness. It does not change the six stages, role ownership, approval dependencies, or capability rules.

The adapter describes how the master:

- starts, waits for, continues, messages, and stops a role;
- gives a role only its stage, approved input artifacts, and allowed write paths;
- operates sequentially when separate agents are unavailable;
- runs shell and Xcode commands, controls Simulator, and views current screenshots;
- accesses the GitHub design catalog during Design.

The user communicates only with the master. Roles exchange durable information through the Research, Planning, Design, and Review artifacts plus the app itself. Do not require run-state files, token accounting, session rotation, or secondary handoff schemas.

Only one role owns app code and Simulator at a time. Designer transfers both to the Implementation Owner after design approval. Acceptance Reviewer never writes app code.
