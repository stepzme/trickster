<design-context>
---
version: 1
platform: iOS
name: Profi-ru-design-analysis
description: "A direct service-matching interface built from a white canvas, vivid coral-red commitments, large black question text, pale gray search and input fields, generous vertical space, and one-question-at-a-time sheets."
colors: {primary: "#F21F4B", on-primary: "#FFFFFF", primary-focus: "#CC153B", ink: "#141518", ink-muted: "#696C72", ink-subtle: "#A0A3A9", ink-tertiary: "#CACCD1", canvas: "#FFFFFF", surface-1: "#F7F7FA", surface-2: "#EEEFF3", surface-3: "#E3E4E9", surface-4: "#D7D9DF", hairline: "#E6E7EB", hairline-strong: "#CDD0D6", hairline-tertiary: "#B6BAC1", inverse-canvas: "#25262A", inverse-surface-1: "#36373C", inverse-surface-2: "#47494F", inverse-ink: "#FFFFFF", brand-secure: "#D9143F", semantic-success: "#31A96E", semantic-overlay: "#16171A"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 38, fontWeight: 600, lineHeight: 1.05, letterSpacing: -0.9}
  display-lg: {fontFamily: SF Pro Display, fontSize: 32, fontWeight: 600, lineHeight: 1.09, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 26, fontWeight: 600, lineHeight: 1.13, letterSpacing: -0.4}
  headline: {fontFamily: SF Pro Display, fontSize: 22, fontWeight: 600, lineHeight: 1.18, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 48}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  service-row: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.xs}", padding: 12 0}
  question-sheet: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.headline}", rounded: "{rounded.xl}", padding: 20}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [14, 16]}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [3, 7]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Profi.ru is a direct service brief rather than a decorative marketplace. White space, large black questions, pale input surfaces, and a single coral-red commitment guide the user through one decision at a time.

**Key Characteristics:** white canvas, coral-red CTA, large question text, pale search fields, simple service lists, sheet-based task wizard, fixed Back and Next controls, and relevant native keyboards.

# Non-negotiable visual invariants

- Sampled screens consistently use white canvas.
- The reference consistently shows coral-red CTA.
- Typography consistently uses large question text.
- The reference consistently shows pale search fields.
- The reference consistently shows simple service lists.
- The reference consistently shows sheet-based task wizard.
- The reference consistently shows fixed Back and Next controls.
- The reference consistently shows relevant native keyboards.

# Color and surfaces

### Brand & Accent

Coral red owns confirmation, Next, and the brand wordmark. It is not used as a surface or decorative highlight.

### Surface

White carries the full task; very pale gray separates search, text inputs, and unchecked option controls; a dark scrim sits behind focused sheets.

### Text

Near-black leads questions and services, medium gray explains requirements, and light gray carries counts or disabled fields.

### Semantic

Red means primary progress, green is reserved for success, and gray communicates neutral selection or availability.

# Typography

### Font Family

Use SF Pro Display for large questions and SF Pro Text for service lists, helper copy, counts, and actions.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 32 points | 600 | Major state |
| headline | 22 points | 600 | Task question |
| card-title | 16 points | 500 | Service or option |
| body | 14 points | 400 | Explanation |
| caption | 10 points | 400 | Specialist count |

### Principles

- Ask one clear question per screen.
- Keep answer labels plain and readable.
- Use red only for the next real commitment.

### Note on Font Substitutes

Use the platform sans with strong Cyrillic and a clear regular-to-semibold hierarchy.

# Screen composition

### Spacing System

Use a 4 points base, 16–20 points sheet padding, 12–16 points option gaps, and generous vertical space after the question.

### Grid & Container

Catalog is a single list; the task brief is a full-width rounded top sheet with one-column choices and fixed bottom actions.

### Whitespace Philosophy

Whitespace reduces cognitive load between sequential questions. Do not fill unused space with promotions or unrelated specialist cards.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Service catalog |
| 1 | Pale input fill | Search and answer |
| 2 | White rounded sheet | Task question |
| 3 | Dark scrim | Focused brief context |

### Decorative Depth

Use only subtle sheet separation and occasional small line-art feedback graphics; the workflow remains primarily typographic.

# Navigation appearance

Use search and service categories to enter the flow; inside the brief, fixed Back and Next actions replace a persistent tab bar.

# Components

### Buttons

Primary Next, Confirm, and Tell about the task use solid coral red; Back is plain black text; disabled actions become pale.

### Cards & Containers

Service categories remain flat list rows; the task brief is one large sheet rather than a stack of cards.

### Inputs & Forms

Inputs use pale gray fills and the keyboard appropriate to phone, number, or free text; native behavior remains intact while styling follows the red, gray, and type system.

# Imagery and icons

Use only subtle sheet separation and occasional small line-art feedback graphics; the workflow remains primarily typographic.

No product photography is required; small monochrome line graphics may sit at the edge of a pale helper panel.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Keep the available specialist count and current selection visible; explicit validation appears close to the field.

# iOS adaptation

### Touch Targets

Service rows, choices, fields, Back, and Next remain at least 44 points.

### Collapsing Strategy

Preserve question, specialist count, answer, and Next; reduce helper text and secondary feedback prompts first.

### Image Behavior

Keep occasional line art small, monochrome, and secondary; no hero crop should compete with the form.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't show an entire multi-step form at once.
- Don't add promotional cards inside the questionnaire.
- Don't use red for passive labels or background decoration.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
