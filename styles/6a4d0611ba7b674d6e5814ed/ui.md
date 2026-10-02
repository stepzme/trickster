<design-context>
---
version: 1
platform: iOS
name: Airba-pay-design-analysis
description: "A sparse white financial interface with cyan-blue actions, thin outlined inputs, compact black utility icons, restrained pale cards, a blue-to-violet loan hero, and large numeric emphasis."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F6F9"
  accent-primary: "#159DE4"
  accent-secondary: "#6C5CE7"
  text-primary: "#15171A"
  text-secondary: "#747B84"
  divider: "#DDE4EA"
  destructive: "#DF4B55"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 38, fontWeight: 700, lineHeight: 43}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 20
  section-gap: 28
  card-padding: 18
  control-gap: 12
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "accent-primary", text: "white semibold", shape: "rounded rectangle"}
  secondary-action: {fill: "surface-primary", text: "accent-primary", shape: "outlined rounded rectangle"}
  primary-card: {fill: "surface-secondary", text: "text-primary", shape: "rounded rectangle"}
  navigation: {fill: "surface-primary", selected: "accent-primary", unselected: "text-primary"}
---

# Overview

Airba pay is a sparse utility-focused financial interface. White fills most screens, cyan-blue actions and input borders establish the product accent, and black outline icons carry navigation. The visually strongest exception is a blue-to-violet loan block with a large numeric amount and slider. Pale cards and isolated spot assets support the hierarchy without becoming a decorative illustration system.

# Non-negotiable visual invariants

- White remains the dominant full-screen field, with generous separation between financial controls.
- Cyan-blue marks primary actions, focused inputs, links, selected navigation, and progress.
- Large monetary numerals are the focal point of loan surfaces.
- The loan offer uses a substantial blue-to-violet gradient region rather than a generic white card.
- Inputs use thin cyan or neutral outlines and concise labels, not heavily filled form sections.
- Navigation icons are compact black outlines with blue reserved for the active state.
- Supporting cards are pale and quiet; isolated spot assets never overtake the financial data.

# Color and surfaces

White is the primary canvas and form surface. Pale cool gray groups loans, profile information, and secondary options. Cyan-blue is the main interaction color and can shift toward violet inside the observed loan gradient. Near-black carries amounts, titles, and outline icons; medium gray carries helper and verification text. Thin light-gray dividers organize list rows, while destructive feedback uses a restrained red close to the affected field. A default system-blue wash or excessive card elevation would weaken the observed light, precise hierarchy.

# Typography

Use SF Pro throughout. Monetary amounts use 34–38 point bold display numerals; page titles use roughly 28 point bold; section headings use 20 point semibold; inputs, actions, and rows use 14–15 point text; helper and verification copy uses 12–13 point gray captions. Use tabular numerals for loan amounts and repayment values. Dynamic Type should increase row and card height and allow helper text to wrap while keeping the primary amount clearly more prominent than labels.

# Screen composition

Launch and login screens place a compact logo or title high below the safe area, a single-column group of outlined fields in the middle, and a blue action toward the lower portion. Home and loan-list screens use broad white space around a small number of pale cards. The loan-composition archetype gives a large upper or central region to the blue-violet gradient, the amount, and slider, with supporting terms and a primary action below. Verification and profile screens are single-column lists or forms. Bottom navigation stays attached to the lower edge and uses equal-width compact items.

# Navigation appearance

The bottom bar is white with small black outline icons and labels; the active destination turns cyan-blue. Focused subviews use a simple black back control and compact title, without a large colored header. App-owned verification or decision surfaces use white rounded panels, while camera access and other system permission transitions retain native iOS appearance. Selected tabs or links use blue text or underline rather than filled oversized pills.

# Components

Primary buttons are cyan-blue rounded rectangles with white semibold labels and a minimum 44-point height. Secondary actions are white with thin blue outlines or blue text. Text fields have white fill, thin cyan or neutral borders, compact labels, and explicit error treatment. Loan cards use pale fill, restrained rounding, and prominent numeric data; the main loan hero adds the blue-violet gradient and a clearly visible slider. Profile and support rows use black outline icons, dark labels, gray metadata, subtle dividers, and small chevrons. Disabled controls recede to cool gray while retaining legible labels.

# Imagery and icons

Imagery is sparse: a few small colored spot assets, an empty-state graphic, the brand mark, and functional verification imagery. Keep these assets secondary to loan amounts, form fields, and actions. The inspected screens do not establish shared characters, rendering rules, or repeatable scene composition, so do not extrapolate them into a large illustration language. Icons remain thin, geometric, and mostly black or blue; do not replace financial content with arbitrary symbols.

# States

Observed states include first launch, login with keyboard, verification and native camera permission, loan list, a new-loan amount and slider, support, profile, and email editing. Blue focus and action color, white canvas, sparse spacing, compact iconography, and numeric hierarchy remain stable. Verification or permission states may introduce native iOS panels; errors stay adjacent to the affected field and use red without recoloring the full screen.

# iOS adaptation

Respect top and bottom safe areas and keep the active field and primary action visible when the keyboard appears. Use vertical scrolling for long verification, loan, support, and profile content, but preserve generous spacing on short screens. System camera and permission transitions remain native, while app-owned panels keep the documented white and blue styling. Back controls, fields, slider handles, list rows, and bottom navigation require 44-point touch regions. VoiceOver should announce the financial amount and unit, then terms and action. At large Dynamic Type, stack supporting loan metrics and grow forms rather than shrinking the amount. The observed presentation is light-first; dark appearance requires a separately designed palette.

# Anti-generic checklist

- Do not turn the sparse finance UI into a dashboard of many equal white cards.
- Do not replace cyan-blue focus and action states with default unstyled iOS controls.
- Do not omit the large numeric loan hierarchy or the blue-violet gradient loan region.
- Do not ship an unstyled `TabView`, `Form`, `List`, or default text fields.
- Do not use arbitrary SF Symbols, emoji, or programmatic decoration as replacements for observed spot assets.
- Do not flatten amounts, titles, helper copy, and input labels into one scale.
- Do not infer a full illustration system from isolated empty-state and home assets.

</design-context>
