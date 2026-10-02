# Overview

Green SM has a stable authored illustration language across onboarding, home service tiles, profile prompts, payment empty states, and passcode/security screens. Treat it as a required raster asset system, not as decorative icons that can be recreated with programmatic shapes.

# Visual Style

Use soft 3D or 3D-like raster objects with rounded forms, glossy highlights, light shadows, and a turquoise/mint base. Recurring motifs include compact turquoise cars, scooters, payment cards, lock/passcode objects, avatar/profile objects, map/route details, and small lifestyle service props. The objects feel toy-like and friendly, with no hard outlines and no sharp technical rendering.

The onboarding art uses several objects arranged around a faint circular orbit. Home and profile use isolated objects inside pale cards or soft glow panels. Payment/passcode states use a single centered object above the main text or input controls.

# Composition

Keep art spacious. On onboarding, illustrations occupy the upper half to upper two-thirds of the screen, with objects distributed around a large invisible circle and headline/control content below. On cards, use one object per tile, centered or slightly offset, with enough empty space around it for the label. On empty states, place one centered object above the message and CTA.

Do not crop core objects. Cars must remain fully readable, including wheels and body silhouette. Small support objects can fade toward the edge only when the reference uses that orbit/floating treatment.

# Color and Materials

The illustration palette follows `ui.md`: turquoise, mint, aqua, white, pale gray, and small controlled yellow accents. Shadows are soft and low-opacity. Materials are plastic/glossy rather than metallic or flat vector. The art should sit on white or pale mint backgrounds without heavy drop shadows.

# Variants and States

Use this language for:

- Onboarding and login visual identity.
- Home service tiles and mobility shortcuts.
- Payment empty and populated states.
- Profile verification/email/security prompts.
- Passcode creation and login.
- Safety or support education when an illustrated prompt is needed.
- Promotional vehicle imagery when a real raster promo asset is available.

Map screens may include 3D vehicle markers or car thumbnails, but the map itself remains operational and legible.

Generate missing illustration assets with an image-generation model or another raster/3D asset process capable of matching the observed soft 3D style. Before integration, get explicit user visual approval for the generated assets. Integrate approved assets as raster images in the app bundle with appropriate 2x/3x scale handling, accessibility labels where meaningful, and predictable sizing/cropping rules.

# Avoid

- Do not replace this system with SwiftUI shapes, SF Symbols, emoji, line icons, stock flat vectors, or Lottie-style generic cartoons.
- Do not use unrelated illustration styles across onboarding, profile, payment, and passcode states.
- Do not introduce heavy outlines, dark shadows, photorealistic cars, skeuomorphic metal, or saturated colors outside the turquoise/mint/yellow range.
- Do not let generated assets ship without explicit user visual approval.
- Do not use image assets that are only source placeholders; integrate approved raster files and verify them in the real iOS screens.
