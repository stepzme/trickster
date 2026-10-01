# Overview

Lovi uses a narrow but recurring authored identity: a small smiling circular or blob-like assistant and related soft-gradient logo treatment make guidance feel friendly across splash, onboarding, completion, primary tabbed screens, and assistant entry points. Product, tutorial, and scan content remains photographic rather than illustrated.

# Visual Style

The assistant is a simple rounded face with tiny dark eyes and a curved smile, formed from a softly shaded white, blush, lavender, and periwinkle volume. Edges are diffuse rather than outlined, and the surrounding glow feels airy and translucent. Keep facial detail minimal and immediately readable at small sizes; do not expand the mascot into a detailed character body or narrative scene. Supporting navigation and choice icons remain thin line art and are not part of the mascot rendering.

# Composition

Use the assistant as one compact focal object, typically in the upper-middle of sparse onboarding screens, beside a short guidance message, or floating near the lower trailing edge above navigation. It should occupy a minority of the viewport and retain clear space around the face. Larger onboarding appearances may anchor the composition; persistent assistant affordances stay small enough not to overlap a CTA, card title, score, packshot, or safe-area control.

# Color and Materials

The assistant draws from the same pale lavender, blush pink, white, and periwinkle palette as `ui.md`, with a soft volumetric gradient and restrained bloom. Facial marks are dark violet or black for contrast. Green compatibility, yellow retailer, and red error colors do not belong inside the mascot. Avoid hard outlines, plastic gloss, metallic lighting, grain, or high-contrast shadow.

# Variants and States

Observed variants change scale, placement, surrounding glow, and relationship to the Lovi mark rather than changing the core face construction. Use larger calm treatments for splash, onboarding, or completion and a compact floating treatment for ongoing assistance. Keep product recommendations, scan results, tutorials, legal content, and retailer transitions factual and photographic; do not insert mascot scenes into those surfaces unless the reference role is guidance.

# Avoid

- Generate the assistant artwork with an image-generation model and obtain approval before integrating it; do not recreate it from SwiftUI shapes, SF Symbols, or hand-built gradients.
- Do not introduce limbs, detailed characters, narrative backgrounds, stickers, or multiple mascots.
- Do not replace the soft volumetric face with flat emoji art, clip art, stock wellness imagery, or a generic chatbot icon.
- Do not crop the facial features, crowd the glow against nearby text, or let the floating variant obscure product and scan content.
- Do not reuse the mascot palette for semantic compatibility, price, warning, or error states.
