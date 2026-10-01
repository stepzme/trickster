# Overview

Vkusno I tochka connects loyalty, promotions, menu browsing, fulfillment selection, product customization, checkout, and live order follow-up. The user can move between discovery and ordering without losing the selected restaurant, delivery address, cart, or active order context.

# Navigation

Five persistent destinations provide access to Home, Promotions, Menu, Map, and More. Home links to loyalty actions, offers, referrals, and mobile ordering. Menu owns fulfillment mode, restaurant or address context, category browsing, product selection, and cart entry. More provides profile, city, order history, referral, support, feedback, and app information.

Product details and order details are self-contained tasks that can be dismissed back to their originating context. Restaurant and address selection refine the current order context. Checkout and payment proceed as focused tasks, while an active order remains reachable from Home and Menu after the user resumes browsing.

# Core Flows

## Sign in and verify the phone number

1. The user chooses to enter the profile and provides a phone number.
2. The app sends a verification code and accepts the code through the numeric input.
3. If the code has not arrived, the app exposes resend when the waiting period ends.
4. Successful verification returns the user to the signed-in product context; an invalid or incomplete code remains available for correction.

## Choose fulfillment context

1. The user chooses ordering in a restaurant or delivery.
2. For restaurant ordering, the user selects a restaurant; for delivery, the user selects or confirms an address.
3. The app reports availability and any restrictions associated with the chosen context.
4. The confirmed context becomes the basis for menu availability, cart rules, and checkout until the user changes it.

## Browse and redeem a promotion

1. The user opens Promotions and can enter a promo code or choose an offer group.
2. The user opens an offer and reviews eligibility, validity, participating locations, and redemption choices.
3. The user selects QR redemption or continues into mobile ordering when that option is available.
4. If location or account requirements are not met, the app retains the offer and directs the user to resolve the missing condition.

## Customize a product and add it to the cart

1. The user browses categories and opens a product or combo.
2. The app presents availability, included items, selectable options, additions, and removals.
3. The user changes options and confirms each required choice.
4. The user sets quantity and adds the configured product.
5. The cart reflects the exact configuration and allows it to be reviewed or changed.

## Complete a mobile order

1. The user reviews cart items, configuration, quantity, fees, recommendations, minimum-order requirements, and total.
2. The user confirms or changes fulfillment details and chooses an available receiving option.
3. The app requests confirmation before applying the selected restaurant or other consequential context.
4. The user selects payment and starts payment.
5. The app reports loading or failure without discarding the order, then confirms successful creation when payment completes.

## Follow an active order

1. The user opens the active-order summary from browsing or order history.
2. The app presents the current status, order identifier, location, time, fulfillment details, and relevant instructions.
3. When required, the user acknowledges receipt or confirms a real-world milestone.
4. The updated status remains available until the order is complete, after which the order can be reviewed from history.

# Interaction Patterns

Fulfillment context is persistent and governs downstream availability. Changing it can require confirmation because it may affect the menu or cart. Category and offer selection update the current list without starting a new navigation stack.

Product customization uses explicit selected and unselected states, preserves completed choices between related option steps, and prevents confirmation when a required choice is missing. Cart quantity and total respond to changes immediately. Minimum-order and unavailable-product feedback remain attached to the action they block.

Sheets close back to the originating menu, promotion, or order state. Back cancels an unfinished focused step without erasing previously confirmed context. Verification and payment failures allow correction or retry. Successful order creation exposes a persistent active-order entry so the user can browse elsewhere and return to status.
