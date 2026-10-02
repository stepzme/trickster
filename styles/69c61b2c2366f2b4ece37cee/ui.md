<design-context>
---
version: 1
platform: iOS
name: Alfa-Bank-design-analysis
description: "A soft light financial dashboard built from pale-gray fields, large rounded white modules, compact system typography, black transactional actions, a distinctive glossy red-heart center tab, and highly varied promotional artwork kept inside bounded feed cards."
colors:
  canvas: "#F3F3F4"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EAEAEC"
  accent-primary: "#111113"
  accent-secondary: "#EF3124"
  text-primary: "#171719"
  text-secondary: "#74747A"
  divider: "#E1E1E4"
  destructive: "#D63D45"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 42}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 22
  sheet: 30
  pill: 999
components:
  primary-action: {fill: "{colors.accent-primary}", text: "#FFFFFF", cornerRadius: 14, minHeight: 50}
  finance-card: {fill: "{colors.surface-primary}", text: "{colors.text-primary}", cornerRadius: 22, padding: 16}
  selection-row: {fill: "{colors.surface-primary}", text: "{colors.text-primary}", cornerRadius: 16, padding: 14}
  navigation: {fill: "{colors.surface-primary}", selected: "{colors.accent-primary}", unselected: "{colors.text-secondary}", minHeight: 62}
---

# Overview

Alfa Bank places serious financial information on a soft, low-contrast foundation. White account, settings, form, and history modules float on very pale gray with large rounded corners and minimal borders. Black buttons and selected controls carry transactional authority. Brand red is visible but selective, most notably in a glossy oversized heart at the center of the persistent bottom bar. Colorful campaign cards interrupt the neutral dashboard, yet their graphics remain bounded content rather than a global illustration language.

# Non-negotiable visual invariants

- The operational canvas is white or very pale cool gray, with large rounded white modules and subtle tonal separation rather than strong borders.
- Primary transactional actions are near-black rounded rectangles with white labels; ordinary selection does not default to red.
- The persistent five-item bottom bar has a conspicuous glossy red heart in the central selected position and smaller gray or black surrounding items.
- Financial detail screens place the balance, product, or card hero above two compact black actions and grouped white lists.
- Home is a vertically scrolling personalized dashboard mixing account summary, horizontal people or offer rails, and stacked finance/service modules.
- Sheets use a high rounded top, grabber, and dimmed background while retaining the same white-card language inside.
- Promotional graphics may be loud and colorful, but remain contained within their own card boundaries and never restyle transaction forms.

# Color and surfaces

White and very pale cool gray form the dominant masses. White modules sit on the gray field with little or no shadow; subtle gray dividers and grouped gutters define their edges. Disabled and loading surfaces fade toward near-white, producing deliberately low contrast. Overlays dim the whole composition with a gray-black scrim.

Near-black carries titles, values, selected segments, and primary actions. Alfa red marks brand identity and the center heart but is not the default action fill. Green appears in successful transfers, positive values, cashback, and toggles. Purple, cyan, mint, orange, lilac, and other pastels belong to campaign and product cards. Default system blue or blanket red tinting would break the observed black-action and contextual-color hierarchy.

# Typography

The interface uses SF-like system typography throughout. Titles are compact and bold; body and list labels are regular; secondary metadata is smaller and gray. Balances, amounts, and central product values receive the largest bold treatment. Dense history and settings rows rely on weight and alignment rather than decorative type.

Use SF Pro Display for balances and major headings and SF Pro Text for all operational copy. Promotional artwork may contain its own display lettering, but that does not define the app typography. Under Dynamic Type, let rows, cards, and explanations expand vertically while preserving the prominence and alignment of balance, amount, state, and main action.

# Screen composition

Home extends pale gray through the safe areas and begins with a compact personalized header and utilities. The vertical scroll proceeds through account or search controls, a promotional carousel, contact or transfer rail, benefit and service modules, cashback or investment cards, upcoming payments, rate and map content, and lower settings access. White modules nearly fill the width inside 12-16 point insets, with 8-12 point local gaps and larger section breaks.

Account and card detail pages place a large balance or literal product render in the upper portion, then pair two black actions before stacked grouped rows. Payments use an icon or category catalog followed by service lists. Transfer forms use one column of recipient, source, amount, suggestions, and a keyboard-safe bottom action. History combines summary cards, compact transaction rows, and filters.

Search may use a frosted or blurred backdrop with a compact informational card. QR payment becomes a full-bleed camera surface with a rounded scanner frame and white corners. Success uses a darkened context with a centered white rounded confirmation card. Profile and settings use long grouped lists on the pale canvas.

# Navigation appearance

Root screens use a persistent white five-item bottom bar above the home indicator. Surrounding destinations use small gray or black line icons and labels; the selected center uses a much larger glossy red heart, creating an intentional scale break. Detail flows use a small back chevron and compact centered title without a heavy colored bar.

Root top areas may show avatar, title, and small action cluster. Sheets rise from the bottom with a large white rounded top edge and centered grabber over a dim scrim. Recipient selectors and filters use compact white rows and pills inside the sheet. Native system alerts remain small centered panels over a blurred or dimmed screen.

# Components

Primary actions are near-black rounded rectangles around 50 points high with white semibold text. Disabled actions become gray but retain size and position. Finance cards use large corners, white fill, clear title or balance hierarchy, and compact local actions. Form fields and selectors use pale grouped surfaces or white rows with persistent labels and restrained icons.

Account and history lists use icon-left rows, short primary text, optional secondary value or status, and minimal separators. Recipient and contact rails use circular avatars with short names. Payment catalogs use compact icons and labels. Filters use pills, segmented controls, or sheet rows with clear black selected emphasis.

Loading uses skeleton blocks or small circular spinners without a new surface language. Success cards center a green check, amount, and follow-up actions. The QR scanner uses a rounded overlay frame over live camera imagery. All visible compact controls retain at least 44-point hit areas.

# Imagery and icons

Literal bank-card renders, avatar photos, provider logos, and camera imagery preserve their recognizable form and proportions. Promotional cards vary widely: 3D numerals, flags, coins, wallets, gradients, logos, and typographic graphics. These are campaign assets, not one authored illustration system, and should remain bounded to their cards.

Functional icons are simple monochrome gray or black glyphs. The glossy red heart is a distinctive navigation asset. Charts use restrained rings, segments, and summaries. When a sampled composition includes card art, campaign imagery, contacts, or camera content, preserve its crop, scale, and approximate color mass with a temporary raster asset rather than replacing it with arbitrary SF Symbols.

# States

Loading preserves the pale-gray and white structure while replacing content with near-white skeletons or compact red-gray spinners. Completed transfers, QR payments, and opened products use a centered white overlay card with green success mark over a dimmed context. Disabled actions turn gray without changing geometry.

Filters and recipient selection use rounded sheets. Search warnings and logout or account-change confirmation use modal panels over a scrim. QR uses a live camera state with fixed scanner frame. Populated account, transaction, and benefit states keep the same card hierarchy. No explicit empty, network-error, or native permission prompt was observed, so do not invent an unrelated decorative treatment.

# iOS adaptation

Extend pale gray, white, camera, or overlay fields through their relevant safe areas. Dashboard, accounts, history, payments, benefits, profile, and settings require vertical scrolling; reserve bottom inset for the persistent bar or sticky action. Keep literal card proportions and QR scanner geometry stable across compact and tall devices.

Navigation, card actions, recipients, fields, filters, and list rows require 44-point targets. Keep the active field and black submit action reachable above the keyboard. On compact widths, collapse two-column promotional grids or stack secondary metadata before shrinking core financial values. Preserve VoiceOver order from title and balance through actions, rows, and primary CTA. The observed system is light; do not invent a dark theme without separate design evidence.

# Anti-generic checklist

- Do not replace the pale-gray dashboard and large rounded modules with a default grouped form.
- Do not use red as the universal button or selected-control color.
- Do not render the bottom navigation as an unstyled tab view or reduce the central glossy heart to a generic icon.
- Do not turn every finance module into a colorful promotional card.
- Do not apply campaign gradients, 3D graphics, or display lettering to transfer and settings surfaces.
- Do not collapse balance, product identity, and black actions into an undifferentiated white card list.
- Do not replace literal card art, contact photos, QR camera content, or campaign imagery with arbitrary SF Symbols.
- Do not infer one illustration system from heterogeneous campaign cards and isolated splash artwork.

</design-context>
