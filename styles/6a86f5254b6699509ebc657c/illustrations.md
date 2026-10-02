# Overview

Tolan uses a coherent authored 3D cartoon world: a blue alien companion, pastel terrain, starfields, cosmic haze, and repeatable character variants. All production scenes and character assets must be created with an image-generation model, receive explicit visual approval, and be integrated only as approved raster assets.

# Visual Style

The language is soft 3D/cartoon rather than flat vector art. Forms are rounded and toy-like, with expressive but simple character features, diffuse spatial lighting, gentle bloom, shallow material texture, and saturated color. Cosmic backgrounds add depth without photorealism.

# Composition

The character or world occupies most of the viewport and is the primary focal mass. Keep the face, pose, and terrain landmark clear while reserving quiet space for short prompts and edge controls. Onboarding may center the character; active scenes may place it lower or deeper in the landscape. Accessory variants preserve the same body proportions and camera language.

# Color and Materials

Deep navy-purple skies contrast with saturated blue character skin and teal, pink, yellow, and green terrain or clothing. Materials are soft, matte-to-satin, and gently luminous. Warm-white UI surfaces should remain visually distinct from the rendered world.

# Variants and States

Intro and active-world states show the companion clearly. Loading or communication states may use starfields, glow, blur, or an ethereal figure. Permission cards can use a small character pose. Clothing and accessory variants change wardrobe without changing anatomy, rendering, palette behavior, or lighting.

# Avoid

- Do not create production art with SwiftUI `Shape`, `Canvas`, programmatic vectors, procedural gradients, or assembled primitives.
- Do not replace the companion or environment with SF Symbols, emoji, icon fonts, or UI glyphs.
- Do not integrate generated imagery before explicit visual approval; ship only the approved raster result.
- Avoid flat stock vectors, photoreal aliens, hard-edged sci-fi rendering, glossy plastic, unrelated mascot anatomy, or generic gradient space.
- Do not crop away the face, defining pose, or main terrain landmark.
- Do not cover most of the world with cards or scatter dense decorative particles behind text.
