<design-context>
---
version: 1
platform: iOS
name: ONAY-design-analysis
description: "A bright transit-payment interface combines vivid yellow cards and actions, cool white surfaces, bold balance numerals, a raised central QR control, compact yellow outline icons, and colorful soft 3D onboarding scenes."
colors:
  canvas: "#F8F9FB"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F0F2F5"
  accent-primary: "#FFD600"
  accent-secondary: "#4F6FE8"
  text-primary: "#141518"
  text-secondary: "#6D7076"
  divider: "#E4E7EA"
  destructive: "#D94B52"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 16
  card: 22
  sheet: 28
  pill: 999
components:
  yellow-transit-card: {}
  raised-qr-navigation-control: {}
  yellow-primary-action: {}
  route-number-grid: {}
  payment-input-panel: {}
---

# Overview

ONAY is a bright transit-payment system built around saturated yellow cards, CTAs, selection, and a raised QR control. White and cool pale-gray surfaces keep balances, routes, payments, maps, shop content, and settings readable. Large black numerals lead account cards; small yellow outline icons carry function. Colorful soft 3D/vector hybrid scenes occupy onboarding and security education, while operational screens remain compact and numeric.

# Non-negotiable visual invariants

- Saturated ONAY yellow is the dominant brand and action color on cards, CTAs, active controls, and the central QR navigation element.
- Main operational backgrounds stay white or cool pale gray; yellow is used in bounded masses rather than behind dense lists.
- A wide rounded transit card gives balance or trip state the strongest numeric hierarchy.
- Bottom navigation is a rounded white bar with a visibly raised central yellow QR button.
- Top bars are compact and centered, often paired with a small ONAY pill/mark and sparse help or filter actions.
- Forms and lists use broad white surfaces, 12–16-point insets, black values, and small gray helper text.
- Authored onboarding and recovery art occupies the upper or central visual mass and cannot be replaced by interface glyphs.

# Color and surfaces

Vivid yellow owns transit cards, primary pills, selected chips, active toggles, QR emphasis, and compact outline icons. White is the principal content surface; pale cool gray is the page canvas and inactive control fill. Black carries balances, route numbers, prices, and labels; gray carries instructions and metadata. Lavender-white gradients appear in onboarding, while a saturated blue hero surface appears in recovery. Green confirms success; red remains for error or interruption. Maps and shop photography form separate content fields. Default iOS blue as a universal tint, heavy dark cards across operations, or full-screen yellow behind dense content would break the reference.

# Typography

Use SF Pro Display for balances and prominent state titles and SF Pro Text for navigation, forms, routes, and metadata. Hero amounts use bold 32–38-point tabular numerals; page titles 26–30 points; sections around 21 points; item labels 14–16 points semibold; helper/legal text 11–13 points gray. Centered navigation titles remain compact. High contrast and weight are reserved for balance, route number, fare, or decisive result. Dynamic Type may expand helper text and rows vertically while preserving the amount, current card, selected route, and primary action as the first read.

# Screen composition

The primary account composition begins below the status bar with a compact centered brand/header treatment, then a wide rounded yellow transit card, stacked white shortcuts or status modules, and the floating rounded bottom bar with its raised QR center action above the home indicator. Content scrolls vertically inside 16-point gutters.

Payment and transfer archetypes use a compact top bar, strong title, grouped white inputs or card selectors, amount chips, and a bottom yellow action above the keyboard. Route views use either a regular number grid or full-screen map with white controls. History and settings use white rows, separators, filters, switches, checkmarks, or radio controls. Shop surfaces become denser two-column photo grids with black purchase CTAs. Bottom sheets and success alerts sit above dim scrims with broad rounded geometry.

# Navigation appearance

The primary navigation is a floating or rounded white bar with small icon-and-label items and a large raised yellow circular QR control at center. Active states use yellow or dark emphasis; inactive items are gray. Top bars use a simple back arrow, centered title or small ONAY mark, and a compact help/filter action. Segmented controls and chips use yellow selection with white or pale inactive states. Filters and selectors appear as white rounded bottom sheets over a dim scrim. This specifies appearance only.

# Components

- **Transit card:** wide yellow rounded rectangle with large bold balance, compact city/trip metadata, QR or card detail, and restrained secondary actions.
- **Primary action:** full-width yellow pill with centered black semibold label; pressed state darkens slightly and disabled state becomes pale gray.
- **Raised QR control:** central yellow circular button elevated above the white bottom bar, with a high-contrast dark QR/scanner glyph and generous safe spacing.
- **Route cell:** compact white or pale tile that prioritizes a bold route number and quiet supporting label, arranged in an orderly grid.
- **Payment input panel:** grouped white rows with dark entered values, gray placeholder/helper text, yellow focus or next action, and clear card/source selector.
- **Selection row:** full-width white row with label and trailing radio, checkmark, switch, or dropdown; selected state uses yellow and black.
- **Success modal:** centered white rounded panel with concise result, green confirmation cue where observed, and a yellow next action.

# Imagery and icons

Functional icons are small yellow outline glyphs and must remain distinct from illustration. Maps use literal map tiles, shop uses product photography, and campaign banners remain promotional media. Authored illustration is a colorful soft 3D/vector hybrid used in onboarding and password-recovery/security heroes, with cards, phones, route grids, QR panels, pins, and lock/passcode objects. Preserve its upper-half or centered space wherever observed. Payment network marks and the ONAY logo are brand assets, not illustration.

# States

Observed states include onboarding, phone sign-in, biometric recovery, card balance and details, top-up and auto-top-up forms, transfers, transaction history and filters, QR and metro payment, route map/grid, shop, profile, settings, security, dropdowns, radio/check selection, toggles, numeric keypad, native alerts, bottom sheets, confirmation, and success. Yellow stays the action/selection anchor; white and pale gray retain surface hierarchy. Personal data and QR areas may be masked without altering composition. No coherent authored error illustration was observed.

# iOS adaptation

Keep the status bar visible and place centered headers beneath it; reserve bottom safe-area space for the white navigation bar, raised QR control, and home indicator. Use vertical scrolling for stacked cards, history, settings, and shop; preserve two columns only while product cards remain readable. Maps may extend behind safe areas with controls inset. Forms must avoid the keyboard and keep the yellow action visible. Present permission and system dialogs natively, and filters/selectors as native-behaving sheets with documented surfaces. Maintain 44-point targets for nav items, QR, chips, rows, and controls. VoiceOver order should prioritize card balance/state, actions, then supporting details. Dynamic Type expands modules vertically; on compact widths, reduce grid columns or scroll chips rather than shrinking controls. Preserve the observed light system except for explicitly evidenced colored hero states.

# Anti-generic checklist

- Do not use yellow as an unbounded full-screen background behind route lists, history, settings, or shop grids.
- Do not replace the wide transit card and raised QR navigation with generic white cards and an ordinary tab item.
- Do not apply default blue tint to actions, selection, toggles, or navigation.
- Do not hide balance, trip, fare, or payment state inside promotional decoration.
- Do not ship an unstyled `TabView`, grouped `Form`, or arbitrary SF Symbols in place of yellow outline glyphs.
- Do not add heavy shadows to every container or collapse sheets, cards, controls, and pills to one radius.
- Do not substitute campaign banners, product photos, map imagery, or payment marks for authored onboarding/security art.
- Do not add decorative or repeated copy when the current amount, route, state, and action already provide context.

</design-context>
