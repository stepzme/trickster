<design-context>
# Overview

Tinkoff Investments uses a stable authored illustration layer for onboarding, referral, empty portfolios or lists, screener education, restrictions, and promotional explanations. The language turns simple financial metaphors into isolated 3D-ish objects on black, while populated portfolio, chart, and trading screens remain data-first.

# Visual Style

Objects are chunky, geometric, and softly dimensional, with matte graphite or black bodies, clean white edges or details, and small vivid yellow markers. Shapes resemble tokens, blocks, devices, shields, arrows, charts, gifts, or other simplified financial objects rather than literal scenes. Lighting is soft and directional enough to separate dark materials from the black background; texture is minimal and surfaces stay smooth.

Generate required illustrations with the available image-generation model. Do not construct financial objects, tokens, metaphors, restriction art, or onboarding scenes from SwiftUI shapes, emoji, or arbitrary SF Symbols. Present generated results for explicit approval before integration.

# Composition

Use one central object or a very small connected object group, typically occupying about a quarter to a third of the viewport or the upper half of a state card. Surround it with generous black negative space. A short title, explanation, and action align beneath or adjacent without overlapping the object's focal detail.

In onboarding or referral surfaces the object may be larger and slightly more layered. In empty, restriction, or screener states it remains centered, compact, and clearly separated from the following text. Authored imagery never shares the same region as dense quotes, candlesticks, order-book data, or trade calculations.

# Color and Materials

The core material palette is matte graphite, near-black, dark gray, and white, with Tinkoff yellow as the recognisable highlight. Small blue, green, or red details may clarify the specific financial state, but remain subordinate and follow the semantic roles in `ui.md`. Maintain enough rim light and tonal contrast for dark objects to remain visible on pure black without adding colored glows or busy backgrounds.

# Variants and States

Onboarding and product-education variants can use the largest object and clearest metaphor. Referral or promotion variants may add a second linked object or reward cue. Empty portfolio, favorites, operations, analytics, or screener states use a single quieter object with more negative space. Restriction and blocked variants may introduce a barrier, lock, warning marker, or red detail while retaining the graphite/yellow medium. Populated trading screens replace illustration with live data and charts.

# Avoid

- Do not replace generated authored imagery with SwiftUI primitives, SF Symbols, emoji, clip art, or stock finance photography.
- Do not use glossy neon cyberpunk, photoreal coins, cartoon characters, hand-drawn sketching, or unrelated gradients.
- Do not crowd a state with many floating financial symbols or multiple competing objects.
- Do not place illustration behind charts, instrument rows, trade totals, or warning copy.
- Do not make yellow the entire object or background; it is a controlled highlight against graphite and black.
- Do not mix this 3D-ish object language with flat vector characters inside one state.
</design-context>
