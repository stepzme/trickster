# Overview

Ucom uses a recurring authored mascot and supporting line-art language for introductory, permission, roaming, and empty-state moments. The art is a distinct layer from utility icons and promotional photography: it gives sparse dark screens a recognizable focal point and must be delivered as generated image assets rather than reconstructed from interface primitives.

# Visual Style

The mascot is simplified and friendly, built from clean lime and white outlines with broad, readable contours. Internal detail is sparse, shading is minimal, and the figure remains legible against a near-black field. Supporting motifs use the same line weight and limited palette. The result is graphic and lightweight rather than three-dimensional, painterly, or icon-like.

Create required artwork with an image-generation model. Generate and review each needed composition as an image asset, obtain explicit approval of the generated result, and only then integrate it into the interface. Do not draw the mascot with SwiftUI shapes, SF Symbols, ad hoc Bézier paths, or assembled UI icons.

# Composition

On introductory and permission surfaces, the mascot occupies a substantial central or upper-middle area with generous dark negative space around it. On empty states, it sits above concise centered text and a single action. Some variants may align the figure toward an edge, but the complete silhouette remains the focal point rather than a small decorative badge.

Preserve the observed balance: the artwork should typically occupy roughly one quarter to two fifths of the available content region. Use `contain` behavior and avoid aggressive cropping. Text and actions remain separate from the illustration instead of being embedded into the generated asset.

# Color and Materials

Electric lime links the artwork to the primary UI accent; white adds contrast and near-black remains the dominant negative space. Use flat fills or outlines with only restrained tonal variation. Do not introduce a broad multicolor palette, glossy 3D materials, realistic lighting, or textured backgrounds that compete with the interface.

# Variants and States

Observed roles include a branded introductory or re-entry figure, onboarding/login support art, a roaming-related variant, an empty-ticket composition, and a location-permission composition. Each variant should change the pose or supporting motif to fit the state while preserving the same mascot proportions, line quality, lime-and-white palette, and dark-background relationship.

Generate only the variants required by the consuming product. Every variant must be reviewed and explicitly approved before it is placed in the build.

# Avoid

- Do not substitute the mascot with an SF Symbol, emoji, generic spot illustration, or stock character.
- Do not recreate the art from SwiftUI shapes, interface icons, or programmatic line fragments.
- Do not use photorealistic people, glossy 3D rendering, heavy gradients, or noisy texture.
- Do not shrink the illustration into a minor badge when the observed composition gives it a primary visual role.
- Do not embed product copy, buttons, or controls inside the generated image.
- Do not integrate unapproved generated artwork into the interface.
