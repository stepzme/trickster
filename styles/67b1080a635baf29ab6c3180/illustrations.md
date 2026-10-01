# Overview

memo has a persistent branded illustration system centered on a retro-screen mascot. It also uses large, deliberately heterogeneous meme and lesson imagery, but that content media is a separate asset class and does not need to imitate the mascot style.

# Visual Style

The mascot has a rounded square off-white shell, a glossy black screen face, thin flexible arms and legs, and minimal white facial marks. Expressions are built from a few eye and mouth strokes. The object is rendered as a soft 3D character with studio highlights, gentle grounding shadow, and a clear silhouette rather than as flat vector art.

The primary environment is fluorescent green. The mascot may appear alone, cropped inside a circle, or partially hidden behind a content module. Scale changes, but the shell, face proportions, limb treatment, and small `memo` mark remain consistent.

Product illustration must be generated with the available image-generation model and integrated into the interface as an image asset. It must not be recreated programmatically in SwiftUI. A screen that requires illustration is not ready for design approval until the generated image asset is integrated.

# Composition

- **Splash:** one large mascot is centered in a nearly empty full-screen field.
- **Conversation:** the mascot appears as a large circular portrait above the exchange and as a small avatar beside its messages.
- **Feature or collection tile:** the character may crop beyond the tile edge, but the face and screen silhouette remain readable.
- **Compact brand mark:** the mascot or green `memo` capsule is reduced to a small recognition cue without adding extra decorative objects.

Lesson memes, photographs, cartoons, screenshots, and 3D topic images keep their own native composition. When they are the teaching material, one asset occupies most of the media stage and any caption is kept separate or made legible against the source.

# Color and Materials

The signature field is fluorescent green, paired with a warm off-white or pale gray shell and a deep glossy black face. White facial marks and the small wordmark stay crisp. Soft gray edge shading gives the shell volume; limbs use the same neutral material. Avoid introducing a second permanent mascot palette simply to match a particular lesson.

Content imagery may use any colors required by the source. Its variability is intentional and should not be normalized into the mascot palette.

# Variants and States

The mascot supports neutral, greeting, encouraging, waiting, and celebratory expressions through small face and pose changes. It can be static for accessibility or move subtly when introducing a message or transition. It does not become an error icon, navigation glyph, or repeated decoration on every screen.

For unavailable final art, use a temporary image asset that preserves the intended crop, scale, green color mass, and surrounding negative space. A system symbol, geometric placeholder, or programmatic approximation is not sufficient for approval.

# Avoid

- Do not redraw the mascot from basic SwiftUI shapes or substitute a robot emoji or SF Symbol.
- Do not mix the mascot's controlled 3D treatment with random stock characters.
- Do not force meme and lesson media into one uniform illustration style.
- Do not place busy content behind critical copy without a readable separation treatment.
- Do not scatter mascot variants through dense exercises where they compete with the prompt.
