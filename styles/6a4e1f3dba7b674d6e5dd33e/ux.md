# Overview

Magnum GO is a grocery-delivery marketplace spanning catalog discovery, filtering, product selection, favorites, cart, order history, and delivery preferences.

# Navigation

Five destinations connect Catalog, Orders, Favorites, Profile, and Cart. Search, address, and delivery window stay in the current context of catalog context.

# Core Flows

## Build a grocery basket

1. Confirm address and delivery window.
2. Browse campaign banners and product categories.
3. Filter a product catalog and add items.
4. Review quantities, total, packaging, and suggested extras.

## Manage an order

1. Submit the cart through the persistent magenta action.
2. Review collection status and delivery window in Orders.
3. Revisit favorites or catalog for future purchases.
4. Manage addresses, payment, language, and support in Profile.

# Interaction Patterns

- Magenta carries brand, price emphasis, and purchase actions.
- Quantity changes update the current product and cart totals immediately.
- Empty states remain typographic with a direct recovery action.

# System Access Timing

No system-access timing or denial-recovery behavior was documented in the reviewed source.

# Known Gaps

System-permission denial paths, interrupted flows, and recovery behavior not described above were not available in the reviewed source.
