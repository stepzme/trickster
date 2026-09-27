# Overview

Wallet is a compact system utility for adding payment cards and collecting passes, tickets, keys, and merchant orders.

# Navigation

- The main screen is a layered card stack with quick access to Orders and Add.
- Add-card work moves through native sheets, camera capture, manual details, verification, and system alerts.
- Search appears inside the relevant collection rather than as a persistent global destination.

# Core Flows

## Explore supported items

1. Swipe between the Apple Pay and passes introduction cards.
2. Open a card to read the expanded explanation.
3. Follow Add or Get to begin collecting the relevant item.

## Add a payment card

1. Open Add and continue from the Apple Pay introduction.
2. Scan the card or enter cardholder, number, expiry date, and security code manually.
3. Review issuer support, verification, and progress feedback in the stacked sheet.

## Find collected content

1. Open Orders or another collection surface.
2. Use the inline search field.
3. Read an explicit empty or no-results state when nothing matches.

# Interaction Patterns

- Stacked sheets preserve context during scanning, entry, alerts, and verification.
- System blue links, native alerts, and grouped fields make sensitive setup familiar.
- The catalog contains 53 image screens but no flow sequences; navigation and step order are derived only from the available screen progression.
