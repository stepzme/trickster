# Overview

Monese uses a recurring flat-vector illustration language across introductory, address, feature, transfer, and savings-oriented surfaces. The artwork provides a friendly explanatory focal point while operational account rows and forms remain visually restrained.

# Visual Style

Illustrations use simplified financial, identity, address, transfer, and savings objects with clean geometric edges and minimal internal detail. Blue and cyan dominate, with small yellow, green, and occasional warm accents. Shading is limited to soft tonal changes; outlines are restrained or absent. A pale blue circular backplate repeatedly frames the focal object and separates it gently from the white canvas.

Create every required illustration with an image-generation model. Generate the composition as an image asset, review it, obtain explicit approval, and only then integrate it into the interface. Do not recreate the artwork with SwiftUI shapes, SF Symbols, ad hoc vector paths, or assembled interface icons.

# Composition

Place one primary object or compact symbolic scene at the center of a pale circular backplate. On introductory screens, the art occupies roughly one quarter to one third of the usable content height and sits above a centered title and short body copy. On smaller information surfaces, retain the full circular field and a clearly readable silhouette rather than cropping the object tightly.

Keep generous white negative space around the backplate. Text, actions, progress dots, and financial values remain outside the generated image. Use `contain` behavior and preserve the full circle unless an observed bounded card clearly clips it.

# Color and Materials

Use saturated Monese blue and light cyan as the main object colors, pale blue for the circular field, and small yellow or green accents for contrast. White remains the surrounding canvas and near-black remains the nearby text color. Materials should read as flat or softly dimensional vector surfaces, not glossy plastic, photographic objects, or textured paint.

# Variants and States

Observed roles include onboarding and welcome art, address or identity explanation, feature education, transfer-related objects, and savings imagery. Each variant changes the central symbol while retaining the pale circular backplate, simplified geometry, limited blue-led palette, clean edges, and consistent relative scale.

Generate only the variants required by the consuming product. Every generated result requires explicit visual approval before integration. Dense financial review rows, settings lists, and data-heavy forms should remain illustration-free.

# Avoid

- Do not substitute SF Symbols, emoji, stock vector people, or unrelated glossy 3D objects.
- Do not construct the illustration with SwiftUI shapes, programmatic paths, or assembled UI glyphs.
- Do not remove the pale circular backplate where it is a defining compositional element.
- Do not add realistic lighting, texture, busy scenery, or many competing objects.
- Do not crop the focal symbol so tightly that its meaning becomes unclear.
- Do not embed text, controls, financial values, or buttons in the image asset.
- Do not integrate generated artwork before explicit approval.
