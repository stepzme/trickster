<design-context>
---
version: 1
platform: iOS
name: Find-My-design-analysis
description: "A native location utility built around pale Apple maps, system-blue person and device markers, white translucent bottom sheets, rounded action tiles, Memoji identity, red lost-device controls, and a four-tab structure for People, Devices, Items, and Me."
colors:
  primary: "#3478E5"
  on-primary: "#FFFFFF"
  primary-soft: "#E8F1FF"
  accent-person: "#3B82F6"
  accent-item: "#8E8E93"
  ink: "#111216"
  ink-muted: "#6C6C70"
  ink-subtle: "#AEAEB2"
  canvas: "#F5F5F7"
  surface-1: "#FFFFFF"
  surface-2: "#F2F2F7"
  hairline: "#D1D1D6"
  semantic-success: "#30D158"
  semantic-warning: "#FF9F0A"
  semantic-danger: "#FF3B30"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 40, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 34, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [13, 18]}
  map-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  action-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  person-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: [10, 16]}
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 }
  bottom navigation: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Find My keeps a live map visible while people, devices, and items occupy progressive white sheets. System blue marks trusted location and sharing; red is isolated to loss and erasure.

**Key Characteristics:**
- Pale Apple map as spatial canvas.
- White rounded bottom sheets.
- System-blue markers and actions.
- Memoji and device glyph identity.
- Four stable tabs for People, Devices, Items, and Me.

# Non-negotiable visual invariants

- Sampled screens consistently use pale Apple map as spatial canvas.
- The reference consistently shows white rounded bottom sheets.
- The reference consistently shows system-blue markers and actions.
- The reference consistently shows memoji and device glyph identity.
- The reference consistently shows four stable tabs for People, Devices, Items, and Me.

# Color and surfaces

### Brand & Accent
- **Primary** ({colors.primary}): Location, sharing, navigation, and active tab.
- **Primary Soft** ({colors.primary-soft}): Selected and informational state.
- **Person Accent** ({colors.accent-person}): People markers.
- **Item Accent** ({colors.accent-item}): Devices and items.

### Surface
- **Canvas** ({colors.canvas}): Map and neutral system background.
- **Surface 1** ({colors.surface-1}): Sheets, actions, and lists.
- **Surface 2** ({colors.surface-2}): Secondary controls.
- **Hairline** ({colors.hairline}): Sheet and list separation.

### Text
- **Ink** ({colors.ink}): Names, device status, and actions.
- **Ink Muted** ({colors.ink-muted}): Address and availability.
- **Ink Subtle** ({colors.ink-subtle}): Disabled state.

### Semantic
- **Success** ({colors.semantic-success}): Found and reachable.
- **Warning** ({colors.semantic-warning}): Limited or pending state.
- **Danger** ({colors.semantic-danger}): Lost, remove, and erase.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

# Typography

### Font Family
- **SF Pro Display** — large sheet and onboarding titles.
- **SF Pro Text** — people, devices, locations, and actions.
- **SF Mono** — serial or technical identifiers when needed.

### Hierarchy
Use 34–40 points bold for onboarding, 22 points for sheet titles, 17 points for actions, 15 points body, and 10–13 points status detail.

### Principles
- Keep name, location, and availability together.
- Make dangerous device actions explicit.
- Use native truncation for long addresses.
- Support Dynamic Type.

### Note on Font Substitutes
Use the platform system sans. **Inter** is acceptable outside Apple platforms.

# Screen composition

### Spacing System
Use a 4 points base, 16 points sheet padding, 12 points action gaps, and safe-area spacing.

### Grid & Container
The map fills the viewport; a bottom sheet moves from compact list to expanded person, device, or item detail.

### Whitespace Philosophy
Keep sheets concise to preserve map context; allow onboarding cards to breathe over blurred background.

Surface hierarchy observed in the source:

Use map-to-sheet separation, native blur, rounded corners, and floating map controls. Avoid decorative shadow.

### Decorative Depth
Memoji, item glyphs, and map markers are functional identity; the system needs no added illustration.

# Navigation appearance

People, Devices, Items, and Me remain in the bottom bar; map and recenter controls float above the active sheet.

# Components

### Buttons

Use blue text or filled actions for sharing and continue; red text handles lost, remove, and erase.

### Cards & Containers

Use map sheets, person rows, device cards, item cards, action tiles, permission alerts, and lost-mode forms.

### Inputs & Forms

Sharing, contact, lost message, phone, and notification settings follow native fields and consent patterns.

# Imagery and icons

Memoji, item glyphs, and map markers are functional identity; the system needs no added illustration.

Use circular avatars, Memoji, and simple item glyphs as functional identity. Do not introduce decorative scenes.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show with you, shared, no location, offline, sound playing, lost, found, notification enabled, and erasing states explicitly.

# iOS adaptation

### Touch Targets

Keep tabs, markers, sheet rows, action tiles, map controls, and permission actions at least 44 points.

### Collapsing Strategy

Preserve map, selected entity, location status, key action, and navigation. Move secondary actions into an expanded sheet.

### Image Behavior

Keep map bounds relevant, avatars circular, and device or item glyphs aspect-fit; do not crop informative map labels unnecessarily.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't cover the whole map without need.
- Don't use red for ordinary navigation.
- Don't share location without explicit consent.
- Don't use ambiguous item icons without labels.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

- Tokens were inferred visually from 96 image screens.
- The catalog exposed no formal flows, so review used the screen fallback across People, Devices, Items, sharing, lost mode, and onboarding.
- Precision finding, live motion, and offline recovery were not deeply assessed.
- No tablet captures were present.

</design-context>
