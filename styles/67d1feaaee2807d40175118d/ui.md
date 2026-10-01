<design-context>
---
version: 1
platform: iOS
name: Wibes-design-analysis
description: "A media-first dark interface where vertical creator content, shoppable product strips, charcoal editorial reading, electric-violet actions, and vivid sticker-like illustration share one continuous black shell."

colors:
  primary: "#8C5CFF"
  on-primary: "#FFFFFF"
  primary-pressed: "#7545E8"
  ink: "#FFFFFF"
  ink-muted: "#C9C7CE"
  ink-subtle: "#929097"
  canvas: "#0B0B0C"
  surface-1: "#242425"
  surface-2: "#343435"
  disabled: "#5B5B5E"
  accent-lime: "#E9FF58"
  accent-pink: "#FF55C8"
  accent-yellow: "#FFE65F"
  price-orange: "#FF7A1A"
  hairline: "#FFFFFF24"
  semantic-success: "#4BC47C"
  semantic-danger: "#F25C67"
  semantic-overlay: "#000000A8"

typography:
  display: { fontFamily: Rounded Geometric Sans, fontSize: 28, fontWeight: 800, lineHeight: 30, letterSpacing: -0.5 }
  title: { fontFamily: Rounded Geometric Sans, fontSize: 24, fontWeight: 750, lineHeight: 27, letterSpacing: -0.3 }
  headline: { fontFamily: Rounded Geometric Sans, fontSize: 20, fontWeight: 700, lineHeight: 24, letterSpacing: 0 }
  card-title: { fontFamily: Rounded Geometric Sans, fontSize: 16, fontWeight: 650, lineHeight: 20, letterSpacing: 0 }
  body-lg: { fontFamily: Rounded Geometric Sans, fontSize: 16, fontWeight: 400, lineHeight: 22, letterSpacing: 0 }
  body: { fontFamily: Rounded Geometric Sans, fontSize: 14, fontWeight: 400, lineHeight: 19, letterSpacing: 0 }
  body-sm: { fontFamily: Rounded Geometric Sans, fontSize: 12, fontWeight: 400, lineHeight: 16, letterSpacing: 0 }
  caption: { fontFamily: Rounded Geometric Sans, fontSize: 10, fontWeight: 500, lineHeight: 13, letterSpacing: 0 }
  button: { fontFamily: Rounded Geometric Sans, fontSize: 15, fontWeight: 650, lineHeight: 19, letterSpacing: 0 }

rounded: { xs: 6, sm: 10, md: 14, lg: 20, xl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", height: 48 }
  media-stage: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", rounded: "{rounded.lg}" }
  product-strip: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 8 }
  editorial-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12 }
  bottom-navigation: { backgroundColor: "{colors.surface-1}", selectedColor: "{colors.ink}", unselectedColor: "{colors.ink-subtle}", height: 58 }
---

# Overview

Wibes is a black, media-led shell. Full-height creator video provides the dominant color mass; product rows, article surfaces, account gates, and recovery states sit in charcoal layers around it. Violet is reserved for high-value actions and selection, while lime, pink, yellow, and purple illustration carry brand personality outside ordinary content.

# Non-negotiable visual invariants

- Creator media remains the largest surface in the feed; controls are overlaid or attached without turning the screen into a card dashboard.
- The global shell stays near-black, with charcoal used for sheets, reading surfaces, product strips, and bottom navigation.
- Electric violet identifies selected topics, sign-in/follow actions, cart affordances, and recovery actions; it is not applied to every icon.
- Shoppable content keeps the linked product and price immediately adjacent to the media or article that introduced it.
- Display text is broad, rounded, heavy, and compact; supporting text is noticeably smaller and calmer.
- Branded illustration is structurally important in onboarding, sign-in gates, empty states, and network recovery, but does not replace creator media or product photography.

# Color and surfaces

### Brand & Accent

Violet is the stable interactive accent. Acid lime, hot pink, warm yellow, and saturated purple form the illustration palette and may occupy large campaign fields. Orange is local to price or purchase emphasis when it appears; it is not a second global accent.

### Surface

Use `#0B0B0C` for the outer canvas and `#242425` to `#343435` for content surfaces. Feed video can run nearly edge to edge inside a large 18–20 point clip. Reading and account sheets are opaque charcoal with no glass effect. Separation comes from fill changes, spacing, and occasional thin white-alpha hairlines rather than shadows.

### Text

Primary text is white. Supporting copy uses light gray, metadata uses mid-gray, and disabled actions use a gray fill with low-contrast text. Text over video requires a darkened local region or placement within naturally quiet image space.

### Semantic

Use green only for confirmed or positive status, red for destructive/reporting feedback, and neutral gray for unavailable actions. Preserve native system coloring inside system-owned permission alerts.

# Typography

### Font Family

Use the observed wide rounded geometric character for display, navigation labels, and actions. A close implementation substitute is SF Pro Rounded or a Cyrillic-capable rounded geometric sans; use the same family at regular weights for body copy.

### Hierarchy

Use 28 points for major onboarding or article statements, 24 points for screen and article titles, 20 points for section headings, 16 points for card titles and prominent descriptions, 14 points for ordinary copy, 12 points for product and status detail, and 10 points for compact metadata.

### Principles

Headlines use heavy weight, short line lengths, and tight leading. Article body copy uses regular weight with visibly more leading. Price, author, view count, and reading time stay compact so they do not compete with media.

### Note on Font Substitutes

Do not substitute a narrow editorial serif or default unmodified San Francisco for the heavy branded headings. If the exact face is unavailable, use SF Pro Rounded or another rounded geometric sans and tune width, weight, and line breaks against the observed hierarchy.

# Screen composition

### Spacing System

Use a 4-point base. Typical screen gutters are 12 points, card gaps 8–12 points, and section gaps 20–24 points. Feed overlays sit 12 points from media edges. Full-width primary actions use 12–16 point side insets and about 48 points height.

### Grid & Container

The feed is a vertical media stage with a compact horizontal story rail above and an attached product carousel below. Author profiles use a centered identity block followed by a two-column media grid. Article detail is a single wide charcoal reading surface with a lead image, long text, attached products, and a compact action row. Product media occupies the upper half of its focused view, followed by price, thumbnails, and a sticky action.

### Whitespace Philosophy

Media surfaces are dense; utility and recovery states are sparse. Keep feed chrome close to the content it controls, while sign-in, empty, and error states leave a large uninterrupted black field around one illustration, one message, and one action.

Surface hierarchy observed in the source:

Use opaque charcoal sheets over black, full-bleed or rounded media, and compact attached commerce rows. Do not introduce translucent material, glossy glass, or floating white cards into the core shell.

### Decorative Depth

Reserve 3D volume, doodle marks, speech bubbles, starbursts, and cutout portrait cards for the illustration layer. Ordinary content surfaces remain flat so creator media and branded art supply the depth.

# Navigation appearance

The observed primary bar is a dark, icon-led four-destination strip with a distinct centered create action and a thin top divider. Selection is communicated by the white icon and a small indicator, while inactive items recede to gray. The white Wibes wordmark is centered in the top chrome of feed and focused content. Deeper article, product, help, and profile views use back or close controls without introducing a second persistent navigation system. Adapt the appearance and hierarchy to the target product's real destinations rather than copying Wibes labels or count.

# Components

### Buttons

Primary actions are full-width violet rounded rectangles around 48 points high with white semibold text. Disabled actions use a medium-gray fill. Secondary choices use charcoal or white depending on the containing campaign surface. Small cart actions may be square violet controls attached to product rows; follow and sign-in actions use the same violet family.

### Cards & Containers

Media cards combine author identity, vertical content, a right-side social rail, caption, views, and optional product carousel. Product tiles use a thumbnail, compact price/title, and a separate cart control. Editorial cards use a large image and short reading metadata; focused articles use a continuous charcoal surface rather than repeated boxed paragraphs. Profile tiles preserve tall media crops in a two-column grid.

### Inputs & Forms

Topic selection uses two-column dark tiles with large category art, a violet outline, and a circular check when selected; a count/status row explains the selection requirement before the bottom action enables. Authentication and creation gates are focused sheets or sparse full-screen states with one dominant action. Long informational pages use plain dark scrolling text and conventional back navigation rather than form styling.

# Imagery and icons

Creator video is cropped to fill tall rounded stages. Product and editorial photography uses realistic imagery and keeps its original subject legible; it is not recolored into the illustration palette. Circular avatars and publisher marks remain small identity anchors.

Conventional controls—back, close, share, like, comment, overflow, cart, and bottom navigation—use simple white or gray glyphs with consistent stroke weight. Product-specific education and recovery use the authored illustration system from `illustrations.md`, not arbitrary SF Symbols. Any temporary asset must preserve the final image's footprint, crop, and color mass.

# States

Selected topic tiles gain violet borders and checks, while the save action changes from disabled gray to violet. Permission requests first appear as an authored dark sheet, then hand off to native iOS permission UI. Feed engagement shows selected count or action state in place. Comments can present an illustrated empty state plus a sign-in requirement. Creation and enhanced actions can be gated by an explanatory sign-in screen. Network failure replaces content with one illustration, a concise explanation, and a violet retry action. Focused product and article views preserve the global navigation and a clear close/back path.

# iOS adaptation

### Touch Targets

Give topic tiles, story cards, social actions, product rows, cart controls, profile tiles, navigation items, close/back controls, and primary actions at least 44-point targets. Increase the hit region around compact overlay glyphs without enlarging their visible artwork.

### Collapsing Strategy

On compact heights, preserve the active media, author, primary engagement action, linked product, and bottom navigation. Let story rails and product strips scroll horizontally. In articles, preserve title, lead image, readable body, and attached purchase action while allowing secondary recommendations to move later in the scroll.

### Image Behavior

Use aspect-fill for creator video, profile tiles, article photography, and product media. Use aspect-fit for authored stickers, 3D objects, and recovery illustrations. Keep text and essential controls out of the home-indicator and status-bar safe areas even when media extends beneath them.

Respect Dynamic Type for body, action, and legal copy; let text wrap and allow reading surfaces to grow. Keep a logical VoiceOver order from author and media description to engagement controls, linked product, and navigation. Announce topic selection count, disabled requirements, loading, retry, and sign-in gates as state changes.

# Anti-generic checklist

- Do not turn the feed into a stack of small identical cards.
- Do not introduce light backgrounds into the primary shell.
- Do not tint every social or navigation glyph violet.
- Do not detach linked products from the content that introduced them.
- Do not replace large branded illustration with a small generic symbol.
- Do not use default blue tint, an unstyled `TabView`, or default `Form` sections.
- Do not apply one corner radius to media, product rows, buttons, sheets, and thumbnails.
- Do not copy Wibes' literal destinations when the adapted product has a different information architecture.

</design-context>
