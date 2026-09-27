<design-context>
---
version: alpha
name: VK-Calls-design-analysis
description: "A restrained dark calling interface built from black and charcoal surfaces, blue and green action tiles, large circular in-call controls, pale video-room backdrops, and thin system iconography. It feels direct, familiar, and operational."

colors:
  primary: "#4C8FEF"
  on-primary: "#FFFFFF"
  primary-pressed: "#3676CF"
  accent-green: "#4FCB89"
  ink: "#F4F5F6"
  ink-muted: "#9A9CA1"
  ink-subtle: "#66686D"
  canvas: "#0C0D0E"
  surface-1: "#191A1C"
  surface-2: "#292A2D"
  hairline: "#34363A"
  semantic-success: "#4FCB89"
  semantic-warning: "#E2A23A"
  semantic-danger: "#F05258"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 36px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-lg: { fontFamily: System Sans, fontSize: 29px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  display-md: { fontFamily: System Sans, fontSize: 23px, fontWeight: 650, lineHeight: 1.15, letterSpacing: 0 }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.3px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  call-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  call-control: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 15px }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

VK Calls keeps scheduling and contact management on a dark utility shell, then shifts to a pale full-screen room during the call. Clear colored actions and large circular controls minimize ambiguity.

## Colors

### Brand & Accent

Blue marks create, join, contact, and active navigation. Green marks scheduling; red is reserved for ending a call.

### Surface

Use near-black canvas, charcoal panels, and a soft gray-blue room backdrop when video is absent.

### Text

Off-white carries labels and participant names; gray carries availability, helper copy, and inactive navigation.

### Semantic

Green means scheduled or available, amber warns, and red means end or destructive. Blue remains general action.

## Typography

### Font Family

Use a familiar system sans optimized for compact labels and contact names.

### Hierarchy

Use 23–36px onboarding statements, 20px page titles, 14–17px controls and names, and 10–12px status.

### Principles

Keep call state and participant status readable at a glance. Prefer short verb labels for controls.

### Note on Font Substitutes

Use SF Pro or Inter with medium weights and high contrast on charcoal.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 10–12px action gaps, and 24px between major home sections.

### Grid & Container

Home uses a three-tile action row above active and scheduled calls. The call room fills available space above a fixed control dock.

### Whitespace Philosophy

Keep empty states open and calm. In-call chrome should occupy only safe edges and never cover participants.

## Elevation & Depth

Use tonal card separation and bottom sheets. In-call controls may use slight lift over the room backdrop.

### Decorative Depth

The interface is intentionally plain. Soft blur or translucent participant backdrops are acceptable; ornamental graphics are not.

## Shapes

### Border Radius Scale

Use 8px rows, 12–16px action tiles and sheets, 22px room corners, and fully round call controls.

### Photography & Illustration Geometry

Participant video uses `cover` with face-safe framing. Onboarding device previews use `contain`; no standalone illustration system is present.

## Components

### Buttons

Create and join are high-contrast rectangles; in-call actions are circles. Native controls must inherit the dark palette and blue focus.

### Pricing Tabs

Use compact segments for history or media modes only, with blue underline or fill for selection.

### Cards & Containers

Call rows show title, time or status, and one clear join action. Sheets group share, device handoff, and chat links.

### Inputs & Forms

Join links, schedule fields, and contact search use graphite fields with visible focus and clear actions.

### Status & Build Page

Waiting, active, muted, camera off, recording, scheduled, and missed states appear next to the relevant participant or call.

### Navigation

Use four bottom destinations for Home, History, Contacts, and Settings. Call-room navigation is isolated from the app shell.

### Footer

There is no footer. The call control dock or bottom navigation closes each primary surface.

## Do's and Don'ts

### Do

- Make call state immediately visible.
- Keep hang-up uniquely red.
- Use large control hit regions.
- Preserve participant visibility.

### Don't

- Do not overload the room with labels.
- Do not reuse red for non-destructive action.
- Do not decorate empty states heavily.
- Do not expose light native controls.

## Responsive Behavior

### Breakpoints

Phones show one dominant participant area. Wider screens may arrange participants in a responsive grid with a fixed control rail.

### Touch Targets

Action tiles, contact buttons, call controls, sheet rows, and navigation require at least 44px targets.

### Collapsing Strategy

Keep mute, camera, audio route, reaction, and hang-up visible. Move share, device, chat, and advanced controls into a sheet.

### Image Behavior

Use `cover` for participant video and `contain` for avatars, QR codes, and onboarding device previews.

## Iteration Guide

Start with Home actions, join flow, active-call room, control dock, contacts, and history. Add scheduling, device handoff, recording, and appearance settings afterward.

## Known Gaps

The inspected catalog documents 23 flows across onboarding, home, calls, contacts, and settings. Large multi-participant layouts and degraded-network states are less represented.

</design-context>

Use the design system above for all UI you generate.
