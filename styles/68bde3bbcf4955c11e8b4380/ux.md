# Overview

Cofix Club joins loyalty, location, menu browsing, preorder, payment, and pickup state in a retail loop.

# Navigation

The primary navigation keeps Wallet, Location, and Menu for points available. Home modules deep-link into campaigns, preorder, menu, coupons, and history.

# Core Flows

## Preorder a drink

1. Choose preorder and confirm a venue.
2. Browse categories and product tiles.
3. Add an item and review count and price in the remains available action.
4. Enter payment details and confirm.
5. Show order number, readiness, and pickup confirmation.

## Use loyalty

1. Open the wallet and present the barcode.
2. Review points, cashback, coupons, and order history.
3. Choose a reward or points purchase.
4. Return to the wallet with updated state.

# Interaction Patterns

- Keep venue and pickup context visible during ordering.
- Maintain a persistent cart count and total.
- Show reward math directly.
- Confirm payment and pickup completion explicitly.

# System Access Timing

No system-access timing or denial-recovery path was documented in the reviewed source.

# Known Gaps

Unobserved flows, denial paths, cancellation behavior, and recovery states remain unspecified.
