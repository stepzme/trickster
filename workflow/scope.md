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

## Scope-expansion rule

If the user did not request external infrastructure, do not automatically add:

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
