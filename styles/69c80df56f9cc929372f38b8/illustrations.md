# Overview

Opal uses a stable authored system of collectible 3D gems and milestone objects to make focus progress tangible. Glowing translucent minerals appear as the Home hero, detail collectibles, profile progress, and achievement-grid states; gray stones communicate locked milestones. Cinematic moon, weather, and soundscape imagery, brand marks, functional icons, charts, campaign collages, and decorative gradients are separate asset families.

Generate every new gem or milestone illustration with an image-generation model from a prompt derived from this document. The result requires separate visual approval before interface integration. Integrate only the approved raster asset. Do not recreate gems with SwiftUI shapes, SF Symbols, emoji, text glyphs, Canvas drawing, shader shortcuts, or stacked programmatic gradients.

# Visual Style

Use glossy 3D-rendered collectible objects with mineral, glass, or opal-like material. Shapes range from irregular rounded stones and faceted crystals to egg-like translucent opals. Unlocked objects contain prismatic color, cloudy inclusions, refraction, specular highlights, and luminous rim glow. Locked variants are rougher charcoal or gray stones with much less internal light.

There is no drawn outline. Silhouette, refraction, highlights, surface roughness, and glow define the edge. The style feels premium, tactile, and slightly otherworldly without becoming a generic glossy app-icon set. A small dark plinth or pedestal may support the object.

# Composition

Hero gems float centered in the upper or middle portion of a near-black screen and occupy enough space to become the primary visual mass. Leave broad dark negative space for a short title, progress, and lower controls. Detail gems occupy roughly the central third and may sit on a minimal base.

Profile and achievement variants repeat at smaller scale in a horizontal row or regular grid. Keep enough spacing for each silhouette and locked/unlocked distinction to remain readable. Avoid complex scenes; one collectible object is the focal point, with atmosphere supplied by glow and the dark surrounding field.

# Color and Materials

The base is black or deep charcoal. Unlocked gems use opal white, cyan, mint, blue, violet, magenta, and occasional warm yellow or orange. Light should appear emitted or refracted inside the object, with strong rim highlights and soft volumetric glow. Internal color can shift across the mineral but should feel optically coherent.

Locked stones use desaturated gray, charcoal, cloudy opacity, and rough mineral texture. Milestone flame or hourglass objects may introduce warm amber while retaining the same 3D collectible lighting and material discipline. Avoid broad flat fills, black outlines, plastic emoji surfaces, metallic badges, and arbitrary rainbow gradients.

# Variants and States

Unlocked variants include pale opal-like first gems, cyan or mint progress gems, blue and violet collectibles, and a stronger purple Pro gem. Locked milestones use rough gray stones with reduced glow and visual energy. Achievement grids combine small unlocked color variants with locked stones while preserving consistent scale and lighting.

Day-streak or time milestones may use a flame or hourglass-like collectible object, provided it remains a single luminous 3D object on the same dark field. Loading, permission, error, and generic empty-state illustrations were not observed as part of this family; do not introduce gems there solely as decoration.

# Avoid

- Do not draw the object directly in SwiftUI, UIKit, Canvas, or a runtime shader.
- Do not substitute SF Symbols, emoji, text glyphs, primitive shapes, or programmatic gradients.
- Do not integrate an unapproved model output; visual approval is required before raster integration.
- Do not use stock crystal photography, generic 3D icon packs, flat vector gems, metallic achievement badges, or cartoon jewels.
- Do not classify moon imagery, soundscapes, campaign collages, brand marks, functional icons, charts, or background gradients as gem variants.
- Do not crop the main silhouette, flatten its glow, or place multiple competing hero objects in one composition.
- Do not fill the surrounding black space with dense particles, scenery, or explanatory text.
