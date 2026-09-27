<design-context>
---
version: alpha
name: How-We-Feel-design-analysis
description: "A black, editorial mobile interface that turns emotional tracking into a vivid four-color system. Warm white serif headlines and compact neutral sans-serif controls sit on an almost pure black canvas. Yellow, green, blue, and red represent the app's energy-and-pleasantness quadrants and recur as dimensional emotion symbols, progress rings, tool tiles, friend cards, and analytical charts. Large rounded rectangles, soft organic blobs, outlined controls, and generous negative space give the system a calm but expressive character."

colors:
  primary: "#55E6A5"
  on-primary: "#050505"
  primary-muted: "#1B5C43"
  mood-yellow: "#FFD84D"
  mood-green: "#55E6A5"
  mood-blue: "#6F8CFA"
  mood-red: "#FF5964"
  ink: "#FAFAF7"
  ink-muted: "#AAA6AA"
  ink-subtle: "#747176"
  canvas: "#000000"
  surface-1: "#171519"
  surface-2: "#201D22"
  surface-3: "#2A272D"
  hairline: "#343138"
  outline: "#F2F1EE"
  semantic-success: "#35DB6B"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: Editorial Serif
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.00
    letterSpacing: -1.2px
  display-lg:
    fontFamily: Editorial Serif
    fontSize: 34px
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: -0.9px
  display-md:
    fontFamily: Editorial Serif
    fontSize: 30px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -0.6px
  headline:
    fontFamily: Editorial Serif
    fontSize: 26px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -0.4px
  card-title:
    fontFamily: Editorial Serif
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -0.2px
  subhead:
    fontFamily: Editorial Serif
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: -0.1px
  body-lg:
    fontFamily: System Sans
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  body:
    fontFamily: System Sans
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-sm:
    fontFamily: System Sans
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: System Sans
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  button:
    fontFamily: System Sans
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: System Sans
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 0.2px
  mono:
    fontFamily: System Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 8px
  md: 14px
  lg: 20px
  xl: 28px
  xxl: 36px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 16px 24px
  button-secondary:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 18px
  button-outlined:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 22px
  emotion-quadrant:
    backgroundColor: "{colors.mood-green}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    size: 128px
  emotion-symbol:
    backgroundColor: "{colors.mood-green}"
    textColor: "{colors.on-primary}"
    typography: "{typography.card-title}"
    rounded: "{rounded.xxl}"
    size: 180px
  tool-card:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.xl}"
    padding: 20px
  journal-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 20px
  tag-chip:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: 8px 14px
  settings-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 14px 0
  modal-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  bottom-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    height: 64px
  analytics-bar:
    backgroundColor: "{colors.mood-yellow}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 8px
---

## Overview

How We Feel uses an almost pure black canvas as a stage for warm white editorial typography and a four-color emotional model. The visual system is deliberately split between expressive moments and quiet utility: onboarding, emotion selection, tools, and analytics are bold and graphic, while settings, forms, and attachment controls stay restrained and familiar.

The four emotional families are the main source of color: yellow for pleasant high energy, green for pleasant low energy, blue for unpleasant low energy, and red for unpleasant high energy. Those colors do more than label states. They become soft three-dimensional blobs, entry symbols, gradients, rings, tool tiles, friend cards, and chart marks.

Serif display type supplies the app's reflective, journal-like voice. System sans-serif carries instructions, controls, data, and navigation. Large rounded shapes and pill actions soften the black interface without making it visually lightweight.

**Key Characteristics:**
- Near-black full-screen canvas with no light-mode surfaces in the observed screens.
- Four saturated emotion colors reused consistently across the product.
- Editorial serif headings paired with plain, compact system controls.
- Organic emotion symbols and large rounded cards instead of conventional rectangular thumbnails.
- One dominant white pill action anchors creation and setup flows.
- Visual richness is concentrated in emotional content; utility screens remain sparse.

## Colors

### Brand & Accent
- **Mood Green** (`{colors.mood-green}`): calm, pleasant low-energy states; also the most common active accent.
- **Mood Yellow** (`{colors.mood-yellow}`): focused, curious, and other pleasant high-energy states.
- **Mood Blue** (`{colors.mood-blue}`): tired, sad, and other unpleasant low-energy states.
- **Mood Red** (`{colors.mood-red}`): tense, stressed, and other unpleasant high-energy states.
- **Primary** (`{colors.primary}`): interaction emphasis derived from the green mood family.

### Surface
- **Canvas** (`{colors.canvas}`): the default full-screen background.
- **Surface 1** (`{colors.surface-1}`): journal fields, inactive chart bars, and dense content cards.
- **Surface 2** (`{colors.surface-2}`): chips, attachment rows, circular icon buttons, and raised controls.
- **Surface 3** (`{colors.surface-3}`): menus, selected overlays, and stronger control contrast.
- **Hairline** (`{colors.hairline}`): dividers in settings, lists, and forms.
- **Outline** (`{colors.outline}`): borders for large circular choices and outlined actions.

### Text
- **Ink** (`{colors.ink}`): titles, body text, icons, and primary action surfaces.
- **Ink Muted** (`{colors.ink-muted}`): instructions, inactive navigation, metadata, and secondary labels.
- **Ink Subtle** (`{colors.ink-subtle}`): disabled choices and tertiary explanatory text.

### Semantic
- **Success Green** (`{colors.semantic-success}`): enabled switches and active confirmation states.
- **Overlay** (`{colors.semantic-overlay}`): dimming layer behind confirmation dialogs and sheets.

## Typography

### Font Family

- **Editorial Serif** — a high-contrast serif with soft, literary proportions for large questions, section titles, quotes, and emotional statements. Use `Georgia, Times New Roman, serif` when the original face is unavailable.
- **System Sans** — the native platform sans-serif for instructions, controls, metadata, chips, settings, and charts.
- **System Mono** — reserved for compact technical or numeric labels where alignment matters.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 40px | 600 | 1.00 | -1.2px | Full-screen emotional statement |
| `{typography.display-lg}` | 34px | 600 | 1.04 | -0.9px | Onboarding and check-in question |
| `{typography.display-md}` | 30px | 600 | 1.08 | -0.6px | Primary screen title |
| `{typography.headline}` | 26px | 600 | 1.10 | -0.4px | Analytics and tool section heading |
| `{typography.card-title}` | 22px | 600 | 1.10 | -0.2px | Tool tile and quote card title |
| `{typography.subhead}` | 20px | 500 | 1.20 | -0.1px | Entry state and secondary title |
| `{typography.body-lg}` | 17px | 400 | 1.35 | 0 | Prominent instructions |
| `{typography.body}` | 15px | 400 | 1.40 | 0 | Default copy and list rows |
| `{typography.body-sm}` | 13px | 400 | 1.35 | 0 | Chips and metadata |
| `{typography.caption}` | 11px | 400 | 1.30 | 0 | Tab labels and chart annotations |
| `{typography.button}` | 15px | 600 | 1.20 | 0 | Button labels |
| `{typography.eyebrow}` | 12px | 500 | 1.30 | 0.2px | Period, category, and step labels |
| `{typography.mono}` | 12px | 400 | 1.40 | 0 | Compact aligned numeric data |

### Principles

- Use the serif for meaning and emotion; use the sans-serif for action and explanation.
- Keep display headings compact, often broken into two or three short lines.
- Italics may emphasize a feeling or reflective phrase, but not controls or dense utility copy.
- Chart labels remain small and direct so color and shape carry the hierarchy.

### Note on Font Substitutes

Use **Georgia** for a broadly available substitute with sufficient editorial contrast. **Fraunces** at restrained optical settings is a suitable open-source alternative. Use the native iOS system font or **Inter** for the sans-serif layer.

## Layout

### Spacing System

- Base unit: 4px.
- Screen margins are usually `{spacing.md}` 16px; expressive onboarding compositions may use `{spacing.lg}` 24px.
- Compact controls separate by `{spacing.xs}` 8px; cards and screen sections by `{spacing.md}` 16px to `{spacing.lg}` 24px.
- Focused screens reserve the bottom safe area for a full-width primary action.

### Grid & Container

- Mobile screens use a single full-height column.
- Tools and practices use a two-column grid of nearly square rounded cards.
- Emotion selection uses a free spatial field of circles and organic forms rather than a strict list.
- Analytics is a continuous vertical report with one chart or relationship per viewport.
- Main content stays within 16px side margins; immersive imagery and camera surfaces may reach the edges.

### Whitespace Philosophy

Black negative space separates emotional moments and prevents the saturated palette from becoming noisy. A screen generally has one large visual focus, one supporting text group, and one primary action. Dense content appears inside cards or scrollable reports rather than filling every open area.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (canvas) | `{colors.canvas}`, no shadow | Default screen and navigation background |
| 1 (surface) | `{colors.surface-1}` or `{colors.surface-2}` | Fields, chips, journal cards, inactive charts |
| 2 (color field) | Saturated gradient with subtle edge shading | Emotion symbols, tool tiles, friend cards |
| 3 (modal) | Black rounded card over a dimmed screen | Confirmations and focused choices |
| 4 (active control) | White fill or colored glow/outline | Primary action, selection, current mood |

Depth comes from gradients, overlapping colored forms, and surface contrast rather than conventional shadows.

### Decorative Depth

- Mood symbols use subtle tonal gradients and soft internal shading to feel tactile.
- Tool cards use quiet radial lines, waves, or outline drawings within one color family.
- Analytical circles and bars may overlap, but labels stay crisp and flat.
- Photography appears only where the content calls for it, inside strongly rounded media frames.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Dividers and minimal structural corners |
| `{rounded.sm}` | 8px | Small fields and compact controls |
| `{rounded.md}` | 14px | Chart bars and menus |
| `{rounded.lg}` | 20px | Modals and medium cards |
| `{rounded.xl}` | 28px | Tool, friend, journal, and media cards |
| `{rounded.xxl}` | 36px | Large emotional surfaces |
| `{rounded.pill}` | 9999px | Buttons and chips |
| `{rounded.full}` | 9999px | Quadrants and circular icon actions |

### Photography & Illustration Geometry

- Emotional symbols are built from circles, capsules, pinched rectangles, folds, and paired lobes.
- Onboarding characters use the same silhouettes with tiny white line limbs and faces.
- Photo attachments sit inside wide `{rounded.xl}` frames.
- Exercise illustrations use thin white outlines centered inside softly colored cards.

## Components

### Buttons

**`button-primary`** — full-width white pill anchored near the bottom of focused flows. Use for Continue, Done, Save, and Complete check-in.

**`button-secondary`** — compact charcoal pill for contextual actions such as reply, reflect, tools, or editing metadata.

**`button-outlined`** — black pill with a thin light outline for lower-emphasis completion or destructive confirmation screens.

### Pricing Tabs

How We Feel does not show pricing tabs. The closest observed pattern is the compact period and color filter used in Analyze: the current period appears as a serif label with a chevron, while the open selector presents weekly, monthly, and all-time options plus four color filters directly over the report.

### Cards & Containers

**`tool-card`** — nearly square two-column tile with a color-family gradient, centered serif title, small count, and optional line illustration.

**`journal-card`** — dark rounded container for text, AI reflection, media, audio, or entry details.

**`modal-card`** — compact centered confirmation with a dimmed backdrop and one white affirmative action.

**`emotion-quadrant`** — one of four large, softly shaded color circles. Labels are centered and use dark serif or compact dark text.

**`emotion-symbol`** — a unique organic shape representing a named feeling. The symbol is paired with an italic serif statement and inherits its quadrant color.

### Inputs & Forms

**`tag-chip`** — small charcoal pill used for activity, company, location, and selected contextual values. Selection adds a colored tint and outline derived from the current emotion.

Text and numeric inputs use dark filled fields with large rounded corners and native keyboards. Attachment controls are circular icons embedded in a larger dark row.

### Status & Build Page

**`analytics-bar`** — rounded vertical or horizontal bar using one or several emotion colors. Inactive values use `{colors.surface-2}`. Circles, stacked bars, calendar marks, and rings all reuse the same four-color vocabulary.

Progress and status appear as a thin onboarding step line, a large circular check-in ring, compact emotion/streak pills, and colored chart marks. No build or changelog page is present in the inspected app.

### Navigation

**`bottom-nav`** — persistent four-tab navigation on black. Inactive icons are gray; the active icon receives the current section's small color accent. Labels remain compact and secondary.

Back, close, add, search, share, and overflow actions are unboxed line icons placed at the screen edges.

### Footer

There is no conventional page footer. Persistent app destinations use **`bottom-nav`**; focused flows replace it with a full-width **`button-primary`** above the bottom safe area. Settings use **`settings-row`**: a black row separated by a hairline, with a small outline icon before the label and a switch or thin arrow at the trailing edge.

## Do's and Don'ts

### Do

- Keep the canvas black and reserve color for emotional meaning, content categories, and measured feedback.
- Reuse the same four color families throughout selection, entries, tools, friends, and charts.
- Pair expressive serif questions with simple sans-serif instructions and controls.
- Give focused flows one obvious white pill action.
- Use large rounded forms and generous black space to make emotional content approachable.
- Let each recorded emotion acquire its own recognizable silhouette.

### Don't

- Don't introduce unrelated accent colors or decorative gradients.
- Don't place every control inside a card; allow utility rows and icons to sit directly on black.
- Don't use serif type for switches, small buttons, or dense metadata.
- Don't fill the interface with shadows, glass effects, or pale surfaces.
- Don't replace the emotional color model with arbitrary status colors.
- Don't use illustration on dense settings or data-management screens.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | 320–430px | Observed single-column layout; two-column tools grid and full-width bottom action |
| Mobile-Large | 431–600px | Preserve content proportions and increase side margins |
| Tablet | 601–1024px | Keep primary content centered; allow tools and analytics to expand without increasing text line length |
| Desktop | 1025px+ | Treat the app as a centered mobile-first canvas unless a dedicated wide composition is designed |

### Touch Targets

- Primary actions should be at least 52px high.
- Circular icon controls and tab targets should provide at least a 44px interactive area.
- Emotion shapes may be visually irregular, but their hit areas should remain generous and non-overlapping.
- Chips should maintain at least a 36px height and clear selected contrast.

### Collapsing Strategy

- Keep the two-column tool and practice grids on standard phones; collapse to one column only when cards become narrower than their titles and artwork allow.
- Preserve one centered primary action at the bottom of focused flows instead of placing actions side by side.
- On wider screens, center the mobile composition and add outer black space before increasing the width of emotion fields, friend cards, or analytics charts.
- Reduce `{typography.display-xl}` toward `{typography.display-md}` on compact widths while keeping the short editorial line breaks.

### Image Behavior

- Onboarding characters and emotion symbols should remain fully visible against black and must not be cropped through their defining silhouette.
- Attached photos use a wide rounded frame with aspect-fill cropping; keep the subject readable and preserve the card radius.
- Lesson thumbnails may crop photography to fill their rounded cards, while line-art exercise illustrations remain centered and uncropped.

## Iteration Guide

1. Start with the black canvas, editorial serif hierarchy, and one of the four established emotion color families.
2. Reference existing `components:` tokens before introducing a new shape or container.
3. Keep every new emotional state consistent across its symbol, entry, friend card, and analytical mark.
4. Use color and silhouette for expressive content; keep controls and settings neutral.
5. Check the primary flow at phone width with the bottom action and native safe areas visible.

## Known Gaps

- The inspected material shows an iPhone layout; dedicated tablet and desktop compositions are not visible.
- Video screens in SCRN have no still preview, so motion timing and transitions are not documented here.
- The original serif family and source design tokens are not available; the documented sizes, spacing, and colors are reconstructed from the visible screens.
- Error states, validation failures, offline behavior, and reduced-data variants are not visible in the reviewed scenarios.
</design-context>

Use the design system above for all UI you generate.
