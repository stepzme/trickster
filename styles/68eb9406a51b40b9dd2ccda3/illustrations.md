# Overview

Le Chat uses a stable authored pixel-art system as its assistant identity and branded visual layer. The same blocky mascot appears on splash, onboarding, welcome, assistant-avatar, incognito, and upgrade surfaces, while onboarding expands the language into a constellation of small pixel scenes. When this artwork is required, generate it with the available image-generation model, obtain visual approval, and integrate the approved raster asset into the interface. Do not recreate it from SwiftUI shapes, SF Symbols, emoji, or programmatic pixel grids. A screen that calls for the mascot or onboarding world is not visually complete until the generated image is visible in the running app.

# Visual Style

Use deliberately low-resolution pixel art with crisp hard edges, stepped diagonals, blocky silhouettes, and no anti-aliased vector smoothness. The central mascot is an abstract yellow-orange-red M-like figure that can read as a small creature or assistant mark without becoming a detailed character. Supporting scenes use tiny devices, landscapes, symbols, and simplified figures at the same pixel density. The treatment is flat and graphic, with minimal shading and compact clusters of color against a dark field.

# Composition

For splash, welcome, loading, and empty chat states, isolate one mascot near the visual center and preserve generous negative space around it. For onboarding, arrange multiple small pixel scenes as a loose constellation across the upper and middle field while keeping the lower text and action region quiet. The assistant avatar is a tightly cropped small square or compact mark aligned with response content. On upgrade surfaces, a simplified light mascot mark may sit against the orange field. Keep native text and controls outside the generated image.

# Color and Materials

Anchor the mascot in yellow, orange, and red, with small cyan, green, purple, gray, or white details in supporting scenes. The dark charcoal from `ui.md` is part of the default illustration field, while the upgrade variant can invert the mascot to white over orange. Colors should be opaque and discrete rather than softly blended. Preserve crisp pixel boundaries, limited shading, and high silhouette contrast. Avoid glossy 3D material, painterly texture, photographic lighting, soft gradients inside the art, or neon glow.

# Variants and States

- **Splash or loading:** one small centered mascot, isolated and high contrast.
- **Onboarding:** repeated small scenes and symbols around the mascot, with controlled density and clear lower negative space.
- **Welcome or empty chat:** one centered mascot at a moderate scale above the composer, without additional decorative panels.
- **Assistant identity:** a compact mascot avatar beside response or progress content.
- **Incognito or private context:** the same mascot language with a minimal contextual pixel accessory only when required.
- **Upgrade:** simplified white or light mascot mark on the saturated orange composition.

Do not invent branded error, success, permission, or document variants unless a new generated proposal is explicitly approved.

# Avoid

- SwiftUI shapes, Canvas code, programmatic pixel grids, SF Symbols, emoji, or a smooth vector logo standing in for generated artwork.
- Anti-aliased edges, high-resolution cartoon rendering, 3D characters, hand-drawn outlines, stock robots, or generic chatbot mascots.
- Pixel fonts in functional interface text or pixel treatment applied to generated images, documents, and operational icons.
- Dense onboarding art behind native copy, random full-screen tile patterns, or crops that cut off the mascot silhouette.
- Text, controls, prompts, logos, or labels baked into the generated asset.
- Integrating the first generated result without visual review and explicit approval.
