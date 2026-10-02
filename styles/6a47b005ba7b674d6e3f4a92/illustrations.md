# Overview

Dixy has a stable authored image language repeated across onboarding, delivery, loyalty, home promotions, category discovery, cart recommendations, and empty states. It combines a cheerful mascot, fruit and vegetable characters, gift props, food/product still lifes, and colorful campaign banners with the orange retail UI.

New illustration assets for this style must be generated or art-directed as raster imagery with an image-generation model or equivalent raster illustration workflow, then explicitly approved by the user visually before integration into the app. Generated or approved artwork must be integrated as image assets; SwiftUI shapes, SF Symbols, emoji, icon fonts, or other programmatic substitutes are not acceptable replacements for the authored art.

# Visual Style

Use bright, friendly, rounded 3D or polished raster illustration. The mascot is expressive, small-to-medium scale, and typically orange/cream with simple facial expression and soft shadow. Produce characters are simple, glossy, and playful, with minimal facial detail. Category imagery uses clean product or food still lifes on white rather than line art.

The style should feel retail and appetizing: clear silhouettes, recognizable food shapes, saturated orange/lime/purple campaign accents, and enough white space to keep nearby prices readable. Avoid over-rendered realism for mascot/character art; product pack shots can be more photographic.

# Composition

Mascot art is usually placed at the lower edge of promo, cart, or product modules, often partly overlapping a card edge but not blocking product names, prices, barcode, or CTA labels. Fruit/vegetable characters appear centered inside promotional banners with large text and clear button areas. Category still lifes are centered above short labels in a grid.

Empty-state illustration sits centered in the upper-middle of an otherwise white screen, with the message below. Campaign banners can use embedded text and image composition as a single raster; preserve their crop and avoid rebuilding them as plain text on a colored rectangle.

# Color and Materials

Illustrations must tie back to the UI palette: orange `#FF8200`, white, cream, lime green, purple, yellow, and small black facial or outline details. Shadows are soft and close to the object. Keep surfaces clean; no noisy backgrounds, dark scenes, or beige editorial textures.

Product photography should stay on white or very pale backgrounds. Promotional purple panels can be saturated but should be balanced with orange action controls and white product cards from `ui.md`.

# Variants and States

Observed variants include splash branding, phone confirmation art, delivery banners, favorite-product prompts, cart helper mascot, product recommendation panels, category still lifes, profile/loyalty visual accents, and a no-address empty state. Loading skeletons and form errors do not need illustration unless a specific authored asset is visible.

For future empty, success, promo, or helper states, create one original raster image in the same mascot/food world and review it on the actual screen before approval. The asset is not approved merely because it matches the palette; scale, crop, overlap, and readability must be visually checked.

# Avoid

- Do not replace generated raster artwork with SwiftUI shapes, SF Symbols, emoji, stickers, or generic vector icons.
- Do not introduce a different mascot, unrelated cartoon style, flat corporate spot illustration, or stock grocery clip art.
- Do not let the mascot obscure product prices, quantity steppers, barcode, checkout total, or search results.
- Do not use dark, atmospheric, or beige food photography; the observed system is bright, white, orange, and retail-clean.
- Do not convert campaign banners into plain text cards if the reference uses composed raster art.
- Do not integrate any new illustration before the user has visually approved the generated raster asset.
