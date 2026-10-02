<design-context>
---
version: 1
platform: iOS
name: t2-design-analysis
description: "A bold telecom ecosystem that alternates black header fields and pale utility canvases, using electric lime identity marks, heavy rounded type, modular white sheets, a five-item tab bar, saturated data accents, and neon glossy service imagery."
colors:
  canvas: "#F3F3F5"
  surface-primary: "#FFFFFF"
  surface-secondary: "#ECEDEF"
  accent-primary: "#B7FF00"
  accent-secondary: "#F42C91"
  text-primary: "#111113"
  text-secondary: "#73757A"
  divider: "#E1E2E5"
  destructive: "#E64E59"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 38, fontWeight: 800, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 800, lineHeight: 33}
  section: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 700, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "near-black or deep violet", text: "white semibold", height: 52, radius: 12}
  account-sheet: {fill: "white", padding: 16, radius: 24, content: "large value, allowances, compact actions"}
  service-tile: {fill: "white or saturated category field", padding: 14, radius: 20, imagery: "contained authored object"}
  navigation: {fill: "white", selected: "near-black icon and label", unselected: "muted gray"}
---

# Overview

t2 is a high-energy telecom interface built from black, white, electric lime, and a controlled set of saturated service colors. Root and branded surfaces often place white rounded account sheets over black header fields; utility screens move onto a pale gray canvas. Heavy rounded headings and large numeric values carry account hierarchy, while modular cards, long lists, product grids, and five-item navigation organize dense content. Neon outlined icons and glossy toy-like 3D objects give service and promotional surfaces a recognizable visual identity.

# Non-negotiable visual invariants

- Black and white form the main structural contrast; electric lime appears as a sharp identity or selected-state accent rather than a full-screen fill.
- White account sheets overlap or follow black header fields and use large top corners with compact internal data modules.
- Heavy rounded headings and large tabular values visibly outrank compact gray metadata.
- A five-item bottom bar remains white and flat, with a dark selected item and muted inactive items.
- Saturated magenta, cyan, blue, violet, and green distinguish service imagery or focused data without replacing semantic status colors.
- Dense account values, allowances, and states remain textually explicit even when a card includes authored imagery.
- Glossy 3D service objects and neon outline illustrations occupy real card space and cannot be replaced by arbitrary symbols.
- Loading states may use the recurring compact magenta square form while preserving the surrounding black/white hierarchy.

# Color and surfaces

The utility canvas is a cool pale gray. White primary surfaces create account sheets, cards, grouped rows, inputs, and bottom navigation; light gray secondary surfaces separate nested controls and disabled states. Black fills branded headers, selected hero areas, and some subscription, financial, or home-product surfaces. White type is used on black.

Electric lime identifies the brand, selected emphasis, and a limited set of actions or marks. Magenta is the strongest supporting accent and appears in authored art, loading, and category emphasis; cyan, saturated blue, and violet distinguish other product families and chart states. Near-black carries primary text and actions on light surfaces; gray carries metadata and inactive navigation. Green confirms success, amber warns, and red marks failure or destructive action. Default iOS blue, a whole lime screen, or several unrelated gradients in one card would break the reference.

# Typography

Use SF Pro Display at heavy weights as the iOS-safe match for the bold rounded or condensed-feeling headings, and SF Pro Text for body, rows, and metadata. Hero numerals and titles sit around 32–38 points, page titles around 26–30, section headings around 20–24, module titles around 15–17, and metadata around 11–13.

Large balances, remaining values, prices, and percentages use bold tabular figures. Short labels may use uppercase, but longer body text remains sentence case. Content is primarily left-aligned inside cards; navigation titles may center. With Dynamic Type, paired metrics stack, rows grow, and supporting copy wraps before primary values or actions are truncated.

# Screen composition

Screens generally use 16-point edge insets, 8–12 point module gaps, 16 points inside cards, and 20–28 points between larger groups. Black or pale canvas extends through the top safe area. White sheets may begin below or overlap a dark header region. Long account, service, expense, offer, and settings surfaces scroll vertically; the five-item tab bar or a lower action reserves the bottom safe area.

Observed archetypes include:

- Account composition: dark upper field with compact identity controls, large value or allowance, then a high-radius white sheet containing paired summary cards, progress, direct actions, and full-width lists.
- Data composition: bold title above blue or multicolor progress bars, tabular values, and grouped white rows on a pale canvas.
- Service-grid composition: compact heading and chips lead into a two-column grid of rounded tiles, each pairing a strong label with a contained authored object or neon category icon.
- Long-card composition: one-column white or dark product cards combine title, status, compact terms, object imagery, and one clear action.
- Utility-list composition: centered or leading title, search or segmented controls, then tall rows with icons, secondary gray values, badges, radios, or chevrons.
- Form composition: pale rounded fields, explicit number or amount labels, native keyboard or scanner transition, and one lower black or violet action.
- Modal composition: rounded white bottom sheet or native permission alert over a dimmed black, map, or pale utility context.

# Navigation appearance

The primary bottom bar is white and contains five evenly spaced icon-and-label items. The selected item is near-black and visually stronger; inactive items are muted gray. Detail screens use a centered dark title, leading back chevron, and compact close or trailing actions. Dark hero surfaces invert these controls to white. Horizontal chips and segmented tabs use strong label contrast, with selection indicated by fill or underline from the current product palette. Sheets have large white top corners and a subtle drag indicator where observed.

# Components

- Primary action: 50–54 points tall, full or near-full width, near-black or deep-violet fill, 12–14 point radius, and centered white semibold label. Disabled state becomes gray.
- Account sheet: white fill, 24–28 point top radius, 16-point padding, large tabular value, compact allowance or status modules, and little visible shadow.
- Service tile: white, black, or controlled category-color field with 18–22 point radius, 12–16 point padding, strong label, and contained authored object or outline icon occupying a meaningful portion of the tile.
- Progress module: bold value, explicit unit or label, and saturated blue/cyan progress bar on a neutral card. Adjacent metrics align their values.
- Dense row: leading icon, dark label, optional gray subtitle or value, and trailing radio, switch, badge, or chevron. Active state remains explicit in text.
- Search or selector: at least 44 points tall, white or pale-gray fill, 12–14 point radius, compact icon, and strong selected contrast.
- Loading mark: compact magenta square or block form centered in otherwise sparse space, without additional decorative animation inferred.

# Imagery and icons

The authored visual system combines glossy 3D objects and neon outline category illustrations. The 3D objects are chunky, simplified, and toy-like, using chrome, translucent, or saturated materials in lime, magenta, cyan, violet, and blue. They sit on quiet or pastel fields with soft grounding shadows. Outline illustrations use the same neon palette and simplified symbolic subjects. Both modes keep one clear focal object and a clean label zone.

Editorial offer imagery and external brand marks may appear in bounded cards but do not replace the core authored system. Utility icons remain compact gray or black glyphs; assistants and profile images may be circular. Use `contain` for authored objects and preserve their silhouette; use `cover` only for photographic promotional content. When final art is unavailable, placeholders must preserve placement, scale, palette weight, and negative space.

# States

Observed states include loading and skeleton surfaces, selected and inactive tabs, active radios and toggles, connected or subscribed products, remaining or transferred allowances, blocked states, empty search results, native permissions, keyboard-open forms, and dimmed bottom sheets. These preserve the same black/white structure, heavy value hierarchy, and explicit labels.

Green confirms active or successful state; amber draws attention to balance or review; red marks errors or destructive actions. Bright category colors never replace those semantic meanings. Loading uses neutral skeletons or the magenta mark. Dark product surfaces invert text while retaining card radius and action hierarchy.

# iOS adaptation

Extend the black, pale-gray, or current product field through the safe areas and reserve the lower inset for the five-item tab bar or primary action. Use vertical scroll containers for account sheets, service grids, lists, and forms. Horizontal story, offer, or chip rails may retain partial neighboring items, but must not cover primary content.

All tab items, service tiles, radios, segmented controls, and compact icons need at least 44-point targets. VoiceOver should announce the primary value, unit, product label, state, and action in that order; decorative object parts should not become separate elements. Preserve native keyboard, scanner, SIM, system permission, and sheet transitions. With Dynamic Type or compact widths, stack paired metrics and service tiles before shrinking text. Preserve the observed light and bounded dark contexts rather than forcing one palette everywhere.

# Anti-generic checklist

- Do not replace the black-header/white-sheet structure with a generic grouped card stack.
- Do not make entire screens electric lime or use several competing gradients in one card.
- Do not use default blue controls where black, violet, or product-specific emphasis is documented.
- Do not hide balances, allowances, price, or state behind decorative imagery.
- Do not replace glossy objects and neon outline art with arbitrary SF Symbols or stock illustrations.
- Do not ship an unstyled `TabView`; preserve the five-item white bar and dark selected state.
- Do not give account sheets, service tiles, fields, pills, and bottom sheets one uniform radius.
- Do not add heavy shadows that weaken the flat black/white contrast.

</design-context>
