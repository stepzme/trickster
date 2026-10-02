# Overview

Glovo uses a stable authored illustration system for service discovery and lightweight support states. The repeated system appears in circular category badges, cuisine chips, service shortcuts, empty-cart guidance, and small explanatory marketplace graphics.

# Visual Style

Use an image-generation model to create approved raster artwork in the observed style: playful flat illustrations with irregular hand-drawn shapes, simple outlines, warm fills, and recognisable food, grocery, pharmacy, shopping, courier, and service objects. The art should be friendly and compact rather than glossy, realistic, or icon-font-like. Do not build these illustrations from SwiftUI shapes, SF Symbols, emoji, or programmatic stand-ins.

# Composition

Most illustrations are centered inside white circular badges on the yellow discovery field, with a small rounded label below or attached to the circle. Cuisine and service chips use compact object drawings in a horizontal row. Empty/support illustrations are small and centered inside white or pale cards, leaving text hierarchy dominant. Preserve generous negative space and consistent visual density across the set.

# Color and Materials

The palette extends `ui.md`: Glovo yellow, teal, coral, pink, green, blue, gray, and warm food colors. Materials are flat and matte. Shadows are soft and used to separate circular badges from yellow, not to create 3D realism.

# Variants and States

Observed variants include home service categories, food-type chips, supermarket/store/service icons, unavailable courier category, empty-cart guidance, and promotional explanatory art. New illustrations must be generated as raster assets, integrated into the app asset catalog, and shown to the user for visual approval before final use.

# Avoid

- Do not use SwiftUI shapes, SF Symbols, emoji, generic outline icon packs, or stock clip art as replacements.
- Do not introduce photorealistic, glossy 3D, or thin-line illustration styles.
- Do not place dense illustrations in checkout rows where the reference uses receipt-like text and small functional icons.
- Do not ship placeholder art without explicit user visual approval and raster asset integration.
