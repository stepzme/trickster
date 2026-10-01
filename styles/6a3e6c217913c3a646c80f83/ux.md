# Overview

Avtobys combines transit fare payment, a wallet, route discovery, tickets, transfers, and city services. The dashboard prioritizes balance and immediate payment modes while routes become a focused map experience.

# Navigation

Avtobys, Routes, QR, Notifications, and Menu persist in the current context. The QR action opens payment directly; focused subflows use back navigation.

# Core Flows

## Wallet and payment

1. Open the wallet to review balance and history, then pay, transfer, or top up. QR, Bluetooth, and vehicle-number payment remain separate, with explicit success, rating, and failure states.

## Routes

1. Search or browse bus and trolleybus routes.
2. Favorite a route or open its map path.
3. Review stops and initiate fare payment without losing map context.

## Tickets and services

1. Tickets, intercity, service payments, offers, and promotional banners are distinct dashboard entries rather than hidden wallet modes.

## Account and support

1. Menu groups settings, city, language, bank cards, app information, support, notifications, sharing, and secure logout.

# Interaction Patterns

- Show balance before any fare or transfer.
- Keep payment modes distinct and recoverable.
- Preserve the map while route details expand.
- Keep transaction search and filters close to history.
