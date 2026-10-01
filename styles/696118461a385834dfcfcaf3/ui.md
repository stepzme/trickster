<design-context>
---
version: 1
platform: iOS
name: For-Profi-design-analysis
description: "A compact professional job marketplace with a very light lavender canvas, white rounded order cards, black text-heavy listings, restrained teal and yellow status accents, horizontal story tiles, and a five-tab task model for orders, chats, balance, profile, and support."
colors: { primary: "#17171B", on-primary: "#FFFFFF", primary-soft: "#F0EFF7", accent: "#25B993", accent-yellow: "#F6B91E", ink: "#18191D", ink-muted: "#777B83", ink-subtle: "#AFB2B8", canvas: "#F8F7FF", surface-1: "#FFFFFF", surface-2: "#F0EFF7", hairline: "#E4E3EA", semantic-success: "#25B993", semantic-warning: "#F6B91E", semantic-danger: "#D85762", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  order-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  story-tile: { backgroundColor: "#BFC5E8", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 10 }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [11, 13]}
  navigation-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

For Profi is a text-first jobs marketplace that favors fast scanning, explicit budgets, and direct response over visual promotion.

# Non-negotiable visual invariants

- Keep budget and scope visible.
- Preserve list and map context.
- Show response cost before submission.
- Home stacks list-map toggle, stories, search, filters, dense orders, and a five-tab footer.
- Prefer compact informative cards with clear separation over large decorative whitespace.

# Color and surfaces

Use near-black for primary response, teal for positive status, and yellow for rating or balance emphasis.

Use a pale lavender canvas, white order cards, and slightly darker neutral controls.

Use black for job and price, gray for metadata, and pale gray for inactive state.

Use teal for online or discount, yellow for attention, and red for complaint or deletion.

# Typography

Use SF Pro Display for sections and SF Pro Text for listings, chat, and profile.

Use 26–36 points for major headings, 16 points semibold for order titles, 14 points body, and 10–12 points metadata.

Keep title, budget, scope, timing, and location scannable in every order card.

Use the platform sans or Inter with tabular currency.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8 points card gaps, 14 points card padding, and 16 points gutters.

Home stacks list-map toggle, stories, search, filters, dense orders, and a five-tab footer.

Prefer compact informative cards with clear separation over large decorative whitespace.

Story tiles and portfolio images are secondary; job text drives hierarchy.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Orders, Chats, Balance, Profile, and Support remain in the bottom bar.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Use wide black response actions; secondary filters, maps, and status controls stay white or outlined.

Use order cards, story tiles, similar-order rails, response form, chat rows, balance and profile groups.

Search, price proposal, question, profile services, addresses, and portfolio forms use explicit labels.

Show new, high chance, client researching price, responded, in work, complete, archived, and balance states.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Use portfolio images and avatars as real content; keep helper icons simple and monochrome.

Contain portfolio images and crop avatars to circles; avoid decorative backgrounds.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show new, high chance, client researching price, responded, in work, complete, archived, and balance states.

Use teal for online or discount, yellow for attention, and red for complaint or deletion.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep filters, orders, response, chats, balance, and tabs at least 44 points.
- Preserve search, filters, job, budget, response, and navigation; move stories below current listings.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not truncate the job title before budget.
- Do not hide client status.
- Do not make stories compete with listings.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
