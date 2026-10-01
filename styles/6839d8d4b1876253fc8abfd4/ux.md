# Overview

MTS Urent is a map-first rental service for scooters, bikes, and power banks. It moves from phone onboarding to nearby-vehicle discovery, scanning, tariff choice, ride status, parking, and completion.

# Navigation

The live map is the home context. A scanner anchors the bottom center, with menu, location, layers, zoom, and vehicle markers surrounding it. Vehicle selection rises in a bottom sheet.

# Core Flows

## Find and start a ride

1. Grant location and notification access and confirm a phone number.
2. Inspect nearby vehicles and parking or restricted zones on the map.
3. Select a marker or scan a QR code.
4. Review battery, vehicle, tariff, and age requirements, then start the rental.

## End the ride

1. Navigate to an allowed parking area.
2. Confirm parking and complete any required photo proof.
3. Wait for the vehicle check and show cost or success feedback.

# Interaction Patterns

- The map remains visible beneath sheets so every decision retains spatial context.
