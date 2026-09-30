# Cross-cutting launch and splash experience

## Purpose and terminology

Every iOS app must provide a system launch screen that appears immediately while the process starts. It is not a branded splash screen, onboarding, loading view, or place for dynamic behavior. An optional splash screen is an ordinary app-owned screen shown after launch only when the product contract gives it a real purpose.

## Contract

During the product contract, define:

- the first real app screen for a fresh install and a returning user;
- the system launch-screen mechanism: `UILaunchScreen` or `LaunchScreen.storyboard`;
- shared background color, safe-area structure, and any static element that also exists on the first real screen;
- light and dark appearance, supported orientations, primary and compact devices, and iPad behavior when declared;
- the exact transition from the static launch screen to restored or initial local state;
- whether an app-owned splash is required, its product purpose, completion condition, and reduced-motion behavior;
- any launch or splash artwork that belongs in `asset-manifest.md`.

The system launch screen should be nearly identical to the first real frame. Prefer a solid background or minimal structural shapes. Avoid text because the static screen cannot localize it. Do not use a logo or branding unless it is also a fixed part of the first real screen.

## Implementation

Implement the launch experience during Core so the user reviews it with the main navigation and first screen. A storyboard launch screen uses only supported UIKit objects, one root view or view controller, Auto Layout and size classes. It must not contain custom classes, outlets, actions, runtime attributes, network data, SwiftData reads, animation, or executable logic.

The first app-owned frame must replace the launch screen without a mismatched flash, geometry jump, duplicate logo, blank frame, or theme change. Load or restore local data in the app, not in the launch screen. Never add a timer or delay merely to keep branding visible.

If the contract requires a splash screen, implement it as a normal app screen after system launch. It may contain localized text, animation, or approved artwork, but it must not simulate launch progress, hide avoidable startup work, or block the primary task longer than its real completion condition. Respect Reduce Motion and provide an immediate continuation when no work is required.

When final splash artwork is a product asset, Core establishes and reviews the layout and transition; Stage 6 produces and integrates the approved asset; Hardening repeats launch checks with the final artwork.

## Feedback and verification

The Core review includes a clean cold-launch capture from app icon tap through the first interactive frame and, when applicable, through the app-owned splash. The master shows the actual transition to the user and returns feedback to the same implementation owner. `CORE UI APPROVED` covers the launch direction, but final acceptance uses the integrated release candidate.

Hardening and acceptance verify:

- clean install and returning-user cold launches;
- immediate replacement with the correct initial or restored screen;
- primary and compact devices, supported orientations, light and dark appearance, and declared iPad layouts;
- no stale cached launch image after launch-screen changes;
- no text clipping, blank frame, visual flash, layout jump, artificial delay, or network dependency;
- final approved artwork, accessibility, and Reduce Motion for an app-owned splash;
- launch timing and evidence tied to the exact Release revision.

If the environment cannot reliably expose the system launch screen because of cached snapshots or tooling limits, record the affected check as `UNVERIFIED`; do not substitute a still design mockup for the real transition.

## Platform sources

- [Apple: Specifying your app's launch screen](https://developer.apple.com/documentation/xcode/specifying-your-apps-launch-screen)
- [Apple Human Interface Guidelines: Launching](https://developer.apple.com/design/human-interface-guidelines/launching)
- [Apple: Debugging your app's launch screen](https://developer.apple.com/documentation/technotes/tn3118-debugging-your-apps-launch-screen)

