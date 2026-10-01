<design-context>
---
version: 1
platform: iOS
name: Yandex-Realty-design-analysis
description: "A photo-led property marketplace built on white surfaces, soft gray filter fields, bold black listing facts, and unmistakable Yandex yellow for contact, save-search, and active navigation. Rounded cards and toy-like property objects soften a dense information system without competing with real-estate photography."

colors:
  primary: "#FFD400"
  on-primary: "#171719"
  primary-pressed: "#E7BF00"
  active-blue: "#168EEC"
  favorite: "#E8344E"
  ink: "#171719"
  ink-muted: "#717277"
  ink-subtle: "#A5A6AA"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F3F4F5"
  surface-3: "#E8E9EB"
  hairline: "#D9DBDE"
  semantic-success: "#24945A"
  semantic-warning: "#E6A318"
  semantic-danger: "#E13F4F"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: YS Text, fontSize: 36, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: YS Text, fontSize: 30, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.55 }
  display-md: { fontFamily: YS Text, fontSize: 25, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.35 }
  headline: { fontFamily: YS Text, fontSize: 21, fontWeight: 700, lineHeight: 1.2, letterSpacing: -0.2 }
  card-title: { fontFamily: YS Text, fontSize: 17, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 15, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11, fontWeight: 450, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0.1 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 60 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 20]}
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [12, 16]}
  listing-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0 }
  search-input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [12, 14]}
  filter-chip: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: [8, 12]}
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

Yandex Realty keeps the shell neutral and information-rich so property photography, price, location, and contact actions drive the decision.

# Non-negotiable visual invariants

- Preserve authentic listing photography and floor plans.
- Keep price, location, and contact visible.
- Make filters reversible and inspectable.
- Style native controls in the Realty system.
- Results use one vertical feed; home may use two-column service shortcuts; detail uses full-width media followed by structured facts.
- Keep filters compact but give price, photo, and contact actions clear breathing room.
- Do not compress important legal or location facts.

# Color and surfaces

Use Yandex yellow for Call, Rent, Save search, and the active bottom destination. Keep it bounded to actions and small identity moments.

Use white pages, pale gray fields and chips, and light cards. Listing images should meet the page without heavy decorative frames.

Use near-black for price, rooms, and listing titles; medium gray for address and metadata; subtle gray for unavailable or secondary values.

Use green for favorable change, red for favorites and critical status, yellow for primary actions, and blue for selected search controls.

# Typography

Use YS Text or a neutral grotesk with compact numerals and strong Cyrillic support.

Use 26–30 points page titles, 20–24 points listing prices, 18–21 points section titles, 14–16 points property facts, and 11–13 points location metadata.

Keep price and property facts aligned, preserve unit notation, and use short labels that scan quickly while scrolling photos.

Use SF Pro or Inter when YS Text is unavailable; enable tabular numerals in price tables and mortgage details.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8 points between property facts, 12 points card gaps, 16 points page gutters, and 24–32 points between detail sections.

Results use one vertical feed; home may use two-column service shortcuts; detail uses full-width media followed by structured facts.

Keep filters compact but give price, photo, and contact actions clear breathing room. Do not compress important legal or location facts.

Use small toy-like property objects on home and onboarding; never let decorative depth compete with authentic listing imagery.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use a five-item bottom bar for Home, Search, Favorites, Chats, and Profile. Keep query and filters visible in result feeds.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Use yellow filled buttons for contact, rent, and save-search actions; use pale gray for secondary choices and compact white floating map actions.

Listing cards combine photo, badges, price, address, facts, favorite, and contact. Service cards use a compact 3D object and short label.

Use pale location and attribute fields, segmented room choices, map selection, and a guided posting sequence with one topic per screen.

Show new-build stage, listing freshness, price change, 3D tour, demand, saved state, chat unread, and publication progress explicitly.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Use wide photo crops that preserve rooms and building proportions; keep floor plans contained and maps fully legible.

Use cover for property photos with stable wide ratios, contain for floor plans and service objects, and progressive loading for long galleries.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show new-build stage, listing freshness, price change, 3D tour, demand, saved state, chat unread, and publication progress explicitly.

Use green for favorable change, red for favorites and critical status, yellow for primary actions, and blue for selected search controls.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Search, filters, favorite, photo, map, call, message, post, and navigation targets require at least 44 points.
- Keep primary photo, price, rooms, area, location, status, and contact action; collapse promotion badges and secondary amenities first.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not use default platform blue broadly.
- Do not crop important room or building context.
- Do not hide fees or property status.
- Do not replace listing imagery with decoration.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
