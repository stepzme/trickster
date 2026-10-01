<design-context>
---
version: 1
platform: iOS
name: Skyeng-design-analysis
description: "A bright modular language-learning interface built on white space, saturated cyan actions, violet practice states, coral and green learning cards, and a mixed illustration system of soft 3D characters and flat educational scenes. Dense course variety stays approachable through rounded cards and a persistent five-tab shell."

colors:
  primary: "#11B8EA"
  on-primary: "#FFFFFF"
  primary-soft: "#DDF7FD"
  accent-violet: "#6035E6"
  accent-green: "#16C56B"
  accent-coral: "#FF7478"
  ink: "#15171A"
  ink-muted: "#6C7177"
  ink-subtle: "#A0A5AA"
  canvas: "#FFFFFF"
  surface-1: "#F4F5F6"
  surface-2: "#EAEDF0"
  surface-dark: "#090B0E"
  hairline: "#E1E4E7"
  semantic-success: "#16C56B"
  semantic-warning: "#F3A932"
  semantic-danger: "#EF6175"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 700, lineHeight: 1.02, letterSpacing: -0.7 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.4 }
  display-md: { fontFamily: System Sans, fontSize: 25, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.2 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 600, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 12, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  button-practice: { backgroundColor: "{colors.accent-violet}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  learning-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  promo-card: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 14 }
  lesson-step: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  search-field: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 62 }
---

# Overview

Skyeng is a broad language-learning product combining self-study, lessons, AI speaking, vocabulary, homework, schedules, messages, and courses. Cyan anchors navigation and acquisition, violet marks active practice, and colorful cards with 3D characters or flat scenes keep learning inviting.

**Key Characteristics:**
- White canvas and saturated cyan primary actions.
- Violet practice and recording controls.
- Coral, green, dark blue, and black content cards.
- Mixed 3D character and flat educational illustration system.
- Five-tab navigation across Home, Homework, Schedule, Messages, and Practice.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: White canvas and saturated cyan primary actions.
- The reviewed screens show this treatment: Violet practice and recording controls.
- The reviewed screens show this treatment: Coral, green, dark blue, and black content cards.
- The reviewed screens show this treatment: Mixed 3D character and flat educational illustration system.
- The reviewed screens show this treatment: Five-tab navigation across Home, Homework, Schedule, Messages, and Practice.

# Color and surfaces

### Brand & Accent

- **Skyeng Cyan** ({colors.primary}) marks primary actions, active navigation, links, and search.
- **Practice Violet** ({colors.accent-violet}) marks lesson progress, audio, and recording.
- Green confirms correct learning states; coral distinguishes offers and course categories.

### Surface

- **Canvas** ({colors.canvas}) is the main learning background.
- **Surface 1** ({colors.surface-1}) carries lesson steps and settings.
- **Surface 2** ({colors.surface-2}) supports inactive controls.
- **Dark Surface** ({colors.surface-dark}) is used for immersive speaking practice.

### Text

- **Ink** ({colors.ink}) carries titles and lesson content.
- **Muted** ({colors.ink-muted}) carries explanations and metadata.
- **Subtle** ({colors.ink-subtle}) is for inactive navigation and secondary status.

### Semantic

Green communicates correct or complete, amber attention, and red error or report. Learning-category color must not replace semantic feedback.

# Typography

### Font Family

Use a neutral system sans with bold educational headings and highly readable exercise text.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| `{typography.display-xl}` | 38pt | 700 | Onboarding claim |
| `{typography.display-lg}` | 30pt | 700 | Major learning title |
| `{typography.display-md}` | 25pt | 700 | Screen title |
| `{typography.headline}` | 21pt | 700 | Learning section |
| `{typography.card-title}` | 16pt | 600 | Course or practice title |
| `{typography.body}` | 14pt | 400 | Lesson and explanation text |
| `{typography.caption}` | 10pt | 400 | Duration, status, navigation |

### Principles

- Keep exercise prompts and examples readable.
- Use weight to separate instruction from answer.
- Avoid all caps in learning content.
- Keep bilingual or phonetic lines clearly grouped.

### Note on Font Substitutes

Use SF Pro or Inter. Preserve language character coverage and comfortable exercise line height.

# Screen composition

### Grid & Container

Home is a vertical feed with horizontal story and course strips. Practice and vocabulary use one-column lesson steps. Catalog areas may use two-column cards.

### Whitespace Philosophy

Give instructions and exercises clear breathing room. Discovery feeds can be denser, but each learning task should focus on one decision.

# Navigation appearance

Use five bottom destinations for Home, Homework, Schedule, Messages, and Practice. Vocabulary and profile open from contextual links and top controls.

# Components

### Buttons

Primary acquisition and navigation actions use cyan; practice and recording actions use violet. Correct completion can use green. Native controls must inherit the package styling.

Course filters and product selectors use chips or compact tabs. Active state uses cyan fill or underline; avoid heavy segmented chrome.

### Cards & Containers

Learning cards combine title, duration, status, and one image. Promo cards may use stronger colors. Lesson steps use pale surfaces with numbered labels and embedded controls.

### Inputs & Forms

Search, promo code, answer, and recording inputs use rounded light fields. Speech tests show microphone state, waveform, transcript, and retry close together.

### Status & Build Page

Progress bars and numbered steps show lesson advancement. Recognition success uses a mint panel; failed or skipped content retains the same task context.

### Navigation

Use five bottom destinations for Home, Homework, Schedule, Messages, and Practice. Vocabulary and profile open from contextual links and top controls.

# Imagery and icons

Use flat colored cards, soft shadows, and occasional dark immersive modes. Character rendering supplies depth without heavy chrome.

### Decorative Depth

Use 3D characters, colored card backgrounds, and simple gradient atmosphere. Avoid adding depth effects to form-like lesson steps.

# States

Progress bars and numbered steps show lesson advancement. Recognition success uses a mint panel; failed or skipped content retains the same task context.

# iOS adaptation

Keep exercises and vocabulary single-column. Discovery cards may stack when titles or imagery no longer fit.

### Touch Targets

Lesson answers, audio, recording, cards, chips, and navigation require at least 44pt targets.

### Collapsing Strategy

Allow story and course strips to scroll horizontally. Keep lesson progress and next action visible while step content scrolls.

### Image Behavior

Use `contain` for isolated characters and `cover` for full-card scenes or video. Preserve character faces and instructional context.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not turn the documented white canvas into a generic card stack; preserve the observed accent, density, imagery, and surface grouping.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

### Do

- Keep one primary learning decision per step.
- Use cyan for product navigation.
- Use violet consistently for active practice.
- Pair semantic feedback with text.
- Let illustrations make topics memorable.

### Don't

- Do not turn every card into a different style.
- Do not use decorative color as correctness feedback.
- Do not hide recording or playback state.
- Do not crowd exercise copy.
- Do not expose default platform controls.

</design-context>
