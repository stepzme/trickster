<design-context>
---
version: 1
platform: iOS
name: Tinkoff-Journal-design-analysis
description: "An editorial learning app built from white reading surfaces, oversized black headlines, vivid cobalt actions, image-led article cards, and expressive flat line illustrations on bold color fields. The interface balances magazine energy with highly readable course and calculator content."

colors:
  primary: "#302DE8"
  on-primary: "#FFFFFF"
  primary-pressed: "#2220C7"
  ink: "#111113"
  ink-muted: "#696B70"
  ink-subtle: "#A4A6AA"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F2F3F5"
  accent-mint: "#A8E8BC"
  accent-sky: "#8CC9F3"
  hairline: "#E0E1E4"
  semantic-success: "#329B55"
  semantic-warning: "#DFA524"
  semantic-danger: "#D84F57"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 42, fontWeight: 800, lineHeight: 1.0, letterSpacing: -1 }
  display-lg: { fontFamily: System Sans, fontSize: 34, fontWeight: 800, lineHeight: 1.06, letterSpacing: -0.6 }
  display-md: { fontFamily: System Sans, fontSize: 28, fontWeight: 800, lineHeight: 1.1, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 17, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 18, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 17, fontWeight: 400, lineHeight: 1.5, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 15, fontWeight: 400, lineHeight: 1.48, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 13, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 11, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.3 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 3, sm: 7, md: 11, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 20]}
  article-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0 }
  course-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 0 }
  quiz-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.lg}", height: 60 }
---

# Overview

Tinkoff Journal uses magazine-scale type, real photography, and bold illustrated explainers. White reading surfaces keep long-form content calm while cobalt actions and colorful course art add energy.

# Non-negotiable visual invariants

- The reference consistently shows bold editorial hierarchy.
- The reference consistently shows long-form reading comfortable.
- Imagery consistently uses reuse the flat illustration family.
- The reference consistently shows separate learning from settings chrome.
- The reference consistently shows an editorial learning app built from white reading surfaces.
- The reference consistently shows oversized black headlines.
- The reference consistently shows vivid cobalt actions.
- The reference consistently shows image-led article cards.

# Color and surfaces

### Brand & Accent

Cobalt is the primary action and launch color. Mint, sky, yellow, and lavender belong to illustration and course covers.

### Surface

White dominates reading and settings. Pale gray separates cards, sheets, and inactive controls.

### Text

Near-black carries headlines and body; gray carries dates, categories, progress, and secondary notes.

### Semantic

Green confirms correct answers, amber warns, and red marks errors. Illustration colors never substitute for feedback.

# Typography

### Font Family

Use a bold grotesk for editorial display and a neutral sans for long-form reading.

### Hierarchy

Use 28–42 points article and course headlines, 17–22 points card titles, 15–17 points body, and 11–13 points metadata.

### Principles

Let headlines be assertive, keep body line length comfortable, and make quiz values visually distinct from explanation.

### Note on Font Substitutes

Use Inter, Arial, or SF Pro with strong 700–800 display weights.

# Screen composition

### Spacing System

Use a 4 points base, 16 points gutters, 12–16 points card gaps, and 24–32 points between editorial sections.

### Grid & Container

Journal uses stacked photo cards; Textbook uses large course covers. Lessons and quizzes are single-column with bottom sheets.

### Whitespace Philosophy

Give headlines and body generous space. Let large images and illustrations form section boundaries.

Surface hierarchy observed in the source:

Cards and lesson sheets use soft lift over gray or media. Most reading surfaces remain flat.

### Decorative Depth

Use bold flat illustration, photography, and occasional colored course panels. Avoid UI gradients and heavy shadow.

# Navigation appearance

Use three bottom destinations for Textbook, Journal, and Calculators. Focused reading uses back and close actions.

# Components

### Buttons

Primary actions are cobalt rectangles with modest rounding. Native controls must inherit cobalt selection and editorial typography.

### Cards & Containers

Article cards pair large media with date, headline, and engagement. Course cards foreground illustrated covers and progress.

### Inputs & Forms

Search and calculator inputs use pale fields. Quiz answers use outlined cards and visible result states.

# Imagery and icons

Use bold flat illustration, photography, and occasional colored course panels. Avoid UI gradients and heavy shadow.

Photography uses wide editorial crops; illustrations use poster-like rectangles with one central metaphor.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Lesson progress, score, answer correctness, notification state, and saved content appear beside the relevant item.

# iOS adaptation

### Touch Targets

Article cards, answers, navigation, search, and lesson actions require at least 44 points targets.

### Collapsing Strategy

Keep course progression linear. Move secondary topic filters into horizontal rails or menus on narrow screens.

### Image Behavior

Use `cover` for editorial photography and `contain` for course illustration when the whole metaphor matters.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Do not use tiny body text.
- Do not mix unrelated illustration styles.
- Do not overload course covers with UI.
- Do not expose default blue controls.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
