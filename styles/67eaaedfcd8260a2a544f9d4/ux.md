# Overview

Sutochno supports discovery, comparison, booking, property communication, reservation management, favorites, and account settings. Tasks move from a broad top-level destination into a focused screen or sheet, preserve the selected stay context, and expose the consequential decision before it is applied.

# Navigation

Five persistent destinations provide access to search, favorites, reservations, messages, and profile. Search can continue into suggestions, dates, guests, filters, a map, a result list, and property detail. Property detail and booking are drill-down tasks that return to the prior result context.

Reservations and messages link to the same booking context from different starting points. Booking details provide contact, support, calendar, and cancellation branches. Profile owns account data, bonuses, promo codes, settings, invitations, support, and sign-out. Bottom sheets refine or confirm the current task; system permission, share, calendar, and keyboard interfaces return to the pending app state.

# Core Flows

## Find accommodation

1. The user opens search and chooses a destination from current location, suggestions, or typed results.
2. The user selects dates and guest composition, then starts the search.
3. The user reviews results in a list or on a map and can change sorting or filters without restarting the query.
4. Selecting a result opens its property detail while back navigation returns to the same result context.

## Review a property and its feedback

1. The user opens a property and reviews its gallery, summary, stay facts, description, facilities, host information, reviews, and rules.
2. The user can expand long content, open all facilities or reviews, and inspect review details.
3. Favorite, share, and booking actions update or continue from the property without losing the selected dates and guests.

## Book and pay for a stay

1. The user starts booking from a property and, when required, verifies a phone number.
2. The user confirms personal data, dates, guests, stay conditions, promo code or bonus use, and the cost breakdown.
3. The app keeps prepayment and later payment explicit before the user submits the payment.
4. Submission shows progress and then either a booking result with next actions or a recoverable state that retains the order context.

## Communicate about a booking

1. The user opens a conversation from Messages, booking details, or the property contact action.
2. The conversation retains the related stay and payment status and allows the user to send a message when messaging is available.
3. Service messages can explain a missed payment or changed state and offer the next applicable action.
4. Returning leaves the conversation in the booking's message list with unread and status feedback updated.

## Manage or cancel a reservation

1. The user opens a reservation and reviews property details, host contact, support options, booking number, and cancellation terms.
2. The user may add the stay to Calendar, call or message the host, contact support, or begin cancellation.
3. Cancellation asks for a reason and may offer support or a change request before the destructive action is confirmed.
4. Completion presents the cancellation result, refund or balance information, and available recovery actions.

## Restore a recent search from favorites

1. The user opens Favorites and selects a saved destination or property group.
2. When current availability needs a query, the app offers the recent dates and guests as a recoverable choice.
3. Applying the previous conditions resumes discovery; declining keeps the user in Favorites without changing the current search.

## Update profile and account settings

1. The user opens Profile and chooses personal data, bonuses, promo code, settings, invitations, support, or sign-out.
2. Editing or settings tasks collect the changed value and require an explicit apply action where the change is not immediate.
3. Destructive account or sign-out actions use confirmation and explain their consequence before completion.

# Interaction Patterns

Search parameters remain summarized while the user moves between map, results, filters, and property detail. Sheets are used for bounded choices such as sorting, host contacts, date values, cancellation warnings, and alternative actions. Back dismisses an unfinished drill-down; close dismisses a self-contained sheet; a persistent action continues the current booking or confirmation task.

Feedback is local and stateful: selected controls change immediately, counts update with filters, disabled submission explains incomplete input through its state, loading replaces the current action, and success or cancellation becomes a dedicated result with next steps. Errors, missed payment, and unavailable messaging preserve the associated booking information and offer retry, support, or another valid route. System permissions can be declined without blocking unrelated browsing.
