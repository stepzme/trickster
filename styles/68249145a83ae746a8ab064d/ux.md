# Overview

Dodo Pizza connects delivery context, menu discovery, product configuration, cart, checkout, live order status, loyalty, and account tasks. Users can browse before committing, but availability, delivery time, and checkout depend on a confirmed address. The reusable behavior is a staged order that preserves selections across discovery, configuration, and checkout; the restaurant menu and loyalty program are source-specific.

# Navigation

The menu is the primary browsing context. Product families, categories, stories, and offers change or refine the current menu context. Product configuration is a focused task that returns to the menu or cart. Cart, profile, and the current order open as self-contained destinations with explicit close or back actions. Profile leads to loyalty, order history, saved delivery addresses, support, and profile editing. Order details can open from the current-order entry or order history and return to their originating context.

# Core Flows

## Establish delivery context

1. The user starts from the menu and opens the delivery-address task.
2. The user selects an existing address or supplies a new address and required details.
3. The app validates service availability and calculates the current delivery estimate.
4. The confirmed context updates menu availability and remains active while the user browses.

## Browse and configure a product

1. The user changes product family or category, opens a story or offer, or browses the current menu.
2. The user opens a product, combo, or half-and-half builder.
3. The user selects required options and may add or replace allowed components.
4. The preview, current selection, and price update after each choice.
5. The user adds the configured item and returns with the configuration preserved in the cart.

## Review the cart and complete checkout

1. The user opens the cart and reviews items, selected options, quantities, and current eligibility.
2. The user edits or removes items, adds recommendations, applies a promotion, or enters a promo code.
3. The app updates the subtotal, discounts, delivery charge, minimum-order state, and total.
4. The user confirms address, delivery time, and payment method.
5. The user submits payment and receives an explicit order result.

## Track an active order

1. The accepted order becomes available through the current-order entry and profile.
2. The app advances the order through accepted, cooking, and delivery states.
3. The user can open detail for the latest status and any available order-specific action.
4. Optional notifications, kitchen viewing, courier tipping, or support actions return to the same order.
5. Delivery completes the active task and enables follow-up feedback.

## Rate or review a completed order

1. The user opens the rating request from the completed order or menu status.
2. The user selects a score and may enter the additional task offered for that order.
3. The app keeps the rating as a draft until the user explicitly submits it.
4. After submission, the completed order reflects the saved feedback state.

## Use profile and loyalty

1. The user opens Profile and selects loyalty, orders, delivery addresses, support, or account editing.
2. The app opens the chosen destination with its current state.
3. The user applies an eligible promotion, reviews an order, changes a saved address, contacts support, or edits account data.
4. Returning restores the previous profile context and reflects completed changes.

# Interaction Patterns

Selections update in place and remain associated with the item being configured. Required choices prevent completion until resolved. Replacing an item, changing quantity, applying a promotion, or selecting fulfillment updates the affected item and totals without restarting checkout. Closing a focused task returns to the previous context; unfinished consequential changes should require an explicit cancel decision when loss is possible.

The app reports availability, minimum-order, accepted, cooking, delivery, completed, draft-rating, submitted-rating, loyalty, promotion, and validation states explicitly. Progress feedback belongs to the active order. Failures preserve the cart and entered checkout context and offer a retry or editable alternative. Optional engagement such as stories, missions, notifications, tipping, and kitchen viewing never blocks core ordering or order status.
