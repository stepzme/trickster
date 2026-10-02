# Overview

Pure uses a stable authored illustration system across the viewed iOS screens: onboarding splash art, sign-in poster art, setup prompts, discovery stickers, chat safety banners, profile style cards, and completion/success strips all repeat the same handmade ink-and-collage language.

This file is required for Pure. The implementation must use generated or prepared raster artwork, must receive explicit user visual approval before integration, and must integrate approved raster assets into the app. SwiftUI shapes, SF Symbols, emoji, icon fonts, Lottie stand-ins, or other programmatic substitutes are not acceptable replacements for the authored illustration layer.

# Visual Style

Use black ink drawings with uneven line weight, naive facial features, surreal masks, eyes, hands, cats, crowns, arrows, and small strange character fragments. Drawings are mostly flat black on white, sometimes with sparse accent fills such as fuchsia, lavender, coral, or red-orange. The line quality should feel hand-drawn and slightly rude, not polished vector mascot work.

Illustrations combine with torn paper, sticker scraps, warped optical backgrounds, and rough badge labels. They are intentionally imperfect: off-center, sometimes cropped, sometimes placed over bright pattern fields. The system should feel like zine art, club flyers, and tattoo flash sketches, not dating-app lifestyle illustration.

# Composition

Artwork often owns the screen. The launch image is centered over a full-screen magenta optical pattern. Onboarding and setup pages place one or two large doodles in the open paper field. Discovery cards use stickers and masks around a single profile/photo stage. Chat and success states use compact hand illustrations inside banners or torn strips.

Keep generous negative space around the primary drawing so the rough linework remains legible. Doodles may overlap badges and paper edges, but they must not cover critical profile faces, required form choices, safety copy, or primary actions. Use asymmetry deliberately: one large illustration plus smaller sticker fragments works better than a uniform icon grid.

# Color and Materials

The base illustration palette is black ink on white paper. Accents are hot fuchsia, lavender, dusty tan, burgundy, coral pink, and occasional blue. Background patterns may be high-contrast and warped, but foreground drawings need enough quiet space to remain readable.

Use raster textures and irregular edges for paper tears, speech scraps, badges, and sticker fields. Avoid clean gradient fills, glossy shadows, glass panels, and smooth icon containers. Depth comes from visible layering and crop, not from realistic lighting.

# Variants and States

Onboarding art can be the largest and most theatrical. Setup prompts use single-topic drawings tied to the question or choice card. Discovery uses stickers, masks, crowns, and expressive badges as personality overlays. Chat safety and completion states use smaller banner illustrations so text remains primary. Profile customization can use larger poster-style preview art.

Selected or successful states may add fuchsia/lavender fills, checkmarks, or a positive hand gesture, but must stay in the same rough ink vocabulary. Error, report, and safety states must remain readable and restrained; do not make harmful or sensitive choices visually playful.

Production requirements: use an image-generation model or hand-authored raster source to create final assets; show generated visual candidates to the user and obtain explicit visual approval before app integration; integrate approved artwork as raster assets with predictable sizes and dark/light contrast checks; preserve transparency where stickers need to float over patterned or photo backgrounds; keep separate assets for large hero drawings, sticker overlays, paper tears, and compact state banners.

# Avoid

- Smooth corporate vector characters, 3D mascots, airbrushed portraits, anime styling, cute emoji-like stickers, or generic dating icons.
- Replacing authored doodles with SF Symbols such as hearts, eyes, crowns, hands, masks, or warning icons.
- Uniform line weight, perfect rounded corners, and perfectly centered icon compositions.
- Decorative overlays that obscure profile faces, consent/safety information, prices, or primary controls.
- One-off art styles per screen; the same rough ink, torn paper, and collage vocabulary must repeat.
- Recreating the illustration system with SwiftUI shapes, SF Symbols, emoji, text glyphs, procedurally drawn icons, or generic stock packs.
