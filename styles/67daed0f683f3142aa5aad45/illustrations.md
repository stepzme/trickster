# Overview

Yandex Travel uses a repeatable authored illustration layer alongside destination photography. Operational states use small softly modeled brand objects, while seasonal campaigns can expand into bold geometric fields with a single toy-like object. This language does not replace hotel, room, city, event, or excursion photography.

# Visual Style

- Operational objects are simple, softly rounded 3D forms with matte-to-satin material, restrained shadows, and a pale lavender backplate or glow.
- Brand objects concentrate yellow and violet: the globe, notification symbol, account tile, and warning marker use one immediately readable metaphor.
- Campaign art may pair violet and orange geometric fields with one small glossy object and heavy display type; the object remains secondary to the task.
- When the product requires an illustration in this language, generate it with the available image-generation model and integrate it as an image asset. Do not recreate it programmatically in SwiftUI. The screen is not ready for design approval until the generated asset is integrated.

# Composition

- Center one object above a short message in authorization, permission, empty, or error states.
- Keep operational art compact, generally around one quarter of the screen width, with generous white space.
- Campaigns may fill the screen with a repeating geometric field, but keep one clear white content surface or action zone.
- Preserve a clear boundary between illustration and photographic travel content.

# Color and Materials

- Use saturated Yandex yellow, medium violet, occasional red for a small alert detail, and pale lavender-gray support fields.
- Campaign geometry may add vivid orange against lavender or violet.
- Favor smooth toy-like volume and soft shadow over complex textures, realistic metal, or glossy glass.

# Variants and States

- Launch and brand identity use the violet-yellow globe.
- Permission and account entry use one small benefit or identity object.
- Failure uses a single yellow warning object without surrounding decorative clutter.
- Seasonal interactive campaigns may use repeating geometry, selected-tile patterns, and one rotating or collectible toy-like object.
- Listings, destinations, properties, rooms, maps, and activities remain photographic or functional.

# Avoid

- Do not replace authored objects with emoji, stock icon packs, or arbitrary SF Symbols.
- Do not extend campaign geometry into booking forms, filters, payment, or confirmation data.
- Do not mix multiple 3D rendering styles on one screen.
- Do not remove the illustration and approve the screen with only a placeholder or empty reserved area.
