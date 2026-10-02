# Overview

ATTO has a stable standalone illustration system: soft 3D transport and city-service objects are visible across onboarding and service discovery screens. The system makes buses, trains, cars, tickets, parking, cards, SIMs, and QR/payment services recognizable before the user reads the label.

# Visual Style

The medium is polished 3D rendering with rounded plastic-like forms, soft ambient shadows, clean highlights, and simplified real-world details. Objects use toy-like proportions rather than photorealism. Vehicles are shown in three-quarter or cropped top views; small people appear only in onboarding scenes to establish scale. The art is friendly and high-saturation, but the backgrounds stay pale and quiet.

# Composition

Onboarding places one large illustrated scene in the upper half of the phone screen, above a white rounded text sheet. The public service hub places one object per tile, usually centered with generous clearance; the primary transport tile is larger and crops the bus more tightly than smaller service tiles. QR and card objects can sit inside horizontal strips, but functional transport, map, and payment-form screens stay mostly illustration-free.

# Color and Materials

Illustrations harmonize with the `ui.md` palette: bright green vehicles, blue train accents, teal/blue cards, yellow parking signs, and pale gray-white ground planes. Materials are smooth and low-texture with subtle gradients and gentle shadows. The artwork should feel integrated with white rounded tiles and the teal gradient shell, not like stock photography or flat icon stickers.

# Variants and States

For any new subject in this illustration language, first create a candidate with an image-generation model, then get separate visual approval, then integrate the approved raster asset into the app. Observed variants include onboarding scenes, service tile objects, QR/payment strip objects, and app-icon/theme previews. Error, map, balance, tariff, and form states do not use standalone illustrative scenes in the reviewed screens.

# Avoid

- Do not replace the authored 3D objects with SwiftUI shapes, `Canvas`, programmatic paths or gradients, SF Symbols, emoji, text glyphs, assembled UI icons, or procedural vector placeholders.
- Do not mix flat vector characters, outline icon sets, photographic cutouts, or glossy stock renders into the same tile grid.
- Do not crop away the defining silhouette of a bus, train, car, card, ticket, or parking object.
- Do not put readable labels inside the artwork; labels remain app text below or beside the object.
- Do not use a programmatic substitute while waiting for art approval; only the visually approved raster belongs in the illustrated slot.
