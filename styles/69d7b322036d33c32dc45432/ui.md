<design-context>
---
version: alpha
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
  display-xl: { fontFamily: YS Text, fontSize: 36px, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: YS Text, fontSize: 30px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.55px }
  display-md: { fontFamily: YS Text, fontSize: 25px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.35px }
  headline: { fontFamily: YS Text, fontSize: 21px, fontWeight: 700, lineHeight: 1.2, letterSpacing: -0.2px }
  card-title: { fontFamily: YS Text, fontSize: 17px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11px, fontWeight: 450, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0.1px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 60px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 20px }
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 12px 16px }
  listing-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0 }
  search-input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px 14px }
  filter-chip: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 8px 12px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

Yandex Realty keeps the shell neutral and information-rich so property photography, price, location, and contact actions drive the decision.

## Colors

Use white and soft gray for structure, black for property facts, yellow for decisive actions, red for favorites, and blue only for active filters or location tools.

### Brand & Accent

Use Yandex yellow for Call, Rent, Save search, and the active bottom destination. Keep it bounded to actions and small identity moments.

### Surface

Use white pages, pale gray fields and chips, and light cards. Listing images should meet the page without heavy decorative frames.

### Text

Use near-black for price, rooms, and listing titles; medium gray for address and metadata; subtle gray for unavailable or secondary values.

### Semantic

Use green for favorable change, red for favorites and critical status, yellow for primary actions, and blue for selected search controls.

## Typography

Typography is utilitarian and numeric, emphasizing price and essential property facts before descriptive copy.

### Font Family

Use YS Text or a neutral grotesk with compact numerals and strong Cyrillic support.

### Hierarchy

Use 26–30px page titles, 20–24px listing prices, 18–21px section titles, 14–16px property facts, and 11–13px location metadata.

### Principles

Keep price and property facts aligned, preserve unit notation, and use short labels that scan quickly while scrolling photos.

### Note on Font Substitutes

Use SF Pro or Inter when YS Text is unavailable; enable tabular numerals in price tables and mortgage details.

## Layout

Use full-width image-led listing cards, horizontal new-build rails, stacked detail sections, and guided single-column posting forms.

### Spacing System

Use a 4px base, 8px between property facts, 12px card gaps, 16px page gutters, and 24–32px between detail sections.

### Grid & Container

Results use one vertical feed; home may use two-column service shortcuts; detail uses full-width media followed by structured facts.

### Whitespace Philosophy

Keep filters compact but give price, photo, and contact actions clear breathing room. Do not compress important legal or location facts.

## Elevation & Depth

Use shallow bottom sheets, faint shadows on service cards, and sticky action bars. Listing cards themselves remain mostly flat.

### Decorative Depth

Use small toy-like property objects on home and onboarding; never let decorative depth compete with authentic listing imagery.

## Shapes

Use rounded photos and cards, pill filters, rounded-rectangle actions, and circular favorite or navigation icons.

### Border Radius Scale

Use 10px for filters, 14px for inputs and buttons, 18–22px for service cards and sheets, and circles for icon-only actions.

### Photography & Illustration Geometry

Use wide photo crops that preserve rooms and building proportions; keep floor plans contained and maps fully legible.

## Components

Native forms, maps, and calling behavior are acceptable, but controls must inherit Realty yellow, gray surfaces, radii, and typography.

### Buttons

Use yellow filled buttons for contact, rent, and save-search actions; use pale gray for secondary choices and compact white floating map actions.

### Pricing Tabs

Use chips for rooms, price, area, mortgage, and sorting; selected states use blue fill or a strong outline depending on context.

### Cards & Containers

Listing cards combine photo, badges, price, address, facts, favorite, and contact. Service cards use a compact 3D object and short label.

### Inputs & Forms

Use pale location and attribute fields, segmented room choices, map selection, and a guided posting sequence with one topic per screen.

### Status & Build Page

Show new-build stage, listing freshness, price change, 3D tour, demand, saved state, chat unread, and publication progress explicitly.

### Navigation

Use a five-item bottom bar for Home, Search, Favorites, Chats, and Profile. Keep query and filters visible in result feeds.

### Footer

There is no footer; rental services, support, notifications, settings, and logout belong to Profile.

## Do's and Don'ts

Make property evidence and next actions trustworthy.

### Do

- Preserve authentic listing photography and floor plans.
- Keep price, location, and contact visible.
- Make filters reversible and inspectable.
- Style native controls in the Realty system.

### Don't

- Do not use default platform blue broadly.
- Do not crop important room or building context.
- Do not hide fees or property status.
- Do not replace listing imagery with decoration.

## Responsive Behavior

Use additional width for map-and-list or multi-column browsing without weakening the listing hierarchy.

### Breakpoints

Phones use one feed and bottom sheets; larger screens may show map beside results or a wider photo gallery beside facts.

### Touch Targets

Search, filters, favorite, photo, map, call, message, post, and navigation targets require at least 44px.

### Collapsing Strategy

Keep primary photo, price, rooms, area, location, status, and contact action; collapse promotion badges and secondary amenities first.

### Image Behavior

Use cover for property photos with stable wide ratios, contain for floor plans and service objects, and progressive loading for long galleries.

## Iteration Guide

Start with Home, buy and rent results, filters, listing detail, Favorites, Chats, Profile, and basic posting. Add maps, saved searches, mortgage tools, and service integrations next.

## Known Gaps

Ninety available flow structures and representative screens across onboarding, Home, search, Favorites, Chats, Profile, purchase, rent, listing detail, and posting were sampled. Every seller, mortgage, and publication branch was not exhaustively viewed.

</design-context>

Use the design system above for all UI you generate.
