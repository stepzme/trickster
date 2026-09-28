# Role orchestration

## Principle

Trickster defines roles, artifacts, and dependencies independently of any specific agent harness. The master selects an adapter from `trickster/adapters/` and maps universal orchestration operations to the tools available in the environment.

A role is a constrained work contract. It may be performed by a separate agent, worker process, or sequentially by the master. Results are transferred through files in `trickster/artifacts/<run-id>/` and a short handoff, not through hidden harness-specific history.

## Universal operations

- `SPAWN(role, task)` — start a role with constrained context.
- `WAIT(role)` — wait for the result and receive a handoff.
- `CONTINUE(role, task)` — continue the same role for the next phase or a fix.
- `MESSAGE(role, information)` — provide new input without changing responsibility.
- `STOP(role)` — stop work that has moved outside scope.

If the harness does not support these operations, the master performs the role contract and saves the same output files.

## Roles

| Role | Stable ID | Stages | Primary result |
|---|---|---|---|
| `product-researcher` | `product_researcher` | 1–2 | Scope, boundaries, missing product decisions, and the fixed eleven-row capability matrix |
| `design-planner` | `design_planner` | 3–4 and stage 5 plan | Shortlist of up to three packages; after one is selected, the local package, product contract, and asset plan |
| `implementation-owner` | `implementation_owner` | 6 and fixes | App code, mandatory capability integrations, and implementation report |
| `visual-producer` | `visual_producer` | 5, 7, 9 | Product assets, one app icon, and one ASO set |
| `acceptance-reviewer` | `acceptance_reviewer` | 8 | Independent evidence, capability verification, defects, and a draft review |

The master handles user questions and confirmations, plans the queue, assigns ownership of files, Simulator, and physical devices, verifies handoffs, integrates the result, and makes final decisions.

## Start rules

1. Read the adapter for the current harness before work begins. The active adapter is named in `trickster/HARNESS`; if that file is missing, use `generic`.
2. Give the agent the exact contract from `trickster/roles/`, run ID, input artifacts, allowed write paths, completion criteria, and tool limitations.
3. Isolate context as far as the harness permits. Pass required facts through the prompt and files, not the full conversation history.
4. The agent reads only its role contract, listed stage documents, and input artifacts.
5. Prohibit roles from changing scope, the confirmed style package, acceptance criteria, or delegating work without the master's permission.
6. After `WAIT`, inspect the created files and evidence. The agent's self-assessment is not acceptance.
7. Use `CONTINUE` to repair an incomplete handoff or continue the same role. Do not create a new agent merely to reset context or defect history.
8. If separate role execution is unavailable, the master performs it and records `sequential fallback` mode in `review.md`.

## Role-task template

```text
Role: <role id>. Read trickster/roles/<role>.md and the listed stage documents.
Run ID: <run-id>.
Goal: <one constrained result>.
Inputs: <exact paths>.
Allowed writes: <exact paths or directories>.
Prohibited: <shared files, scope, style package, Simulator, etc.>.
Completion criteria: <verifiable list>.
Return: changed files, observations, checks performed, limitations, and questions for the master.
Do not communicate with the user or delegate work further.
```

## Sequence and handoff

1. The master creates a run ID and performs `SPAWN(product_researcher)` for a draft scope and all eleven mandatory capability rows in `product.md`.
2. After verifying the scope and the exact capability count, names, order, features, mechanisms, fallbacks, dependencies, and verification methods, perform `SPAWN(design_planner)` for a shortlist of up to three packages. Do not start style selection while the capability matrix is incomplete.
3. The master presents the shortlist and requires the user to select exactly one package. Requests to combine packages are rejected.
4. After selection, perform `CONTINUE(design_planner)` to save the selected package in `trickster/design/`, complete `product.md`, and create the asset manifest.
5. If product images are required, start `visual_producer` only for that phase.
6. Start one `implementation_owner`, who is the sole owner of app code and shared Xcode files.
7. After screens stabilize, start or continue `visual_producer` for one app icon with restricted asset-catalog paths.
8. After icon integration, transfer Simulator and, when available, physical-device ownership to `acceptance_reviewer`. The reviewer does not fix code.
9. Return defects through `CONTINUE(implementation_owner)`; after fixes, the master repeats affected checks.
10. After ACCEPTED, perform `CONTINUE(visual_producer)` for one ASO set.
11. The master presents the result to the user and gets explicit confirmation.
12. After confirmation, the master cleans temporary downloads and build files according to `finalization.md`, then performs delivery.

## Parallelism

Run in parallel only tasks with independent inputs and non-overlapping write paths. Do not allow two agents to write simultaneously to the Xcode project, asset catalog, `product.md`, or `review.md`. Simulator and each physical device always have one owner.

Scope, mandatory capability synthesis, style selection, and implementation form a dependent chain. The primary benefit of role separation is focused context and independent verification. Within implementation, parallel work on independent modules or tests is allowed only after the master fixes interfaces and write paths.
