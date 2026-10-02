<design-context>
---
version: 1
platform: iOS
name: yandex-browser-design-analysis
description: "A light browser shell built from pale blush-to-white fields, floating white search and tool surfaces, compact monochrome chrome, black pill actions, pink AI accents, and dense page content anchored by bottom controls."
colors:
  canvas: "#F8F4F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F0EFF2"
  accent-primary: "#F04479"
  accent-secondary: "#FFD9E8"
  text-primary: "#171719"
  text-secondary: "#717178"
  divider: "#E3E2E6"
  destructive: "#D94C55"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 17}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "near-black", shape: "full-width pill", text: "white semibold"}
  secondary-action: {fill: "white", shape: "pill or circle", text: "near-black"}
  primary-card: {fill: "white", shape: "rounded utility surface", elevation: "subtle"}
  navigation: {fill: "white floating bottom chrome", active: "black or pink contextual accent", icons: "compact monochrome line"}
---

# Overview

Yandex Browser places conventional browser utility inside a softer AI-forward shell. Onboarding and the home surface use pale blush or lilac fields, bold centered headings, pink glow, and floating white controls. Search, web pages, tabs, menus, camera, and settings become denser and more neutral, with compact monochrome icons and bottom-owned browser chrome. The contrast between open branded entry screens and utilitarian content views is central.

# Non-negotiable visual invariants

- Keep the principal search and browser chrome near the bottom rather than converting the interface to a top-heavy navigation bar.
- Use pale blush/lilac-to-white as the large home and onboarding field, with white floating utility surfaces.
- Reserve pink/coral emphasis for assistant or AI-related visuals and focused accents; primary confirmation pills may be near black.
- Browser controls use a coherent compact monochrome line-icon family with at least 44-point targets.
- Web content remains visually source-controlled and denser than the surrounding browser shell.
- Tab overview uses recognizable page thumbnails rather than generic document icons.
- Menus and search entry appear as large rounded bottom sheets with clear grouping and native keyboard treatment.

# Color and surfaces

The branded shell uses a very pale blush or lavender wash that can fade toward white. White search fields, shortcut tiles, toolbar elements, and sheets float above it with restrained shadow or translucency. Near black carries primary controls and labels; secondary copy and URLs are grey. Pink-to-coral is a narrow assistant accent, sometimes expressed as glow, while blue may appear inside web content but is not the shell tint.

Functional modes can depart sharply: the smart-camera capture surface is near black, and third-party pages keep their own colors. Dividers are fine and quiet inside lists and menus. Default iOS blue tint across the shell, strongly grey grouped backgrounds, or pink applied to every surface would break the observed hierarchy.

# Typography

Onboarding uses large bold centered headings with short supporting lines. The working browser uses compact sans text for search, shortcuts, URLs, menu labels, settings, and toolbars. Web pages preserve their own typography and must not be normalized into the shell. Numerals such as tab counts remain compact and highly legible.

Use SF Pro Display for large branded statements and SF Pro Text for chrome. Map intro text to large title/title, section and sheet headings to headline, controls to callout or subheadline, and URL or toolbar metadata to caption. Dynamic Type may expand sheets and settings rows; it must not compress essential toolbar controls or obscure the current page identity.

# Screen composition

Branded intro screens fill the viewport with a pale field, center one visual or device fragment in the middle, and anchor a dark pill action near the bottom safe area. The home surface leaves breathing room above a compact tile grid and a rounded search/chrome rail near the bottom. Search entry rises as a bottom sheet above the native keyboard. Web pages devote nearly the whole viewport to page content and keep only compact browser chrome at the bottom.

Other observed archetypes include a two-column tab-thumbnail overview; a grouped icon-grid menu sheet; a dark camera capture mode with sparse light controls; and single-column grouped settings with icons, chevrons, and switches. Use roughly 12–16-point outer insets for shell-owned surfaces and tighter 8–12-point gaps inside tool grids. Long menus and settings scroll within safe areas.

# Navigation appearance

Browser navigation is bottom-first: a white floating toolbar or search rail contains compact line icons, a tab-count badge, and contextual assistant emphasis. Tab overview presents rounded page thumbnails with compact close controls. Menus and search use draggable white bottom sheets with large top radii and grab handles. Settings use restrained iOS-style grouped rows. This defines appearance only, not destinations or browsing behavior.

# Components

Primary onboarding confirmation is a wide near-black pill with white semibold text. The main search control is a full-width white pill with search affordance and contextual camera/assistant entry, plus subtle shadow. Shortcut tiles are compact white rounded blocks with a centered small icon and caption. Tab cards contain a full-page thumbnail, favicon/title strip, and small close control.

Menu sheets combine icon-led actions into clear groups separated by spacing or hairlines. Search/category selectors use compact selected states without oversized decoration. Settings rows pair a leading icon with title, optional detail, and chevron or native switch. Disabled or inactive controls become neutral grey; pink remains contextual rather than universal.

# Imagery and icons

Onboarding uses centered brand marks, pink glow, blurred device mockups, and floating assistant fragments with generous negative space. These are compositionally important on the screens where they appear and cannot simply be removed; temporary raster assets must preserve their crop, scale, and visual mass. Home and product screens instead rely on compact shortcut glyphs, page thumbnails, photos or imagery supplied by web content, and restrained utility symbols.

There is no stable independent illustration system across the sampled app: branded onboarding art does not recur as a unified authored language throughout product screens. Page thumbnails keep recognizable aspect and crop; do not replace them with generic symbols.

# States

Observed states include onboarding progress, notification/tracking/microphone permission prompts over blurred context, focused search with native keyboard, selected search categories, page overlays, dark camera capture, populated tab overview, opened menu sheets, and settings toggles. Across these states, the shell retains rounded white utility surfaces, compact monochrome chrome, and contextual pink emphasis.

# iOS adaptation

Extend pale or dark mode-specific fields through safe areas while keeping shell-owned content within compact-width insets. Reserve the lower safe area for browser chrome and ensure scrollable web content, sheets, or settings do not end behind it. Use native keyboards and permission prompts, returning to the same blurred or underlying visual context. Bottom sheets may grow or scroll on compact heights.

Toolbar icons, shortcut tiles, thumbnail close controls, and settings rows require at least 44-point targets. VoiceOver order follows visible shell structure before page content where appropriate. Dynamic Type expands labels and rows without removing essential controls. Preserve the observed light shell and specific dark camera mode rather than inventing a global dark treatment.

# Anti-generic checklist

- Do not move the defining browser/search chrome into a generic top navigation bar.
- Do not use default blue tint, unstyled `TabView`, or unrelated SF Symbols.
- Do not replace page thumbnails with generic cards or document icons.
- Do not turn every content area into the same white rounded card.
- Do not tint all functional surfaces pink or treat AI accent as the whole palette.
- Do not omit compositionally important onboarding imagery while assets are pending.
- Do not normalize third-party web typography into the browser shell.
- Do not add explanatory copy that repeats obvious search, page, tab, or permission context.

</design-context>
