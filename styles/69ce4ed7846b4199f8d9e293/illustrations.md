# Overview

Illustration is the central state and reward language: a large tactile sphere, low-poly quest object, achievement badge, or collectible material skin turns each dark screen into a focused stage. Every new image must be created with an image-generation model, visually approved before implementation, and integrated as the approved raster asset.

# Visual Style

Use object-centric 3D imagery that ranges from hard-edged low-poly geometry to smooth glass, matte graphite, chrome, opal, wireframe, and saturated rainbow materials. Forms are monumental and simple, with explicit depth, specular highlights, deep shadow, selective blur, and strong rim or yellow-orange key light. Recurring motifs include spheres, embedded checkmarks, miniature quest objects, tiny triangular markers, sculpted achievement silhouettes, progress rings, and collectible skin variants.

# Composition

Place one dominant object at the center of a near-black stage, normally around 55–70% of screen width, with its silhouette, full shadow, and material highlights visible. Keep large areas of empty darkness around it and place copy above or below rather than over the visual core. In skin showcases, the artwork may become a full-screen poster while a compact lower carousel remains legible. Achievement imagery uses repeated square cells with one centered sculpted silhouette per cell.

# Color and Materials

Black and charcoal remain the environment; white and yellow-orange provide stable interface contrast. Object variants may use graphite gray, bright cyan, translucent glass, opal pink-blue, chrome, industrial orange, or intense rainbow magenta/cyan/blue. Lighting should reveal material and volume with deep shadows, specular response, restrained bloom, and clear edge separation. Do not let colorful skins recolor unrelated chrome.

# Variants and States

Onboarding introduces isolated objects on black. The daily unchecked state presents the base sphere or object; completion preserves its scale and position but adds a glassy surface, internal checkmark, or stronger illumination. Story and step screens use distinct low-poly quest objects with the same stage lighting. Achievements reduce the language to sculpted silhouettes and rings, with locked variants lowering contrast. Premium and recap surfaces use selected authored graphics, while the skins view expands material variants into full poster-like scenes.

# Avoid

- Generate each new illustration with an image-generation model, obtain explicit visual approval of the result, and only then integrate the approved raster asset.
- Do not draw or approximate the artwork with SwiftUI shapes, `Canvas`, programmatic vectors, SF Symbols, or emoji.
- Do not mix in stock photography, flat generic cartoons, or unrelated icon packs.
- Do not show multiple competing focal objects or crop the main silhouette, shadow, or material highlight.
- Do not replace glass, faceting, specular light, and material depth with a flat gradient circle.
- Do not place long copy or dense controls over the central object.
- Do not use skin colors as a universal app palette; preserve the black stage and yellow-orange active signal.
