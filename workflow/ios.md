# iOS build and verification environment

## One-time machine setup

macOS, a complete Xcode installation, an iOS Simulator runtime, and at least one suitable iPhone Simulator are required. The verification matrix also needs a compact supported size. Because every Trickster app includes the fixed capability set in `ios-capabilities.md`, final acceptance also requires access to a suitable physical iPhone for behavior that Simulator cannot reproduce, including real Bluetooth peripherals and camera input. Select versions and devices for the specific project and record them in `product.md`.

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

Perform build, installation, launch, and testing sequentially with one Simulator owner. Do not use the ambiguous `booted` destination when multiple devices are running. During Core, Full, and Hardening, run the current build in Simulator and show it when the user requests a `PREVIEW`; record that a preview is provisional and is not acceptance evidence. Store artifacts in a dedicated run-ID directory. All agents must finish code changes before final evidence is recorded.

For every screenshot, record the screen, state, device/OS, locale, theme, text size, data, and revision. Verify scenarios on the primary and compact supported configurations, including enlarged text. Verify other devices/locales/themes according to declared support.

Verify the app icon on the installed final build, not only inside the asset catalog. Capture the source product screens for the store screenshot set after app acceptance from the same final build and link them to the run ID.

For each mandatory iOS capability, record whether Simulator, a physical device, or a real external service is required. Exercise real Bluetooth, camera, biometric, audio, location, Photos, Contacts, Calendar, Speech, and CallKit behavior where the selected environment permits it. If required hardware or service is unavailable, mark the capability and AC-12 `UNVERIFIED`; do not use `N/A`, conceal the boundary, or substitute a demo for a real integration.

## Sources

- [Apple: Running your app](https://developer.apple.com/documentation/Xcode/running-your-app-on-simulated-or-physical-devices).
- [Apple: Performing accessibility audits](https://developer.apple.com/documentation/accessibility/performing-accessibility-audits-for-your-app).
- [Apple: Testing a release build](https://developer.apple.com/documentation/Xcode/testing-a-release-build).
- [Apple: App icons](https://developer.apple.com/design/human-interface-guidelines/app-icons).
- [Apple: Screenshot specifications](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications).
