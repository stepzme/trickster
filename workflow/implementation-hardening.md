# Stage 6. Hardening

## Goal

Complete the real-world state matrix and make the approved product resilient, accessible, and verifiable before visual assets are finalized.

## Required work

For every applicable product and capability scenario, implement and exercise:

- loading, empty, error, and offline states where data depends on a network;
- invalid input, cancellation, retry, repeated actions, and duplicate prevention;
- permission `notDetermined`, authorized, denied, restricted, and framework-specific states;
- unavailable hardware, missing peripheral, disconnected service, unsupported device, and missing account states;
- persistence through backgrounding and restart;
- compact supported iPhone layout and enlarged text;
- VoiceOver labels, order, and non-color-only meaning;
- declared locales, themes, orientations, and other supported environments;
- Reduce Motion where significant animation exists.

Do not add network states to a local-only feature or invent framework states that do not exist. Required real-device or real-service checks that cannot run remain `UNVERIFIED`, never `N/A` or simulated evidence.

## Handoff

Build and run focused checks. Return the revision, completed state matrix, commands, evidence, known defects, and every `UNVERIFIED` device or service requirement. The master verifies that Hardening is complete before starting product-asset production and release-candidate integration.

## Preview on request

At the user's request, show any hardened state in Simulator using the exact current revision. Label it `PREVIEW`; record the environment and distinguish simulated permission or error setup from physical-device acceptance evidence.
