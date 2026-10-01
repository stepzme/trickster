# Overview

WindHub is a marine planning tool combining weather maps, dense forecast tables, fishing intelligence, route planning, favorites, and account settings.

# Navigation

- A five-item primary navigation switches between Weather, Fishing, Route, Favorites, and Menu.
- Weather and Fishing share a map context; selecting a location opens its forecast.
- Route planning turns the map into a waypoint editor with forecast timeline and GPX actions.

# Core Flows

## Inspect marine weather

1. Find or select a point on the map.
2. Choose layer and weather model.
3. Expand the forecast sheet to compare wind, gust, temperature, swell, tide, and warnings by time.

## Plan a route

1. Open Route and add waypoints by tap-and-hold.
2. Adjust route settings and inspect weather along the path.
3. Save, share, or export the route.

## Prepare for fishing

1. Open Fishing and select a spot.
2. Review local species and bite or weather conditions.
3. Save the point to Favorites for later use.

# Interaction Patterns

- Map, legend, model, and location controls remain visible while data sheets expand from below.
- Forecast tables use colored cells and arrows for fast comparison across hours.
- Onboarding progressively asks navigation and fishing preferences before explaining forecast value.

# System Access Timing

No system-access request timing or denial recovery was documented in the reviewed source.

# Known Gaps

- Permission-denial recovery and unobserved secondary flows were not documented.
