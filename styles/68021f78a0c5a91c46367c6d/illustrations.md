# Overview

T-Bank uses a coherent authored object language for product discovery, services, rewards, education, and campaigns. Compact glossy objects appear in story tiles and service marks; larger scenes and renders anchor campaign cards. Photography is a separate system for travel and retail and must not be treated as illustration.

# Visual Style

Objects are rounded, polished, and slightly toy-like, with soft studio lighting, controlled reflections, and simple readable silhouettes. Graphite, white, and brand yellow establish the base; blue, purple, cyan, coral, and lime distinguish services. Dark or softly graded backplates give small objects enough contrast.

When a product requires illustration in this language, generate it with the available image-generation model and integrate the result as an image asset. Do not recreate required product illustration programmatically in SwiftUI. A screen that depends on that illustration is not ready for design approval until the generated asset is integrated in the running app.

# Composition

Small story or category art centers one object or a compact cluster inside a bounded tile, leaving a text-safe region. A campaign may enlarge the object to occupy roughly one third to one half of its card and may overlap a gradient or platform. Preserve the intended crop and visual weight; do not reduce a hero object to an icon beside the title.

# Color and Materials

Use matte-to-gloss graphite, clean white, and warm yellow as recurring materials. Add one concentrated service color where it improves recognition. Lighting is broad and soft, with restrained shadows and no gritty texture. Photographic travel and merchant content keeps its natural palette rather than being recolored to imitate the object system.

# Variants and States

Use compact objects for services, cashback, achievements, security, account products, and story entry points. Use larger object scenes for onboarding or promotional education. Keep transfer forms, transaction rows, account details, fees, and confirmations primarily informational; illustration may introduce the task but must not compete with the decision.

# Avoid

- Do not replace branded objects with arbitrary SF Symbols, flat corporate vectors, emoji, or unrelated stock art.
- Do not mix travel or merchant photography into the 3D object family.
- Do not scatter decorative objects through amounts, recipient lists, fee disclosures, or account settings.
- Do not alter the reserved crop, scale, or text-safe area after the screen hierarchy has been approved.
- Do not use harsh black shadows, noisy textures, or realistic room lighting that breaks the clean studio treatment.
