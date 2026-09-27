<design-context>
---
version: alpha
name: Profi-ru-design-analysis
description: "A direct service-matching interface built from a white canvas, vivid coral-red commitments, large black question text, pale gray search and input fields, generous vertical space, and one-question-at-a-time sheets."
colors: {primary: "#F21F4B", on-primary: "#FFFFFF", primary-hover: "#F44368", primary-focus: "#CC153B", ink: "#141518", ink-muted: "#696C72", ink-subtle: "#A0A3A9", ink-tertiary: "#CACCD1", canvas: "#FFFFFF", surface-1: "#F7F7FA", surface-2: "#EEEFF3", surface-3: "#E3E4E9", surface-4: "#D7D9DF", hairline: "#E6E7EB", hairline-strong: "#CDD0D6", hairline-tertiary: "#B6BAC1", inverse-canvas: "#25262A", inverse-surface-1: "#36373C", inverse-surface-2: "#47494F", inverse-ink: "#FFFFFF", brand-secure: "#D9143F", semantic-success: "#31A96E", semantic-overlay: "#16171A"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 600, lineHeight: 1.05, letterSpacing: -0.9px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 32px, fontWeight: 600, lineHeight: 1.09, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 600, lineHeight: 1.13, letterSpacing: -0.4px}
  headline: {fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 600, lineHeight: 1.18, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 48px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  service-row: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.xs}", padding: 12px 0}
  question-sheet: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.headline}", rounded: "{rounded.xl}", padding: 20px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px 16px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Profi.ru is a direct service brief rather than a decorative marketplace. White space, large black questions, pale input surfaces, and a single coral-red commitment guide the user through one decision at a time.

**Key Characteristics:** white canvas, coral-red CTA, large question text, pale search fields, simple service lists, sheet-based task wizard, fixed Back and Next controls, and relevant native keyboards.

## Colors

### Brand & Accent

Coral red owns confirmation, Next, and the brand wordmark. It is not used as a surface or decorative highlight.

### Surface

White carries the full task; very pale gray separates search, text inputs, and unchecked option controls; a dark scrim sits behind focused sheets.

### Text

Near-black leads questions and services, medium gray explains requirements, and light gray carries counts or disabled fields.

### Semantic

Red means primary progress, green is reserved for success, and gray communicates neutral selection or availability.

## Typography

### Font Family

Use SF Pro Display for large questions and SF Pro Text for service lists, helper copy, counts, and actions.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 32px | 600 | Major state |
| headline | 22px | 600 | Task question |
| card-title | 16px | 500 | Service or option |
| body | 14px | 400 | Explanation |
| caption | 10px | 400 | Specialist count |

### Principles

- Ask one clear question per screen.
- Keep answer labels plain and readable.
- Use red only for the next real commitment.

### Note on Font Substitutes

Use the platform sans with strong Cyrillic and a clear regular-to-semibold hierarchy.

## Layout

### Spacing System

Use a 4px base, 16–20px sheet padding, 12–16px option gaps, and generous vertical space after the question.

### Grid & Container

Catalog is a single list; the task brief is a full-width rounded top sheet with one-column choices and fixed bottom actions.

### Whitespace Philosophy

Whitespace reduces cognitive load between sequential questions. Do not fill unused space with promotions or unrelated specialist cards.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Service catalog |
| 1 | Pale input fill | Search and answer |
| 2 | White rounded sheet | Task question |
| 3 | Dark scrim | Focused brief context |

### Decorative Depth

Use only subtle sheet separation and occasional small line-art feedback graphics; the workflow remains primarily typographic.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Small state |
| rounded-sm | 8px | Choice field |
| rounded-md | 12px | CTA and input |
| rounded-lg | 18px | Feedback panel |
| rounded-xl | 24px | Question sheet |

### Photography & Illustration Geometry

No product photography is required; small monochrome line graphics may sit at the edge of a pale helper panel.

## Components

### Buttons

Primary Next, Confirm, and Tell about the task use solid coral red; Back is plain black text; disabled actions become pale.

### Pricing Tabs

There are no pricing tabs; multiple-choice answers use flat rows with light circular or square selection controls.

### Cards & Containers

Service categories remain flat list rows; the task brief is one large sheet rather than a stack of cards.

### Inputs & Forms

Inputs use pale gray fills and the keyboard appropriate to phone, number, or free text; native behavior remains intact while styling follows the red, gray, and type system.

### Status & Build Page

Keep the available specialist count and current selection visible; explicit validation appears close to the field.

### Navigation

Use search and service categories to enter the flow; inside the brief, fixed Back and Next actions replace a persistent tab bar.

### Footer

No footer; the fixed Back and Next control bar owns the lower safe area.

## Do's and Don'ts

### Do

- Preserve one-question focus and large readable choices.
- Keep the red commitment fixed and predictable.
- Style native controls to inherit this visual system.

### Don't

- Don't show an entire multi-step form at once.
- Don't add promotional cards inside the questionnaire.
- Don't use red for passive labels or background decoration.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten question leading |
| Standard | 375–430px | Default composition |
| Wide | 431px+ | Increase sheet margins |

### Touch Targets

Service rows, choices, fields, Back, and Next remain at least 44px.

### Collapsing Strategy

Preserve question, specialist count, answer, and Next; reduce helper text and secondary feedback prompts first.

### Image Behavior

Keep occasional line art small, monochrome, and secondary; no hero crop should compete with the form.

## Iteration Guide

Tune service discovery and task questions first, then inputs, validation, specialist matching, and account states.

## Known Gaps

- Only onboarding had a named flow; later task screens were reviewed through the app's screen inventory.
- Specialist comparison and post-order communication were not fully represented.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
