# Overview

Fresh Screen Gallery evidence shows a repeated authored image layer in Whoosh: industrial campaign splash art, mechanical map emblems, themed task panels, small campaign cards, and thin outline drawings for subscription or empty states. Treat these as real raster assets that require art direction and approval, not as icons or code-drawn decoration.

- Use an image-generation model or commissioned raster artwork for any new authored illustration, campaign object, empty-state drawing, or themed map marker.
- Obtain explicit user visual approval for generated or sourced artwork before integrating it into the app.
- Integrate approved artwork as raster assets with named light/dark or scale variants as needed.
- Do not substitute SwiftUI shapes, SF Symbols, emoji, Lottie presets, stock pictograms, or other programmatic placeholders for authored imagery.

# Visual Style

- Build from graphite, gunmetal, worn silver, coral orange, ember red, muted green, and occasional cold blue status light.
- Use realistic or semi-realistic hard-surface objects: brushed metal, bolts, scratches, dark glass, warning labels, scanner lenses, vehicle parts, and compact mechanical emblems.
- Use focused glow as a focal cue. Avoid full-screen decorative gradients, soft blobs, or unrelated neon atmospheres.
- Keep illustrated silhouettes compact and readable at small map-marker or card sizes.

# Composition

- Campaign launch moments may use full-height character or object art with large reserved zones for login controls.
- Map moments may place one authored mechanical emblem around scan, special mode, parking, or task actions.
- Menu and subscription cards may use small framed raster scenes or thin outline drawings, but text and pricing must remain readable.
- Empty states may use a single thin line illustration centered above compact text.

# Color and Materials

- Build from graphite, gunmetal, worn silver, coral orange, ember red, muted green, and occasional cold blue status light.
- Render hard-surface materials with restrained scratches, bolts, dark glass, warning labels, and focused glow; keep contrast strong enough for compact cards and map markers.
- Keep functional UI surfaces neutral and reserve the industrial palette for approved authored assets rather than spreading it into unrelated controls.

# Variants and States

- Provide at least normal, selected/active, disabled or unavailable, and small-size variants when the image is used as a recurring control or marker.
- Provide safe cropped versions for compact cards, map pins, and full-screen campaign surfaces instead of relying on arbitrary runtime cropping.
- Keep payment, legal, safety, and support surfaces functional first; use illustration there only when fresh approved evidence explicitly supports it.

# Avoid

- Do not copy third-party game logos, characters, or protected assets.
- Do not mix in unrelated cartoon, flat SaaS, emoji, clay, mascot, or generic mobility styles.
- Do not generate one-off decorative images that are not repeated across multiple screens or states.
- Do not use programmatic substitutes while waiting for final art; leave a named raster placeholder slot and block visual approval until approved imagery exists.
