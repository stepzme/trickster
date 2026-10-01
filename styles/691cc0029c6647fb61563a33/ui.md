<design-context>
---
version: 1
platform: iOS
name: Ucom-design-analysis
description: "A dark, compact carrier interface in which electric-lime header fields and actions cut through layered charcoal account surfaces, while tabular metrics, restrained photography, and a recurring line-art mascot provide hierarchy and identity."
colors:
  canvas: "#171817"
  surface-primary: "#202120"
  surface-secondary: "#292A29"
  accent-primary: "#65D400"
  accent-secondary: "#3B83F6"
  text-primary: "#F5F6F3"
  text-secondary: "#A0A39E"
  divider: "#343634"
  destructive: "#EF5A62"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 10
  card: 16
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "lime or lime gradient", text: "near-black semibold", height: 52, radius: 10}
  metric-card: {fill: "layered charcoal", padding: 16, radius: 16, content: "large tabular value with compact label"}
  service-row: {fill: "charcoal", height: 56, divider: "subtle", icon: "small monochrome or lime"}
  navigation: {fill: "near-black", selected: "lime icon and label", unselected: "muted gray"}
---

# Overview

Ucom is a dark-first utility interface whose identity comes from the collision of near-black account surfaces and large electric-lime color fields. Dense service information is organized with strong numeric values, compact labels, short rows, and restrained separators. The interface does not resemble a generic dark SwiftUI card stack: lime sometimes becomes an entire header or bottom action, photographic promotional cards interrupt the data rhythm, and a recurring lime-and-white line-art mascot appears in introductory and empty-state moments.

# Non-negotiable visual invariants

- The interface remains dark-first: near-black fills the full viewport and charcoal surfaces separate content without white cards or elevated shadows.
- Electric lime is the dominant brand mass, used for primary actions, selected navigation, emphasized metrics, and occasional full-width header fields.
- Large account values use tabular numerals and visibly outrank the compact descriptive text around them.
- Information-dense screens use tight rows, thin separators, and modest corner radii rather than oversized airy cards.
- A four-item bottom bar stays visually attached to the dark canvas; only the selected item turns lime.
- Wide primary actions occupy the lower portion of decision screens and retain a strong lime or lime-gradient fill.
- Promotional photography and the line-art mascot are real compositional layers; neither may be replaced by arbitrary symbols or omitted where observed.
- Navigation titles are compact and centered on detail surfaces, with a simple back chevron aligned to the leading edge.

# Color and surfaces

The canvas is a continuous warm near-black. Primary charcoal holds cards and grouped rows; a slightly lighter secondary charcoal distinguishes nested controls, inactive fields, and selected list surfaces. Separators stay close to the surface values and should organize density without drawing boxes around everything.

Electric lime is the unmistakable primary accent. It may occupy a complete header, fill a wide action, trace a metric, or mark the active tab. Near-black text is used on lime. A clear medium blue appears in a limited set of supporting operations and onboarding details, but it never competes with lime for brand ownership. Off-white carries primary text; cool gray carries captions, inactive navigation, and secondary values. Red is reserved for destructive or failure states. Default iOS blue, white grouped-form backgrounds, and pale gray cards would break the reference.

# Typography

Use SF Pro Display for large values and page-level titles and SF Pro Text for rows, controls, and metadata. The hierarchy is driven by a wide scale contrast: balances and allowance values sit around 28–36 points, page titles around 24–28, section labels around 18–20, and service text around 12–16. Numeric information uses tabular figures so adjacent allowances and prices align. Primary values are bold; most supporting text is regular rather than uniformly semibold.

Text is usually left-aligned inside account surfaces, while compact navigation titles and some introductory messages are centered. Labels wrap only after the main value and unit retain their relationship. With Dynamic Type, cards and rows grow vertically, dense metric groups may stack, and supporting text wraps before any value is truncated.

# Screen composition

Most screens use 16-point horizontal insets, 12–16 points inside cards, and 20–24 points between major groups. The black canvas extends behind both safe areas. Content scrolls vertically, while the bottom navigation or a single wide action reserves its own lower safe-area region.

Observed archetypes include:

- Dashboard composition: a large balance or identity area sits high in the viewport, followed by a compact multi-metric card, a horizontal promotional rail, then dense service rows. Lime may form the upper background mass.
- Metric and plan composition: a prominent title or price leads, followed by grouped allowances, comparison blocks, and one strong bottom action. Cards remain dark and compact.
- Utility-list composition: a centered navigation title tops a sequence of full-width charcoal rows with leading icons, secondary values, chevrons, and subtle dividers.
- Form composition: grouped dark inputs sit within the black canvas, with clear amount or account context above a wide lower action. The keyboard remains native.
- Promotional composition: edge-to-edge or wide rounded photography supplies a large visual field, with short overlaid or adjacent copy and minimal competing chrome.
- Empty and permission composition: generous dark negative space surrounds the authored mascot, concise text, and one lime action.

# Navigation appearance

The primary bottom bar is dark, flat, and divided into four evenly spaced icon-and-label items. Inactive items are muted gray; the active item becomes lime without a large floating capsule. Detail surfaces use a centered white title, a small leading back chevron, and occasional compact trailing actions. Sheets rise from the bottom with a dark surface, large top corners, and native drag affordance when present. System alerts remain native, but return into the same dark visual context.

# Components

- Primary action: 52–56 points tall, nearly full width, lime or a subtle lime gradient, with a 10–12 point radius and centered near-black semibold label. Pressing darkens the lime; disabled states retain the geometry but reduce contrast.
- Metric card: charcoal fill, 14–16 point padding, 14–16 point radius, and two or three comparable values. Large tabular numerals sit above small muted labels; lime arcs, lines, or indicators appear only when the metric needs emphasis.
- Service row: approximately 56 points tall, dark fill, small leading icon, primary label, optional muted secondary value, and restrained trailing disclosure. Separators align with text rather than cutting through the icon gutter.
- Promotional tile: rounded photographic crop with a controlled dark or lime overlay, concise type, and no decorative shadow.
- Input group: charcoal fields with clear state contrast, off-white entry text, muted placeholders, and compact labels. Native switches and selectors inherit lime as the active color.
- Bottom action region: one wide action sits above the home indicator with dark breathing space around it rather than floating over content.

# Imagery and icons

Photography appears in promotional stories, offer cards, payment-related promotions, and location or service contexts. Crops are bold and close, usually occupying most of the card rather than behaving as a thumbnail. A dark gradient or color overlay protects text when it sits on an image.

The recurring mascot is drawn in a sparse lime-and-white line language on the dark canvas. It is large enough to own introductory, permission, or empty-state compositions and cannot be replaced by an SF Symbol. Utility icons are simple, compact, and mostly monochrome, with lime used for selection or emphasis. Maps and native media retain their recognizable content treatment. When final imagery is unavailable, a temporary asset must preserve the documented crop, placement, and visual mass.

# States

Observed populated account surfaces keep the same black canvas while values, progress marks, and secondary labels change within fixed card structures. Selected tabs, enabled switches, active services, and successful states use lime. Disabled or inactive items use muted gray without introducing a new surface system. Failure and destructive confirmation use red sparingly.

Empty ticket and permission-oriented screens preserve the dark field but replace dense data with large mascot art, short centered text, and one clear action. Modal sheets use layered charcoal; native alerts, payment surfaces, keyboards, and permission prompts may use system presentation while the underlying screen remains visually consistent.

# iOS adaptation

Extend the near-black or lime field through the top safe area and reserve the lower safe area for the documented bottom bar or action. Use vertical scroll containers on compact heights, and never allow pinned controls to cover the last row. Multi-column metric groups may reduce internal gaps or stack when Dynamic Type makes comparison unreadable.

All rows, icons, and controls need at least 44-point targets. VoiceOver should announce the primary value before its unit and supporting label, and read row labels before secondary values and disclosure controls. Preserve the native keyboard, picker, map, camera, payment, and permission transitions. The sampled product is dark-first; do not invent a light version unless the consuming product explicitly requires one. On current narrow iPhones, maintain 16-point edge insets and prioritize the primary value, image, and action over secondary copy.

# Anti-generic checklist

- Do not replace the dark canvas with a system grouped background or a stack of white cards.
- Do not use default blue tint where the reference requires electric lime.
- Do not render every section as the same oversized rounded rectangle.
- Do not ship an unstyled `TabView`; selected and inactive states must use the documented lime/gray contrast.
- Do not replace the mascot, promotional photography, or branded service imagery with arbitrary SF Symbols.
- Do not use broad shadows, glass effects, or translucent floating navigation.
- Do not make all text the same medium weight or reduce the contrast between primary values and metadata.
- Do not omit the large lower action or let it overlap scroll content and the home indicator.

</design-context>
