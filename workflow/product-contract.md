# Stage 4. Product contract

## Goal

Before writing code, combine the original request, agreed scope, and selected style package into one verifiable body of work.

## Contents of product.md

Use `trickster/templates/product.md` to record the user and primary task; explicitly requested features; decisions made for incomplete scope; excluded infrastructure features; boundaries of the current implementation; all eleven mandatory iOS capability features; proposed shortlist; selected local style package; map of screens and states; required scenarios; image needs; applicability of the app-icon and ASO stages; environment; and acceptance plan.

Use the selected package's `ux.md` as a set of interaction patterns for the agreed product, not as permission to copy features from the reference app or expand scope.

## Scope-completeness criterion

Do not measure the product by its number of screens. For every required feature, define the entry point, user action, expected result, edge states, and verification method.

A feature without a screen or state is not designed. A screen that is not connected to a required feature must not be added merely to increase volume.

The `Mandatory iOS capabilities` matrix is a blocking part of the contract. It must retain the exact eleven stable IDs, canonical names, and order from `ios-capabilities.md`. Every row needs a product-specific feature, entry point, useful result, real system mechanism, denial or unavailable behavior, dependencies, and a verification method. These rows cannot be `N/A`.

## Output

A completed `trickster/artifacts/<run-id>/product.md`. After broad implementation begins, do not expand or reduce it merely to obtain PASS. Record a material change in user requirements as a contract change with a reason.
