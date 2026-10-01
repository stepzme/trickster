# Overview

Drivee uses a recurring flat illustration language on driver and courier onboarding or verification surfaces. The scenes explain working roles, documents, vehicles, phones, bags, and order handling while providing the main visual mass on otherwise sparse white screens. They are distinct from the live map, vehicle selector silhouettes, interface icons, and user photographs.

When a surface requires this illustration language, generate the image with an available image-generation model and integrate the resulting asset. Do not recreate it with SwiftUI shapes, SF Symbols, or emoji. The screen is not ready for design approval until the generated asset is visible in the running interface.

# Visual Style

Use clean flat 2D vector-like scenes with rounded human figures and simplified work objects. Forms are bounded by confident dark teal or green outlines, with broad untextured fills and minimal internal detail. Faces and hands are reduced but still human; vehicles, phones, parcels, bags, and documents remain immediately recognizable. The tone is practical and approachable, without photographic realism, 3D volume, grain, or ornamental texture.

# Composition

Place one focused scene in the upper or central portion of a white onboarding surface, typically occupying about one third to one half of the usable viewport width and enough height to balance the explanatory text below. Keep generous negative space around the artwork. The illustration is supporting communication but remains the largest non-text element; a short centered title and body follow it, with the primary action anchored lower on the screen. Keep complete figures and key equipment inside the crop rather than trimming them at arbitrary edges.

# Color and Materials

White is the dominant surrounding field. Use dark teal-green for outlines and structural details, with lime-green accents tied to the primary UI color. Secondary fills stay in a limited set of soft neutrals and muted warm or cool colors. Surfaces are matte and flat: no glass, metallic highlights, realistic shadows, or lighting gradients. Contrast must remain strong enough for the outlined scene to read at phone scale without competing with the lime CTA.

# Variants and States

Observed variants change the central subject and equipment while keeping the same construction: a driver or courier figure, vehicle-related context, delivery items, phone interactions, or identity and verification objects. Onboarding variants are calm and explanatory; verification variants may foreground a document, face, or phone task. Keep line weight, figure proportions, palette restraint, white negative space, and centered text relationship consistent across variants.

# Avoid

- Do not use stock photography, photorealistic renders, glossy 3D characters, or clay-style objects.
- Do not substitute the scene with an oversized SF Symbol, emoji, app icon, or vehicle-selector glyph.
- Do not draw production illustrations from SwiftUI shapes or assemble them from interface icons.
- Do not add busy scenery, detailed map backgrounds, textures, or decorative patterns behind the figure.
- Do not crop away the subject's face, hands, vehicle, parcel, phone, or other object carrying the scene's meaning.
- Do not use a broad rainbow palette or make lime cover most of the illustration.
- Do not place long text over the artwork or shrink it into an incidental thumbnail.
