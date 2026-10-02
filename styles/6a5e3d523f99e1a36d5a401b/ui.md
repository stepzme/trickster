<design-context>
---
version: 1
platform: iOS
name: Halyk-Kazakhstan-design-analysis
description: "A dense white-and-pale-gray financial super-app with green actions and selected navigation, compact service grids, rounded product cards, promotional banners, and large numeric summaries."
colors:
  canvas: "#F5F6F6"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EFF2F1"
  accent-primary: "#11A85A"
  accent-secondary: "#FFB719"
  text-primary: "#17191B"
  text-secondary: "#73777C"
  divider: "#E2E5E4"
  destructive: "#DE5555"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 13
  card: 18
  sheet: 28
  pill: 999
components:
  green-primary-action: {fill: "#11A85A", text: "#FFFFFF", shape: "full-width rounded rectangle"}
  service-tile: {fill: "#FFFFFF", icon: "green or contextual", label: "compact below"}
  finance-summary-card: {fill: "#FFFFFF", value: "large", metadata: "muted"}
  promo-banner: {fill: "contextual image or color", corners: "rounded", copy: "short"}
  bottom-tab-bar: {fill: "#FFFFFF", selected: "#11A85A", unselected: "gray"}
---

# Overview

Halyk Kazakhstan presents a broad financial and services interface through high information density rather than spacious minimalism. A pale-gray canvas holds white rounded surfaces, while Halyk green organizes primary actions, icons, and selected navigation. Large balances and section titles punctuate compact grids, lists, banners, and forms. Product photography, partner marks, card artwork, and promotional imagery add local color without displacing the green banking shell.

# Non-negotiable visual invariants

- Halyk green is the dominant action and selected-state color; generic iOS blue must not replace it.
- A pale-gray canvas supports white rounded content surfaces with restrained separation and soft depth.
- Main screens are intentionally dense, combining search or status, service shortcuts, summaries, banners, and lists in one continuous scroll.
- Service shortcuts appear as compact icon-label tiles or grids, not oversized feature cards.
- Financial values and section titles are clearly larger and heavier than gray helper text and metadata.
- The persistent bottom tab bar is white with green selected icon and label, while inactive items are gray.
- Primary confirmations use wide green rounded controls near the lower edge; disabled versions keep geometry and lose contrast.
- Promotional imagery is contained inside rounded banners and product cards rather than used as a full-screen decorative background.

# Color and surfaces

The outer canvas is very light neutral gray, while core cards, lists, sheets, and inputs are white. Secondary controls and segmented areas use slightly darker pale gray. Green identifies primary actions, selected tabs, active segments, service icons, and positive states. Warm yellow appears selectively in promotional or attention contexts rather than recoloring the banking shell. Near-black carries titles and financial values; medium gray carries descriptions, dates, placeholders, and unavailable information. Red is reserved for negative or failed states.

Some debit-card or promotional surfaces introduce dark, photographic, or partner-specific color fields. Modal scrims are dark and temporary. The sampled screens do not show an app-wide dark theme. Strong card shadows, default blue tint, or using yellow for every action would disrupt the observed hierarchy.

# Typography

Large section headings and balances use bold SF-style display text. Service labels, transaction rows, form fields, and navigation use compact regular or semibold text. Supporting metadata is smaller and gray. Financial numerals receive weight and spacing rather than decorative styling. Button labels are short, semibold, and centered; dense tiles avoid long multiline copy.

Use SF Pro Display for large headings and financial values and SF Pro Text for controls and body. With Dynamic Type, let rows, cards, and form fields expand; preserve the visual gap between amount, label, and helper text. Grid labels may wrap to two lines, but the icon and tap area must remain aligned.

# Screen composition

Main screens sit below the top safe area and often begin with a compact search, status, city, or utility row. The middle is a vertical scroll containing balance or product summaries, small service grids, horizontal promotional banners, segmented controls, and compact lists. Typical side insets are about 16 points. A five-item white bottom tab bar anchors primary-level screens; task screens instead use a pinned green action.

Dashboard archetype: top utilities lead into financial summaries, quick services, promotional banners, and recent or contextual cards, all arranged in a dense continuous scroll.

Service-directory archetype: search and category controls precede a regular grid of compact icon-label tiles, with secondary banners placed between groups.

Form archetype: a centered or left-aligned title leads into stacked rounded inputs, selectors, amount chips, and helper text, ending in a wide green action.

Product-detail archetype: card or product artwork and a large numeric summary form the focal upper area, followed by actions, segmented content, and detail rows.

Marketplace archetype: rounded photo or product cards, category imagery, partner marks, and banners are denser and more visual while retaining the same pale shell and bottom navigation.

# Navigation appearance

The main bottom bar is a white five-item surface with compact icons and labels; the selected state is green and inactive states are gray. Top bars combine a small back control with a centered or left-aligned title and compact search, support, history, or location affordances. Segmented controls use rounded pale backgrounds and a stronger selected surface or green text. Bottom sheets and modal pickers use a dim scrim, large top corners, and list rows with clear selection. Pinned task actions sit above the safe area and remain visually distinct from navigation.

# Components

Primary buttons are full-width green rounded rectangles with white semibold text. Disabled buttons retain size and radius with pale gray fill. Service tiles use a white or softly tinted rounded surface, a simple contextual icon, and a short centered label. Finance summary cards combine a large value, small gray annotations, and compact actions without heavy borders.

Inputs are white or pale-gray rounded rectangles with visible labels, clear values, and restrained trailing affordances. Segmented controls and amount chips are compact and closely spaced. Transaction or option rows pair a leading icon or merchant mark with a two-level text stack and a trailing value or chevron. Promotional banners combine short text with contained partner photography, category imagery, or product art. Toggles, card selectors, bottom sheets, charts, and list dividers maintain the same neutral geometry and green selection logic.

# Imagery and icons

Imagery is varied but contained. Promotional banners use photos, partner graphics, or card artwork inside rounded modules. Merchant logos, marketplace product images, travel imagery, flags, and category pictures support identification. Financial charts and card visuals are functional rather than decorative. These assets should remain large enough to carry their module and should not be replaced by unrelated symbols.

Service icons are compact, often green line or filled marks, with consistent optical weight. The sampled screens include isolated decorative graphics, but not a repeatable standalone authored illustration system. Do not treat a one-off loading plane or administrative graphic as a required character or 3D language.

# States

Observed states include first launch, sign-in, populated dashboard, card lists and detail, transfer forms, phone transfer, payments, amount entry, profile, bonuses, finance analytics, investments, marketplace, travel loading, active tabs and segments, modal selection, disabled buttons and toggles, blurred private data, and charts. Selection uses green, white, or stronger contrast while retaining component geometry. Local dark card surfaces and modal dimming do not constitute a dark appearance.

# iOS adaptation

Use safe-area-aware vertical scrolling for dense dashboards and independent insets for the bottom tab bar or pinned CTA. Service grids should preserve consistent columns at compact width, but reflow when Dynamic Type would truncate labels. Horizontal banner and chip strips may scroll rather than shrinking. Keep visible icons compact while guaranteeing 44-point hit regions.

Native sheets and keyboards can provide platform behavior, but app-owned surfaces need the observed pale canvas, white rows, green selection, and rounded geometry. VoiceOver order should follow title or status, balances, service grid row by row, banners, content lists, and bottom navigation. Provide meaningful labels for merchant and promotional imagery. Preserve light appearance unless a true dark reference is supplied; do not infer one from dark card art or scrims.

# Anti-generic checklist

- Do not replace Halyk green with default iOS blue.
- Do not expand every service shortcut into a large generic card.
- Do not ship an unstyled `TabView`, `Form`, `List`, or default segmented control.
- Do not flatten balances, section titles, labels, and helper text into one scale.
- Do not use arbitrary SF Symbols where consistent service icons or merchant marks are visible.
- Do not convert the pale-gray canvas into an all-white screen with strong card shadows.
- Do not invent a unified character or 3D illustration system from isolated decorative assets.
- Do not add explanatory or mood copy that duplicates visible products, amounts, statuses, or actions.

</design-context>
