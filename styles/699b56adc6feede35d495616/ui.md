<design-context>
---
version: 1
platform: iOS
name: MBANK-design-analysis
description: "MBANK is a pale-gray iOS finance super-app style with white rounded modules, emerald selection and finance controls, a yellow central QR control, compact data rows, vivid service tiles, and occasional full-bleed promotional media."
colors:
  canvas: "#F2F3F3"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEF0F0"
  accent-primary: "#08A36A"
  accent-secondary: "#FFD51F"
  text-primary: "#17191F"
  text-secondary: "#6F7378"
  divider: "#E4E7E7"
  destructive: "#E25864"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 30}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 18
  card-padding: 14
  control-gap: 10
rounded:
  control: 13
  card: 16
  sheet: 18
  pill: 999
components:
  primary-action: {backgroundColor: "#08A36A", textColor: "#FFFFFF", rounded: 13}
  secondary-action: {backgroundColor: "#FFFFFF", textColor: "#08A36A", rounded: 13}
  primary-card: {backgroundColor: "#FFFFFF", textColor: "#17191F", rounded: 16}
  navigation: {backgroundColor: "#FFFFFF", selectedColor: "#08A36A", centerColor: "#FFD51F"}
---

# Overview

MBANK's visible iOS language is a dense card-based financial dashboard on a light gray canvas. White rounded cards carry nearly every module, while emerald marks selected navigation, finance icons, status bars, back controls, and primary QR actions. A saturated yellow circular QR action anchors the bottom navigation and yellow also appears as a login CTA, favorite star, and brand highlight. The app mixes restrained banking lists with colorful commercial surfaces: photo-like story pages, wide campaign cards, partner logo fields, card art, QR patterns, and product renders.

# Non-negotiable visual invariants

- Every main screen keeps a pale gray full-screen canvas behind white cards and modules.
- Cards are broad white rounded rectangles with little or no visible border and soft separation from gray gutters.
- Emerald is the selected and financial accent for navigation, back icons, row icons, progress, links, and primary QR sharing.
- Yellow is reserved for the central QR/navigation control and high-emphasis CTA or favorite highlights.
- Finance lists use left icons, middle labels, muted subtitles, right-aligned amounts or chevrons, and thin horizontal dividers.
- The home and payments views are visually dense, with card stacks, horizontal rails, and compact service grids in one scroll.
- Promotional surfaces use vivid photography, renders, partner logos, or colored tiles, while transaction and account areas stay mostly flat and white.

# Color and surfaces

The dominant color field is a cool pale gray canvas, close to `#F2F3F3`, including top and bottom safe areas. Primary surfaces are pure white cards with rounded corners and no heavy outline. Secondary controls such as search fields, disabled buttons, and date fields use slightly darker gray fills around `#EEF0F0` to `#DDE1E3`.

Emerald green around `#08A36A` appears as the selected tab color, back chevrons, status and category dots, row icons, links, QR share button, selected tab underline, and finance progress. Yellow around `#FFD51F` is used for the bottom-center QR circle, login button, favorite star, and small brand accents. Near-black text carries screen titles, balances, and primary row names; medium gray supports dates, captions, inactive tab labels, placeholders, and secondary copy. Red or pink appears only in destructive, debt, warning, or category markers.

Large promotional content can introduce saturated blue, orange, purple, green, and photographic color, but the surrounding shell returns to gray canvas plus white cards.

# Typography

The visible type reads as SF Pro. Navigation and section titles are bold and compact, typically centered in detail screens and left-aligned on dashboard surfaces. The home greeting and screen titles use heavy display weight, while row labels and service tile labels use smaller semibold text. Captions, category subtitles, dates, and placeholders use muted gray regular text.

Financial values are right-aligned in lists and use tabular-looking spacing; balances and bonus counts receive stronger weight and larger size than their labels. Login and form screens use a large bold title above pill-like fields, with helper links in green. Service tile labels can wrap to two lines under icons without replacing the icon as the primary visual marker.

Text hierarchy should scale by preserving role order: title first, primary amount or action second, then row labels and muted metadata. Long labels wrap inside cards and rows rather than forcing wider controls.

# Screen composition

Most screens use 12 to 16 point horizontal gutters and a compact vertical rhythm. The top safe area is usually light gray; detail screens place a centered title between green back and close/action icons. Cards generally span nearly the full content width, with 12 to 16 point corner radii and 8 to 14 point vertical gaps.

The home composition begins with a profile/name row, small green utility icons, a segmented story rail, two compact metric cards, a wide campaign banner, a bank account card, service icon rows, and a fixed bottom navigation. Payments screens keep a left-aligned title, a green history link, a gray search field, then multiple horizontal sections of rounded square tiles and wider top-up rows. Financial analysis screens combine a top selector, a white summary card with a multicolor horizontal bar, and long transaction rows. Card detail screens place a large card visual in the upper third, then action tiles and stacked settings cards. QR screens center a large QR card on a subtle repeating line-pattern background. Deposit screens use tall product cards with green rates and right-side product renders.

Modal sheets dim the full screen with a translucent gray overlay, then place a white rounded sheet at the bottom with compact input cards and a gray disabled action. The keyboard keeps native iOS visual treatment when present.

# Navigation appearance

The bottom navigation is a white bar visually fused with the lower safe area. Inactive items are light gray icons with small labels; selected items turn emerald. The center QR control is a raised yellow circle with a white QR glyph and does not match the other tab icons in scale or color.

Detail navigation uses thin emerald chevrons on the left and, when present, emerald close or share icons on the right. Screen titles are centered, black, and compact. Home uses a profile avatar plus bold name on the left and small circular green utility icons on the right. Tab-like selectors near the top use text labels with a thin emerald underline for the selected state.

# Components

Primary action buttons are full-width rounded rectangles. Confirmed green actions use white semibold text; login uses a saturated yellow fill with black text. Disabled actions are gray rounded bars with white or muted text.

Cards are white rounded blocks with internal grouping rather than visible borders. Financial summary cards include bold labels, right-aligned amounts, and colored horizontal bars. Transaction rows use circular category icons, a two-line text stack, right-aligned values, and hairline dividers.

Service tiles are compact white rounded squares or short cards with a colored icon above a small label. Some tiles carry small red `NEW` badges or tiny green confirmation chips. Form fields are rounded white or light-gray pills with placeholders, leading country or icon blocks, trailing icons, and green focused cursor or control accents. Card-detail action groups use three equal columns with small outline icons and captions.

Search fields are low-contrast gray rounded rectangles with a leading magnifier and muted placeholder. Date and selector controls use white rounded blocks with compact labels, values, and small icons or chevrons. Sheets use larger top corner radius and keep their action button visually separated at the bottom.

# Imagery and icons

Imagery is frequent but not uniform. The app uses account card art, full-screen story photography, wide campaign banners, QR backgrounds, partner logo mosaics, and product renders for deposits. These images sit inside rounded containers or behind content areas and are usually cropped to fill their area.

Core banking icons are simple line or filled symbols, mostly emerald or gray, placed in circular or tile contexts. Service and partner content is more colorful: circular logos, gradient icons, badges, and photo cutouts. The visible system separates flat financial data areas from richer promotional imagery; replacing every image with a generic SF Symbol would visibly lose the reference.

# States

Observed states include logged-out dashboard, login form, active keyboard, PIN keypad with Face ID prompt, populated home, populated lists, bottom sheet selection, disabled form action, locked card, QR share screen, and full-screen story.

Across states, the gray canvas, white rounded modules, green navigation/action accents, muted secondary text, and dense card spacing remain consistent. The locked-card state dims unavailable destructive rows and changes the card action to a single centered unlock control. Sheets dim the underlying screen without changing its visible layout.

# iOS adaptation

Preserve the light gray safe-area canvas, compact gutters, and bottom navigation height on current iPhone widths. Scroll long content vertically while keeping full-width cards, horizontal rails, right-aligned financial values, and the raised yellow center navigation control. Use native keyboard, Face ID prompt, status bar, and home indicator visuals when those system states appear.

For compact heights, keep titles, financial amounts, card art, and primary actions visible before reducing supporting metadata. Text can wrap inside rows and tiles, but icons, amounts, chevrons, and primary buttons should retain their visual hierarchy. Do not introduce desktop navigation, pointer-only states, footers, marketing pricing cards, or a dark theme not visible in the reference.

# Anti-generic checklist

- Do not replace the pale gray canvas with a plain white root view.
- Do not use default iOS blue for links, back controls, selected tabs, or active fields.
- Do not render the bottom navigation as an unstyled `TabView` with equal icons; the yellow center QR control must remain visually dominant.
- Do not turn transaction history into default `Form` sections with inset grouped headers.
- Do not remove the right-aligned financial values, muted subtitles, colored category dots, or thin row dividers.
- Do not flatten all promo, card, QR, deposit, and partner imagery into generic SF Symbols.
- Do not apply one universal corner radius to fields, cards, sheets, service tiles, and circular controls.

</design-context>
