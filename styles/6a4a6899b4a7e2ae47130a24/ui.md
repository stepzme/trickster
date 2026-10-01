<design-context>
---
version: 1
platform: iOS
name: eGov-Mobile-design-analysis
description: "A white civic-services super-app using royal blue service icons, pale-blue controls, compact document cards, multicolor institutional logos, bright informational banners, dense categorized lists, and a five-tab navigation spanning home, QR, services, messages, and profile."
colors:
  primary: "#2E65D8"
  on-primary: "#FFFFFF"
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
  service-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: [12, 0]}
  document-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  info-banner: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.sm}", padding: 14 }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [11, 13]}
---

# Overview

eGov Mobile condenses documents and public services into a white, icon-led utility. Blue communicates institutional action while documents, services, and request status remain highly structured.

**Key Characteristics:**
- White civic-service canvas.
- Royal-blue category icons and actions.
- Document carousel with pale card surfaces.
- Dense service lists and official partner logos.
- Five stable destinations including QR and messages.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: White civic-service canvas.
- The reviewed screens show this treatment: Royal-blue category icons and actions.
- The reviewed screens show this treatment: Document carousel with pale card surfaces.
- The reviewed screens show this treatment: Dense service lists and official partner logos.
- The reviewed screens show this treatment: Five stable destinations including QR and messages.

# Color and surfaces

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

# Typography

### Font Family
- **SF Pro Display** — civic headings and large statuses.
- **SF Pro Text** — services, documents, forms, and profile data.
- **SF Mono** — request, document, and signature identifiers.

### Principles
- Prefer plain-language service names.
- Keep request status and document owner clear.
- Use consistent category icon labels.
- Make legal detail readable rather than visually hidden.

### Note on Font Substitutes
Use the platform system sans or **Inter** with tabular identifiers.

# Screen composition

### Spacing System
Use a 4pt base, 16pt gutters, 12pt list rhythm, 12pt card padding, and 24pt between service groups.

### Grid & Container
Home stacks search, banners, documents, institution shortcuts, information, and popular services above a five-tab bar.

### Whitespace Philosophy
Keep administrative lists compact but clearly grouped; allow empty document states to remain calm and explicit.

# Navigation appearance

Home, eGov QR, Services, Messages, and Profile stay in the tab bar; nested services use back or close navigation.

# Components

### Buttons
Use blue filled actions for service submission and pale-blue actions for refresh or help; secondary rows use chevrons.

Use tabs for personal versus family documents and compact chips for popular, recommended, and filter categories.

### Cards & Containers
Use document cards, service rows, institution tiles, info banners, request status blocks, and profile groups.

### Inputs & Forms
Service forms group applicant data, request fields, attachments, signature, authentication, and review state.

### Status & Build Page
Show current, approved, rejected, expired, shared, signed, submitted, and unavailable states with label plus color or icon.

### Navigation
Home, eGov QR, Services, Messages, and Profile stay in the tab bar; nested services use back or close navigation.

The five-tab bar stays white and lets blue mark the active destination.

# Imagery and icons

Use pale cards, white sheets, and thin dividers. Authentication and document sharing gain modal elevation.

### Decorative Depth
Institutional banners and document previews provide visual variety; operational services remain flat.

# States

Show current, approved, rejected, expired, shared, signed, submitted, and unavailable states with label plus color or icon.

# iOS adaptation

### Touch Targets
Keep search, documents, services, QR, tabs, form rows, signature, and authentication actions at least 44pt.

### Collapsing Strategy
Preserve identity, current service, status, documents, and navigation. Move banners and recommendations below active administrative tasks.

### Image Behavior
Contain official document and logo imagery without crop; crop banners only in their designed frames and preserve embedded copy.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

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

# Known gaps

- Tokens were inferred visually from inspected mobile screens.
- All 64 flows were inventoried; Home, Digital documents, and Receiving a service were image-reviewed.
- One reviewed document step was video-only; signatures and QR were not deeply sampled.
- No separate expressive illustration system appeared in task screens.

</design-context>
