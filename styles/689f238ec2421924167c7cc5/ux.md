# Overview

Anytime is a map-first car-sharing app. Onboarding handles eligibility and identity; the main product centers vehicle location, rental status, car controls, and a profile drawer.

# Navigation

The map is the home context. controls handle menu, refresh, filters, fuel, zoom, and location. Selecting or renting a car opens a bottom sheet while preserving map context.

# Core Flows

## Registration

1. Enter contact and invitation details.
2. Capture identity and driving documents.
3. Review service requirements and complete verification.
4. Land on the vehicle map.

## Finding a car

1. Use location, filters, zoom, and refresh to find vehicles. Select a marker to open vehicle details without losing the surrounding map.

## Active rental

1. The active-rental sheet shows model, plate, fuel/range, user rating, issue shortcuts, and Open / End rental. Opening the car provides immediate progress and confirmation.

## Profile

1. The side drawer groups trips, payment, tariffs, promo code, bonus purchase, service rules, support, and help while leaving a strip of map visible.

# Interaction Patterns

- Preserve map context through bottom sheets and drawers.
- Keep active-rental status persistent.
- Separate car controls from rental-ending action.
- Confirm remote commands with progress and completion states.
- Make identity capture instructions explicit.

# System Access Timing

No system-access timing or denial-recovery path was documented in the reviewed source.

# Known Gaps

Unobserved flows, denial paths, cancellation behavior, and recovery states remain unspecified.
