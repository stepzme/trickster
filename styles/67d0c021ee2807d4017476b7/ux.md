# Overview

Yandex Weather answers the immediate question in the home context, then lets users move into longer forecasts, specialized risk information, or a time-based map. Place, selected condition, and time remain the organizing context. Reporting the observed weather is a short contribution flow that can acknowledge the report, ask for a correction, or unlock a reward.

# Navigation

The main forecast is the root context. Location search changes the active place without creating a separate permanent destination. Forecast rows, condition metrics, pollen information, and map actions open focused detail pages or dismissible reports, then return to the same place context.

Longer forecasts use back navigation. Specialized reports can be closed to the forecast that opened them. Map exploration keeps layer and time selection within the map task. System permission prompts return to the pending launch or forecast context after the user responds.

# Core Flows

## Complete first launch

1. The app opens and requests location access so it can choose an initial place.
2. After the place is available, the app requests notification permission for forecast updates.
3. When applicable, the app requests tracking permission and returns to the forecast after the response.
4. The user arrives at the current forecast with the active place explicit.

## Review current and extended forecast

1. The user confirms the active place and reads the current condition and near-term change.
2. The user browses hourly periods or adjacent condition metrics without leaving the main forecast.
3. The user continues through the narrative summary and multi-day forecast.
4. The user can open a longer or more detailed forecast and return to the same place context.

## Inspect a specialized risk report

1. The user opens a specialized condition such as pollen activity from the forecast.
2. The report presents the current assessment and lets the user change the relevant species or period.
3. The user can inspect the chart, calendar, map, symptom question, or explanatory disclosures.
4. Closing the report returns to the forecast without changing the active place.

## Explore weather on a map

1. The user opens the map from the active forecast.
2. The user selects a weather layer and moves through the available times.
3. The map updates to the selected layer and time while retaining the interpreted condition and geographic context.
4. The user returns to the forecast for the same place or closes the map task.

## Confirm or correct observed weather

1. The app asks whether the displayed current condition matches what the user observes.
2. If it matches, the user confirms and the app acknowledges the contribution in place.
3. If it does not match, the user chooses the observed condition from the offered alternatives.
4. The app acknowledges the report and returns to the updated forecast context.

## Claim and use a reporting reward

1. After enough weather reports, the app presents an unlocked umbrella reward.
2. The user reviews available and locked variants, chooses an available design, and claims it.
3. The forecast confirms that the umbrella can be changed from the map.
4. The user opens the map, inspects the active umbrella, and can choose another available variant.

# Interaction Patterns

Browsing changes the visible hour or metric while preserving place and current forecast context. Continuing through the forecast reveals increasingly detailed horizons. Focused reports use selectors, disclosure, and map exploration without turning each data view into a separate top-level destination.

Feedback is local and immediate: the selected period or layer updates its dependent data, a report answer becomes an acknowledgement, and a chosen reward reappears in its map context. Locked choices state what remains required. Dismissing a report or declining a system permission does not discard the rest of the forecast.

Location, notification, and tracking requests are system-owned. The app resumes from the response rather than imitating the system dialog. Maps synchronize layer, time, and interpreted condition; reports synchronize the active species or category across summaries, charts, calendars, and maps.
