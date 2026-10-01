# Overview

BelkaCar guides a physical rental from eligibility and verification through car discovery, reservation, inspection, driving, pause, parking, completion, payment, and support.

# Navigation

The map is the home screen. tools handle radar, filters, zones, and guest mode; the hamburger opens account and support. The modals carries the live task.

# Core Flows

## Registration and verification

1. Collect phone, driver's license, passport, selfie, and payment method in a staged flow with clear verification dependencies.

## Reserve and inspect

1. Select a car and compare per-minute or daily tariff.
2. Reserve, navigate to the address, and open the vehicle.
3. Photograph damage, report problems, and verify documents before starting.

## Drive and finish

1. Active rental keeps route, time, current cost, pause, support, fuel, and car information visible. Completion checks parking zone, doors, lights, photos, and final cost before release.

## Account and support

1. Menu groups bonus balance, rating, trip history, payment methods, support, insurance, promo codes, FAQ, agreements, business, notifications, and account settings.

# Interaction Patterns

- Keep current cost and time persistent.
- Preserve map and valid zone visibility.
- Gate driving and completion on physical checklists.
- Separate pause from finish.
- Keep support available during every rental state.

# System Access Timing

- Camera or Photos access follows the user choosing the documented capture, scan, or photo action. Denial recovery was not documented.
