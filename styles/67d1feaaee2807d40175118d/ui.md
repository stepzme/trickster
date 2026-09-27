<design-context>
---
version: alpha
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
  display-xl: { fontFamily: Rounded Sans, fontSize: 42px, fontWeight: 800, lineHeight: 1.0, letterSpacing: -1px }
  display-lg: { fontFamily: Rounded Sans, fontSize: 32px, fontWeight: 750, lineHeight: 1.06, letterSpacing: -0.6px }
  display-md: { fontFamily: Rounded Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: Rounded Sans, fontSize: 21px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: Rounded Sans, fontSize: 16px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Rounded Sans, fontSize: 17px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: Rounded Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: Rounded Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: Rounded Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: Rounded Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: Rounded Sans, fontSize: 15px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: Rounded Sans, fontSize: 10px, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.25px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 5px, sm: 9px, md: 13px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  media-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0 }
  product-strip: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 8px }
  editorial-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.lg}", padding: 14px }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

Wibes frames creator video, editorial stories, and products inside a continuous black experience. Violet actions connect viewing, following, creating, and buying without competing with the media.

## Colors

### Brand & Accent

Electric violet is the primary action and selected state. Lime, pink, and yellow belong to onboarding, stickers, and educational art.

### Surface

Use near-black canvas, charcoal cards, and slightly lighter modal sheets. Media may fill edge to edge within rounded clipping.

### Text

Use white for titles and actions, light gray for supporting copy, and muted gray for metadata and inactive navigation.

### Semantic

Use green for success, red for report or removal, orange for immediate purchase, and violet for neutral social or commerce action.

## Typography

### Font Family

Use a bold rounded sans with broad Cyrillic and friendly display forms.

### Hierarchy

Use 32–42px campaign statements, 21–26px editorial headings, 14–17px body and product labels, and 10–12px metadata.

### Principles

Keep headlines short, chunky, and left aligned. Product descriptions and legal copy use calm regular weights for contrast.

### Note on Font Substitutes

Use Manrope, Inter Rounded, or a similar geometric sans with 700–800 display weights.

## Layout

### Spacing System

Use a 4px base, 12px card gaps, 12–16px phone gutters, and 20–24px between content blocks.

### Grid & Container

Feed media is full-width and near full-height. Profiles use a three-column media grid; product detail uses gallery above a sticky action.

### Whitespace Philosophy

Let media fill the viewport but keep copy, actions, and product strips within safe dark zones. Text-only help screens remain open and simple.

## Elevation & Depth

Use card overlap, dark sheets, soft image shadow, and lightly extruded illustration objects. Avoid glossy glass UI.

### Decorative Depth

Use sticker-like mascots, tilted cards, starbursts, orbits, speech bubbles, and small 3D extrusions only in education and empty states.

## Shapes

### Border Radius Scale

Use 9px chips, 13px product strips, 18px media and article cards, 24px onboarding panels, and pills for primary actions.

### Photography & Illustration Geometry

Use vertical creator video, rounded editorial photography, circular avatars, and tilted white portrait cards inside illustration scenes.

## Components

### Buttons

Primary follow, login, refresh, create, and cart actions are wide violet rectangles. Buy now may use orange for separation. Native controls must inherit these fills, radii, and type.

### Pricing Tabs

Topics, product variants, story pages, and profile sections use selectable tiles, thin progress bars, or compact chips with violet state.

### Cards & Containers

Media cards hold author, content, social actions, caption, product carousel, and price. Editorial cards combine image, read time, title, like, and share.

### Inputs & Forms

Creation and account forms use dark filled rows with white type and violet completion action. Keep sign-in gating inside one modal sheet.

### Status & Build Page

Use like, comment, follower, verification, cart, login-required, connection error, and content-rights states in direct context.

### Navigation

Use a four-item bottom bar for Feed, Create, Cart, and Profile. Keep it black and persistent across feed, editorial, and commerce surfaces.

### Footer

There is no footer. About, FAQ, support, feedback, and rights-holder information live in Profile help.

## Do's and Don'ts

### Do

- Let real creator media dominate the feed.
- Keep attached products visible without hiding the content.
- Use playful art for education and recovery.
- Preserve violet as the cross-product action color.

### Don't

- Do not place mascot art over real product photography.
- Do not make every social icon violet.
- Do not introduce light backgrounds into the main shell.
- Do not retain default native blue controls.

## Responsive Behavior

### Breakpoints

Phones show one immersive media card. Wider screens may pair the feed with product or comment detail and expand profile grids.

### Touch Targets

Media, social actions, product strip, profile grid, bottom navigation, purchase, create, and sign-in controls require at least 44px targets.

### Collapsing Strategy

Keep media, author, primary social action, attached product, and next action visible. Collapse comments, description, help, and secondary commerce detail.

### Image Behavior

Use `cover` for video, editorial photos, profile grids, and product media; use `contain` for sticker illustrations and device art.

## Iteration Guide

Start with topic onboarding, vertical feed, social actions, author profile, editorial post, product strip and detail, login gates, Create, Cart, and Profile help. Add comments and richer publishing afterward.

## Known Gaps

The catalog contains one complete onboarding flow. All 56 available image screens were listed and a representative set across feed, editorial, profiles, products, creation gates, errors, and help was inspected; exact multi-step commerce and publishing sequences remain less verified.

</design-context>

Use the design system above for all UI you generate.
