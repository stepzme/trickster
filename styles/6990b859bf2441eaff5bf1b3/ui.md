<design-context>
---
version: 1
platform: iOS
name: Optima24-design-analysis
description: "A near-black mobile bank with layered charcoal cards, compact white financial type, decisive red controls, a dark five-item dock with a raised amber scanner action, and promotional imagery contained away from restrained transactional forms."
colors:
  canvas: "#0B0B0D"
  surface-primary: "#171719"
  surface-secondary: "#242329"
  accent-primary: "#DF1621"
  accent-secondary: "#D48A18"
  text-primary: "#F5F5F6"
  text-secondary: "#8C8C92"
  divider: "#303035"
  destructive: "#E5484D"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 600, lineHeight: 23}
  body: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 400, lineHeight: 19}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 14
  control-gap: 12
rounded:
  control: 10
  card: 14
  sheet: 24
  pill: 999
components:
  financial-card: {fill: "charcoal", radius: 14, padding: 14, separation: "tonal"}
  primary-action: {fill: "red", text: "white semibold", minHeight: 52, radius: 10}
  financial-field: {fill: "deep gray", text: "white", metadata: "muted gray", radius: 10}
  scanner-navigation: {bar: "dark rounded dock", selection: "red", center: "raised amber circle"}
---

# Overview

Optima24 is dark by default: near-black fills the full viewport, charcoal modules establish depth, and compact white financial data leads the scan. Red is concentrated in primary actions, active navigation, and brand emphasis; an amber circular scanner control anchors the bottom dock. Promotional banners and card artwork add isolated color, while core forms remain controlled, dense, and nearly monochrome.

# Non-negotiable visual invariants

- Keep near-black as the continuous full-screen field, including safe areas.
- Build depth through two or three charcoal tones, not white cards or visible drop shadows.
- Reserve saturated red for primary actions, active states, and limited brand emphasis.
- Preserve a dark rounded bottom dock with muted inactive items, red selection, and a raised amber central action.
- Use dense 12–16 point gutters and compact financial typography while keeping controls at least 44 points tall.
- Keep transfer and payment forms single-column with stacked full-width fields and a visually anchored bottom action.
- Center result states around a large status mark, primary amount, and a short row of follow-up actions.
- Confine promotional imagery to rounded modules so transaction data remains visually calm.

# Color and surfaces

The canvas is almost black. Primary cards use a slightly lighter charcoal and fields or selected subpanels step up one more dark tone; separation is tonal, with quiet dividers instead of shadows. Red is the strongest repeated accent and should occupy buttons, selected labels, and decisive controls rather than entire informational screens. Amber or gold belongs to the raised scanner action and occasional card/product emphasis.

White carries balances, amounts, and titles; muted gray carries descriptions, masked values, and inactive navigation. Green confirms successful money states, dark blue may support isolated informational panels, and destructive red should remain distinguishable from ordinary brand red through context and placement. Default light grouped backgrounds and default blue controls visibly break the reference.

# Typography

Type is compact, high-contrast, and numeric-first. Major amounts or result values may use 28–34 point bold display type; page titles use about 24 points; section heads 18 points; form labels and controls 14 points; metadata and tab labels 10–12 points. Currency values use stable tabular-looking alignment and keep the number stronger than the currency or explanatory label.

Use SF Pro Display and SF Pro Text. Under Dynamic Type, supporting detail wraps or moves below the amount before core values shrink. Keep the contrast between a bold financial value and quiet gray metadata. Forms should grow vertically, not compress labels or place multiple editable values into an unreadable row.

# Screen composition

The top safe area typically leads into a compact title or account summary. The middle is a vertical stack of rounded modules, full-width financial rows, or a focused form. Sixteen-point outer gutters and 12–16 point internal gaps create a dense rhythm. Long dashboards and menus scroll vertically; transactional screens reduce visual noise and keep one primary task per column. Bottom actions and the navigation dock reserve the lower safe area.

Observed archetypes include a dark dashboard mixing account modules and bounded promo banners; a menu made from repeated rows with circular left icons and right chevrons; a single-column payment or transfer form with selectors, fields, keyboard state, and fixed action; a card/settings view with segmented controls and toggles; a sparse centered empty state; and a receipt/result page with a large check, amount, and compact action shortcuts. Modal feedback appears over a dim or blurred dark context.

# Navigation appearance

The persistent bottom navigation is a rounded dark dock rather than a plain system bar. Inactive symbols and labels are gray, the active destination is red, and the middle scanner action is a raised amber circle with the strongest silhouette. Top bars are minimal: a compact back chevron, short title, and small contextual actions. Sheets and dialogs preserve dark surfaces, rounded upper corners, and high-contrast controls.

# Components

Financial cards use charcoal fill, approximately 14-point radii, compact padding, and little or no shadow. Menu rows pair a circular colored or red-line icon with a white label, optional muted detail, and a right chevron. Primary actions are full-width red buttons with white semibold text; disabled actions become neutral gray without changing geometry.

Fields and account selectors use deep-gray fill, white entered value, gray hint or metadata, and a roughly 10-point radius. Segmented controls and chips use dark tonal selection with red emphasis. Toggles retain the dark palette. Success pages use a large centered check or confirmation symbol, prominent amount, and small rounded follow-up actions. Pressed states deepen the existing fill; do not introduce glow or light elevation.

# Imagery and icons

Core banking UI relies on pictograms, card artwork, and restrained status symbols. Promotional banners and product art can carry saturated photography or rendered objects, but remain cropped inside rounded modules. Icons are compact and often sit in circular containers; red line icons recur in menus. The inspected screens do not establish a stable standalone authored illustration system, so do not invent decorative scenes or treat isolated campaign art as a reusable illustration language.

# States

Observed forms distinguish disabled gray and enabled red actions while preserving the same stacked geometry. Keyboard entry keeps the form on the dark canvas. Empty states are sparse and centered. Success or receipt states use green confirmation, a large amount, and compact actions. Rating/feedback is presented modally above the dark context. Selected cards, segments, toggles, and navigation retain red, amber, or tonal emphasis without changing the surface hierarchy.

# iOS adaptation

Extend the near-black canvas behind the status bar and home indicator. Use vertical scrolling for dashboards, menus, settings, and forms, with enough bottom inset for the dock or fixed action. Keyboard avoidance must keep the active field and red CTA reachable. Present native system permissions when needed, then return to the same dark context.

All navigation items, circular icons, segmented options, fields, and action shortcuts need at least 44-point targets. VoiceOver should announce title, account or amount, supporting detail, then action. Dynamic Type should expand cards and stack metadata. Compact widths should reduce promotional density before squeezing core financial data. Preserve the observed dark-led appearance rather than generating a light variant from system defaults.

# Anti-generic checklist

- Do not replace the black field with a white or grouped-gray banking template.
- Do not use default blue tint for primary actions or active navigation.
- Do not ship an unstyled `TabView`; preserve the rounded dock and raised amber center action.
- Do not add bright campaign colors to ordinary financial fields and rows.
- Do not use white cards, heavy shadows, glass effects, or broad gradients for core transaction surfaces.
- Do not flatten amount, account source, fee, and status into equal-weight text.
- Do not replace the focused stacked forms with generic `Form` sections.
- Do not infer a general illustration system from isolated card and campaign artwork.

</design-context>
