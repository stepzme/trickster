# Overview

Aviasales uses a repeatable authored cartoon system for onboarding, loading, favorites, permission rationale, reassurance, and selected promotional moments. It is separate from hotel, destination, and map content photography.

# Visual Style

Use an image-generation model to create original flat/cartoon characters and travel objects with thick near-black outlines, simple rounded shapes, exaggerated hands/faces, compact expressions, and a limited saturated palette. Scenes feel humorous and direct rather than polished corporate vector art. Generate the image, obtain visual approval, and integrate only the approved raster asset. Do not use SwiftUI `Shape`, `Canvas`, programmatic vectors/gradients, SF Symbols, emoji, or other programmatic substitutes.

# Composition

Use one clear character/object or a compact two-subject interaction above or beside concise text. On blue onboarding fields, art may occupy roughly one third to one half of the viewport. Prompt/loading cards center a smaller object in generous white/blue negative space. Keep route, price, and booking controls outside the illustration and do not scatter many unrelated travel icons.

# Color and Materials

Anchor scenes in Aviasales blue and white, with controlled pink, orange, green, and skin/clothing accents. Shapes are flat or softly shaded, with strong outline contrast and little texture. Avoid glossy 3D material and photoreal lighting. The blue brand field should remain visually dominant in onboarding.

# Variants and States

Onboarding uses large characters or travel metaphors. Loading and reassurance use smaller humorous objects/figures. Favorite, permission, and empty prompts use one expressive subject. Destination/hotel promotions may combine authored cutouts with content imagery only when separation remains clear. Dense ticket, filter, passenger, seller, and payment surfaces stay illustration-free.

# Avoid

- Do not use SwiftUI shapes, `Canvas`, programmatic vectors or gradients, SF Symbols, emoji, or icon-font substitutes.
- Do not integrate generated art before visual approval; follow image-generation → approval → approved raster integration.
- Avoid generic corporate vectors, glossy 3D icons, realistic people, thin outlines, detailed scenery, and uncontrolled rainbow palettes.
- Do not obscure itinerary, price, or purchase controls.
- Do not confuse hotel/destination photography with the illustration system.
