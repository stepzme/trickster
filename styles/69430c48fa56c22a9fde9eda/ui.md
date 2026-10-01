<design-context>
---
version: 1
platform: iOS
name: My-MTS-design-analysis
description: "A modular telecom dashboard with a pale lavender canvas, large rounded white account cards, hot MTS red actions, blue usage indicators, compact service icons, and bounded promotional imagery."
colors:
  canvas: "#F7F6FB"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F0EEF5"
  accent-primary: "#FF0032"
  accent-secondary: "#4B9CFF"
  text-primary: "#19191C"
  text-secondary: "#6D6E75"
  divider: "#E5E2EA"
  destructive: "#D91A35"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 14
  card: 24
  sheet: 28
  pill: 999
components:
  primary-action: {background: "#FF0032", foreground: "#FFFFFF", minHeight: 52, cornerRadius: 14}
  secondary-action: {background: "#F0EEF5", foreground: "#19191C", minHeight: 48, cornerRadius: 14}
  primary-card: {background: "#FFFFFF", foreground: "#19191C", cornerRadius: 24, padding: 16}
  navigation: {background: "#FFFFFF", selected: "#FF0032", unselected: "#92939A"}
---

# Overview

My MTS presents dense telecom and account information as a calm modular dashboard. A very pale lavender-gray canvas separates large rounded white modules; heavy balance and allowance numerals establish priority, while hot red marks primary actions and blue visualizes usage. Promotional art is colorful but stays inside bounded cards, leaving operational information dominant.

# Non-negotiable visual invariants

- The main canvas is pale lavender-gray, not plain white; large white modules create the primary surface contrast.
- Account, balance, allowance, and tariff facts lead each module with bold dark type and generous surrounding space.
- Primary actions and active navigation use concentrated MTS red or pink rather than default iOS blue.
- Usage and connectivity quantities use sky-blue bars or accents, visually separate from red actions.
- Cards have visibly generous rounding, usually around 20–24 points, but nested rows and icon tiles use smaller radii.
- Dense account rows stay grouped inside broad modules instead of becoming many unrelated floating cards.
- Promotional imagery remains contained in story, offer, or success surfaces and does not displace core status information.
- Bottom sheets preserve the same soft surfaces, large top radius, dimmed backdrop, and full-width decision controls.

# Color and surfaces

The full-screen field is a cool, almost white lavender. Primary modules are crisp white and may use a very soft shadow or glow for separation; secondary controls, chips, and icon tiles use a slightly deeper lavender-gray. Hairlines are faint and mostly appear inside modules rather than outlining every card.

Near-black leads balances, titles, and selected content. Medium gray carries account identifiers, remaining allowances, supporting explanations, and inactive navigation. Hot MTS red or pink is reserved for top-up, commitment, active navigation, and focused controls. Sky blue communicates consumption and informational progress. Purple gradients appear in premium, payment, or campaign moments, while green confirms successful outcomes. Generic iOS blue used as the universal accent would erase the red-led identity.

# Typography

Use SF Pro Display for balances and major page metrics and SF Pro Text for rows, controls, and metadata. Hero numerals are roughly 30–34 points and bold; page and major module titles are 24–28 points; section titles are about 18–20 points; standard rows sit around 15–16 points; captions and secondary labels fall around 11–13 points.

Numerals are prominent and stable, with a strong distinction between the balance or allowance and its unit or qualifier. Titles are usually sentence case and left aligned; centered titles are limited to navigation bars and focused sheets. With Dynamic Type, explanatory text wraps before balance, service status, or primary action loses its hierarchy. Rows can grow vertically, and horizontal utility groups can become scrollable or stacked rather than compressing labels.

# Screen composition

Primary screens use approximately 16-point horizontal gutters, 12–16-point card padding, and 24–32 points between major modules. A compact account or navigation header sits above a vertical stack of status and action cards; the persistent tab bar occupies the bottom safe area.

Observed archetypes:

- Account dashboard: a leading balance/status module, compact top-up action, usage cards with blue progress, service summaries, and bounded horizontal promo rails.
- Service or tariff detail: centered navigation title, one dominant plan or allowance block, grouped facts, and a bottom or in-flow red commitment action.
- Money and spending: strong total, category chips or segments, transaction rows, and payment actions represented by colored icon tiles.
- Profile and settings: wide white grouped modules containing concise rows, muted metadata, disclosures, and native-style toggles.
- Search and support: a pale rounded search field or message composer followed by flat results, suggestion chips, or chat bubbles.
- Focused task sheet: a large rounded sheet over a dimmed background, with selected payment method or confirmation content and a full-width CTA.

Long content scrolls behind a stable top bar. Bottom controls reserve space above the home indicator and never obscure the final module.

# Navigation appearance

The persistent tab bar is a white or near-white surface with four evenly spaced icon-and-label items in the observed sample. Selected state uses MTS red; inactive icons and labels are medium gray. The bar is integrated with the screen edge rather than floating as a separate glass pill.

Detail bars use a compact back chevron, a centered title with an optional small subtitle or account identifier, and a restrained avatar or contextual control on the right. Sheets have a pronounced rounded top, dimmed or blurred backdrop, and either a drag handle or close control. These observations define appearance only; destination count and route structure must come from the product artifacts.

# Components

Primary buttons are red rounded rectangles, generally 48–52 points high, with semibold white labels. Secondary buttons and chips use pale lavender or white surfaces with dark labels; occasional black campaign actions remain confined to the campaign context. Pressed states deepen the existing fill, while disabled states retain geometry and reduce contrast.

Primary modules are broad white cards with about 20–24-point radii. A typical module contains one leading metric or title, a short status line, compact supporting rows, and at most one visually dominant action. Usage cards add a thin sky-blue progress bar. Service and settings rows pair a pale rounded icon tile with text and a quiet disclosure control.

Top-up and payment controls may use compact pills, but the entire interface is not pill-shaped. Search fields use a pale fill, leading search glyph, and generous height. Category chips and support suggestions show clear selected or pressed contrast. Transaction rows align amount, category, date, and status without turning each row into its own card. All icon-only and compact controls retain at least a 44-point target.

# Imagery and icons

Functional icons are simple glyphs, commonly dark, blue, or red, often centered in small pale rounded squares. Their stroke and fill logic remains consistent within a module. Avoid a random mixture of filled and outlined SF Symbols.

Campaign and product art includes photographs, branded service marks, gradients, and occasional 3D seasonal objects. This material is heterogeneous and bounded by promotional cards; it is not a reusable authored illustration system. Use aspect-fill only inside explicit promo/story frames and protect nearby copy. Operational cards should not inherit decorative gradients or oversized art.

When a campaign or success visual is compositionally present, do not omit its image region while assets are pending. Preserve its card bounds, crop, scale, and text-safe area with a representative temporary asset.

# States

Observed states include signed-out entry, populated dashboard and service details, loading spinner, low or limited connectivity information, selected segments and chips, payment-method sheet, payment success, empty or sparse informational screens, settings toggles, QR camera scanning, and support chat with suggestion chips.

Across states, the lavender canvas, broad white modules, bold primary metric, rounded sheets, and red action hierarchy remain constant. Success may introduce green or a purple branded surface without changing the surrounding structure. Disabled and secondary controls become lower contrast but do not switch to default system styling. No explicit error screen was visible; any error treatment should be local to the affected module and retain the same surface and typography system.

# iOS adaptation

Extend the pale canvas through the status and home-indicator areas, while white modules and text respect safe-area insets. Use a vertical `ScrollView` for dashboard, spending, tariff, and settings content. Reserve the lower safe area for the integrated tab bar or a bottom decision action.

Allow promo rails, chips, and segmented groups to scroll horizontally when needed. Present keyboard, QR camera, payment confirmation, and system permission transitions natively, then restore the same visual context. In VoiceOver, announce the leading metric with its unit and state before supporting actions; preserve logical order inside grouped cards. Let modules grow vertically for Dynamic Type and avoid truncating account identifiers or critical plan status. The observed system is light-first; do not infer an unrelated dark appearance without evidence or a product requirement.

# Anti-generic checklist

- Do not replace the pale lavender canvas with a generic white background.
- Do not use a uniform stack of small white cards; preserve broad modules with internal grouping.
- Do not apply MTS red to every icon, badge, and secondary action.
- Do not replace blue usage progress with the universal red accent.
- Do not use default blue links, an unstyled `TabView`, or `Form` section chrome.
- Do not make the tab bar a floating translucent pill when the reference is edge-integrated.
- Do not let campaign imagery or gradients overwhelm balances, allowances, or service status.
- Do not collapse all controls, cards, icon tiles, and sheets to one corner radius.

</design-context>
