<design-context>
---
version: 1
platform: iOS
name: Globus-design-analysis
description: "A bright grocery interface combining white commerce surfaces, broad orange-and-yellow brand masses, red price emphasis, softly elevated rounded cards, persistent bottom navigation, and dense product photography."
colors:
  canvas: "#F6F6F4"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F0F0EC"
  accent-primary: "#F28A00"
  accent-secondary: "#F6C52F"
  text-primary: "#202020"
  text-secondary: "#77756F"
  divider: "#E2E1DD"
  destructive: "#D93636"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 400, lineHeight: 19}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 14
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "accent-primary", text: "white semibold", shape: "rounded rectangle"}
  secondary-action: {fill: "surface-primary", text: "accent-primary", shape: "outlined rounded rectangle"}
  primary-card: {fill: "surface-primary", imagery: "product photography", elevation: "soft shadow"}
  navigation: {fill: "surface-primary", selected: "accent-primary", unselected: "text-secondary"}
---

# Overview

Globus uses broad orange and yellow brand fields to frame a predominantly white, photography-led grocery experience. Product cards and transactional surfaces stay light and softly rounded, while orange concentrates attention on actions and selection and red distinguishes prices or discounts. The combination of warm brand masses, soft elevation, and dense grocery imagery makes it recognisable beyond a generic catalog.

# Non-negotiable visual invariants

- Orange or yellow occupies a substantial header, onboarding, or promotional region rather than appearing only as a small tint.
- Product photography and packshots remain the dominant content across catalog, search, detail, and cart screens.
- Primary actions and selected navigation use orange; red is reserved for price and discount emphasis.
- White cards use visible rounding and restrained soft shadow over a pale neutral canvas.
- Browsing stays dense through product grids, category tiles, and promotional bands.
- Transactional screens become calmer single-column compositions without losing the warm accent hierarchy.
- The bottom navigation remains white and persistent, with orange outline icons or labels marking selection.

# Color and surfaces

The base alternates between a pale warm-gray canvas and white cards, fields, sheets, and lists. Large orange and yellow regions establish the brand near the top of prominent screens. Orange is the app-owned action and selected-state color; red highlights current price, discounts, or destructive feedback. Green may appear inside fresh-food photography or limited brand decoration, not as a competing control color. Near-black carries titles and totals, muted gray carries unit and fulfillment data, and light warm-gray dividers separate dense rows. Default iOS blue would visibly contradict this hierarchy.

# Typography

Use SF Pro Display for 28–34 point bold page and promotional titles and SF Pro Text for commerce data. Section headings sit around 20 point bold; product names, actions, and prices use 14 point regular or semibold text; unit price, rating, and navigation labels use 11–13 point captions. Prices rely on weight and red color rather than oversized novelty type. At larger Dynamic Type sizes, allow card height and list rows to grow and move grids to one column before clipping names, prices, or fulfillment details.

# Screen composition

Onboarding and prominent home regions use a broad warm brand field with logo, phone or food imagery, and a clear orange action. Browsing screens begin below the safe area with a compact header or search field, then stack promotional banners, horizontal categories, and dense multi-column product cards. Side insets are about 16 points with tighter 8–12 point grid gaps. Product detail gives the upper region to a large packshot, followed by price and description. Cart and checkout use single-column white cards or rows with a persistent orange action above the bottom safe area. Address or form states retain thin inputs and ample white space.

# Navigation appearance

The bottom bar is white and edge-aligned, using compact outline icon-label pairs; orange marks the selected item and gray recedes inactive destinations. Detail and form surfaces use small back or close controls rather than a heavy second header. Category and fulfillment selection appears as compact chips, tabs, or rows with orange emphasis. App-owned sheets use strongly rounded top corners over a dimmed context.

# Components

Primary buttons are orange rounded rectangles with white semibold labels and at least 44-point height. Secondary actions use white fill, an orange outline or label, and the same compact geometry. Product cards combine a stable photo box, concise name, red or dark price, optional discount, and compact add or stepper action. Category tiles use photo-collage assets on pale rounded cards. Search is a pale or white rounded field with small functional icons. Form inputs use thin dividers or light borders and an orange focused or commitment state. Pressed actions deepen the orange; disabled controls recede to gray without losing their labels.

# Imagery and icons

Real product photography, food images, category photo collages, and promotional banners are compositionally essential and cannot be omitted. Contain packaged goods so their silhouettes and labels stay visible; use stronger crops for food scenes and promotions. The onboarding phone mockup, fruit photography, and abstract circles are mixed brand assets rather than a reusable illustration grammar. Icons are simple orange or gray outlines, small relative to imagery, and should not replace product or category media.

# States

Observed states include onboarding, address form with keyboard, populated home and catalog, search, product detail, cart, checkout, and menu/list content. Product add and quantity states retain the orange action hierarchy; price changes retain red emphasis. App-owned modal content uses white rounded surfaces over a subdued scrim. The warm brand colors, white cards, product media, and compact typography remain stable across these states.

# iOS adaptation

Respect the status and home-indicator safe areas, keep persistent actions above the lower inset, and use scroll containers for home, catalog, detail, cart, and checkout. Keep the active form field and action visible above the keyboard. Preserve native system prompts but style app-owned sheets and controls to the documented warm hierarchy. Back, search, add, stepper, tabs, and navigation require 44-point hit targets. VoiceOver order should announce product identity and price before secondary metadata and action. At compact widths or large Dynamic Type, reduce grid columns rather than shrinking photography or truncating commerce data. The observed reference is light-first; do not auto-invert it into an unreviewed dark mode.

# Anti-generic checklist

- Do not replace the warm orange/yellow masses with a tiny accent on an otherwise generic white app.
- Do not use default iOS blue for app-owned actions or selected navigation.
- Do not remove product photography, category collages, or promotional imagery.
- Do not ship an unstyled `TabView`, `Form`, `List`, or default search bar.
- Do not flatten title, product, price, and unit metadata into one type scale.
- Do not apply one radius and shadow to every card, control, and sheet.
- Do not invent a character or illustration system from the mixed onboarding assets.

</design-context>
