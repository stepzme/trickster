# Overview

Citydrive moves users from map discovery to booking, inspection, active rental, and completion while keeping live cost and vehicle state visible.

# Navigation

The map and primary navigation anchor Carsharing, Long-term rental, and Menu. Focused modals handle the current vehicle and rental.

# Core Flows

## Rent a car

1. Find a car by map, filters, radar, number, or photo.
2. Review model, fuel, walk time, tariff, insurance, and zone.
3. Book and reach the car.
4. Inspect exterior, upload photos, verify documents, and open doors.
5. Drive while monitoring cost and door state.
6. Park in an allowed zone, close doors, end, and review the result.

# Interaction Patterns

- Show running cost throughout active rental.
- Require inspection before driving.
- Keep door lock state explicit.
- Warn before ending outside an allowed zone.
- Confirm tariff, debt, and payment state.

# System Access Timing

No system-access request timing or denial recovery was documented in the reviewed source.

# Known Gaps

- Permission-denial recovery and unobserved secondary flows were not documented.
