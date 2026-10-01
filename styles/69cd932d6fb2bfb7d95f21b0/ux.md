# Overview

WB Taxi is a map-first ride service built around selecting pickup and destination, choosing a class, following driver search, and managing trips or payment from Profile.

# Navigation

- The map is the primary workspace; pickup, destination, class, and order controls rise in modals.
- Profile opens as a simple service list for support, history, payments, settings, and app information.
- The active-trip sheet replaces discovery controls with driver-search, cancellation, and ride status.

# Core Flows

## Request a ride

1. Confirm the pickup pin on the map and enter the destination.
2. Compare Economy and Comfort, review route details, and adjust payment or driver note.
3. Place the order and follow the driver-search state.

## Adjust or cancel

1. Reopen pickup, destination, payment, or note from the trip sheet.
2. Apply the change while the route context remains visible.
3. Cancel through the explicit trip action when necessary.

## Manage the account

1. Open Profile from the map.
2. Review ride history, payment methods, settings, or app information.
3. Add or remove a card, contact support, or delete the profile through its dedicated flow.

# Interaction Patterns

The sampled flows use direct actions, explicit completion, and return to the current context. No additional repeated interaction behavior was documented.

# System Access Timing

No system-access request timing or denial recovery was documented in the reviewed source.
