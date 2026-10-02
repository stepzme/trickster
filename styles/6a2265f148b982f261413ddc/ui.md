<design-context>
---
version: 1
platform: iOS
name: Mycar-kz-design-analysis
description: "A Kazakh automotive marketplace visual system with a cool gray app canvas, white and near-black rounded cards, Mycar blue platform actions, yellow finance highlights, green contact controls, real vehicle photography, and repeated 3D automotive service objects."
colors:
  primary: "#3147F5"
  on-primary: "#FFFFFF"
  primary-focus: "#2032C9"
  brand-blue: "#1F4BEA"
  brand-cyan: "#29C7C8"
  ink: "#111214"
  ink-muted: "#5D636B"
  ink-subtle: "#8D929A"
  ink-tertiary: "#B8BDC5"
  canvas: "#F1F3F7"
  surface-1: "#FFFFFF"
  surface-2: "#F6F7FA"
  surface-3: "#E8EBF0"
  surface-4: "#D7DCE3"
  hairline: "#E2E6EC"
  hairline-strong: "#C9D0DA"
  inverse-canvas: "#050505"
  inverse-surface-1: "#171717"
  inverse-surface-2: "#242424"
  inverse-ink: "#FFFFFF"
  finance-yellow: "#F3E84A"
  contact-green: "#12B84F"
  danger: "#E63761"
  semantic-overlay: "#000000"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 800, lineHeight: 1.05, letterSpacing: 0}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 800, lineHeight: 1.08, letterSpacing: 0}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 800, lineHeight: 1.12, letterSpacing: 0}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 700, lineHeight: 1.22, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.28, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.2, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
rounded:
  xs: 6
  sm: 10
  md: 14
  lg: 18
  xl: 24
  xxl: 30
  pill: 9999
  full: 9999
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 40
components:
  platform-action: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", minHeight: 48, padding: [13, 18]}
  contact-action: {backgroundColor: "{colors.contact-green}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", minHeight: 48, padding: [13, 18]}
  service-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", minHeight: 124, padding: 14}
  listing-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0}
  filter-chip: {backgroundColor: "{colors.surface-3}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", minHeight: 34, padding: [8, 12]}
  finance-badge: {backgroundColor: "{colors.finance-yellow}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [3, 6]}
  grouped-panel: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14}
  inverse-card: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  tab-bar: {backgroundColor: "{colors.surface-1}", selectedColor: "{colors.ink}", unselectedColor: "{colors.ink-tertiary}", typography: "{typography.caption}", minHeight: 58}
---

# Overview

Mycar.kz presents automotive commerce as a compact, image-heavy iOS product. The observed screens use a cool gray canvas, bright white cards, strong black prices, blue finance and platform actions, green seller contact buttons, yellow monthly-payment badges, and repeated glossy 3D objects for service categories.

The visual system should feel commercial and utilitarian, not editorial. Real car photos are the dominant evidence for listings and detail pages; rendered objects identify app services and branded modules. In dark mode the same hierarchy inverts to black backgrounds and charcoal cards while preserving blue, green, yellow, and photographic content.

# Non-negotiable visual invariants

- Mycar blue is reserved for platform identity, calculate/submit actions, selected outline accents, and branded service marks.
- The default app background is cool light gray with white rounded cards; dark theme switches to black with charcoal cards.
- Vehicle listings lead with real car photography, then bold black or white price, yellow monthly-payment badge, and compact metadata.
- Service discovery uses a two-column grid of rounded cards with glossy 3D automotive objects above bold titles.
- Seller contact actions are green paired buttons and must stay visually separate from blue platform actions.
- Filter controls are small rounded gray chips with black icons and labels in a horizontally dense row.
- The bottom tab bar uses compact icons with black active state in light theme and pale gray inactive states.

# Color and surfaces

Use the cool gray canvas for most light screens. White cards sit on top with rounded corners and little to no shadow. Listings may visually merge into the scroll view, but image groups, finance blocks, settings groups, and form sections need clean white card boundaries.

Primary blue appears on calculate buttons, selected outlines, brand marks, and finance banners. Green is only for direct seller communication such as call or message. Yellow is a high-visibility finance tag behind monthly payment values. Red or pink appears in "new" badges and destructive/delete actions only.

Dark mode is not a simple dim overlay. Use black canvas, charcoal cards, white text, pale gray secondary labels, the same blue platform actions, green contact buttons, yellow finance tags, and photo crops with enough contrast against the dark surrounding cards.

# Typography

Use SF Pro as the iOS implementation face with strong Cyrillic/Kazakh/Russian legibility. Vehicle prices and section titles are bold and compact: prices around 20-24 points, section headings around 21 points, card titles around 16 points, service descriptions and specs around 11-13 points, and bottom navigation labels around 10 points.

Prices use heavy weight and tabular figures. Finance badges are small but bold enough to scan against yellow. Listing metadata uses short dot-separated phrases and muted gray. Settings rows and filters keep normal text weight so they do not compete with car prices and service titles.

The Mycar logotype is a brand asset, not reconstructed text. Do not imitate its letterforms with a font fallback.

# Screen composition

## Launch and permission surfaces

The splash screen uses a dark patterned background, centered white Mycar wordmark, and a small blue Mycar badge near the top. Native iOS permission alerts can appear over this or over the home screen; when blurred behind alerts, the app content should still reveal the gray/white card system.

## Home dashboard

Home starts with the Mycar wordmark, then a compact grid of large rounded cards combining labels and rendered automotive objects. Below it, horizontal service icons, story cards, banners, and personalized car-photo modules stack tightly with small page dots and minimal dividers.

## Listings

Listing screens use a dense top chip row, small result count, and vertically stacked car cards. Each listing shows a two-image crop, owner or report badge, large price, yellow monthly payment, vehicle facts, city/date, view count, compare, and favorite icons. Preserve the compactness; do not turn listings into spacious editorial cards.

## Vehicle detail

Detail screens keep image galleries at the top, then model, price, location/date, finance panel, blue calculate button, specifications, and a sticky green contact pair. Specs are aligned as label/value rows inside white or dark grouped surfaces.

## Services and profile

Services use a two-column rounded grid with 3D objects, title, and one-line description. Profile and settings use grouped white cards with simple monochrome row icons, disclosure chevrons, switches, and a circular avatar area. Avoid generic full-width iOS Form styling that erases the rounded-group structure.

# Navigation appearance

Use a bottom tab bar with four compact destinations. In light theme the active icon and label are black, inactive items are pale gray, and the bar is white. In dark theme the bar is near-black, active items are white, inactive items are gray, and notification count badges can remain red.

The top area often centers a small Mycar blue badge in the status region while page titles sit below. Detail and listing screens use a simple left back chevron with compact right-side compare, favorite, share, settings, or account controls. Keep these icons black or white according to theme; do not recolor every icon blue.

# Components

## Platform actions

Blue filled buttons are rectangular with modest corner radius and centered bold text. They appear for calculation, confirmation, search, and platform-owned progress. Disabled platform actions can desaturate toward gray-blue but should keep the same shape.

## Contact actions

Call and message buttons are green, paired horizontally, and visually sticky at the bottom of car detail screens. They include white communication icons and bold labels. Do not reuse blue for seller contact.

## Listing cards

Listing cards are image-first. Preserve side-by-side photo crops with small rounded corners, Mycar/report overlays, owner badges, compare and heart controls, large price, yellow finance chip, and compact fact line. The visual density is part of the source language.

## Service cards

Service cards are rounded white or charcoal rectangles with a 3D object at the top-left or top, bold title, and short description. "New" badges are small pink/red pills attached near the object or title. Objects must sit on the card, not in unrelated decorative scenes.

## Filters and forms

Filter chips are compact gray rounded rectangles with simple icons and short labels. Filter sheets use grouped white panels, black headings, pale selection rows, toggles, and a wide bottom action. Inputs and selectors should feel like custom grouped cards, not default bordered text fields.

## Settings rows

Settings rows group related account, security, app, and destructive actions into rounded white panels. Use small monochrome leading icons, primary text, optional gray subtitle, right chevron, and native-looking switches styled to the Mycar palette.

# Imagery and icons

Real vehicle photography is mandatory for marketplace content. Keep the observed crop style: tight exterior/interior pairs, rounded top corners, occasional embedded Mycar watermark, and overlaid owner/report badges. Do not replace listing photos with illustrations or generic car placeholders when a real car image is expected.

3D rendered automotive objects are part of the service and home visual system: small cars, key fobs, Autocheck blocks, auction gavel, bow-topped new car, gauges, washer/service objects, shield/documents, and finance/credit devices. These are authored raster assets, not SF Symbols or SwiftUI shape compositions.

Functional icons stay simple and monochrome: back, filter, sort, favorite, compare, share, profile, settings, disclosure, location, and tab icons. Use Mycar blue only for brand/service assets and selected platform graphics, not for every functional symbol.

# States

Light selected tab: black icon and label. Light inactive tab: pale gray icon and label. Dark selected tab: white icon and label. Dark inactive tab: muted gray icon and label. Notification badges remain compact red circles.

Selected or important finance state uses yellow badges with black text. Verified/report state uses blue badges. New state uses small pink/red pills. Favorite, compare, and filter selections can show filled or accented icons but should stay compact.

Native iOS permission alerts can appear over the app with blurred or dimmed content behind them. App-owned disabled states use pale gray fills and muted labels. Destructive account deletion appears as red text/icon inside the settings structure, separated from ordinary rows.

# iOS adaptation

Respect top and bottom safe areas, especially because the app often centers a small Mycar badge near the status area and keeps a persistent bottom tab bar or sticky contact pair. Touch targets must remain at least 44 points even when visible chips and icons are compact.

Dynamic Type can wrap service descriptions, settings subtitles, and filter labels. Do not reduce vehicle price, monthly payment, or model hierarchy just to preserve a fixed card height. In long Russian/Kazakh labels, prefer wrapping or horizontal chip scrolling over truncating the term that identifies the action.

Dark mode must be explicitly styled from the observed dark screens. Do not rely only on system inversion. Ensure photos, yellow finance tags, green contact buttons, blue calculate buttons, and gray metadata remain legible on charcoal cards.

VoiceOver should group each vehicle card as photo summary, badges, model, price, monthly payment, facts, location/date, and quick actions. Service cards should expose title and short description; 3D objects need concise labels only when they add meaning.

# Anti-generic checklist

- Do not substitute default iOS blue for Mycar's stronger royal blue or use blue for seller contact.
- Do not replace real listing photography with rendered cars, illustrations, SF Symbols, or empty placeholders.
- Do not collapse service cards, listing cards, filters, and settings groups into one generic white-card component.
- Do not ignore dark-theme evidence; black canvas and charcoal cards are part of the observed system.
- Do not remove yellow finance badges or green contact buttons from vehicle detail and listing compositions.
- Do not use unstyled `Form`, `List`, or `TabView` components that erase the custom card and tab rhythm.
- Do not introduce heavy shadows, glassmorphism, or decorative gradients around every card.

</design-context>
