# Overview

Alatau City Bank is a broad retail-banking app spanning products, transfers, payments, history, and profile. It keeps five stable destinations while exposing additional services through contextual flows.

# Navigation

Home, My bank, History, Transfers, and Payments are the primary destinations. Search and notifications stay in the discovery context. Product and service families open from Home or a reusable all-services sheet.

# Core Flows

## Entry and home

1. Authenticate, then use identity verification when required.
2. Review the promotional hero, service shortcuts, and products.
3. Open a product from Home or the all-services sheet.

## Products

1. My bank groups bonuses, cards, loans, and deposits. Product detail keeps balance and core actions above operation history and management controls.

## Transfers and payments

1. Choose a transfer rail or payment category.
2. Enter source, recipient, amount, and optional message.
3. Review limits or commission before submission.
4. Confirm through a receipt-like success screen with repeat and share actions.

## History and profile

1. History supports filtering, analytics, and transaction details. Profile contains ATMs, branches, support, FAQ, language, notifications, dark theme, security, and logout.

# Interaction Patterns

- Keep the five primary destinations stable.
- Show commission and limits before confirmation.
- Make receipts saveable, repeatable, and shareable.

# System Access Timing

No system-access timing or denial-recovery behavior was documented in the reviewed source.

# Known Gaps

System-permission denial paths, interrupted flows, and recovery behavior not described above were not available in the reviewed source.
