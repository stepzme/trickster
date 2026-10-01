<design-context>
---
version: 1
platform: iOS
name: Green-SM-design-analysis
description: "A light mobility interface centered on turquoise actions, white floating sheets, map-led trip states, and mint-tinted service cards. Friendly 3D vehicle objects and circular feedback illustrations soften a highly operational booking and safety flow."
colors: {primary: "#27C4C8", on-primary: "#FFFFFF", primary-focus: "#11A7AC", ink: "#191B1E", ink-muted: "#676B70", ink-subtle: "#989CA1", ink-tertiary: "#C5C8CC", canvas: "#FFFFFF", surface-1: "#F6F8F8", surface-2: "#ECF6F5", surface-3: "#DDF0EE", surface-4: "#C9E5E2", hairline: "#E1E6E6", hairline-strong: "#C5CFCF", hairline-tertiary: "#ADB9B9", inverse-canvas: "#115D62", inverse-surface-1: "#16767B", inverse-surface-2: "#21969B", inverse-ink: "#FFFFFF", brand-secure: "#27C4C8", semantic-success: "#2AAF78", semantic-overlay: "#162124"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 34, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.7}
  display-lg: {fontFamily: SF Pro Display, fontSize: 28, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.1}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  bottom-sheet: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 18}
  ride-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [4, 8]}
  bottom-nav: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [8, 10]}
---

# Overview

Green SM combines a clean service home with map-first taxi booking. Turquoise carries every important action, while white sheets and friendly car or feedback artwork make trip states easy to understand.

**Key Characteristics:** turquoise CTAs, white canvas, mint service fields, map-led trip flow, rounded floating sheets, 3D vehicle objects, illustrated rating attributes, and compact pill navigation.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: turquoise CTAs.
- The reviewed screens show this treatment: white canvas.
- The reviewed screens show this treatment: mint service fields.
- The reviewed screens show this treatment: map-led trip flow.
- The reviewed screens show this treatment: rounded floating sheets.
- The reviewed screens show this treatment: 3D vehicle objects.
- The reviewed screens show this treatment: illustrated rating attributes.
- The reviewed screens show this treatment: compact pill navigation.

# Color and surfaces

### Brand & Accent

Turquoise owns primary actions, active navigation, route emphasis, and selected ride controls. Mint tints support informational and environmental messaging.

### Surface

White dominates home, booking sheets, and trip detail. Pale gray or mint separates service tiles, payment, safety, and feedback sections.

### Text

Near-black leads destination, fare, driver, and trip state. Gray supports addresses, secondary labels, and policy detail.

### Semantic

Turquoise means active or confirmed, green means positive safety or availability, yellow supports rating, and red is limited to cancellation or emergency.

# Typography

### Font Family

Use SF Pro Display for trip state and fare emphasis and SF Pro Text for addresses, driver detail, payments, safety, and feedback.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 28pt | 700 | Trip state |
| headline | 20pt | 700 | Sheet title |
| card-title | 15pt | 600 | Ride or driver |
| body | 13pt | 400 | Address and detail |
| caption | 10pt | 400 | ETA and metadata |

### Principles

- Lead with pickup, destination, ETA, fare, or driver state.
- Use stable address and payment positions through the trip.
- Keep environmental messages warm but secondary.

### Note on Font Substitutes

Use the platform sans with clear map labels and tabular fare numerals.

# Screen composition

### Grid & Container

Home stacks search, service tiles, operating-area message, and promotions. Booking fills the viewport with a map and one bottom sheet.

### Whitespace Philosophy

Keep the service home open and the active trip operational. Do not crowd the map with unrelated promotions.

# Navigation appearance

Use a translucent or pale pill bar for Home, History, Notifications, and Profile. The map flow replaces the bar with contextual controls.

# Components

### Buttons

Primary booking and submit actions are turquoise with white labels. Secondary actions stay white or pale; emergency and cancellation remain visually distinct.

Ride class, payment, promotion, and trip-for-someone choices use cards, rows, or compact chips with turquoise selection.

### Cards & Containers

Ride cards align vehicle, rating, price, and optional prior price. Driver cards group portrait, vehicle, plate, rating, chat, and call.

### Inputs & Forms

Address search and notes use pale fields with clear focus. Native controls must inherit turquoise focus, rounded geometry, type, and spacing.

### Status & Build Page

Keep ETA, pickup, destination, fare, payment, driver, vehicle, plate, safety, and cancellation near the current trip state.

### Navigation

Use a translucent or pale pill bar for Home, History, Notifications, and Profile. The map flow replaces the bar with contextual controls.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White or map canvas | Home or trip |
| 1 | Mint service tile | Entry point |
| 2 | White rounded sheet | Booking and status |
| 3 | Turquoise action | Request or submit |

### Decorative Depth

Use 3D turquoise vehicles, map routes, circular feedback illustrations, and light promotional photography with minimal shadow.

# States

Keep ETA, pickup, destination, fare, payment, driver, vehicle, plate, safety, and cancellation near the current trip state.

# iOS adaptation

### Touch Targets

Search, map controls, ride cards, safety, chat, call, rating, navigation, and submit remain at least 44pt.

### Collapsing Strategy

Preserve route, ETA, fare, payment, driver, safety, and primary action; collapse promotions and secondary trip detail first.

### Image Behavior

Keep vehicles fully visible, crop promotions around the car and headline, and preserve map label readability.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not turn the documented white canvas into a generic card stack; preserve the observed accent, density, imagery, and surface grouping.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

### Do

- Preserve turquoise as the single transactional accent.
- Keep map, route, fare, and driver state synchronized.
- Use illustration to clarify services and feedback.

### Don't

- Don't introduce competing saturated accents.
- Don't cover the map before information is needed.
- Don't let environmental messaging obscure trip safety.

</design-context>
