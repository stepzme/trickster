<design-context>
---
version: 1
platform: iOS
name: Profi-ru-design-analysis
description: "A white service marketplace with vivid red commitments, oversized black questions, pale gray inputs, spacious one-question sheets, black line illustration, and selective portrait photography."
colors: {primary: "#F21846", on-primary: "#FFFFFF", primary-disabled: "#F08A9E", ink: "#101114", ink-muted: "#797C82", ink-subtle: "#AFB2B8", canvas: "#FFFFFF", surface: "#F6F7FA", surface-strong: "#ECEEF2", border: "#E8E9ED", selected: "#111214", success: "#39B773", overlay: "#161719"}
typography:
  display: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 600, lineHeight: 33, letterSpacing: -0.5}
  question: {fontFamily: SF Pro Display, fontSize: 22, fontWeight: 600, lineHeight: 26, letterSpacing: -0.2}
  section: {fontFamily: SF Pro Text, fontSize: 18, fontWeight: 600, lineHeight: 23, letterSpacing: 0}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 500, lineHeight: 19, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 19, letterSpacing: 0}
  metadata: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 16, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 500, lineHeight: 19, letterSpacing: 0}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, section: 32}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, sheet: 22, pill: 9999}
components:
  primary-action: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", minHeight: 48, padding: [12, 18]}
  answer-row: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", minHeight: 44, padding: [10, 0]}
  text-input: {backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [14, 16]}
  task-sheet: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", rounded: "{rounded.sheet}", padding: 20}
  information-tile: {backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12}
  sticky-action: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
---

# Overview

The observed Profi.ru experience alternates between an airy marketplace home and an intensive task brief. White and near-white surfaces dominate. Black type carries almost all hierarchy, while vivid red is reserved for brand identity and the next meaningful commitment. Large questions, sparse answer lists, pale inputs, and persistent task actions make a long questionnaire feel like a sequence of small decisions.

The transferable language is the one-decision hierarchy, surface economy, restrained accent, and pairing of line art with real portraits. Cleaning, specialists, orders, and proposals are examples from the source rather than mandatory entities for another product.

# Non-negotiable visual invariants

- White is the dominant canvas; pale cool gray is reserved for inputs, helper tiles, and inactive controls.
- Vivid red is concentrated in brand identity and the primary commitment, not spread across passive content.
- Task questions are large, black, and visually isolated from their answer choices.
- Focused task steps use a white sheet over a darkened source context with a visible grabber.
- Answer rows remain flat and spacious; selection controls sit at the trailing edge.
- The primary progression action remains available while the current question scrolls or the keyboard appears.
- Marketplace education combines black line illustrations with portrait photography of real specialist categories.
- Shadows are minimal; separation comes from surface contrast, rounded silhouettes, and whitespace.

# Color and surfaces

White fills both the general canvas and the active questionnaire sheet. The home uses a faint cool-gray field behind educational tiles and portrait cards, while inputs use a slightly stronger gray fill. Thin borders are rare and low contrast. A charcoal scrim separates a focused task from the source screen; later order screens may use a dark textured or photographed header behind a large white content sheet.

Red provides the wordmark, full-width commitment controls, publishing progress, and a strong confirmation surface. Disabled red actions shift to a muted rose rather than disappearing. Black is used for headings, chosen controls, and important values. Gray carries hints, counts, explanations, and unavailable answers. Green appears locally for online or published status.

# Typography

The typography is a neutral iOS sans with strong Cyrillic and unusually prominent questions. Use SF Pro as the implementation substitute. A home message may use a 30-point semibold display treatment; questionnaire prompts use about 22-point semibold; section titles use 18-point semibold; answer labels and buttons sit around 14–15 points; helper text and specialist counts use 12-point regular text.

Text remains direct and functional. Long questions wrap across multiple lines with stable leading. Explanations can expand beneath a selected answer rather than forcing the user into a separate detail view. Dynamic Type should add vertical space and allow the action area to remain reachable; never reduce a long question or answer below readable body size to keep the original viewport count.

# Screen composition

The home begins with location and identity, then a large proposition, search, an authored hero scene, and a strong task action. Below it, horizontal portrait cards and a two-column or mixed-width grid explain how the service works. These educational modules use real content and image roles; they are not generic placeholders.

The service catalog is much plainer: search, a section title, and a vertically spaced list with quiet counts. Starting a task opens a large white sheet over a dimmed context. The sheet gives its upper region to one question and the middle to answers or one input. Back and progression controls occupy a persistent lower action area. When the system keyboard appears, the question and focused input remain visible above it.

The task summary returns to the originating task context and groups answers as pale fields. Publishing can temporarily replace most of the screen with red progress feedback. The resulting order uses a dark contextual header and large white sheets for status and specialists. Preserve these compositional modes only when the adapted product has equivalent phases; do not copy an order dashboard into an unrelated flow.

# Navigation appearance

The observed core has no visible persistent tab shell. Users enter tasks from search, categories, or the primary task action. Focused task steps are presented as sheets and expose Back and Next as task controls rather than global navigation.

The home keeps identity and location controls quiet. The questionnaire uses a grabber and may expose a compact overflow action in the task context. After publication, a concise status remains associated with the task and drill-down sheets expose relevant records. An adapted product can use persistent destinations if its architecture requires them, but should not add a tab bar merely to imitate a marketplace convention absent from the observed core.

# Components

The primary action is a wide red rounded rectangle with white medium-weight text. Disabled state uses a muted rose fill. In questionnaires, the next action shares the lower action area with a text-only back action. Publishing uses the same red at a much larger scale to communicate an in-progress commitment.

Search and free-text inputs use pale gray fill, no strong border, and generous internal padding. Answer lists use flat rows with a trailing checkbox or radio control. Selected controls become black and may reveal helper copy under the chosen answer. Specialist availability appears as a compact count before the question.

Educational tiles use pale-gray rounded surfaces with short headings and reserved illustration space. Portrait cards use a large photograph, a tinted backdrop, and text over the lower image area. Order summaries use stacked pale fields; specialist records use avatar, name, ratings, status, and a local disclosure or contact action within a large white sheet.

# Imagery and icons

The imagery system has two clear roles. Black line drawings explain service concepts and support the home proposition, educational tiles, and feedback prompts. Portrait photography represents actual specialist categories and people, often against soft lavender, mint, blue, or blush backgrounds. A task context may also use a subtle full-width photographic or textural header.

Ordinary controls—back, search, location, calendar, currency, close, disclosure, and selection—remain simple system-style line icons. Do not reinterpret them as product illustrations. Illustration and photography need explicit reserved space; removing either from the home would materially change its visual balance.

# States

Observed states include launch, phone entry disabled and enabled, code entry, populated home, service catalog, search suggestions, unselected and selected answers, contextual answer explanation, free-text and numeric keyboards, map-based address choice, completed task summary, publishing progress, published status, specialist-review progress, populated specialist results, and hidden-order recovery.

Selection updates the current answer locally and may disable conflicting options. Keyboard states preserve the focused field. Counts can update between questions as the task narrows. Publishing uses explicit progress, then replaces it with a confirmed status and continued waiting or results. Hiding an order preserves a clear recovery action instead of making the content disappear without explanation.

# iOS adaptation

Use safe-area-aware custom sheets rather than a default grouped `Form`, because the observed hierarchy depends on a large continuous white surface, isolated question, and persistent action area. Integrate the correct native keyboard for phone, verification, numeric, and free-text input. Keep the focused input visible and restore the question after keyboard dismissal.

Rows and selection controls need at least 44-point hit areas. VoiceOver should announce specialist count, question, answer label, selection state, and any revealed explanation in that order. Multi-select groups must identify whether more than one answer is allowed. Dynamic Type should expand the sheet and permit scrolling while keeping progression reachable. Maps remain standard interactive map content with an accessible address alternative.

# Anti-generic checklist

- Do not display the full questionnaire as one long form; retain one focused decision at a time.
- Do not use red for every link, icon, badge, or passive heading.
- Do not replace the home imagery with a grid of arbitrary SF Symbols or generic service icons.
- Do not turn flat answer rows into individually elevated cards.
- Do not add promotional filler to the questionnaire's intentionally open space.
- Do not approve the image-led home while required line art or portrait assets are missing.

</design-context>
