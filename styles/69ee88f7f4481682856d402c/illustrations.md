# Overview

VK Video has a limited but coherent authored illustration system inside Kids/profile creation. It uses friendly flat character art and doodled selection-card objects to distinguish child-facing setup. It is separate from video thumbnails, posters, creator avatars, channel marks, stickers, functional icons, playback chrome, and campaign artwork.

# Visual Style

Use flat digital character illustration with rounded egg- or dinosaur-like mascot geometry, simple faces, soft filled silhouettes, and minimal interior detail. Supporting age-card objects use loose bright-blue hand-drawn strokes and deliberately simple symbolic forms. Hero characters have clean edges and broad fills; card doodles feel more spontaneous but share the same friendly low-detail tone. Texture and modeled lighting are minimal.

Every new illustration must be generated with an image-generation model from this language. It requires separate visual approval before interface integration and must then be integrated as the approved raster asset.

# Composition

The child-facing hero uses a large centered character on a full-screen blue or purple field, leaving clear room for concise copy and a bottom CTA. Selection-card variants place a smaller doodled object within a pale-blue rounded card, allowing intentional edge crop while keeping the identifying symbol legible. Character or object art is a primary visual mass in this scoped surface, not a small icon beside text.

# Color and Materials

Hero surfaces use saturated purple and blue with cyan, pink, and light accents. Selection cards use pale blue grounds with strong blue outlines and sparse brighter details. Keep fills matte, shapes flat, and highlights minimal. Avoid realistic fur, skin, plastic, glass, dramatic shadows, or cinematic texture; depth comes from overlap and color contrast.

# Variants and States

- Kids onboarding or safety introduction uses the largest mascot hero with a bottom action.
- Profile creation can repeat the mascot as identity art at a smaller scale.
- Age or preference selection varies the simple doodled object while preserving pale-blue card treatment and bright-blue line quality.
- No stable illustrated error, loading, permission, or general-catalog variant was observed.

# Avoid

- Do not draw or approximate the art with SwiftUI shapes, Canvas, programmatic paths or gradients, SF Symbols, emoji, text glyphs, or assembled UI icons.
- Do not integrate an unapproved generation, placeholder, screenshot crop, or temporary vector; use the visually approved raster asset.
- Do not use video stills, show posters, creator avatars, stickers, channel marks, or generic media icons as substitutes.
- Do not expand this child-facing language into the general video feed, player, or settings surfaces.
- Do not substitute stock nursery cartoons, glossy 3D mascots, realistic animals, dense scenes, or thin technical line art.
