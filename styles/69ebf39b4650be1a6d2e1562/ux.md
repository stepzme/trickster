# Overview

2GIS keeps the map as the persistent workspace for discovery, place detail, routes, navigation, transit, friends, weather, traffic, and city recommendations. Sheets rise from the map instead of replacing it.

# Navigation

Search, Trips, Navigator, Friends, and Tips form primary navigation. Map controls remain at the edges. A side menu contains offline maps, route search, geolocation sharing, favorites, settings, business tools, and feedback.

# Core Flows

## Search and place

1. Search by name, category, or voice.
2. Review results on the map and in a modals.
3. Open a place for overview, photos, entrances, floors, reviews, contacts, services, and offers.

## Routes and navigation

1. Set destination and refine the final point.
2. Compare car, transit, walking, taxi, cycling, and other modes with time and transfer context.
3. Start navigation while keeping maneuver, speed, incidents, parking, and remaining time visible.

## City context

1. Toggle traffic and weather, save places, browse city guides and Tips, or use Lenses for nearby context. Friends adds location sharing, statuses, reviews, and privacy controls.

# Interaction Patterns

- Keep map state visible beneath sheets.
- Separate travel modes as choices.
- Expose privacy choices before enabling friend location sharing.

# System Access Timing

- Location access follows the user choosing the documented current-location or sharing action. Denial recovery was not documented.

# Known Gaps

- Permission-denial recovery and unobserved secondary flows were not documented.
