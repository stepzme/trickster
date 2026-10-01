# Role orchestration

## Principle

Trickster defines roles, artifacts, dependencies, and user-feedback gates independently of a specific agent harness. The master selects an adapter from `trickster/adapters/` and maps universal operations to the environment.

A role is a constrained work contract. It may be performed by a separate agent, worker process, or sequentially by the master. Results move through files in `trickster/artifacts/<run-id>/` and a short handoff, not hidden harness history.

## Universal operations

- `SPAWN(role, task)` — start a role with constrained context.
- `WAIT(role)` — wait for the result and receive a handoff.
- `CONTINUE(role, task)` — continue the current execution session inside the same phase or user-feedback loop.
- `MESSAGE(role, information)` — provide new input without changing responsibility.
- `STOP(role)` — stop work that moved outside scope.

If the harness does not support these operations, the master performs the same role contract and writes the same artifacts.

## Roles

| Role | Stable ID | Stages | Primary result |
|---|---|---|---|
| `product-researcher` | `product_researcher` | 1 | Core scope, local data boundary, mandatory capability scope, and one reconciled product definition |
| `design-planner` | `design_planner` | 2–3 | Up to three researched apps, approved concern mapping, synthesized design package, product contract, and asset requirements |
| `implementation-owner` | `implementation_owner` | 4–7 and fixes | Core, Full, `LOCAL DATA READY`, approved visual integration, Hardening, phase previews, app code, and capability integrations |
| `visual-producer` | `visual_producer` | parallel icon branch, 6, 9 | User-approved icon, post-Full assets, and individually approved store frames |
| `acceptance-reviewer` | `acceptance_reviewer` | 8 | Independent app and capability evidence, defects, and a draft review |

The master handles user questions and confirmations, plans the queue, assigns ownership of files, Simulator, and physical devices, verifies handoffs, integrates the result, records approval revisions, and makes final decisions.

Role ownership is logical, not conversational. Core, Full, Hardening, acceptance fixes, app icon, product assets, and store screenshots use fresh phase-scoped execution sessions by default. The role contract, revisions, `run-state.json`, and verified phase handoffs preserve continuity without carrying unrestricted conversation history across phase gates.

## Start rules

1. Read the adapter named in `trickster/HARNESS`; use `generic` when it is missing.
2. Create `trickster/artifacts/<run-id>/run-state.json` from the template, then record every available master and role thread or session ID with its role and phase. A single master thread spanning the run uses phase `orchestration`; phase-specific worker threads use their assigned phase.
3. Give the role its exact contract, run ID, phase, input artifacts, allowed write paths, completion criteria, tool limits, current design revision, run-state path, and prior handoff path when applicable.
4. Isolate context as far as the harness permits. Pass facts through prompts and files, not unrestricted conversation history.
5. A role reads only its contract, assigned stage document, explicitly listed input artifacts, and the immediately preceding verified handoff.
6. A role cannot change scope, reference mapping, design revision, acceptance criteria, or delegate further.
7. After `WAIT`, inspect files and evidence. Self-assessment is not approval.
8. Use `CONTINUE` only within the same phase while resolving its user feedback or incomplete work. After a phase gate, stop or retire that execution session and `SPAWN` a fresh session for the next phase, even when the stable role ID is unchanged.
9. Write every completed phase result to `trickster/artifacts/<run-id>/handoffs/<phase>[-<cycle>].json` using the phase-handoff template. Validate it before starting the next phase.
10. If roles run sequentially, save the same handoff, clear working context as far as the harness permits, and record `sequential fallback` in `review.md`.

## Role-task template

```text
Role: <role id>. Read trickster/roles/<role>.md and the listed stage documents.
Run ID: <run-id>.
Phase: <phase>.
Design revision: <revision or not-yet-created>.
Goal: <one constrained result>.
Inputs: <exact paths>.
Run state: trickster/artifacts/<run-id>/run-state.json.
Prior handoff: <exact path or NONE>.
Allowed writes: <exact paths or directories>.
Prohibited: <shared files, scope, reference mapping, Simulator, etc.>.
Completion criteria: <verifiable list>.
Return: a validated handoff path, changed files, observations, checks, limitations, and questions for the master.
Do not communicate with the user or delegate work further.
```

Record each execution assignment in `run-state.json` with `threadId`, `parentThreadId` when known, stable `role`, and `phase`. `activeAssignment` must reference one of those records. Validate state and handoffs with:

```text
node trickster/scripts/validate-run-artifacts.mjs run-state trickster/artifacts/<run-id>/run-state.json
node trickster/scripts/validate-run-artifacts.mjs phase-handoff trickster/artifacts/<run-id>/handoffs/<phase>[-<cycle>].json
```

## Context and tool-output budget

- Keep stable instructions and exact paths in the assignment; do not paste whole artifacts that the role can read from disk.
- Store complete build, test, and diagnostic logs under the run artifact or temporary build directory. Return exit codes, a short summary, relevant error excerpts, and the log path.
- Avoid broad source dumps, directory listings, repeated screenshots, and unchanged status reports. Inspect only the files and states required by the current phase.
- Treat an unchanged wait result as normal. Wait for completion, a blocker, or required user action instead of polling at short intervals.
- Batch related defects and deterministic checks when they share one revision. Do not rebuild or retest unchanged code merely to refresh status.
- When a phase conversation becomes large before its gate, first write an updated handoff, then rotate to a fresh execution session for the remaining work in that same phase.

## Sequence and handoff

1. Create a run ID and `SPAWN(product_researcher)` once for core scope, local data boundary, all eleven capability rows, and final scope reconciliation.
2. Verify the final scope, SwiftData/file/local-identity plan, and exact capability count, names, order, modes, features, mechanisms, fallbacks, dependencies, and verification methods.
3. `SPAWN(design_planner)` for a shortlist of up to three apps and concern-level recommendations; save and verify `handoffs/reference-research.json`.
4. The master presents UI, UX, and optional illustration choices. The user may reuse one app or choose different shortlisted apps per concern.
5. After the user's mapping, `SPAWN(design_planner)` as a fresh design-synthesis session with the verified research handoff. Synthesize `trickster/design/`, record provenance and conflict resolution, finish `product.md` including launch and optional splash behavior, and prepare asset requirements.
6. The master verifies the package, shows the composition, and records `DESIGN COMPOSITION APPROVED` with its revision.
7. `SPAWN(implementation_owner)` for Core. The master verifies the build, clean cold-launch transition, and screenshots, presents them, and uses `CONTINUE` only for Core feedback until `CORE UI APPROVED`. Save `handoffs/core.json`, then retire the Core session.
8. After design approval, the app-icon branch may `SPAWN(visual_producer)` in parallel with Core and Full. Each generated image is shown by the master and revised through `CONTINUE` until `APP ICON APPROVED`.
9. `SPAWN(implementation_owner)` as a fresh Full session with the verified Core handoff. Verify `LOCAL DATA READY`: Release paths use SwiftData, files, or real system APIs and cannot activate runtime mocks. Save `handoffs/full.json`, then retire the Full session.
10. After Full and `LOCAL DATA READY`, `SPAWN(visual_producer)` as a fresh product-assets session. Show and revise substantial generated assets before integration, save its handoff, then retire it.
11. `SPAWN(implementation_owner)` as a fresh visual-integration session. Integrate only approved assets and the applicable approved icon, verify the build, save `handoffs/visual-integration.json`, then retire the session.
12. `SPAWN(implementation_owner)` as a fresh Hardening session with the Full and visual-integration handoffs. On a requested preview, show that exact revision as `PREVIEW`. After cold-launch, splash, local-data, migration, file, final-asset, and complete state-matrix checks pass, save `handoffs/hardening.json` and freeze the release candidate.
13. `SPAWN(acceptance_reviewer)` fresh for the frozen candidate and transfer Simulator and, when available, physical-device ownership. The reviewer does not fix code.
14. Batch acceptance defects in the reviewer handoff. `SPAWN(implementation_owner)` as a fresh `acceptance-fix` session for that batch, then `SPAWN(acceptance_reviewer)` fresh to retest the affected criteria and primary path without changing criteria.
15. After `APP ACCEPTED`, `SPAWN(visual_producer)` as a fresh store-screenshot session for the storyboard and frames. Use `CONTINUE` while revising the current storyboard or frame; record `STORE FRAME <n> APPROVED` before requesting the next frame.
16. After `STORE SET APPROVED`, present the complete result and obtain final confirmation.
17. Clean recorded temporary paths and deliver.

## Feedback protocol

Every user-feedback loop follows the same protocol:

1. a role produces a revisioned artifact;
2. the master independently checks it;
3. the master shows the actual result to the user;
4. the user approves it or provides feedback;
5. the master records the decision and revision;
6. feedback returns with `CONTINUE` only while the current phase or individual visual artifact remains open;
7. an upstream revision change invalidates dependent approvals.

The role never communicates directly with the user and never interprets silence as approval.

At a phase gate, the master verifies the handoff, updates `run-state.json`, ends the old assignment, and starts the next execution session from files. Do not keep an old session alive merely to preserve history.

## Parallelism and ownership

Run in parallel only with independent inputs and non-overlapping writes. The implementation owner is the sole app-code and Xcode-project owner. Before icon approval, the visual producer writes only to its artifact directory; approved integration is performed by the implementation owner or after explicit transfer of the exact asset-catalog path.

Do not allow two roles to write simultaneously to the Xcode project, asset catalog, `product.md`, `review.md`, or `trickster/design/`. Simulator and each physical device always have one owner. A preview pauses conflicting build work.

The product-definition, design-composition, Core-approval, Full plus `LOCAL DATA READY`, visual integration, Hardening, and acceptance chain is sequential. The icon research/generation branch is the intentional parallel exception.
