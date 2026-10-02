# Overview

Jomo uses recurring authored mascot spot illustrations to make onboarding, guidance, templates, and selected product cards feel friendly without turning the whole interface into a scene. Production artwork must be created with an image-generation model, reviewed visually, and approved before it is integrated as a raster asset.

# Visual Style

The mascot language is playful and simplified, with soft rounded anatomy, clear silhouettes, minimal facial detail, and an editorial cartoon quality. Shapes feel hand-authored rather than like interface glyphs. Dimensionality is shallow, with restrained shading and no glossy 3D realism.

# Composition

Characters or objects occupy a meaningful spot region, commonly around one quarter to one third of a card or onboarding viewport. Keep one clear focal subject, generous negative space for the prompt, and deliberate edge crop where observed. Art supports the text hierarchy and never sits behind controls that require contrast.

# Color and Materials

Use saturated but limited colors that harmonize with the sky-blue canvas: blue, yellow, green, pink, black, and warm neutrals. Maintain strong silhouette contrast against white or blue. Gradients and shadows stay subordinate to the flat, friendly forms.

# Variants and States

Onboarding may use a larger centered character or object. Templates and guidance cards use smaller spot compositions aligned beside short copy. Progress or success can change pose or object while preserving the same character construction, outline treatment, palette discipline, and visual density.

# Avoid

- Do not draw production illustrations with SwiftUI `Shape`, `Canvas`, programmatic vectors, or procedural gradients.
- Do not substitute SF Symbols, emoji, icon fonts, or assembled UI glyphs for mascot artwork.
- Do not integrate an image-generation result before explicit visual approval.
- Do not use unapproved temporary art as the shipped raster asset.
- Avoid glossy 3D characters, stock vectors, photoreal people, dense multi-character scenes, or unrelated line-art styles.
- Do not crop away the focal face, gesture, or object, and do not let art compete with primary controls.
