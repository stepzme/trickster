# Stage 1. Product definition

## Goal

Produce one reconciled definition of the app. Scope is not complete before mandatory capability synthesis: capability features can add entry points, screens, real dependencies, purpose strings, device requirements, and verification work.

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
3. Separate user decisions from assumptions. Do not reduce an uncertain idea to an arbitrary minimal shell.
4. Synthesize all eleven capability features in their canonical order. For each, define its entry action, useful result, system mechanism, fallback, dependency, and verification environment.
5. Reconcile the core and capability scopes. Add the necessary screens, states, dependencies, and device or service requirements to the `Final reconciled scope`.
6. Determine the final scope status:
   - `DEFINED` — primary tasks, capability integrations, and boundaries are clear;
   - `PARTIAL` — the product is understandable, but one decision materially changes the final baseline;
   - `CONFLICTING` — the request, existing product, or required capability set contains a material contradiction.
7. For `PARTIAL` or `CONFLICTING`, formulate one question whose answer changes the final boundary. Continue all independent work and send the question through the master.

Do not assign the final scope status before capability synthesis. If a capability forces a new dependency or product surface, record it explicitly rather than silently expanding an earlier scope.

## Scope-expansion rule

The canonical capability set is an explicit Trickster baseline and may introduce the minimum real dependency needed for its contracted feature. Outside that baseline, do not automatically add:

- a backend, accounts, or server-side authentication;
- synchronization or collaboration;
- payments, subscriptions, or purchases;
- third-party integrations;
- cloud AI or remote processing;
- push infrastructure or complex background processing.

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
- external dependencies and verification boundaries.

The stage is incomplete until the matrix and final reconciliation agree with each other. The master verifies the entire definition once before reference research begins.
