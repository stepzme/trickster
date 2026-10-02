# Overview

Cian uses a recurring authored family of glossy blue-purple-cyan 3D pictograms for onboarding, services, wallet, messaging empty states, and other supporting utility surfaces. The imagery is distinct from real-estate photography and maps, which remain the primary evidence on property surfaces.

# Visual Style

Objects are simplified, rounded, and softly dimensional. Saturated Cian blue, cyan, violet, and occasional white or pale accents appear on glossy or translucent materials. Forms are compact and symbolic rather than realistic, with soft studio highlights and a restrained drop or floor shadow. The overall tone is helpful and polished rather than playful character illustration.

Create every required pictogram with an image-generation model. Generate it as an image asset, review the result, obtain explicit approval, and only then integrate it into the interface. Do not reconstruct the artwork with SwiftUI shapes, SF Symbols, ad hoc vector paths, or assembled interface icons.

# Composition

Use one primary object or tight symbolic cluster per card or empty state. In service tiles, the pictogram occupies roughly one quarter to one third of the card and leaves a clean zone for title and action. In onboarding or empty states, it may sit centrally with generous white or pale-blue negative space above concise text.

Preserve the complete silhouette with `contain` behavior. Text, values, buttons, and status labels remain outside the generated asset. Avoid placing the object over maps or real-estate photography.

# Color and Materials

Anchor the palette in saturated Cian blue and light cyan, with violet used for depth or secondary surfaces. White and pale blue-gray provide the surrounding field. Use glossy, softly translucent, or polished materials with controlled highlights and soft shadows. Avoid multicolor rainbow palettes, rough texture, photorealistic environments, or hard metallic reflections.

# Variants and States

Observed roles include onboarding decoration, service-category pictograms, messaging empty state, wallet empty-card art, and utility promotional tiles. Each variant changes the central symbol while retaining rounded geometry, blue-purple-cyan palette, glossy material, studio light, and restrained shadow.

Generate only variants required by the consuming product. Every generated result needs explicit visual approval before integration. Property listings, map results, photo galleries, and dense account rows should remain free of decorative pictograms.

# Avoid

- Do not substitute SF Symbols, stock 3D icons, emoji, or generic vector people.
- Do not recreate the imagery with SwiftUI shapes, programmatic paths, or assembled UI glyphs.
- Do not mix the pictograms into property photographs or map imagery.
- Do not introduce busy backgrounds, several unrelated objects, or many competing colors.
- Do not crop the focal object until its meaning becomes unclear.
- Do not embed product copy, prices, status, or controls inside the image asset.
- Do not integrate generated imagery before explicit approval.
