<design-context>
---
version: alpha
name: 2GIS-design-analysis
description: "A map-first mobile interface built from a pale detailed map, white floating sheets, and saturated green route actions. Compact system typography, blue spatial markers, transport icons, and persistent edge controls keep navigation legible while recommendation cards and vivid 3D onboarding scenes add personality."
colors:
  primary: "#19C83A"
  on-primary: "#FFFFFF"
  accent-blue: "#1688F5"
  accent-red: "#EF3D43"
  ink: "#202124"
  ink-muted: "#73777F"
  ink-subtle: "#A1A5AC"
  canvas: "#F5F4F1"
  surface-1: "#FFFFFF"
  surface-2: "#F1F2F4"
  surface-dark: "#10131A"
  hairline: "#E1E3E6"
  semantic-warning: "#F4B323"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: System Sans, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: System Sans, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: System Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 21px, fontWeight: 600, lineHeight: 1.18, letterSpacing: -0.1px }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 11px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 20px }
  map-control: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  bottom-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  place-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14px }
  route-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14px }
  top-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", height: 48px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 20px 16px }
---

## Overview

2GIS keeps the map visible through discovery, routing, navigation, weather, traffic, friends, and recommendations. White controls and sheets float over dense cartography; green confirms progress while blue marks spatial information.

**Key Characteristics:**
- Persistent detailed map as the base surface.
- White rounded controls and draggable bottom sheets.
- Green primary route actions and blue map markers.
- Dense but compact labels for time, distance, transfers, and place data.
- Five bottom destinations plus a separate side menu.
- Vivid 3D onboarding isolated from the operational map.

## Colors

### Brand & Accent
- **Green** ({colors.primary}): Route, confirmation, active progress, and selected state.
- **Blue** ({colors.accent-blue}): Location, parking, transit, and current-position markers.
- **Red** ({colors.accent-red}): Restrictions, incidents, and critical map symbols.

### Surface
- **Map Canvas** ({colors.canvas}): Pale geographic base.
- **Surface 1** ({colors.surface-1}): Search, controls, cards, and sheets.
- **Surface 2** ({colors.surface-2}): Nested rows and inactive chips.
- **Dark Surface** ({colors.surface-dark}): Onboarding and night navigation.

### Text
- **Ink** ({colors.ink}): Place names, route metrics, and actions.
- **Ink Muted** ({colors.ink-muted}): Addresses, timing detail, and descriptions.
- **Ink Subtle** ({colors.ink-subtle}): Disabled and low-priority labels.

### Semantic
- **Warning** ({colors.semantic-warning}): Traffic, weather, and attention markers.
- **Overlay** ({colors.semantic-overlay}): Scrim under modal sheets.

## Typography

### Font Family

- **System Sans** — all map labels, sheets, metrics, menus, and controls.
- **System Mono** — optional for coordinates or technical values only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-lg}` | 30px | 700 | Onboarding statement |
| `{typography.headline}` | 21px | 600 | Sheet heading |
| `{typography.card-title}` | 16px | 600 | Place and route title |
| `{typography.body}` | 14px | 400 | Default labels |
| `{typography.caption}` | 11px | 500 | Map and transfer metadata |
| `{typography.button}` | 15px | 600 | Primary action |

### Principles

- Put time, distance, and place names before explanation.
- Keep map labels compact and avoid decorative type.
- Use weight and spatial grouping before extra color.
- Maintain legibility on both map and photo backgrounds.

### Note on Font Substitutes

Use **SF Pro**, **Inter**, or **Roboto** with compact mobile metrics and clear Cyrillic support.

## Layout

### Spacing System

Use a 4px base. Map controls sit 8–12px from edges; sheets use 16px interiors; route cards use 12–14px gaps.

### Grid & Container

The map fills the viewport. Sheets occupy the lower portion and may scroll. Route alternatives use horizontal cards; mode choices use a compact horizontal strip.

### Whitespace Philosophy

Whitespace belongs inside floating surfaces, not across the map. Keep the map readable by clustering controls at edges and limiting simultaneous cards.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Cartographic canvas | Base |
| 1 | White control with soft shadow | Map tools and search |
| 2 | Rounded white sheet | Results and route detail |
| 3 | Dimmed map plus modal sheet | Privacy and bounded setup |

### Decorative Depth

Use soft shadows and sheet overlap. Reserve dramatic lighting and glossy depth for onboarding illustration.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 10px | Markers and chips |
| `{rounded.md}` | 14px | Controls and actions |
| `{rounded.lg}` | 18px | Place and route cards |
| `{rounded.xl}` | 24px | Bottom sheets |
| `{rounded.pill}` | full | Search and mode selectors |

### Photography & Illustration Geometry

Place photos use rounded landscape crops. 3D onboarding objects remain centered and fully visible. Map markers use compact circles, pins, and speech-bubble forms.

## Components

### Buttons

Primary actions are green rounded rectangles with white semibold labels. Secondary actions use white or pale gray. Circular map controls group one function per button.

### Pricing Tabs

No pricing controls were observed. Route modes use icon-and-time segments with a green selected outline.

### Cards & Containers

Place cards combine title, category, rating, address, and photo. Route cards prioritize duration, arrival time, transfers, and mode icons. Recommendation cards can include image or illustration.

### Inputs & Forms

Search uses a white rounded field with microphone. Destination forms keep start and end visible together. Sheets handle floors, entrances, final points, and privacy choices.

### Status & Build Page

Traffic, weather, route incidents, parking, and friend status use explicit labels plus icons. Selected route is reinforced by green line and action.

### Navigation

Search, Trips, Navigator, Friends, and Tips form the bottom bar. Edge controls handle layers, zoom, location, and menu. Navigation mode reduces chrome to driving essentials.

### Footer

Side-menu and profile content ends with feedback, organization, advertising, and social links. Map tasks do not add a footer.

## Do's and Don'ts

### Do

- Preserve the map under every spatial task.
- Pair icons with time, distance, or status labels.
- Use green for the current primary action.
- Keep map controls clustered at edges.
- Move complex choices into sheets.

### Don't

- Don't obscure the route with oversized cards.
- Don't use green for unrelated decorative content.
- Don't rely on marker color alone.
- Don't add dense text directly on the map.
- Don't bring onboarding 3D effects into navigation controls.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Allow a side panel beside the map |
| Compact | 390–767px | Default bottom-sheet composition |
| Small | <390px | Stack route metrics and shorten mode labels |

### Touch Targets

Maintain 44px for map controls, markers, tabs, route modes, and sheet rows. Separate zoom, close, and recenter actions.

### Collapsing Strategy

Collapse route alternatives to horizontal paging before hiding metrics. Let sheets expand vertically. Reduce recommendation cards before shrinking map controls.

### Image Behavior

Map stays full bleed. Place photography uses cover with safe subject crops. 3D onboarding uses contain on a dark field.

## Iteration Guide

1. Establish map contrast and edge controls.
2. Build search and one draggable result sheet.
3. Add route comparison and navigation mode.
4. Verify transport icons and spatial labels.
5. Introduce recommendations and illustration last.

## Known Gaps

- Exact map styling and font tokens were inferred visually.
- Onboarding video motion was unavailable as a still preview.
- The 129-flow inventory was complete; long child flows were sampled at key screens.
- Large-screen map behavior was not represented.

</design-context>

Use the design system above for all UI you generate.
