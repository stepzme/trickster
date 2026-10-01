# Overview

Raiffeisen uses a repeatable authored illustration system for onboarding, campaigns, financial education, subscriptions, and success or result moments. The art introduces a friendly hand-drawn layer around otherwise utilitarian banking surfaces while staying separate from balances, transaction data, functional icons, partner marks, and profile photography.

# Visual Style

Illustrations use fine graphite outlines with intentionally loose hand-drawn contours, flat yellow and pastel color blocks, and simplified financial objects such as cards, coins, devices, safes, documents, and celebratory symbols. Shading is limited; depth comes from overlap, cropped objects, and occasional soft background fields. The style is object-led rather than character-led, and no broad recurring character system is established.

Create required final artwork with an image-generation model. Present every generated image for explicit approval before integrating it into the app. Do not reproduce the scenes with SwiftUI shapes, SF Symbols, emoji, or improvised code-drawn geometry.

# Composition

Use one focal financial metaphor per image. Onboarding and result compositions center a large object or compact scene above concise text and actions. Promotional cards place a cropped object or scene inside a single pastel rounded field, preserving a protected zone for a short title. Larger banners may let art bleed toward an edge or sit behind a foreground white sheet, but essential objects must remain legible. Keep broad negative space and do not place illustration behind balances, amount entry, keypad digits, or transaction rows.

# Color and Materials

Signal yellow and graphite connect artwork to `ui.md`. Add one or two supporting fields from mint, peach, lavender, pale blue, or pink rather than using a full-spectrum palette in one scene. Keep outlines dark, fills mostly flat, and highlights restrained. White negative space should remain part of the composition. Avoid glossy 3D materials, photographic textures, and highly saturated gradients.

# Variants and States

Onboarding variants use a centered hero object or explanatory scene. Campaign and educational variants crop the art more tightly into horizontal pastel cards. Success and result states may use a celebratory object such as coins or party imagery above the outcome. Subscription or product promotions can introduce a larger safe, card, phone, or payment metaphor. Empty-adjacent states may reduce the system to one quiet outlined object. Generate and approve each materially different scene before integration rather than deriving it from code primitives.

# Avoid

- Do not substitute stock photos, generic 3D icon packs, emoji, or unrelated flat illustration libraries.
- Do not draw final artwork with SwiftUI shapes or assemble it from SF Symbols.
- Do not integrate generated artwork before explicit visual approval.
- Do not treat partner logos, bank marks, functional icons, avatars, or card thumbnails as illustration variants.
- Do not use illustration behind financial values or dense data.
- Do not combine many pastel hues or metaphors in one small card.
- Do not crop away the focal financial object or reduce hero art to an insignificant icon.
