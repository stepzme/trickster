<design-context>
---
version: 1
platform: iOS
name: Emma-design-analysis
description: "A two-register finance interface pairing cinematic near-black plum entry screens and glossy imagery with a pale grey working canvas, softly raised white cards, compact rounded type, vivid violet actions, and a five-item bottom bar."
colors:
  canvas: "#F6F6FA"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEEFF4"
  accent-primary: "#9D2CFF"
  accent-secondary: "#EAD7FA"
  text-primary: "#17151B"
  text-secondary: "#77747F"
  divider: "#E5E4EA"
  destructive: "#D84E67"
typography:
  hero: {fontFamily: "SF Pro Rounded", fontSize: 38, fontWeight: 700, lineHeight: 42}
  title: {fontFamily: "SF Pro Rounded", fontSize: 30, fontWeight: 700, lineHeight: 35}
  section: {fontFamily: "SF Pro Rounded", fontSize: 21, fontWeight: 600, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 17}
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
  primary-action: {fill: "violet", shape: "full-width pill", text: "white semibold"}
  secondary-action: {fill: "soft neutral or plum", shape: "pill", text: "context-contrast"}
  primary-card: {fill: "white", shape: "soft rounded rectangle", elevation: "low diffuse"}
  navigation: {fill: "white", active: "violet icon and label", inactive: "muted grey"}
---

# Overview

Emma separates atmospheric entry moments from practical money management. Entry and subscription screens are dominated by a near-black plum field, bright violet controls, white type, and large glossy objects. Everyday screens switch to a very light grey canvas with softly rounded white modules, compact financial rows, pastel category marks, and restrained charts. This deliberate dark-to-light shift is more distinctive than any individual card.

# Non-negotiable visual invariants

- Preserve the dark plum, image-led register for entry or premium moments and the pale card-based register for working screens.
- Violet is the sole dominant action and selection color; do not introduce default iOS blue.
- Working screens use a pale grey canvas with discrete white cards rather than one continuous white page.
- Amounts and primary metrics are visually stronger than category, time, or account labels.
- Cards have soft medium-to-large radii and low diffuse separation, never heavy outlines or hard shadows.
- Dense financial content stays compact and left-aligned while outer screen spacing remains generous.
- Bottom navigation keeps icons and labels visible, with violet active state and muted inactive items.

# Color and surfaces

The working canvas is cool near-white grey, allowing pure white cards to remain visible without borders. Secondary fields, disabled controls, and progress tracks use deeper cool grey. Saturated violet identifies primary actions, selection, links, and key progress; pale lilac supports selection without competing with values. Primary text is near black, supporting context is medium grey, and fine dividers appear only inside dense groups.

Entry and premium screens invert the system: very dark aubergine fills the viewport, white type becomes primary, and violet may expand into a luminous gradient or glow. Mint and pink are small categorical accents. Default blue controls, beige grouped backgrounds, and solid black card borders break the reference.

# Typography

Large statements and major totals use a rounded heavy sans with clear scale contrast; section headings are bold but materially smaller. Financial rows use compact neutral sans, with tabular-looking numerals and amount-first hierarchy. Supporting copy is short, grey, and lower contrast. Entry statements may be centered around imagery; operational lists and forms are left-aligned.

Use SF Pro Rounded for expressive headings and SF Pro Text for data and controls. Map the largest total or statement to large title, section labels to title 3/headline, row titles to body or callout, and metadata to caption. With Dynamic Type, preserve amount-before-context reading order, let explanations wrap, and let cards grow vertically rather than shrinking key figures.

# Screen composition

Working screens use a single scrollable column with about 16-point outer insets, 12–16-point card interiors, and 20–24-point gaps between major groups. The top carries page identity or a key metric; the middle sequences account, transaction, budget, savings, or payment modules; the bottom stays clear of persistent navigation. Some overview modules form paired tiles or horizontal card runs, but each remains one-purpose.

Observed archetypes include a dark single-message entry screen with a large central visual and bottom pill action; a pale overview with summary cards and recommendations; dense histories of icon-led rows and quiet separators; chart/progress cards with a strong metric above subdued annotation; and settings or forms made from grouped rows, toggles, numeric fields, and sheets. Keyboard-present screens keep the active field and action visible.

# Navigation appearance

The bottom bar is white and visually light, with five compact icon-and-label items. Active icons and labels are violet; inactive items are grey, and small notification dots may sit beside an item. Detail screens use restrained back affordances and compact titles. Sheets are white with large top radii and retain the violet action language. This defines appearance only, not routes or information architecture.

# Components

Primary actions are wide violet pills with white semibold labels; disabled actions become low-contrast grey rather than outlined. Secondary actions are quiet pills or violet text. White primary cards have low elevation, 12–16-point internal spacing, and no heavy stroke.

Financial rows combine a small pastel icon tile, compact title/context stack, and right-aligned amount or status. Charts and progress bars emphasize violet against pale tracks. Inputs remain integrated with surrounding cards even when the keyboard is native. Toggles use violet tint. Selected chips use lilac fill; destructive rows use restrained red text or icon, not a full red card.

# Imagery and icons

Dark entry screens use large glossy 3D objects or small object scenes as the primary visual mass, often centered with violet/pink lighting and generous empty space. Working screens rely on small pastel category icons, restrained charts, and occasional imagery inside rounded containers. Hero objects may occupy a quarter to a third of a screen, while row icons remain compact.

The occasional 3D promotional motif is not a mandatory universal illustration system. Preserve imagery where the sampled composition depends on it; a placeholder must retain crop, scale, palette, and visual weight until the final asset is approved.

# States

Observed states include selected and inactive tabs, enabled violet and disabled grey actions, populated financial lists, progress and chart states, native keyboard entry, toggles, and modal sheets. Positive states use restrained green; negative amounts, errors, and destructive actions use muted red. Across states retain the pale canvas, white card geometry, amount-first hierarchy, and violet selection language.

# iOS adaptation

Extend the pale or plum canvas through safe areas while keeping content within readable insets. Use vertical scrolling for card stacks and histories, and reserve the lower safe area for navigation or bottom actions. Sheets use native presentation with documented surface, radius, and typography. Keep fields visible above the keyboard and return to the same visual context after system permission UI.

Controls and row actions need at least 44-point targets. VoiceOver announces label, context, then amount/status. Dynamic Type may increase card and row height without collapsing amounts or actions. Preserve the observed light working appearance and dark entry register rather than inventing an all-screen dark theme.

# Anti-generic checklist

- Do not flatten dark entry and pale working registers into one generic theme.
- Do not replace the pale canvas and discrete cards with `Form` or a uniform white stack.
- Do not use default blue tint, unstyled `TabView`, or arbitrary SF Symbols as the identity.
- Do not give every card, input, chip, and sheet the same radius.
- Do not remove compositionally important hero imagery from dark entry screens.
- Do not enlarge explanatory copy until it competes with totals and primary actions.
- Do not add decorative financial copy that repeats visible metrics or labels.

</design-context>
