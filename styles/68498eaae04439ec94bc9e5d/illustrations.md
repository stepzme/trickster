# Overview

Yandex Maps uses an authored map-derived illustration system for onboarding and feature education. The recurring scene is a simplified cartographic crop containing one recognizable landmark, route, marker, transport signal, or notification object. This system is separate from live map rendering, place photography, partner logos, and ordinary interface icons.

# Visual Style

Build scenes from softly rendered map geometry: pale roads and blocks, muted green land, light blue water, low-detail buildings, bright route lines, and a small number of enlarged functional markers. Landmarks may use simplified isometric volume, but surfaces stay clean and lightly shaded rather than toy-like or photorealistic. Depth comes from overlapping map planes, restrained ambient shadows, and selective focus.

When the product requires one of these authored scenes, generate it with the available image-generation model and integrate the resulting image asset into the interface. Do not recreate the illustration programmatically in SwiftUI. Do not request design approval for a screen that requires the scene until the generated asset is integrated.

# Composition

Use one square or softly rounded map crop centered in the upper half of the screen. The scene should communicate one feature at a glance: a landmark with factual badges, a building with route alternatives, a junction with a navigation instruction, live transit markers, or a focused notification over a blurred map.

Keep the primary object or route near the center and protect open space around it. Functional badges may overlap the crop edge, but their count stays low. Avoid placing explanatory copy inside the artwork; the adjacent interface supplies the statement and action.

# Color and Materials

Base scenes on pearl white, pale gray, muted green, light blue, and soft beige map colors. Use blue for route selection, green for live transport, red for a location pin, and orange or purple only for a specific place or service signal. Buildings use matte, low-contrast materials with light gray roofs and restrained brick or glass accents.

Shadows are diffuse and short. Blur may separate a foreground notification from map context. Avoid saturated atmospheric gradients, glossy plastic materials, and dark cinematic lighting.

# Variants and States

Discovery scenes feature a single simplified landmark and a few factual badges. Route scenes emphasize the path, transport mode, and directional instruction. Navigation guidance enlarges the instruction and vehicle position. Transit education uses repeated live markers but keeps the underlying network readable. Notification education isolates one alert over a subdued map. Location acquisition and ordinary live navigation use the actual map renderer rather than an illustration variant.

# Avoid

- Do not treat live cartography, 3D map buildings, place photos, panoramas, partner marks, or category icons as illustration assets.
- Do not introduce characters, decorative mascots, unrelated objects, or campaign art into map education.
- Do not fill the scene with labels, markers, and badges that compete with the feature being explained.
- Do not replace the map-derived scene with a generic stock map, a flat corporate vector, or an arbitrary SF Symbol.
- Do not generate imagery for ordinary controls when a familiar navigation or map icon already communicates the action.
