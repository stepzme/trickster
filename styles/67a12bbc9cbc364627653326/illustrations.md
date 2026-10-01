# Overview

hh uses authored imagery selectively for empty states and career editorial content. It is not a continuous decorative layer: vacancy results, applications, resume management, and active conversations remain primarily typographic. The recurring system includes flat editorial people scenes and wider article artwork, supported by occasional portrait or content photography.

# Visual Style

Empty-state scenes use simplified human figures, clean vector contours, and broad flat fills. Faces and gestures are economical rather than realistic. Blue carries the largest colored areas, red supplies a smaller brand counterpoint, and pale blue or white separates overlapping figures and devices.

Career article art is more editorial and can use geometric figures, workplace scenes, or metaphorical compositions. It may introduce muted violet, orange, gray, and navy while retaining flat shapes and limited texture. Portrait photography belongs to real people or experts and should not be redrawn into the illustration language.

This system does not govern ordinary interface icons. Search, filter, back, close, favorite, share, disclosure, attachment, and navigation remain coherent system-style controls.

Product illustration must be generated with the available image-generation model, integrated as an image asset, and not recreated programmatically in SwiftUI. A screen with a required illustration is not ready for design approval without the integrated generated asset.

# Composition

Empty-state illustration occupies a centered horizontal band above the explanation and recovery action. The scene is large enough to read as the visual anchor but leaves separate, uncluttered zones for the title and supporting copy.

Editorial artwork sits inside a wide rectangular media area at the top of an article card, followed by headline and excerpt. Crops preserve the main subject and the article's dominant color mass. Small product accents may occupy a corner of a guidance module, but dense operational cards should not gain decorative imagery.

# Color and Materials

The empty-state palette is crisp and flat: saturated hh blue, warm red, light blue, black, and white. Editorial pieces may use muted industrial violet, orange, gray, navy, and cream. Gradients, if present in supplied artwork, remain subtle and subordinate to the flat silhouette.

Avoid heavy shadow, gloss, photorealistic 3D materials, and intricate texture. Photography keeps natural lighting and a clean crop; it should not receive illustration-like outlines or arbitrary brand-color overlays.

# Variants and States

Empty states use a complete people-and-device scene when the absence needs explanation and a recovery path. Populated lists remove that scene and give the space back to content. Career browsing uses illustration or photography to distinguish editorial cards and expert portraits, while article details can continue the chosen media treatment.

Loading should reserve the final image footprint rather than collapse the composition. An image failure may show a restrained fallback surface, but the intended illustrated screen is not visually complete until the authored asset loads. Success, warning, and routine application states rely on interface feedback, not celebratory illustration.

# Avoid

- Do not replace people scenes or career editorial art with SF Symbols or emoji.
- Do not generate artwork for ordinary navigation, favorite, filter, attachment, or disclosure controls.
- Do not insert illustration into vacancy lists, application records, resume statistics, or active chat threads.
- Do not mix toy-like 3D objects, stock corporate cartoons, and the observed flat editorial language.
- Do not approve a required illustrated state with a blank area, code-drawn substitute, or temporary symbol.
