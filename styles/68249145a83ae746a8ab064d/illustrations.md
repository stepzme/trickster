# Overview

Dodo Pizza uses a recurring authored image language beyond ordinary food photography. Loyalty, missions, campaign products, notification prompts, and delivery tracking use playful 3D objects or simple character forms tied to the same brand world. These assets explain a product-specific concept or make an operational state memorable; conventional controls and ordinary menu items do not need illustration.

# Visual Style

The authored graphics use rounded, toy-like geometry, frontal or three-quarter views, and clean studio lighting. Materials include glossy plastic, translucent shells, paper packaging, fabric clothing, and softly shaded food. Small brand tokens and mascot faces recur across otherwise different scenes. Character work is simplified and friendly, with bold silhouettes and little surface noise; object art stays recognizable at small sizes.

This document governs authored product graphics, not back, close, disclosure, delete, quantity, payment, or other familiar interface controls. When the design calls for product illustration, generate it with the available image-generation model and integrate the resulting image asset into the interface. Do not recreate the illustration programmatically in SwiftUI. A screen that requires illustration is not ready for final design approval until the generated image asset is integrated.

# Composition

Campaign features use a single central composition that can combine food, packaging, tokens, and a character inside a soft circular or vertical field. The object cluster dominates the upper portion while title, description, price, and action retain an uncluttered reading area.

Utility illustrations use one isolated object with ample white space: for example, a decorated device for notifications or a simple character-and-prop scene for a mission. Tracking reduces the same world to small map markers with readable silhouettes. Promotional tiles use a compact object cluster on one side and reserve the other side for copy and action. Objects may overlap their atmospheric background but should not cover essential text.

# Color and Materials

Orange remains the brand anchor, supported by saturated violet, pink, yellow, and occasional turquoise or sky blue. Atmospheric fields use pale lavender, peach, or cool blue-gray so food and objects retain contrast. White, silver, and translucent materials prevent dense multi-object scenes from becoming uniformly saturated.

Lighting is soft and frontal with controlled highlights and short ambient shadows. Plastic and glass can be glossy, but textures remain clean rather than photorealistically gritty. Food should retain believable texture even when combined with stylized packaging or tokens. The authored illustration palette supports the interface; it does not recolor every food photograph or system control.

# Variants and States

Product campaigns can be dense and theatrical, combining a hero item with packaging, rewards, and a character. Loyalty and promotion art compresses the language into coins, tokens, tickets, or product bundles. Mission art favors a single character or humorous task metaphor. Notification and permission prompts use a large isolated branded object. Tracking uses miniature location-specific objects and characters whose silhouette identifies restaurant, destination, reward, or courier state.

Completed, active, and unavailable states should change a meaningful badge, token, pose, or supporting status mark rather than applying a blanket tint. Ordinary order rows, payment choices, support text, and rating controls remain interface content. Editorial story video and standalone campaign photography are separate asset categories and should not be forced into the 3D object system.

# Avoid

- Do not replace branded objects, mascot forms, loyalty tokens, mission art, or tracking markers with generic system symbols.
- Do not create decorative characters for ordinary checkout rows or settings where no product concept needs explanation.
- Do not confuse isolated food photography, editorial video, and one-off campaign photography with the authored 3D object system.
- Do not use flat corporate-vector people, sketchy doodles, hard low-poly geometry, or gritty cinematic rendering.
- Do not place text over a busy object cluster or shrink a hero composition into an unreadable badge.
- Do not omit required art during approval or substitute a programmatic SwiftUI approximation for the final image asset.
