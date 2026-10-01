<design-context>
---
version: 1
platform: iOS
name: Google-Gemini-design-analysis
description: "A quiet AI conversation interface with an expansive white canvas, a blue-to-violet greeting accent, soft gray prompt chips, pale blue user messages, and a large rounded composer anchored to the bottom. Minimal chrome keeps the prompt, generated answer, tools, and source-rich content in focus."
colors: {primary: "#4285F4", on-primary: "#FFFFFF", primary-focus: "#2B6ED7", ink: "#1F1F1F", ink-muted: "#5F6368", ink-subtle: "#8A8D91", ink-tertiary: "#BDC1C6", canvas: "#FFFFFF", surface-1: "#F8F9FA", surface-2: "#F1F3F4", surface-3: "#E8EAED", surface-4: "#DADCE0", hairline: "#E4E6E8", hairline-strong: "#C9CDD2", hairline-tertiary: "#ADB3BA", inverse-canvas: "#202124", inverse-surface-1: "#303134", inverse-surface-2: "#46484C", inverse-ink: "#FFFFFF", brand-secure: "#7B61FF", semantic-success: "#34A853", semantic-overlay: "#202124"}
typography:
  display-xl: {fontFamily: Google Sans, fontSize: 38, fontWeight: 500, lineHeight: 1.08, letterSpacing: -0.7}
  display-lg: {fontFamily: Google Sans, fontSize: 30, fontWeight: 500, lineHeight: 1.12, letterSpacing: -0.4}
  display-md: {fontFamily: Google Sans, fontSize: 25, fontWeight: 500, lineHeight: 1.16, letterSpacing: -0.2}
  headline: {fontFamily: Google Sans, fontSize: 21, fontWeight: 500, lineHeight: 1.22, letterSpacing: -0.1}
  card-title: {fontFamily: Google Sans Text, fontSize: 16, fontWeight: 500, lineHeight: 1.28, letterSpacing: 0}
  subhead: {fontFamily: Google Sans Text, fontSize: 15, fontWeight: 500, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: Google Sans Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0}
  body: {fontFamily: Google Sans Text, fontSize: 14, fontWeight: 400, lineHeight: 1.44, letterSpacing: 0}
  body-sm: {fontFamily: Google Sans Text, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  caption: {fontFamily: Google Sans Text, fontSize: 10, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  button: {fontFamily: Google Sans Text, fontSize: 14, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: Google Sans Text, fontSize: 11, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: Roboto Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12 18}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 11 16}
  prompt-chip: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12}
  user-message: {backgroundColor: "#F0F4FC", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12}
  composer: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 14 12}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 4 8}
  tool-menu: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 8}
---

# Overview

Google Gemini is an expansive, low-chrome conversation canvas. A soft blue-violet greeting establishes identity, while the prompt, response, generated media, and bottom composer remain calm and utilitarian.

# Non-negotiable visual invariants

- Primary screens use white canvas.
- The recurring color treatment uses gradient greeting.
- Characteristic content and controls use pale prompt chips.
- Navigation or control chrome uses rounded bottom composer.
- Characteristic content and controls use pale blue user bubbles.
- The sampled screens consistently show compact tool menu.
- Navigation or control chrome uses minimal header.
- The sampled screens consistently show rich answer content.

# Color and surfaces

Google blue anchors active controls and blends toward violet or pink only in the greeting and Gemini sparkle. Most interaction remains neutral.

White fills the conversation. Very pale gray groups prompt chips, menus, and composer controls; pale blue separates the user prompt.

Near-black carries prompts, answers, and titles. Medium gray supports helper text, model labels, and disclaimers.

Blue indicates active or send state, multicolor sparkle identifies AI generation, green confirms completion, and red is reserved for errors.

# Typography

Use Google Sans for greetings and headings and Google Sans Text for prompts, answers, controls, citations, and disclaimers.

- display-lg — 30 points — 500 — Greeting
- headline — 21 points — 500 — Answer section
- card-title — 16 points — 500 — Tool or suggestion
- body — 14 points — 400 — Prompt and answer
- caption — 10 points — 400 — Model and disclaimer

- Keep the prompt and answer as the primary reading sequence.
- Use moderate weights and generous line height for long responses.
- Let content type, not decorative chrome, create hierarchy.

Use Google Sans where licensed; otherwise use Roboto or the platform sans with open shapes and neutral proportions.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12–16 points control gaps, 16–20 points answer spacing, and generous empty space above the initial composer.

The header stays minimal, content uses one readable column, and a wide rounded composer remains anchored near the bottom safe area.

Whitespace keeps the system calm and leaves room for unpredictable answer length. Avoid framing every response block as a card.

Use a restrained gradient wordmark or sparkle, soft surface contrast, generated media, maps, and source-rich answer content. Avoid ornamental background gradients.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use a minimal top bar with menu, conversation title or Gemini label, and avatar. Conversation history lives behind the menu rather than a persistent bottom bar.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Send uses a compact high-contrast icon action. Secondary actions are neutral icon buttons or pale pills; active generation may use blue.

Suggestion chips are lightly outlined or tonal. User prompts use pale blue bubbles; answers generally remain unboxed in the reading column.

The composer combines multiline text, add, tools, model, voice, and send. Native input behavior must inherit these surfaces, radii, typography, spacing, and blue focus.

Keep generating state, stop action, model, attached media, citations, feedback, and accuracy disclaimer near the response they affect.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Generated images, maps, and media use large edge-aligned rectangles with modest rounding. Do not treat generated content as the interface illustration style.

Fit generated images and maps to content width, preserve their aspect ratio, and keep actions and captions outside the visual.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Keep generating state, stop action, model, attached media, citations, feedback, and accuracy disclaimer near the response they affect.

Blue indicates active or send state, multicolor sparkle identifies AI generation, green confirms completion, and red is reserved for errors.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Menu, suggestions, add, tools, model, voice, send, feedback, and media actions remain at least 44 points.
- Preserve prompt, answer, composer, model, send or stop, and citations; collapse suggestion chips and secondary response actions first.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not wrap every paragraph in a card.
- Do not use generated imagery as permanent UI decoration.
- Do not let tool controls compete with the prompt field.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

- Source expansion, history management, and error recovery were not fully sampled.
- Tablet and landscape layouts were not represented.

</design-context>
