# Stage 7. Hardening

## Goal

Complete the real-world state matrix against the final integrated UI and make the approved product resilient, accessible, and verifiable before acceptance.

## Required work

For every applicable product and capability scenario, implement and exercise:

- empty and local-storage error states; network states only where a system or public resource is intentionally used;
- invalid input, cancellation, retry, repeated actions, and duplicate prevention;
- permission `notDetermined`, authorized, denied, restricted, and framework-specific states;
- unavailable hardware, missing peripheral, disconnected service, unsupported device, and missing account states;
- persistence through backgrounding, force termination, cold launch, and restart;
- clean-install and returning-user cold launches from the system launch screen to the correct initial or restored frame;
- light and dark appearance, supported orientations and device sizes without a blank frame, stale launch image, visual flash, geometry jump, duplicate logo, or artificial delay;
- final artwork, localization, accessibility, and Reduce Motion for any app-owned splash;
- operation without a proprietary backend and with the network unavailable for the primary flow;
- SwiftData migration from every supported prior model version;
- missing, unreadable, orphaned, or partially written files and broken SwiftData file references;
- cancellation or failure during writes, available-storage failure where reproducible, and cleanup of files related to deleted records;
- Release configuration without runtime mocks, preview stores, debug endpoints, or fixture fallbacks;
- compact supported iPhone layout and enlarged text;
- VoiceOver labels, order, and non-color-only meaning;
- declared locales, themes, orientations, and other supported environments;
- Reduce Motion where significant animation exists;
- approved product assets and the applicable app icon on real screens, including their layout, crop, contrast, accessibility, themes, locales, and compact-size behavior.

Do not add network states to a local-only feature or invent framework states that do not exist. Required real-device or system-service checks that cannot run remain `UNVERIFIED`, never `N/A` or simulated evidence. The contracted CallKit `INTERFACE_ONLY` mode is verified as an honest interface boundary and does not require a calling service.

## Handoff

Build and run focused checks. Write and validate `handoffs/hardening.json`. Return its path, revision, local-data and migration evidence, completed state matrix, final-asset regression evidence, concise command results with full-log paths, known defects, and every `UNVERIFIED` device or system-service requirement. The master verifies that Hardening is complete before freezing the release candidate and retires the session.

## Preview on request

At the user's request, show any hardened state in Simulator using the exact current revision. Label it `PREVIEW`; record the environment and distinguish simulated permission or error setup from physical-device acceptance evidence.
