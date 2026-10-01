<design-context>
---
version: 1
platform: iOS
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
    fontSize: 40
    fontWeight: 600
    lineHeight: 1.00
    letterSpacing: -1.2
  display-lg:
    fontFamily: Editorial Serif
    fontSize: 34
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: -0.9
  display-md:
    fontFamily: Editorial Serif
    fontSize: 30
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -0.6
  headline:
    fontFamily: Editorial Serif
    fontSize: 26
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -0.4
  card-title:
    fontFamily: Editorial Serif
    fontSize: 22
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -0.2
  subhead:
    fontFamily: Editorial Serif
    fontSize: 20
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: -0.1
  body-lg:
    fontFamily: System Sans
    fontSize: 17
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  body:
    fontFamily: System Sans
    fontSize: 15
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-sm:
    fontFamily: System Sans
    fontSize: 13
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: System Sans
    fontSize: 11
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  button:
    fontFamily: System Sans
    fontSize: 15
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: System Sans
    fontSize: 12
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 0.2
  mono:
    fontFamily: System Mono
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0

rounded:
  xs: 4
  sm: 8
  md: 14
  lg: 20
  xl: 28
  xxl: 36
  pill: 9999
  full: 9999

spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 32
  xxl: 48
  section: 64

components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: [16, 24]
  button-secondary:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: [12, 18]
  button-outlined:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: [14, 22]
  emotion-quadrant:
    backgroundColor: "{colors.mood-green}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    size: 128
  emotion-symbol:
    backgroundColor: "{colors.mood-green}"
    textColor: "{colors.on-primary}"
    typography: "{typography.card-title}"
    rounded: "{rounded.xxl}"
    size: 180
  tool-card:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.xl}"
    padding: 20
  journal-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 20
  tag-chip:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: [8, 14]
  settings-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: [14, 0]
  modal-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24
  bottom-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    height: 64
  analytics-bar:
    backgroundColor: "{colors.mood-yellow}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 8
---

# Overview

How We Feel uses an almost pure black canvas as a stage for warm white editorial typography and a four-color emotional model. The visual system is deliberately split between expressive moments and quiet utility: onboarding, emotion selection, tools, and analytics are bold and graphic, while settings, forms, and attachment controls stay restrained and familiar.

The four emotional families are the main source of color: yellow for pleasant high energy, green for pleasant low energy, blue for unpleasant low energy, and red for unpleasant high energy. Those colors do more than label states. They become soft three-dimensional blobs, entry symbols, gradients, rings, tool tiles, friend cards, and chart marks.

Serif display type supplies the app's reflective, journal-like voice. System sans-serif carries instructions, controls, data, and navigation. Large rounded shapes and pill actions soften the black interface without making it visually lightweight.

# Non-negotiable visual invariants

- Primary screens use Near-black full-screen canvas with no light-mode surfaces in the observed screens.
- Keep the canvas black and reserve color for emotional meaning, content categories, and measured feedback.
- Reuse the same four color families throughout selection, entries, tools, friends, and charts.
- Pair expressive serif questions with simple sans-serif instructions and controls.
- Give focused flows one obvious white pill action.
- Use large rounded forms and generous black space to make emotional content approachable.
- Let each recorded emotion acquire its own recognizable silhouette.
- Mobile screens use a single full-height column.

# Color and surfaces

- **Mood Green** (`{colors.mood-green}`): calm, pleasant low-energy states; also the most common active accent.
- **Mood Yellow** (`{colors.mood-yellow}`): focused, curious, and other pleasant high-energy states.
- **Mood Blue** (`{colors.mood-blue}`): tired, sad, and other unpleasant low-energy states.
- **Mood Red** (`{colors.mood-red}`): tense, stressed, and other unpleasant high-energy states.
- **Primary** (`{colors.primary}`): interaction emphasis derived from the green mood family.

- **Canvas** (`{colors.canvas}`): the default full-screen background.
- **Surface 1** (`{colors.surface-1}`): journal fields, inactive chart bars, and dense content cards.
- **Surface 2** (`{colors.surface-2}`): chips, attachment rows, circular icon buttons, and raised controls.
- **Surface 3** (`{colors.surface-3}`): menus, selected overlays, and stronger control contrast.
- **Hairline** (`{colors.hairline}`): dividers in settings, lists, and forms.
- **Outline** (`{colors.outline}`): borders for large circular choices and outlined actions.

- **Ink** (`{colors.ink}`): titles, body text, icons, and primary action surfaces.
- **Ink Muted** (`{colors.ink-muted}`): instructions, inactive navigation, metadata, and secondary labels.
- **Ink Subtle** (`{colors.ink-subtle}`): disabled choices and tertiary explanatory text.

- **Success Green** (`{colors.semantic-success}`): enabled switches and active confirmation states.
- **Overlay** (`{colors.semantic-overlay}`): dimming layer behind confirmation dialogs and sheets.

# Typography

- **Editorial Serif** — a high-contrast serif with soft, literary proportions for large questions, section titles, quotes, and emotional statements. Use `Georgia, Times New Roman, serif` when the original face is unavailable.
- **System Sans** — the native platform sans-serif for instructions, controls, metadata, chips, settings, and charts.
- **System Mono** — reserved for compact technical or numeric labels where alignment matters.

- `{typography.display-xl}` — 40 points — 600 — 1.00 — -1.2 points — Full-screen emotional statement
- `{typography.display-lg}` — 34 points — 600 — 1.04 — -0.9 points — Onboarding and check-in question
- `{typography.display-md}` — 30 points — 600 — 1.08 — -0.6 points — Primary screen title
- `{typography.headline}` — 26 points — 600 — 1.10 — -0.4 points — Analytics and tool section heading
- `{typography.card-title}` — 22 points — 600 — 1.10 — -0.2 points — Tool tile and quote card title
- `{typography.subhead}` — 20 points — 500 — 1.20 — -0.1 points — Entry state and secondary title
- `{typography.body-lg}` — 17 points — 400 — 1.35 — 0 — Prominent instructions
- `{typography.body}` — 15 points — 400 — 1.40 — 0 — Default copy and list rows
- `{typography.body-sm}` — 13 points — 400 — 1.35 — 0 — Chips and metadata
- `{typography.caption}` — 11 points — 400 — 1.30 — 0 — Tab labels and chart annotations
- `{typography.button}` — 15 points — 600 — 1.20 — 0 — Button labels
- `{typography.eyebrow}` — 12 points — 500 — 1.30 — 0.2 points — Period, category, and step labels
- `{typography.mono}` — 12 points — 400 — 1.40 — 0 — Compact aligned numeric data

- Use the serif for meaning and emotion; use the sans-serif for action and explanation.
- Keep display headings compact, often broken into two or three short lines.
- Italics may emphasize a feeling or reflective phrase, but not controls or dense utility copy.
- Chart labels remain small and direct so color and shape carry the hierarchy.

Use **Georgia** for a broadly available substitute with sufficient editorial contrast. **Fraunces** at restrained optical settings is a suitable open-source alternative. Use the native iOS system font or **Inter** for the sans-serif layer.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

- Base unit: 4 points.
- Screen margins are usually `{spacing.md}` 16 points; expressive onboarding compositions may use `{spacing.lg}` 24 points.
- Compact controls separate by `{spacing.xs}` 8 points; cards and screen sections by `{spacing.md}` 16 points to `{spacing.lg}` 24 points.
- Focused screens reserve the bottom safe area for a full-width primary action.

- Mobile screens use a single full-height column.
- Tools and practices use a two-column grid of nearly square rounded cards.
- Emotion selection uses a free spatial field of circles and organic forms rather than a strict list.
- Analytics is a continuous vertical report with one chart or relationship per viewport.
- Main content stays within 16 points side margins; immersive imagery and camera surfaces may reach the edges.

Black negative space separates emotional moments and prevents the saturated palette from becoming noisy. A screen generally has one large visual focus, one supporting text group, and one primary action. Dense content appears inside cards or scrollable reports rather than filling every open area.

- Mood symbols use subtle tonal gradients and soft internal shading to feel tactile.
- Tool cards use quiet radial lines, waves, or outline drawings within one color family.
- Analytical circles and bars may overlap, but labels stay crisp and flat.
- Photography appears only where the content calls for it, inside strongly rounded media frames.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

**`bottom-nav`** — persistent four-tab navigation on black. Inactive icons are gray; the active icon receives the current section's small color accent. Labels remain compact and secondary.

Back, close, add, search, share, and overflow actions are unboxed line icons placed at the screen edges.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

**`button-primary`** — full-width white pill anchored near the bottom of focused flows. Use for Continue, Done, Save, and Complete check-in.

**`button-secondary`** — compact charcoal pill for contextual actions such as reply, reflect, tools, or editing metadata.

**`button-outlined`** — black pill with a thin light outline for lower-emphasis completion or destructive confirmation screens.

**`tool-card`** — nearly square two-column tile with a color-family gradient, centered serif title, small count, and optional line illustration.

**`journal-card`** — dark rounded container for text, AI reflection, media, audio, or entry details.

**`modal-card`** — compact centered confirmation with a dimmed backdrop and one white affirmative action.

**`emotion-quadrant`** — one of four large, softly shaded color circles. Labels are centered and use dark serif or compact dark text.

**`emotion-symbol`** — a unique organic shape representing a named feeling. The symbol is paired with an italic serif statement and inherits its quadrant color.

**`tag-chip`** — small charcoal pill used for activity, company, location, and selected contextual values. Selection adds a colored tint and outline derived from the current emotion.

Text and numeric inputs use dark filled fields with large rounded corners and native keyboards. Attachment controls are circular icons embedded in a larger dark row.

**`analytics-bar`** — rounded vertical or horizontal bar using one or several emotion colors. Inactive values use `{colors.surface-2}`. Circles, stacked bars, calendar marks, and rings all reuse the same four-color vocabulary.

Progress and status appear as a thin onboarding step line, a large circular check-in ring, compact emotion/streak pills, and colored chart marks. No build or changelog page is present in the inspected app.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

- Emotional symbols are built from circles, capsules, pinched rectangles, folds, and paired lobes.
- Onboarding characters use the same silhouettes with tiny white line limbs and faces.
- Photo attachments sit inside wide `{rounded.xl}` frames.
- Exercise illustrations use thin white outlines centered inside softly colored cards.

- Onboarding characters and emotion symbols should remain fully visible against black and must not be cropped through their defining silhouette.
- Attached photos use a wide rounded frame with aspect-fill cropping; keep the subject readable and preserve the card radius.
- Lesson thumbnails may crop photography to fill their rounded cards, while line-art exercise illustrations remain centered and uncropped.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

**`analytics-bar`** — rounded vertical or horizontal bar using one or several emotion colors. Inactive values use `{colors.surface-2}`. Circles, stacked bars, calendar marks, and rings all reuse the same four-color vocabulary.

Progress and status appear as a thin onboarding step line, a large circular check-in ring, compact emotion/streak pills, and colored chart marks. No build or changelog page is present in the inspected app.

- **Success Green** (`{colors.semantic-success}`): enabled switches and active confirmation states.
- **Overlay** (`{colors.semantic-overlay}`): dimming layer behind confirmation dialogs and sheets.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- - Primary actions should be at least 52 points high.
- Circular icon controls and tab targets should provide at least a 44 points interactive area.
- Emotion shapes may be visually irregular, but their hit areas should remain generous and non-overlapping.
- Chips should maintain at least a 36 points height and clear selected contrast.
- - Keep the two-column tool and practice grids on standard phones; collapse to one column only when cards become narrower than their titles and artwork allow.
- Preserve one centered primary action at the bottom of focused flows instead of placing actions side by side.
- On wider screens, center the mobile composition and add outer black space before increasing the width of emotion fields, friend cards, or analytics charts.
- Reduce `{typography.display-xl}` toward `{typography.display-md}` on compact widths while keeping the short editorial line breaks.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not introduce unrelated accent colors or decorative gradients.
- Do not place every control inside a card; allow utility rows and icons to sit directly on black.
- Do not use serif type for switches, small buttons, or dense metadata.
- Do not fill the interface with shadows, glass effects, or pale surfaces.
- Do not replace the emotional color model with arbitrary status colors.
- Do not use illustration on dense settings or data-management screens.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
