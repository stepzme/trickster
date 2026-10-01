<design-context>
---
version: 1
platform: iOS
name: yandex-pay-design-analysis
description: "A white-first financial interface that combines dense account dashboards, soft iridescent product surfaces, black commitment actions, compact four-tab navigation, and selectively oversized branded imagery."
colors:
  canvas: "#FFFFFF"
  canvas-dark: "#101010"
  surface-primary: "#F3F3F5"
  surface-secondary: "#E9EBF2"
  accent-primary: "#111111"
  accent-plus: "#E94C9A"
  accent-blue: "#2F8CFF"
  accent-green: "#55C779"
  text-primary: "#111111"
  text-secondary: "#74747A"
  divider: "#E5E5E8"
  destructive: "#E5484D"
typography:
  promo-hero: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 800, lineHeight: 42}
  amount: {fontFamily: "SF Pro Display", fontSize: 38, fontWeight: 500, lineHeight: 42}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 500, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 16
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {height: 56, fill: "#111111", foreground: "#FFFFFF", radius: 16}
  account-card: {minHeight: 152, radius: 20, treatment: "soft-iridescent-gradient"}
  information-strip: {minHeight: 52, fill: "#F3F3F5", radius: 16}
  bottom-navigation: {height: 64, destinations: 4, selected: "#111111", unselected: "#8A8A90"}
---

# Overview

The operational product is a white, information-rich financial dashboard, not a generic stack of elevated cards. Large account surfaces and balances establish the top of each hierarchy; compact utilities, promotional strips, two-column modules, and transaction lists follow beneath them. Color is concentrated in pale iridescent gradients and small branded objects while text and commitment actions remain almost black. Marketing, onboarding, and game screens may become far more expressive, but ordinary money management stays restrained and legible.

# Non-negotiable visual invariants

- Operational screens use a flat white canvas with pale filled modules; visible drop shadows are exceptional rather than the default separation method.
- The main account surface is a wide, shallow iridescent color field near the top, followed by circular quick actions and smaller utility modules.
- Final commitment actions are dark, wide pills or rounded rectangles; the interface does not use default iOS blue as its primary action color.
- The persistent navigation has exactly four compact destinations, while payment is exposed as a separate floating action above it on the main screen.
- Branded color appears as soft yellow-pink-blue or blue-violet washes and concentrated object accents, never as a uniform corporate tint applied to every control.
- Product imagery is sparse but structurally important: large campaign art, account objects, or miniature 3D symbols occupy reserved space and are not replaced by arbitrary SF Symbols.
- Promotional and game surfaces may fill the viewport with color, but financial values and primary decisions remain on calm, high-contrast surfaces.

# Color and surfaces

White is both the canvas and the main reading surface. Modules separate through very light neutral or cool-gray fills, not through outlines or shadows. The signature account surface is a low-contrast, multi-stop wash moving through pale yellow, pink, lavender, and blue; Split-related surfaces add a brighter lime-to-green band. Pale lilac and sky-blue fields support savings and rewards without becoming the global background.

Black is the stable anchor for headings, amounts, icons, and primary actions. Secondary copy uses neutral gray. Pink-purple marks Plus rewards, blue marks links and some rewards, and green marks positive amounts or successful states. Destructive actions remain red and local to the affected row or confirmation. Default system blue buttons, saturated blue navigation chrome, and opaque gray card stacks would visibly break the reference.

Dark appearance inverts the canvas to near-black and the modules to charcoal while preserving the colored account gradients and branded accents. It is an authored theme, not a simple automatic color inversion.

# Typography

Routine screens use a neutral iOS-safe sans serif with strong numeric clarity. Amounts are the largest operational text and often use medium weight rather than heavy bold. Page titles and section labels are left-aligned and compact; transaction rows rely on regular body text with small secondary metadata. Buttons use medium or semibold labels without uppercase.

Scale contrast increases sharply only for campaign or onboarding headlines, where a heavy display face may occupy several lines. Use SF Pro Display as the substitute and preserve the dense wrapping and weight, but do not carry that display treatment into transaction lists or settings. Dynamic Type should expand body and action text first; amounts may scale within a bounded range, and horizontal account/card modules should reflow or scroll rather than shrink labels below legibility.

# Screen composition

The common frame uses 16-point horizontal insets, a compact status/navigation area, and full-width modules separated by 16–24 points. Scrolling content reaches behind a persistent four-destination bottom bar. The top third carries identity, balance, account surface, scanner, or campaign hero; the middle carries actions and primary content; the bottom carries lists, recommendations, or secondary modules.

## Dashboard

A small wordmark and account controls sit above a stacked account summary. A narrow recommendation strip follows, then a row of three quick utilities, paired feature modules, and sectioned content. The separate payment action floats immediately above the bottom navigation and may overlap the scrolling region.

## Account detail

A centered product title and back/help controls precede a wide account or card surface. Three evenly spaced quick actions sit below it. Promotional strips and paired benefit modules follow, while settings and transaction details continue in the scroll.

## Payment and scanner

The upper region is a dark camera field with a centered scan target and compact alternatives. A white sheet rises from the bottom and contains transfer cards plus a grid of payment categories. A merchant confirmation replaces the scanner with a calm light field, large centered amount, selected funding source, and a bottom commitment action.

## Savings and rewards

A pale blue-violet wash anchors the title and main amount. Large white grouped sections hold account tiles or earning options. Rewards screens combine segmented controls, compact explanatory modules, and campaign art; the hierarchy remains section-based rather than becoming a uniform feed.

## Store and campaign browsing

The store tab starts with a large campaign hero, a short row of task shortcuts, then horizontal product cards and tall editorial recommendations. Image-led cards may be nearly edge-to-edge inside a rounded frame, with the action attached at the bottom.

## History and profile

History prioritizes filters, summary values, date grouping, and dense transaction rows. Profile uses identity at the top, two short status modules, then a plain list of destinations. These screens deliberately reduce decorative imagery.

## Promotional game

The game is a separate full-screen mode: saturated background, centered interactive board, minimal chrome, and an overlaid reward/result panel. It must not redefine the composition of ordinary finance screens.

# Navigation appearance

The primary tab bar is a flat white or near-black bottom region with four line-style icons and short labels. The selected destination uses the primary text color; unselected destinations recede to gray. It has no oversized floating capsule background and no fifth central tab.

Secondary screens use a compact top row with a back chevron, centered wordmark or short title, and an optional help or close control. Full-screen payments and games use a close button. Bottom sheets have large upper corners and a solid surface; system-owned biometric sheets remain visually system-native.

# Components

## Primary action

A near-black, full-width control around 56 points high with white medium-weight text and 16-point or pill rounding. Floating payment uses a shorter pill with an icon and label. Pressed state may lighten slightly; disabled state uses a pale neutral fill and low-contrast label rather than opacity over black.

## Account surface

A wide rounded module with a soft multi-color gradient, minimal chrome, product label at the upper left, and balance at the upper right. Related products can stack vertically inside one shared silhouette. This is a large color mass, not a white card with a small colored icon.

## Quick action

A circular pale control with a simple black symbol sits above a short centered label. Groups usually contain two or three actions with equal spacing. Symbols must be semantically consistent and optically matched.

## Information strip

A full-width pale module with one or two lines of left-aligned text, optional small object art at the trailing edge, and an optional disclosure or dismiss control. It does not use a border or shadow.

## Feature tile

Two modules share a row with equal width. A short title and value align left; a light gradient or compact object may occupy the remaining area. Tiles may show real empty or error content and must not be filled with invented metrics.

## Transaction row

A leading merchant/service mark, primary label and secondary description, then a trailing signed amount and funding source. Date groups are separated by headings and whitespace, not boxed into separate cards.

## Filter chip and segmented control

Filters are compact rounded capsules with subtle borders or fills and a chevron where needed. Segmented controls use a pale track and a white selected segment; they remain secondary to content.

# Imagery and icons

The product mixes three image roles: miniature toy-like 3D objects for benefits and product categories, larger polished 3D compositions for onboarding and campaigns, and editorial/product photography for stores. Small custom category icons use colored rounded backplates or self-contained objects; they should not become a monochrome SF Symbols grid.

Imagery has reserved composition space. A trailing object can occupy roughly one third of a banner, onboarding art can dominate the middle half of the screen, and store photography can fill most of a card. During implementation, temporary art must preserve that footprint, crop, and color mass; omitting it would produce a false visual approval.

# States

Observed states include launch, passcode entry and repetition, biometric authentication, populated and error account modules, QR scanning, merchant review, successful payment, collapsed and expanded savings groups, selected reward segments, transaction filtering, and authored light/dark themes. State changes preserve the same geometry and hierarchy whenever possible: success adds a check or positive color, errors remain inside the affected module, and authentication may hand off to a native system sheet without restyling it as app content.

Selection uses black text or a white selected segment rather than a global accent tint. Dark appearance retains gradients and positive/negative semantic colors while moving neutral surfaces to layered charcoals.

# iOS adaptation

Use a `ScrollView` or `List` only where its default styling is fully removed; modules should be custom SwiftUI containers with explicit spacing and fills. Keep status and navigation controls inside safe areas, but allow campaign backgrounds, scanner content, and game fields to extend edge-to-edge. Reserve the bottom safe area for the tab bar and ensure the floating payment action never covers the last scroll item.

Present app-owned tasks as custom sheets or full-screen covers according to the observed hierarchy, then yield to native Face ID and permission UI when the system takes control. Keep controls at least 44 points, expose amounts and signed transaction values as coherent VoiceOver phrases, and order accessibility from page identity through primary value, actions, then supporting content. On narrower phones, preserve full-width color masses, allow horizontal recommendation rails to scroll, and stack paired modules only when Dynamic Type makes two columns unreadable.

# Anti-generic checklist

- Do not rebuild the dashboard as repeated white `Form` sections or a uniform stack of elevated cards.
- Do not replace the iridescent account surface with a plain blue rectangle or a small gradient icon.
- Do not use default blue tint for primary buttons, selected tabs, links, and every interactive element.
- Do not turn the floating payment action into a fifth tab or a generic centered plus button.
- Do not substitute all benefit, payment-category, and campaign art with unrelated SF Symbols.
- Do not apply one corner radius and one component density to account surfaces, strips, tiles, sheets, and editorial cards.
</design-context>
