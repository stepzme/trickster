<design-context>
---
version: alpha
name: Windy-app-design-analysis
description: "A dark teal outdoor-weather dashboard built from layered blue panels, neon-mint actions, yellow Pro accents, full-color wind maps, white sport pictograms, compact forecast cards, and a highly structured personalization flow. The style feels technical yet recreational rather than institutional."

colors:
  primary: "#00F0B5"
  on-primary: "#063F46"
  primary-pressed: "#00C998"
  pro: "#F2C83B"
  ink: "#FFFFFF"
  ink-muted: "#B9D0D5"
  ink-subtle: "#73949C"
  canvas: "#0B3946"
  surface-1: "#204D5B"
  surface-2: "#2C5966"
  surface-3: "#173F4C"
  map-green: "#4BA865"
  map-yellow: "#D4BC45"
  map-red: "#B65351"
  hairline: "#FFFFFF24"
  semantic-success: "#00D7A6"
  semantic-warning: "#F2C83B"
  semantic-danger: "#ED5D67"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 750, lineHeight: 1.04, letterSpacing: -0.8px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: System Sans, fontSize: 25px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.25px }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 13px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 11px, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 9px, fontWeight: 500, lineHeight: 1.28, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 9px, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 10px, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px }
  forecast-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  activity-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 10px }
  map-panel: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.lg}", padding: 12px }
  pro-badge: { backgroundColor: "{colors.pro}", textColor: "{colors.canvas}", typography: "{typography.eyebrow}", rounded: "{rounded.pill}", padding: 3px 7px }
---

## Overview

Windy.app uses a stable deep-teal shell for outdoor planning, then lets weather maps and community photography add color. Neon mint makes selection and next action unmistakable.

## Colors

### Brand & Accent

Use neon mint for primary action, active time, selected filters, routes, and locations. Yellow is reserved for Pro and rating emphasis.

### Surface

Use deep teal canvas, layered blue-teal cards, darker side menu, and full-color weather maps.

### Text

Use white for headings and values, pale blue-gray for descriptions, and muted teal-gray for inactive or disabled content.

### Semantic

Use mint for normal success, yellow for premium or caution, red for dangerous weather, and the map legend strictly for magnitude.

## Typography

### Font Family

Use a modern system sans with tabular numerals and compact outdoor icon labels.

### Hierarchy

Use 25–32px onboarding headings, 20px card or screen headings, 13–17px forecast values, and 9–11px technical labels.

### Principles

Keep sport, spot, time, unit, and condition aligned. Use bold for section titles and current values, not every row.

### Note on Font Substitutes

Use Inter or SF Pro with tabular figures; use a system mono only when dense timelines require it.

## Layout

### Spacing System

Use a 4px base, 12px card gaps, 12–16px gutters, and 24px between Home sections.

### Grid & Container

Onboarding uses a single decision per screen. Home stacks forecast, nearest spot, map, favorites, route, community, and nearby lists.

### Whitespace Philosophy

Keep dark panels clearly separated and avoid filling every gap with forecast detail. Maps and sport selection need broad visual breathing room.

## Elevation & Depth

Use tone-on-tone panel layering, soft gradients, shallow shadow, and slide-out menu depth. Keep technical map controls compact.

### Decorative Depth

Use real map texture, activity photography, subtle blurred outdoor backgrounds, and UI mockups. Avoid unrelated illustration or 3D objects.

## Shapes

### Border Radius Scale

Use 8px activity tiles, 12px forecast cards, 16px map panels, 22px sheets, and pills for Pro and time selection.

### Photography & Illustration Geometry

Use rounded community thumbnails and full-width weather maps. Sport pictograms remain crisp white silhouettes with no container when possible.

## Components

### Buttons

Primary onboarding, favorite, route, and download actions are mint rounded rectangles. Secondary actions use transparent or dark teal outlines. Native controls must inherit these colors and radii.

### Pricing Tabs

Sports, map type, layers, time, forecast view, and compare modes use tiles, segmented controls, or chips with mint selected state and yellow Pro badges.

### Cards & Containers

Forecast cards combine spot, daily weather, wind bar, nearest action, and map preview. Community and nearby sections use compact dark rows.

### Inputs & Forms

Search, registration, unit settings, route creation, and notification forms use layered teal rows with white labels and mint completion action.

### Status & Build Page

Use selected sport, nearest spot, favorite, Pro, offline, route, station, notification, archive, and community states in direct context.

### Navigation

Use a left side menu for Profile and services, while Home exposes search and map shortcuts. Deep forecast tools use local back, layers, and time controls.

### Footer

There is no footer. Care, guides, webinar, tips, settings, offline, and account actions live in the side menu.

## Do's and Don'ts

### Do

- Keep mint exclusive to action and selection.
- Personalize around sport and spot.
- Preserve model, unit, time, and layer context.
- Use real outdoor content for community.

### Don't

- Do not use yellow for ordinary selection.
- Do not flatten weather maps into generic cards.
- Do not overload Home with full technical tables.
- Do not retain default native blue controls.

## Responsive Behavior

### Breakpoints

Phones use stacked Home and full-screen map. Wider screens may pair side navigation, map, and spot forecast or route detail.

### Touch Targets

Sports, spot cards, search, map controls, layers, timeline, favorites, route, side menu, and Pro actions require at least 44px targets.

### Collapsing Strategy

Keep selected spot, current forecast, next time window, map access, and primary activity action visible. Collapse community, guides, archive, and secondary services.

### Image Behavior

Maps fill their panel with readable labels. Use `cover` for community photos and outdoor backgrounds, and `contain` for sport pictograms and device mockups.

## Iteration Guide

Start with sport personalization, location and units, nearest spot, Home forecast, favorites, Weather Map, Spot Forecast, layers and timeline, side menu, and Profile. Add routes, community, archive, offline, and Pro afterward.

## Known Gaps

All 29 catalog flows were reviewed by structure with complete representative scenarios across onboarding, Home, Weather Map, Spot Forecast, and Profile. Some live weather and route transitions are video-only or not fully represented by stills.

</design-context>

Use the design system above for all UI you generate.
