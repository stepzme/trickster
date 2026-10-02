# Overview

2GIS uses authored illustration in two observed roles: high-impact onboarding scenes and quiet empty-state support. Both are distinct from maps, route and POI marks, functional icons, place photography, campaign media, settings previews, charts, and brand marks.

# Visual Style

Onboarding uses polished simplified 3D objects with chunky toy-like geometry: oversized signs, markers, buttons, questions, and thick ribbon-like route forms. Materials are glossy and synthetic, with soft studio lighting and strong highlights against a dark blue-black gradient. Empty states use a quieter flat line language: light-gray construction, simple geometric props, sparse green fill, and minimal detail on white.

Every new illustration must be generated with an image-generation model in the appropriate observed family. It requires separate visual approval before interface integration and must then be integrated as the approved raster asset.

# Composition

Onboarding centers one large object or a short connected scene in open dark space, keeping the silhouette fully visible and allowing a curved route form to direct attention. Art carries a substantial portion of the viewport but leaves clean room for headline and action. Empty-state art is smaller, centered inside a white card or sheet above concise copy, with generous negative space. Neither family belongs behind operational map labels, route lines, metrics, or controls.

# Color and Materials

Onboarding leads with saturated green and electric blue, supported by red, orange, yellow, and white on a dark blue-to-black field. Use clean glossy surfaces, rounded bevels, controlled reflections, and soft directional light. Empty states use white ground, pale-gray strokes, and restrained green accents with flat low-texture fills. Do not blend the glossy 3D material into functional controls.

# Variants and States

- Onboarding varies the central 3D object to express orientation, routing, discovery, or a question while retaining the same lighting and material language.
- Empty favorites or similar zero states use sparse flat line scenes with one green accent and a direct relationship to the missing content.
- No stable illustrated success, permission, or error family was observed; keep those states native or within the UI system.

# Avoid

- Do not draw or approximate the artwork with SwiftUI shapes, Canvas, programmatic paths or gradients, SF Symbols, emoji, text glyphs, or assembled map icons.
- Do not integrate an unapproved generation, placeholder, screenshot crop, or temporary vector; use the visually approved raster asset.
- Do not treat maps, POI markers, route ribbons in live cartography, place photos, campaign media, or brand marks as illustration assets.
- Do not place glossy onboarding objects inside navigation controls or operational sheets.
- Do not substitute stock travel art, realistic street photography, dense isometric cities, or unrelated character mascots.
