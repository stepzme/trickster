<design-context>
---
version: 1
platform: iOS
name: VkusVill-design-analysis
description: "A photography-first grocery interface with bright green actions and selected states, dense white commerce surfaces, compact black type, colored price badges, restrained top chrome, and a persistent white tab bar often paired with a green delivery strip."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F5F5F5"
  accent-primary: "#29B85F"
  accent-secondary: "#FFD83D"
  text-primary: "#171717"
  text-secondary: "#747474"
  divider: "#E4E4E4"
  destructive: "#E9365C"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 800, lineHeight: 36}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 31}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 12
  control-gap: 8
rounded:
  control: 12
  card: 16
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "accent-primary", height: 48, radius: 12, text: "white semibold"}
  product-card: {fill: "surface-primary", radius: 12, imageRole: "dominant upper area", metadataDensity: "compact"}
  delivery-strip: {fill: "accent-primary", height: 44, text: "white compact label"}
  bottom-navigation: {fill: "surface-primary", selected: "accent-primary", unselected: "text-secondary"}
  modal-sheet: {fill: "surface-primary", radiusTop: 28, backdrop: "dimmed"}
---

# Overview

VkusVill is a dense, photography-led retail interface rather than a generic stack of cards. White and very light gray occupy most of the viewport; fresh green is repeated across primary controls, selected navigation, switches, progress, and the delivery strip. Product photography supplies most of the color and visual weight, while compact labels, ratings, badges, and prices make the lower portions of cards information-rich. Large black headings are reserved for onboarding, authentication, and high-level summary screens.

# Non-negotiable visual invariants

- Brand green must remain the single dominant action and selected-state color across buttons, switches, active navigation, progress, and delivery chrome.
- Product photography must occupy the largest region of every merchandise card; it cannot be replaced by a symbol or omitted.
- Commerce screens use dense 12-16 point side insets and compact card gaps rather than spacious editorial margins.
- A white bottom navigation bar uses thin outline icons, small labels, gray inactive items, and one green active item.
- When present, the delivery strip is a solid green horizontal band directly above bottom navigation, with compact white text.
- Sheets are white with large rounded top corners over a visibly dimmed underlying screen and retain a fixed low action area.
- Operational titles remain compact and centered, while only onboarding, authentication, and summary headings reach approximately 30-32 points.
- Yellow price emphasis and pink-red discount or favorite accents remain secondary to green and must not take over the overall palette.

# Color and surfaces

The base is predominantly white, with pale gray fields and grouped utility surfaces. Green around `#29B85F` forms the strongest repeated color mass in controls, selected states, and horizontal status chrome; a darker green may appear for pressed or high-contrast treatment. A dark indigo field around `#302C42` can anchor a prominent header, but it is an exception rather than the default canvas.

Text is near-black with medium gray metadata. Fine light-gray separators organize dense lists without boxing every row. Yellow around `#FFD83D` is used for price or offer emphasis, orange appears in exceptional calls to attention, and pink-red marks discount, favorite, or destructive emphasis. Default iOS blue would visibly break the reference if used for primary actions or selected states.

# Typography

Use SF Pro as the iOS-safe approximation. The hierarchy relies on weight and clear scale steps: 30-32 point extra-bold headings, 20-22 point bold section titles, 16-17 point semibold centered navigation titles, 13-15 point product labels, and 11-13 point muted metadata. Prices are heavier and commonly sit in the 16-20 point range, with tabular numerals where alignment matters.

Text is generally left-aligned except for compact navigation titles and modal actions. Product names wrap within constrained cards without competing with price or action controls. With Dynamic Type, allow supporting labels to wrap and product cards to grow vertically; do not scale all labels toward the same size or let metadata overtake section headings.

# Screen composition

Most sampled screens extend from the status-bar safe area to a persistent bottom region. The middle is a vertically scrolling white or pale-gray surface with 12-16 point horizontal insets, 8-12 point gaps inside dense groups, and roughly 20-24 points between major sections. The bottom can combine a full-width green delivery strip with a white navigation bar and home-indicator padding.

The commerce-grid archetype uses two columns or horizontal product rails. Photography fills the upper and visually dominant portion of each card; compact rating, availability, name, price, badge, bookmark, and action treatments sit below. The product-focus archetype gives a large image area the upper portion of the screen, followed by compact information blocks and low controls. The list/settings archetype uses a centered compact title, white rows, pale separators, and green switches. The modal archetype covers roughly the lower half to three quarters of a dimmed screen with a rounded white panel, close control, stacked content, and bottom action.

Home and promotional compositions may introduce a dark header or colorful banners, but the dominant lower content remains white and photography-led. Do not make all regions equally padded or equally rounded; dense retail content and larger summary surfaces have visibly different rhythms.

# Navigation appearance

Top chrome is restrained: a centered 16-17 point semibold title, a simple left chevron when present, and small icon-only controls. A prominent home header may instead use a dark field with light text and compact utility icons. Bottom navigation sits on an opaque white base, uses five evenly spaced thin outline icons with small labels, and identifies selection in green while inactive items remain gray.

Bottom sheets use a dim overlay, a white panel with approximately 28-point top corners, a small close icon, and low full-width actions. Navigation appearance must follow the approved product structure rather than importing the reference application's destinations.

# Components

Primary actions are solid green rounded rectangles approximately 44-52 points high, with white semibold text and moderate 10-14 point corners. Disabled actions become light gray with subdued text rather than transparent.

Product cards are white and compact. Their image region is larger than their text region; bookmark icons, small badges, ratings, colored price treatments, and a green add control form a tight hierarchy below. Quantity controls switch to a rounded green or pale stepper with minus, value, and plus without changing the card footprint.

Search fields are wide pale-gray rounded bars with an embedded leading icon. Switches preserve familiar iOS geometry but use green when active. Price and filter chips may be pill-shaped, while structural cards keep moderate radii. Modal panels use much larger top corners than controls and remain visually distinct from cards.

# Imagery and icons

Clean product and food photography is the primary imagery system. Product cutouts appear large, centered, and legible against white or pale backgrounds; catalog cards crop or contain them consistently without busy environmental scenes. Promotional regions mix food photography, product collages, and occasional flat graphics, but these are supporting campaign treatments rather than a standalone illustration language.

Icons are compact, thin, and functional. Green selected symbols and gray inactive symbols must align with nearby label scale. Photography cannot be removed while waiting for final assets: a placeholder must preserve its dominant card area, crop, and color weight.

# States

Observed states include splash and onboarding fields, disabled and enabled phone-entry controls, loading progress, populated product grids, selected switches and navigation, unavailable merchandise, modal sorting and filtering, order-progress surfaces, and rating sheets. Across them, green remains the action/selection signal, white remains the principal surface, and rounded sheet geometry remains stable. System permission alerts retain native presentation rather than being visually imitated.

# iOS adaptation

Use a vertical scroll container for dense content and keep bottom navigation, delivery/status chrome, and low actions clear of the home indicator. Respect the status-bar safe area; do not place promotional content behind it unless contrast is explicitly preserved. Maintain at least 44-point hit regions around compact icons, steppers, filters, and navigation items even when their visible glyphs are smaller.

On compact widths, retain two product columns only while photography, names, and prices remain legible; otherwise switch to a wider single-column row without deleting information. Dynamic Type should grow rows and sheets, wrap labels, and keep price/action groups intact. VoiceOver order should follow top chrome, primary content, card metadata and actions, then persistent bottom chrome. Keep the sampled light appearance unless an approved product requirement defines a separate dark treatment.

# Anti-generic checklist

- Do not replace photography-led product cards with identical text-first white cards.
- Do not use default iOS blue for actions, selected tabs, switches, or links that function as primary controls.
- Do not ship an unstyled `TabView`; preserve the white base, outline icon weight, small labels, and green selected state.
- Do not turn lists, filters, or settings into default `Form` sections with system spacing.
- Do not apply one uniform large corner radius to cards, controls, sheets, and navigation.
- Do not remove the green delivery strip or collapse its visual role into ordinary body text when the adapted screen needs comparable persistent status chrome.
- Do not substitute arbitrary SF Symbols for product photography, promotional imagery, or observed functional icon groupings.
- Do not inflate secondary copy; dense retail metadata must remain visually subordinate to product, price, and action.

</design-context>
