<design-context>
---
version: 1
platform: iOS
name: Ozon-Bank-design-analysis
description: "A bright iOS banking style with saturated Ozon-blue brand fields, white financial work areas, pale blue action groups, bold black balance typography, rounded product modules, bottom tabs, and glossy 3D card imagery."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F6FA"
  accent-primary: "#005BFF"
  accent-secondary: "#E8F6FF"
  text-primary: "#111318"
  text-secondary: "#6F747C"
  divider: "#E5E9EF"
  destructive: "#E84A5F"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 700, lineHeight: 44}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {backgroundColor: "#005BFF", textColor: "#FFFFFF", cornerRadius: 12, minHeight: 48}
  secondary-action: {backgroundColor: "#E8F6FF", textColor: "#005BFF", cornerRadius: 12, minHeight: 44}
  primary-card: {backgroundColor: "#FFFFFF", textColor: "#111318", cornerRadius: 20, padding: 16}
  navigation: {backgroundColor: "#FFFFFF", selectedColor: "#005BFF", unselectedColor: "#8E949C"}
---

# Overview

Ozon Bank's current iOS screens use a high-contrast finance layout: full Ozon-blue moments for launch and account context, white operational pages, pale blue grouped money actions, and heavy black numeric balances. The sampled current Screen Gallery screens include onboarding, Ozon ID login, the home account carousel, account details, payment entry, and the product catalog.

The style is recognisable through the blue brand capsule in the status/navigation area, large rounded financial modules, prominent balances, compact service rows, and glossy 3D product artwork inside onboarding and catalog cards. It should not read like a default SwiftUI banking app with plain lists and system tint.

# Non-negotiable visual invariants

- Ozon blue appears as a large brand field on launch and as the dominant account-stage background on the home screen.
- Financial pages use white canvas and white rounded modules, with pale blue reserved for grouped money actions and quiet secondary controls.
- Current balance and product amounts are bold, black, centered or strongly left-led, and visually heavier than descriptions.
- Primary buttons are solid Ozon blue with white text; secondary actions are pale blue or white with blue labels.
- Product catalog and promotional areas rely on glossy 3D card, piggy-bank, currency, or abstract object imagery.
- Bottom navigation uses five compact destinations with blue selected state and gray inactive labels/icons.
- Dense account settings and product lists use soft grouped rows with chevrons and minimal dividers.

# Color and surfaces

The canvas is predominantly white. Large Ozon-blue fields are reserved for launch, onboarding brand emphasis, and the top account zone on home. Account detail pages pull the blue back into small card thumbnails, buttons, and action icons.

Primary surfaces are white rounded modules. Secondary surfaces are pale blue or very light gray-blue groups used for quick actions, analytics tiles, catalog cells, and disabled login buttons. Pale green appears in benefit/status bands, while yellow appears as a guidance strip. Purple and magenta appear in credit and promo artwork, not as the main app tint.

Text is near-black for titles, amounts, tab labels, and row names. Secondary text is gray for explanations, conditions, locations, and legal/helper copy. Generic iOS blue, plain gray grouped forms, or broad monochrome gray cards would visibly break the reference.

# Typography

The screens use SF Pro-style system typography with strong weight contrast. Amounts such as balances and catalog rates are large, bold, and use tabular numeric treatment. Screen titles and section titles are bold but smaller than money values. Supporting text is compact, gray, and allowed to wrap across two to three short lines.

Buttons use medium-to-semibold labels centered in fixed-height rounded rectangles. Catalog chips and row labels use compact text with no decorative letter spacing. If the exact brand logotype is unavailable, use a raster or supplied logo asset; do not approximate it with a generic text wordmark.

For Dynamic Type, preserve the hierarchy by letting secondary descriptions wrap first, keeping balances, section titles, and primary actions visible before lower-priority rows.

# Screen composition

Launch is a full blue field with a centered white brand word or greeting and no card container. Onboarding places a large 3D product composition in the upper half, then a white lower block with a bold heading, explanatory text, pager dots, and two bottom actions.

Login screens are sparse: Ozon ID branding near the upper left, a bold title, short helper text, one phone input row, a full-width action, and secondary text links lower on the page. When the keyboard is visible, the focused input keeps a blue outline and the main action stays above the keyboard.

The home screen begins with a blue rounded account area occupying the top third, containing a horizontal product carousel and a pale-blue quick-action strip. Below it, white promotional, cashback, credit, and status modules stack in a single scroll. Account detail pages use a centered title, centered balance, horizontal card thumbnails, then grouped action rows and tiles.

The product catalog uses a white page with top back/search controls, short horizontal recommendation tiles, section titles, horizontal card carousels, and full-width product rows. Typical horizontal inset is tight, around 12 to 16 points, with 8 to 12 point gaps inside dense groups.

# Navigation appearance

Navigation bars are visually light: a centered screen title, a small back chevron on detail/catalog pages, and optional search or close controls. The home status/navigation area includes a small blue brand capsule under the system status bar.

The bottom tab bar is white and compact. The selected destination uses blue icon and label; inactive destinations are gray. Badges may be small red dots or counters. Tab styling must be explicit, because an unstyled default `TabView` would not match the rounded, compact reference.

# Components

Primary action buttons are solid Ozon blue, approximately full-width on forms or fixed-width inside account modules, with 12 point corners and centered white semibold labels. Disabled actions become very pale blue-gray with muted gray text.

Secondary actions use pale blue fills or white cells with blue labels. Quick money actions appear as three evenly spaced items in a pale blue rounded strip, each with a blue icon above a compact label.

Account/product cards use rounded rectangles, blue gradients or white fills, short labels, balances, and optional close affordances. Catalog cards often combine a white or pale surface with cropped 3D artwork that occupies the right side or lower-right corner.

Inputs are rounded white fields on white pages with a subtle gray border at rest and a saturated blue outline when focused. Row groups use white or very pale surfaces, left icon tiles, text stacks, and right chevrons without heavy separators.

# Imagery and icons

Imagery is compositionally important in onboarding, the home promotions, and product catalog. The observed language uses glossy 3D bank cards, piggy banks, currency symbols, abstract folded shapes, and colorful object clusters. These assets sit inside rounded cards or large upper visual stages and cannot be omitted while waiting for final assets.

Icons are small, filled or rounded-line Ozon-style symbols in blue, gray, green, or product colors. Do not replace source-specific icons with arbitrary SF Symbols when the source shows custom pictograms or branded card art.

# States

Observed states include launch, onboarding, default and focused phone login, disabled and enabled login action, populated home/account overview, account detail, payment entry, catalog overview, and selected catalog filter. Constant properties across these states are white work surfaces, saturated blue for action and focus, rounded modules, bold financial values, and compact gray support text.

The sampled screens do not verify dark mode, error banners, permission prompts, empty account history, or destructive confirmation sheets for this source. Do not invent those appearances from unrelated apps.

# iOS adaptation

Use SwiftUI or UIKit native controls for accessibility, focus, keyboard, safe areas, scroll inertia, sheets, and VoiceOver order, but restyle visible surfaces to match these screens. Keep all primary controls at least 44 points tall, preserve the top safe area brand treatment, and keep the bottom tab bar clear of the home indicator.

Use vertical scroll containers for home, account details, and catalog pages. On compact iPhones, allow promotional text and catalog labels to wrap, but keep balances, primary actions, and card artwork framed. If a keyboard is present, keep the active input and main login button visible above it.

Only implement light appearance unless a current Ozon Bank screen in the approved source shows a dark appearance. Do not add desktop hover states, web breakpoints, top navigation, footers, or marketing pricing layouts.

# Anti-generic checklist

- Do not replace Ozon blue with default system blue.
- Do not turn account, catalog, and settings surfaces into a generic `Form` or uniform white card stack.
- Do not use an unstyled `TabView`; selected and inactive tab states must match the observed blue/gray treatment.
- Do not omit 3D product imagery from onboarding, promotions, or catalog cards.
- Do not use arbitrary SF Symbols for branded card, cashback, finance, or product pictograms.
- Do not make every radius identical; account zones, cards, buttons, and sheets use different rounded scales.
- Do not add unverified dark mode, error, permission, or unrelated state visuals.
</design-context>
