<design-context>
# Overview

Radio Arzamas uses a stable authored image language built from curated paintings, engravings, archival photographs, historical portraits, and designed podcast or course covers. The imagery is not generic decoration: it supplies subject, mood, color, and the dominant visual mass for discovery, detail, playback, and promotional surfaces.

# Visual Style

The source material retains its cultural medium—oil painting, printmaking, monochrome photography, manuscript texture, or portrait photography—while cover treatments introduce controlled crops, dark fades, graphic type, or occasional witty collage. Some covers add a deliberately anachronistic graphic detail, such as pixel accessories, without redrawing the underlying historical subject. Texture and period character remain visible; UI chrome stays crisp and modern around it.

When new authored cover imagery is required, generate it with the available image-generation model or compose it from appropriately licensed source material. Do not recreate cultural scenes, portraits, collage interventions, or cover art with SwiftUI shapes or arbitrary SF Symbols. Present generated imagery for explicit approval before integration.

# Composition

Hero artwork may occupy the upper third to half of a phone screen and fade into the warm-charcoal canvas so a large white title remains readable. Shelf covers are rectangular or softly rounded, with stable aspect ratios and a single legible focal subject. At least one neighboring cover can remain partially visible to communicate horizontal continuation. Full-player artwork is centered and large enough to anchor the screen; circular crops are reserved for lecturer or identity portraits.

Designed cover type and collage elements stay inside the artwork boundary. UI titles, metadata, save controls, and playback actions align outside the focal face or artwork subject. Negative space and dark gradients are used to connect visually complex source imagery to concise interface text.

# Color and Materials

Artwork may retain historically varied palettes, from muted paper and monochrome photography to saturated painting, but it is framed by the warm charcoal, off-white, and yellow system from `ui.md`. Preserve grain, paper, brushwork, engraving line, and photographic tone where present. Dark fades should be neutral-warm and subtle enough not to erase the source medium. Yellow remains an interface accent and should not be forced into every image.

# Variants and States

Discovery and detail variants use the richest hero crops and designed covers. Playback reuses the current work at larger scale with fewer surrounding elements. Author variants use straightforward circular portraits without collage. Promotional or humorous covers may add bold type or one controlled graphic intervention. Empty, form, settings, and error states remain primarily typographic and dark; they do not require decorative illustration unless the reference role is genuinely image-led.

# Avoid

- Do not replace curated cultural imagery with generic stock education photos, abstract gradients, emoji, or random SF Symbols.
- Do not redraw historical imagery as a single flat vector or glossy 3D style.
- Do not mix several unrelated collage effects inside one cover or obscure the primary subject.
- Do not crop away faces, key objects, or the artwork's recognisable focal point.
- Do not place UI copy directly over a visually busy area without the observed dark fade or protected negative space.
- Do not apply humorous graphic interventions indiscriminately to serious archival or author portrait content.
</design-context>
