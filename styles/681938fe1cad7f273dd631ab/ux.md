# Overview

Ozon supports repeated movement between discovery, search, product evaluation, cart, checkout, order tracking, and account activity. Users can enter a product from recommendations, search, or a campaign, inspect increasingly detailed information, and retain their shopping context while comparing or completing an order. The transferable behavior is progressive disclosure with preserved context; marketplace destinations and payment programs are source-specific.

# Navigation

Persistent primary navigation connects the main shopping and account areas during ordinary browsing. Search can be entered from discovery and product contexts and returns to the previous task without clearing the current query or results. Product, seller, review, question, order, and account details are drill-down destinations with back navigation. Identity collection and checkout are focused tasks with an explicit close path. Profile provides entry to orders, favorites, reviews, messages, lists, bonuses, and account details; an adapted product should expose only equivalent destinations that actually exist.

# Core Flows

## Find and evaluate a product

1. The user enters discovery or search and supplies or selects a query.
2. The user changes sort or filters and reviews the updated result set.
3. The user opens a product and inspects media, price conditions, delivery, seller, description, reviews, questions, or comparable offers.
4. The user favorites, compares, selects an offer, or adds the product to the cart.
5. Back navigation returns to the prior result context.

## Add a product and manage the cart

1. The user adds a product from a result or product detail.
2. The cart reflects the item and current fulfillment or promotion conditions.
3. The user selects items, changes quantity, removes an item, or saves it for later.
4. The total and eligibility state update after each change.
5. The user proceeds only with the currently selected eligible items.

## Complete checkout

1. The user reviews the selected items and starts checkout.
2. The app requests missing identity or contact information without discarding the order.
3. The user selects fulfillment, date, recipient, payment method, promo code, and available payment conditions.
4. The app shows the resulting items, discount, delivery charge, total, and final payment action.
5. After confirmation, the app reports success and creates an order that can be tracked.

## Track and manage an order

1. The user opens an active order from the account or current-order entry.
2. The app reports the current stage, expected date, fulfillment destination, and available actions.
3. The user can inspect details, ask a question, change an allowed setting, retry payment, or cancel when the state permits it.
4. Stage changes update the existing order rather than creating a separate task.
5. Completion or cancellation moves the order into history with outcome-specific follow-up actions.

## Use profile activity

1. The user enters Profile and chooses orders, favorites, reviews, messages, lists, bonuses, or personal details.
2. The selected destination opens with its current state and relevant actions.
3. The user completes a local task such as opening an order, adding a review, or changing account information.
4. Returning restores the previous profile or account context.

# Interaction Patterns

Search suggestions and results update from the current query. Filters, sort, selection, quantity, favorite, and payment choice provide immediate local feedback. Consequential actions stage the decision through cart, checkout summary, and final confirmation. The app keeps entered data and selected products when validation, payment, or fulfillment needs attention.

Availability, sale timing, stock, delivery, order stage, unpaid state, completion, and cancellation are explicit states rather than inferred from disabled actions. Recovery stays close to the affected task: retry payment, change the method, edit details, ask a question, or cancel when allowed. Success is acknowledged before the user returns to browsing or opens the created order.
