<design-context>
---
version: 1
platform: iOS
name: Wibes-design-analysis
description: "A dark shoppable-content interface combining edge-to-edge creator media, charcoal editorial cards, electric-violet commerce actions, bold rounded white typography, and playful lime-pink mascot art. The feed behaves like short video, while profiles, articles, products, and help remain inside the same black frame."

colors:
  primary: "#8B5CFF"
  on-primary: "#FFFFFF"
  primary-pressed: "#7342EA"
  ink: "#FFFFFF"
  ink-muted: "#C7C4CC"
  ink-subtle: "#8D8A92"
  canvas: "#0D0D0E"
  surface-1: "#252526"
  surface-2: "#333334"
  accent-lime: "#E6FF58"
  accent-pink: "#FF57C9"
  accent-yellow: "#FFE76B"
  accent-violet: "#7D3CDA"
  price-orange: "#FF7A1A"
  hairline: "#FFFFFF1F"
  semantic-success: "#44B87A"
  semantic-danger: "#EF5A65"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: Rounded Sans, fontSize: 42, fontWeight: 800, lineHeight: 1.0, letterSpacing: -1 }
  display-lg: { fontFamily: Rounded Sans, fontSize: 32, fontWeight: 750, lineHeight: 1.06, letterSpacing: -0.6 }
  display-md: { fontFamily: Rounded Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: Rounded Sans, fontSize: 21, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: Rounded Sans, fontSize: 16, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Rounded Sans, fontSize: 17, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: Rounded Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: Rounded Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: Rounded Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: Rounded Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: Rounded Sans, fontSize: 15, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: Rounded Sans, fontSize: 10, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.25 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 5, sm: 9, md: 13, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  media-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0 }
  product-strip: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 8 }
  editorial-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.lg}", padding: 14 }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

Wibes frames creator video, editorial stories, and products inside a continuous black experience. Violet actions connect viewing, following, creating, and buying without competing with the media.

# Non-negotiable visual invariants

- The reference consistently shows let real creator media dominate the feed.
- The reference consistently shows attached products visible without hiding the content.
- Imagery consistently uses playful art for education and recovery.
- Sampled screens consistently use preserve violet as the cross-product action color.
- The reference consistently shows a dark shoppable-content interface combining edge-to-edge creator media.
- The reference consistently shows charcoal editorial cards.
- The reference consistently shows electric-violet commerce actions.
- The reference consistently shows bold rounded white typography.

# Color and surfaces

### Brand & Accent

Electric violet is the primary action and selected state. Lime, pink, and yellow belong to onboarding, stickers, and educational art.

### Surface

Use near-black canvas, charcoal cards, and slightly lighter modal sheets. Media may fill edge to edge within rounded clipping.

### Text

Use white for titles and actions, light gray for supporting copy, and muted gray for metadata and inactive navigation.

### Semantic

Use green for success, red for report or removal, orange for immediate purchase, and violet for neutral social or commerce action.

# Typography

### Font Family

Use a bold rounded sans with broad Cyrillic and friendly display forms.

### Hierarchy

Use 32–42 points campaign statements, 21–26 points editorial headings, 14–17 points body and product labels, and 10–12 points metadata.

### Principles

Keep headlines short, chunky, and left aligned. Product descriptions and legal copy use calm regular weights for contrast.

### Note on Font Substitutes

Use Manrope, Inter Rounded, or a similar geometric sans with 700–800 display weights.

# Screen composition

### Spacing System

Use a 4 points base, 12 points card gaps, 12–16 points phone gutters, and 20–24 points between content blocks.

### Grid & Container

Feed media is full-width and near full-height. Profiles use a three-column media grid; product detail uses gallery above a sticky action.

### Whitespace Philosophy

Let media fill the viewport but keep copy, actions, and product strips within safe dark zones. Text-only help screens remain open and simple.

Surface hierarchy observed in the source:

Use card overlap, dark sheets, soft image shadow, and lightly extruded illustration objects. Avoid glossy glass UI.

### Decorative Depth

Use sticker-like mascots, tilted cards, starbursts, orbits, speech bubbles, and small 3D extrusions only in education and empty states.

# Navigation appearance

Use a four-item bottom bar for Feed, Create, Cart, and Profile. Keep it black and persistent across feed, editorial, and commerce surfaces.

# Components

### Buttons

Primary follow, login, refresh, create, and cart actions are wide violet rectangles. Buy now may use orange for separation. Native controls must inherit these fills, radii, and type.

### Cards & Containers

Media cards hold author, content, social actions, caption, product carousel, and price. Editorial cards combine image, read time, title, like, and share.

### Inputs & Forms

Creation and account forms use dark filled rows with white type and violet completion action. Keep sign-in gating inside one modal sheet.

# Imagery and icons

Use sticker-like mascots, tilted cards, starbursts, orbits, speech bubbles, and small 3D extrusions only in education and empty states.

Use vertical creator video, rounded editorial photography, circular avatars, and tilted white portrait cards inside illustration scenes.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Use like, comment, follower, verification, cart, login-required, connection error, and content-rights states in direct context.

# iOS adaptation

### Touch Targets

Media, social actions, product strip, profile grid, bottom navigation, purchase, create, and sign-in controls require at least 44 points targets.

### Collapsing Strategy

Keep media, author, primary social action, attached product, and next action visible. Collapse comments, description, help, and secondary commerce detail.

### Image Behavior

Use `cover` for video, editorial photos, profile grids, and product media; use `contain` for sticker illustrations and device art.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Do not place mascot art over real product photography.
- Do not make every social icon violet.
- Do not introduce light backgrounds into the main shell.
- Do not retain default native blue controls.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
