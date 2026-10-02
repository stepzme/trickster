# Overview

Yandex Lavka uses authored illustration as a focused product-supporting layer rather than as the default content medium. The observed art appears in account and promotional contexts as a large grocery-object composition or a playful character scene, creating a friendly pause inside an otherwise photography-led commerce interface.

# Visual Style

The language is playful, compact, and object-led. Forms are simplified and rounded, with clear silhouettes, soft dimensional cues, and restrained internal detail. Characters and grocery objects feel deliberately authored rather than assembled from interface symbols. The art balances flat graphic color with subtle volume and avoids photorealism, technical line work, or glossy 3D rendering.

Create required artwork with an image-generation model. Do not construct final illustrations from SwiftUI shapes, `Canvas`, programmatic paths or gradients, SF Symbols, emoji, text glyphs, or assembled UI icons.

# Composition

Illustration is a substantial visual mass, not a badge. An object composition can sit centered above or beside concise account copy, while a character scene can occupy a large portion of a rounded sheet or promotional surface. Preserve a single clear focal group, comfortable white or pastel negative space, and crops that keep the main silhouette intact. Nearby text and actions remain separate and readable rather than being baked into the image.

Generated candidates require separate visual approval before interface integration. After approval, integrate the approved raster asset and preserve its intended crop, scale, and focal point across compact iPhone widths.

# Color and Materials

The illustration palette harmonizes with the UI's yellow, cyan-blue, white, pale neutrals, green, and occasional warm food colors. Surfaces feel matte or softly dimensional, with crisp contrast against white or lightly tinted backgrounds. Shadows and gradients, when present, support volume quietly; they do not become metallic, glassy, or cinematic.

# Variants and States

Observed variants include an object-focused grocery composition for account access and a character-focused scene used around an optional purchase-related choice. New variants should retain the same rounded silhouettes, restrained detail, friendly proportions, and dominant focal object. State meaning should come from the scene and placement, not from added labels or symbolic UI overlays.

# Avoid

- Do not use stock photography, clip-art, generic emoji, or a random 3D icon pack.
- Do not substitute SwiftUI shapes, `Canvas`, programmatic paths or gradients, SF Symbols, text glyphs, or assembled UI icons for authored artwork.
- Do not integrate an image-generation model output before explicit visual approval.
- Do not replace the approved raster asset with a programmatic approximation.
- Do not shrink the illustration into an incidental corner badge when it is the primary supporting visual.
- Do not add text, logos, controls, or interface chrome inside the generated image.
- Do not use hyperreal lighting, dense texture, sharp technical geometry, or inconsistent crops.
