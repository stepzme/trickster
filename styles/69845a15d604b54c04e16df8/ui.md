<design-context>
---
version: 1
platform: iOS
name: SmartMed-design-analysis
description: "A light medical super-app built from pale blue page chrome, white rounded sheets, turquoise actions, compact information cards, and soft aqua-lilac 3D service imagery. Dense care choices remain calm through clear section headings, generous card radii, and a persistent five-tab navigation."

colors:
  primary: "#18BFC2"
  on-primary: "#FFFFFF"
  primary-pressed: "#10A8AB"
  accent-blue: "#6483F0"
  accent-lilac: "#B7A7F3"
  ink: "#17191D"
  ink-muted: "#70747B"
  ink-subtle: "#A9ADB3"
  canvas: "#F4F6F8"
  surface-1: "#FFFFFF"
  surface-2: "#EEF9F9"
  hairline: "#E7EAED"
  semantic-success: "#18B883"
  semantic-warning: "#F2A33B"
  semantic-danger: "#E55A61"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.6 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4 }
  display-md: { fontFamily: System Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14, fontWeight: 500, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 12, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [13, 18]}
  service-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  service-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 62 }
---

# Overview

SmartMed is a calm, service-dense medical interface. Pale blue chrome frames white content sheets; teal anchors actions and selection; rounded cards and soft medical objects reduce the severity of appointments, diagnostics, and pharmacy tasks.

# Non-negotiable visual invariants

- Keep teal as the interaction anchor.
- Use white sheets to organize dense care options.
- Pair friendly imagery with explicit medical labels.
- Preserve clear prices and appointment states.
- Home uses horizontal carousels and compact two-column service tiles inside a single scrolling column.
- Detail and profile screens use full-width rows.
- Keep air around headings and illustrative tiles while allowing administrative lists to remain compact.

# Color and surfaces

Turquoise is the sole operational accent. Periwinkle and lilac appear in service artwork and promotional cards, not as competing action colors.

Use a cool gray canvas, white sheets, and very pale aqua tiles. Dense lists remain white and separate with spacing or faint dividers.

Near-black carries titles and prices; medium gray carries descriptions; light gray is reserved for placeholders and inactive navigation.

Green confirms status, amber marks attention, and coral-red marks errors or discounts. Preserve teal for navigation and primary actions.

# Typography

Use a neutral system sans with clear Cyrillic and numerals. The voice is clinical but friendly.

Large titles are rare. Use 21 points section headings, 16 points service titles, 14 points body copy, and 10–12 points metadata.

Keep labels direct, wrap medical names cleanly, and keep price or appointment status visually adjacent to the related service.

SF Pro or Inter are suitable. Preserve compact card labels and high legibility at small sizes.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points page gutters, 8–12 points card gaps, and 24 points between major service groups.

Home uses horizontal carousels and compact two-column service tiles inside a single scrolling column. Detail and profile screens use full-width rows.

Keep air around headings and illustrative tiles while allowing administrative lists to remain compact.

Use translucent aqua and lavender 3D objects, soft gradients, and small glossy highlights. Avoid heavy glass blur.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Five bottom tabs persist across main areas. Teal identifies the active destination; focused tasks use a plain top bar and back action.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary actions are turquoise with white text and 12 points corners. Native controls may be used, but their styling must inherit the same color, geometry, and typography.

Service hubs, packages, clinics, and products use white or pale-aqua rounded cards. Keep one clear action or destination per card.

Search and booking fields are pale or white rounded bars with gray placeholder text. Long booking tasks progress as simple single-column steps.

Appointment, payment, loyalty, and medical-card status should appear close to the related title with compact semantic color and plain language.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Medical illustrations sit centered inside pastel landscape cards; pharmacy products use clean cutouts. Clinic maps remain rectangular and functional.

Use `contain` for service objects and product cutouts; use `cover` for promotional banners. Maps expand to available bounds.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Appointment, payment, loyalty, and medical-card status should appear close to the related title with compact semantic color and plain language.

Green confirms status, amber marks attention, and coral-red marks errors or discounts. Preserve teal for navigation and primary actions.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Tabs, rows, carousel cards, map controls, and booking actions require at least 44 points targets.
- Allow service carousels to scroll horizontally. Keep booking actions visible after long clinic or specialty lists.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not use decorative color for clinical severity.
- Do not crowd several primary actions into one tile.
- Do not expose default blue controls.
- Do not turn pharmacy photography into the illustration language.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

The reviewed scenarios cover Home, health services, appointment discovery, clinics and maps, pharmacy, medical record, and Profile. Tablet behavior, accessibility scaling, and every error state were not visible.

</design-context>
