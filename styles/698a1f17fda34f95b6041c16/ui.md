<design-context>
---
version: alpha
name: MES-Diary-design-analysis
description: "A calm school dashboard on pale lavender, built from bright white rounded cards, purple-blue actions, compact weekly navigation, color-coded service icons, and structured lesson, grade, task, attendance, meal, and account data."
colors:
  primary: "#6B4DE6"
  on-primary: "#FFFFFF"
  primary-hover: "#8065EC"
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
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 20px, xxl: 26px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  lesson-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px}
  service-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 10px}
  week-strip: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
---
## Overview

MES Diary is a school operations dashboard where white cards and compact color cues organize time, work, progress, services, and balances.

**Key Characteristics:**
- Pale lavender background.
- White lesson and service cards.
- Weekly date strip.
- Purple-blue actions and multicolor service icons.
- Five fixed school destinations.

## Colors

### Brand & Accent

Purple anchors brand and selection; blue supports account and information actions. Service colors remain categorical accents.

### Surface

Use pale lavender canvas with bright white cards and softly tinted selected controls.

### Text

Near-black carries subjects and decisions; gray carries time, room, teacher, and supporting status.

### Semantic

Green means present or positive change; blue information; red alerts or debt; orange student identity.

## Typography

### Font Family

Use SF Pro Display for section titles and SF Pro Text for schedule and account detail.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Authentication claim |
| headline | 20px | 700 | Destination title |
| card-title | 15px | 600 | Subject and service |
| body | 12px | 400 | Homework and event detail |
| caption | 9px | 400 | Time, room, date, navigation |

### Principles

- Lead with subject or service.
- Keep time and room aligned.
- Separate homework from lesson metadata.

### Note on Font Substitutes

Inter is suitable; preserve compact Cyrillic and readable numeric grades.

## Layout

### Spacing System

Use a 4px base, 10–12px card gaps, and 12px screen gutters.

### Grid & Container

Schedule is one column; School uses a service grid plus dashboard cards; grades and accounts use lists.

### Whitespace Philosophy

Data is dense but grouped; increase space around warnings, empty states, and account decisions.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Lavender canvas | Screen background |
| 1 | White card | Lesson and service |
| 2 | Sticky white navigation | Destinations |
| 3 | Sheet or banner | Filters and errors |

### Decorative Depth

Use soft icon gradients and subtle card separation, not heavy shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Labels |
| rounded-sm | 8px | Buttons and fields |
| rounded-md | 12px | Lessons and services |
| rounded-lg | 16px | Account panels |
| rounded-full | full | Student avatar and date selection |

### Photography & Illustration Geometry

Service icons stay centered in compact squares. Use photography only when tied to student or school content.

## Components

### Buttons

Primary actions are purple or blue; secondary actions are pale and outlined.

### Pricing Tabs

Week dates, grade grouping, and filters use compact segmented controls with one filled selection.

### Cards & Containers

Lesson cards separate time, subject, room, homework, and substitution. Dashboard cards group one school metric.

### Inputs & Forms

Authentication and account fields use large white rounded rows with purple focus.

### Status & Build Page

Loading uses card skeletons. Payment and service errors use dismissible banners above affected content.

### Navigation

Keep Schedule, Grades, Tasks, School, and Accounts fixed; active state is dark with a filled icon.

### Footer

No footer; bottom navigation owns the safe area.

## Do's and Don'ts

### Do

- Keep student context visible.
- Separate lesson, break, and event types.
- Label every service icon.
- Style native controls consistently.

### Don't

- Don't encode grades by color alone.
- Don't crowd homework into the title row.
- Don't use heavy shadows.
- Don't turn icons into unlabeled decoration.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten dates and lesson metadata |
| Standard | 375–430px | Default schedule and service grid |
| Wide | 431px+ | Expand dashboard gutters |

### Touch Targets

Dates, lessons, services, filters, accounts, and navigation remain at least 44px.

### Collapsing Strategy

Scroll the week strip horizontally and stack school dashboard metrics before shrinking type.

### Image Behavior

Contain service icons and preserve student avatar circles.

## Iteration Guide

Tune daily schedule first, then grades, homework, school services, and account clarity.

## Known Gaps

- Teacher messaging was not visually sampled.
- Payment completion was not represented.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
