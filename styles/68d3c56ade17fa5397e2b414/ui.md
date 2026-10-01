<design-context>
---
version: 1
platform: iOS
name: Telcell-Wallet-design-analysis
description: "A light multifunction wallet built from white surfaces, pale gray grouping, coral navigation accents, cyan balance actions, compact service grids, and glossy multicolor 3D promotional cards. The visual tone is airy and modern while finance, rewards, QR, and banking remain explicit."

colors:
  primary: "#F37A68"
  on-primary: "#FFFFFF"
  accent-cyan: "#54D4EA"
  accent-violet: "#7462DB"
  ink: "#25272B"
  ink-muted: "#777B81"
  ink-subtle: "#ADB0B5"
  canvas: "#F7F7F9"
  surface-1: "#FFFFFF"
  surface-2: "#F0F1F4"
  hairline: "#E5E6E9"
  semantic-success: "#34B87A"
  semantic-warning: "#F1B43A"
  semantic-danger: "#E95A61"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4 }
  display-md: { fontFamily: System Sans, fontSize: 27, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [13, 18]}
  wallet-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14 }
  promo-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 0 }
  service-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 60 }
---

# Overview

Telcell Wallet is an airy finance utility with a colorful promotional layer. Coral and cyan guide action while white cards keep services, rewards, QR, and banking legible.

# Non-negotiable visual invariants

- The reference consistently shows white finance surfaces calm.
- The reference consistently shows coral consistently for selection.
- Imagery consistently uses contain 3D art inside promotions.
- The reference consistently shows preserve currency and reward units.
- The reference consistently shows a light multifunction wallet built from white surfaces.
- The reference consistently shows pale gray grouping.
- Navigation consistently uses coral navigation accents.
- The reference consistently shows cyan balance actions.

# Color and surfaces

### Brand & Accent

Coral marks active navigation, icons, and primary actions. Cyan supports add-money and status; violet and blue live mainly in promos.

### Surface

White cards sit on very pale gray. Modals use white over a neutral dimmed scrim.

### Text

Dark gray carries titles and values; medium gray carries instructions, terms, and inactive navigation.

### Semantic

Green confirms success, amber warns, and red marks failure. Coral remains a brand accent and needs explicit destructive labels.

# Typography

### Font Family

Use a neutral system sans with clear Latin, Armenian, and numerals.

### Hierarchy

Use 21–27 points page headings, 15–17 points module titles, 14 points body, and 10–12 points balance or service metadata.

### Principles

Keep balance, currency, limits, and reward cost explicit. Labels should remain short in the service grid.

### Note on Font Substitutes

Use SF Pro or Inter with an Armenian-capable fallback such as Noto Sans Armenian.

# Screen composition

### Spacing System

Use a 4 points base, 12 points gutters, 10–12 points card gaps, and 20–24 points between wallet sections.

### Grid & Container

Home stacks paired balance cards, promo rails, service grid, and favorites. Banking and Profile use single-column lists.

### Whitespace Philosophy

Keep finance lists airy and simple; promo cards may be visually rich but remain contained.

Surface hierarchy observed in the source:

White cards lift softly from gray. Promo objects add visual depth through material and lighting rather than shadowed chrome.

### Decorative Depth

Use glossy 3D objects and soft gradients inside promo cards only. Keep QR and transaction surfaces flat.

# Navigation appearance

Four bottom destinations persist across Home, BON, QR, and Banking. Coral identifies the current section.

# Components

### Buttons

Primary actions are coral with white text; add-money controls may be cyan circles. Native controls must inherit the same palette and geometry.

### Cards & Containers

Balance, pay-later, banking, reward, and profile cards each contain one clear domain. Service tiles stay icon-led and compact.

### Inputs & Forms

Payment and profile forms use pale fields with direct labels. Keep currency and limits adjacent to entered values.

# Imagery and icons

Use glossy 3D objects and soft gradients inside promo cards only. Keep QR and transaction surfaces flat.

Center 3D objects in rounded cards; use clean card artwork for banking. QR codes remain square with ample quiet zone.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

BON progress, account status, card attachment, payment, and ticket availability appear inline with the affected item.

# iOS adaptation

### Touch Targets

Service tiles, reward tabs, QR controls, banking rows, and bottom navigation require at least 44 points targets.

### Collapsing Strategy

Allow promo rails to scroll horizontally. Keep confirmation actions visible through long forms.

### Image Behavior

Use `contain` for 3D objects and bank cards; use `cover` only for promotional photography. Preserve QR quiet zones.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not decorate QR screens.
- Do not mix multiple gradients outside promos.
- Do not hide financial limits.
- Do not expose default blue controls.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not invent decorative imagery or symbol treatments that are absent from the reference.

</design-context>
