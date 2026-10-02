<design-context>
---
version: 1
platform: iOS
name: Ozon-Job-design-analysis
description: "A practical iOS work app style with white rounded task groups on a pale gray canvas, Ozon-blue primary actions and selected tabs, dense warehouse/payment cards, bold system typography, documentary photos, and bright raster promotional artwork."
colors:
  canvas: "#F3F5F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEF2F6"
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
  card-padding: 12
  control-gap: 10
rounded:
  control: 12
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {backgroundColor: "#005BFF", textColor: "#FFFFFF", cornerRadius: 12, minHeight: 48}
  secondary-action: {backgroundColor: "#F1F4F8", textColor: "#111318", cornerRadius: 12, minHeight: 44}
  primary-card: {backgroundColor: "#FFFFFF", textColor: "#111318", cornerRadius: 18, padding: 12}
  navigation: {backgroundColor: "#FFFFFF", selectedColor: "#005BFF", unselectedColor: "#111318"}
---

# Overview

Ozon Job's current iOS screens are utilitarian and information-dense. The sampled Screen Gallery screens include launch, photo-led onboarding, Ozon ID login, home, warehouse search, warehouse details, payouts, profile, and courses.

The visual language is built from a pale gray page canvas, white rounded groups, saturated Ozon-blue actions, compact chips, dense cards, bottom tabs, documentary warehouse photography, and bright raster promotional/course artwork. It should feel like an operational worker app, not a marketing landing page or a generic SwiftUI list.

# Non-negotiable visual invariants

- The page background is pale gray, with white rounded groups creating most content surfaces.
- Ozon blue is reserved for primary buttons, selected tabs, active outlines, links, and high-priority promo banners.
- Warehouse cards use real workplace photography as the top visual mass, followed by bold location and rate text.
- Dense screens are divided by rounded white groups rather than thin full-width separators.
- Filter chips are compact pills near the top of warehouse search and similar selection screens.
- Bottom navigation has five destinations and a blue rounded selected background or blue selected icon treatment.
- Course and promo areas use bright raster thumbnails, often with gradients or 3D operational objects.

# Color and surfaces

The main canvas is a cool pale gray visible between stacked groups. Primary content surfaces are white, rounded, and lightly separated by the canvas rather than by hard borders. Nested neutral surfaces use very pale blue-gray for disabled actions, secondary buttons, and icon tiles.

Ozon blue is the only dominant action color. It appears in join/book/withdraw actions, selected tabs, focused login outlines, and active labels. Green marks available dates or positive pay/rate cues; purple appears in rate amounts and promotional banners; red/pink appears in favorites and warnings. Generic system blue, strong shadows, or a pure white full-page canvas would weaken the reference.

Text is near-black for titles, rates, names, and labels. Gray supports locations, explanations, time equivalents, and disabled metadata. Dividers are usually implicit through spacing and rounded group boundaries.

# Typography

The typography uses SF Pro-style system text with bold section heads and compact supporting copy. Screen titles in the navigation area are centered and modest. Section titles such as training blocks and feedback headers are bold and left-aligned. Warehouse names, payout amounts, and course names use semibold to bold text.

Rates and balances are prominent, often with colored amount text. Metadata such as distance, dates, rating, time, and hourly equivalents is smaller and tightly placed near the related title. Onboarding uses a large bold centered statement over a white lower panel.

At larger Dynamic Type sizes, preserve scan order by letting secondary descriptions wrap and by keeping amount/rate, primary button, and selected tab labels visible.

# Screen composition

Launch is a full Ozon-blue field with a large white tilted Ozon Job wordmark. Onboarding uses a full-width workplace photo in the upper portion and a rounded white lower sheet containing pager dots, a bold centered headline, and a full-width blue button.

Login mirrors Ozon ID style: logo upper left, bold title, explanatory text, phone input, blue focus outline, disabled or enabled full-width action, and secondary links below.

Home uses a white top area over pale gray, a compact profile/status header, horizontal story cards, rounded debt/promo/status cards, and a bottom tab bar. Warehouse search uses a centered title, horizontal filter chips, stacked cards with large photos, badges over photos, bold city/rate rows, date chips, and blue primary actions.

Payments use white rounded groups for balance, withdraw action, history rows, chart area, and menu rows. Profile uses a centered title, account row, two-column feature tiles, and grouped list rows. Courses use large section titles and horizontal course cards with raster thumbnails.

# Navigation appearance

Navigation bars are white with centered titles, small back chevrons on detail pages, and optional compact chat or location icons. Large product navigation does not move to a desktop-style top bar.

The bottom tab bar is a white rounded surface above the home indicator. It contains five compact items. The selected item is blue and often sits on a pale blue rounded highlight; inactive items use dark or gray icons with short black labels.

# Components

Primary buttons are solid Ozon blue with white semibold labels and 12 point corners. In warehouse cards, the primary booking button sits next to a light secondary button and a favorite heart control.

Filter chips are short rounded pills with black labels on white or very light surfaces. Active or important chips can use stronger fill or blue emphasis when shown.

Warehouse cards combine a rounded photo, small badges laid over the image, a bold location name, colored pay/rate amount, compact metadata, blue link text, date chips, and action buttons. Card corners are large enough to create grouped blocks but not decorative blobs.

Payments and profile rows use left icon tiles, one or two text lines, and a right chevron. Balance tiles and rating/benefit tiles use two-column white cards with compact labels and bold values.

# Imagery and icons

Imagery is essential on onboarding, warehouse discovery, home promos, and courses. Photography is documentary and workplace-specific: warehouses, workers, parcels, interiors, entrances, and transport. Course and promo thumbnails use bright raster graphics with 3D objects, parcels, vehicles, screens, or gradient panels.

Icons are compact and functional. They appear in bottom tabs, profile rows, service chips, badges, and menu rows. Use custom or asset-backed icons where the source shows a branded pictogram; arbitrary SF Symbols are not a substitute when the source icon has a distinct filled, rounded, or branded look.

# States

Observed states include launch, onboarding, focused phone login, disabled login action, populated home, warehouse search list, warehouse detail, payouts overview, payouts menu list, profile, and courses. Shared constants are white rounded groups, pale gray canvas, compact chips, blue actions, bold rates/amounts, and photo or raster-art emphasis where the sampled screens show it.

The sampled current screens do not verify dark mode, empty search, permission prompts, destructive confirmations, or error sheets. Do not claim or design those as source-specific without additional approved evidence.

# iOS adaptation

Use native iOS scroll views, text fields, sheets, keyboard handling, safe-area handling, VoiceOver order, and 44 point minimum targets, while restyling visible controls to match the observed surfaces. Keep bottom tabs above the home indicator and preserve the white rounded tab container.

On compact iPhones, stack groups vertically, keep warehouse photos full card width, let long locations wrap, and preserve the rate/action row hierarchy. For Dynamic Type, prioritize visible titles, rates, primary actions, and selected navigation labels before secondary metadata.

Only implement appearances supported by current approved screens. Do not add desktop hover states, web breakpoints, footers, marketing pricing cards, or pointer-only interaction.

# Anti-generic checklist

- Do not replace the pale gray canvas plus white groups with a plain full-white `Form`.
- Do not use default iOS blue if it differs from Ozon blue.
- Do not omit warehouse photography from search/detail cards.
- Do not replace course/promo raster artwork with SwiftUI shapes, SF Symbols, emoji, or gradient-only placeholders.
- Do not use an unstyled `TabView`; selected tab treatment must be visibly custom.
- Do not invent dark mode, error, empty, or permission visuals from unrelated sources.
- Do not turn warehouse cards into sparse marketing cards; keep the dense operational metadata.
</design-context>
