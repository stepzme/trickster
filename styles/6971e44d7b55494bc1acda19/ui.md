<design-context>
---
version: 1
platform: iOS
name: Airba-fresh-design-analysis
description: "A dense white grocery marketplace energized by fresh-green actions, compact photo-heavy product grids, blue reward bands, clean sans-serif type, a green-selected tab bar, and a cheerful avocado mascot for service states."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#F5F7F5"
  surface-secondary: "#EEF2EE"
  accent-primary: "#62CB32"
  accent-secondary: "#58A7EF"
  text-primary: "#171A18"
  text-secondary: "#747A75"
  divider: "#E2E7E2"
  destructive: "#E64F4F"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 800, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 12
  control-gap: 8
rounded:
  control: 12
  card: 16
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "{colors.accent-primary}", text: "#FFFFFF", height: 52, radius: "{rounded.control}"}
  secondary-action: {fill: "{colors.accent-secondary}", text: "#FFFFFF", height: 48, radius: "{rounded.control}"}
  primary-card: {fill: "#FFFFFF", radius: "{rounded.card}", imagery: "contained product packshot"}
  navigation: {fill: "#FFFFFF", active: "{colors.accent-primary}", inactive: "{colors.text-secondary}", badge: "{colors.destructive}"}
  product-tile: {fill: "#FFFFFF", columns: 2, radius: "{rounded.card}", addFill: "{colors.accent-primary}"}
  service-segment: {fill: "{colors.surface-primary}", selectedFill: "#FFFFFF", radius: "{rounded.control}"}
---

# Overview

Airba fresh is a compact, product-dense grocery interface on a predominantly white canvas. Saturated fresh green connects primary actions, add controls, and selected navigation; blue appears in reward or secondary action surfaces. Product photography and packshots dominate shopping screens, while a rounded avocado mascot gives empty, success, and assistance states a friendlier authored layer.

# Non-negotiable visual invariants

- Keep the commerce canvas white or very light, with green as the dominant action and selection color.
- Preserve high product-photo density and compact two-column product grids.
- Show product image, current price, supporting unit/discount context, and add control as one tight visual unit.
- Use a persistent white bottom tab bar with thin icons, green selected state, and a red cart badge when present.
- Keep search fields, service selectors, cards, and modal sheets rounded but visually light.
- Use wide green bottom-owned actions for cart, checkout, or other decisive steps.
- Reserve blue for reward bands and secondary recovery/action emphasis.
- Use the avocado mascot only in authored empty, success, onboarding, reward, or support moments; shopping evidence remains photographic.

# Color and surfaces

White occupies most of the screen and supports dense product imagery. Very pale green-gray separates search, segmented controls, grouped form areas, and disabled states without turning every unit into a shadowed card. Fresh green is the conversion and selected-state color across add controls, primary buttons, progress, and tab emphasis. Blue forms occasional larger reward bands or secondary CTAs. Near-black carries product titles, prices, and headings; gray carries weights, unit values, timing, and helper text. Red marks destructive controls and small count badges. Generic iOS blue as the global tint or a gray grouped-form canvas would break the reference.

# Typography

Use a clean system sans: SF Pro Display for larger promotional or screen titles and SF Pro Text for product, form, and navigation content. Most copy is compact and regular; section titles and current prices gain stronger weight. Product names may wrap to two lines, while unit price, weight, old price, and other metadata remain smaller and gray. Hero weight appears only in launch or promotional regions. With Dynamic Type, reduce grid columns before truncating product names or hiding purchase-relevant metadata; price and add controls must remain visually paired.

# Screen composition

Commerce screens use tight 8–12 point horizontal and inter-card spacing, with about 20–24 points between larger sections. A compact address/title line and rounded search field occupy the top. The middle alternates between promotional banners, icon category tiles, horizontal product rails, or dense two-column product grids. The bottom contains a white tab bar or a sticky green total/action region.

The observed visual archetypes are:

- Commerce home: compact location and search controls, a wide promotional banner, category icon grid, several product or promotion rows, then a persistent tab bar.
- Product grid: short title/filter region above two compact columns of contained packshots, concise facts, strong price, and small green add control.
- Product focus: large contained packshot on white, title and price cluster, supporting labels, quantity/add action, then vertically stacked detail and recommendation content.
- Basket/checkout: dense vertical rows and long white or pale grouped form sections, service segments near the top, then a sticky full-width green total/payment action.
- Profile/utility: large title above simple flat row groups, compact icons, muted detail, and restrained separators.
- Empty/status: generous open white space around a centered avocado character, concise text, and at most one strong green or blue action.
- Modal choice: full-width white sheet with large rounded top corners over a dimmed screen.

Long grids and checkout groups scroll vertically. Sticky actions and tabs reserve bottom inset so the final row remains visible.

# Navigation appearance

Primary commerce screens use a white five-item tab bar with thin outlined icons, gray inactive labels, a green selected state, and a small red count badge where needed. Top bars are lightweight and mainly consist of a title/address, back control, or small icon actions on white. Focused screens may replace tabs with a sticky green bottom action. Modal content appears in a rounded white bottom sheet over a neutral scrim. This section defines appearance, not product destinations.

# Components

Primary actions are wide fresh-green rounded rectangles about 52 points high with white semibold labels. Blue filled buttons are secondary and appear in reward or recovery contexts. Product tiles use contained packshots as the largest area, followed by compact title, price, unit/discount metadata, and a small green add or quantity control. Product and promo badges remain local and do not cover package evidence.

Search is a pale rounded field with a small leading icon and optional scan affordance. Service choices use a compact segmented surface with a white selected segment. Reward information may appear as a saturated blue horizontal band. Basket and checkout rows are flat or lightly grouped, with clear dividers and a sticky total/action. Pressed states deepen existing fills; disabled states reduce saturation without changing geometry. Interactive targets remain at least 44 points.

# Imagery and icons

Shopping decisions are led by real product packshots and food photography. Packshots use contain behavior on white so labels and package silhouettes remain visible; category and promotional photography may use cover crops within rounded tiles. The avocado mascot is a separate authored illustration layer for non-shopping states and must remain fully visible in open white or pale-green space. Navigation and utility icons are thin, simple, and subordinate. Imagery is compositionally mandatory: temporary assets must preserve the correct occupied area, crop mode, scale, and approximate color weight.

# States

Populated commerce states maintain the same grid and card geometry as loading or empty variants. Selected tabs, segments, and add controls use green; cart count uses a small red badge. Empty, assistance, and selected success states may center the avocado mascot with concise copy. Modal decisions retain a white rounded sheet and dark scrim. Native share, keyboard, and payment surfaces may appear without being restyled. Destructive removal is red and explicit. No separate dark appearance was established in the inspected screens.

# iOS adaptation

Extend white or pale surfaces through the safe areas while keeping dense grids within 8–12 point compact-width insets. Use lazy grids and vertical scroll containers for product feeds, detail content, profile rows, and checkout forms. Reflow two columns to one before Dynamic Type makes names, values, or add controls collide. Add bottom content inset for the tab bar or sticky action and lift focused fields above the keyboard. Preserve native share, payment, and permission transitions, then return to the same white/green context. Maintain 44-point hit areas even when the visible add icon is smaller. VoiceOver order follows image description, product name, current price, supporting value, then add/quantity action.

# Anti-generic checklist

- Do not replace contained product packshots with arbitrary symbols or decorative illustration.
- Do not turn the white commerce field into a generic grouped-gray `Form`.
- Do not use default blue tint; green is the primary action and selected-state color.
- Do not render the bottom bar as an unstyled `TabView`.
- Do not hide unit, weight, discount, total, or delivery context to simplify cards.
- Do not spread mascot art across ordinary product tiles or checkout data.
- Do not apply heavy shadows or one uniform radius to every surface.
- Do not omit the sticky green action on screens where it is the main composition anchor.

</design-context>
