<design-context>
---
version: 1
platform: iOS
name: Lovi-design-analysis
description: "A bright skincare companion with white and off-white canvases, blurred lavender-blue-pink ambience, large rounded white cards, glowing periwinkle gradient actions, a light compact tab bar, real product packshots, and a recurring smiling gradient assistant floating near guidance."
colors:
  canvas: "#F8F7FC"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F0EBFA"
  accent-primary: "#6670F4"
  accent-secondary: "#F29BB8"
  text-primary: "#27243A"
  text-secondary: "#74718A"
  divider: "#E7E1EF"
  destructive: "#D95C72"
typography:
  hero: {fontFamily: "SF Pro Rounded", fontSize: 36, fontWeight: 700, lineHeight: 42}
  title: {fontFamily: "SF Pro Rounded", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Rounded", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 16
  card: 24
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "periwinkle-gradient", foreground: "#FFFFFF", shape: "pill"}
  secondary-action: {fill: "#FFFFFF", foreground: "#6670F4", shape: "pill-or-card"}
  primary-card: {fill: "#FFFFFF", foreground: "#27243A", shape: "large-rounded-rectangle"}
  navigation: {fill: "#FFFFFF", inactive: "#A7A3B7", selected: "#F29BB8"}
---

# Overview

Lovi turns product assessment and skin tracking into a soft companion experience rather than a clinical dashboard. White and off-white dominate, with pale blurred lavender, blue, and pink color fields creating atmosphere behind large rounded cards and glowing periwinkle actions. Real cosmetic packshots and camera imagery remain factual, while a small smiling gradient assistant provides a recurring friendly focal point near guidance and navigation.

# Non-negotiable visual invariants

- White or off-white occupies most of the viewport, softened by broad low-contrast lavender, blue, and blush gradient ambience.
- Cards, sheets, choices, search, and actions use consistently generous rounded geometry with minimal borders and soft separation.
- Primary actions use a saturated periwinkle or blue-purple gradient with white text, often with a subtle glow rather than a hard shadow.
- The smiling gradient assistant recurs across onboarding and ordinary app states as a small floating guide, without covering primary data.
- Product information uses real packshots, compact labels, green fit badges, and small price or retailer pills.
- The bottom bar stays light, compact, icon-first, and low contrast; pink or filled emphasis marks the selected item.
- Bottom sheets present large rounded choices over dimmed or blurred context and use a top grab handle when visible.
- External camera, browser, Settings, mail, keyboard, and alert surfaces retain native iOS chrome.

# Color and surfaces

The base ranges from white to a barely tinted off-white. Pale lavender and blue-pink blurs form large atmospheric masses behind otherwise solid white cards. Periwinkle and blue-purple gradients mark primary actions, scanning emphasis, and selected controls. Blush pink belongs to the assistant and selected navigation rather than destructive meaning. Deep violet-gray carries titles and decisions; muted lavender-gray carries explanations, timestamps, and placeholders. Soft green marks positive compatibility or benefit, yellow appears in retailer price emphasis, and red is reserved for genuine errors or destructive outcomes. A flat clinical blue dashboard, harsh red warnings, beige wellness palette, or dark card stack would break the observed mood.

# Typography

Large headings use an SF Pro Rounded-like face with bold weight and friendly proportions; dense product, ingredient, legal, and settings content uses SF Pro Text. Titles are large and left or center aligned depending on the composition, card headings are medium-weight, and secondary text is compact gray. Scores and benefit labels are prominent without becoming oversized metrics. When SF Pro Rounded is unavailable, use a softly rounded iOS-safe sans only for display roles. Dynamic Type should expand cards, sheets, checklists, and product rows vertically while preserving the title-card-body-caption hierarchy.

# Screen composition

Onboarding archetypes place a centered logo or assistant visual in the upper-middle, a large rounded title and short copy below, and one gradient CTA near the bottom safe area. Questionnaire screens use one prompt, stacked rounded choice pills, and a bottom CTA whose enabled state is visually obvious. Main feed and diary archetypes use a single vertical scroll of large white cards over soft ambient color, with a compact light tab bar at the bottom and the assistant floating near the lower edge.

Product archetypes use two-column cards or compact rows with contained packshots, name, fit indicator, and retailer action; detail screens stack a larger packshot, score, explanation, and grouped information. Scan archetypes shift to camera or processing imagery with centered guides and circular controls. Assistant archetypes use compact bubbles and loading states inside the same light rounded language. Sheets rise from the bottom with large corner radii, stacked options, and ample internal spacing.

# Navigation appearance

The primary navigation is a light compact bottom bar with thin line icons, small labels, muted inactive states, and pink or filled selected emphasis. A floating premium pill may sit above it, and the smiling assistant may appear as a separate circular affordance near the trailing lower corner. Detail and modal surfaces use a simple back chevron, close symbol, or top grab handle. Bottom sheets have white fill and large top corners. Native external surfaces remain visually native instead of being restyled into the Lovi shell.

# Components

Primary CTAs are wide periwinkle-gradient pills with white semibold labels and a restrained glow. Answer choices are white rounded pills or short cards with a thin outline, circular selection mark, and clear selected or disabled state. Insight and checklist cards use white fill, 24-point-class corners, compact title/body grouping, and optional lock or completion circles. Product cards contain a clean packshot, compact dark title, gray metadata, green score badge, and small yellow or neutral retailer pill. Search uses a pale rounded field. The assistant control is a small circular or blob-like face with enough clear space to remain legible. Scan controls are simple circular icons over the camera surface.

# Imagery and icons

Real product packshots, skincare photography, tutorial video, and camera/face-scan imagery are essential factual content. Packshots use contained scaling on clean light surfaces; camera imagery fills the scan region; editorial photos keep intentional crops. The authored assistant is a soft-gradient smiling circular or blob-like face, sometimes paired with the Lovi mark, and is compositionally distinct from factual imagery. Thin outline choice and navigation icons remain secondary. The assistant layer cannot be replaced by a generic SF Symbol or removed while waiting for final assets.

# States

Observed states include splash and authentication, unselected and selected questionnaire choices, disabled and enabled CTA, premium offer, locked and completed checklist items, diary mood selection, product browsing and search with keyboard, detail loading and content, assistant loading and chat, tutorial video, retailer transition, save-to-shelf sheet, scan choice, processing, face-scan guidance and progress, insight content and error alert, profile and settings lists, native external documents, mail composition, and logout confirmation. Soft canvas, rounded geometry, periwinkle emphasis, and compact gray support text remain stable.

# iOS adaptation

Respect safe areas for the light tab bar, floating premium/assistant controls, sheets, and bottom CTAs. Use vertical scrolling for questionnaires, feeds, products, details, insights, profiles, and legal content, and let the keyboard move or scroll focused controls into view. Keep all pills, cards, scan actions, tabs, and floating assistant targets at least 44 points. On compact widths, collapse product grids to fewer columns before reducing packshot legibility, and ensure the assistant never overlaps a primary action or score. VoiceOver order should follow title, guidance, factual product or skin data, then actions; compatibility and locked/completed states cannot rely on color alone. Preserve native permission and external-app transitions. The sampled shell is light-first.

# Anti-generic checklist

- Do not replace the ambient lavender-blue-pink field with a flat clinical background or generic gradient header.
- Do not use default blue buttons; preserve the periwinkle gradient and pill geometry.
- Do not omit or redraw the assistant as an arbitrary SF Symbol or SwiftUI shape.
- Do not turn every white surface into the same card radius or add hard drop shadows.
- Do not crop product packshots like lifestyle photography or use stock imagery instead of factual products.
- Do not overload cards with all ingredient detail at once or add decorative wellness copy.
- Do not use an unstyled `TabView`; preserve the compact light bar and pink/filled selection.
- Do not let the assistant, premium pill, or floating controls cover essential content.

</design-context>
