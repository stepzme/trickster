# Overview

Arbuz.kz has a stable authored illustration layer separate from ordinary shopping photography. Fresh Screen Gallery evidence shows repeated smiling food characters, shopping bags, coins, and product mascots across onboarding, hero promotions, profile cashback, referral, and subscription screens. These visuals are brand assets and must be produced as raster artwork before integration, not recreated with programmatic UI primitives.

# Visual Style

Use friendly food and grocery characters with rounded bodies, tiny black facial features, rosy cheeks, simple limbs, and soft studio shading. The style mixes flat cartoon silhouettes with gentle 3D volume: vegetables, fruit, shopping bags, coins, paper planes, gifts, and cashback objects feel tactile but remain playful and simple.

Onboarding characters sit on warm yellow backgrounds with oversized black headline type. Subscription and referral art becomes more dimensional, with glossy cards, coins, bags, and gradient scenes. Product photos may appear inside promotional art, but the character system is authored illustration, not live UI composition.

All new illustration assets must be created with an image-generation model or equivalent raster illustration process, reviewed visually by the user, exported as raster assets, and integrated as images. SwiftUI shapes, SF Symbols, emoji, generated text layers, or other programmatic substitutes are not acceptable replacements.

# Composition

Onboarding art occupies the lower half of the screen and supports a large left-aligned headline in the upper half. Characters can peek from behind soft blue cloud-like shapes or sit inside a branded shopping bag. Keep generous spacing around the headline and avoid placing fine details behind text.

Promotional cards use one anchored object or character at the right or bottom edge, with text protected on the opposite side. Referral screens may use a full-bleed blue or purple gradient illustration scene with coins and objects floating through depth; subscription screens use stacked colorful benefit cards where illustrated objects sit near card bottoms.

Empty and educational states should use one central character with large white space and one clear action area. Do not crowd the art into dense product grids. In commerce lists, product photography remains primary and illustration only appears in banners or recovery/education states.

# Color and Materials

Anchor illustrations in Arbuz green, mint, yellow, orange, sky blue, and soft pink. Use natural food colors for fruits, vegetables, and packaged grocery elements. Faces are minimal black marks with small blush accents. Shadows are soft and diffuse; outlines are sparse or absent.

Gradient scenes may use cyan, blue, violet, and green, but they must still feel bright and friendly. Avoid dark gaming-style lighting, harsh metallic rendering, and complex photorealistic characters. The illustrated colors should harmonize with `ui.md`: green for brand/action, teal for rewards, yellow/orange for warm promo energy.

# Variants and States

Use the illustration system for onboarding, loyalty/subscription education, referral rewards, cashback banners, promotional hero scenes, empty or recovery states, and friendly service education. Use product photography for product cards, category tiles, search results, cart items, and any purchase decision where the user needs to inspect the item.

For new variants, generate raster artwork in the same authored style, obtain explicit user visual approval, then integrate the approved image assets. A build that uses placeholder shapes or symbol-only stand-ins does not satisfy this style package.

# Avoid

- Do not use SwiftUI shapes, SF Symbols, emoji, Lottie defaults, or icon fonts as substitutes for the authored illustration system.
- Do not invent a different mascot family, outline-heavy cartoon style, clay style, anime style, or generic flat SaaS illustration.
- Do not replace real grocery product photography with characters.
- Do not place busy illustration details behind readable UI text or prices.
- Do not crop character faces or shopping bags so tightly that the friendly expression disappears.
- Do not ship generated illustration assets without explicit user visual approval and raster integration.
