# Overview

Telegram uses a recurring authored image system for spacious onboarding, empty, premium, stars, gift, and educational states. The family includes rounded duck or character mascots, glossy sticker-like objects, compact premium hero clusters, expressive emoji assets, and faint line-doodle wallpaper motifs. These images support the interface rather than replacing dense communication content.

# Visual Style

Foreground art is bright, rounded, and highly legible at phone scale. Characters and objects use clean silhouettes, simplified volume, glossy highlights, soft depth, and a sticker-like finish. Expressions and poses are playful but compact. Premium and stars graphics use polished dimensional objects, sparkles, and controlled glow; wallpaper motifs reduce the same playful vocabulary to thin, low-contrast line drawings.

Final illustration assets must be produced with an image-generation model from an explicit visual brief. Generate candidate images, review them outside the interface, and obtain approval before integration. Do not recreate this authored language with SwiftUI shapes, SF Symbols, programmatic gradients, emoji glyphs, or improvised vector constructions.

# Composition

Use one character, object, or tightly grouped scene as the focal point. On onboarding and empty states it sits centrally in substantial negative space, usually above a short text block and optional blue action. Promotional hero art may grow larger but remains a coherent cluster rather than a collage. Sticker and emoji assets are compact and isolated; wallpaper doodles repeat as a quiet background layer and must never compete with message bubbles.

Art is supporting content on utility screens and the primary visual mass only on explicitly spacious empty or promotional screens. Preserve full silhouettes and identifying details; avoid clipping hands, faces, or key objects merely to fill a container.

# Color and Materials

Use saturated yellow, Telegram blue, coral, green, violet, and white highlights against quiet white, dark, or softly colored fields. Materials read as smooth plastic, polished sticker, or softly inflated 3D rather than photorealistic metal or fabric. Shadows and glow are soft and local. The nearby action remains Telegram blue even when the illustration palette is multicolored. Wallpaper line art stays faint enough to preserve bubble contrast.

# Variants and States

- Onboarding and empty states: one friendly character or object, open background, concise message, and optional blue action.
- Premium, stars, gifts, and promotional states: more polished dimensional objects, controlled sparkles, and a stronger central color mass.
- Sticker and emoji contexts: compact isolated expressions or objects with clear silhouettes at small sizes.
- Conversation wallpaper: repeating low-contrast line motifs over a soft color or gradient field.

No separate error or success illustration grammar was confirmed; those states should reuse the same authored family only when a matching approved asset exists.

# Avoid

- Do not draw the artwork with SwiftUI shapes, SF Symbols, emoji glyphs, or ad hoc code-generated vectors.
- Do not integrate generated art before the candidate image itself has been reviewed and approved.
- Do not substitute stock photography, flat corporate-vector scenes, generic 3D icon packs, or unrelated mascots.
- Do not scatter decorative characters through dense chat lists, settings rows, or message bubbles.
- Do not crop away the character expression, silhouette, or focal object.
- Do not make wallpaper motifs dark or detailed enough to reduce message readability.
- Do not turn a single focal cluster into a dense collage of unrelated objects.
