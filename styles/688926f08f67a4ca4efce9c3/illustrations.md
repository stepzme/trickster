# Overview

Mamba uses an authored flat illustration language for onboarding, education, and selected promotional moments. It is a separate visual layer from the member photography that dominates the core product.

When a product requires illustration in this language, generate it with the available image-generation model and integrate the result as an image asset. Do not recreate required product illustration programmatically with SwiftUI shapes, SF Symbols, or emoji. A screen that depends on the illustration is not ready for design approval until the generated image asset is integrated in the running app.

# Visual Style

The artwork is playful, simplified, and graphic rather than realistic. It combines friendly mascot-like figures, oversized letterforms, mail or notification objects, birds, waves, and lightly surreal scene fragments. Shapes are broad and rounded, outlines are sparse or confidently dark, and detail is limited so one motif reads immediately on a phone screen. Dimensionality is mostly flat with occasional soft gradient or layered-paper depth; it should never resemble glossy 3D clip art.

# Composition

Use one clear focal illustration rather than a collage. Onboarding art occupies a meaningful part of the lower half or lower third, while the prompt and controls retain generous negative space above it. Promotional art can be centered in a dedicated tile or sit beside a short benefit, but must not overlap member portraits or compete with identity content.

Preserve the observed scale: the artwork is large enough to establish the mood of a sparse screen while leaving safe-area and CTA clearance. Cropping may let a wave, oversized letter, or character extend beyond an edge when the focal face or object remains visible and nearby text stays unobstructed.

# Color and Materials

The palette draws from coral, orange, pink, cyan, lavender, cream, mint, white, and near-black. On pastel onboarding screens, the background itself is a large color field and the art uses a small set of stronger contrasting colors. On dark promotional surfaces, bright coral, cyan, or lavender motifs sit cleanly against charcoal or black.

Keep fills matte and shapes legible. Soft gradients can connect warm brand colors, but avoid metallic lighting, photorealistic material, heavy texture, or deep cast shadows. Illustration colors coordinate with UI accents without turning every object coral.

# Variants and States

Onboarding variants change the focal motif while retaining sparse layout, broad rounded shapes, and pastel-field harmony. Education and system messaging can reduce the scene to one symbolic object. Promotional or premium variants can increase warm coral/pink emphasis and use a dark surface, but remain separate from real profile photography.

No consistent illustrated error or success family was observed, so do not invent a complete state set. When a new state genuinely requires art, extend the same medium, palette discipline, single-focal-object composition, and scale rather than substituting a generic icon.

# Avoid

- Do not redraw the artwork from programmatic SwiftUI circles, paths, gradients, or assembled SF Symbols.
- Do not use emoji, generic stock vectors, glossy 3D characters, photorealistic scenes, or corporate gradient people.
- Do not shrink a required illustration into a decorative icon that no longer carries the lower-screen visual mass.
- Do not crowd several unrelated motifs into one scene or fill negative space with ornamental copy.
- Do not place authored characters over member portraits or style real member photography as illustration.
- Do not request design approval while a required generated image asset is absent from the running screen.
