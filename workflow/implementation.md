# Stage 5. Implementation

## Preparation

Read `product.md`, `trickster/design/source.json`, `ui.md`, `ux.md`, optional `illustrations.md`, the asset manifest, and the cross-cutting `workflow/ux.md` and `ios.md`. Verify available harness capabilities: separate agents, Xcode, Simulator, UI interaction, and image viewing. Record the actual limitations.

Direct DerivedData and other temporary build output to `/tmp/trickster/<run-id>/build/` when the tool allows the path to be configured. Store only evidence and final materials in `trickster/artifacts/<run-id>/`, not build caches.

## Implementation owner

The master starts the `implementation-owner` role according to `trickster/roles/implementation-owner.md` and gives the agent exact inputs, allowed app paths, and handoff criteria. This agent is the sole owner of app code, dependencies, and shared Xcode configuration during implementation.

Use parallel implementation workers only for independent modules or tests with non-overlapping files and already fixed interfaces. The master creates and coordinates them. Only one agent at a time controls the shared Simulator and build.

If delegation is unavailable, the master performs the implementation-owner role and explicitly records `sequential fallback`.

## Vertical slice

Before implementing the full scope, build one primary scenario with real content in the confirmed style. Run it in Simulator and inspect it visually. Check buttons, fields, cards, and navigation separately: a default SwiftUI appearance that does not match `ui.md` is a visual defect. Fix architectural and visual problems, then expand the app.

The vertical slice is an internal check, not an alternative design or a separate product variant.

## Full implementation

Complete every required scenario in `product.md`, all states, data persistence, and applicable UX rules. Do not add features from the reference app that are outside the agreed scope. Do not reduce scope after work begins without an explicit reason recorded in the contract.

The agent's report is an input to verification, not a readiness decision.
