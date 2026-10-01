<design-context>
---
version: 1
platform: iOS
name: OTP-Bank-design-analysis
description: "A pale lavender financial canvas built from broad white rounded surfaces, compact dark type, a restrained lime selection accent, black action controls, persistent lightweight navigation, realistic dark card imagery, and occasional glossy lime-violet 3D objects."
colors:
  canvas: "#F6F5FA"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F1F1F4"
  accent-primary: "#B9F600"
  accent-secondary: "#6D3BE7"
  text-primary: "#1E1E22"
  text-secondary: "#6B6D73"
  divider: "#E4E5EA"
  destructive: "#D83B45"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#1E1E22", text: "#FFFFFF", height: 52, radius: 14}
  finance-card: {fill: "#FFFFFF", radius: 20, padding: 16}
  transaction-row: {iconSize: 40, divider: "#E4E5EA", verticalPadding: 12}
  navigation: {fill: "#FFFFFF", selected: "#9BE000", unselected: "#777980"}
---

# Overview

OTP Bank uses a quiet near-white lavender field as the continuous backdrop for compact, information-dense banking screens. Broad white rounded surfaces organize balances, products, transactions, forms, and utilities without heavy outlines. Lime is highly recognizable but controlled: it marks selection, small status accents, and brand moments, while important submit actions are commonly solid graphite. Dark bank-card photography and occasional glossy lime-violet 3D objects supply the visual mass that a generic stack of text cards would lack.

# Non-negotiable visual invariants

- Keep a pale lavender full-screen canvas behind broad white content surfaces; do not collapse the interface into pure white.
- Use electric lime as a selective brand and active-state accent, not as the fill for every primary button or every large surface.
- Keep decisive actions as compact solid-graphite controls with white labels where the reference uses them.
- Build financial content from wide, softly rounded white cards and clean rows with minimal borders and restrained shadows.
- Preserve the persistent lightweight bottom navigation: five evenly spaced destinations in authenticated views and a simpler three-item variant in guest views, with lime marking the active item.
- Give bank products visible material presence through dark realistic card mockups rather than replacing them with icons or text-only placeholders.
- Present modal tasks in tall white bottom sheets with large rounded top corners over a dimmed or softly blurred view.
- When branded art is used, keep it as soft glossy abstract 3D objects in lime, violet, white, and graphite; do not substitute flat symbols or character illustrations.

# Color and surfaces

The canvas is a cool near-white lavender (`#F6F5FA`), visible around and between cards. Primary content surfaces are white; secondary controls, disabled fields, and quiet groupings use a slightly darker neutral (`#F1F1F4`). Electric lime (`#B9F600`, sometimes visually closer to `#9BE000`) is reserved for the selected tab, check or radio states, small chips, and strong brand cues. Violet is secondary and appears mainly in branded or analytical visual material, not as a competing global action color.

Primary text is almost-black graphite rather than absolute black. Secondary labels use cool gray, and separators are very light gray. Destructive feedback uses a restrained red. Large lime fields should appear only when a real branded composition calls for them; default iOS blue tint, saturated blue links, or indiscriminate green buttons would visibly break the palette. Shadows, when present, are soft and low-contrast; separation usually comes from the white-on-lavender surface change.

# Typography

The hierarchy is compact and utilitarian. Page titles and major monetary values use bold SF Pro Display at roughly 28–32 points, while section headings sit around 20 points and most operational copy remains 14–15 points. Navigation labels and supporting metadata are small, around 10–12 points, without becoming decorative microcopy. Numbers use tabular figures where changing monetary values or codes must align. Text is predominantly left aligned; centered type is reserved for confirmation, rating, and other focused modal states.

Use SF Pro as the iOS-safe family rather than imitating an unavailable brand face. Preserve hierarchy under Dynamic Type by allowing labels and supporting text to wrap, keeping major values on their own line, and letting cards grow vertically. Do not equalize title, balance, field label, and metadata sizes: the reference depends on a sharp but economical contrast between strong amounts/headings and quiet operational text.

# Screen composition

Typical screens divide into a compact top region of roughly 8–12%, a dense scrollable content region of about 75–82%, and a persistent navigation or action region near the bottom. Horizontal insets are usually about 16 points. The top may contain a centered wordmark or title with sparse utility controls; it does not become a large marketing header. Main cards are nearly full width and separated by 10–16 points, with larger 24-point gaps between conceptual groups.

Observed archetypes include:

- **Account overview:** compact header, stacked balance and product surfaces, visible dark card mockup or financial summary, then shorter utility or transaction rows above the tab bar.
- **Transfer or data-entry task:** a short title, segmented or contextual selector, broad rounded fields, focused choice rows, and a full-width graphite action anchored near the lower safe area.
- **History or searchable list:** compact header and search/filter controls followed by dense white transaction rows with circular outlined leading marks, primary labels, secondary metadata, and aligned amounts.
- **Map utility:** map occupies the primary visual field, with compact search/filter controls and white floating or sheet surfaces layered above it.
- **Focused modal task:** the underlying screen remains recognisable beneath a darkened layer while a white large-radius bottom sheet contains the title, choices, rating control, or confirmation.
- **Guest or onboarding surface:** sparse brand-led top area, a single dominant action or authentication block, and a reduced three-item navigation treatment where shown.

Use vertical scrolling for content that exceeds compact devices; do not shrink type or card contents to force an entire financial dashboard above the fold.

# Navigation appearance

The authenticated bottom bar is a clean white strip with five evenly spaced thin-line icons and small labels. The selected destination uses lime while inactive items remain neutral gray; the bar is visually quiet and does not float as a translucent pill. Guest views show a visually related reduced three-item bar. This describes appearance only and must not be copied as product information architecture.

Navigation bars are compact, usually with a plain back chevron or close control and a centered or left-aligned title. Bottom sheets use white fill, a pronounced 28-point top radius, a small grabber when appropriate, and a dimmed or blurred backdrop. Selected segmented items, radios, and chips use lime in small areas. Avoid default blue back buttons, oversized circular navigation buttons, and an unstyled `TabView` appearance.

# Components

- **Primary action:** about 52 points high, full or nearly full width, graphite fill, 14-point radius, centered semibold white label, and no decorative icon unless the action requires one. Disabled state becomes a lower-contrast neutral rather than lime.
- **Financial card:** wide white surface with roughly 16-point padding and 20-point radius. It groups one dominant amount or product, concise metadata, and optional realistic card imagery. Borders are absent or hairline-light; shadow is subtle.
- **Product card mockup:** dark, realistic rectangular card with controlled highlights, bank marks, and readable masked details. It is an image-like material object, not a generic rounded rectangle filled with a gradient.
- **Transaction row:** compact vertical rhythm, 40-point outlined or branded circular leading mark, stacked title and metadata, aligned trailing amount or status, and a light divider that starts after the leading mark.
- **Choice row:** broad white or neutral rounded row with a concise label and trailing chevron, radio, or check. Lime marks the selected control but does not flood the entire row.
- **Search field:** quiet neutral pill with a small leading search icon and compact placeholder; it should not introduce a blue focus ring.
- **Segmented control or chip group:** low-height rounded items with neutral backgrounds and a clearly differentiated lime or dark selected state. Keep labels short.
- **Bottom sheet:** large white rounded surface with 16–20 point horizontal padding, clear title hierarchy, vertically stacked choices, and a lower action when needed.

# Imagery and icons

Bank-card imagery is compositionally important on product and account surfaces: use realistic dark card mockups at a scale large enough to establish material presence. Do not omit them while waiting for final assets or replace them with a credit-card SF Symbol. Branded illustration, when present, uses glossy abstract 3D objects in lime and violet with soft lighting; follow `illustrations.md` for its production constraints.

Operational icons are simple, thin, and predominantly monochrome. They sit in consistent small frames or light outlined circles rather than a random mix of filled SF Symbols. Maps remain visually subordinate to white search and sheet surfaces. Charts and analytics use restrained color with violet or lime accents instead of multicolor defaults.

# States

Observed states include sparse guest/onboarding access, PIN entry with a numeric keypad, populated account overview, a copied-value toast, transfer entry and success, transaction history, map search, chat with a raised keyboard and sheet, disabled notifications, and rating sheet followed by success feedback. Across these states, the lavender canvas, broad white surfaces, compact dark type, lime selection accent, and graphite actions remain stable.

Focused inputs retain the system keyboard and clear caret while adopting the app's neutral rounded field. Success is communicated with a concise confirmation and branded visual rather than a new full palette. Modal states preserve context by dimming the underlying screen. Do not invent error, permission, dark-mode, or skeleton styling beyond the evidence; derive those states conservatively from the same surface and hierarchy rules.

# iOS adaptation

Keep the lavender canvas behind safe areas and allow headers, scroll content, and bottom navigation to occupy their native regions. Use `ScrollView` or an appropriate native list container with custom row styling; do not use visually default `Form` sections. Bottom actions and tab bars must clear the home indicator. When the keyboard appears, keep the active field and its submit action visible through scroll-to-focus or keyboard-safe inset handling.

Maintain at least 44-point hit targets even where the visible icons are thin and compact. VoiceOver order should follow the visible hierarchy: title or amount, supporting metadata, then actions. Group card details into useful accessibility elements while keeping distinct actionable rows separate. Under Dynamic Type, let cards and sheets grow and let secondary labels wrap; never clip balances, status, or action labels. On compact widths, retain 16-point margins and reduce decorative-image crop before reducing type. The sampled evidence is light appearance; do not claim an observed dark theme. If a dark appearance is required, preserve semantic contrast and material hierarchy rather than mechanically inverting the branded lime and card assets.

# Anti-generic checklist

- Do not replace the lavender canvas and wide white surfaces with a generic pure-white card stack.
- Do not use default iOS blue tint for links, selection, progress, or navigation.
- Do not turn every important action lime; preserve graphite primary actions and use lime selectively.
- Do not ship an unstyled `TabView`, generic `Form`, default list separators, or stock grouped settings layout.
- Do not replace dark bank-card mockups or glossy branded artwork with arbitrary SF Symbols, emoji, or gradients drawn in code.
- Do not give every component the same corner radius; distinguish controls, cards, pills, and sheets.
- Do not add mood-setting or duplicative copy where amounts, state, labels, and actions already establish the context.
- Do not make the interface airy like a marketing page; retain the observed compact financial density and aligned metadata.

</design-context>
