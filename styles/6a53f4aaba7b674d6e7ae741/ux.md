# Overview

Samokat supports rapid grocery and goods discovery, search, favorites, repeat ordering, recipes, cart, checkout, delivery tracking, and account management.

# Navigation

- Home exposes Catalog, Discounts, New, Ordered Before, and Saved as immediate shortcuts.
- Search and category exploration lead into the same product catalog and product detail model.
- Cart, checkout, and tracking become focused layers with a persistent next action.

# Core Flows

## Find and order

1. Browse a collection, catalog category, or search result.
2. Add directly from the catalog or open a product for details.
3. Adjust quantity and review the cart.
4. Confirm address, delivery preferences, discount, and payment.
5. Track assembly and delivery, then review the order in history.

## Repeat or plan

1. Open Ordered Before, Favorites, or a recipe.
2. Reuse a previous basket or add a prepared recipe set.
3. Replace unavailable items or adjust quantities before checkout.

## Manage account

1. Open Profile to review order history and recommendations.
2. Manage support, settings, addresses, payment methods, and legal information.

# Interaction Patterns

- Direct add becomes a quantity control after selection.
- Search, category filters, and curated shelves converge on one assortment model.
- Checkout groups decisions and keeps the payment action available.
- Tracking preserves access to change, contact, cancel, and item summary.
- Toasts confirm lightweight state changes without leaving the catalog.

# System Access Timing

No system-access timing or denial-recovery behavior was documented in the reviewed source.

# Known Gaps

System-permission denial paths, interrupted flows, and recovery behavior not described above were not available in the reviewed source.
