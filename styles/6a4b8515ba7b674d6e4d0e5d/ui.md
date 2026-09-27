<design-context>
---
version: alpha
name: Green-SM-design-analysis
description: "A light mobility interface centered on turquoise actions, white floating sheets, map-led trip states, and mint-tinted service cards. Friendly 3D vehicle objects and circular feedback illustrations soften a highly operational booking and safety flow."
colors: {primary: "#27C4C8", on-primary: "#FFFFFF", primary-hover: "#43CDD0", primary-focus: "#11A7AC", ink: "#191B1E", ink-muted: "#676B70", ink-subtle: "#989CA1", ink-tertiary: "#C5C8CC", canvas: "#FFFFFF", surface-1: "#F6F8F8", surface-2: "#ECF6F5", surface-3: "#DDF0EE", surface-4: "#C9E5E2", hairline: "#E1E6E6", hairline-strong: "#C5CFCF", hairline-tertiary: "#ADB9B9", inverse-canvas: "#115D62", inverse-surface-1: "#16767B", inverse-surface-2: "#21969B", inverse-ink: "#FFFFFF", brand-secure: "#27C4C8", semantic-success: "#2AAF78", semantic-overlay: "#162124"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 34px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.7px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 28px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.1px}
  card-title: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  bottom-sheet: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 18px}
  ride-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 4px 8px}
  bottom-nav: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 8px 10px}
---
## Overview

Green SM combines a clean service home with map-first taxi booking. Turquoise carries every important action, while white sheets and friendly car or feedback artwork make trip states easy to understand.

**Key Characteristics:** turquoise CTAs, white canvas, mint service fields, map-led trip flow, rounded floating sheets, 3D vehicle objects, illustrated rating attributes, and compact pill navigation.

## Colors

### Brand & Accent

Turquoise owns primary actions, active navigation, route emphasis, and selected ride controls. Mint tints support informational and environmental messaging.

### Surface

White dominates home, booking sheets, and trip detail. Pale gray or mint separates service tiles, payment, safety, and feedback sections.

### Text

Near-black leads destination, fare, driver, and trip state. Gray supports addresses, secondary labels, and policy detail.

### Semantic

Turquoise means active or confirmed, green means positive safety or availability, yellow supports rating, and red is limited to cancellation or emergency.

## Typography

### Font Family

Use SF Pro Display for trip state and fare emphasis and SF Pro Text for addresses, driver detail, payments, safety, and feedback.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 28px | 700 | Trip state |
| headline | 20px | 700 | Sheet title |
| card-title | 15px | 600 | Ride or driver |
| body | 13px | 400 | Address and detail |
| caption | 10px | 400 | ETA and metadata |

### Principles

- Lead with pickup, destination, ETA, fare, or driver state.
- Use stable address and payment positions through the trip.
- Keep environmental messages warm but secondary.

### Note on Font Substitutes

Use the platform sans with clear map labels and tabular fare numerals.

## Layout

### Spacing System

Use a 4px base, 12–16px control gaps, 18px sheet padding, and 20–24px between service modules.

### Grid & Container

Home stacks search, service tiles, operating-area message, and promotions. Booking fills the viewport with a map and one bottom sheet.

### Whitespace Philosophy

Keep the service home open and the active trip operational. Do not crowd the map with unrelated promotions.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White or map canvas | Home or trip |
| 1 | Mint service tile | Entry point |
| 2 | White rounded sheet | Booking and status |
| 3 | Turquoise action | Request or submit |

### Decorative Depth

Use 3D turquoise vehicles, map routes, circular feedback illustrations, and light promotional photography with minimal shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Small badge |
| rounded-sm | 8px | Button and input |
| rounded-md | 12px | Ride card |
| rounded-lg | 18px | Home promotion |
| rounded-xl | 24px | Bottom sheet |

### Photography & Illustration Geometry

Treat cars as isolated angled objects inside pale tiles. Use circular illustrated scenes for rating attributes and wide rectangles for promotions.

## Components

### Buttons

Primary booking and submit actions are turquoise with white labels. Secondary actions stay white or pale; emergency and cancellation remain visually distinct.

### Pricing Tabs

Ride class, payment, promotion, and trip-for-someone choices use cards, rows, or compact chips with turquoise selection.

### Cards & Containers

Ride cards align vehicle, rating, price, and optional prior price. Driver cards group portrait, vehicle, plate, rating, chat, and call.

### Inputs & Forms

Address search and notes use pale fields with clear focus. Native controls must inherit turquoise focus, rounded geometry, type, and spacing.

### Status & Build Page

Keep ETA, pickup, destination, fare, payment, driver, vehicle, plate, safety, and cancellation near the current trip state.

### Navigation

Use a translucent or pale pill bar for Home, History, Notifications, and Profile. The map flow replaces the bar with contextual controls.

### Footer

No footer; pill navigation or the current trip action owns the safe area.

## Do's and Don'ts

### Do

- Preserve turquoise as the single transactional accent.
- Keep map, route, fare, and driver state synchronized.
- Use illustration to clarify services and feedback.

### Don't

- Don't introduce competing saturated accents.
- Don't cover the map before information is needed.
- Don't let environmental messaging obscure trip safety.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten ride and feedback cards |
| Standard | 375–430px | Default trip composition |
| Wide | 431px+ | Expand sheet and map gutters |

### Touch Targets

Search, map controls, ride cards, safety, chat, call, rating, navigation, and submit remain at least 44px.

### Collapsing Strategy

Preserve route, ETA, fare, payment, driver, safety, and primary action; collapse promotions and secondary trip detail first.

### Image Behavior

Keep vehicles fully visible, crop promotions around the car and headline, and preserve map label readability.

## Iteration Guide

Tune Home and address search first, then ride choice, booking, pickup, active trip, safety, rating, history, and profile.

## Known Gaps

- Password recovery and support-request resolution were not fully sampled.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
