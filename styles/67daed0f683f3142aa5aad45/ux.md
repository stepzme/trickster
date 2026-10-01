# Overview

Yandex Travel moves from broad discovery into a focused search, comparison, booking, payment, and trip-management sequence. The user can refine or back out without losing the current destination, dates, guests, filters, or selected property. Consequential actions expose terms before commitment and return an explicit success or retry state.

# Navigation

- Home is the root context for profile, saved items, discovery content, and search; focused tasks return to that context.
- Search begins with a product-mode choice, then uses focused destination, date, and guest steps before opening results.
- Results preserve the search summary while filters, sorting, and map view refine the same result set.
- A property opens as a drill-down from results; room choice, booking details, payment, and confirmation continue from that property context.
- Share, favorite, review, photo, and nearby-place actions branch from detail and return to it.
- Confirmed bookings are available from the trip area; a trip can open booking detail, date change, cancellation, room detail, local activities, or support.
- Close exits self-contained tasks; back returns to the previous level and preserves entered state.

# Core Flows

## Complete onboarding and account entry

1. The app introduces optional tracking or notification value and allows the user to continue or decline.
2. When permission is requested, iOS presents the system dialog and returns the user to the app regardless of the choice.
3. The user can open profile and start account sign-in.
4. Choosing sign-in hands the task to Yandex ID, where the user can enter a phone or email account or create an ID; declining leaves browsing available.

## Search for a hotel

1. The user opens search, chooses the relevant travel mode, and selects a destination from recent, nearby, regional, or typed suggestions.
2. The user chooses dates and adjusts adult or child guest counts.
3. Search opens a result set that retains destination, dates, and guests in its summary.
4. The user can return to any earlier input without discarding the other completed values.

## Refine and compare results

1. The user changes sort order, price, payment timing, amenities, rating, or other filters.
2. Selection feedback updates within the filter task, and Apply commits the current combination to results.
3. The user reviews results in the list or opens the map entry point.
4. Opening a property and returning restores the active search and filters.

## Review a property and choose a room

1. The user opens a property and reviews its location, dates, guests, amenities, rating, reviews, photos, and available price.
2. The user may favorite or share it, inspect reviews or nearby places, or continue to room selection.
3. The user compares room and payment options, including included services and cancellation terms.
4. Selecting an option opens booking details with the chosen property, room, dates, guests, and price preserved.

## Book and pay

1. The user enters guest details and optional comments, then chooses the available payment timing or promo-code action.
2. The app keeps the total, cancellation terms, and payment consequence visible before commitment.
3. The user submits the booking and, when required, completes the native payment handoff.
4. Success shows the payment schedule and booking summary; failure keeps the booking context and offers a direct retry.

## Continue from booking confirmation

1. The user reviews the confirmed booking, dates, address, and next payment or preparation information.
2. The user can add the stay to Calendar; iOS asks for permission before the event is created.
3. The user can continue to trips or contact support without returning through the payment steps.
4. Returning later opens the stored trip and its booking details.

## Use an active trip

1. The user opens a trip and sees the booking, weather, map, events, excursions, and nearby activities for the destination.
2. The user opens booking detail, room detail, a local item, or a supporting service.
3. A date change or cancellation presents its own review and confirmation path.
4. Closing or returning restores the trip context.

# Interaction Patterns

- Search and booking are progressive: each step carries forward completed destination, date, guest, room, price, and payment choices.
- Filters and selection controls update locally; only Apply commits a multi-filter sheet.
- Favorite, review reaction, list membership, and expandable information show immediate local feedback.
- Consequential booking, payment, date-change, and cancellation actions require an explicit review or confirmation step.
- Loading keeps the current task visible. An error preserves entered data and provides retry instead of sending the user to the beginning.
- Native permission and payment interfaces are system-owned transitions and return to the pending app task.
- Back cancels only the current unfinished level; close exits a self-contained flow; confirmation provides a forward destination instead of relying on repeated back navigation.
