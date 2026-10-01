# Overview

hh business uses a lightweight but repeatable authored illustration system in onboarding and selected empty or gated states. Simple hand-drawn human figures and recruiting scenes soften operational white screens, while candidate avatars, photographs, functional icons, payment marks, and brand logos remain separate image categories.

# Visual Style

The illustrations use flat simplified people, loose hand-drawn contours, minimal facial detail, and clean geometric props. Blue is the dominant fill, with red and black accents and occasional pale-blue background washes. Small decorative strokes or marks add energy without becoming texture. The style is editorial and human rather than glossy or dimensional; characters are situational figures, not named mascots.

Create required final artwork with an image-generation model. Present every generated image for explicit approval before integrating it into the app. Do not recreate the figures or scenes with SwiftUI shapes, SF Symbols, emoji, or improvised code-drawn geometry.

# Composition

Use one centered figure or compact human scene per onboarding card or empty state. The art should occupy a meaningful portion of the upper or central screen while leaving a clear zone for a short title, explanation, and action. Pale-blue panels or washes may frame the scene, and a few loose decorative marks may extend around the figure. Avoid placing illustration behind dense candidate data, vacancy metadata, filters, forms, or chat transcripts.

# Color and Materials

Anchor the art in the same bright blue used by `ui.md`, balanced with black linework, white space, pale blue, and restrained red accents. Keep fills flat, outlines crisp but slightly informal, and shading minimal. The host surface remains white or very pale blue. Avoid glossy 3D material, photographic textures, broad gradients, or multicolored scenes that compete with semantic status colors.

# Variants and States

Onboarding variants can use a small sequence of recruiting or workplace scenes with consistent character proportions. Empty vacancies, chats, favorites, or gated company-profile states use a quieter centered figure and more negative space. A photographic seasonal campaign remains outside this system. Generate and approve each materially different scene before integration rather than assembling variants from code primitives.

# Avoid

- Do not substitute stock business photography, generic corporate clip art, 3D icon packs, or emoji.
- Do not draw final artwork with SwiftUI shapes or assemble it from SF Symbols.
- Do not integrate generated artwork before explicit visual approval.
- Do not treat candidate avatars, gray silhouettes, charts, payment marks, or functional icons as illustration variants.
- Do not place decorative figures behind operational data or forms.
- Do not overfill scenes with props, text, or many accent colors.
- Do not shrink the central figure into an insignificant icon when the reference uses art as the empty-state focal mass.
