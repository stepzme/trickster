<design-context>
---
version: 1
platform: iOS
name: Simply-design-analysis
description: "A bright iOS banking language built from white financial surfaces, saturated yellow actions, restrained blue utility accents, bold numeric hierarchy, compact three-tab navigation, and authored mascot imagery."
colors:
  canvas: "#F5F6F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F0F1F3"
  accent-primary: "#FFD514"
  accent-secondary: "#2288D8"
  text-primary: "#14151A"
  text-secondary: "#6B6E75"
  divider: "#E3E5E8"
  destructive: "#D94A50"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 20
  section-gap: 28
  card-padding: 18
  control-gap: 12
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  wallet-summary-card: {}
  yellow-primary-action: {}
  four-item-shortcut-grid: {}
  transaction-row: {}
  three-item-tab-bar: {}
---

# Overview

Simply is a light, high-contrast banking interface in which white financial surfaces and dark numbers carry most of the information while saturated yellow controls provide the unmistakable brand signal. Screens alternate between spacious task layouts and denser dashboards of balances, shortcuts, transactions, bonuses, and promotional media. Small blue outline icons and links organize utility actions without competing with the yellow primary action. Authored mascot scenes give onboarding and identity-focused moments a distinctive visual mass that a generic symbol cannot replace.

# Non-negotiable visual invariants

- White and very light gray occupy most of every viewport; yellow appears as a concentrated action or brand mass rather than a full-screen tint.
- The primary financial value or task title is substantially larger and darker than every supporting label.
- Main actions are wide saturated-yellow controls with dark text, normally anchored near the lower safe area on task screens.
- Dashboard content is grouped into broad rounded white surfaces and compact rows, not a collection of unrelated bordered cards.
- Utility actions use restrained blue outline icons or blue text; system-blue buttons must not replace the yellow action hierarchy.
- Navigation remains visually compact: centered titles on inner screens and a simple three-item bottom bar on top-level screens.
- Modal choices use a dimmed backdrop and a large white rounded sheet rising from the bottom.
- Where a mascot scene is present in the reference role, it remains a major authored image rather than being omitted or replaced by an SF Symbol.

# Color and surfaces

The canvas is a cool near-white gray, with white as the dominant content surface and a slightly deeper gray for fields, quiet containers, and disabled areas. `accent-primary` is a warm saturated yellow reserved for brand emphasis and decisive actions. `accent-secondary` is a clear blue used for links, outline utility icons, and selected supporting controls. Primary copy is near-black; explanatory copy is medium gray. Dividers are pale and subordinate to spacing. Green communicates successful or positive financial outcomes; red is limited to destructive, error, debit, and badge states.

Some promotional surfaces invert the system with black or very dark backgrounds and concentrated purple or pink media, but they remain bounded content blocks rather than the application canvas. Shadows are shallow and diffuse. Default iOS blue for primary actions, heavy gray grouped backgrounds, or saturated color on every card would erase the reference hierarchy.

# Typography

Use SF Pro as the iOS-safe system family. Centered navigation titles are bold but compact. Large balance, amount, and confirmation numbers use display weight, tabular numerals where alignment matters, and clear separation from currency or explanatory labels. Section headings are semibold and left aligned; body copy is regular and secondary copy is gray. Labels on yellow controls are semibold with dark text. Avoid decorative casing and long mood-setting copy.

Dynamic Type should preserve rank rather than fixed line counts: allow explanatory text and row subtitles to wrap, keep financial values on one line where possible with `minimumScaleFactor`, and let dense sections grow vertically. The contrast between hero numeric content, section labels, and captions must remain visible at accessibility sizes.

# Screen composition

Most screens use about 20 points of horizontal inset and a full-height vertical scroll container. A compact navigation area leads into either a large financial summary or a focused task title. Supporting content follows in 12–28 point vertical intervals. Task screens keep the middle deliberately sparse and reserve the bottom safe-area region for a full-width action. Dashboard screens pack broad sections more tightly while retaining clear gutters and full-width card alignment.

Observed archetypes:

- **Dashboard:** balance or account summary near the top, a compact grid of primary shortcuts, then full-width transaction or promotional sections above the bottom bar.
- **Focused form:** centered or left-aligned title, one or two pale rounded fields, large quiet middle space, and a fixed yellow action above the keyboard or home indicator.
- **Search and directory:** pale search field followed by an icon grid, saved item, or compact result rows.
- **History and settings list:** stacked edge-to-edge rows with small leading icons, dark primary labels, gray metadata, and light separators.
- **Result state:** one dominant confirmation mark or authored image, concise outcome copy, and a single yellow exit action.
- **Promotion or bonus surface:** stronger dark or colorful media mass paired with a small amount of product text and a clear action.

# Navigation appearance

Inner screens use a centered bold title with a plain left chevron; an `x` appears only for dismissible modal contexts. The top-level bottom bar is white, shallow, and divided into three evenly spaced destinations with small icons and concise labels. Selected state is expressed through the brand treatment rather than an oversized capsule. Bottom sheets have a large top radius, white surface, dim scrim, and vertically stacked choices. Navigation chrome must stay visually subordinate to financial content.

# Components

- **Wallet summary card:** broad rounded white or dark surface, large bold amount, concise supporting label, and tightly grouped utility controls; use minimal border and only a shallow shadow.
- **Yellow primary action:** nearly full-width, 52–56 points tall, saturated yellow fill, dark semibold label, rounded control corners; disabled state becomes visibly muted without changing geometry.
- **Shortcut grid:** four compact actions aligned to a shared baseline, using blue outline icons and short labels with generous touch areas but little visual chrome.
- **Transaction row:** compact leading mark, primary merchant or category label, gray metadata, and trailing signed amount; positive amounts may turn green and debit/error values red.
- **Search field:** pale gray rounded rectangle with a small leading search mark, regular text, and no strong outline.
- **Segmented or filter control:** compact rounded choices with one visibly filled or emphasized selection and subdued unselected labels.
- **Notification badge:** small saturated red circle or pill attached to the relevant icon, never used as a decorative accent elsewhere.
- **Modal sheet row:** full-width tappable line with restrained iconography and separators inside a white rounded sheet.

# Imagery and icons

Small functional icons are predominantly simple blue outlines with consistent optical weight. Service and partner marks may retain their own identity inside controlled tiles, but arbitrary multicolor symbols should not leak into general navigation. Card renders, bonus tiles, and promotional media are content-specific anchors and may occupy a substantial part of their container.

The custom silver-gray mascot is compositionally important in onboarding and identity-benefit contexts. It should occupy roughly a quarter to half of the available screen or card and remain visually paired with concise copy. It cannot be omitted while waiting for final assets; use an approved generated raster asset that follows `illustrations.md`.

# States

Empty payment and search states preserve the white/light-gray canvas, concise message, and the same blue/yellow hierarchy rather than adding a generic empty-state card. Focused forms retain their geometry while the keyboard compresses the lower space and the primary action remains reachable. Enabled actions use saturated yellow; disabled actions keep the same size with lower contrast. Success states use a focused confirmation visual, green status cues where appropriate, and one clear yellow continuation action. Alerts and action sheets use standard iOS presentation behavior but retain the white surfaces, dark copy, light separators, and restrained accent usage. Selected filters, toggles, and biometric settings must remain unmistakable without introducing a new color system.

# iOS adaptation

Use safe-area-aware `ScrollView` layouts and place fixed actions with `safeAreaInset(edge: .bottom)` so they remain above the home indicator and keyboard. Preserve the approximately 20-point compact-width gutter and allow card grids to collapse without narrowing touch targets below 44 points. Use system permission dialogs as system UI, returning to the same visual hierarchy afterward. Sheets may use native presentation mechanics with custom detents and the observed large white surface radius.

VoiceOver order follows the visual reading sequence: navigation, primary amount or title, actions, then supporting sections. Combine each transaction row into a meaningful accessibility element and announce signed amounts. Support Dynamic Type by allowing cards and rows to grow. The sampled system is light-first; do not invent a dark appearance unless product requirements provide one, and never mechanically invert yellow, blue, or promotional artwork.

# Anti-generic checklist

- Do not replace the yellow action hierarchy with default blue `Button` styling.
- Do not build every section as an identical shadowed white card.
- Do not use unstyled `Form`, default grouped lists, or stock section headers.
- Do not ship a default `TabView` whose tint, spacing, and selected state ignore the compact three-item bar.
- Do not substitute arbitrary SF Symbols for the blue outline icon family or custom imagery.
- Do not omit the mascot or promotional visual mass from screens where imagery defines the composition.
- Do not flatten financial values, titles, labels, and captions into near-identical type sizes.
- Do not add decorative copy that repeats the visible state or merely fills whitespace.
</design-context>
