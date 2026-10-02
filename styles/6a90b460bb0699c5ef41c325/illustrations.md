# Overview

Ozon Job uses two image families in the sampled current screens: documentary workplace photography and bright raster illustration for promos, courses, and branded training content. Photography establishes real warehouse and delivery context; illustration adds product energy to banners, stories, and learning cards.

Retain this illustration source only when the implementation will generate or import raster artwork. The illustration gate is independent: choose a named generation model or supplied raster source, obtain explicit user visual approval of the generated/imported assets, and integrate the approved raster assets into the app bundle before claiming the visual language is implemented.

# Visual Style

Photography should be bright, real, and operational: warehouses, workers, parcels, entrances, vehicles, equipment, and task environments. It should not feel like abstract office stock imagery.

Illustration uses saturated raster graphics with rounded 3D objects, Ozon-blue/cyan bases, magenta and violet accents, soft shadows, clean studio lighting, and simplified operational motifs such as boxes, carts, vehicles, screens, tickets, calendars, or money cues. SwiftUI shapes, SF Symbols, emoji, and purely programmatic substitutes are not acceptable replacements for these images.

# Composition

Onboarding photography fills the upper portion of the screen, with the headline and action in a rounded white lower panel. Warehouse cards place photography at the top of the card with badges overlaid directly on the image. Course cards use thumbnail artwork above short text and metadata. Promotional banners use artwork to the side or as the main thumbnail while keeping text readable.

Images should remain inside rounded cards or screen stages. Do not put decorative art behind dense payout, profile, or form rows.

# Color and Materials

Illustration colors should connect to `ui.md`: Ozon blue is the anchor, with cyan, violet, magenta, coral, yellow, and green as supporting accents. Photography should remain natural and bright, while surrounding UI surfaces stay white or pale gray.

Do not let illustration accents recolor the whole app. Keep blue as the primary action color and reserve saturated artwork for the observed card, course, story, or promo containers.

# Variants and States

Observed image roles include launch branding, onboarding photo, story/promo cards, warehouse listing/detail photos, profile benefit tiles, payout promo/history areas, and course thumbnails. No sampled current screen verifies custom illustration for empty, error, permission, or destructive states; do not invent those variants without a separately approved reference.

For any retained new variant, first generate/import a raster candidate with the selected model/source, show it for explicit user visual approval, then integrate the approved raster asset. A passing build or a source-code placeholder does not satisfy this gate.

# Avoid

- Do not replace photography or raster course/promo artwork with SwiftUI shapes, SF Symbols, emoji, or code-drawn placeholders.
- Do not use unapproved generated images, even if they match Ozon colors.
- Do not claim illustration approval from text descriptions, screenshots of code, or simulator builds without explicit user visual approval of the raster asset.
- Do not use generic office stock photos for warehouse and delivery contexts.
- Do not place decorative graphics behind dense operational rows, payout lists, profile rows, or login inputs.
