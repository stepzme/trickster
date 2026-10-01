<design-context>
---
version: 1
platform: iOS
name: Cian-design-analysis
description: "A map- and photography-led real-estate marketplace with white surfaces, vivid blue actions, pale-blue service panels, cyan header gradients, compact green trust labels, and dense listing data. Search, filters, map, property detail, favorites, messages, listing creation, wallet, and office tools stay utilitarian and comparable."
colors:
  primary: "#087BEE"
  on-primary: "#FFFFFF"
  primary-soft: "#EAF4FF"
  accent: "#35B8F3"
  accent-secondary: "#2FAF63"
  ink: "#17191C"
  ink-muted: "#6F7479"
  ink-subtle: "#A7ACB1"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F2F5F8"
  hairline: "#DFE4E8"
  semantic-success: "#2FAF63"
  semantic-danger: "#D83A4A"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.3 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8, sm: 12, md: 16, lg: 20, xl: 26, xxl: 32, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  feature-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: [8, 16]}
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: [14, 16]}
  navigation-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Cian prioritizes geographic search, comparable listing data, and direct contact. Secondary tools support saved searches, property management, listing creation, messaging, and wallet administration.

# Non-negotiable visual invariants

- The sampled screens consistently show Map-first search surface.
- Preserve search context.
- Keep price and area comparable.
- Use real photos.
- Make contact obvious.
- Show listing state.
- Search overlays filters on a map and raises a listing sheet from below.
- Detail uses a photo gallery followed by dense sections; creation uses a linear form.

# Color and surfaces

- **Primary** ({colors.primary}): Search, save, call, publish, and continuation.
- **Accent** ({colors.accent}): Header atmosphere and service emphasis.
- **Secondary Accent** ({colors.accent-secondary}): Trust, new, super-agent, and positive labels.

- **Canvas** ({colors.canvas}): Results, listing, creation, favorites, and office.
- **Surface 1** ({colors.surface-1}): Main cards and sheets.
- **Surface 2** ({colors.surface-2}): Secondary controls and grouped fields.
- **Hairline** ({colors.hairline}): Quiet separation.

- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting detail.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

# Typography

- **SF Pro Display** — prices and section headings.
- **SF Pro Text** — controls, forms, and explanatory copy.
- **SF Mono** — code, identifiers, or compact numeric data.

Use 36 points bold for major statements, 22 points bold for screen headings, 16 points semibold for cards, 14 points regular for detail, and 15 points semibold for primary actions.

- Keep location and price dominant.
- Show property attributes in consistent order.
- Use photos for evidence, not decoration.
- Keep contact action persistent.

Use **Inter** or the platform system sans when the reference display face is unavailable.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points edge gutters, 12 points control gaps, and 16 points card padding.

Search overlays filters on a map and raises a listing sheet from below. Detail uses a photo gallery followed by dense sections; creation uses a linear form.

Allow map and photos to breathe, while keeping comparable listing metadata tightly grouped.

Use sheets over maps, subtle cards, and mild blue gradient only on home. Photography provides most depth.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Home, Search, Favorites, Messages, and Office form the base; map and listing preserve search context.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Blue full-width actions save search, call, create, publish, and continue. Favorite uses a separate heart state.

Listing cards pair photo, price, core attributes, location, transport time, labels, and contact. Similar listings use a compact photo grid.

Location, parameters, photos, features, description, price, terms, and payment use stepwise labeled controls.

Show new, advertisement, verified, super-agent, price changed, draft, published, paid, archived, and deleted as text labels.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Use real property, room, building, and neighborhood photos. Small service icons stay functional and secondary.

Crop property photos consistently but preserve spatial context. Keep price, attributes, trust labels, and CTA outside the image.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show new, advertisement, verified, super-agent, price changed, draft, published, paid, archived, and deleted as text labels.

- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep every row, tab, selector, map control, and primary action at least 44 points.
- Preserve location, filters, listing summary, price, and contact. Collapse secondary services before property evidence.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not hide filters behind opaque imagery.
- Do not use illustration instead of property evidence.
- Do not bury price history.
- Do not mix owner tools into buyer search.
- Do not rely on map dots without list access.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
