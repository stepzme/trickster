<design-context>
---
version: 1
platform: iOS
name: SUNLIGHT-design-analysis
description: "A dense jewelry-commerce interface built on white fields, black transactional controls, sharp red brand accents, compact product data, and highly detailed product photography."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F4F4F5"
  accent-primary: "#F10D16"
  accent-secondary: "#111111"
  text-primary: "#111111"
  text-secondary: "#717174"
  divider: "#DEDEE0"
  destructive: "#D90812"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 31}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 12
  control-gap: 8
rounded:
  control: 8
  card: 10
  sheet: 28
  pill: 999
components:
  primary-action: {background: "#111111", foreground: "#FFFFFF", minHeight: 52, cornerRadius: 8}
  secondary-action: {background: "#FFFFFF", foreground: "#111111", border: "#DEDEE0", minHeight: 48, cornerRadius: 8}
  primary-card: {background: "#FFFFFF", foreground: "#111111", cornerRadius: 10}
  navigation: {background: "#FFFFFF", selected: "#111111", unselected: "#8A8A8E"}
---

# Overview

SUNLIGHT uses an information-dense retail composition rather than a soft card dashboard. White occupies most of the viewport, jewelry photography carries the visual detail, black anchors purchase decisions, and saturated red appears as a concentrated brand and promotion signal. Product grids, compact metadata, and thin separators make the interface feel closer to a catalog than to a generic grouped iOS form.

# Non-negotiable visual invariants

- White remains the dominant full-screen field; pale gray is limited to inputs, secondary groups, and separators.
- Primary purchase and checkout actions are broad black controls with white labels.
- SUNLIGHT red is concentrated in the brand mark, loyalty surfaces, badges, pins, and selected promotional moments rather than filling every control.
- Product photography is large, clean, and centered; jewelry stays fully legible against white rather than being treated as decoration.
- Browsing surfaces remain dense: compact labels and prices sit close to two-column imagery with narrow, regular gaps.
- Corner radii stay restrained on commerce content; only pills, badges, and iOS sheets become strongly rounded.
- Top bars remain visually sparse and white, while bottom navigation uses black selected and gray unselected states.
- Price, discount, rating, availability, size, and status retain a clear order even when several appear in one product block.

# Color and surfaces

The canvas, navigation bars, product areas, and most rows are white. Secondary search fields, segmented backgrounds, and grouped utilities use a very pale neutral gray; dividers are thin, light, and visible without turning content into separate floating cards.

Near-black leads headings, prices, selected navigation, and commitment actions. Mid-gray carries metadata, old prices, placeholders, and inactive navigation. Bright SUNLIGHT red is the main chromatic accent for branding, loyalty, discount emphasis, pins, and promo banners. Green is reserved for positive availability or completed status; occasional gold or yellow supports ratings and campaign material. Default iOS blue would visibly break this black-red retail hierarchy.

# Typography

Use SF Pro as the safe iOS substitute. Screen and product-detail titles are bold and compact, typically around 24–28 points. Section headings are about 18–20 points; primary product labels and prices sit around 14–16 points; secondary attributes and catalog labels fall to 11–13 points. Large hero type is uncommon outside campaigns.

Prices use strong weight and tabularly stable numerals. Old prices, installment notes, metal, size, rating, and availability are quieter but remain tightly aligned. Some product-detail titles can use a higher-contrast editorial feel, but the operational interface stays sans-serif. With Dynamic Type, metadata may wrap before the price, title, or main action loses prominence; dense grids may reduce columns rather than compress text below legibility.

# Screen composition

Primary pages use roughly 16-point side insets, 8–12-point local gaps, and 20–28 points between major modules. Content usually begins directly below a sparse top bar and continues as a long vertical scroll above a persistent tab bar or bottom-owned action.

Observed archetypes:

- Catalog grid: search or filter controls above a dense two-column product field, with large square imagery and compact price/attribute stacks.
- Taxonomy browser: a narrow vertical category rail paired with a wider multi-column image grid.
- Product detail: image-led upper region followed by title, price and discount, ratings, options, delivery facts, and a prominent bottom purchase action.
- Cart and checkout: flat full-width rows, segmented delivery choices, compact labeled fields, summary data, and a broad black commitment control near the bottom.
- Account and utility lists: white rows divided by hairlines, restrained iconography, and local red or green status cues.
- Modal decisions: rounded iOS sheets over a dimmed backdrop, containing compact option lists or a focused form.

Campaign banners may interrupt the white catalog with a large red or colorful field, but they remain bounded modules. Bottom-owned controls reserve the lower safe area and never cover the last product or form row.

# Navigation appearance

The persistent tab bar is white with thin outline-style icons and short labels. The selected destination turns near-black; inactive items remain medium gray. A small red brand mark or badge may coexist with this selection treatment but does not replace it.

Top navigation bars are white and visually light, with a back chevron and compact search, share, favorite, or bag controls. Detail screens avoid oversized navigation chrome. Sheets use large rounded top corners, a dimmed backdrop, and either a drag indicator or explicit close control. These rules describe appearance only, not destination count or product architecture.

# Components

Primary actions are full-width or near-full-width black rectangles, about 48–52 points high, with modest 6–10-point rounding and a semibold white label. Disabled actions reduce contrast without becoming default blue or gray capsules. Secondary actions are white or pale gray with a thin neutral border.

Product cells are flat, image-led blocks rather than raised cards: a clean image field, compact title, strong price, quieter old price or installment line, and small rating/favorite controls. Favorite hearts, bag controls, and utility icons use fine dark outlines. Discount and loyalty badges are compact red accents.

Search fields are pale rectangular controls with restrained rounding and leading utility icons. Size selection uses a precise grid of bordered choices with a visibly selected state. Cart rows pair product imagery with tightly aligned price, quantity, service, and removal controls. Segmented controls use quiet neutral containers and strong text contrast rather than oversized pills.

Pressed states darken black actions or slightly reduce surface brightness. Selected filters, sizes, and tabs must be distinguishable by fill, border, or weight, not red alone. All targets remain at least 44 points even when the visible icon is small.

# Imagery and icons

High-resolution jewelry photography is structural: product cutouts occupy most of their cells and preserve the full object, fine metal detail, and scale. Use aspect-fit behavior for isolated product imagery and avoid aggressive crops. Lifestyle or campaign photography may use edge-to-edge cover inside landscape banners with protected text areas.

Campaign graphics, loyalty art, occasional line diagrams, and isolated promotional drawings are situational rather than a reusable illustration language. Do not imitate them with SwiftUI shapes or treat them as the default image style. Functional icons are thin, economical pictograms; use consistent stroke weight and do not substitute arbitrary filled SF Symbols where the outline system is visible.

Product imagery cannot be omitted while final assets are pending. Any temporary asset must preserve the documented crop, scale, white field, and visual density.

# States

Observed states include onboarding and system-permission transitions, populated search suggestions, sort and filter sheets, signed-out phone entry and code entry, favorite-list creation, added-to-cart confirmation, promo selection, checkout with keyboard, completed order confirmation, empty notifications, and settings toggles.

Across states, white remains dominant, black retains action priority, red stays a localized brand/status accent, and sheets preserve rounded geometry over a dimmed backdrop. Empty states use restrained iconography and concise copy rather than large decorative scenes. No explicit error state was visible in the sample; an error adaptation must keep the same hierarchy and introduce a semantic treatment without turning the screen into a new visual system.

# iOS adaptation

Extend white or the active campaign field through the safe areas while keeping text and controls inside appropriate insets. Use vertical scrolling for dense catalogs, product details, and checkout forms; reserve space for the home indicator, tab bar, and any bottom purchase action.

Let filter rails and segmented collections scroll horizontally when necessary. For compact widths or larger text, reduce grid columns before shrinking product labels. Present keyboard, camera/photo access, location, tracking, and other system permission prompts natively, then return to the same visual context. Maintain a logical VoiceOver order from image and title through price, attributes, and action; give every icon-only control an accessible label. The observed package is light-first, so do not invent a dark palette unless the product requirements explicitly require one.

# Anti-generic checklist

- Do not replace the dense catalog with a loose stack of oversized rounded cards.
- Do not use default blue tint for links, selected tabs, or purchase controls.
- Do not make every surface pale gray or floating; white is the main canvas and content surface.
- Do not round black actions into exaggerated capsules.
- Do not omit product photography or crop jewelry until its silhouette and scale are unclear.
- Do not use red for every interactive element or as the sole signal for destructive meaning.
- Do not substitute an unstyled `TabView`, `Form`, or arbitrary mixed-weight SF Symbols for the observed navigation and icon treatment.
- Do not flatten price, discount, installment, rating, and availability into one undifferentiated text block.

</design-context>
