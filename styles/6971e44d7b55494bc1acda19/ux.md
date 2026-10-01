# Overview

Airba fresh is a dense grocery marketplace organized around delivery address, promotions, categories, home delivery, catalog, cart, and profile.

# Navigation

Home, Catalog, At Home, Cart, and Profile remain in primary navigation. Search, barcode scan, lists, and support stay . Cart explicitly switches between fast At Home delivery and standard fresh delivery.

# Core Flows

## Entry and home

1. Choose language and authenticate by phone.
2. Set the delivery address.
3. Browse bonuses, achievements, services, discounts, category shortcuts, and promotional product rows.

## Search and catalog

1. Use text or barcode search, browse category items, open a product for nutrition and tags, then add it through a persistent add action.

## Cart and order

1. Choose delivery service.
2. Review items, weight, quantity, discounts, and free-delivery progress.
3. Enter address, delivery window, substitutions, payment, and contact details.
4. Confirm through the checkout action.

## Profile and empty states

1. Profile contains QR bonuses, promo codes, personal data, lists, order history, addresses, and reviews. Empty search, promo, list, and cart states use the avocado character with one recovery action.

# Interaction Patterns

- Keep address and delivery timing visible before browsing.
- Attach discount, rating, bonus, and unit-price context to each product.
- Use illustrated empty states to direct recovery.

# System Access Timing

- Camera or Photos access follows the user choosing the documented capture, scan, or photo action. Denial recovery was not documented.

# Known Gaps

- Permission-denial recovery and unobserved secondary flows were not documented.
