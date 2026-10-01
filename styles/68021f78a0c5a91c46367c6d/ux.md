# Overview

T-Bank exposes accounts and frequently repeated actions from the main destination, then moves consequential tasks into focused drill-downs. Users choose a target and source, enter or review the required data, confirm once, receive an explicit result, and return to updated account context. Browsing services and campaigns remains reversible and does not replace the payment or account hierarchy.

# Navigation

The observed primary navigation has five peer destinations: Main, Payments, City, Chat, and Showcase. Main provides direct entries to transfer by phone, top up, QR scan, phone payment, accounts, rewards, and stories. Account, card, profile, travel, and service pages are drill-down destinations that return to their origin.

Use this as an interaction pattern, not a required product map: the adapted product should include only its actual peer destinations. Use Back for hierarchical drill-downs, Close for self-contained camera or payment tasks, and sheets for focused selection or calculation that should preserve the underlying task.

# Core Flows

## Review the main account

1. The user opens Main and reviews operation summary, cashback or rewards, shortcuts, and account balances.
2. The user scrolls to another account or opens an account for its actions, benefits, details, and services.
3. A completed account action returns to the same account or Main with its balance and related state updated.

## Transfer by phone number

1. The user starts transfer by phone, searches or scans a recipient number, and selects a recipient.
2. The user chooses the recipient bank, confirms the funding source, enters an amount, and may add a message or use the calculator.
3. The user commits the transfer, sees an explicit signed result, and closes the result to return to the updated account context.

## Scan and pay a QR code

1. The user opens the scanner, grants camera access when required, and scans a code or selects another available recognition route.
2. The app resolves the merchant and amount, then presents the selected funding source for review.
3. The user confirms payment, receives a success result and receipt entry, then finishes the task or returns to the account.

## Open and manage an account

1. The user opens an account from Main and reviews its balance, cards, available actions, operations, and benefits.
2. The user opens a setting or detail such as account data, QR code, share link, tariff, statement, certificate, or service.
3. Back returns to the same account position; a completed change updates the affected setting without restarting navigation.

## Review profile and support

1. The user opens Profile and chooses security, documents, reviews, achievements, help, or settings.
2. The selected destination opens as a drill-down while the profile remains the return context.
3. Signing out requires a deliberate action; cancellation leaves the current session and profile state unchanged.

# Interaction Patterns

High-frequency actions are available directly from overview context; less frequent controls are progressively disclosed inside accounts or profile. Recipient, bank, and funding-source choices remain editable until final commitment. Amount entry may use a native numeric keyboard and an optional calculator sheet without losing the pending transfer.

Feedback stays local: selection updates the affected row, loading occupies the pending action, unread items use badges, and successful money movement reports the signed amount before returning to an updated balance. Validation or recognition failure keeps the task open and offers correction, retry, or another input route. Back cancels an unfinished drill-down; Close exits a self-contained task.
