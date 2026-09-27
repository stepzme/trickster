<design-context>
---
version: alpha
name: Yandex-Practicum-design-analysis
description: "A quiet learning workspace built from white and near-white surfaces, strong black typography, charcoal actions, thin gray structure, and collectible 3D course emblems. The interface gives the current course and next lesson clear priority while catalog, support, and account tools remain restrained."

colors:
  primary: "#242426"
  on-primary: "#FFFFFF"
  primary-pressed: "#0F0F10"
  accent-blue: "#3A9CD6"
  accent-orange: "#FF6A3D"
  ink: "#171719"
  ink-muted: "#6F7074"
  ink-subtle: "#A6A7AB"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F5F5F5"
  surface-3: "#EDEDEE"
  hairline: "#DEDFE1"
  semantic-success: "#2D9C68"
  semantic-warning: "#E3A316"
  semantic-danger: "#DE4848"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: YS Text, fontSize: 36px, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: YS Text, fontSize: 30px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.55px }
  display-md: { fontFamily: YS Text, fontSize: 25px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.35px }
  headline: { fontFamily: YS Text, fontSize: 21px, fontWeight: 650, lineHeight: 1.2, letterSpacing: -0.2px }
  card-title: { fontFamily: YS Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11px, fontWeight: 450, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0.1px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 20px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 20px }
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px }
  course-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16px }
  search-input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 11px 14px }
  progress-bar: { backgroundColor: "{colors.surface-3}", textColor: "{colors.primary}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 0 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

Yandex Practicum is a restrained learning companion where monochrome structure and one tactile course emblem keep attention on progress and the next action.

## Colors

Use white, near-white, black, and soft gray for the shell. Let each course emblem supply a controlled accent.

### Brand & Accent

Use charcoal for primary actions and Practicum identity; use blue for completion checks and course-specific color only in bounded artwork.

### Surface

Use white pages, very pale section panels, and clean cards with faint separation rather than heavy outlines.

### Text

Use near-black for titles and lessons, medium gray for duration and description, and subtle gray for disabled or completed-secondary information.

### Semantic

Use blue or green checks for completed lessons, amber for deadlines, red for errors, and course colors only for identity.

## Typography

Typography is direct and instructional, with bold course titles and compact curriculum lists.

### Font Family

Use YS Text or a neutral grotesk with clear Cyrillic and long-form readability.

### Hierarchy

Use 26–30px page titles, 20–24px course titles, 16–18px section headings, 14–16px lessons, and 11–13px metadata.

### Principles

Use sentence case, keep lesson names scannable, and pair progress numbers with visual progress rather than color alone.

### Note on Font Substitutes

Use SF Pro or Inter when YS Text is unavailable; preserve generous line-height in lesson content.

## Layout

Use one active-course hero, stacked assignment and news sections, filterable catalog lists, and focused curriculum overlays.

### Spacing System

Use a 4px base, 8px between lesson rows, 12px card gaps, 16px page gutters, and 24–32px between learning sections.

### Grid & Container

The phone layout is a single column. Course catalog cards align text left and a compact emblem right.

### Whitespace Philosophy

Give the current course and next action space; keep curriculum lists dense enough to communicate sequence and progress.

## Elevation & Depth

Use subtle card separation, modal overlays, and small artwork shadows. Avoid layered chrome around lesson content.

### Decorative Depth

Use tactile 3D course emblems and small benefit objects as the only pronounced depth; the learning shell remains flat.

## Shapes

Use modest rounded cards, rectangular primary buttons, pill search, and compact circular identity marks.

### Border Radius Scale

Use 8px for buttons and chips, 12–16px for cards, 20px for large panels, and pills only for search or compact filters.

### Photography & Illustration Geometry

Center isolated course emblems in square areas without cropping. Profile avatars are circular; educational content follows its own format.

## Components

Native scrolling, keyboard, and messaging behavior are acceptable, but visible controls must inherit Practicum monochrome, radii, and typography.

### Buttons

Use charcoal rectangles for Continue and primary choices, pale gray secondary actions, and text links for low-priority navigation.

### Pricing Tabs

Use outlined discipline chips and compact dropdown filters in Catalog; selected states become darker or lightly filled.

### Cards & Containers

Course cards pair program facts with an emblem. Learning cards show progress, Continue, assignment status, and important updates.

### Inputs & Forms

Use white or pale fields with thin borders, compact search, and simple message composition in Support.

### Status & Build Page

Show course progress, completed lessons, assignment availability, archive count, online support, and payment schedule with explicit labels.

### Navigation

Use a four-item bottom bar for Learning, Catalog, Support, and Account. Keep the active course within one tap of launch.

### Footer

There is no footer; theme, help, feedback, license, legal information, payments, and logout belong to Account.

## Do's and Don'ts

Prioritize learning continuity and course clarity.

### Do

- Put the next lesson and Continue action first.
- Keep curriculum progress visible.
- Use course emblems consistently.
- Style native controls in the Practicum system.

### Don't

- Do not use default platform blue.
- Do not turn every course into a colorful theme.
- Do not hide completed state behind color alone.
- Do not decorate lesson content unnecessarily.

## Responsive Behavior

Use additional width for navigation and curriculum context rather than oversized cards.

### Breakpoints

Phones use one column and overlays; larger screens may place course navigation beside lesson content and show a denser catalog grid.

### Touch Targets

Continue, lesson, course, filter, search, support, account row, and bottom navigation targets require at least 44px.

### Collapsing Strategy

Keep course title, progress, next lesson, Continue, and assignment status; collapse secondary news and long catalog metadata first.

### Image Behavior

Use contain for course emblems and benefit objects, stable square frames in the catalog, and no decorative cropping.

## Iteration Guide

Start with sign-in, empty and active Learning, course overview, curriculum, lesson entry, Catalog, Support, and Account. Add notes, assignments, payments, and benefits next.

## Known Gaps

Fifty-six available flow structures and representative screens across sign-in, empty and active learning, curriculum, Catalog, Support, and Account were sampled. Video-only transitions and full lesson content were not exhaustively reviewed.

</design-context>

Use the design system above for all UI you generate.
