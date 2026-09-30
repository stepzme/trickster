# Role orchestration

## Principle

Trickster defines roles, artifacts, dependencies, and user-feedback gates independently of a specific agent harness. The master selects an adapter from `trickster/adapters/` and maps universal operations to the environment.

A role is a constrained work contract. It may be performed by a separate agent, worker process, or sequentially by the master. Results move through files in `trickster/artifacts/<run-id>/` and a short handoff, not hidden harness history.

## Universal operations

- `SPAWN(role, task)` — start a role with constrained context.
- `WAIT(role)` — wait for the result and receive a handoff.
- `CONTINUE(role, task)` — continue the same role for another phase, feedback revision, or fix.
- `MESSAGE(role, information)` — provide new input without changing responsibility.
- `STOP(role)` — stop work that moved outside scope.

If the harness does not support these operations, the master performs the same role contract and writes the same artifacts.

## Roles

| Role | Stable ID | Stages | Primary result |
|---|---|---|---|
| `product-researcher` | `product_researcher` | 1 | Core scope, mandatory capability scope, and one reconciled product definition |
| `design-planner` | `design_planner` | 2–3 | Up to three researched apps, approved concern mapping, synthesized design package, product contract, and asset requirements |
| `implementation-owner` | `implementation_owner` | 4–7 and fixes | Core, Full, approved visual integration, Hardening, phase previews, app code, and capability integrations |
| `visual-producer` | `visual_producer` | parallel icon branch, 6, 9 | User-approved icon, post-Full assets, and individually approved store frames |
| `acceptance-reviewer` | `acceptance_reviewer` | 8 | Independent app and capability evidence, defects, and a draft review |

The master handles user questions and confirmations, plans the queue, assigns ownership of files, Simulator, and physical devices, verifies handoffs, integrates the result, records approval revisions, and makes final decisions.

## Start rules

1. Read the adapter named in `trickster/HARNESS`; use `generic` when it is missing.
2. Give the role its exact contract, run ID, phase, input artifacts, allowed write paths, completion criteria, tool limits, and current design revision.
3. Isolate context as far as the harness permits. Pass facts through prompts and files, not unrestricted conversation history.
4. A role reads only its contract, listed stage documents, and input artifacts.
5. A role cannot change scope, reference mapping, design revision, acceptance criteria, or delegate further without the master's permission.
6. After `WAIT`, inspect files and evidence. Self-assessment is not approval.
7. Use `CONTINUE` for later phases, user feedback, or defects owned by the same role. Do not create a new agent to erase history.
8. If roles run sequentially, record `sequential fallback` in `review.md`.

## Role-task template

```text
Role: <role id>. Read trickster/roles/<role>.md and the listed stage documents.
Run ID: <run-id>.
Phase: <phase>.
Design revision: <revision or not-yet-created>.
Goal: <one constrained result>.
Inputs: <exact paths>.
Allowed writes: <exact paths or directories>.
Prohibited: <shared files, scope, reference mapping, Simulator, etc.>.
Completion criteria: <verifiable list>.
Return: changed files, observations, checks, limitations, and questions for the master.
Do not communicate with the user or delegate work further.
```

## Sequence and handoff

1. Create a run ID and `SPAWN(product_researcher)` once for core scope, all eleven capability rows, and final scope reconciliation.
2. Verify the final scope and exact capability count, names, order, features, mechanisms, fallbacks, dependencies, and verification methods.
3. `SPAWN(design_planner)` for a shortlist of up to three apps and concern-level recommendations.
4. The master presents UI, UX, and optional illustration choices. The user may reuse one app or choose different shortlisted apps per concern.
5. After the user's mapping, `CONTINUE(design_planner)` to synthesize `trickster/design/`, record provenance and conflict resolution, finish `product.md`, and prepare asset requirements.
6. The master verifies the package, shows the composition, and records `DESIGN COMPOSITION APPROVED` with its revision.
7. `SPAWN(implementation_owner)` for Core. The master verifies the build and screenshots, presents them, and uses `CONTINUE` for feedback until `CORE UI APPROVED`.
8. After design approval, the app-icon branch may `SPAWN(visual_producer)` in parallel with Core and Full. Each generated image is shown by the master and revised through `CONTINUE` until `APP ICON APPROVED`.
9. `CONTINUE(implementation_owner)` for Full. On a user-requested preview, transfer Simulator ownership, show that revision, record `PREVIEW`, and return feedback to the same owner.
10. After Full, `CONTINUE(visual_producer)` for required product assets. Show and revise substantial generated assets before integration.
11. Integrate only approved assets and the applicable approved icon under one explicit app-code owner.
12. `CONTINUE(implementation_owner)` for Hardening against the integrated UI. On a requested preview, show that exact revision as `PREVIEW`. After final-asset regressions and the complete state matrix pass, freeze the release candidate.
13. Transfer Simulator and, when available, physical-device ownership to `acceptance_reviewer`. The reviewer does not fix code.
14. Return defects through `CONTINUE(implementation_owner)` and repeat affected checks without changing criteria.
15. After `APP ACCEPTED`, `CONTINUE(visual_producer)` for a storyboard. After storyboard approval, create one store frame, return it, show it, revise it, and record `STORE FRAME <n> APPROVED` before requesting the next frame.
16. After `STORE SET APPROVED`, present the complete result and obtain final confirmation.
17. Clean recorded temporary paths and deliver.

## Feedback protocol

Every user-feedback loop follows the same protocol:

1. a role produces a revisioned artifact;
2. the master independently checks it;
3. the master shows the actual result to the user;
4. the user approves it or provides feedback;
5. the master records the decision and revision;
6. feedback returns to the same role with `CONTINUE`;
7. an upstream revision change invalidates dependent approvals.

The role never communicates directly with the user and never interprets silence as approval.

## Parallelism and ownership

Run in parallel only with independent inputs and non-overlapping writes. The implementation owner is the sole app-code and Xcode-project owner. Before icon approval, the visual producer writes only to its artifact directory; approved integration is performed by the implementation owner or after explicit transfer of the exact asset-catalog path.

Do not allow two roles to write simultaneously to the Xcode project, asset catalog, `product.md`, `review.md`, or `trickster/design/`. Simulator and each physical device always have one owner. A preview pauses conflicting build work.

The product-definition, design-composition, Core-approval, Full, visual integration, Hardening, and acceptance chain is sequential. The icon research/generation branch is the intentional parallel exception.
