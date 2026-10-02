<design-context>
---
version: 1
platform: iOS
name: Home-Credit-Bank-design-analysis
description: "A restrained white banking interface with dark high-contrast actions, red-magenta navigation accents, pale grouped surfaces, large financial numerals, and compact native-like controls."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F4F6"
  accent-primary: "#EB0A46"
  accent-secondary: "#171B24"
  text-primary: "#15171B"
  text-secondary: "#85878C"
  divider: "#E5E6E9"
  destructive: "#D9343E"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 42}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  dark-primary-action: {fill: "#171B24", text: "#FFFFFF", shape: "full-width rounded rectangle"}
  magenta-navigation-accent: {fill: "#EB0A46", role: "selected or floating action"}
  finance-summary-card: {fill: "#F3F4F6", value: "large", supporting: "muted"}
  product-card: {fill: "#FFFFFF", artwork: "prominent bank-card visual", corners: "rounded"}
  rounded-tab-bar: {fill: "#FFFFFF", selected: "red-magenta", unselected: "gray"}
---

# Overview

Home Credit Bank uses a restrained, high-clarity banking language. White dominates, pale gray groups secondary controls, and dark navy-black creates decisive primary actions. Red-magenta accents identify selected navigation and distinctive floating controls, while product-specific cyan or card artwork supplies occasional larger color fields. Large balances and transaction values establish hierarchy without decorative typography.

# Non-negotiable visual invariants

- White is the continuous primary canvas; pale gray groups controls and summaries without turning every section into an elevated card.
- Primary actions are commonly dark, full-width rounded controls with white text rather than default system-blue buttons.
- Red-magenta is a focused navigation and action accent, not a full-screen background color.
- Financial values are larger and heavier than their labels, metadata, and helper text.
- Bottom navigation is a rounded light surface with a clearly accented selected item and compact icon-label pairs.
- Modal decisions use rounded bottom sheets with a dim backdrop, centered grabber, and a strong lower action.
- Product and finance screens mix quiet lists with a small number of prominent visual objects such as a card artwork, numeric summary, or chart.
- Form controls, chips, segmented selectors, and list rows share compact spacing and soft geometry while retaining clear 44-point interaction areas.

# Color and surfaces

The canvas and most content surfaces are white. Very light gray separates fields, segmented controls, summary blocks, and sheet content. Near-black or dark navy is used for primary buttons and strong text. Red-magenta marks selected navigation, floating actions, and brand emphasis. Some product-opening surfaces introduce bright cyan-blue as a local accent, while card artwork can carry richer gradients. Green and red are reserved for positive and negative financial values. Disabled controls shift toward low-contrast gray.

Borders and separators are subtle neutral gray; shadows are limited to floating or layered navigation surfaces. Generic blue buttons, saturated backgrounds behind every section, or decorative gradients on ordinary forms would conflict with the observed restraint.

# Typography

Centered navigation titles are compact and semibold. Screen headings and section labels are larger and left-aligned, while balances, totals, exchange values, and transaction amounts use the strongest size and weight. Supporting dates, account details, helper copy, and secondary values are smaller and gray. Buttons use semibold centered labels; list rows favor concise single- or two-line text.

Use SF Pro Display for prominent titles and numeric summaries and SF Pro Text for controls and body copy. Preserve the difference between primary values, row labels, and metadata under Dynamic Type. Allow descriptions and account names to wrap, and keep amounts legible without shrinking them into caption scale.

# Screen composition

Most screens begin with a safe-area-aware top bar containing a compact back or utility control and a centered title. Main content scrolls vertically with approximately 16-point side insets. The bottom is occupied by either a rounded navigation bar or a pinned full-width action. White space is generous, but related finance rows remain vertically compact.

Dashboard archetype: a light top utility row leads into product or balance summaries, quick-action tiles, transaction previews, and a rounded bottom navigation surface.

Form archetype: a concise title is followed by pale-gray inputs, chips or selectors, contextual helper text, and a wide dark action pinned or placed low in the scroll content. A numeric keypad may occupy the lower screen for amount entry.

Product-detail archetype: bank-card artwork or a financial summary becomes the focal object, followed by values, action controls, and grouped detail rows.

History or finance archetype: segmented controls or filters precede compact transaction rows and large summary values; charts use a limited supporting role.

Settings archetype: white rows with icons, labels, chevrons, toggles, or reorder handles are grouped by spacing and pale surfaces rather than heavy card shadows.

# Navigation appearance

Top navigation bars are visually quiet with compact back controls and centered titles. The home-level bottom bar is a rounded white floating or inset surface; selected icon and label use red-magenta while inactive items use dark gray or muted gray. A distinct circular or strongly accented action may interrupt the bar rhythm. Bottom sheets have a dim scrim, large top corners, and a small grabber. Pinned CTAs are visually separate from navigation and respect the bottom safe area. Product routes or tab meanings are not part of this visual specification.

# Components

Primary actions are wide dark rounded rectangles with white semibold labels; disabled versions use gray fill and reduced text contrast. Secondary or product-specific actions may use bright cyan-blue or pale neutral fill while keeping the same strong geometry. Inputs are tall pale-gray rounded rectangles with clear labels, restrained placeholders, and validation or helper text below.

Finance summary cards use pale surfaces, large values, smaller gray annotations, and minimal borders. Transaction rows combine a compact leading icon or mark, a two-level label stack, and a trailing amount whose green, red, or dark color carries state. Chips and segmented controls are low, rounded, and tightly padded. Product cards give bank-card artwork adequate width instead of reducing it to a thumbnail. Settings rows use simple icons, chevrons, switches, or reorder handles with full-width tap targets.

# Imagery and icons

Imagery is functional and selective. Bank-card artwork is the main authored visual object and may use gradients or branded color fields. A circular photo or mark can anchor entry screens. Flags support exchange-rate lists, a donut chart summarizes finance data, and a compact assistant avatar identifies conversational content. These elements remain subordinate to financial hierarchy except when the product card is the screen's focal point.

Icons are simple, mostly monochrome, and consistently weighted. Avoid arbitrary SF Symbol mixtures, especially where a bespoke navigation mark or product artwork is visible. The sampled screens do not establish a standalone narrative illustration system, so do not invent character scenes as a required part of this style.

# States

Observed states include entry and sign-in, populated dashboard, product opening, card detail, amount entry with keypad, phone transfer, mobile top-up, finance summaries, transaction lists and details, payments, offers, assistant chat, exchange rates, profile, notifications, support, customization, selected segments, toggles, and modal sheets. Enabled actions gain dark or saturated fill; disabled actions become gray while retaining size and position. Positive and negative transaction values change semantic color without altering row structure.

# iOS adaptation

Use safe-area-aware scroll containers with fixed overlays only for the rounded tab bar or genuinely pinned actions. Native sheets may provide motion and dismissal, but their content, corner radius, dimming, grabber, and spacing should match the reference. Let the keyboard or numeric keypad coexist with amount-entry content without hiding the primary value or action. Provide 44-point targets for compact icons, chips, toggles, and row controls.

VoiceOver order should follow title, primary value, contextual controls, content rows, then pinned action or bottom navigation. Dynamic Type should expand rows and forms while preserving the numeric hierarchy. On narrow iPhones, allow quick actions and product cards to reflow rather than compress labels below legibility. Keep system permission and authentication transitions native, returning to the same restrained surface system afterward.

# Anti-generic checklist

- Do not use default blue tint as the universal action or navigation color.
- Do not turn the dashboard into a stack of identical white cards with strong shadows.
- Do not ship an unstyled `TabView`, `Form`, `List`, or default grouped settings screen.
- Do not give balances, labels, helper text, and transaction metadata nearly identical sizes.
- Do not replace card artwork, flags, chart, or assistant avatar with unrelated SF Symbols.
- Do not use oversized back controls or a large web-style header.
- Do not add decorative prose that repeats the meaning of visible balances, statuses, or actions.
- Do not apply one corner radius and one fill to buttons, sheets, chips, inputs, and navigation.

</design-context>
