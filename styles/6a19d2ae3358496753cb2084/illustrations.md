# Overview

Ozon Travel uses a repeatable authored layer of glossy 3D travel objects, bright brand gradients, playful empty-state objects, and dimensional promotional motifs. It supports onboarding, category discovery, offers, and empty states while inventory screens continue to use real travel photography.

# Visual Style

Use an image-generation model to create original rounded 3D/glossy objects such as an airplane, globe, bell, gift box, luggage, ring, ribbon, tag, or simplified travel symbol. Forms are smooth, inflated, brightly lit, and layered with blue, cyan, violet, magenta, and occasional neon-green accents. Generate the image, obtain visual approval, and integrate only the approved raster asset. Do not recreate the art with SwiftUI `Shape`, `Canvas`, programmatic gradients/vectors, SF Symbols, emoji, or other programmatic substitutes.

# Composition

Use one dominant object or one tightly controlled object cluster. Onboarding places the object centrally within a broad gradient field, often occupying roughly one third to one half of the viewport. Promo cards crop the object boldly at an edge while preserving clear space for a short offer. Empty states center a single recognizable object above concise state/action text. Keep booking controls outside the artwork.

# Color and Materials

Electric blue is the base, with cyan highlights and violet-to-magenta spectral gradients. Objects use polished plastic, glass, or soft metallic surfaces with rounded edges, broad studio highlights, and restrained shadow/bloom. White or pale type must retain contrast against the brightest gradient areas. Green may appear as a small price/promotion accent, not the material base.

# Variants and States

Onboarding uses large cinematic travel objects; category/discovery uses smaller branded pictograms; promotional cards combine a dimensional motif with a gradient or destination-photo support; empty orders use a centered gift/box-like object. Inventory results and detail cards continue to use authentic hotel, destination, resort, or tour photography rather than converting content into illustration.

# Avoid

- Do not use SwiftUI shapes, `Canvas`, programmatic vectors or gradients, SF Symbols, emoji, or icon-font substitutes.
- Do not integrate generated art before visual approval; follow image-generation → approval → approved raster integration.
- Avoid flat stock vectors, cartoon characters, thin line-art travel icons, dull corporate blue, excessive object clusters, and inconsistent lighting/materials.
- Do not place bright objects behind essential search or booking controls.
- Do not replace travel inventory photography with 3D illustration.
