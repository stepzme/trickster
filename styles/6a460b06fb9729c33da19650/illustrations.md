# Overview

Beeline uses a stable authored illustration language across onboarding, home promotions, tariff cards, service grids, and entertainment modules. The language is not generic iconography: it mixes yellow-black brand objects, soft 3D props, dot-matrix patterns, character art, and selected campaign photography to make telecom data feel playful while keeping account values clear.

New illustration assets for this style must be generated or art-directed as raster imagery with an image-generation model or equivalent raster illustration workflow, then explicitly approved by the user visually before integration into the app. Generated or approved artwork must be integrated as image assets; SwiftUI shapes, SF Symbols, emoji, icon fonts, or other programmatic substitutes are not acceptable replacements for the authored art.

# Visual Style

Use soft 3D volume, rounded toy-like geometry, gentle studio lighting, and clean high-key backgrounds. Core motifs are Beeline yellow, charcoal/black details, white surfaces, soft gray shadows, and occasional lavender or orange support colors. Yellow dot-matrix fills and bee-sphere forms recur as brand texture.

Characters and objects should feel friendly and light rather than mascot-heavy. Phones, coins, routers, shields, folders, planes, and entertainment objects can appear as simplified 3D props. When photography is used, it is framed as campaign/editorial content inside a card, not as a full-screen background.

# Composition

Illustration usually sits inside a rounded white or pale card with generous negative space. A single object cluster or character can occupy the upper or middle part of a promo panel, with short centered copy and a yellow pill CTA below. In smaller service tiles, use a compact icon-like object at the top or corner and leave the title readable.

Never place art directly behind balance, tariff price, phone number, history totals, or allowance values. If an illustration shares a module with data, it should sit to the side, below the content, or as a low-contrast background texture that does not compete with numbers.

# Color and Materials

Anchor every authored asset in yellow, charcoal, white, and pale gray. Lavender is acceptable for tariff or subscription atmosphere; orange is reserved for urgent balance or high-energy promotional accents. Use soft shadows and subtle translucency, not metallic realism, heavy gradients, or glossy app-icon styling.

The art should harmonize with `ui.md`: pale gray canvas, white inflated cards, yellow controls, and quiet black text. Avoid introducing saturated blue, red, or green as large masses unless the specific subject requires a small semantic or campaign detail.

# Variants and States

Observed variants include onboarding cards, home promotional panels, tariff and allowance decoration, service-feature tiles, entertainment cards, AI/service promotions, cashback panels, and sparse setup sheets. Loading and modal states do not need illustration unless a screen-specific authored asset is visible.

For future empty, success, or permission states, use one original raster image in the same Beeline object language rather than assembling a scene from icons. The image should be reviewed as part of the real screen because scale, crop, and proximity to data are part of the style.

# Avoid

- Do not replace generated raster artwork with SwiftUI shapes, SF Symbols, emoji, stickers, or generic vector icons.
- Do not use unrelated mascot systems, flat corporate spot illustrations, or generic 3D stock scenes.
- Do not hide data under decorative yellow dot fields or object shadows.
- Do not make every service tile illustrated; functional grids need many quiet text-first tiles.
- Do not invent dark-mode artwork from these light reference screens without separate approval.
- Do not integrate any new illustration before the user has visually approved the generated raster asset.
