# Overview

Lamoda supports discovery, catalog search, filtering, product evaluation, favorites, cart management, checkout, and post-purchase account tasks. Browsing actions preserve the user's current audience, query, filters, and list position; consequential actions expose their result before the user leaves the task.

# Navigation

Five persistent destinations provide access to Home, Catalog, Cart, Favorites, and Account. Home and Catalog also expose audience selection and search. Articles, collections, product details, reviews, size guidance, checkout, orders, and account settings are drill-down destinations that return to their originating context.

Filters use a focused task that can be applied or closed. Delivery conditions and supporting explanations can open without replacing the underlying cart or product context. Checkout advances through delivery, recipient, and payment decisions while retaining completed information when the user moves backward.

# Core Flows

## Search, filter, and evaluate a product

1. The user opens search from discovery or catalog and enters a product, brand, or article query.
2. The app offers query suggestions and then displays matching products.
3. The user opens filters, changes one or more criteria, and applies or clears them.
4. The results update while the query and applied criteria remain available for revision.
5. The user opens a product and reviews images, rating, details, available sizes, related products, and outfit suggestions.

## Select a product and add it to the cart

1. The user opens a product and chooses an available size.
2. The app reflects the selected size and keeps stock information associated with that choice.
3. The user adds the product to the cart.
4. The app updates cart state and allows the user to continue browsing or open the cart.

## Save a favorite

1. The user activates the favorite action from a product list or product detail.
2. If the user is signed in, the app updates the item's saved state in context.
3. If the user is not signed in, the app offers authentication without losing the current item or discovery context.
4. After authentication or dismissal, the user returns to the originating content.

## Review the cart and place an order

1. The user reviews selected items, availability, quantity, promotional input, optional payment benefits, and the order total.
2. The user can change quantity, remove an item, move it to favorites, or inspect delivery conditions; the cart recalculates after each change.
3. The user starts checkout and chooses a city, delivery method, and available date or location.
4. The user enters recipient details and resolves any inline validation feedback.
5. The user selects payment and confirms the order.
6. The app reports successful placement and provides access to the resulting order.

## Manage an existing order

1. The user opens Account and selects an order.
2. The app presents the current order state and the actions available for that state.
3. The user opens pickup details, requests an allowed change, starts a return, or reviews products from the order.
4. The app confirms the outcome locally and returns to the updated order when the task is complete.

# Interaction Patterns

Search suggestions respond to the current query. Applied filters remain editable and can be removed individually or reset together. Product selection is reversible until checkout confirmation, and cart totals update after quantity or item changes.

Supporting information opens without erasing the underlying task. Authentication requests preserve the attempted favorite or account destination. Validation stays attached to the affected field, stock messaging stays attached to the affected item, and unavailable choices cannot be confirmed.

Back cancels an unfinished drill-down or returns to the previous context; close dismisses self-contained explanations or completion states. Successful order placement provides an explicit result and a direct route to orders. Failures and incomplete fields keep the user's entered data available for correction or retry.
