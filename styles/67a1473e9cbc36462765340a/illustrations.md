# Overview

Profi.ru uses a stable mixed imagery system on its marketplace surfaces: black editorial line drawings explain how the service works, while portrait photography represents specialist categories and real people. The questionnaire itself is intentionally image-light, so imagery should not be propagated into every task step.

# Visual Style

Illustrations use confident black outlines, simplified people and objects, almost no shading, and occasional small areas of flat black. Human anatomy is stylized but readable, with friendly gestures and service-related props. The main home scene is more elaborate; helper tiles reduce the language to one compact object or two-character vignette.

Photography uses waist-up or head-and-shoulders portraits, direct or slightly turned poses, clean cutouts, and soft colored studio backdrops. It represents actual specialist categories or people and is not interchangeable with the drawn explanatory system.

This document does not govern ordinary interface icons. Search, back, location, calendar, currency, disclosure, close, and selection controls should remain coherent system-style symbols.

Product illustration must be generated with the available image-generation model, integrated as an image asset, and not recreated programmatically in SwiftUI. A screen with a required illustration is not ready for design approval without the integrated generated asset.

# Composition

The main home illustration occupies a broad central band between search and the primary task action. It includes two or more figures and recognizable work or communication props, while leaving the headline and controls in separate clear zones.

Educational tiles reserve a trailing or lower area for one line-art object or small vignette, keeping text readable in the remaining space. Portrait cards use the image as the dominant surface, with category text and count over a protected lower area. Feedback prompts may use one compact line drawing at the trailing edge.

# Color and Materials

Line illustrations are predominantly black on white or very pale cool-gray surfaces. Small brand accents may use red, but the artwork does not become a multicolor icon set. The crisp contour and white negative space are more important than decorative fill.

Portrait cards introduce soft lavender, mint, powder blue, and blush backgrounds while keeping skin and clothing natural. Photography should remain clean and editorial, without hard shadows, busy environments, or red overlays. A contextual order header may use a subdued photographic or textured surface darkened enough to support status content.

# Variants and States

Marketplace and educational states use the complete imagery mix: a hero line scene, compact explanatory drawings, and portrait categories. Service catalog and questionnaire states reduce or remove illustration to protect concentration. Feedback tiles may reuse the line language at small scale, while specialist results use real avatars rather than drawn substitutes.

Loading should reserve the final image footprint. A portrait fallback may use a neutral avatar only when no real image exists; it should not replace required category photography across the whole experience. Published, waiting, hidden, and error states rely primarily on interface feedback, not celebratory character art.

# Avoid

- Do not recreate line drawings with SwiftUI paths, SF Symbols, emoji, or assembled icon primitives.
- Do not use generic stock vector characters with colored corporate blobs or gradients.
- Do not replace specialist portraits with illustrated avatars when photography is part of the content role.
- Do not add hero or decorative imagery to every questionnaire step.
- Do not combine the black line system and portrait photography into one hybrid image treatment.
- Do not approve an image-led screen with blank placeholders or missing generated assets.
