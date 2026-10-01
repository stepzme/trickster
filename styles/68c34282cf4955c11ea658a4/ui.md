<design-context>
---
version: 1
platform: iOS
name: Wallet-design-analysis
description: "A sparse system-native iOS utility built from white and cool grouped-gray fields, large black titles, blue actions, oversized rounded card and pass surfaces, and visibly layered sheets whose depth comes from scale, dimming, and cropped underlying panels rather than ornament."
colors:
  canvas: "#F2F2F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#E9E9EE"
  accent-primary: "#007AFF"
  accent-secondary: "#1C1C1E"
  text-primary: "#000000"
  text-secondary: "#6C6C70"
  divider: "#C6C6C8"
  destructive: "#FF3B30"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 20
  control-gap: 12
rounded:
  control: 12
  card: 24
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#007AFF", foreground: "#FFFFFF", shape: "rounded-rectangle"}
  secondary-action: {fill: "transparent", foreground: "#007AFF", shape: "text-or-circle"}
  primary-card: {fill: "varied-pass-or-card-artwork", foreground: "#FFFFFF", shape: "large-rounded-rectangle"}
  navigation: {fill: "#FFFFFF", actionColor: "#007AFF", depth: "stacked-sheets"}
---

# Overview

Wallet presents a deliberately native and restrained iPhone interface. Most screens are large white or cool-gray fields with substantial negative space, black system typography, and blue actions. Visual emphasis comes from oversized card or pass objects, centered sparse-state symbols, and sheets visibly stacked over earlier surfaces. The result is recognizably different from a generic card dashboard: the interface is quiet, modal, object-focused, and almost free of ornamental shadows or brand decoration.

# Non-negotiable visual invariants

- White and cool grouped-gray occupy most of the viewport; saturated color is concentrated inside cards, passes, and blue actions.
- Primary card or pass objects are large, softly rounded, and given enough clear space to read as the dominant content rather than as small list decoration.
- Screen titles use bold black system type with strong scale contrast over restrained body and helper copy.
- Navigation and form chrome remain recognizably iOS-native, with blue text actions, compact circular icon controls, system alerts, search fields, and bottom sheets.
- Modal depth is visible through rounded sheet tops, dimmed backgrounds, or a cropped underlying layer rather than through decorative drop shadows.
- Sparse or empty screens keep generous untouched space and center a single functional symbol with short supporting text.
- Data-entry rows use pale grouped surfaces, fine separators, and predictable alignment; they are not independent floating cards.
- There is no persistent tab bar in the sampled screens.

# Color and surfaces

The visual base alternates between white and the cool `systemGroupedBackground` family. White is used for active full-screen or sheet surfaces; slightly darker cool gray groups fields, list rows, and inactive layers. System blue is the sole recurring interaction accent for text actions, primary controls, selection, and keyboard affordances. Black carries titles and primary values, while medium gray carries placeholders, descriptions, and unavailable content. Dim black overlays establish modal focus. Card and pass artwork introduces localized red, yellow, green, blue, beige, and dark tones, but these colors do not wash across the application canvas. Use semantic red only for destructive or error emphasis. A colorful fintech gradient, tinted page background, pervasive glass, or heavy shadow system would break the reference.

# Typography

Typography follows SF Pro closely: large bold navigation-scale titles, semibold section or object names, regular 17-point row and body text, and smaller gray helper copy. Alignment follows the container: large screen titles are left aligned, compact modal headings may be centered, and forms keep labels and values on a clear leading grid. Pass artwork may contain bolder white display copy, but surrounding UI remains neutral. Preserve hierarchy under Dynamic Type by allowing body and helper copy to wrap, letting forms grow vertically, and avoiding a reduction of large titles to the same scale as rows. Use SF Pro system roles rather than introducing a custom finance font.

# Screen composition

The sampled screens repeatedly use a system status area, a title or compact navigation row, one primary content region, and either open lower space or a bottom-aligned action. Typical horizontal insets are about 16–20 points. When content is sparse, it remains centered or upper-centered instead of being padded with extra cards. When content is dense, it scrolls as a continuous list or grouped form beneath fixed navigation.

On object-focused screens, one large rounded card or pass occupies much of the middle viewport, with neighboring content cropped or layered to suggest a horizontal collection. Setup and educational screens place a large card-like visual or compact object graphic above brief copy and a single action. Grouped-entry screens use broad pale rows, aligned labels, and native keyboard or picker space rather than separate floating panels. List screens repeat full-width rows with small card thumbnails, labels, chevrons, and quiet separators. Scanner screens invert the massing: near-black camera content fills the viewport, with a light framing guide and sparse system controls above it. Alerts, action sheets, and modal panels dim the existing composition while keeping its edges visible.

# Navigation appearance

Navigation uses system-weight bars and sheets rather than a branded shell. Large black titles appear on light surfaces; compact blue Back, Cancel, Next, and Done actions sit at the safe-area edges. Some top-level surfaces use small dark circular icon buttons with white symbols. Search uses the native rounded gray field. Bottom action sheets are white with large rounded top corners, while centered alerts use standard compact iOS geometry over a dimmed backdrop. Selected or enabled actions are blue; inactive content recedes to gray. No persistent tab bar was observed.

# Components

The primary card/pass surface is an oversized rounded rectangle with artwork or color filling the shape, high-contrast content, and minimal external chrome. Compact card thumbnails preserve the same rounded silhouette inside list rows. Primary blue actions are either system text actions or medium-radius filled controls, depending on the surrounding sheet. Circular navigation shortcuts are compact dark disks with centered white system symbols. Grouped fields use pale-gray row backgrounds, 12-point-class rounding at the outer group, fine internal dividers, black values, and gray placeholders. Empty states use one monochrome symbol, a short title or sentence, and abundant space. Search fields, alerts, action sheets, picker wheels, keyboards, spinners, and permission prompts retain their native geometry and material treatment.

# Imagery and icons

Imagery is functional and object-based. Payment-card renders, passes, transit-card thumbnails, ticket-like objects, and a camera preview identify what the interface is handling; they are not decorative character illustrations. Large object visuals are centered or allowed to dominate a card, while thumbnails remain compact and aligned with row text. Empty and error states use restrained monochrome symbols rather than authored scenes. Preserve the footprint of a prominent card, pass, or scanner preview when adapting this style; replacing it with an arbitrary SF Symbol or omitting it would collapse the composition. The sampled isolated setup graphics do not establish a reusable authored illustration language across states.

# States

Observed states include sparse setup panels, empty collections, populated card lists, search with and without results, grouped manual-entry forms, keyboard and picker presentation, a full-screen scanner, centered progress, permission prompts, action sheets, and unsupported or unavailable alerts. Light surfaces, system typography, blue action color, and generous spacing remain constant. Modal states add dimming and layered white surfaces; scanner state changes the canvas to black while retaining sparse high-contrast chrome. Errors are communicated primarily through native alerts and concise text, not full-page red treatments or illustrations.

# iOS adaptation

Use native navigation, search, alert, sheet, keyboard, picker, and permission transitions where they match the observed appearance, while explicitly styling the large card/pass objects and grouped surfaces. Respect top and bottom safe areas; full-screen camera content may extend beneath them while controls remain inside readable bounds. Put long forms and lists in scrolling containers, keep primary objects proportionally wide with stable corner radii, and preserve at least 44-point controls and rows. On compact widths, keep a single dominant card or pass and crop adjacent collection content rather than shrinking several objects into a dashboard. Dynamic Type may expand rows and move bottom actions into scroll content, but it must not flatten title, row, and helper hierarchy. VoiceOver order should follow title, primary object or state, supporting text, then actions. The sampled screens show a light application appearance plus a dark scanner surface; do not infer a comprehensive dark theme.

# Anti-generic checklist

- Do not turn the interface into a colorful fintech dashboard with metric cards, gradients, or a persistent branded header.
- Do not replace layered native sheets and alerts with generic centered custom cards.
- Do not apply one uniform corner radius to passes, form groups, icon buttons, alerts, and sheets.
- Do not use an unstyled `TabView`; no persistent tab bar is evidenced.
- Do not scatter arbitrary SF Symbols across every row or replace prominent card/pass objects with symbols.
- Do not wrap every section in an elevated white card or use heavy shadows to manufacture depth.
- Do not fill sparse states with promotional copy, extra actions, or decorative illustrations.
- Do not style grouped input as default `Form` sections if their spacing, cool-gray surfaces, and large-object context are lost.

</design-context>
