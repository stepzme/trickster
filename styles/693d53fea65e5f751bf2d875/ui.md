<design-context>
---
version: 1
platform: iOS
name: hh-business-design-analysis
description: "A utilitarian recruiter interface built from white surfaces, near-black typography, bright blue actions, pale status chips, and compact vacancy or candidate cards. The visual system favors operational clarity, visible state, and direct contact over decorative branding."
colors: { primary: "#087EF5", on-primary: "#FFFFFF", primary-soft: "#EAF4FF", accent: "#111111", ink: "#141414", ink-muted: "#777B80", ink-subtle: "#B1B5BA", canvas: "#FFFFFF", surface-1: "#F5F6F7", surface-2: "#EEF0F2", hairline: "#E0E3E6", semantic-success: "#33A96D", semantic-warning: "#F3B34B", semantic-danger: "#D95454", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 5, sm: 9, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  vacancy-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  status-chip: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.primary}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [5, 9]}
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  navigation-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

hh business is a restrained recruiter workspace centered on vacancies, candidate discovery, chat, saved profiles, and operational status.

# Non-negotiable visual invariants

- Keep vacancy state visible.
- Put the next recruiter action near identity.
- Preserve filters and list position.
- Vacancy lists stack filters, notices, and cards; candidate detail stacks identity, contact action, and structured sections.
- Keep lists compact while giving profile identity and primary actions clear separation.

# Color and surfaces

Use blue for primary actions and near-black for strong secondary or restriction actions.

Keep the canvas white, cards white, and grouped or inactive areas pale gray.

Use black for vacancy and candidate identity, gray for metadata, and green for active-search state.

Use green for active or verified state, amber for restrictions or pending payment, and red for destructive action.

# Typography

Use SF Pro Display for page and candidate titles and SF Pro Text for vacancy details and metadata.

Use 26–30 points for page titles, 22 points for candidate identity, 16 points for card titles, 14 points body, and 10–12 points labels.

Prioritize role, candidate, location, state, and next action over secondary details.

Use the platform sans or Inter.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12 points gutters, 10–12 points gaps, and 14 points card padding.

Vacancy lists stack filters, notices, and cards; candidate detail stacks identity, contact action, and structured sections.

Keep lists compact while giving profile identity and primary actions clear separation.

Decoration is minimal; status color and avatar framing provide visual emphasis.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Vacancies, Search, Chats, Favorites, and Profile stay in the bottom bar.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Use full-width blue contact or payment actions and black restriction-recovery actions.

Use vacancy cards, candidate sections, status notices, payment panels, and metadata rows.

Search and filters remain compact; vacancy and candidate fields use explicit labels and values.

Show draft, active, archived, payment, verification, contact, and job-search status in context.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Use contained square or circular candidate imagery and neutral placeholders without decorative scenes.

Contain candidate photos and placeholders without aggressive crop.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show draft, active, archived, payment, verification, contact, and job-search status in context.

Use green for active or verified state, amber for restrictions or pending payment, and red for destructive action.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep tabs, card menus, contact, favorite, search, and footer actions at least 44 points.
- Preserve identity, state, restriction, and primary action; collapse secondary profile fields first.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not hide payment restrictions.
- Do not overdecorate operational cards.
- Do not bury contact access below long profile text.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
