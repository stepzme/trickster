# Overview

Yandex Pay combines daily account review, payments, transfers, savings, rewards, shopping offers, and transaction history. Users repeatedly move from a high-level balance or destination into a focused task, confirm the consequential step, receive an explicit result, and return with their previous context preserved. Authentication and sensitive account actions add verification without changing the product hierarchy.

# Navigation

Four persistent destinations provide access to the main account overview, stores, payments, and history. Profile is entered from the account control on the main destination. Account, card, savings, reward, and settings pages are drill-down destinations that return to their originating context.

Payment scanning is available directly from the payments destination and through the persistent payment action on the main destination. Focused payment and game tasks can be closed without stepping backward through every intermediate state. App-owned tasks may use a sheet when they refine the current context; system authentication is handed to the operating system and returns to the pending task.

# Core Flows

## Sign in and secure re-entry

1. The user selects an account, confirms the phone number, and enters the received code.
2. The app asks the user to create and repeat a local access code, then offers biometric entry.
3. Later launches request the access code or Face ID and continue to the existing account after successful verification; failure leaves an alternative method available.

## Pay by QR code

1. The user opens payment, scans a code, or selects an image containing a code.
2. The app resolves the merchant, amount, and available funding source before money is committed.
3. The user confirms payment, receives an explicit success result, and can return to the merchant or leave the task.

## Review and manage the main account

1. The user opens the main account from the overview and sees balance, available actions, benefits, and account status.
2. The user can top up, transfer, pay, inspect operations, or open card details and settings.
3. A completed change returns to the account with updated state; cancellation returns without applying the pending change.

## Create and manage savings

1. The user opens savings, reviews available products, and chooses an account or product type.
2. The app gathers the required choice or amount and asks for confirmation when the action changes money or account state.
3. The created or updated savings product appears in the savings overview, where it can be opened again for deposits, settings, documents, or closure.

## Browse stores and offers

1. The user opens stores, searches or chooses a promotion, category, or merchant.
2. The app reveals offer terms and a destination action while preserving the route back to the store feed.
3. The user follows the offer or returns to the previous feed position without restarting discovery.

## Review and filter history

1. The user opens history and narrows operations by period, type, card, or account.
2. The app updates summaries and the grouped operation list to match the active filters.
3. The user opens an operation for details, returns to the same filtered list, or resets filters to restore the full history.

## Change appearance

1. The user opens settings, chooses theme, and selects an available appearance.
2. The app applies the appearance across the current product while keeping semantic states and content unchanged.
3. The user can inspect the result immediately and return to settings or choose another appearance.

# Interaction Patterns

The product uses progressive disclosure: overview modules open focused account or feature pages, and those pages expose less frequent settings. Consequential actions are staged through review and confirmation; browsing, filtering, expansion, and theme selection can update immediately. A back action cancels an unfinished drill-down, while a close action exits self-contained full-screen tasks.

Feedback is local when possible: updated balances, selected filters, expanded groups, validation messages, and success states replace or update the relevant content. Failures preserve entered context and provide retry or an alternative path rather than returning to the start. Dismissible recommendations do not block core account access. Authentication resumes the task that requested it, and system-owned verification remains distinguishable from app-owned confirmation.
