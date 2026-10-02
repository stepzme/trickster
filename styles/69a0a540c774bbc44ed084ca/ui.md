<design-context>
---
version: 1
platform: iOS
name: My-O-Bank-design-analysis
description: "A dense Kyrgyz finance-and-telecom super-app on a pale gray iOS canvas, using bright white operational cards, hot-magenta ecosystem markers, lime-green payment actions, compact black financial typography, floating rounded navigation, and product or campaign imagery inside bounded cards."
colors:
  canvas: "#F4F2F5"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F0EDF2"
  accent-primary: "#EC008C"
  accent-secondary: "#69C80F"
  text-primary: "#141417"
  text-secondary: "#737077"
  divider: "#E7E3EA"
  destructive: "#C83A57"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 30}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 700, lineHeight: 23}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 12
  card: 16
  sheet: 24
  pill: 999
components:
  primary-action: {backgroundColor: "#69C80F", textColor: "#FFFFFF", cornerRadius: 10}
  secondary-action: {backgroundColor: "#F0EDF2", textColor: "#141417", cornerRadius: 10}
  primary-card: {backgroundColor: "#FFFFFF", textColor: "#141417", cornerRadius: 16}
  navigation: {backgroundColor: "#FFFFFF", textColor: "#141417", selectedColor: "#EC008C", cornerRadius: 28}
---

# Overview

My O! + Bank presents many everyday services through a light, crowded iPhone surface rather than a sparse banking dashboard. The dominant impression is a pale gray full-screen canvas filled with white rounded modules, compact black Cyrillic text, hot-magenta O! identity marks, lime-green payment controls, cyan utility links, and tightly cropped product or campaign images. The screens remain recognizably iOS, but the default SwiftUI grouped look is replaced by a custom super-app rhythm: floating bottom chrome, a central magenta QR control, dense icon grids, payment keyboards, financial rows, and commerce cards all share the same soft surfaces.

# Non-negotiable visual invariants

- Pale gray background fills safe areas and gutters while white cards, sheets, and list blocks carry almost all operational content.
- Hot magenta appears as the selected tab color, central QR circle, O! product marks, small badges, and reward accents rather than as every primary button.
- Lime green is reserved for payment continuation, confirmation, toggles, and successful states; it is large and horizontal when money is being committed.
- Finance screens use compact black rows with right-aligned amounts, cyan text links, square magenta account icons, and minimal dividers.
- Home and market screens are visibly dense: service icons, product cards, banners, and offer chips sit in close vertical succession.
- Navigation is a floating rounded white dock with blur/shadow, black outline icons, magenta selected state, and a raised magenta QR scanner overlapping its top edge.
- Product, campaign, and card imagery is bounded inside rounded rectangles or white product tiles and never becomes a full-bleed background system.

# Color and surfaces

The primary canvas is a very light gray-lilac field that reads warmer than the default iOS grouped gray. White surfaces sit on top as account cards, product tiles, list rows, input fields, bottom sheets, and modal alerts. Secondary surfaces are pale gray fills used for segmented controls, inactive form fields, keyboard keys, and quiet action tiles.

Hot magenta is the strongest identity color. It marks selected navigation, QR scanning, O! account icons, reward badges, small product finance chips, and thin emphasis borders around ecosystem offers. Lime green marks enabled payment actions, success gradients, selected toggles, and completed payment confirmation. Cyan or blue appears as small financial utility links, info icons, and occasional selection text. Destructive and invalid states use muted red or rose text, not magenta. Near-black carries titles, balances, prices, numeric keypad digits, and row labels; gray carries account masks, hints, secondary captions, and inactive controls.

Large color masses are rare. The main exception is completion, where a bright green gradient occupies the upper part of the screen behind a checkmark and amount. Most other screens rely on white blocks over the pale canvas. A generic pure-white app background, default iOS blue actions, heavy gray grouped tables, or broad decorative gradients would visibly break the reference.

# Typography

Typography is compact SF Pro with strong weight on section headings, screen titles, balances, product prices, and keypad digits. Most screens use 14-16 point operational text; section headings sit around 17-20 points and are bold; centered PIN and confirmation headings reach the low 20s; large financial amounts and completion totals use roughly 24-32 points with tabular numeric rhythm. Labels are sentence case, mostly left aligned, with centered alignment reserved for PIN entry, modal alerts, and completion summaries.

Amounts, phone numbers, card masks, and prices must stay visually stable. Use tabular numerals for aligned balances, keypad input, prices, and payment totals. Under Dynamic Type, rows and cards should grow vertically, captions may wrap, and dense grids can become taller, but the primary amount or action must remain paired with its row or card. Do not introduce decorative finance serif typography; the observed hierarchy comes from weight, spacing, and color rather than a custom brand font.

# Screen composition

Typical horizontal gutters are around 12-16 points. Cards use 10-16 points of internal padding and tight vertical gaps, especially on home, telecom, bank, and market surfaces. Safe areas remain light, with status bars over pale gray or white and a circular white back control when a custom back affordance is shown.

The home archetype starts with a compact profile header, circular search and notification controls, a horizontal story/campaign rail, a full-width telecom status card, a money strip, a grid of black line service icons, and dense commerce cards below. The floating dock and central QR button reserve the lower safe area and partially overlay the scroll.

The telecom detail archetype uses a pale header, two white metric cards, circular progress rings, full-width list rows, a magenta-outlined service row, and compact campaign banners. The bank hub archetype is whiter and more list-like: two icon actions sit near the top, then grouped sections with bold headings, cyan right-side links, magenta account icons, right-aligned amounts, and little decoration.

Transfer forms are sparse white screens with a centered nav title, a small logo row, a segmented control, soft filled input fields, a large green bottom action, and a custom numeric keypad. Confirmation screens stack white summary cards, short comment chips, and one wide green bottom action. Card-detail screens place a dark card mockup at the top, then a raised white sheet with a small grabber, two pale action tiles, magenta reward strips, list rows, a green switch, and a white bottom-dock overlay. Market screens are the densest commerce archetype: a search field, segmented tabs, a large banner carousel, small category tiles, two-column product cards, magenta financing chips, green add-to-cart buttons, and a separate market tab bar.

# Navigation appearance

Top navigation is minimal: a centered title on white or pale gray, a left back chevron or circular back button, and occasional circular edit/help/search controls. Back controls are black icons on white circles when they sit over gray or card surfaces.

Bottom navigation on the main shell is a floating white rounded rectangle with a soft shadow and translucent feel. Icons are black outlines when inactive; the selected item turns hot magenta and may use a filled mark. A separate central QR scanner is a saturated magenta circle that overlaps the dock. Market navigation is flatter and more compact, with the active market item in magenta and a cart badge using the same identity color. Bottom sheets use a dimmed gray overlay, a white rounded top sheet, and a small horizontal grabber.

# Components

Service cards are white, medium-rounded, and content-dense. They combine a bold domain label, one or two key metrics, small gray explanatory text, and sometimes thin progress bars or circular progress rings in blue and green. They avoid heavy shadows.

Financial rows use a square icon or card thumbnail on the left, a bold black label, gray account mask or subtitle below, and a right-aligned amount or cyan action. Section headers are bold black and often paired with a small cyan link on the right. Plus entries use a pale square with a magenta plus.

Payment forms use pill segmented controls on pale gray, soft filled input fields, a cursor or clear button, small blue info icons, and a wide green action aligned above the numeric keypad or lower safe area. Disabled green actions appear very pale; enabled ones are saturated. Error text appears directly under the field in muted red.

Numeric keypads are custom, spacious, and monochrome: large black digits on a white or pale surface, with a simple delete icon. PIN entry uses centered dot indicators and no visible text field. Loading states dim the whole screen with a gray overlay and centered spinner; alerts are white rounded capsules with one gray rounded confirmation button.

Commerce product cards use white tiles, uncropped product photos, black price text, fluorescent lime installment strips, small magenta financing badges, gray heart controls, and green add-to-cart bars. Campaign banners use rounded rectangular crops, saturated brand color, and embedded text as part of the image.

# Imagery and icons

Imagery is important but not a single standalone illustration system. The observed screens mix product photography, campaign banners, payment-card mockups, partner logos, and a few glossy object renderings inside financial or savings cards. Images are usually bounded by rounded cards, category tiles, or dark card rectangles. They sit beside or below text and do not define navigation, row structure, or form layout.

Interface icons are mostly thin black line symbols for services, back, search, notification, transfers, history, menu, gift, travel, cards, and deposits. Selected or product-specific icons may become magenta, and some partner or card icons retain their own colors. Replacing the observed icon hierarchy with arbitrary filled SF Symbols, multicolor generic icon packs, or oversized decorative illustration would break the system.

# States

Observed states include populated account and service dashboards, disabled and enabled payment buttons, field validation failure, loading overlay, completed payment, bottom sheet selection, PIN setup, modal success alert, selected tab, green switch-on state, and dense populated commerce grids. Across these states the pale canvas, white surface stack, compact black type, magenta identity marks, and green commitment color remain stable.

Error states keep the same form geometry and show muted red inline text under the field. Loading states apply a gray scrim over the current screen and keep the underlying layout visible. Completion shifts emphasis to a large green upper field, centered checkmark, amount, and short white action cards. Modal alerts use a small white rounded panel over a dimmed screen rather than a full-screen custom illustration.

# iOS adaptation

Preserve the reference on current iPhone sizes with vertical scroll containers, custom-styled bottom docks, and native keyboard or permission transitions returning to the same visual surface. Keep primary controls at least 44 points tall, but retain the observed compact spacing inside rows and cards. The central QR control and any bottom action must account for the home indicator and should not obscure the final row of content.

Dynamic Type should expand rows, cards, form fields, and product tiles vertically before reducing type weight or separating values from their labels. VoiceOver order should follow the visible grouping: title or context, primary metric, supporting detail, then action. The observed source is light-mode dominant; do not invent a dark appearance unless a product separately designs one from the same hierarchy. Compact-width behavior should favor taller stacks and fewer product columns rather than shrinking text below legibility.

# Anti-generic checklist

- Do not replace the pale gray-lilac canvas and floating white dock with a standard white `TabView`.
- Do not use default iOS blue for primary payment, selected navigation, or financial commitment actions.
- Do not turn every surface into the same generic rounded card; bank rows, payment forms, market products, and campaign banners have different densities.
- Do not remove the central magenta QR scanner from the main navigation appearance.
- Do not substitute arbitrary SF Symbols for the observed thin line icons, magenta account marks, card thumbnails, or partner imagery.
- Do not omit bounded product, card, and campaign imagery from screens where it visibly carries the composition.
- Do not use heavy shadows, full-bleed marketing art, or broad decorative gradients outside the observed green success state and campaign images.

</design-context>
