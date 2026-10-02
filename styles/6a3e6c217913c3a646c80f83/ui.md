<design-context>
---
version: 1
platform: iOS
name: Avtobys-design-analysis
description: "A bright transit-and-wallet interface combining white and light-gray utility surfaces, saturated blue financial emphasis, warm yellow service markers, map-backed sheets, compact system type, and an elevated central payment control."
colors:
  canvas: "#F4F6F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#E9EDF2"
  accent-primary: "#1677F2"
  accent-secondary: "#FFC229"
  text-primary: "#12151A"
  text-secondary: "#737A84"
  divider: "#DEE3E9"
  destructive: "#E64C5D"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "accent-secondary", text: "text-primary semibold", shape: "rounded rectangle"}
  secondary-action: {fill: "accent-primary", text: "white semibold", shape: "rounded rectangle or circle"}
  primary-card: {fill: "accent-primary gradient", text: "white", shape: "rounded wallet panel"}
  navigation: {fill: "surface-primary", selected: "accent-primary", center: "elevated payment circle"}
---

# Overview

Avtobys combines a vivid blue wallet object, warm yellow service markers, white rounded modules, and functional map surfaces. The balance or payment object is the dominant visual mass on wallet screens; route screens let the map fill the viewport and anchor a white sheet above it. The elevated central payment control makes the bottom navigation recognisable without requiring decorative illustration.

# Non-negotiable visual invariants

- A saturated blue wallet, balance, or payment surface forms the principal color mass on financial screens.
- Warm yellow identifies service categories and important actions without replacing blue as the selection color.
- Utility content sits in white rounded panels on a very light cool-gray canvas.
- Route views preserve the map as full-screen context with an anchored top-rounded white sheet.
- Bottom navigation includes a visually elevated central circular payment control.
- Large balance or fare numerals contrast with compact route, time, and transaction metadata.
- Photography, map data, promo bitmaps, and small service icons remain content-specific rather than being forced into one illustration style.

# Color and surfaces

The everyday canvas is pale cool gray, with white cards, list panels, and route sheets. Saturated blue drives balance surfaces, selected navigation, route emphasis, and secondary commitment. Yellow marks service icons and observed active actions; cyan or teal can carry map routes and stop markers. Near-black is used for balances and headings, muted gray for timestamps and route metadata, and light dividers for ledgers and menu rows. Green and red remain semantic for successful and failed money states. Default iOS blue is too generic unless matched to the documented saturated brand treatment.

# Typography

SF Pro is appropriate for the observed system-like hierarchy. Large balance and key amount numerals use 28–34 point bold display type, screen titles use roughly 28 point bold, and section titles use 20 point semibold. Transactions, route rows, and controls use 14–15 point text; timing, tab labels, and helper content use 12 point captions. Keep numeric balances and fares dominant without turning every heading into display type. With Dynamic Type, allow ledger and route rows to increase height and secondary metadata to wrap beneath the primary line.

# Screen composition

Financial home screens stack a large blue gradient wallet or balance card high in the scroll, a compact action strip or service controls below, then offers, service rows, or promo banners. Typical side insets are about 16 points with 10–16 point internal gaps. Wallet and menu screens use single-column white lists. Route screens keep the map full-bleed behind a lower sheet containing search, route summaries, or stops. Payment and setup are focused single-column forms with a bottom action above the safe area. Bottom navigation remains attached to the lower edge while the central circular action rises above its baseline.

# Navigation appearance

The bottom bar is white with blue selected icon and label, muted inactive items, and one elevated circular payment/QR action at center. Focused payment, authentication, and settings surfaces use compact back or close controls in a simple top bar. Tabs and route modes use a blue underline or compact filled selection. Map content remains visible around an anchored white sheet with a large top radius. Modal education content appears in a centered or bottom card over a subdued scrim.

# Components

The primary wallet card is a broad rounded rectangle with saturated blue or a controlled blue gradient, white balance information, and clearly separated actions. Yellow rounded buttons indicate the observed primary payment or continuation state; blue buttons and circular controls serve selection and secondary commitment. Service rows pair a yellow circular icon container with dark label and optional gray metadata. Transaction and menu rows use white fill, fine dividers, and compact chevrons. Search is a soft-gray full-width field. Route sheets use white fill and 28-point top radius. Disabled actions turn gray; active payment actions switch to yellow rather than relying on opacity alone.

# Imagery and icons

Maps, city or promotional photography, bitmap offer cards, and small semi-dimensional service icons provide visual context. Keep maps legible and do not cover route geometry with promotional art. Promotional photos should remain bounded within their cards, while map content is allowed to fill the viewport. Service icons may share yellow containers, but the evidence does not establish a complete independent illustration language; do not extrapolate isolated semi-3D objects into large scenes. Functional icons stay simple, with blue selection and yellow category emphasis.

# States

Observed states include onboarding or education overlays, signed-out login, wallet balance, active and disabled payment actions, route list and route map, selected navigation, bank-card management, and menu rows. Blue financial emphasis, yellow service/action cues, white rounded surfaces, and compact type remain consistent. Successful and failed transaction states should keep their semantic color close to the amount or result rather than recoloring the entire screen.

# iOS adaptation

Respect status and home-indicator safe areas, especially around the elevated center navigation control and pinned payment actions. Use vertical scrolling for wallet, service, transaction, and menu content; keep maps full-viewport with a resizable or scrolling anchored sheet. The keyboard must not obscure payment fields or their confirmation action. Present app-owned education and route details using the documented card or sheet treatment, while system prompts remain native. QR, wallet actions, route rows, tabs, menu items, and bottom navigation need 44-point hit targets. VoiceOver should read balance or route identity before metadata and action. At large Dynamic Type, stack wallet actions and expand route rows rather than abbreviating essential labels. The observed package is light-first; a dark palette requires a separate designed adaptation.

# Anti-generic checklist

- Do not reduce the visual system to generic white cards with default blue buttons.
- Do not remove the dominant blue wallet surface or the map-backed route composition.
- Do not flatten yellow service markers and blue selection into one interchangeable accent.
- Do not ship an unstyled `TabView`, `Form`, `List`, or default map overlay.
- Do not replace the elevated central payment control with an ordinary equal-weight tab item.
- Do not substitute maps, promo photography, or service assets with arbitrary SF Symbols or emoji.
- Do not invent a broad illustration system from isolated onboarding, promo, or service graphics.

</design-context>
