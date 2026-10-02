<design-context>
---
version: 1
platform: iOS
name: SmartMed-design-analysis
description: "A service-dense medical interface with near-white and pale-lavender canvases, rounded white cards, saturated teal actions, compact clinical typography, five-tab navigation, and mixed 3D service imagery."
colors:
  canvas: "#F5F6F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEF8F8"
  accent-primary: "#18BFC2"
  accent-secondary: "#7489EF"
  text-primary: "#17191D"
  text-secondary: "#70747B"
  divider: "#E7EAED"
  destructive: "#E0525C"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 32}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 17}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 12
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {background: "#18BFC2", foreground: "#FFFFFF", minHeight: 52, cornerRadius: 12}
  secondary-action: {background: "#FFFFFF", foreground: "#17191D", minHeight: 48, cornerRadius: 12}
  primary-card: {background: "#FFFFFF", foreground: "#17191D", cornerRadius: 18, padding: 16}
  navigation: {background: "#FFFFFF", selected: "#18BFC2", unselected: "#9A9EA5"}
---

# Overview

SmartMed organizes a broad set of clinical, appointment, record, pharmacy, and account content through calm pale surfaces and saturated teal interaction. Working screens are compact and utilitarian: white rounded modules, small service tiles, dense list rows, date and time chips, and a persistent five-item tab bar. Glossy aqua-lilac imagery is prominent in onboarding and selected service cards but does not replace clinical labels, prices, or scheduling status.

# Non-negotiable visual invariants

- Near-white or faint lavender-gray fills the page, while white rounded modules carry the main operational content.
- Saturated teal is the sole dominant interaction color for primary actions, active tabs, selected dates, toggles, links, and progress.
- Medical labels, price, appointment availability, date, and time stay explicit and text-led even when imagery is present.
- Home remains a dense single-column feed with horizontal service cards and compact grouped modules rather than a generic list of equal cards.
- Scheduling screens use horizontal date selection and small repeated time chips with a clearly distinct selected state.
- Bottom navigation is white with five gray inactive items and teal selected icon/label.
- Onboarding may use full-screen gradient and 3D imagery, but routine medical and account screens remain light, white, and list-oriented.
- Bottom sheets and sticky cart or action bars reserve the home-indicator inset.

# Color and surfaces

The main canvas is an almost white cool gray or lavender. Primary cards, lists, search, doctor rows, and account groups are white; very pale aqua supports service tiles and informational banners. Dividers are fine and quiet.

Teal drives actions and selection. Periwinkle or lilac appears in bounded onboarding, activity, or promotional imagery and never competes with teal as the control color. Near-black carries titles, service names, prices, and appointment facts; medium gray carries descriptions, inactive navigation, and placeholders. Green confirms positive state, amber may signal attention, and coral-red remains destructive. The observed dark theme converts canvas and cards to charcoal while preserving teal selection and white/gray hierarchy; default iOS blue would break the consistent teal interaction system.

# Typography

Use SF Pro as the iOS-safe typeface. Large display type is limited mainly to onboarding; working page titles are about 24–26 points, section headings 18–21 points, service and row titles 14–16 points, and descriptions, prices, dates, and metadata 11–14 points.

Weight and spacing provide more hierarchy than dramatic scale. Medical names, schedules, and explanatory text wrap cleanly in compact rows. Price and appointment state remain adjacent to the relevant provider or service. With Dynamic Type, descriptions may wrap and cards may grow vertically before date, time, price, or primary action loses prominence; time grids may reduce columns.

# Screen composition

Use roughly 16-point page gutters, 8–12-point card gaps, and 20–28 points between major service groups. Main screens scroll vertically above the persistent tab bar.

Observed archetypes:

- Onboarding/authentication: full-screen aqua-lilac gradient, large centered 3D object, white title/copy, progress markers, and a broad white bottom action; subsequent login and code screens become white and form-led.
- Service home: user row, horizontal quick-entry cards, rounded search, grouped service modules, carousels, activity/progress card, and tab bar.
- Appointment list: compact title bar, horizontal date strip, info banner, repeated doctor/service rows, and a grid of time chips.
- Doctor detail: provider summary, clinic/map preview, address, price, duration, long text, date/time selection, and bottom booking action.
- Catalog: stacked white sections with category thumbnails or product cards, prices, cart controls, and a sticky basket summary.
- Medical record/profile: broad grouped rows with left icons and right chevrons; empty documents use a small muted illustration and one action.
- Modal surface: rounded top sheet or native system action sheet over dimmed content.

Safe areas remain visible; bottom navigation and sticky actions do not obscure the last row.

# Navigation appearance

The persistent tab bar is white with five icon-and-label positions in the observed sample. Inactive icons are gray; the selected item turns teal. It is integrated with the screen edge rather than floating.

Inner top bars are minimal, usually a centered title with back chevron and occasional filter, share, or contextual action. Sheets use large rounded top corners, dimmed background, and compact handle or explicit close action. Native permission and external authorization sheets retain system appearance. These properties do not define product routes.

# Components

Primary actions are teal rounded rectangles, roughly 48–52 points high, with white medium or semibold text. Pressed state deepens teal; disabled state reduces contrast. Secondary actions use white or pale aqua with dark or teal labels.

Service tiles use white or pastel surfaces, one small image or icon, a concise label, and limited supporting data. Doctor rows combine placeholder/avatar, specialty, clinic or availability, price, and a clear disclosure or time selection. Date pills and time chips use teal border/fill or weight for selection.

Search fields are white rounded bars with gray placeholder text. Pharmacy and lab cards use a small product/category image, title, price, and compact cart control. Profile and settings rows pair simple line icons with labels and chevrons; toggles use teal when enabled. Sticky basket bars summarize count and total above the home indicator. Every compact chip, icon, and row retains at least a 44-point target.

# Imagery and icons

Onboarding uses large glossy 3D medical or utility objects, soft blur, and aqua-lilac gradients. Working screens mix small 3D service objects, product/package images, partner marks, muted document art, avatar silhouettes, and occasional characters. This mixture does not form one standalone reusable illustration system.

Use contain for service objects and product cutouts, preserve negative space, and keep text and price visually separate. Maps remain functional rectangles. Functional icons are simple monochrome line glyphs with teal active states; do not substitute arbitrary multicolor symbols. Compositionally present imagery must not disappear while final assets are pending; a temporary asset must preserve size, crop, color mass, and text-safe area.

# States

Observed states include onboarding, native location/notification/Face ID permission alerts, empty and valid phone entry, SMS loading, passcode creation, authenticated home, empty and populated search with keyboard, appointment loading skeleton, available and scarce-time states, clinic and online consultation selection, lab/pharmacy cart state, empty documents, photo/file action sheet, wallet/payment history, dark theme, saved-card removal, and destructive account deletion confirmation.

Across states, teal remains the interaction anchor, white cards retain rounded grouping, and medical status stays explicit in text. Loading skeletons preserve row geometry. Empty documents use quiet art and one clear action. No explicit network-error screen was observed; error treatment should remain local and semantic.

# iOS adaptation

Extend the active pale, gradient, or charcoal canvas through safe areas while keeping content inset. Use vertical scrolling for home, appointments, details, catalogs, records, and settings; reserve the bottom safe area for tab or sticky actions.

Allow service rails and date strips to scroll horizontally. Reflow time-chip grids on compact widths or larger text. Present keyboard, location, notifications, Face ID, files/photos, and external authorization natively, then return to the same visual context. VoiceOver should announce service/provider, date, time, price, availability, and action in logical order. Preserve both observed light and dark surface hierarchies rather than merely inverting colors.

# Anti-generic checklist

- Do not replace teal with default iOS blue.
- Do not extend onboarding gradients and glossy 3D objects across routine clinical lists and forms.
- Do not hide price, duration, clinic, date, time, or availability behind decorative imagery.
- Do not turn every service row into an oversized promotional card.
- Do not use one uniform radius for time chips, service cards, sheets, and rows.
- Do not replace scheduling screens with generic `Form` sections or an unstyled `TabView`.
- Do not treat pharmacy product photography as the illustration language.
- Do not invent severe clinical colors for states not observed.

</design-context>
