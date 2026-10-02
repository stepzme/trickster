# Overview

Coinbase uses a recurring authored illustration layer for onboarding, account setup, identity verification, compliance prompts, empty transaction states, and promotional cards. The product shell is data-first, but these visuals are stable enough to require real art assets rather than programmatic placeholders.

# Visual Style

Use clean geometric Coinbase-brand illustration: saturated blue fields, white Coinbase mark, simple document/card shapes, check badges, coins, magnifier motifs, abstract arrows, and rounded blocks. The style alternates between soft 3D brand objects and flat geometric editorial spots, but all variants stay crisp, minimal, and high contrast.

Linework is minimal. Shapes are simple, centered, and readable at small mobile sizes. Avoid detailed character scenes. The mood is regulated-finance clarity, not playful crypto decoration.

# Composition

Onboarding uses one large centered brand object above a short headline and stacked action pills. Verification and setup screens place a smaller illustration above or beside a bold title/task card. Empty states center the illustration in the upper-middle of the content area with explanatory text below. Promo cards contain the art inside a rounded card, often cropped to one side.

Leave generous white or blue negative space. Do not tile illustrations or use them as full product-screen backgrounds outside the observed brand intro.

# Color and Materials

Use Coinbase blue, white, pale gray, yellow, teal/green, and small black details. 3D brand assets can use layered blue glow or soft depth; flat KYC/empty-state assets use clean filled shapes and minimal shadows.

Keep colors aligned with `ui.md`: blue is the brand/action anchor, gray supports compliance surfaces, and green/yellow should remain small accents.

# Variants and States

Observed variants include splash/brand intro, account setup/progress, photo ID verification, home verification card, Coinbase One promo, help/promo card, empty transactions, and loading state. The loading state uses a small blue spinner, not a large custom scene.

Implementation must generate or source authored raster assets for this layer and integrate approved images with fixed aspect ratios, accessibility labels, and predictable layout slots. Every generated illustration set requires explicit user visual approval before integration.

# Avoid

- Do not use SF Symbols, emoji, plain geometric placeholders, or programmatic stand-ins for authored illustrations.
- Do not approximate this illustration layer with SwiftUI shapes or generated UI primitives.
- Do not use stock crypto coin piles, neon blockchain backgrounds, mascots, or dense character scenes.
- Do not replace token marks or financial charts with decorative artwork.
- Do not mix unrelated 3D styles with the Coinbase blue geometric system.
