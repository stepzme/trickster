<design-context>
---
version: alpha
name: eGov-Mobile-design-analysis
description: "A white civic-services super-app using royal blue service icons, pale-blue controls, compact document cards, multicolor institutional logos, bright informational banners, dense categorized lists, and a five-tab navigation spanning home, QR, services, messages, and profile."
colors:
  primary: "#2E65D8"
  on-primary: "#FFFFFF"
  primary-hover: "#2454B8"
  primary-soft: "#EAF1FF"
  accent: "#18B894"
  ink: "#191B20"
  ink-muted: "#747A84"
  ink-subtle: "#ADB3BC"
  canvas: "#FFFFFF"
  surface-1: "#F6F7F9"
  surface-2: "#EEF3FB"
  hairline: "#E2E6EC"
  semantic-success: "#28AE66"
  semantic-warning: "#FFB620"
  semantic-danger: "#DF4D55"
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
  service-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 12px 0 }
  document-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  info-banner: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.sm}", padding: 14px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 11px 13px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

eGov Mobile condenses documents and public services into a white, icon-led utility. Blue communicates institutional action while documents, services, and request status remain highly structured.

**Key Characteristics:**
- White civic-service canvas.
- Royal-blue category icons and actions.
- Document carousel with pale card surfaces.
- Dense service lists and official partner logos.
- Five stable destinations including QR and messages.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Services, documents, links, and active navigation.
- **Primary Soft** ({colors.primary-soft}): Document controls and selected categories.
- **Accent** ({colors.accent}): AI and special digital services.

### Surface
- **Canvas** ({colors.canvas}): Home, services, documents, and profile.
- **Surface 1** ({colors.surface-1}): Search and secondary grouping.
- **Surface 2** ({colors.surface-2}): Document cards and low-emphasis action.
- **Hairline** ({colors.hairline}): List and form division.

### Text
- **Ink** ({colors.ink}): Titles, service names, and status.
- **Ink Muted** ({colors.ink-muted}): Metadata and explanation.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and disabled state.

### Semantic
- **Success** ({colors.semantic-success}): Approved and completed request.
- **Warning** ({colors.semantic-warning}): Attention or expiring state.
- **Danger** ({colors.semantic-danger}): Rejected and destructive action.
- **Overlay** ({colors.semantic-overlay}): Authentication and modal focus.

## Typography

### Font Family
- **SF Pro Display** — civic headings and large statuses.
- **SF Pro Text** — services, documents, forms, and profile data.
- **SF Mono** — request, document, and signature identifiers.

### Hierarchy
Use 26–36px for major headings, 22px for sections, 16px semibold for cards, 14px body, and 10–12px metadata.

### Principles
- Prefer plain-language service names.
- Keep request status and document owner clear.
- Use consistent category icon labels.
- Make legal detail readable rather than visually hidden.

### Note on Font Substitutes
Use the platform system sans or **Inter** with tabular identifiers.

## Layout

### Spacing System
Use a 4px base, 16px gutters, 12px list rhythm, 12px card padding, and 24px between service groups.

### Grid & Container
Home stacks search, banners, documents, institution shortcuts, information, and popular services above a five-tab bar.

### Whitespace Philosophy
Keep administrative lists compact but clearly grouped; allow empty document states to remain calm and explicit.

## Elevation & Depth
Use pale cards, white sheets, and thin dividers. Authentication and document sharing gain modal elevation.

### Decorative Depth
Institutional banners and document previews provide visual variety; operational services remain flat.

## Shapes

### Border Radius Scale
Use 10px for search, 14px for documents and banners, 18px for sheets, and full circles for category or helper icons.

### Photography & Illustration Geometry
Use real document facsimiles, official logos, and bounded banner graphics. Avoid decorative imagery within service forms.

## Components

### Buttons
Use blue filled actions for service submission and pale-blue actions for refresh or help; secondary rows use chevrons.

### Pricing Tabs
Use tabs for personal versus family documents and compact chips for popular, recommended, and filter categories.

### Cards & Containers
Use document cards, service rows, institution tiles, info banners, request status blocks, and profile groups.

### Inputs & Forms
Service forms group applicant data, request fields, attachments, signature, authentication, and review state.

### Status & Build Page
Show current, approved, rejected, expired, shared, signed, submitted, and unavailable states with label plus color or icon.

### Navigation
Home, eGov QR, Services, Messages, and Profile stay in the tab bar; nested services use back or close navigation.

### Footer
The five-tab bar stays white and lets blue mark the active destination.

## Do's and Don'ts

### Do
- Keep documents and owner context explicit.
- Show service status and resulting files together.
- Preserve authentication trust cues.
- Use official logos accurately.

### Don't
- Don't use banners inside transactional forms.
- Don't hide legal or signature state.
- Don't make service names icon-only.
- Don't mix unrelated institutional accent colors in core navigation.

## Responsive Behavior

### Breakpoints
Use the single-column reference up to 767px, document plus service columns on tablet, and persistent service navigation above 1024px.

### Touch Targets
Keep search, documents, services, QR, tabs, form rows, signature, and authentication actions at least 44px.

### Collapsing Strategy
Preserve identity, current service, status, documents, and navigation. Move banners and recommendations below active administrative tasks.

### Image Behavior
Contain official document and logo imagery without crop; crop banners only in their designed frames and preserve embedded copy.

## Iteration Guide
1. Build navigation, search, and service catalog.
2. Add digital documents and sharing.
3. Add service request, signature, and status.
4. Add QR, messages, situations, and profile.
5. Add assistant, institutional content, and settings.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 64 flows were inventoried; Home, Digital documents, and Receiving a service were image-reviewed.
- One reviewed document step was video-only; signatures and QR were not deeply sampled.
- No separate expressive illustration system appeared in task screens.

</design-context>

Use the design system above for all UI you generate.
