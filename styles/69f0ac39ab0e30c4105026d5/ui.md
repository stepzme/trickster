<design-context>
---
version: 1
platform: iOS
name: Freedom-design-analysis
description: "A pale modular finance canvas combines dense white product cards, emerald-to-teal brand fields, bold account values, compact service grids, soft 3D objects, and green-selected five-item navigation."
colors:
  canvas: "#F5F6F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EDF1F2"
  accent-primary: "#21B76C"
  accent-secondary: "#00A69C"
  text-primary: "#14171A"
  text-secondary: "#70757A"
  divider: "#E2E5E7"
  destructive: "#DC5656"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 38, fontWeight: 700, lineHeight: 42}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 14
  card: 18
  sheet: 26
  pill: 999
components:
  account-product-card: {}
  green-primary-action: {}
  service-icon-grid: {}
  financial-input-panel: {}
  five-item-tab-bar: {}
---

# Overview

Freedom presents dense banking content as a pale-gray modular dashboard of white cards, green-to-teal branded areas, compact service grids, and occasional cyan or dark-gold promotional surfaces. Bold balances and section titles lead; muted metadata and tight rows carry detail. Emerald actions, icons, progress, toggles, and selected navigation unify the many modules, while small soft 3D objects add warmth to onboarding and completion screens.

# Non-negotiable visual invariants

- The operational canvas is pale gray with distinct white product, account, form, and list surfaces rather than one continuous white page.
- Emerald green owns primary actions, active tabs, progress, toggles, and positive emphasis.
- Balances and key amounts are large, bold, and visually prior to metadata or promotions.
- Dense modules use compact internal spacing but clear 20–24-point separation between unrelated financial groups.
- Service catalogs use small soft 3D-like objects or marks above short labels in an orderly grid.
- A five-item bottom bar stays white with gray inactive items and one green active item.
- Branded gradients and authored 3D scenes remain confined to promotional, onboarding, or explanatory roles rather than form fields.

# Color and surfaces

The primary app canvas is very light gray, with white cards and panels defining accounts, products, operations, forms, and messages. Emerald and teal appear as solid actions and broad gradient brand fields; cyan banners and occasional dark or gold card heroes provide bounded contrast. Near-black carries balances and titles, gray carries metadata, pale gray shows disabled controls, amber signals attention, and red remains destructive. White sheets rise above dim translucent scrims. Default iOS blue, gradients behind every input, or multicolored operational controls would break the reference.

# Typography

Use SF Pro Display for major amounts and titles and SF Pro Text elsewhere. Key monetary values use bold 30–40-point type with tabular numerals; page titles are about 26–30 points bold; sections 19–21 points; item labels 14–16 points medium or semibold; metadata 11–13 points regular gray. Green inline text is reserved for actions or positive change. With Dynamic Type, allow labels and descriptions to wrap, move secondary metadata lower, and preserve the amount, object name, and next action as the leading hierarchy.

# Screen composition

The full dashboard begins below the status area with identity or account context, prominent balance and product cards, then vertically stacked service, promotion, operation, and guidance modules. Horizontal carousels and compact grids interrupt the main scroll without turning it into a masonry layout. The white five-item bar occupies the bottom safe area.

Product-detail archetypes use a large branded or card-render hero followed by white information panels and a green full-width action. Transfer and payment archetypes use strong titles, segmented controls or selectors, then grouped white input surfaces above the keyboard and a bottom action. Service catalogs use evenly spaced icon tiles. Messages and settings use dense white rows, badges, chevrons, and switches. Bottom sheets present selectors or limits over dimmed content with large rounded top corners. Typical horizontal inset is 16 points.

# Navigation appearance

Primary navigation is a white five-item icon-and-label bar with a green active item and gray inactive items. Detail screens use a simple dark back arrow integrated into the page, not a heavy navigation slab. Transfers and payments use compact pill or underline segments with green selection. Lists use chevrons to indicate deeper content. Selector and limit panels appear as white bottom sheets with a dim overlay. This describes only visual treatment; destinations come from product artifacts.

# Components

- **Account/product card:** white or bounded branded surface with bold balance, compact account metadata, optional literal card render, and clearly separated actions.
- **Primary action:** full-width emerald rounded rectangle with centered white semibold label; disabled state becomes pale gray with muted text.
- **Service grid tile:** compact object or service mark above a short centered label, arranged in a regular grid with generous hit area and minimal enclosing chrome.
- **Financial input panel:** grouped white surface with labeled rows, clear editable/disabled distinction, dark value text, gray helper content, and green focus or action accents.
- **Segmented selector:** pale or white rounded track with green selected label/fill and quiet gray alternatives.
- **Bottom sheet:** white surface with about 26-point top corners, sparse title and selector rows, and a dim background scrim.
- **Status card:** concise success, completion, or empty-state panel with one dominant icon/object, clear result, and a green next action.

# Imagery and icons

Small soft 3D-style service objects, literal card renders, merchant marks, promotional banners, and finance metrics each have different roles. Authored illustration is narrowly used for onboarding, verification, biometric explanation, progress, and product completion; preserve its centered hero space where observed. Campaign art, card artwork, payment logos, service-category icons, and metric panels are not substitutes for that system. Do not omit imagery from service grids or explanatory screens while waiting for final assets.

# States

Observed states include language selection, phone and SMS input, verification progress, PIN creation, Face ID prompt, populated dashboard, product picker and limits sheets, disabled fields, transfer forms with keyboard, payment acceptance, empty autopay content, unread message badges, toggle states, and completion cards. Green remains the positive/action anchor, disabled surfaces stay pale gray, and sheets retain white rounded geometry. No stable branded error composition was observed in the sample; destructive or failed states should remain semantic and local to the affected object.

# iOS adaptation

Respect top safe areas for titles and brand fields, and reserve bottom space for the five-item bar and home indicator. Use a vertical `ScrollView` for modular dashboards and product details, horizontal scrolling for carousels or selectors, and native keyboard avoidance for forms. Present selectors as native-behaving sheets with the documented white surface and scrim. Maintain 44-point targets for service tiles, segments, tab items, switches, and form actions. VoiceOver order should follow balance/object, status, actions, then supporting details. Dynamic Type may expand modules vertically; do not shrink monetary values or hit targets to keep the original card height. On compact widths, reduce grid columns or scroll carousels. Preserve the observed light appearance rather than inventing an automatic dark dashboard.

# Anti-generic checklist

- Do not turn the dashboard into a uniform stack of identical white cards with equal visual weight.
- Do not use default blue tint for actions, selection, toggles, or navigation.
- Do not place branded gradients behind ordinary form rows or long explanations.
- Do not hide balances, fees, completion, or eligibility inside promotional decoration.
- Do not ship an unstyled `TabView`, grouped `Form`, or arbitrary SF Symbols in place of characteristic service objects.
- Do not use one corner radius for cards, inputs, sheets, and pills.
- Do not substitute campaign art or generic 3D emoji for the authored onboarding/completion objects.
- Do not add mood-setting or repeated copy when amount, state, and action already explain the screen.

</design-context>
