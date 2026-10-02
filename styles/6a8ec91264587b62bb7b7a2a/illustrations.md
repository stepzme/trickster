# Overview

Ozon Bank's current iOS screens use illustration as product evidence and promotional emphasis, not as a generic decorative layer. The observed artwork includes glossy 3D bank cards, piggy-bank savings objects, currency symbols, abstract folded shapes, cashback/product tiles, and soft object clusters in onboarding, home promotions, and catalog cards.

Retain this illustration source only when the implementation will generate or import raster artwork. The illustration gate is independent: choose a named generation model or supplied raster source, obtain explicit user visual approval of the generated/imported assets, and integrate the approved raster assets into the app bundle before claiming the visual language is implemented.

# Visual Style

Use polished 3D raster artwork with rounded plastic-like forms, soft shadows, saturated Ozon blue, cyan highlights, violet gradients, pink accents, and occasional green/yellow benefit cues. Edges are smooth, lighting is clean and studio-like, and objects feel like branded product renders rather than flat icons.

Avoid rough sketching, thin vector outlines, emoji-like faces, generic finance clip art, or monochrome symbol sets. SwiftUI shapes, SF Symbols, emoji, and purely programmatic substitutes are not acceptable replacements for the observed 3D assets.

# Composition

Onboarding artwork occupies the upper half of the screen and centers a blue bank card over large pastel abstract objects. Catalog and promotional cards place one or more 3D objects toward the right side or lower-right corner, leaving readable text space on the left or top. Smaller product tiles may crop artwork inside rounded cells.

Artwork should remain bounded by the card or stage that contains it. It should not sit behind dense account settings, transaction rows, or form fields.

# Color and Materials

The artwork palette must connect to `ui.md`: Ozon blue and white are the anchor, with violet, cyan, pink, green, and yellow as supporting colors. Materials are glossy, softly shaded, and high saturation, while surrounding operational surfaces stay white or pale blue-gray.

Do not recolor the entire interface to match illustration accents. Keep illustration color as emphasis inside clearly framed cards.

# Variants and States

Observed illustration roles include onboarding, card promotion, savings/catalog products, cashback or benefit modules, credit promotion, and small service tiles. No current sampled screen verifies custom illustration for error, permission, destructive, or empty-history states; do not invent those variants without a separately approved reference.

For any new retained variant, first generate/import a raster candidate with the selected model/source, show it for explicit user visual approval, then integrate the approved raster asset. A passing build or a source-code placeholder does not satisfy this gate.

# Avoid

- Do not replace 3D product artwork with SwiftUI shapes, SF Symbols, emoji, Lottie placeholders, or programmatic gradients.
- Do not use unapproved generated images, even if they match the color palette.
- Do not claim illustration approval from text descriptions, screenshots of code, or simulator builds without explicit user visual approval of the raster asset.
- Do not place decorative art behind dense financial data or settings rows.
- Do not mix in flat stock illustrations, hand-drawn mascots, or unrelated banking icon packs.
