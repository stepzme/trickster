# Overview

Pyaterochka lets users browse loyalty content without signing in, discover products by category, search, or scan, build a cart, resolve delivery choices, and complete checkout. Shopping context persists across product detail and option selection. Authentication is requested when a gated loyalty or checkout action needs it, then returns the user to the pending task.

# Navigation

The observed primary navigation has four peer destinations: Home, Catalog, Contact us, and Profile. Catalog exposes delivery mode, address, search, scan, categories, favorites, and prior purchases. Product and order details are drill-down destinations. Cart is a focused task entered from shopping context and closed or completed independently.

Use Back for catalog and settings drill-downs, Close for cart or promotional overlays, and bottom sheets for reviewing changes without discarding the underlying cart. The adapted product should keep only its own peer destinations; these observed labels and counts are not mandatory architecture.

# Core Flows

## First launch and browse Home

1. The app opens Home and may request notification permission.
2. The user can browse stories, promotions, games, and coupon entry points without immediately signing in.
3. Selecting gated loyalty content asks for authorization; cancelling returns to the same Home or campaign context.

## Browse the catalog and choose fulfillment

1. The user opens Catalog and selects delivery or store pickup, then confirms an address or store when required.
2. The user browses campaign shortcuts, category groups, favorites, or prior purchases.
3. Opening a category or product preserves the route back to the same catalog context.

## Search and add an item

1. The user activates search, enters a query or uses barcode scanning, and reviews suggestions or results.
2. The user opens a product, reviews price, size, rating, details, and recommendations.
3. The user adds the item or changes its quantity; the app updates the cart while keeping the product and search context available.

## Configure and place an order

1. The user opens Cart, reviews items, quantities, address, cost breakdown, savings, and total.
2. The user chooses replacement preferences, enters a promo code, signs in if required, and selects an available payment method.
3. The user places the order, receives an explicit confirmation and delivery status, and may add eligible items before the displayed cutoff.

## Handle unavailable or changed items

1. Before checkout, the user chooses whether the store should call, replace in the app, omit, or replace without asking.
2. If quantities change, the app presents the affected items and recalculated total before commitment.
3. The user returns to the catalog to adjust the order or accepts the changes and continues from the same checkout stage.

## Open coupons or a game

1. The user enters a coupon or game destination from Home.
2. The app explains participation and requests authorization when prizes or personal coupons require an account.
3. Successful authorization resumes the selected destination; cancellation returns to the previous campaign or Home.

# Interaction Patterns

Catalog browsing uses progressive disclosure: categories and search lead to results, results lead to product detail, and detail exposes factual information and related products. Cart edits update immediately, while replacements, promo codes, payment, and final order placement use explicit selection and confirmation. A pending query, product, or cart should survive Back, sign-in, and option selection.

Feedback is attached to the action: the add control enters loading and then quantity state; totals and savings recalculate after cart or promo changes; unavailable items trigger a review sheet; payment selection returns to Cart; and order placement produces a confirmation with current delivery state. Disabled actions remain unavailable until their named requirement is resolved. Errors preserve entered data and offer retry or correction instead of restarting checkout.
