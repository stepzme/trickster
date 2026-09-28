# Stage 1. Scope definition

## Goal

Understand exactly what the app must do without forcing the user to complete a questionnaire or reducing an uncertain idea to the smallest possible interface.

## Input

- the user's original message;
- existing project code and documentation, if any;
- environment constraints and explicitly stated exclusions.

## Procedure

1. Describe the user, their task, and the expected outcome.
2. List explicitly stated functionality and constraints.
3. Separate the user's product decisions from your assumptions.
4. Determine the scope status:
   - `DEFINED` — primary user tasks and boundaries are clear;
   - `PARTIAL` — the idea is clear, but the expected functional baseline is not defined;
   - `CONFLICTING` — requirements contradict each other or the existing project.
5. For `PARTIAL`, do not choose an arbitrarily minimal implementation. Formulate one question whose answer will determine the product baseline; continue independent work.
6. For `CONFLICTING`, ask one question whose answer materially resolves the conflict. Do not conceal the conflict behind an assumption.
7. Read `workflow/ios-capabilities.md` and adapt every canonical capability to the product after the user's scope is understood. The capability features are mandatory even when the original prompt does not mention them.

## Scope-expansion rule

If the user did not request external infrastructure, do not automatically add it for ordinary product features. The fixed features required by `ios-capabilities.md` are an explicit Trickster baseline and may introduce the minimum integration dependency needed for a real capability. Record that dependency instead of hiding it or replacing it with a fake implementation.

Outside that fixed baseline, do not automatically add:

- a backend, accounts, or server-side authentication;
- synchronization or collaboration;
- payments, subscriptions, or purchases;
- third-party service integrations;
- cloud AI or remote processing;
- push infrastructure or complex background processes.

Patterns from the selected `ux.md` help design already agreed features; they do not authorize new features or hidden architectural expansion.

## Output

Create a draft `Scope` section in `trickster/artifacts/<run-id>/product.md` containing:

- scope status;
- explicit functionality;
- missing product decisions;
- constraints;
- assumptions;
- potential questions for the user.

Then complete the fixed `Mandatory iOS capabilities` table from `templates/product.md`. The scope output is incomplete until all eleven canonical rows are present in order and contain a product-specific feature, real result, system mechanism, fallback, dependency, and verification method.
