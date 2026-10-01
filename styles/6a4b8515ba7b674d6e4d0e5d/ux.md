# Overview

Green SM supports taxi discovery, address search, ride configuration, booking for self or another person, payment, active-trip safety, driver contact, rating, history, and support.

# Navigation

Primary navigation connects Home, History, Notifications, and Profile. Once booking starts, the booking context replaces global navigation.

# Core Flows

## Book and complete a ride

1. Search pickup and destination, choose a ride, payment and promotion, add notes or another passenger, request, follow driver arrival and route, then rate and optionally tip.

## Handle safety and support

1. Open the safety center or trip detail, share location or trip, contact the driver, use SOS when necessary, or cancel with an explicit reason.

# Interaction Patterns

The current decision lives in one bottom sheet, route state remains visible on the map, fare and payment persist across steps, and trip completion moves into structured illustrated feedback.

# System Access Timing

No system-access timing or denial-recovery behavior was documented in the reviewed source.

# Known Gaps

System-permission denial paths, interrupted flows, and recovery behavior not described above were not available in the reviewed source.
