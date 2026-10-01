# Overview

Wibes has a repeatable illustration system for onboarding, topic selection, education, sign-in gates, empty comments, and connection recovery. It combines neon sticker graphics, softly extruded toy-like objects, doodle accents, and occasional cutout portraits. This system is separate from creator video and product photography.

# Visual Style

- Build objects from chunky rounded silhouettes with soft 3D volume, crisp cutout edges, and dark-violet or white drawn details.
- Combine electric violet, acid lime, hot pink, warm yellow, and white; use small starbursts, orbit lines, sparkles, speech bubbles, tape, and handwritten marks as secondary accents.
- Human figures are cleanly cut out and layered with flat blobs, oversized stickers, or tilted portrait cards rather than placed in generic lifestyle scenes.
- When the product requires an illustration in this language, generate it with the available image-generation model and integrate it as an image asset. Do not recreate it programmatically in SwiftUI. The screen is not ready for design approval until the generated asset is integrated.

# Composition

- Use one dominant object, mascot, device, or portrait group rather than a field of equally weighted decoration.
- Center sparse recovery and sign-in art above the message; allow the illustration to occupy roughly one third of the screen.
- In onboarding, reserve the middle half of the screen for the image and keep a clear region for a short headline and one action.
- In category tiles, let the illustration crop confidently against an edge while keeping the label unobstructed.

# Color and Materials

- Prefer purple-to-pink gradients, acid-lime highlights, glossy or rubbery toy surfaces, and flat white speech elements.
- Keep depth soft and graphic: shallow extrusion, restrained shadow, and simple highlights rather than photoreal rendering.
- Place the art on black, charcoal, violet, or a saturated gradient field; do not add beige corporate backgrounds or low-contrast pastel washes.

# Variants and States

- Topic art uses compact category-specific objects inside dark tiles.
- Education and onboarding may use mascots, bags, phones, portrait cards, and oversized symbols.
- Empty and error states use one direct metaphor, one message, and one recovery or authentication action.
- Creator media, editorial photography, and product imagery remain photographic; do not force the illustration treatment onto them.

# Avoid

- Do not substitute stock vector packs, thin corporate line art, emoji, or arbitrary SF Symbols.
- Do not scatter decorative marks across copy or controls.
- Do not generate a different rendering style for each state.
- Do not remove the image and approve the screen based on a placeholder icon or empty reserved area.
