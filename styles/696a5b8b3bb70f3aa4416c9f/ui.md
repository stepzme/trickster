<design-context>
---
version: alpha
name: EMIAS-INFO-design-analysis
description: "A clinical utility with a vivid blue identity header, light gray canvas, white rounded service cards, small blue medical pictograms, strong black headings, restrained green confirmation, and a three-tab structure centered on booking, medical records, and account utilities."
colors:
  primary: "#087EF5"
  on-primary: "#FFFFFF"
  primary-hover: "#0069D2"
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.1px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px }
  service-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  medical-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 12px 14px }
  status-panel: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px }
  top-nav: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 56px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

EMIAS.INFO keeps booking and longitudinal medical records approachable through a strong blue identity bar, small service cards, and predictable white lists.

**Key Characteristics:**
- Vivid blue patient header.
- Light gray canvas and white rounded groups.
- Small blue medical pictograms.
- Prominent full-width booking action.
- Three stable destinations: Home, Medical record, More.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Header, booking, active navigation, and medical icons.
- **Primary Soft** ({colors.primary-soft}): Selected or informational state.

### Surface
- **Canvas** ({colors.canvas}): Home and record background.
- **Surface 1** ({colors.surface-1}): Services, lists, documents, and forms.
- **Surface 2** ({colors.surface-2}): Supporting controls.
- **Hairline** ({colors.hairline}): Row and form separation.

### Text
- **Ink** ({colors.ink}): Appointments, records, and headings.
- **Ink Muted** ({colors.ink-muted}): Dates, clinics, and explanation.
- **Ink Subtle** ({colors.ink-subtle}): Empty and disabled state.

### Semantic
- **Success** ({colors.semantic-success}): Booking confirmation and completed state.
- **Warning** ({colors.semantic-warning}): Attention or upcoming deadline.
- **Danger** ({colors.semantic-danger}): Cancel and medical alert.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

## Typography

### Font Family
- **SF Pro Display** — screen and confirmation headings.
- **SF Pro Text** — appointments, records, forms, and health data.
- **SF Mono** — policy, referral, and document identifiers.

### Hierarchy
Use 26–36px for major states, 22px for sections, 16px semibold for services, 14px body, and 10–12px metadata.

### Principles
- Keep clinic, doctor, date, and status together.
- Use plain language for medical tasks.
- Avoid compressing health values.
- Keep empty states specific.

### Note on Font Substitutes
Use the platform system sans or **Inter** with tabular dates and measurements.

## Layout

### Spacing System
Use a 4px base, 16px gutters, 12px row rhythm, 12px service-card padding, and 24px between medical groups.

### Grid & Container
Home stacks appointment goals, booking, appointments, referrals, certificates, and services. Medical record is a dense categorized list.

### Whitespace Philosophy
Use compact clinical grouping without crowding. Empty states may occupy the full content region.

## Elevation & Depth
Use white-card separation over the light gray canvas. Confirmation and booking sheets gain modest modal depth.

### Decorative Depth
Depth comes from the blue header and white service groups; avoid decorative medical imagery.

## Shapes

### Border Radius Scale
Use 10px for fields, 14px for cards, 18px for sheets, and full circles for status or helper icons.

### Photography & Illustration Geometry
Use functional medical pictograms and document thumbnails. Do not introduce decorative anatomy or lifestyle imagery.

## Components

### Buttons
Use full-width blue booking actions, blue text links, and neutral rows with chevrons; destructive cancellation remains red.

### Pricing Tabs
Use segmented controls for doctor by name or date and compact tabs for record categories or patient context.

### Cards & Containers
Use booking-goal cards, appointment rows, referral groups, document lists, measurement entries, and confirmation states.

### Inputs & Forms
Forms cover policy, patient, clinic, doctor, date, health measurement, and document upload with clear labels and validation.

### Status & Build Page
Show scheduled, referral, canceled, completed, unavailable, uploaded, verified, and no-data states explicitly.

### Navigation
Home, Medical record, and More remain in the bottom bar; patient and policy switching lives in the blue header.

### Footer
The white tab bar stays stable and marks the active destination in blue.

## Do's and Don'ts

### Do
- Keep patient identity and policy context visible.
- Show doctor, clinic, date, and booking status together.
- Use explicit no-data messages.
- Confirm booking and cancellation.

### Don't
- Don't use decorative health imagery.
- Don't hide medical record categories behind unlabeled icons.
- Don't rely on color alone for urgency.
- Don't compress legal or consent copy.

## Responsive Behavior

### Breakpoints
Use a single clinical column up to 767px, split appointment and record panels on tablet, and persistent patient navigation above 1024px.

### Touch Targets
Keep patient switcher, service cards, appointment rows, booking, record categories, and form controls at least 44px.

### Collapsing Strategy
Preserve patient, booking, upcoming appointment, active record, and navigation. Move informational banners below task content.

### Image Behavior
Contain document previews and functional icons without crop; avoid decorative backgrounds.

## Iteration Guide
1. Build patient header, navigation, and home services.
2. Add doctor booking and appointment management.
3. Add referrals, prescriptions, and certificates.
4. Add medical record and health diary.
5. Add relatives, documents, access, and settings.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 80 flows were inventoried; Main, Doctor appointment, and Medical record were image-reviewed.
- One sampled booking step was video-only; hospitalization and health diary were not deeply sampled.
- No expressive illustration language appeared in reviewed clinical screens.

</design-context>

Use the design system above for all UI you generate.
