<design-context>
---
version: 1
platform: iOS
name: Raiffeisen-design-analysis
description: "A high-key banking interface with white and pale-gray task surfaces, bold dark financial values, unmistakable signal-yellow actions, compact five-item navigation, charcoal product cards, and pastel hand-drawn campaign imagery."
colors:
  canvas: "#F7F7F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EFEFF1"
  accent-primary: "#FFE500"
  accent-secondary: "#292A30"
  text-primary: "#292A30"
  text-secondary: "#74757C"
  divider: "#E3E2E4"
  destructive: "#E3535C"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
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
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.control}", minHeight: 52}
  account-card: {backgroundColor: "{colors.accent-secondary}", textColor: "{colors.surface-primary}", cornerRadius: "{rounded.card}", padding: "{spacing.card-padding}"}
  quick-action: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.control}", minHeight: 64}
  transaction-row: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", minHeight: 56}
  amount-entry: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.card}", padding: 20}
  navigation: {backgroundColor: "{colors.surface-primary}", selectedColor: "{colors.text-primary}", unselectedColor: "{colors.text-secondary}"}
---

# Overview

Raiffeisen is a bright banking interface in which white space and pale-gray groups make dense financial tasks approachable. Bold dark amounts lead the hierarchy, signal yellow marks decisive actions and brand moments, and charcoal cards provide occasional strong contrast. Pastel promotional fields and hand-drawn financial imagery warm the interface without competing with balances, transaction rows, or form values.

# Non-negotiable visual invariants

- White and very light gray occupy most of the viewport; yellow is concentrated in primary actions and distinct brand moments.
- Financial amounts are the strongest text, followed by product or task labels, then muted context and metadata.
- Primary actions are wide yellow rectangles with dark centered labels and sit clearly above the bottom safe area.
- Compact shortcuts use small monochrome icons in pale rounded wells rather than colorful filled tiles.
- Transfer and payment compositions place source context above an oversized centered amount and numeric keypad.
- Pastel campaign cards and illustrations remain visually separate from transactional data surfaces.
- Bottom navigation uses a white base, dark selected icon, gray inactive icons, and restrained notification badges.

# Color and surfaces

The working canvas is white or a barely gray neutral. White cards carry accounts, lists, documents, sheets, and forms; pale gray groups shortcuts, inactive controls, and secondary rows. Signal yellow fills primary CTAs, splash fields, and selected brand emphasis. Dark charcoal appears in primary text, account/source cards, scanners, and compact logo marks. Lavender, mint, peach, blue, and pink are confined mainly to campaign or educational cards. Medium gray carries descriptions, dates, secondary account information, and inactive icons. Green and red indicate real financial outcomes; red also marks destructive actions. Default iOS blue for primary CTAs, broad yellow page backgrounds outside explicit brand moments, or multicolored transactional cards would break the reference.

# Typography

Use SF Pro Display and SF Pro Text. Large financial totals and amount entry occupy roughly 28–34 points in bold; page titles are around 24–28 points; section headings and product labels use 17–20 points in semibold; row labels and body text are around 14–16 points; dates, rates, and explanations sit around 11–13 points in gray. Amounts should use tabular figures where columns or changing values align. Text is predominantly left aligned, while amount entry and result messaging may center the main value. Dynamic Type should wrap account context and row metadata before reducing the prominence of the amount or primary action.

# Screen composition

Most screens use a safe-area-aware white or pale-gray vertical scroll with 16-point side insets, compact top chrome, grouped content, and either a bottom navigation bar or sticky action. Dashboard archetypes place a balance or title near the top, a row of compact quick actions, horizontally scrolling pastel promotions, then account and product rows. List archetypes use full-width rows with a leading merchant, bank, or category icon and a trailing amount or disclosure. Amount-entry archetypes place one or two compact source cards above a large centered value, quick chips, numeric keypad, and fixed yellow confirmation action. History archetypes pair filter pills or date controls with dense transaction rows and quiet summaries. Scanner archetypes invert to a dark camera field with a light framing overlay. Result archetypes use a large white sheet, centered illustration or status mark, concise details, and one or two bottom actions. Documents, calendars, SMS codes, and confirmations appear in focused sheets or full-height task screens.

# Navigation appearance

Top bars are minimal, with a plain back chevron, compact centered title, and occasional right-side overflow or action symbol. The bottom bar is white with five evenly spaced icon-and-label items; selected content is dark, inactive content is gray, and small blue badges can indicate attention. Sticky yellow actions remain above the home indicator with clear side margins. Modal sheets use a dim overlay, white panel, large top corners, and compact title row. Scanner chrome is dark but preserves the same safe-area spacing and small outline controls.

# Components

Account and source cards use white or charcoal rounded rectangles with a prominent amount, short account label, masked details, and compact card thumbnail. Quick actions are pale rounded tiles with a monochrome icon above a short label. Primary buttons are wide signal-yellow fills with dark semibold text; disabled buttons retain geometry but become muted gray or low-contrast yellow. Transaction rows combine a small rounded merchant/category mark, two-level text, and right-aligned signed amount. Bank lists use recognizable small logos inside consistent wells. Filter and date controls are short neutral pills with a darker selected state. Amount entry uses an oversized centered number, quick-add chips, and a large clean keypad. Confirmation sheets use segmented code fields or large input, concise context, and the same bottom action. Success sheets combine a centered illustration or symbol, strong result title, and restrained detail rows.

# Imagery and icons

Authored imagery appears in onboarding, promotions, subscription panels, success results, and financial education. It uses hand-drawn outlines, yellow/black anchors, pastel fields, and a single financial metaphor. These visuals can occupy a substantial portion of a banner or result sheet and cannot be omitted while final assets are pending. Card thumbnails and financial object art are compact product identifiers. Partner and bank logos remain third-party marks rather than illustration variants. Profile or support avatars may use photography. Functional icons are simple monochrome line symbols in consistent rounded wells. Keep illustration away from balances, key form values, and dense transaction lists.

# States

Empty history uses a centered low-emphasis icon and short text on the same light canvas. Selected filters or product routes gain a darker or yellow emphasis without changing structure. Disabled confirmation actions lower contrast and remain fixed in place. Face ID, push, and contacts requests appear as native permission transitions or focused prompts. Logout uses a native-style alert. Scanner states invert the canvas to dark camera content while retaining light controls. Modal tasks dim the underlying screen and use a white rounded sheet. Toast confirmation may overlay a completed result. No strong custom error composition was observed; unobserved errors should stay local to the affected field or result and use red without recoloring the whole screen.

# iOS adaptation

Extend the current white, yellow, or scanner-dark field through its appropriate safe areas. Put dashboards, histories, and long settings lists in vertical scroll containers while keeping bottom bars and sticky actions above the home indicator. Keep amount, source cards, keypad, and confirmation action together on compact heights by allowing supporting explanations to scroll first. Present calendars, SMS confirmation, permission requests, documents, and alerts with native behavior but preserve the observed surface and accent styling. Maintain at least 44-point targets around compact quick actions, tabs, filters, chevrons, and scanner controls. VoiceOver order should follow screen title, source/account context, amount, supporting detail, then primary action. At accessibility text sizes, reduce shortcut columns or stack source cards rather than truncating essential labels.

# Anti-generic checklist

- Do not replace signal-yellow primary actions with default system blue.
- Do not spread yellow across every page or transactional card.
- Do not turn the dashboard into uniform white cards with identical radii and shadows.
- Do not place promotional illustration behind balances, keypad values, or transaction text.
- Do not make every shortcut a different bright color.
- Do not use an unstyled `TabView`, visible default `Form`, or arbitrary SF Symbols.
- Do not shrink amount values until they compete with labels and metadata.
- Do not remove campaign or result imagery where it forms a major visual mass.

</design-context>
