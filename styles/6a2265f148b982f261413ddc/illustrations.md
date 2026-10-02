# Overview

Fresh Screen Gallery evidence shows a stable Mycar.kz authored illustration system across multiple home, service, listing, and dark-theme screens: compact glossy 3D automotive objects identify service categories and branded commerce modules. These illustrations support navigation and recognition, while real vehicle photography remains mandatory for marketplace listings and vehicle details.

Any new illustration asset must be produced with an image-generation model, reviewed visually by the user, exported as a raster asset, and integrated into the app as imagery. Do not recreate these assets with SwiftUI shapes, SF Symbols, emoji, icon fonts, procedural gradients, or other programmatic substitutes.

# Visual Style

Use compact, studio-lit 3D objects with soft rounded geometry, clean automotive materials, and slightly idealized proportions. Objects should feel like small product renders: a gray concept car on a blue pedestal, a blue Autocheck block, a key fob, a red auction gavel, a bow-topped car, a pressure gauge, a washer/service object, a shield, or a finance device.

Keep the render polished but not cinematic. The object should be instantly readable at small card sizes and should not include complex backgrounds, character scenes, or unrelated decorative storytelling.

# Composition

Place one primary object inside a rounded card or compact icon area with generous internal padding. Most service objects sit near the upper-left or upper-center of a white or charcoal card, followed by a bold title and short description. Larger home modules may pair one label with a cropped object or a car on a blue pedestal.

Maintain consistent perspective, scale, and lighting across the set. Assets must be cropped to leave transparent or card-colored breathing room so they do not fight text or badges.

# Color and Materials

Use Mycar blue and cyan as recurring brand materials, with white, black, silver, graphite, and cool grays as the base. Small object-specific colors are allowed when evidenced by the source set: red for auction or alert objects, green/lime for finance/service highlights, yellow for finance accents, and dark glossy black for gauges or automotive details.

Light-theme assets should sit cleanly on white cards over a pale gray canvas. Dark-theme assets must also work on charcoal cards without muddy shadows or low-contrast black-on-black edges.

# Variants and States

Create raster variants for service categories, home hero modules, finance/credit modules, verification/report modules, and empty or instructional panels only when those states need authored object imagery. Listing and detail states must continue to use real vehicle photography, not illustration.

Before an asset is accepted, show the generated raster in the real card size and theme where it will be used. The user must explicitly approve the visual result before the asset is integrated into the app bundle.

# Avoid

- Do not use SwiftUI shapes, SF Symbols, emoji, icon fonts, Lottie primitives, or procedural code as substitutes for the authored 3D raster objects.
- Do not replace real vehicle photos in listings or detail pages with 3D illustrations.
- Do not mix flat vector cartoons, hand-drawn icons, mascots, or abstract gradients into this set.
- Do not ship generated art without explicit user visual approval in context.
- Do not integrate remote or prompt-only assets; approved illustrations must be raster files included in the app.
