# Overview

Yandex Afisha uses a supporting authored illustration system for onboarding, empty states, account prompts, and category-like symbols. The art is secondary to event photography but visually coherent: bold yellow shapes, thick black contours, white face or hand details, and simple mascot-like metaphors communicate one state at a time.

# Visual Style

Characters and objects are flat, high-contrast cartoons with heavy black outlines, simplified rounded proportions, and minimal internal detail. Yellow supplies the main filled mass; black defines contours, facial features, limbs, and small accents; white is reserved for eyes, hands, cutouts, or negative space. Shading is absent or extremely restrained. Motifs are anthropomorphic objects and compact pictograms rather than detailed scenes.

# Composition

Use one principal character or metaphor as the focal point. On empty or account states it sits centered in a broad field and occupies a substantial fraction of the available content area, with clear negative space for a short title and action. Onboarding may place the object against a nearly full-screen yellow field. Smaller category graphics stay compact and isolated rather than forming busy multi-object environments.

The art supports nearby copy but is not a background texture. Preserve the complete silhouette and thick contour; do not crop away expressive hands, eyes, or the defining object shape.

# Color and Materials

The core palette is neon yellow aligned with `ui.md`, dense black, and clean white. Flat fills and crisp contours dominate; avoid soft material rendering, glossy 3D surfaces, photographic textures, pastel palettes, and decorative multi-color gradients. Any secondary color should remain incidental and must not dilute the yellow-black identity.

# Variants and States

Observed variants include onboarding or permission-adjacent art, an empty state built around a yellow heart-like mascot, an account/profile prompt, and matching compact category pictograms. Scale changes by role: large character art for focused states, smaller isolated symbols for categories. The same contour weight, yellow fill, white details, and minimal shading remain consistent across variants.

# Avoid

- Do not substitute emoji, stock vectors, thin outline icon packs, or arbitrary SF Symbols for authored character art.
- Do not add detailed environments, soft pastel scenery, realistic lighting, or dimensional 3D materials.
- Do not crop the focal silhouette so tightly that its metaphor or gesture becomes unclear.
- Do not apply the character style to event photography, ticket data, maps, or dense transactional rows.
- When new artwork is required, generate it with the available image-generation model in this documented style, show it for approval, and integrate the approved image asset; do not recreate it from SwiftUI shapes.
