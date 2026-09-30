# Stage 3. Product contract

## Goal

Turn the reconciled product definition and approved reference composition into an implementation and verification contract. The contract defines asset requirements now, but production assets are created only after Hardening.

## Inputs

- `trickster/artifacts/<run-id>/product.md` with final reconciled scope;
- `trickster/design/provenance.json`;
- `trickster/design/composition.md`;
- final `ui.md`, `ux.md`, and optional `illustrations.md`;
- `trickster/templates/product.md`;
- `trickster/templates/asset-manifest.md`.

## Procedure

1. Preserve the core, capability, and final scope sections without silently adding or removing features.
2. Record the approved design revision, concern mapping, source URLs, coherence rules, and `DESIGN COMPOSITION APPROVED` decision.
3. Define all main sections, screens, entry points, navigation, data, actions, and states.
4. Identify the Core implementation surface: application shell, every main-section screen, and one primary end-to-end flow suitable for real user review.
5. Define Full implementation scenarios for the remaining scope and all eleven capabilities.
6. Define Hardening scenarios for errors, loading, empty, offline where applicable, permission denial, restriction, cancellation, unavailable hardware or service, persistence, accessibility, compact layout, and declared environments.
7. Create stable scenario IDs and acceptance evidence requirements before implementation.
8. Prepare asset requirements: product role, dimensions, states, provenance constraints, and integration locations. Do not generate production assets in this stage.
9. Record app-icon applicability and the parallel-branch write boundary.
10. Record which implementation phases may be previewed in Simulator and the tools available to show the current result.

## Core approval contract

Core implementation does not approve itself. The master must build and inspect it, show the real result to the user, and record either feedback or explicit `CORE UI APPROVED` tied to the design revision and app revision. Full implementation is blocked until that approval.

## Output gate

Before implementation begins, `product.md` and `asset-manifest.md` must answer:

- what belongs to Core, Full, and Hardening;
- how every capability is a contextual feature;
- what the user will review at the Core gate;
- which assets are planned but not yet produced;
- how previews are built and shown;
- what evidence acceptance requires;
- which tools, devices, peripherals, data, and real services are available.

The master verifies the contract and retains authority to change it when explicit user feedback changes the approved direction. Any such change creates a new contract or design revision and invalidates affected downstream evidence.
