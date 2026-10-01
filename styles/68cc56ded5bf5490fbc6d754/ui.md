<design-context>
---
version: 1
platform: iOS
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
  display-xl: { fontFamily: System Sans, fontSize: 36, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-lg: { fontFamily: System Sans, fontSize: 29, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  display-md: { fontFamily: System Sans, fontSize: 23, fontWeight: 650, lineHeight: 1.15, letterSpacing: 0 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.3 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  call-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  call-control: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 15 }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

VK Calls keeps scheduling and contact management on a dark utility shell, then shifts to a pale full-screen room during the call. Clear colored actions and large circular controls minimize ambiguity.

# Non-negotiable visual invariants

- The reference consistently shows make call state immediately visible.
- The reference consistently shows hang-up uniquely red.
- Sampled screens consistently use large control hit regions.
- The reference consistently shows preserve participant visibility.
- The reference consistently shows a restrained dark calling interface built from black and charcoal surfaces.
- Sampled screens consistently use blue and green action tiles.
- The reference consistently shows large circular in-call controls.
- The reference consistently shows pale video-room backdrops.

# Color and surfaces

### Brand & Accent

Blue marks create, join, contact, and active navigation. Green marks scheduling; red is reserved for ending a call.

### Surface

Use near-black canvas, charcoal panels, and a soft gray-blue room backdrop when video is absent.

### Text

Off-white carries labels and participant names; gray carries availability, helper copy, and inactive navigation.

### Semantic

Green means scheduled or available, amber warns, and red means end or destructive. Blue remains general action.

# Typography

### Font Family

Use a familiar system sans optimized for compact labels and contact names.

### Hierarchy

Use 23–36 points onboarding statements, 20 points page titles, 14–17 points controls and names, and 10–12 points status.

### Principles

Keep call state and participant status readable at a glance. Prefer short verb labels for controls.

### Note on Font Substitutes

Use SF Pro or Inter with medium weights and high contrast on charcoal.

# Screen composition

### Spacing System

Use a 4 points base, 12 points gutters, 10–12 points action gaps, and 24 points between major home sections.

### Grid & Container

Home uses a three-tile action row above active and scheduled calls. The call room fills available space above a fixed control dock.

### Whitespace Philosophy

Keep empty states open and calm. In-call chrome should occupy only safe edges and never cover participants.

Surface hierarchy observed in the source:

Use tonal card separation and bottom sheets. In-call controls may use slight lift over the room backdrop.

### Decorative Depth

The interface is intentionally plain. Soft blur or translucent participant backdrops are acceptable; ornamental graphics are not.

# Navigation appearance

Use four bottom destinations for Home, History, Contacts, and Settings. Call-room navigation is isolated from the app shell.

# Components

### Buttons

Create and join are high-contrast rectangles; in-call actions are circles. Native controls must inherit the dark palette and blue focus.

### Cards & Containers

Call rows show title, time or status, and one clear join action. Sheets group share, device handoff, and chat links.

### Inputs & Forms

Join links, schedule fields, and contact search use graphite fields with visible focus and clear actions.

# Imagery and icons

The interface is intentionally plain. Soft blur or translucent participant backdrops are acceptable; ornamental graphics are not.

Participant video uses `cover` with face-safe framing. Onboarding device previews use `contain`; no standalone illustration system is present.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Waiting, active, muted, camera off, recording, scheduled, and missed states appear next to the relevant participant or call.

# iOS adaptation

### Touch Targets

Action tiles, contact buttons, call controls, sheet rows, and navigation require at least 44 points targets.

### Collapsing Strategy

Keep mute, camera, audio route, reaction, and hang-up visible. Move share, device, chat, and advanced controls into a sheet.

### Image Behavior

Use `cover` for participant video and `contain` for avatars, QR codes, and onboarding device previews.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not overload the room with labels.
- Do not reuse red for non-destructive action.
- Do not decorate empty states heavily.
- Do not expose light native controls.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
