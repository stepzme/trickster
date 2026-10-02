# Overview

Moonlitt uses a repeatable authored celestial system of luminous 3D moon and phase objects, elliptical orbit paths, sparse stars, violet haze, and deep blue-purple space fields. The artwork is both expressive and informative, supporting onboarding, live lunar status, calendar, and subscription surfaces.

# Visual Style

Use an image-generation model to create original high-detail lunar renders with softly textured craters, controlled rim light, restrained atmospheric bloom, and dimensional phase shadow. Supporting elements use thin luminous orbital rings, dotted paths, geometric markers, sparse stars, and soft violet-blue fog. Generate the image, obtain visual approval, and integrate only the approved raster asset. Do not draw lunar art with SwiftUI `Shape`, `Canvas`, programmatic gradients/vectors, SF Symbols, emoji, or other programmatic substitutes.

# Composition

Center one moon or phase object as the dominant focal mass, typically occupying roughly one third to one half of the viewport. Let one elliptical orbit cross or surround it, with markers placed along the path and generous dark negative space. Controls float around the perimeter without covering the illuminated edge or phase boundary. Calendar variants use smaller consistently lit moon thumbnails in a disciplined grid.

# Color and Materials

Use deep navy, indigo, electric violet, moonlit white, and restrained lavender glow. The moon surface is mineral and softly rough rather than glossy plastic; glass belongs to the interface panels, not the lunar body. Lighting has one coherent direction per scene, with a cool rim and controlled bloom. Backgrounds remain dark and spatial, never flat black.

# Variants and States

Onboarding uses large cinematic moon/orbit scenes with clear text space. Live and phase-detail views prioritize scientifically legible illumination and markers. Calendar uses repeated phase thumbnails with matched texture and lighting. Pro/promotion variants may intensify violet haze and scale the moon larger, while loading/locked states retain the same scene instead of introducing unrelated artwork.

# Avoid

- Do not use SwiftUI shapes, `Canvas`, programmatic vectors or gradients, SF Symbols, emoji, or icon-font substitutes.
- Do not integrate generated art before visual approval; follow image-generation → approval → approved raster integration.
- Avoid flat moon icons, stock space photography, cartoon rockets/characters, excessive star density, warm sunset palettes, and inconsistent light direction.
- Do not obscure the lunar phase boundary with glow, text, or controls.
- Do not replace the celestial background with a generic purple gradient.
