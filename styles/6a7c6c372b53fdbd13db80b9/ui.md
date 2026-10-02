<design-context>
---
version: 1
platform: iOS
name: Craft-design-analysis
description: "An airy document workspace using white and very light gray surfaces, crisp black editorial type, saturated blue actions, document thumbnails, minimal circular controls, and translucent floating toolbars."
colors:
  canvas: "#F7F7F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEF0F3"
  accent-primary: "#2775F5"
  accent-secondary: "#DCE9FF"
  text-primary: "#17181A"
  text-secondary: "#74777C"
  divider: "#E5E6E8"
  destructive: "#D84C55"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 42}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "New York", fontSize: 17, fontWeight: 400, lineHeight: 25}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 20
  section-gap: 28
  card-padding: 16
  control-gap: 10
rounded:
  control: 12
  card: 16
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "saturated blue", text: "white semibold", shape: "rounded rectangle or circle"}
  secondary-action: {fill: "translucent light gray", text: "near-black", shape: "pill or circle"}
  primary-card: {fill: "white", content: "document preview and compact metadata", shape: "medium rounded"}
  navigation: {fill: "white or frosted", selected: "blue", accessory: "minimal circular controls"}
---

# Overview

Craft is an airy document workspace in which the page or document preview is the main visual surface. Navigation and creation tools float lightly around it, using white, pale gray, saturated blue, and restrained translucency.

# Non-negotiable visual invariants

- White document space or previews dominate the viewport.
- Large areas of intentional whitespace separate content and controls.
- Saturated blue is reserved for selection and decisive creation actions.
- Navigation chrome is minimal, often circular or floating.
- Home combines document preview rails with quieter vertical sections.
- Editor toolbars float near the bottom without looking like heavy cards.
- Document typography remains readable and editorial, distinct from compact UI labels.

# Color and surfaces

Use white for documents and primary cards, very light gray for the app canvas, and pale gray for secondary controls. Black carries document content and titles; gray carries metadata. Saturated blue marks primary actions, selected tabs, and text selection. Translucent or frosted surfaces are limited to floating controls. Destructive red stays semantic.

# Typography

Use SF Pro for chrome and an iOS-safe editorial reading face such as New York for document body where appropriate. Titles are compact and bold; document text has more line height. UI labels remain smaller than editable content. Dynamic Type expands menus and metadata independently from the document's authored text scale.

# Screen composition

Onboarding uses centered cards and blue actions with generous whitespace. Home places a search/header region above a horizontal document-preview rail and vertical sections. Editor screens give most of the viewport to a blank or populated page, with compact top controls and a floating bottom toolbar above the keyboard. Detail or AI sheets rise over the document while preserving its context.

# Navigation appearance

Top navigation uses sparse back, search, overflow, and circular utility buttons. Home selection is blue within a light tab treatment; creation may use a floating circular plus. Bottom editor controls are translucent pills or compact bars. Sheets are white and broadly rounded. Visual styling does not imply the source document structure or routes.

# Components

Primary actions use saturated blue fill and white semibold labels. Secondary controls are white or frosted with black line icons. Document cards use medium rounding, subtle shadow, and a visible page thumbnail. Search is a light filled field. Tool chips and formatting controls are compact and fixed-height. Selected text uses blue highlight; disabled creation controls reduce contrast without moving.

# Imagery and icons

Document thumbnails and UI previews are the primary imagery. Small line icons and the colorful assistant ring are functional or branded assets, not a reusable illustration language. Do not replace real document previews with decorative art; preserve legible page-like proportions and content density.

# States

Observed states include onboarding, populated home, empty starred or tag sections, active document editing, text selection, keyboard-visible composition, create composer states, document details, and AI assistant sheet. Whitespace, document dominance, and blue selection remain consistent.

# iOS adaptation

Keep document and editor surfaces safe-area aware, move floating controls above the keyboard, and maintain 44-point hit regions around small circular icons. Preview rails may scroll horizontally. At large Dynamic Type, expand chrome and metadata without changing the authored document zoom unexpectedly. VoiceOver follows title, document preview, metadata, then actions. Native text behavior may remain native while chrome is explicitly styled.

# Anti-generic checklist

- No card-heavy dashboard that reduces the document canvas.
- No default tab bar detached from floating creation controls.
- No blue applied to all text and icons.
- No heavy borders around the editor page.
- No generic body font hierarchy for both document and chrome.
- No decorative illustration replacing document previews.
- No oversized bottom toolbar obscuring the page.
</design-context>
