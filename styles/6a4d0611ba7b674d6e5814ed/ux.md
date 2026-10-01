# Overview

Airba pay is a loan-management app organized around verification, active loans, a new-loan calculator, partner offers, support, and profile controls. The experience keeps financial actions explicit and uses four primary destinations.

# Navigation

Home, My loans, New loan, and Support remain in the primary navigation. Notifications and profile sit in the discovery context. Profile edits and verification open as focused subflows with an obvious close or back action.

# Core Flows

## Entry and verification

1. Enter a phone number, password, and quick-access code.
2. Land on Home with a persistent verification warning.
3. Complete document capture and return through a single success action.

## Loan discovery

1. Review active loans or history.
2. Open New loan, choose term and amount, and inspect monthly payment and total repayment.
3. Continue to financial products or partner catalogues without hiding the external merchant context.

## Profile and support

1. Edit email, address, password, access code, language, and Face ID from one profile. Support and feedback remain reachable from primary navigation.

# Interaction Patterns

- Keep repayment totals visible while amount or term changes.
- Treat verification as a persistent but dismissible prerequisite.
- Separate Airba loan products from external partner catalogues.
- Use one clear action on success and empty states.
- Preserve active/history tabs inside My loans.

# System Access Timing

No system-access timing or denial-recovery behavior was documented in the reviewed source.
