<design-context>
---
version: 1
platform: iOS
name: Calculator-design-analysis
description: "A full-screen black numeric workspace with an oversized right-aligned white display above a fixed lower keypad of charcoal, light-gray, and orange controls, using scale, strict circular geometry, and operator-state inversion as its entire visual hierarchy."
colors:
  canvas: "#000000"
  surface-primary: "#333333"
  surface-secondary: "#A5A5A5"
  accent-primary: "#FF9F0A"
  accent-secondary: "#FFFFFF"
  text-primary: "#FFFFFF"
  text-secondary: "#000000"
  divider: "#000000"
  destructive: "#FF453A"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 88, fontWeight: 300, lineHeight: 94}
  title: {fontFamily: "SF Pro Display", fontSize: 44, fontWeight: 400, lineHeight: 50}
  section: {fontFamily: "SF Pro Text", fontSize: 30, fontWeight: 400, lineHeight: 36}
  body: {fontFamily: "SF Pro Text", fontSize: 24, fontWeight: 400, lineHeight: 30}
  label: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 500, lineHeight: 22}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 0
  control-gap: 12
rounded:
  control: 999
  card: 0
  sheet: 14
  pill: 999
components:
  primary-action: {shape: "circle", fill: "#FF9F0A", foreground: "#FFFFFF"}
  secondary-action: {shape: "circle", fill: "#A5A5A5", foreground: "#000000"}
  primary-card: {shape: "none", fill: "#000000", foreground: "#FFFFFF"}
  navigation: {appearance: "absent", canvas: "#000000"}
---

# Overview

Calculator is a nearly featureless black field whose visual identity comes from one enormous numeric line and a disciplined keypad. The upper portion remains open and quiet, while the lower portion forms a dense five-row control block: charcoal digits, light-gray utility actions, and an uninterrupted orange operator column. There are no cards, headings, decorative surfaces, or persistent navigation elements to compete with the calculation.

# Non-negotiable visual invariants

- Pure black fills the viewport continuously behind the status bar, display, keypad, and home indicator.
- The current value is a single oversized, light-weight white line aligned to the trailing edge immediately above the keypad.
- The keypad is a stable four-column by five-row grid occupying roughly the lower half of the portrait screen.
- Digit controls are dark charcoal circles; utility controls are light gray with black marks; the entire right column is saturated orange with white marks.
- The zero control is a two-column horizontal pill with its numeral aligned like the other digit labels, not a centered oversized capsule label.
- Selecting an operator reverses that control to white fill with an orange symbol while every key remains in place.
- Controls are flat solid shapes without borders, shadows, gradients, cards, or labels outside the keys.

# Color and surfaces

Black is not a surrounding background but the only full-screen surface and the negative space between every control. Dark charcoal differentiates numeric keys just enough to preserve their circular silhouettes. Light gray creates a clearly separate utility group, while orange forms the strongest continuous color mass down the trailing edge. White is reserved for the display and marks on dark or orange keys; black is used on light-gray keys. A selected operator swaps to a white circle with an orange mark. Adding blue tint, pale grouped backgrounds, separators, translucent materials, or elevated cards would visibly break the reference. Red is not an observed structural color and should appear only when the adapting product has a necessary destructive state.

# Typography

The display uses a very large, thin SF Pro Display treatment, right aligned and allowed to shrink as the value grows. Key marks use regular-weight SF Pro Text or the corresponding system symbol, centered optically rather than mechanically where glyph shapes require correction. Scale contrast is extreme: the display is several times larger than any control label, and no secondary copy competes with it. Numbers use tabular-looking system figures and locale-aware decimal punctuation. Dynamic Type must not independently enlarge key labels until they collide with the fixed circular geometry; accessibility sizing should instead preserve readable labels, expose full VoiceOver names, and reduce the display size only when required to fit the available width.

# Screen composition

The portrait composition has only two regions. The flexible upper region begins below the status bar and is predominantly empty black space, ending in the trailing-aligned numeric display. The lower region is a fixed-width keypad inset about one control gap from both horizontal edges and lifted clear of the home indicator. Four equal columns and five equal rows use consistent gaps; the zero key spans the first two columns while preserving the row height.

The observed default, entry, result, and selected-operator screens all retain this exact frame. Only the displayed value, a key label such as clear/all-clear, or an operator fill changes. A contextual copy menu appears as a compact system overlay near the selected display value; it does not introduce a permanent toolbar or container. The whole interface fits without scrolling.

# Navigation appearance

No app navigation bar, tab bar, title, back control, or toolbar is visible. System status information remains light over black, and the home indicator sits directly on the same black canvas. Temporary system overlays may float above the display, but they must not create persistent navigation chrome.

# Components

The numeric key is a large charcoal circle with a centered white numeral and no border or shadow. The utility key shares the same diameter but uses light-gray fill and black text or symbols. The operator key uses orange fill and white symbols; its selected state is white with an orange symbol. The zero key is a pill exactly one row high and approximately two key widths plus one gap wide, with its label positioned to continue the left-column rhythm. All keys have equal visual height and generous touch areas. The value display has no visible field boundary. The observed copy control uses compact native menu styling and is visually subordinate to the value.

# Imagery and icons

There is no photography, illustration, charting, branding, or decorative imagery. Functional arithmetic glyphs are the only icons and should use familiar system-drawn forms with consistent optical weight. Arbitrary SF Symbols, pictorial substitutes, or decorative marks would add a visual layer absent from the reference.

# States

Observed states include the initial zero, multi-digit entry, negative and decimal values, calculated values, active operators, and the contextual copy overlay. Across them, the black field, keypad geometry, color grouping, display alignment, and bottom anchoring never change. The selected operator is the strongest state change: fill and foreground invert without moving or resizing. No empty-state illustration, loading treatment, error screen, permission screen, or alternate appearance is visible.

# iOS adaptation

Extend the black canvas through both safe areas while keeping the display below status content and the keypad above the home indicator. Build the keypad from a geometry-preserving grid rather than a `Form`; determine key diameter from compact width, keep equal gaps, and allocate remaining vertical space to the display. On shorter iPhones, reduce upper whitespace and then the display font before reducing the minimum 44-point targets or changing key order. VoiceOver should encounter the displayed value first and then keys in visual row order, with arithmetic symbols announced by meaning. Preserve locale-aware decimal marks and value formatting. The sampled reference shows one dark portrait appearance; do not invent a light variant from the black system.

# Anti-generic checklist

- Do not place the result or keypad inside white, gray, glass, or elevated cards.
- Do not replace the black canvas with grouped-system gray or an adaptive light background.
- Do not use default blue tint for operators or selection.
- Do not turn the keypad into rounded rectangles, uneven tiles, or a generic `LazyVGrid` with unstable sizing.
- Do not center the zero label in a visually unrelated full-width button or collapse it to a circle.
- Do not add a navigation title, toolbar, tab bar, explanatory copy, history panel, or decorative iconography not evidenced by the reference.
- Do not express operator selection with a border alone; preserve the observed white-fill and orange-symbol inversion.

</design-context>
