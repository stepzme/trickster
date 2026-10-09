# iOS build and verification environment

## One-time machine setup

macOS, a complete Xcode installation, an iOS Simulator runtime, and at least one suitable iPhone Simulator are required. Also verify a compact supported size. Use a physical iPhone for capability behavior the Simulator cannot reproduce, especially camera capture and final device-only checks.

Initial diagnostics:

```sh
xcode-select -p
xcodebuild -version
xcrun simctl list runtimes
xcrun simctl list devices available
```

An empty device list does not by itself prove that no runtime is installed: check both lists. If a runtime is missing, install it through Xcode's component settings. Then create the required device in the Devices and Simulators window. Section names may vary by Xcode version.

A CoreSimulatorService connection error inside a sandbox does not prove that Xcode is broken. When environment policy permits, repeat diagnostics with the necessary access; do not delete devices or reset user data to resolve the error.

## Harness capabilities

The agent needs real means to run Xcode commands; install and launch through `simctl` or an appropriate connector; interact with native UI through an available tool or XCTest UI tests; and capture and view images.

Ordinary browser automation cannot interact with native Simulator. Screenshots from `simctl` alone do not provide taps or text input. Before a pilot, test these capabilities on an actual running screen. If a tool is missing, identify the specific unavailable check.

## For each project

Locate the actual `.xcodeproj` or `.xcworkspace`, shared scheme, and bundle ID. Retrieve available destinations and record the selected UDID. Construct the `xcodebuild` command for the project, preserving the exit code and full log; use `pipefail` for pipelines with `tee`.

Perform build, installation, launch, and testing sequentially with one Simulator owner. Do not use the ambiguous `booted` destination when multiple devices are running. During Design and after every Dev block, run the exact current build and show it to the user. Store review evidence in the run artifact directory. All functional code changes must finish before Polish evidence is recorded; any later publication bundle change repeats the affected checks.

For every screenshot, record the screen, state, device/OS, locale, theme, text size, data, and revision. For launch verification, capture a clean cold-launch sequence or video from app icon tap through the first interactive frame; a still launch design is insufficient. Verify scenarios on the primary and compact supported configurations, including enlarged text. Verify other devices/locales/themes according to declared support.

During Publish, verify the final app icon on an installed current build, not only inside the asset catalog. Capture store-screenshot source screens from the polished revision and link them to the run ID. If icon integration changes the bundle, record the new revision and repeat the affected Polish checks.

For each capability decision in the approved Research, record whether Simulator, a physical device, or an Apple system service is required. If a device or service is unavailable, state the missing check plainly; do not substitute a demo and claim it was real.

Use the simplest storage that satisfies the approved product. Inspect the final configuration to ensure mock behavior matches the approved Research.

## Launch and splash

Every app provides a static system launch screen while the process starts. It is not a branded splash, onboarding, loading view, or place for dynamic behavior. An optional splash is an ordinary app-owned screen shown afterward only when the approved product gives it a real purpose.

During Design, define:

- the first real screen for a fresh install and a returning user;
- `UILaunchScreen` or `LaunchScreen.storyboard` as the system mechanism;
- the background, safe-area structure, and any static element shared with the first real frame;
- light and dark appearance, supported orientations, primary and compact devices, and declared iPad behavior;
- the transition to the initial or restored local state;
- whether an app-owned splash is required, its purpose, completion condition, artwork, and reduced-motion behavior.

The system launch screen should be nearly identical to the first real frame. Prefer a solid background or minimal structural shapes. Avoid text because the static screen cannot localize it. Use a logo only when it is also a fixed part of the first real screen.

A storyboard launch screen uses supported UIKit objects, one root view or view controller, Auto Layout, and size classes. It contains no custom classes, outlets, actions, runtime attributes, data reads, animation, or executable logic. Load and restore data in the app, not in the launch screen.

The first app-owned frame must replace the system launch screen without a mismatched flash, geometry jump, duplicate logo, blank frame, or theme change. Never add a timer merely to keep branding visible. An app-owned splash may contain localized text, animation, or approved artwork, but must not simulate progress, hide avoidable startup work, or delay the primary task beyond its real completion condition. Respect Reduce Motion and allow immediate continuation when no work is required.

Design review includes a clean cold launch from app-icon tap through the first interactive frame and any app-owned splash. Polish repeats the check on the completed app and verifies:

- fresh-install and returning-user cold launches;
- the correct initial or restored screen;
- primary and compact devices, supported orientations, appearances, and declared iPad layouts;
- no stale cached launch image, clipping, blank frame, visual flash, layout jump, artificial delay, or network dependency;
- accessibility and Reduce Motion for an app-owned splash;
- launch evidence tied to the exact reviewed revision.

Publish may add final icon or splash artwork only after Polish approval. If that changes the app bundle or launch experience, rerun the affected Polish checks. If cached snapshots or tooling limits prevent reliable launch inspection, record the check as unavailable; a still mockup is not a substitute.

## Sources

- [Apple: Running your app](https://developer.apple.com/documentation/Xcode/running-your-app-on-simulated-or-physical-devices).
- [Apple: Performing accessibility audits](https://developer.apple.com/documentation/accessibility/performing-accessibility-audits-for-your-app).
- [Apple: Testing a release build](https://developer.apple.com/documentation/Xcode/testing-a-release-build).
- [Apple: App icons](https://developer.apple.com/design/human-interface-guidelines/app-icons).
- [Apple: Screenshot specifications](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications).
- [Apple: Specifying your app's launch screen](https://developer.apple.com/documentation/xcode/specifying-your-apps-launch-screen).
- [Apple Human Interface Guidelines: Launching](https://developer.apple.com/design/human-interface-guidelines/launching).
- [Apple: Debugging your app's launch screen](https://developer.apple.com/documentation/technotes/tn3118-debugging-your-apps-launch-screen).
