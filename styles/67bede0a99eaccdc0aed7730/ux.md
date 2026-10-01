# Overview

Yandex Market connects discovery, search, product evaluation, checkout, fulfillment, and account services. Browsing actions update the current context immediately; consequential order and payment actions proceed through review and confirmation. Search queries, filters, product position, and order context are retained when the user returns from a focused task.

# Navigation

Five persistent destinations provide access to the source app's top-level shopping areas. Search can begin from browsing and remains available through results. Product, seller, review, order, and account details open as drill-down destinations and return to their originating context.

Checkout is a focused task that can be closed before commitment. Order-specific actions open from the current order and return to that order. System keyboard, payment, and notification interactions hand control to iOS where appropriate, then resume the pending app task.

# Core Flows

## Start the app and reach discovery

1. The app launches and prepares the initial content state.
2. While data is loading, the interface preserves the expected content structure.
3. The discovery feed becomes available with account or location context restored.
4. The user can begin browsing or enter another top-level destination.

## Search and narrow results

1. The user activates search and enters a query.
2. The app offers recent queries, completions, and suggestions as input changes.
3. The user submits a query and receives results.
4. The user applies, changes, or removes filters and sorting; the result set updates without discarding the query.
5. Opening a result and returning restores the query and active refinements.

## Evaluate a product

1. The user opens a product from search, discovery, a recommendation, or an order-related context.
2. The user reviews media, price, variants, delivery, seller, and available offers.
3. The user can expand specifications, inspect reviews or questions, compare, save, share, or select an alternative offer.
4. Returning from a detail preserves the product context; choosing a purchase action advances to cart or checkout.

## Create an order

1. The user selects a product and starts checkout.
2. The app asks for the required delivery, recipient, promotion, payment, or installment choices.
3. The app updates discounts, charges, and total as choices change.
4. The user reviews the final order and commits payment.
5. The app presents an explicit order result and provides access to the created order.

## Track and receive an order

1. The user opens the current order from the account area, an order entry, or a status prompt.
2. The app shows the current fulfillment state and the actions relevant to that state.
3. When pickup is available, the user can access the pickup code or barcode and any allowed delivery or storage changes.
4. A requested change is confirmed or cancelled without losing the order context.
5. After delivery, the order exposes follow-up actions such as support, return, repeat purchase, or review.

## Manage profile and benefits

1. The user opens the account area and selects a benefit, promotion, order, purchase, return, review, or financial destination.
2. The app opens the selected destination with the relevant account context.
3. The user completes or cancels the task.
4. Returning restores the account area and reflects any completed change.

## Leave and manage a review

1. The user opens an eligible purchase or the reviews destination.
2. The app collects the requested rating and review content.
3. The user submits or cancels.
4. A submitted review appears in the user's review context and remains available for supported follow-up actions.

# Interaction Patterns

Search suggestions respond to input; filters, sorting, favorites, comparison, and cart state update in place. Long product and order pages use progressive disclosure so specifications, reviews, questions, financial details, and support remain available without forcing every branch into the primary path.

Consequential actions stage the choice, show the resulting price or order effect, and require commitment. Cancellation returns without applying the pending change. Feedback remains attached to the affected object: cart state belongs to a product, recalculation belongs to checkout, fulfillment belongs to an order, and submission state belongs to a review. Loading preserves context, errors should retain entered data, and retry should resume the failed step rather than restart discovery.
