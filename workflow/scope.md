# Stage 1. Product definition

## Goal

Produce one reconciled definition of a local-first app. Scope is not complete before mandatory capability synthesis: capability features can add entry points, screens, real system dependencies, purpose strings, device requirements, and verification work, but they do not authorize proprietary server infrastructure.

The product researcher performs this as one continuous role phase and returns one handoff, not a scope handoff followed by a disconnected capability handoff.

## Input

- the user's original request;
- existing code and product documentation;
- environment constraints and explicit exclusions;
- [the canonical capability registry](ios-capabilities.md);
- `trickster/templates/product.md`.

## Procedure

1. Define the user, primary task, and expected outcome.
2. Record explicitly requested features, constraints, and exclusions as the `Core product scope`.
3. Define the local data boundary: SwiftData entities for durable structured data, files for binary data, automatic local identity, `UserDefaults` preferences, lifecycle, deletion, offline behavior, and required migrations.
4. Separate user decisions from assumptions. Do not reduce an uncertain idea to an arbitrary minimal shell.
5. Synthesize all eleven capability features in their canonical order. For each, define its entry action, useful result, system mechanism, fallback, dependency, and verification environment. Only CallKit may use the explicit `INTERFACE_ONLY` mode defined in `ios-capabilities.md`.
6. Reconcile the core and capability scopes. Add the necessary screens, states, local data, dependencies, and device or system-service requirements to the `Final reconciled scope`.
7. Determine the final scope status:
   - `DEFINED` — primary tasks, capability integrations, and boundaries are clear;
   - `PARTIAL` — the product is understandable, but one decision materially changes the final baseline;
   - `CONFLICTING` — the request, existing product, or required capability set contains a material contradiction.
8. For `PARTIAL` or `CONFLICTING`, formulate one question whose answer changes the final boundary. Continue all independent work and send the question through the master.

Do not assign the final scope status before capability synthesis. If a capability forces a new dependency or product surface, record it explicitly rather than silently expanding an earlier scope.

## Local-first boundary

Every Trickster app uses a real local production data path. Use SwiftData for durable domain data, files for photos and other binary payloads, and `UserDefaults` only for small preferences. Create any product identity locally without registration. The primary product path must remain useful without a proprietary server.

Do not add:

- a proprietary backend, server accounts, or server-side authentication;
- synchronization or collaboration;
- payments, subscriptions, or purchases;
- third-party integrations;
- cloud AI or remote processing;
- push infrastructure or complex background processing.

Apple frameworks and public resources may be used where a contracted capability genuinely needs them; they do not change the local ownership of product data. If the requested product fundamentally requires prohibited infrastructure and no honest local adaptation preserves its purpose, set the scope to `CONFLICTING` and ask the master to resolve the product boundary. Do not conceal the conflict behind fixtures or a simulated service.

Reference patterns may shape agreed features; they never authorize new product scope.

## Output

Complete these sections in `trickster/artifacts/<run-id>/product.md`:

- user, task, and expected outcome;
- core product scope;
- mandatory capability scope with all eleven rows;
- final reconciled scope;
- final scope status;
- excluded infrastructure and deferred work;
- assumptions and one material question when required;
- external dependencies and verification boundaries;
- local data model, file ownership, identity, lifecycle, migration, and offline boundary.

The stage is incomplete until the matrix and final reconciliation agree with each other. The master verifies the entire definition once before reference research begins.
