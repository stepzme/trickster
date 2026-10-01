<design-context>
---
version: 1
platform: iOS
name: Idram-IDBank-design-analysis
description: "A light modular fintech iOS system built from pale-gray canvas, white rounded service and account cards, vivid orange identity and CTAs, dark inner-page headers, photo-led story tiles, compact financial type, and a bottom bar centered on an oversized orange QR control."
colors:
  canvas: "#F4F4F4"
  surface-primary: "#FFFFFF"
  surface-secondary: "#ECECEF"
  accent-primary: "#FF8617"
  accent-secondary: "#32C992"
  text-primary: "#222225"
  text-secondary: "#6E6E74"
  divider: "#E3E3E5"
  destructive: "#E54B4B"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 16
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#FF8617", text: "#FFFFFF", height: 52, radius: 12}
  service-tile: {fill: "#FFFFFF", text: "#222225", radius: 16, iconPlacement: "top"}
  account-card: {fill: "#FFFFFF", text: "#222225", radius: 16}
  story-card: {fill: "photo", radius: 16, overlay: "dark gradient"}
  navigation: {fill: "#FFFFFF", active: "#FF8617", inactive: "#77777D", centralAction: "orange QR circle"}
---

# Overview

Idram & IDBank presents dense banking and everyday services as approachable white modules on a pale-gray field. Orange provides strong orientation, while story photography, financial card art, service icons, and a conspicuous central QR control keep the dashboard visually distinct from a generic form-based banking app.

# Non-negotiable visual invariants

- Pale gray is the page canvas and white rounded cards group balances, services, transactions, and forms.
- Vivid orange is the primary identity, action, selected-state, and central QR color.
- The bottom bar is white with compact gray labels and an oversized elevated orange QR action at its center.
- The main dashboard mixes horizontally scrolling photo-led stories, financial cards, and dense icon-and-label service grids.
- Inner utility screens frequently use a dark header above a light single-column body.
- Typography remains compact and amount-led, with dark titles and quiet gray metadata.
- Green is reserved for payment confirmation or success, while destructive actions remain red.
- Cards use moderate consistent rounding and restrained shadow, never glass or heavy floating depth.

# Color and surfaces

Warm light gray fills the background; white cards and fields establish the working surfaces. Orange appears in major CTAs, selected filters, badges, and the central QR control, while dark charcoal headers create contrast on inner screens. Green is semantic success rather than a second brand wash. Text ranges from charcoal to medium gray, with pale dividers and subtle shadows separating dense modules. Default system blue, broad gradients, or coloring every tile orange would dilute the hierarchy.

# Typography

Use SF Pro Display for prominent amounts and page titles, and compact SF Pro Text for cards, transaction rows, service labels, and metadata. Amount or destination leads; supporting data is smaller and gray. Multi-language labels may wrap to two lines inside stable tiles rather than shrink. Dynamic Type expands cards and rows vertically and lets service grids reduce columns before compromising touch size or label legibility.

# Screen composition

Dashboard screens use a vertical scroll with 16-point insets: horizontal story cards near the top, account or product cards, then tightly grouped service tiles and transaction modules above the fixed bottom bar. Story crops and card art form meaningful visual masses and cannot be omitted. Utility lists use compact rows and filters; payment and transfer surfaces use one-column forms with white fields and a strong bottom or inline orange action. Full-screen QR scanning switches to a dark camera field. Confirmation, choice, success, and destructive states appear as rounded bottom sheets or centered dialogs.

# Navigation appearance

The bottom bar is white with small gray icon-label pairs, orange selected content, and a raised central orange QR circle. Many inner pages use a dark charcoal top bar with white back and utility glyphs above a light body. Sheets are white with large top corners and a quiet drag indicator. Back chevrons and right-side actions are compact and familiar. These properties describe appearance only, not the original route structure.

# Components

Story cards use tall rounded photo crops with text protected by a dark overlay. Service tiles are compact white rounded rectangles with a simple icon above a short label. Account and product cards prioritize balance, identifier, and card art. Primary actions are full-width orange rounded rectangles with white semibold text; secondary controls are white or pale-gray pills. Transaction rows align icon, description, metadata, and amount. Search fields, filter pills, toggles, QR framing, swipe delete, success dialogs, and action sheets use consistent moderate radii. Disabled controls reduce saturation and contrast.

# Imagery and icons

Photography is important in story and promotional cards and should retain its crop and footprint during implementation. Financial card art and QR/scanner graphics are functional branded media. Service icons are simple line or filled glyphs sized consistently within open white tiles. These varied assets do not establish one independent authored illustration system, so they should not be generalized into an illustration language or replaced by random SF Symbols.

# States

Observed states include onboarding, populated dashboard, stories, tickets and service grids, vehicle add/remove, payment and tax forms, notification list/search/filter/select/delete, QR scanner, history search/filter, banking and card order, phone payment, several transfer forms, profile and contact/address content, login/authorization, exchange rates, identity status/share/delete, image addition, logout, keyboards, swipe actions, confirmations, success, and destructive dialogs. Pale canvas, white modules, orange actions, dark headers, and semantic green/red remain constant.

# iOS adaptation

Use a safe-area-aware vertical scroll and keep the white bottom bar and raised QR control above the home indicator. Horizontal stories and product cards scroll without clipping their rounded crops. Forms and search must move focused fields above the keyboard. The scanner uses full-bleed camera content with safe overlay controls. Keep tiles, pills, rows, and bar items at least 44 points tappable. VoiceOver reads amount/destination before supporting metadata and describes the QR action explicitly. Dynamic Type may reduce service-grid columns and increase row height. Preserve the light/dark-header relationship rather than applying automatic dark mode indiscriminately.

# Anti-generic checklist

- No generic white-card stack that omits stories, service grid density, or the central QR control.
- No default-blue CTA replacing vivid orange.
- No equally orange treatment on every card, icon, and label.
- No missing story photography or product card art where they form the visual mass.
- No oversized marketing prose or mood copy added between transactional modules.
- No unstyled `TabView`, `Form`, or arbitrary symbols with inconsistent stroke weight.
- No heavy shadows, glass effects, or multiple unrelated radius systems.
- No illustration file inferred from photos, logos, QR assets, icons, or isolated status art.

</design-context>
