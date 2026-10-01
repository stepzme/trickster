# Stage 4. Core implementation

## Goal

Materialize the product early enough for the user to judge the real design direction before the team invests in the full scope. Core is broader than one isolated component but smaller than the complete product, and it establishes the local-first path that Full will complete.

## Required surface

Implement:

- the system launch screen, its transition to the first real frame, and any contracted app-owned splash;
- the application shell and global navigation;
- the screen for every main section listed in `product.md`;
- the primary end-to-end user flow with representative real or reproducible data;
- the reusable visual foundations needed to judge typography, color, spacing, controls, cards, lists, forms, navigation, and imagery;
- enough interaction and state to show how the direction behaves, not a static mockup;
- real SwiftData persistence for the primary flow when practical; otherwise an explicitly recorded preview fixture with a contracted replacement path.

Preview fixtures may accelerate UI review, but they must not become the app architecture or be represented as production data. Do not implement the remaining product breadth, every capability, or the full error matrix merely to make Core appear complete. Avoid placeholder screens that cannot support meaningful review.

## Handoff and feedback loop

1. Build the Core revision with Xcode tooling.
2. Perform a clean cold launch and capture the transition from app icon tap to the first interactive frame, including an app-owned splash when contracted.
3. Run the relevant focused checks.
4. Return the revision, launch capture, main-section states, commands, screenshots, the real store or preview fixture used, and limitations.
5. The master independently verifies the build and presents the real launch and Core result to the user.
6. If the user gives feedback, `CONTINUE` the current Core session. When feedback changes the design mapping, return to design composition and create a new design revision first.
7. Repeat until the user explicitly states `CORE UI APPROVED`.

Record approval with the app revision, design revision, device, reviewed launch transition, and screens. Validate `handoffs/core.json`, update run state, and retire the Core session. Silence or implementation-owner confidence is not approval. Full implementation is blocked without it.

## Preview on request

The user may request a Simulator preview before the formal Core review or during any feedback iteration. Follow `implementation.md`: show the exact current revision and label it `PREVIEW`.
