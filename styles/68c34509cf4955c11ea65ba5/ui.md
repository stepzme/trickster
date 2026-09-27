<design-context>
---
version: alpha
name: Find-My-design-analysis
description: "A native location utility built around pale Apple maps, system-blue person and device markers, white translucent bottom sheets, rounded action tiles, Memoji identity, red lost-device controls, and a four-tab structure for People, Devices, Items, and Me."
colors:
  primary: "#3478E5"
  on-primary: "#FFFFFF"
  primary-hover: "#2863C3"
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 40px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 34px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 28px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 13px 18px }
  map-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  action-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  person-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 10px 16px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px }
  top-nav: { backgroundColor: "transparent", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 44px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Find My keeps a live map visible while people, devices, and items occupy progressive white sheets. System blue marks trusted location and sharing; red is isolated to loss and erasure.

**Key Characteristics:**
- Pale Apple map as spatial canvas.
- White rounded bottom sheets.
- System-blue markers and actions.
- Memoji and device glyph identity.
- Four stable tabs for People, Devices, Items, and Me.

## Colors

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

## Typography

### Font Family
- **SF Pro Display** — large sheet and onboarding titles.
- **SF Pro Text** — people, devices, locations, and actions.
- **SF Mono** — serial or technical identifiers when needed.

### Hierarchy
Use 34–40px bold for onboarding, 22px for sheet titles, 17px for actions, 15px body, and 10–13px status detail.

### Principles
- Keep name, location, and availability together.
- Make dangerous device actions explicit.
- Use native truncation for long addresses.
- Support Dynamic Type.

### Note on Font Substitutes
Use the platform system sans. **Inter** is acceptable outside Apple platforms.

## Layout

### Spacing System
Use a 4px base, 16px sheet padding, 12px action gaps, and safe-area spacing.

### Grid & Container
The map fills the viewport; a bottom sheet moves from compact list to expanded person, device, or item detail.

### Whitespace Philosophy
Keep sheets concise to preserve map context; allow onboarding cards to breathe over blurred background.

## Elevation & Depth
Use map-to-sheet separation, native blur, rounded corners, and floating map controls. Avoid decorative shadow.

### Decorative Depth
Memoji, item glyphs, and map markers are functional identity; the system needs no added illustration.

## Shapes

### Border Radius Scale
Use 8px for small controls, 12–16px for action tiles, 24px sheet corners, and full circles for avatars and markers.

### Photography & Illustration Geometry
Use circular avatars, Memoji, and simple item glyphs as functional identity. Do not introduce decorative scenes.

## Components

### Buttons
Use blue text or filled actions for sharing and continue; red text handles lost, remove, and erase.

### Pricing Tabs
Not a commerce pattern. Use the four native destination tabs and compact map or list toggles.

### Cards & Containers
Use map sheets, person rows, device cards, item cards, action tiles, permission alerts, and lost-mode forms.

### Inputs & Forms
Sharing, contact, lost message, phone, and notification settings follow native fields and consent patterns.

### Status & Build Page
Show with you, shared, no location, offline, sound playing, lost, found, notification enabled, and erasing states explicitly.

### Navigation
People, Devices, Items, and Me remain in the bottom bar; map and recenter controls float above the active sheet.

### Footer
The white tab bar stays stable while sheets expand above it.

## Do's and Don'ts

### Do
- Preserve map context and privacy state.
- Keep person or device identity visible.
- Explain location permission before request.
- Isolate destructive device controls.

### Don't
- Don't cover the whole map without need.
- Don't use red for ordinary navigation.
- Don't share location without explicit consent.
- Don't use ambiguous item icons without labels.

## Responsive Behavior

### Breakpoints
Use map plus bottom sheet on phones, sidebar plus map on tablet, and persistent list-detail-map columns above 1024px.

### Touch Targets
Keep tabs, markers, sheet rows, action tiles, map controls, and permission actions at least 44px.

### Collapsing Strategy
Preserve map, selected entity, location status, key action, and navigation. Move secondary actions into an expanded sheet.

### Image Behavior
Keep map bounds relevant, avatars circular, and device or item glyphs aspect-fit; do not crop informative map labels unnecessarily.

## Iteration Guide
1. Build map, tabs, and permission onboarding.
2. Add People sharing and contact actions.
3. Add Devices, sound, directions, and lost mode.
4. Add Items and AirTag onboarding.
5. Add notifications, removal, and account settings.

## Known Gaps
- Tokens were inferred visually from 96 image screens.
- The catalog exposed no formal flows, so review used the screen fallback across People, Devices, Items, sharing, lost mode, and onboarding.
- Precision finding, live motion, and offline recovery were not deeply assessed.
- No tablet captures were present.

</design-context>

Use the design system above for all UI you generate.
