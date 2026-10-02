# Overview

WB Bank has an independently visible illustration system: glossy 3D banking objects recur across the home dashboard, card opening, savings, loans, installments, and support/product tiles.

# Visual Style

- Objects are polished, toy-like 3D renders with rounded edges, plastic gloss, soft translucency, and compact studio shadows.
- Repeated motifs include bank cards, wallets, coins, calculators, gift-like blocks, percentage and cashback objects, small security/support symbols, and branded marketplace product miniatures.
- The style is friendly, promotional, and high-saturation rather than photorealistic or flat vector.

# Composition

- One object or a small grouped object set sits inside a card, banner, or hero panel rather than filling the entire screen.
- Objects are commonly cropped or anchored to the right/lower edge, leaving a clear area for amounts, rates, or benefit text.
- Larger product heroes place the object above or behind the content area, while operational forms and receipts avoid large illustration.

# Color and Materials

- The illustration palette extends the UI palette with hot magenta, violet, deep green, cyan, yellow, soft pink, and pastel blue.
- Materials read as glossy plastic, translucent glass, and soft metallic coin surfaces, usually on white, mint, pale blue, or green panels.
- Shadows and glow are soft and localized; objects remain crisp against simple card backgrounds.

# Variants and States

- Card, savings, loan, wallet, cashback, installment, security, and support/product states each use the same glossy 3D family.
- Empty or inactive product sections may use a small centered 3D mark, while transfer confirmations and receipts use plain icons or logos.
- An image-generation model must create the candidate, separate visual approval must select it, and only the approved raster asset may then be integrated into the final app surface.

# Avoid

- Do not substitute SwiftUI shapes, `Canvas`, programmatic paths or gradients, SF Symbols, emoji, text glyphs, or assembled UI icons for the observed 3D object language.
- Do not introduce hand-drawn, editorial, photorealistic, clay, line-art, or unrelated mascot styles.
- Do not place large promotional objects into transfer forms, settings rows, receipts, or bottom sheets where the observed interface is flat.
- Do not integrate generated raster art before explicit visual approval.
