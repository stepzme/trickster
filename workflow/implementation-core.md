# Stage 4. Core implementation

## Goal

Materialize the product early enough for the user to judge the real design direction before the team invests in the full scope. Core is broader than one isolated component but smaller than the complete product.

## Required surface

Implement:

- the application shell and global navigation;
- the screen for every main section listed in `product.md`;
- the primary end-to-end user flow with representative real or reproducible data;
- the reusable visual foundations needed to judge typography, color, spacing, controls, cards, lists, forms, navigation, and imagery;
- enough interaction and state to show how the direction behaves, not a static mockup.

Do not implement the remaining product breadth, every capability, or the full error matrix merely to make Core appear complete. Avoid placeholder screens that cannot support meaningful review.

## Handoff and feedback loop

1. Build the Core revision with Xcode tooling.
2. Run the relevant focused checks.
3. Return the revision, main-section states, commands, screenshots, and limitations.
4. The master independently verifies the build and presents the real result to the user.
5. If the user gives feedback, `CONTINUE` the same implementation owner. When feedback changes the design mapping, return to design composition and create a new design revision first.
6. Repeat until the user explicitly states `CORE UI APPROVED`.

Record approval with the app revision, design revision, device, and reviewed screens. Silence or implementation-owner confidence is not approval. Full implementation is blocked without it.

## Preview on request

The user may request a Simulator preview before the formal Core review or during any feedback iteration. Follow `implementation.md`: show the exact current revision and label it `PREVIEW`.
