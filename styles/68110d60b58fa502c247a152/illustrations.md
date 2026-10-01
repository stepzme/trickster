# Overview

The illustration system explains benefits, service entry points, and real-world order states with friendly flat scenes. It is separate from food cutouts, campaign photography, celebrity imagery, packaging shots, and one-off promotional creatives.

# Visual Style

Use simplified vector-like forms with solid fills, very limited shading, rounded geometry, and little or no outline. Dark green and orange carry the identity; warm beige, pale gray, white, and small food colors support the scene. Human elements are reduced to clear gestures, and objects are simplified enough to read at compact mobile sizes.

When the design calls for product illustration, generate it with the available image-generation model and integrate the resulting image asset into the interface. Do not recreate the illustration programmatically in SwiftUI. A screen that requires illustration is not ready for design approval until the generated image asset is integrated in the running app.

# Composition

Onboarding uses one centered metaphor with generous white space and a short text block below it. Service-entry illustrations use a compact scene contained within their module, with the main object readable before supporting details. Order-status art uses a wider horizontal scene: the real-world object or place forms the base, while the order identifier or instruction becomes the dominant accent.

Keep silhouettes uncluttered and preserve breathing room around the motif. Crop neither hands nor essential service objects. Promotional and editorial imagery should retain its own composition instead of being redrawn to resemble this system.

# Color and Materials

Use deep forest green for structural objects and brand anchors, bright orange for focal actions, identifiers, and small energy accents, and warm neutral fields behind the subject. White may cut through objects to keep forms light. Surfaces are matte and graphic; avoid photographic texture, glossy plastic, metallic lighting, and complex gradients.

Food can appear as a small supporting symbol when the service metaphor requires it, but realistic product presentation belongs to photography. Maintain sufficient contrast between green, orange, and the background at both banner and onboarding sizes.

# Variants and States

Onboarding variants change the central metaphor while retaining the same scale, negative space, palette, and simplified construction. Service variants can depict pickup, delivery, rewards, or referral through a single clear action scene. Order-status variants keep the same environment while changing the identifier, instruction, or completion cue needed for the current state.

If an illustration is unavailable, use a temporary image asset that preserves its footprint and color mass. Loading, unavailable, and error feedback should use interface states unless a dedicated authored illustration is actually required.

# Avoid

- Do not classify food photography, campaign banners, celebrity photography, packaging art, or isolated interface icons as part of the illustration system.
- Do not recreate the scenes from SF Symbols, emoji, SwiftUI shapes, or a collage of unrelated stock vectors.
- Do not add outlines, glossy 3D materials, detailed textures, or gradients that conflict with the flat matte construction.
- Do not fill empty space with decorative food objects when they do not clarify a service or state.
- Do not approve an illustration-led screen while the required image asset is missing or replaced by a blank placeholder.
