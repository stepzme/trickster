<design-context>
---
version: 1
platform: iOS
name: Pillowtalk-design-analysis
description: "A cinematic dark journaling interface with a pure-black canvas, lowercase white typography, acid-lime moments, oversized ambient photo-blur panels, translucent circular capture controls, and a sparse four-tab shell."
colors: {primary: "#E5FF7C", on-primary: "#10110D", primary-focus: "#C9E85C", ink: "#F5F5F2", ink-muted: "#C8C8C3", ink-subtle: "#8F918C", ink-tertiary: "#5F615D", canvas: "#050505", surface-1: "#111211", surface-2: "#1B1D1B", surface-3: "#282A27", surface-4: "#353834", hairline: "#292B29", hairline-strong: "#41443F", hairline-tertiary: "#565A53", inverse-canvas: "#F4F4F0", inverse-surface-1: "#E8E8E3", inverse-surface-2: "#DADBD4", inverse-ink: "#111210", brand-secure: "#D8F46A", semantic-success: "#DFFF72", semantic-overlay: "#000000"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 42, fontWeight: 400, lineHeight: 1.04, letterSpacing: -1.1}
  display-lg: {fontFamily: SF Pro Display, fontSize: 34, fontWeight: 400, lineHeight: 1.08, letterSpacing: -0.7}
  display-md: {fontFamily: SF Pro Display, fontSize: 28, fontWeight: 400, lineHeight: 1.12, letterSpacing: -0.4}
  headline: {fontFamily: SF Pro Display, fontSize: 23, fontWeight: 400, lineHeight: 1.18, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 17, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 18, xl: 28, xxl: 36, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 48}
components:
  button-primary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14 20}
  button-primary-pressed: {backgroundColor: "{colors.inverse-surface-2}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 12 16}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 10}
  journal-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 18}
  capture-panel: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.headline}", rounded: "{rounded.xl}", padding: 20}
  text-input: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12 14}
  status-badge: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 4 8}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8 10}
---

# Overview

Pillowtalk is a moody voice-journal interface. Pure black creates a private space, large lowercase white type feels conversational, and acid lime appears as a brief reward or current-state signal rather than constant branding.

# Non-negotiable visual invariants

- Primary screens use black canvas.
- The typographic hierarchy uses lowercase white type.
- Characteristic content and controls use blurred atmospheric capture panel.
- Characteristic content and controls use translucent controls.
- The sampled screens consistently show acid-lime rewards.
- The sampled screens consistently show compact calendar rail.
- The recurring color treatment uses floating white add action.
- The sampled screens consistently show four quiet destinations.

# Color and surfaces

Acid lime marks unlocked insight, selected dates, and moments of progress. Most primary actions remain white or translucent so the accent stays rare.

Black is continuous; charcoal panels and softly blurred imagery create capture and entry surfaces; white appears as the strongest inverse control.

White leads prompts and journal content, soft gray carries guidance and dates, and black is used on white or lime actions.

Lime indicates progress or insight; neutral white indicates capture or add; destructive states stay quiet until confirmation.

# Typography

Use SF Pro Display and Text with light-to-medium weights, large lowercase prompts, and compact supporting labels.

- display-xl — 42 points — 400 — Date or reflective state
- display-lg — 34 points — 400 — Capture prompt
- headline — 23 points — 400 — Entry title
- body-lg — 17 points — 400 — Reflection text
- caption — 10 points — 400 — Tab or date meta

- Favor calm lowercase language and generous leading.
- Let one prompt dominate each capture state.
- Keep utility labels compact and secondary.

Use a clean humanist system sans with light weights; avoid condensed or aggressively geometric display faces.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16–20 points card padding, 12 points navigation rhythm, and large vertical breathing room around reflective content.

Today uses one oversized capture panel; Entries is a single calendar-led column; Patterns and Explore use stacked insight cards.

Dark empty space creates privacy and pacing. The interface should feel like one thought at a time, not a data dashboard.

Use soft photographic blur, translucency, and subtle glow; avoid crisp layered shadows or bright gradient chrome.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use a four-item bottom bar for Today, Explore, Entries, and Patterns, plus a floating white add control.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Use white pills for decisive continuation, white circles for add, and translucent round controls for Type, Yap, and Transcribe.

Capture and entry cards are oversized and atmospheric; insight and pattern cards remain sparse with large text and minimal chrome.

Typed entries use dark rounded fields; voice capture uses centered microphone controls; native inputs retain platform behavior but inherit this dark, airy styling.

Expose recording, transcript, reminder, mood, analysis, and unlocked-pattern states beside the relevant journal entry.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Photography is enlarged and heavily blurred inside oversized rounded panels; organic brand marks stay small and isolated.

Allow ambient imagery to crop and blur behind text, maintaining sufficient contrast and rounded panel edges.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Expose recording, transcript, reminder, mood, analysis, and unlocked-pattern states beside the relevant journal entry.

Lime indicates progress or insight; neutral white indicates capture or add; destructive states stay quiet until confirmation.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Capture modes, add, dates, tabs, entry rows, and pattern actions remain at least 44 points.
- Preserve prompt, capture action, date, entry content, and current pattern; reduce secondary suggestions first.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not turn reflection into dense analytics cards.
- Do not use multiple saturated accents or glossy gradients.
- Do not shrink the capture prompt beneath utility chrome.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
