# Stage 5. Full implementation

## Gate

Start only after `CORE UI APPROVED` is recorded for the current design revision.

## Goal

Complete the agreed product breadth and real local production data path without reopening the approved core direction by default.

## Procedure

1. Implement every remaining screen and required scenario in `product.md`.
2. Complete the SwiftData model and migrations, automatic local identity, file-backed binary storage, lifecycle and deletion rules, and declared platform behavior.
3. Implement all eleven mandatory capability features as contextual product behavior.
4. For each capability, preserve the contracted entry action, useful result, least-privileged system mechanism, purpose string or entitlement, real dependency, and primary-path fallback.
5. Do not substitute permission dashboards, fake peripherals, or fabricated external results. CallKit alone may follow its contracted `INTERFACE_ONLY` behavior.
6. Remove runtime mock providers, preview stores, debug endpoints, and fixture fallbacks from Release paths. Fixtures may remain in previews, tests, and recorded data-preparation tooling.
7. Use only non-production visual placeholders needed to establish layout; product-asset production and integration follow Full and precede final Hardening.
8. Build and run focused checks before handoff.

This phase implements successful and ordinary product paths. It must not hide known denial or unavailable behavior, but the exhaustive state matrix belongs to Hardening.

## `LOCAL DATA READY` gate

Before Full is complete, verify that every production scenario uses SwiftData, files, or a real system API; the primary path works without a proprietary backend; local identity is stable according to the contract; file references resolve; and the Release configuration cannot activate a mock or preview provider. Intentional bundled sample content is allowed only when the contract identifies it as product content rather than user or server data.

## Handoff

Write and validate `handoffs/full.json`. Return its path, revision, changed files, completed scenarios, the status of every capability, `LOCAL DATA READY` evidence, concise command results with full-log paths, remaining Hardening work, and unavailable real-device or system-service checks. Retire the Full session after master verification.

## Preview on request

At the user's request, build, install, launch, and show the current Full revision in Simulator. Record it as `PREVIEW`; feedback returns to the current Full session. A preview does not reopen `CORE UI APPROVED` unless the user explicitly changes the design direction.
