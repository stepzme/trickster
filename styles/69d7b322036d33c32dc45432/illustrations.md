# Overview

Yandex Realty uses a stable supporting illustration layer for service entry points, onboarding/prompt moments, posting choices, and promotional tiles. The illustrations are authored raster assets, not system icons. They sit beside real property photography, which remains the primary imagery for listings and details.

# Visual Style

Use simplified rounded 3D objects and pastel spot graphics: yellow realty logo forms, keys, blocks, buildings, calendars, furniture, checkmarks, bells, and small service symbols. Materials are soft, matte, lightly dimensional, and toy-like, with gentle shadows and limited detail.

Some selection screens use flatter outlined pictograms over irregular pastel blobs. Keep these as authored bitmap/vector-exported artwork with the same hand-placed composition and color softness; do not rebuild them from primitive SwiftUI shapes.

# Composition

Illustrations are compact and isolated. Home/service tiles place one object or a tight object cluster centered in the tile above or beside a short label. Posting choice cards use one pastel pictogram on the left with text on the right. Onboarding and permission prompts center a single object in the upper-middle of the screen with wide white space around it.

Promotional cards may combine raster lifestyle photography with a small white action pill or use bold typographic promotion art. Keep illustration/photo content separated from listing media so users can distinguish product content from decoration.

# Color and Materials

Lead with Yandex yellow, white, and pale gray. Secondary accents may use cyan, mint, violet, coral, beige, and charcoal in small amounts. Shadows are soft and diffuse. Avoid glossy 3D, neon lighting, heavy outlines, or dense scenic backgrounds.

# Variants and States

Observed variants include app/logo splash, notification prompt, home shortcut objects, posting-property-type pictograms, service/promo cards, profile referral promotion, and AI/service entry visuals. All variants preserve small scale, rounded geometry, soft palettes, and generous white space.

Implementation must generate or source authored raster assets for this layer and integrate approved images with fixed layout slots, accessibility labels, and stable aspect ratios. Every generated illustration set requires explicit user visual approval before integration.

# Avoid

- Do not use SF Symbols, emoji, plain geometric placeholders, or programmatic stand-ins for the authored illustration layer.
- Do not approximate this illustration layer with SwiftUI shapes or generated UI primitives.
- Do not replace real property photography, floor plans, or maps with illustrations.
- Do not mix unrelated stock illustration styles into the same screen.
- Do not create oversized decorative scenes that compete with prices, filters, or contact actions.
