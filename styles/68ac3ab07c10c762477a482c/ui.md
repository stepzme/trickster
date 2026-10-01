<design-context>
---
version: 1
platform: iOS
name: Balance-Pay-design-analysis
description: "A sparse light iPhone wallet built from broad white fields, pale lavender-gray cards, compact SF-style financial hierarchy, purple-to-magenta brand accents, native modal layers, and almost no content imagery."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#F4F3F8"
  surface-secondary: "#ECEAF0"
  accent-primary: "#8B35E8"
  accent-secondary: "#ED27B7"
  text-primary: "#101010"
  text-secondary: "#77777E"
  divider: "#DFDDE4"
  destructive: "#E44558"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 27}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 600, lineHeight: 23}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 17}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 14
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "purple", text: "white", height: 52, radius: 14}
  secondary-action: {fill: "pale lavender-gray", text: "near-black", height: 48, radius: 14}
  balance-card: {fill: "pale lavender-gray", radius: 18, padding: 16}
  amount-chip: {fill: "pale purple", text: "purple", radius: 999}
  navigation: {fill: "white translucent", active: "purple", inactive: "gray"}
---

# Overview

Balance Pay is deliberately calm and sparse. Large white fields surround a small number of pale grouped cards, financial rows, and forms. Purple carries active controls and wallet identity; a magenta-to-violet gradient is concentrated in splash or compact brand marks. Amounts and balances are the strongest information, while native iOS sheets, keyboards, alerts, and permission dialogs remain visually compatible with the restrained shell.

# Non-negotiable visual invariants

- White occupies most functional screens, with intentionally unused space around a few financial tasks.
- Product, history, and settings groups use very pale lavender-gray cards without prominent shadow.
- Purple marks selected navigation, active actions, chips, icons, and chart progress; gradient is reserved for concentrated brand moments.
- Balance, amount, and transaction values are heavier than product names, descriptions, dates, and legal copy.
- Forms use one vertical column, generous separation, and a full-width CTA close to the lower safe area.
- Bottom navigation stays light and visually soft, with one clearly purple selected item and muted gray inactive items.
- Bottom sheets, receipts, and confirmations use large rounded tops, a drag handle, and a dimmed or blurred backdrop.
- Success green and error red appear only in outcome panels, alerts, or compact feedback, never as ambient decoration.

# Color and surfaces

White is the dominant canvas. Pale lavender-gray separates balance cards, transaction groups, settings rows, and disabled controls; slightly darker neutral supports selection or nested content. Dividers are minimal. Near-black carries amounts and headings, with medium gray for helper, date, and legal text.

Purple is the operational accent. Magenta and violet can blend in the splash, logo, or compact wallet mark, but transaction screens remain neutral. Green can fill a successful result header or mark incoming value; red is limited to errors, destructive wallet actions, and retry feedback. Default blue tint, decorative gradients behind ledgers, and heavy dark cards would break the system.

# Typography

Use SF Pro. Screen titles are compact bold rather than oversized, body copy sits near 13–15 points, and captions/legal text are small gray. Amounts, balances, history totals, and statistics values use semibold or bold weight. Labels remain sentence case and direct.

Dynamic Type should increase rows and allow explanations to wrap while preserving amount prominence. Legal text can occupy more lines; it should not force CTAs below an unreachable keyboard. Do not make titles, values, body, and captions nearly identical in size or weight.

# Screen composition

Finance and overview archetypes use a centered navigation title, optional small actions at the edges, then one or two full-width pale product cards separated by broad white space. Action glyphs or short rows sit inside or immediately below the card. A light bottom bar stays above the home indicator.

Payment and settings archetypes are one-column lists of rounded rows, chevrons, and compact icons. Transfer, top-up, certificate, and identity forms place a short title above fields, amount chips or selectors in the middle, and a full-width action near the lower safe area. Keyboard presence reduces whitespace before shrinking controls.

History and statistics use segmented pills, filter chips, ledger rows, bold totals, and simple donut/ring graphics. Confirmation, limit, receipt, and destructive states rise as rounded sheets over the existing screen. Outcome screens can allocate a large green or neutral upper panel but keep the rest spare.

# Navigation appearance

Top bars resemble restrained native iOS navigation: centered title, standard-scale back icon, and occasional compact settings or notification glyph. The bottom bar is white or subtly translucent, pinned to the safe area, with small monochrome glyphs, compact labels, purple selection, and gray inactive states.

Sheets have a visible drag handle and large top radius; standard alerts remain native. Pill segments use a pale track and stronger selected label or fill. This appearance is reusable without importing the source product's destination structure.

# Components

Balance cards are broad pale panels with product mark, label, bold amount, and a few concise actions. Transaction rows pair a small rounded icon with description/date and a trailing signed amount. Amount chips are compact pills; selected bank or wallet rows use a clear check or purple emphasis.

Primary buttons are full-width purple with white semibold text. Disabled buttons retain geometry but become low-contrast gray. Forms use flat pale inputs, native numeric keyboards, OTP/passcode cells, and short helper text. Donut charts use a purple arc with neutral remainder. Chat uses a quiet message list and native-feeling composer.

# Imagery and icons

There is almost no content imagery. Small rounded wallet/card glyphs, monochrome utility symbols, the SBP mark, and a compact purple gradient brand mark provide identification. The gradient splash can fill the viewport, but it should not be mistaken for an illustration or copied behind functional content.

No standalone authored illustration system was observed. Do not invent characters, scenes, stock finance artwork, or decorative hero images. Sparse screens should remain sparse.

# States

Observed states include empty notifications, disabled and filled forms, numeric keyboard, contact permission, red retry feedback, limit information sheet, selected bank, transfer confirmation, success receipt, filtered history, expense/income statistics, wallet block confirmation, blocked/unblocked row, and active support chat.

Across states, white space, pale cards, compact typography, purple operation color, and native modal geometry stay constant. Success and failure may introduce green or red locally without recoloring the whole interface.

# iOS adaptation

Respect status and home-indicator areas, pin the bottom bar and lower CTAs with safe-area insets, and move active inputs above numeric or text keyboards. Use vertical scrolling for forms, history, settings, and support; sheets should remain reachable at compact height. Keep icon and row targets at least 44 points.

VoiceOver order should follow title, value, supporting detail, then action; amounts need explicit signed semantics beyond color. Dynamic Type expands rows and sheet height. Preserve the observed light appearance and native system prompt transitions rather than inventing an unsupported dark theme.

# Anti-generic checklist

- Do not fill intentional white space with promotions, tips, or decorative copy.
- Do not place the purple-magenta gradient behind transaction lists or every card.
- Do not substitute default blue tint, an unstyled `TabView`, or a grouped `Form`.
- Do not add stock finance illustrations, characters, or empty-state scenes.
- Do not flatten amounts, descriptions, dates, and legal copy into one text role.
- Do not rely on green/red alone to communicate transaction direction or outcome.
- Do not apply heavy shadows, glass panels, or one uniform radius to every surface.
- Do not replace native alerts and permission prompts with fake in-app replicas.

</design-context>
