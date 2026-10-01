# Overview

OTP Bank uses a recurring authored 3D image language for branded onboarding, product promotion, and focused result or confirmation moments. The art consists of abstract financial and geometric objects rather than characters or narrative scenes. When one of these roles is present, the illustration is a required image asset: generate it with the available image-generation model, obtain visual approval, and integrate the approved raster asset into the interface. Do not recreate it from SwiftUI shapes, SF Symbols, emoji, or programmatic gradients. A screen that calls for this art is not visually complete until the generated image is visible in the running app.

# Visual Style

Use soft glossy 3D rendering with rounded, inflated geometry, clean studio lighting, and smooth materials. Recognisable motifs include lime spheres and loops, violet or graphite blocks, floating cubes, soft cloud-like forms, checkmarks, and simplified product objects. Forms are abstract but legible, with gentle depth, soft contact shadows, and controlled highlights. The treatment is polished and compact rather than toy-like, hand-drawn, photographic, or character-driven.

# Composition

Compose one dominant object or a small coherent cluster, usually centered or offset within a clean field. The art should create a distinct visual mass without competing with the adjacent title and action. Preserve generous negative space and crop only peripheral forms; do not cut the focal object or its key silhouette. In product tiles, the object can occupy roughly one-third to one-half of the card. In onboarding or confirmation compositions, it may occupy a larger centered region above the text. Keep text outside the generated image so layout and accessibility remain native.

# Color and Materials

Anchor the palette in electric lime, violet, graphite, and white from `ui.md`. Lime should be the clearest brand cue, violet the secondary depth or contrast color, and graphite a grounding material. Use smooth plastic, rubber, glassy, or enamel-like surfaces with subtle gradients created by lighting. Shadows should be soft and neutral. Avoid unrelated rainbow palettes, metallic luxury styling, noisy grain, hard black outlines, or high-gloss chrome.

# Variants and States

- **Onboarding or access:** a larger open composition with a clear lime-led focal object and ample space for the native title and primary action.
- **Product or promotion:** a tighter object cluster or product-like 3D thumbnail, scaled to remain legible inside a rounded card.
- **Success or completion:** a compact centered object with an unmistakable positive motif such as a generated 3D checkmark, still using the same material and palette.
- **Utility or analytical promotion:** abstract cubes, arcs, or cloud forms may support a branded message, but must remain secondary to actual data and controls.

Do not invent character, error, permission, or empty-state variants unless the product calls for them and the generated proposal is explicitly approved.

# Avoid

- SwiftUI shape compositions, Canvas drawings, programmatic gradients, SF Symbols, or emoji standing in for generated artwork.
- Flat vector mascots, human characters, hand-drawn scenes, stock photography, or generic fintech icon packs.
- Dense piles of unrelated objects, excessive reflections, hard neon glow, or busy scenic backgrounds.
- Text, labels, UI controls, card numbers, or logos baked into the generated image.
- Crops that remove the focal silhouette or art so small that it reads as a decorative icon.
- Integrating the first generated result without visual review and explicit approval.
