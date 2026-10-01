# Overview

Flowwow uses authored imagery as a distinct layer alongside product photography. The recurring system has two related scales: immersive, polished floral-and-gift scenes for onboarding or major promotions, and small colorful object illustrations for categories, recipients, occasions, and gift types. It gives abstract discovery choices a tangible identity without replacing real seller photography.

# Visual Style

Large scenes use glossy or translucent three-dimensional flowers, petals, gifts, ribbons, shopping objects, and soft organic forms. Materials resemble glass, gel, polished ceramic, paper, and satin. Shapes are rounded and simplified, lighting is diffuse, and depth comes from soft focus, overlap, translucency, and restrained specular highlights. Smaller category objects are more compact and graphic but keep recognizable flowers, bouquets, cakes, gifts, plants, and occasions in natural, cheerful colors.

This document governs branded category, occasion, onboarding, and campaign artwork. Back, close, disclosure, search, filter, share, favorite, chat, delivery, and other conventional controls use a coherent interface icon family and are not illustrations. Seller product photography remains photography and must not be redrawn into this language.

When the design calls for product illustration, generate it with the available image-generation model and integrate the resulting image asset into the interface. Do not recreate the illustration programmatically in SwiftUI. A screen that requires illustration is not ready for final design approval until the generated image asset is integrated.

# Composition

Onboarding art may fill the screen and build a complete shallow environment around a clear central brand object. Keep a protected region for the message and actions, and use depth-of-field to reduce competition behind text. Promotional art may occupy most of a banner while leaving a readable text zone.

Category and occasion objects are isolated, centered, and readable at small scale. They may sit inside a circular or softly bounded crop, but the object silhouette must remain recognizable. A horizontal family should share optical scale, viewpoint, and baseline even when objects differ in shape. Do not mix store photography into the same object row as if it were part of the illustration set.

# Color and Materials

The large 3D language favors coral, peach, pink, mint, sky blue, yellow, cream, and leafy green. Backgrounds can be saturated coral or soft atmospheric blue-green, with bright floral color around the edges. White translucent brand forms and pale glossy petals provide highlights. Shadows remain soft and colored rather than hard gray or black.

Small category illustrations use broader natural color so the depicted item remains identifiable. Keep color clean and lively, but avoid neon outlines, flat corporate gradients, muddy photographic texture, or one uniform tint across every object. Ensure pale objects retain an edge or subtle backing tone on the white UI canvas.

# Variants and States

Onboarding and major campaigns use full scenes with layered objects and atmospheric depth. Promotional banners reduce the system to one object cluster and a restrained background. Category and occasion shortcuts use single objects or compact groups. Loyalty moments may introduce a gift, ribbon, or branded token while keeping the same soft material and lighting logic.

Selection belongs to the surrounding UI and should not require a second illustrated asset unless the object itself changes meaning. Loading uses a reserved placeholder at the final asset's footprint. Empty and error states should use authored imagery only when the concept belongs to the product language; routine validation and network errors rely on interface feedback.

# Avoid

- Do not replace category and occasion objects with an arbitrary monochrome system-symbol grid.
- Do not generate illustrations for conventional navigation, editing, sharing, filtering, or communication actions.
- Do not transform seller photography into glossy 3D art or present generated bouquets as real marketplace inventory.
- Do not mix flat corporate characters, doodle line art, photorealistic rooms, and glossy floral objects in one family.
- Do not place detailed object clusters behind dense product, checkout, tracking, or chat information.
- Do not shrink immersive onboarding art into a decorative badge or stretch small category objects into a full-screen scene.
