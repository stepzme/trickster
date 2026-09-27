<design-context>
---
version: alpha
name: hh-business-design-analysis
description: "A utilitarian recruiter interface built from white surfaces, near-black typography, bright blue actions, pale status chips, and compact vacancy or candidate cards. The visual system favors operational clarity, visible state, and direct contact over decorative branding."
colors: { primary: "#087EF5", on-primary: "#FFFFFF", primary-hover: "#006DDB", primary-soft: "#EAF4FF", accent: "#111111", ink: "#141414", ink-muted: "#777B80", ink-subtle: "#B1B5BA", canvas: "#FFFFFF", surface-1: "#F5F6F7", surface-2: "#EEF0F2", hairline: "#E0E3E6", semantic-success: "#33A96D", semantic-warning: "#F3B34B", semantic-danger: "#D95454", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 5px, sm: 9px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px }
  vacancy-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  status-chip: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.primary}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 5px 9px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

hh business is a restrained recruiter workspace centered on vacancies, candidate discovery, chat, saved profiles, and operational status.

## Colors

### Brand & Accent
Use blue for primary actions and near-black for strong secondary or restriction actions.

### Surface
Keep the canvas white, cards white, and grouped or inactive areas pale gray.

### Text
Use black for vacancy and candidate identity, gray for metadata, and green for active-search state.

### Semantic
Use green for active or verified state, amber for restrictions or pending payment, and red for destructive action.

## Typography

### Font Family
Use SF Pro Display for page and candidate titles and SF Pro Text for vacancy details and metadata.

### Hierarchy
Use 26–30px for page titles, 22px for candidate identity, 16px for card titles, 14px body, and 10–12px labels.

### Principles
Prioritize role, candidate, location, state, and next action over secondary details.

### Note on Font Substitutes
Use the platform sans or Inter.

## Layout

### Spacing System
Use a 4px base, 12px gutters, 10–12px gaps, and 14px card padding.

### Grid & Container
Vacancy lists stack filters, notices, and cards; candidate detail stacks identity, contact action, and structured sections.

### Whitespace Philosophy
Keep lists compact while giving profile identity and primary actions clear separation.

## Elevation & Depth
Use outlines and subtle surface contrast instead of strong shadow.

### Decorative Depth
Decoration is minimal; status color and avatar framing provide visual emphasis.

## Shapes

### Border Radius Scale
Use 9px for chips and fields, 14px for cards and notices, and circles for avatars and icon actions.

### Photography & Illustration Geometry
Use contained square or circular candidate imagery and neutral placeholders without decorative scenes.

## Components

### Buttons
Use full-width blue contact or payment actions and black restriction-recovery actions.

### Pricing Tabs
Use horizontal pills for Active, Drafts, Archived, and related vacancy states.

### Cards & Containers
Use vacancy cards, candidate sections, status notices, payment panels, and metadata rows.

### Inputs & Forms
Search and filters remain compact; vacancy and candidate fields use explicit labels and values.

### Status & Build Page
Show draft, active, archived, payment, verification, contact, and job-search status in context.

### Navigation
Vacancies, Search, Chats, Favorites, and Profile stay in the bottom bar.

### Footer
Keep the footer white with a black active icon and concise labels.

## Do's and Don'ts

### Do
- Keep vacancy state visible.
- Put the next recruiter action near identity.
- Preserve filters and list position.

### Don't
- Don't hide payment restrictions.
- Don't overdecorate operational cards.
- Don't bury contact access below long profile text.

## Responsive Behavior

### Breakpoints
Use one column on phones, list-detail split view on tablet, and a capped recruiter workspace on desktop.

### Touch Targets
Keep tabs, card menus, contact, favorite, search, and footer actions at least 44px.

### Collapsing Strategy
Preserve identity, state, restriction, and primary action; collapse secondary profile fields first.

### Image Behavior
Contain candidate photos and placeholders without aggressive crop.

## Iteration Guide
1. Build vacancy states, cards, and bottom navigation.
2. Add search, candidate detail, contact, and favorites.
3. Add chat, payment, verification, and advanced filters.

## Known Gaps
- Tokens were inferred visually from available mobile screens.
- Draft vacancies and candidate profile screens were image-reviewed through the screens fallback.
- One preview was video-only; vacancy creation and chat were not deeply sampled.

</design-context>
