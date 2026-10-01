<design-context>
# Overview

VK Dating is primarily photographic, but it also has a repeatable authored image layer for premium attention, gifts, and safety education. Premium scenes use polished 3D gift-like objects with saturated blue, purple, pink, and orange-yellow accents; safety content uses softer, flatter editorial icons. These roles remain secondary to real profile photography.

# Visual Style

Premium and gift artwork uses clean 3D-rendered objects with rounded forms, soft studio lighting, smooth materials, and a playful but controlled sense of volume. Recognisable motifs include gift or reward objects, hearts, attention symbols, and premium markers. Safety artwork is flatter and more editorial: simple friendly vector scenes or icons with soft shapes, limited detail, and the same blue-led product palette.

Generate required illustrations with the available image-generation model. Do not construct gift objects, hearts, characters, safety scenes, or premium art from SwiftUI shapes, emoji, or SF Symbols. Show generated results for explicit approval before integrating them into the app.

# Composition

In a premium modal or gift surface, one central 3D object is the focal point and occupies a meaningful share of the upper or middle card, with clear negative space for a short title, value, and action. The object may sit on a saturated disk, glow, or simple color field, but should not compete with multiple secondary props. Safety article cards use smaller supporting art aligned with a concise title and excerpt; the image supports reading rather than becoming a full-screen hero.

Keep authored illustrations inside their dedicated card, sheet, or article region. Do not overlay them onto profile faces or substitute them for the tall photographic person card.

# Color and Materials

Premium art draws from VK blue, purple, hot pink, and orange-yellow, often against white, pale gray, or a saturated promotional field. Surfaces are smooth and softly lit, with moderate dimensional shading rather than photorealistic texture. Safety art uses lighter blue, pink, lavender, and neutral fields with flat or gently shaded fills. Maintain strong separation from nearby text and preserve the white/pale-gray application surfaces defined in `ui.md`.

# Variants and States

Attention, Superlike, subscription, and gift variants may change the central object and dominant accent while retaining the same polished 3D medium, rounded geometry, and uncluttered composition. Safety variants use consistent flat editorial treatment across article cards and reading entry points. Empty likes and ordinary profile states should not automatically receive this authored art; their visual priority remains the product state and photography.

# Avoid

- Do not replace generated authored imagery with SwiftUI shapes, SF Symbols, emoji, or generic stock icons.
- Do not use childish cartoon mascots, hand-drawn sketching, clay characters, or unrelated photorealistic product renders.
- Do not mix the polished 3D premium medium and the flat safety medium inside one illustration.
- Do not place illustration over a person's face or use it as a substitute for profile photography.
- Do not crowd a premium card with many objects, decorative copy, or busy scenic backgrounds.
- Do not apply premium gradients and 3D art to ordinary settings, chats, or form validation states.
</design-context>
