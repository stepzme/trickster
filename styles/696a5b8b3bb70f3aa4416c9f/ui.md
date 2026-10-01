<design-context>
---
version: 1
platform: iOS
name: EMIAS-INFO-design-analysis
description: "A clinical utility with a vivid blue identity header, light gray canvas, white rounded service cards, small blue medical pictograms, strong black headings, restrained green confirmation, and a three-tab structure centered on booking, medical records, and account utilities."
colors:
  primary: "#087EF5"
  on-primary: "#FFFFFF"
  primary-soft: "#E8F3FF"
  ink: "#1A1B1F"
  ink-muted: "#747981"
  ink-subtle: "#ADB2BA"
  canvas: "#F5F4F7"
  surface-1: "#FFFFFF"
  surface-2: "#EEF3F8"
  hairline: "#E2E4E8"
  semantic-success: "#71D452"
  semantic-warning: "#F3B727"
  semantic-danger: "#DC4D57"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.1 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  service-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  medical-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: [12, 14]}
  status-panel: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16 }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  navigation-bar: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 56 }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

EMIAS.INFO keeps booking and longitudinal medical records approachable through a strong blue identity bar, small service cards, and predictable white lists.

# Non-negotiable visual invariants

- Navigation or control chrome uses Vivid blue patient header.
- Keep patient identity and policy context visible.
- Show doctor, clinic, date, and booking status together.
- Use explicit no-data messages.
- Confirm booking and cancellation.
- Home stacks appointment goals, booking, appointments, referrals, certificates, and services.
- Medical record is a dense categorized list.
- Use compact clinical grouping without crowding.

# Color and surfaces

- **Primary** ({colors.primary}): Header, booking, active navigation, and medical icons.
- **Primary Soft** ({colors.primary-soft}): Selected or informational state.

- **Canvas** ({colors.canvas}): Home and record background.
- **Surface 1** ({colors.surface-1}): Services, lists, documents, and forms.
- **Surface 2** ({colors.surface-2}): Supporting controls.
- **Hairline** ({colors.hairline}): Row and form separation.

- **Ink** ({colors.ink}): Appointments, records, and headings.
- **Ink Muted** ({colors.ink-muted}): Dates, clinics, and explanation.
- **Ink Subtle** ({colors.ink-subtle}): Empty and disabled state.

- **Success** ({colors.semantic-success}): Booking confirmation and completed state.
- **Warning** ({colors.semantic-warning}): Attention or upcoming deadline.
- **Danger** ({colors.semantic-danger}): Cancel and medical alert.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

# Typography

- **SF Pro Display** — screen and confirmation headings.
- **SF Pro Text** — appointments, records, forms, and health data.
- **SF Mono** — policy, referral, and document identifiers.

Use 26–36 points for major states, 22 points for sections, 16 points semibold for services, 14 points body, and 10–12 points metadata.

- Keep clinic, doctor, date, and status together.
- Use plain language for medical tasks.
- Avoid compressing health values.
- Keep empty states specific.

Use the platform system sans or **Inter** with tabular dates and measurements.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points gutters, 12 points row rhythm, 12 points service-card padding, and 24 points between medical groups.

Home stacks appointment goals, booking, appointments, referrals, certificates, and services. Medical record is a dense categorized list.

Use compact clinical grouping without crowding. Empty states may occupy the full content region.

Depth comes from the blue header and white service groups; avoid decorative medical imagery.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Home, Medical record, and More remain in the bottom bar; patient and policy switching lives in the blue header.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Use full-width blue booking actions, blue text links, and neutral rows with chevrons; destructive cancellation remains red.

Use booking-goal cards, appointment rows, referral groups, document lists, measurement entries, and confirmation states.

Forms cover policy, patient, clinic, doctor, date, health measurement, and document upload with clear labels and validation.

Show scheduled, referral, canceled, completed, unavailable, uploaded, verified, and no-data states explicitly.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Use functional medical pictograms and document thumbnails. Do not introduce decorative anatomy or lifestyle imagery.

Contain document previews and functional icons without crop; avoid decorative backgrounds.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show scheduled, referral, canceled, completed, unavailable, uploaded, verified, and no-data states explicitly.

- **Success** ({colors.semantic-success}): Booking confirmation and completed state.
- **Warning** ({colors.semantic-warning}): Attention or upcoming deadline.
- **Danger** ({colors.semantic-danger}): Cancel and medical alert.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep patient switcher, service cards, appointment rows, booking, record categories, and form controls at least 44 points.
- Preserve patient, booking, upcoming appointment, active record, and navigation. Move informational banners below task content.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not use decorative health imagery.
- Do not hide medical record categories behind unlabeled icons.
- Do not rely on color alone for urgency.
- Do not compress legal or consent copy.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
