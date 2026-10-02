# Overview

PayPal shows a stable authored illustration system in onboarding: repeated large raster scenes pair simple people, commerce objects, security symbols, and saturated PayPal blue fields with minimal UI chrome. This art is separate from the financial UI components and must be produced as approved raster imagery.

# Visual Style

Use flat vector-like characters and objects with bold silhouettes, large rounded forms, simplified facial features, and saturated brand color blocks. Shapes are clean and friendly, with minimal texture, no realistic lighting, and no detailed linework.

Observed motifs include a person on a sofa with a laptop, circular profile portraits with chat/payment symbols, and a large shield with a lock. Blue fields carry the upper illustration area; white lower panels carry the copy and actions.

Use an image-generation model or commissioned raster artwork to create new illustrations in the observed PayPal onboarding style. Do not build these scenes from SwiftUI shapes, SF Symbols, emoji, template icons, or other programmatic stand-ins.

# Composition

Place the illustration in the upper half of the screen, centered and large. Leave enough clear space around the art so the figure, object, or security symbol reads instantly at mobile size. Pair each illustration with a white lower panel, bold centered heading, pagination dots, and bottom pill actions.

The image should not compete with form fields or transaction content. Authored art belongs to onboarding and permission-style moments, while product screens use cards, avatars, wallet art, and merchant marks.

# Color and Materials

Use PayPal blue as the dominant field color, with white panels and black headings. Secondary art colors may include deep blue, bright green, red, yellow, purple, skin tones, and pale blue. Keep fills matte and simple; do not introduce glossy 3D, photorealistic scenes, or complex gradients.

# Variants and States

Observed variants include shopping-confidence onboarding, payment onboarding, privacy/security onboarding, and permission-style education art. Every generated or commissioned image must receive explicit user visual approval before it is treated as final, then be integrated as raster assets in the app asset catalog.

Export raster assets at the sizes needed for iPhone densities. Preserve crop, aspect, and visual weight across compact and tall devices. The final implementation must load the approved raster asset, not reconstruct it in SwiftUI.

# Avoid

- Do not use SwiftUI shapes, SF Symbols, emoji, generic clip art, or programmatic drawings as final illustrations.
- Do not mix the flat onboarding artwork with realistic permission-card imagery in the same illustration family.
- Do not crop off faces, shields, locks, commerce symbols, or primary props.
- Do not add extra characters or decorative objects just to fill empty space.
- Do not ship generated art without user visual approval and raster asset integration.
