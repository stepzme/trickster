# Overview

Drivee supports negotiated-price rides, live driver coordination, safety, courier ordering, and a separate driver or courier account mode.

# Navigation

The map remains the spatial anchor. A progressive bottom sheet handles ride type, route, price, search, live status, and completion; menu exposes profile, payment, and history.

# Core Flows

## Book a ride

1. Confirm pickup and enter destination.
2. Choose ride type and review route.
3. Propose or adjust a price.
4. Search for drivers and accept the match.
5. Follow arrival and live trip, then rate completion.

## Order a courier

1. Switch to Courier.
2. Enter sender, recipient, phone, and delivery details.
3. Set door-to-door preference and price.
4. Review courier offers and accept one.
5. Follow pickup and completion.

# Interaction Patterns

- Keep map, fare, ETA, and status synchronized.
- Preserve route data when changing service type.
- Warn when the proposed price may delay matching.
- Keep safety and driver contact available during a ride.
- Confirm cancellation and explain its consequence.

# System Access Timing

No system-access timing or denial-recovery path was documented in the reviewed source.
