# Overview

Wise uses a recurring authored system of tactile symbolic objects in onboarding, empty, educational, card, task, and promotional contexts. The imagery gives open brand surfaces a physical focal point while critical financial rows remain intentionally illustration-free.

# Visual Style

Objects are rendered as small glossy sculptures with rounded or simple silhouettes. Their surfaces look hand-painted or marbled rather than uniformly plastic: saturated colors flow through imperfect cyan, pink, orange, yellow, violet, and green textures. Lighting is soft and studio-like, with controlled highlights and a minimal grounding shadow. Recognizable motifs include locks, calendars, wallets with money, bells, paper planes, and payment-card objects.

Create required artwork with an image-generation model. Generate each composition as an image asset, review the result, obtain explicit approval, and only then integrate it into the interface. Do not reconstruct these objects with SwiftUI shapes, SF Symbols, ad hoc vector paths, or assembled interface icons.

# Composition

Use one primary object per composition. Place it centrally in the upper or middle content region, usually in a frontal or slight three-quarter view, and give it substantial clean negative space. The object may occupy roughly one quarter to two fifths of an open screen or become the dominant image inside a bounded promotional tile.

Text and actions remain outside the generated asset. On full brand surfaces, the object sits above a bold display title and concise supporting text. On smaller tiles, keep the prop recognizable and avoid crops through its silhouette. Use `contain` behavior unless a captured promotional variant clearly uses a tighter crop.

# Color and Materials

Acid green and deep green connect the art to `ui.md`; warm white or dark green provides a quiet field. The object carries the wider saturated palette through marbled cyan, pink, orange, yellow, violet, and lime areas. Preserve tactile glossy highlights, soft studio illumination, and restrained shadows. Avoid realistic environmental lighting, metallic luxury rendering, or broad background gradients that compete with the object.

# Variants and States

Observed roles include onboarding objects, card-ordering and card-surface imagery, a lock for security, calendar or bell motifs for scheduled and recurring states, wallet or money props, paper-plane payment or request motifs, and object-led empty states. Promotional tiles may place the same material language on a deep-green field.

Travel stamp graphics and editorial photography are separate contextual variants and should not be mixed into the tactile-object system. Generate only product-required variants, and require explicit approval for every generated image before integration.

# Avoid

- Do not substitute generic vector people, stock 3D icons, emoji, or SF Symbols.
- Do not recreate the objects with SwiftUI shapes, programmatic paths, or assembled UI glyphs.
- Do not place several equally dominant props in one composition.
- Do not remove the imperfect marbled texture in favor of smooth generic plastic.
- Do not crop the focal object so tightly that its symbolic silhouette becomes unclear.
- Do not embed interface copy, financial values, controls, or buttons into the image asset.
- Do not integrate generated artwork before explicit visual approval.
