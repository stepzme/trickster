<design-context>
---
version: 1
platform: iOS
name: gg-design-analysis
description: "A restrained map-first mobility interface with pale cartography, large white rounded bottom sheets, compact system typography, near-black primary actions, sparse blue selection, floating map controls, and small functional vehicle imagery."
colors:
  canvas: "#F3F4F2"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F4F5F5"
  accent-primary: "#111214"
  accent-secondary: "#2F7EF7"
  text-primary: "#15171A"
  text-secondary: "#656A70"
  divider: "#E2E5E7"
  destructive: "#FF3B30"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 35}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 16
  sheet: 24
  pill: 999
components:
  map-sheet: {fill: "surface-primary", radiusTop: 24, handle: "centered", action: "fixed bottom"}
  primary-action: {fill: "accent-primary", text: "white semibold", radius: 12, height: 52}
  location-pill: {fill: "surface-primary", radius: 999, icon: "compact leading"}
  service-row: {fill: "surface-primary", leading: "vehicle thumbnail", state: "blue outline or check"}
  menu-tile: {fill: "surface-secondary", radius: 16, icon: "blue utility glyph"}
---

# Overview

gg is a map-first mobility interface in which pale cartography and route context remain visible behind large white bottom sheets. Near-black primary actions, compact system typography, sparse blue links and selections, floating map controls, and small functional vehicle imagery keep decision surfaces calm and direct. Non-map account areas use simple white lists and pale utility tiles rather than a separate decorative system.

# Non-negotiable visual invariants

- Pale map imagery remains the dominant field on location screens and is not reduced to a small decorative preview.
- One large white sheet with rounded top corners contains the current decision; unrelated floating card stacks are avoided.
- Primary actions are near-black with white labels, while blue is limited to secondary links, focus, checks, and selection outlines.
- Map controls use compact white circular or rounded containers with dark line icons and restrained shadow.
- Location, service, price, and status information uses compact system type with bold headings and lighter gray metadata.
- Bottom actions remain fixed above the home indicator while sheet content scrolls independently when necessary.
- Vehicle thumbnails, maps, avatars, and campaign media stay functional and bounded; isolated assets do not become an illustration system.
- Full-page list and menu screens preserve flat white surfaces, pale grouped tiles, and native navigation chrome.

# Color and surfaces

Pale map fields combine light gray roads, muted green land, pale blue water, and occasional colored traffic lines. White is the principal overlay and page surface; secondary controls and grouped cards use very light gray around `#F4F5F5`. Thin cool-gray dividers and minimal shadow separate rows and sheets.

Near-black around `#111214` owns primary actions and strong markers. System-like blue around `#2F7EF7` marks optional links, selected outlines, checks, and focused information. Purple may appear in bounded price or energy markers; green and red remain semantic. Broad blue backgrounds, colorful gradients, or default-blue primary buttons would change the observed hierarchy.

# Typography

Use SF Pro Display and SF Pro Text. Major sheet or state headings are approximately 20-24 points bold, centered navigation titles 15-17 points semibold, row and button labels 14-16 points, and secondary metadata 12-13 points gray. Prices and primary values use weight and alignment rather than oversized display numerals.

Text is mostly left-aligned inside sheets and lists, with centered compact navigation titles. Repeated service facts and prices align for comparison. Dynamic Type should expand rows and allow addresses or support text to wrap while keeping current location, principal value, and primary action visually dominant.

# Screen composition

The main archetype uses a full-height map with a floating location/search pill near the top, small map controls at the edges, and a white rounded sheet rising from the bottom. The sheet uses 12-16 point side padding, a centered grabber, compact rows, and a fixed bottom action above the home indicator. Map context remains visible above the sheet until more space is required.

Search and selection archetypes expand the sheet into a keyboard-aware list. Service comparison uses stacked rows with small vehicle thumbnails, aligned metadata, and blue selected states over the map. Rating and feedback use a focused white sheet with centered stars or compact chips. Menu and account archetypes move to full-screen white surfaces with a grid of large pale square tiles or simple flat lists.

Sparse login and profile forms use outlined or pale fields with substantial white space. Support and payment web surfaces retain their own embedded content but remain framed by compact native top chrome.

# Navigation appearance

No persistent tab bar was observed. Map screens use contextual floating controls, a compact location pill, close or back buttons, and a single bottom sheet. Native full pages use centered titles, standard back chevrons or close icons, and occasional compact right-side actions.

Sheets have large rounded top corners, a centered grabber, and a fixed action region. System alerts and action sheets retain native geometry. The adapted product's destinations and sequence must come from approved Research and Planning rather than the sampled mobility flows.

# Components

Primary actions are approximately 50-54 points high, near-black, white-labeled, and rounded about 12 points. Secondary actions use white or pale-gray fills, while blue text is reserved for optional actions. Disabled actions become pale gray without changing their geometry.

Location pills are compact white capsules with a leading icon and restrained shadow. Service rows pair a contained vehicle thumbnail with bold label, gray supporting facts, and aligned price; selected state uses a blue stroke or check. Menu tiles are large pale squares with simple blue utility glyphs and short labels.

Form fields are outlined or softly filled and preserve native keyboard spacing. Selection rows use blue checks; toggles use native on/off color; rating uses evenly spaced stars; tip choices use compact pills. Promo and code entry surfaces appear in rounded bottom sheets over a dimmed backdrop.

# Imagery and icons

Pale maps and route lines are the main imagery and must retain full-screen scale. Vehicle thumbnails, avatars, campaign banners, and embedded payment content support specific rows or surfaces. Keep vehicles contained and readable at small size, protect map labels from controls, and preserve the footprint of any required functional imagery while assets are pending.

Blue utility icons and line symbols are small, direct, and consistent with native iOS weights. A phone/map mockup, an empty-state bell, a campaign banner, and isolated service graphics do not establish a stable authored illustration language. Do not create recurring characters or decorative scenes from this evidence.

# States

Observed states include sparse login, native permission alert, map with compact or expanded sheet, keyboard search, disabled pale action, blue outlined selection, checked row, toggle on and off, rating stars, tip chips, selected payment, map-mode sheet, promo-code sheet with dim backdrop, native image-source action sheet, support overlay, and embedded payment form. Pale maps, white surfaces, black commitment actions, and sparse blue selection remain constant.

# iOS adaptation

Extend the map behind the status region while keeping pills, controls, sheet handles, and bottom actions inside safe areas. Use native sheet detents or equivalent compact and expanded geometry, internal scrolling for sheet lists, keyboard avoidance for search and forms, and bottom safe-area insets for primary actions.

Map controls, service rows, chips, stars, navigation actions, and menu tiles require at least 44-point hit regions. VoiceOver should announce map context and current location, floating controls, sheet content, then the primary action. On compact widths, wrap addresses and secondary facts or increase row height before shrinking thumbnails and targets. Dynamic Type must not cause the fixed CTA to cover sheet content. Preserve the light appearance and map contrast unless the approved product explicitly defines another mode.

# Anti-generic checklist

- Do not replace the full-screen pale map with a generic gray page or small map card.
- Do not stack several elevated cards where one dominant rounded sheet is observed.
- Do not turn every action blue; near-black remains the commitment color.
- Do not add a tab bar or copy product destinations from the source.
- Do not omit vehicle, map, avatar, or functional media where it carries identification.
- Do not use default `Form` styling for sparse fields, service rows, or menu tiles.
- Do not apply one radius or shadow to pills, sheets, tiles, fields, and floating controls.
- Do not retain or invent an illustration package from isolated campaign and empty-state assets.

</design-context>
