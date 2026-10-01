# Overview

Lenta combines grocery delivery, store shopping, loyalty, promotions, recipes, a dense product catalog, cart, checkout, and order tracking.

# Navigation

five persistent destinations cover Home, Catalog, loyalty Card, Cart, and Profile. Address and delivery mode anchor Home; search and QR access remain .

# Core Flows

## Shop groceries

1. Choose delivery or store mode and confirm address.
2. Browse promotions, repeat purchases, categories, or search.
3. Compare product cards and open nutrition, composition, reviews, and related goods.
4. Add products and adjust quantities in the cart.

## Complete an order

1. Meet the minimum and choose delivery details.
2. Set replacement and contact preferences for the picker.
3. Select payment and confirm.
4. Review the delivery window, address, and possible total adjustments.

# Interaction Patterns

- Checkout is a guided sequence with progress indicators and persistent Next actions.
- Empty, success, and campaign states provide contextual explanation.

# System Access Timing

No system-access request timing or denial recovery was documented in the reviewed source.

# Known Gaps

- Permission-denial recovery and unobserved secondary flows were not documented.
