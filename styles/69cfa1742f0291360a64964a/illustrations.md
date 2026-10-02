# Overview

Duolingo uses a stable authored illustration system led by Duo and a recurring cast. The art is not decoration: it is the main visual mass for onboarding, loading, streak, completion, achievement, leaderboard introduction, profile prompts, store items, and lesson feedback.

# Visual Style

Use an image-generation model to create approved raster artwork in the observed style: flat vector-like characters, saturated fills, rounded bodies, oversized eyes, simple props, soft ground shadows, and expressive poses. Characters should feel toy-like and elastic, with clean silhouettes and minimal texture. Do not build these scenes from SwiftUI shapes, SF Symbols, emoji, or other programmatic stand-ins.

# Composition

Most scenes center one character or a compact cast in the upper or middle viewport with generous white space around it. Reward and streak scenes may grow larger and pair the character with medals, arrows, fire, logs, stars, or badges. Speech-bubble and prompt scenes keep the character left of or above a rounded white copy surface. Preserve the observed crop: faces, eyes, gestures, props, and medals must remain fully readable.

# Color and Materials

The palette follows `ui.md`: Duo green, cyan, yellow, orange, purple, pink, and pale gray shadows against white or occasional saturated celebration fields. Materials are flat and matte, with soft shadows used only to lift characters or props from the canvas.

# Variants and States

Observed variants include splash logo, course loading, onboarding prompts, permission coaching, answer and lesson art, streak continuation, achievement medals, leaderboard welcome, profile completion prompts, premium/store artwork, and locked or inactive gray path characters. New artwork must be generated as raster assets, integrated into the app asset catalog, and shown to the user for visual approval before it is treated as final.

# Avoid

- Do not use SwiftUI shapes, SF Symbols, emoji, stock cartoons, or generic education clip art as replacements.
- Do not mix photorealistic texture, thin outline illustration, or glossy 3D rendering into this package.
- Do not crop off faces, eyes, props, badges, or the green body silhouette.
- Do not ship placeholder art without explicit user visual approval and raster asset integration.
