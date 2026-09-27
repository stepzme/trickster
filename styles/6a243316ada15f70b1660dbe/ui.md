<design-context>
---
version: alpha
name: Stars-Coffee-design-analysis
description: "A warm loyalty-led coffee app built from deep roast-brown headers, bright turquoise actions, cream typography, white rounded menu cards, and carefully isolated product photography. Onboarding adds dark-green and aqua wave fields with playful cream stars and soft 3D scenes."

colors:
  primary: "#43D7C2"
  on-primary: "#FFFFFF"
  primary-pressed: "#2FBCA8"
  brand-brown: "#5B321E"
  brand-green: "#0C5547"
  cream: "#FFF4C8"
  ink: "#1F1A18"
  ink-muted: "#746E6A"
  ink-subtle: "#AAA5A2"
  canvas: "#F6F5F7"
  surface-1: "#FFFFFF"
  surface-2: "#F1EEF0"
  hairline: "#E7E3E4"
  semantic-success: "#2CAE70"
  semantic-warning: "#F0A930"
  semantic-danger: "#DE5057"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 800, lineHeight: 1.02, letterSpacing: -0.8px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 800, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: System Sans, fontSize: 27px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 22px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.3px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 18px, xl: 24px, xxl: 32px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px }
  loyalty-card: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 16px }
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.lg}", padding: 12px }
  input-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px }
  step-indicator: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 6px }
---

## Overview

Stars Coffee pairs warm café branding with clean loyalty and menu utility. Brown frames the account context, turquoise carries progress and commitment, and white rounded cards isolate product photography.

## Colors

### Brand & Accent

Turquoise is the interaction and loyalty accent. Roast brown anchors headers; forest green and cream belong to onboarding and brand storytelling.

### Surface

White cards sit on a very pale gray canvas. Brown may fill top chrome, while forms return to neutral surfaces.

### Text

Dark brown-black carries product names and titles; cream or white appears on brand fields; gray supports prices and metadata.

### Semantic

Green confirms success, amber supports loyalty progress, and red marks failures. Dietary labels use small controlled color accents.

## Typography

### Font Family

Use a neutral system sans with heavy, slightly playful brand headings and compact menu copy.

### Hierarchy

Use 22–27px screen titles, 15–17px product and module names, 14px body, and 10–12px prices or labels.

### Principles

Keep product names readable over two lines, preserve clear prices, and reserve uppercase for the brand wordmark or short promos.

### Note on Font Substitutes

Use SF Pro or Inter. A rounded geometric sans may support marketing headlines, but forms and menu lists should remain neutral.

## Layout

### Spacing System

Use a 4px base, 16px gutters, 12px product gaps, and 20–24px between loyalty, news, location, and menu sections.

### Grid & Container

Home layers loyalty and promotion cards over brown chrome. Menu uses horizontal categories and a two-column product grid; gifting is single-column.

### Whitespace Philosophy

Keep menu cards airy around each drink or food item. Brand screens may use broad color fields and generous text zones.

## Elevation & Depth

Depth comes from white rounded sheets on brown, soft card shadows, and layered onboarding waves.

### Decorative Depth

Use teal waves, dark-green radial glow, cream stars, and soft 3D hero objects. Avoid glossy effects inside transactional forms.

## Shapes

### Border Radius Scale

Menu cards use 18px, loyalty and news cards 18–24px, form fields 8px, and primary actions are pills.

### Photography & Illustration Geometry

Products are centered cutouts on white. News uses landscape crops; onboarding uses a single centered 3D scene against curved fields.

## Components

### Buttons

Primary actions are turquoise pills with white text; dark-green pills may appear on onboarding. Native controls must inherit the package colors and geometry.

### Pricing Tabs

Menu categories use horizontally scrolling text tabs with a brown selected pill and muted inactive labels.

### Cards & Containers

Loyalty, news, café location, menu products, and gift designs each live in distinct rounded cards with one clear purpose.

### Inputs & Forms

Gift and profile fields use pale-gray fills and compact labels. Keep the numbered progress indicator visible above multi-step gifting.

### Status & Build Page

Cashback, free-cup progress, purchase history, and payment completion use explicit text plus compact progress or confirmation marks.

### Navigation

Home is the central hub. Focused menu, account, and gifting screens use a simple back-led top bar and contextual close where appropriate.

### Footer

There is no footer. End tasks with safe-area spacing or a turquoise primary action.

## Do's and Don'ts

### Do

- Preserve the brown and turquoise contrast.
- Isolate products on white.
- Keep loyalty progress visible.
- Use stars only in brand storytelling.

### Don't

- Do not place 3D onboarding art in menu cards.
- Do not use brown for semantic error states.
- Do not crowd product cutouts with decoration.
- Do not expose default platform-blue controls.

## Responsive Behavior

### Breakpoints

Keep account and gifting flows single-column. Wider menu layouts may add product columns while retaining card proportions.

### Touch Targets

Categories, product cards, loyalty actions, gift steps, and café controls require at least 44px targets.

### Collapsing Strategy

Allow menu categories and news cards to scroll horizontally. Keep the next or payment action visible through long gifting steps.

### Image Behavior

Use `contain` for menu cutouts and 3D brand scenes; use `cover` for news, gift designs, and promotional photography.

## Iteration Guide

Start with the brown home chrome, turquoise loyalty card, white menu grid, and account navigation. Add news, nearby cafés, onboarding, and gift certificates afterward.

## Known Gaps

The reviewed scenarios cover onboarding, Home, menu categories and products, loyalty, nearby cafés, Account, purchase history, and gift certificates. Tablet layouts and every failure state were not visible.

</design-context>

Use the design system above for all UI you generate.
