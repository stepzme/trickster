# Overview

Illustration is the primary product surface: authored low-poly worlds and isolated 3D objects embody atmosphere, energy, focus, progress, and collectible states. The imagery must be created with an image-generation model, visually approved before implementation, and integrated as the approved raster asset.

# Visual Style

Use soft low-poly 3D rendering with simplified chunky geometry, gentle faceting, atmospheric haze, and selective rim or directional light. Recurring motifs include stylized forest clusters, desert rocks, water basins, paths, watchtower-like landmarks, clouds, sun and moon discs, animal or avatar marks, orbit dots, and sculpted achievement badges. Detail comes from silhouette, depth, light, and material color rather than fine texture or line art.

# Composition

Active environments fill the complete viewport and establish a readable horizon or central landmark, while leaving stable negative-space zones at the edges for the HUD. Crop peripheral terrain, not the focal landmark. On black onboarding or achievement surfaces, isolate one authored object or badge near the center with ample darkness around it. Mode tiles use compact square crops of the same world, color, or sculpted motif.

# Color and Materials

The stable shell is black or charcoal with white chrome and yellow-gold active marks. Each environment may introduce one coherent atmospheric palette: pale cyan sky, peach-pink desert, moss and olive forest, watery green, purple, or salmon. Materials are matte or softly faceted, with restrained gradients, fog, rim light, and occasional glow; avoid noisy texture and photorealistic surface detail.

# Variants and States

Onboarding uses isolated objects or small environmental tableaux on black. Active modes expand the same language into full-screen worlds with distinct palette and lighting. Focused, distant, interstellar, boost, normal, and rise-like states alter environment, central display word, or light without changing the illustration family. Timer overlays soften the world behind a sheet. Achievements and locked states reduce the language to sculpted badge silhouettes; wallpapers reuse full environmental compositions.

# Avoid

- Generate every new illustration with an image-generation model, obtain explicit visual approval of the result, and only then integrate the approved raster asset.
- Do not draw or approximate the illustration with SwiftUI shapes, `Canvas`, programmatic vectors, SF Symbols, or emoji.
- Do not use stock photography, photorealistic scenery, flat cartoon art, or unrelated illustration styles.
- Do not place multiple competing landmarks in one scene or remove the readable horizon and atmospheric depth.
- Do not crop the focal object, cover it with opaque UI, or fill its control-safe negative space.
- Do not reuse one palette for all modes or let texture detail overpower the large low-poly forms.
