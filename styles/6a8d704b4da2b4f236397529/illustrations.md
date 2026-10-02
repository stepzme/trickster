# Overview

Skyeng has an independently proven authored illustration system. Fresh Screen Gallery evidence shows repeated soft 3D blue characters across onboarding, home/practice cards, AI teacher, speaking practice, and empty/supporting states, plus flat educational scenes for situations, vocabulary, homework, schedule, and promotions.

New assets must follow this pipeline: generate candidate raster images with the approved generation model, show them to the user for explicit visual approval, then integrate the approved raster assets into the app. Do not ship temporary programmatic substitutes.

# Visual Style

The primary character style is soft 3D: rounded cyan-blue heads or full bodies, simple dot eyes, small smiling mouth, dark hair or accessories, plush material, soft lighting, and minimal facial detail. The characters read as friendly learning companions rather than realistic people.

The secondary scene style is flat/editorial: simplified objects, plants, animals, badges, flags, books, cards, clocks, and learning props. These scenes are clean, colorful, and low-detail, with rounded shapes and little or no outline.

Photography is also present for tutors and course products, usually embedded in bright turquoise or white card compositions. Use photography only where real-person/course proof is needed; do not use stock-photo mood images as decoration.

# Composition

Onboarding uses large character/photo compositions occupying the upper half or more of the viewport, with text and cyan CTA anchored below. Learning cards use one prominent illustration or photo crop per card, usually occupying the right side or top image area.

Speaking practice centers a single 3D head on a black stage, with waveform bubbles below and a glowing microphone CTA near the bottom. Empty states place one compact illustration in the center of a mostly white screen with short text nearby.

Keep the main face, object, or mascot unobstructed. Leave enough negative space for card title, duration, CTA, and status labels. Do not crop character faces tightly or hide them behind controls.

# Color and Materials

The illustration palette must support `ui.md`: cyan/sky-blue characters, cyan action surfaces, green success/progress, violet practice accents, coral/yellow promotional cards, and occasional black/dark immersive scenes.

3D assets should have soft material, soft shadows, and simple high-contrast facial features. Flat scenes should use clean solid colors, mild gradients only when needed, and no gritty texture. Dark speaking screens need a black background, green waveforms, gray transcript bubbles, and a mint microphone glow.

# Variants and States

Use 3D blue characters for onboarding, AI teacher cards, speaking-practice roles, support/assistant motifs, and mascot-led learning prompts. Use flat scenes for schedule/homework empty states, vocabulary/category cards, situations, and promotional learning modules. Use photos for real tutor or product course cards.

For permission or modal states, preserve the underlying illustration context but let the system prompt or app modal sit above it. For recording states, keep the 3D head stable and change waveform, transcript, microphone glow, or confirmation modal rather than swapping to a new art style.

# Avoid

Do not replace authored art with SwiftUI shapes, SF Symbols, emoji, generated vector doodles, or programmatic substitutes. Do not introduce a different mascot species, realistic 3D humans, skeuomorphic classroom scenes, dark stock photography, or generic corporate illustrations.

Do not rasterize unapproved generated images into the app. The required sequence is generation model, explicit user visual approval, then raster asset integration.
