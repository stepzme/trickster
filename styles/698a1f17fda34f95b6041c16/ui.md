<design-context>
---
version: 1
platform: iOS
name: MES-Diary-design-analysis
description: "A calm school dashboard on pale lavender, built from bright white rounded cards, purple-blue actions, compact weekly navigation, color-coded service icons, and structured lesson, grade, task, attendance, meal, and account data."
colors:
  primary: "#6B4DE6"
  on-primary: "#FFFFFF"
  primary-focus: "#5337C4"
  ink: "#202027"
  ink-muted: "#777784"
  ink-subtle: "#A8A6B2"
  ink-tertiary: "#CBC8D2"
  canvas: "#F7F5FC"
  surface-1: "#FFFFFF"
  surface-2: "#F0ECFA"
  surface-3: "#E7E1F4"
  surface-4: "#DAD2EA"
  hairline: "#E8E4EF"
  hairline-strong: "#D2CCDC"
  hairline-tertiary: "#BAB3C5"
  inverse-canvas: "#382475"
  inverse-surface-1: "#4A3487"
  inverse-surface-2: "#5D4799"
  inverse-ink: "#FFFFFF"
  brand-secure: "#3975ED"
  semantic-success: "#35AE6C"
  semantic-overlay: "#202027"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 26, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13 18}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 16}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10 14}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 16}
  lesson-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12}
  service-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 10}
  week-strip: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8 12}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7 8}
---

# Overview

MES Diary is a school operations dashboard where white cards and compact color cues organize time, work, progress, services, and balances.

# Non-negotiable visual invariants

- Primary screens use Pale lavender background.
- Keep student context visible.
- Separate lesson, break, and event types.
- Label every service icon.
- Style native controls consistently.
- Schedule is one column; School uses a service grid plus dashboard cards; grades and accounts use lists.
- Data is dense but grouped; increase space around warnings, empty states, and account decisions.

# Color and surfaces

Purple anchors brand and selection; blue supports account and information actions. Service colors remain categorical accents.

Use pale lavender canvas with bright white cards and softly tinted selected controls.

Near-black carries subjects and decisions; gray carries time, room, teacher, and supporting status.

Green means present or positive change; blue information; red alerts or debt; orange student identity.

# Typography

Use SF Pro Display for section titles and SF Pro Text for schedule and account detail.

- display-lg — 30 points — 700 — Authentication claim
- headline — 20 points — 700 — Destination title
- card-title — 15 points — 600 — Subject and service
- body — 12 points — 400 — Homework and event detail
- caption — 9 points — 400 — Time, room, date, navigation

- Lead with subject or service.
- Keep time and room aligned.
- Separate homework from lesson metadata.

Inter is suitable; preserve compact Cyrillic and readable numeric grades.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 10–12 points card gaps, and 12 points screen gutters.

Schedule is one column; School uses a service grid plus dashboard cards; grades and accounts use lists.

Data is dense but grouped; increase space around warnings, empty states, and account decisions.

Use soft icon gradients and subtle card separation, not heavy shadow.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Keep Schedule, Grades, Tasks, School, and Accounts fixed; active state is dark with a filled icon.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Primary actions are purple or blue; secondary actions are pale and outlined.

Lesson cards separate time, subject, room, homework, and substitution. Dashboard cards group one school metric.

Authentication and account fields use large white rounded rows with purple focus.

Loading uses card skeletons. Payment and service errors use dismissible banners above affected content.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Service icons stay centered in compact squares. Use photography only when tied to student or school content.

Contain service icons and preserve student avatar circles.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Loading uses card skeletons. Payment and service errors use dismissible banners above affected content.

Green means present or positive change; blue information; red alerts or debt; orange student identity.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Dates, lessons, services, filters, accounts, and navigation remain at least 44 points.
- Scroll the week strip horizontally and stack school dashboard metrics before shrinking type.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not encode grades by color alone.
- Do not crowd homework into the title row.
- Do not use heavy shadows.
- Do not turn icons into unlabeled decoration.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
