<design-context>
---
version: 1
platform: iOS
name: krisha.kz-design-analysis
description: "A bright, information-dense real-estate marketplace with a white canvas, pale gray grouped sections, black compact listing typography, brand-yellow trust and shortcut accents, blue utility actions, and green contact buttons. Property photography carries comparison while filters, forms, and account pages remain flat, sparse, and highly structured."
colors:
  brand-yellow: "#FFE25B"
  primary: "#2E8FEA"
  on-primary: "#FFFFFF"
  primary-focus: "#1D73C9"
  contact: "#59C936"
  contact-focus: "#45AC27"
  ink: "#171717"
  ink-muted: "#73777C"
  ink-subtle: "#A6ABB0"
  ink-tertiary: "#C4C8CC"
  canvas: "#FFFFFF"
  surface-1: "#F7F8FA"
  surface-2: "#F0F2F4"
  surface-3: "#E7EAEE"
  surface-4: "#D8DDE2"
  hairline: "#E5E7EA"
  hairline-strong: "#D1D5DA"
  inverse-canvas: "#171717"
  inverse-ink: "#FFFFFF"
  semantic-warning: "#FFCF33"
  semantic-danger: "#E23A3A"
  semantic-overlay: "#000000"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.16, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.24, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 20
  xxl: 24
  pill: 9999
  full: 9999
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 40
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-contact: {backgroundColor: "{colors.contact}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  button-contact-pressed: {backgroundColor: "{colors.contact-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [11, 16]}
  map-pill: {backgroundColor: "{colors.brand-yellow}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [10, 14]}
  listing-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12}
  service-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 8}
  trust-badge: {backgroundColor: "{colors.brand-yellow}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [3, 6]}
  segmented-control: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 4}
  input: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: [10, 12]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [7, 8]}
---

# Overview

krisha.kz is a compact property-listing interface that keeps comparison data close to the photograph. The reference uses a bright white base, mist-gray grouping, black price hierarchy, yellow trust labels and brand objects, blue utility controls, and green seller-contact actions. The system should feel practical and catalog-like, not editorial or lifestyle-led.

# Non-negotiable visual invariants

- Preserve the white canvas with pale gray grouped bands between listing, form, and detail sections.
- Make price the strongest repeated text element in listing cards, followed by property facts and address.
- Use yellow for brand, verification, trusted-agent badges, shortcut art, and map-adjacent emphasis.
- Reserve blue for utility actions such as filters, posting, links, selected form controls, and account actions.
- Reserve green for direct contact CTAs; do not use it as a general success decoration elsewhere.
- Use real property photos in listings and detail galleries, with visible image counts when present.
- Keep forms flat and row-based with thin separators, small chevrons, and rectangular inputs.

# Color and surfaces

White is the dominant surface. Pale gray bands separate content groups on feeds, detail pages, filters, and account pages; the gray should be light enough to read as structure rather than a card wall.

Brand yellow is bright and clean. It appears on launch, shortcut art, verification chips, trusted-agent badges, and the map pill. Yellow should not become a full app background after launch or a default button color.

Blue is utilitarian: filters, reset links, selected room chips, posting buttons, account links, and the circular center tab. Green is narrower and stronger: full-width contact buttons only. Red is limited to hot-listing marks, notification dots, exit text, and error emphasis.

Text is near-black for prices, section titles, and primary labels. Muted grays handle dates, views, addresses, subtitles, placeholder values, and inactive tab labels. Borders stay hairline-light.

# Typography

Use SF Pro Display for the krisha.kz wordmark-like lockup, screen titles, and larger section headings. Use SF Pro Text for listing details, form controls, navigation labels, and dense account rows.

- display-lg: 30 points, 700, for launch and standalone brand lockups.
- headline: 20 points, 700, for screen titles and major section labels.
- card-title: 16 points, 600, for listing prices and important property names.
- subhead: 15 points, 600, for form group labels and selected controls.
- body: 13 points, 400, for property facts, addresses, row labels, and descriptions.
- caption: 10 points, 400, for recency, views, badges, and bottom labels.

Price text should remain visually dominant without oversized marketing treatment. Listing facts should read as compact prose with bullets or separators only when the source composition supports them.

At larger Dynamic Type sizes, allow address and metadata to wrap after preserving price, photo, badge, and primary action hierarchy.

# Screen composition

Use a 4 point base grid, 12 point standard row spacing, 16 point screen gutters, and compact section breaks around 20 to 28 points. The reference favors data density and quick scanning over large blank hero areas.

Home composition uses rounded shortcut tiles, compact service icons, a yellow promotional strip, then listing cards. Listing feeds are vertical: price and facts above or beside a thumbnail, address and badges below, with pale gray separators between groups.

Detail composition starts with an edge-to-edge property photo gallery, then price, facts, verification block, and stacked information sections. Sticky green contact actions sit at the bottom when needed and should not cover section content.

Filter and publishing screens are mostly white forms: segmented controls, chip rows, rectangular text fields, checkboxes, and full-width blue progression buttons. Avoid decorative panels around every field.

Map composition is dense and functional: keep the map full-screen behind circular price/time markers, compact zoom controls, and yellow or blue floating pills.

# Navigation appearance

The bottom bar is a thin white strip with small labels. The center post action is a blue filled circle with a plus; active non-center destinations use black, while inactive destinations use gray outline icons. Keep notification dots small and red.

Top bars are minimal, usually a back or close control, a compact title, and a blue utility link on the trailing side. Filter and detail icons should look light and tappable, not like heavy toolbar buttons.

# Components

Primary utility buttons are blue rounded rectangles. Contact buttons are green rounded rectangles with white text. Secondary actions are white or very pale with blue text and a light border.

Segmented controls use a pale gray container with a white selected segment. Room counts and option chips use small rounded rectangles; selected chips use a pale blue fill with blue or black text.

Listing cards combine a rectangular photo, bold price, compact property facts, address, recency, view count, and badges. Trust badges are yellow rectangles with small icons or text, placed near the seller or listing metadata.

Inputs are flat rectangular fields with thin gray outlines. Row selectors use black labels, muted trailing values, and chevrons. Checkboxes are small and square, with selection indicated by tint rather than oversized marks.

Account pages use sparse rows, blue action buttons, thin separators, and a small settings gear. Paid or promoted account surfaces may use a purple-blue strip only when evidence calls for that specific banner, not as a general theme.

# Imagery and icons

Property imagery is mandatory on listing and detail surfaces. Use aspect-fill crops that preserve rooms, building exteriors, and gallery context; do not crop so tightly that the listing cannot be assessed. Gallery detail screens may show the current photo count over the image.

Home shortcut art is object-based and brand-yellow heavy: house keys, sofa, crane, calculator, megaphone, question mark, and calendar-like promo elements. Fresh evidence shows these as home shortcuts and promo art, not as a repeated authored illustration system across states, so treat them as specific raster assets for those surfaces rather than a general illustration language.

Icons are thin, functional, and often outline-based. Use location pins, hearts, filters, sliders, plus, chat, account, settings, and map controls in the observed blue, black, gray, yellow, or red roles. Do not replace listing badges or brand art with generic SF Symbols when the source uses a custom mark.

# States

Selected room chips and chosen form values use pale blue fills or blue emphasis. Active center navigation is a blue filled circle; active ordinary navigation is black.

Trust and verification states use yellow badges. Hot or urgent listing marks use small red flame-like indicators or red dots; they should stay secondary to price and photo.

Pressed blue buttons deepen toward primary-focus. Pressed green buttons deepen toward contact-focus. Disabled buttons become pale gray with muted text, matching the flat form language.

System permission prompts remain native iOS overlays. App-owned overlays dim the underlying white interface and should return to the same compact composition after dismissal.

# iOS adaptation

Respect iPhone safe areas on launch, listing, map, form, and detail screens. The bottom tab bar and sticky contact or progression buttons must clear the home indicator.

Keep all rows, chips, map controls, listing cards, gallery buttons, favorite buttons, and bottom-nav items at least 44 points tappable even when the visible icon is small.

Listing feeds stay single-column. Two-column home or related-card areas may scroll horizontally or compress carefully, but price and photo cannot be demoted below decorative content.

Long forms scroll vertically while keeping the blue progression action available near the bottom. The keyboard should not obscure the active field or submit action.

Support Dynamic Type by wrapping addresses, labels, and explanatory text; avoid truncating prices, chosen values, required markers, and primary CTAs.

# Anti-generic checklist

- Do not turn the brand-yellow identity into a full-screen theme outside launch or specific yellow components.
- Do not replace property photography with generic real-estate icons or decorative cards.
- Do not use default iOS blue for every interactive element; green contact and yellow trust roles must remain distinct.
- Do not convert flat forms into heavy grouped cards with shadows.
- Do not make listing rows airy marketing cards; preserve compact price, facts, photo, address, and badge density.
- Do not invent an app-wide illustration system from the home shortcut art.
- Do not remove the blue filled center post tab or small gray tab labels when rendering bottom chrome.

</design-context>
