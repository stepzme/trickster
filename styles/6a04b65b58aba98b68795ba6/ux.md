# Overview

BCC serves signed-out acquisition and signed-in banking across accounts, cards, deposits, loans, transfers, payments, exchange, history, and services.

# Navigation

Home, Transfers, Payments, History, and Services persist in the current context. Profile and chat stay in the home header; product screens use back navigation.

# Core Flows

## Home and products

1. Signed-out home explains products and offers entry or registration. Signed-in home prioritizes quick actions, accounts, deposits, exchange, and useful links.

## Transfers and payments

1. Choose own account, phone, card, account, international, request, or recurring transfer.
2. Enter recipient and amount, then review fees and destination.
3. Confirm and preserve receipt/history access.

## Card and deposit control

1. Card detail supports top-up, transfer, statement, block, settings, reissue, closure, and Wallet. Deposits support opening, detail, auto-replenishment, and closure.

## Credit and services

1. Loan products use calculators and explicit applications. Services separate bank chat, government services, maps, documents, and other utilities.

# Interaction Patterns

- Separate signed-out acquisition from banking data.
- Keep fees, scope, and currency visible.
- Confirm block, reissue, and closure.
- Preserve receipts and transaction history.

# System Access Timing

No system-access timing or denial-recovery behavior was documented in the reviewed source.

# Known Gaps

System-permission denial paths, interrupted flows, and recovery behavior not described above were not available in the reviewed source.
