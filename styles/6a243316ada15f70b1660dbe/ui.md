<design-context>
---
version: 1
platform: iOS
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
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 800, lineHeight: 1.02, letterSpacing: -0.8 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 800, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: System Sans, fontSize: 27, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 22, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.3 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 18, xl: 24, xxl: 32, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  loyalty-card: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 16 }
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.lg}", padding: 12 }
  input-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 }
  step-indicator: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 6 }
---

# Overview

Stars Coffee pairs warm café branding with clean loyalty and menu utility. Brown frames the account context, turquoise carries progress and commitment, and white rounded cards isolate product photography.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A warm loyalty-led coffee app built from deep roast-brown headers, bright turquoise actions, cream typography, white rounded menu cards, and carefully isolated product photography.
- The dominant canvas token is #F6F5F7 and the primary accent token is #43D7C2.
- The recorded display style is 40 points while the body style is 14 points.
- Navigation appears as follows: Home is the central hub.
- The reviewed screens use this hierarchy: Onboarding adds dark-green and aqua wave fields with playful cream stars and soft 3D scenes.

# Color and surfaces

### Brand & Accent

Turquoise is the interaction and loyalty accent. Roast brown anchors headers; forest green and cream belong to onboarding and brand storytelling.

### Surface

White cards sit on a very pale gray canvas. Brown may fill top chrome, while forms return to neutral surfaces.

### Text

Dark brown-black carries product names and titles; cream or white appears on brand fields; gray supports prices and metadata.

### Semantic

Green confirms success, amber supports loyalty progress, and red marks failures. Dietary labels use small controlled color accents.

# Typography

### Font Family

Use a neutral system sans with heavy, slightly playful brand headings and compact menu copy.

### Principles

Keep product names readable over two lines, preserve clear prices, and reserve uppercase for the brand wordmark or short promos.

### Note on Font Substitutes

Use SF Pro or Inter. A rounded geometric sans may support marketing headlines, but forms and menu lists should remain neutral.

# Screen composition

### Grid & Container

Home layers loyalty and promotion cards over brown chrome. Menu uses horizontal categories and a two-column product grid; gifting is single-column.

### Whitespace Philosophy

Keep menu cards airy around each drink or food item. Brand screens may use broad color fields and generous text zones.

# Navigation appearance

Home is the central hub. Focused menu, account, and gifting screens use a simple back-led top bar and contextual close where appropriate.

# Components

### Buttons

Primary actions are turquoise pills with white text; dark-green pills may appear on onboarding. Native controls must inherit the package colors and geometry.

Menu categories use horizontally scrolling text tabs with a brown selected pill and muted inactive labels.

### Cards & Containers

Loyalty, news, café location, menu products, and gift designs each live in distinct rounded cards with one clear purpose.

### Inputs & Forms

Gift and profile fields use pale-gray fills and compact labels. Keep the numbered progress indicator visible above multi-step gifting.

### Status & Build Page

Cashback, free-cup progress, purchase history, and payment completion use explicit text plus compact progress or confirmation marks.

### Navigation

Home is the central hub. Focused menu, account, and gifting screens use a simple back-led top bar and contextual close where appropriate.

# Imagery and icons

Depth comes from white rounded sheets on brown, soft card shadows, and layered onboarding waves.

### Decorative Depth

Use teal waves, dark-green radial glow, cream stars, and soft 3D hero objects. Avoid glossy effects inside transactional forms.

# States

Cashback, free-cup progress, purchase history, and payment completion use explicit text plus compact progress or confirmation marks.

# iOS adaptation

Keep account and gifting flows single-column. Wider menu layouts may add product columns while retaining card proportions.

### Touch Targets

Categories, product cards, loyalty actions, gift steps, and café controls require at least 44pt targets.

### Collapsing Strategy

Allow menu categories and news cards to scroll horizontally. Keep the next or payment action visible through long gifting steps.

### Image Behavior

Use `contain` for menu cutouts and 3D brand scenes; use `cover` for news, gift designs, and promotional photography.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

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

</design-context>
