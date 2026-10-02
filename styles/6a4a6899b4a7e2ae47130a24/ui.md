<design-context>
---
version: 1
platform: iOS
name: eGov-Mobile-design-analysis
description: "A dense white civic-services interface with compact blue institutional icons, pale document cards, official-looking document imagery, bright informational banners, native iOS permission/authentication surfaces, and a restrained five-item bottom bar."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F5F7FA"
  accent-primary: "#2F63E6"
  accent-secondary: "#24B894"
  text-primary: "#191B20"
  text-secondary: "#6F7680"
  divider: "#E3E7EE"
  destructive: "#D84E57"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  title: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 28}
  section: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 700, lineHeight: 22}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 600, lineHeight: 17}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 14}
spacing:
  screen-horizontal: 16
  section-gap: 20
  card-padding: 12
  control-gap: 10
rounded:
  control: 10
  card: 14
  sheet: 24
  pill: 999
components:
  primary-action: {backgroundColor: "#2F63E6", textColor: "#FFFFFF", height: 48, cornerRadius: 10}
  secondary-action: {backgroundColor: "#EEF4FF", textColor: "#2F63E6", height: 48, cornerRadius: 10}
  primary-card: {backgroundColor: "#FFFFFF", cornerRadius: 14, borderColor: "#E3E7EE"}
  navigation: {backgroundColor: "#FFFFFF", selectedColor: "#2F63E6", unselectedColor: "#9AA1AB"}
---

# Overview

eGov Mobile is visually administrative, compact, and bright. Most screens use a white canvas, black text, and blue action/icons, then add recognition through official logos, document previews, service banners, and native iOS security overlays. The reference does not look like a generic SwiftUI `Form`: it is a custom civic dashboard with dense rows, small icon circles, carousel document cards, and hard-working status/detail screens.

# Non-negotiable visual invariants

- Keep the base canvas white or very light gray; do not introduce colored page backgrounds.
- Use saturated blue as the main institutional action color for service icons, CTAs, selected tabs, checkboxes, links, and document actions.
- Preserve the compact density: service rows, profile rows, and document metadata sit close together with thin dividers and small chevrons.
- Use official-looking document/card imagery where documents are represented; never replace those surfaces with plain text cards.
- Use real banner imagery or raster banner compositions for promotional/information panels; do not render them as empty gradient rectangles.
- Keep forms sparse and centered, with one dominant question or service title followed by simple rows, radio controls, and a full-width blue action.
- Native iOS permission, share, keyboard, Face ID, and passcode surfaces may appear, but app-owned content around them must stay visually aligned with the reference.

# Color and surfaces

The dominant mass is `#FFFFFF`; secondary zones use barely tinted gray or pale blue rather than heavy cards. Search fields and inactive controls use `#F2F4F7` to `#EEF3FB`. Blue is not default iOS blue: use a civic royal blue around `#2F63E6` for category circles, service icons, active tab tint, checkboxes, and submit buttons. Pale blue actions use `#EAF1FF` with blue labels.

Text is near black for titles and service names, medium gray for metadata and helper copy, and very light gray for disabled labels. Dividers are thin and low contrast. Success states use a soft green strip or icon; destructive actions use red text or pale red pills with restraint. Green appears as a secondary service accent in banners and AI entry points, not as the primary interaction system.

Avoid saturated multicolor chrome in navigation. Multicolor is reserved for partner logos, document artwork, and banners. A generic blue `Button` tint, grouped form gray, or thick bordered cards would visibly break the reference.

# Typography

Use SF Pro. The hierarchy is practical and compact:

- Top titles: 17 to 22 pt, semibold/bold, centered in detail views.
- Home and section titles: 17 to 18 pt, bold, left aligned.
- Service names and row labels: 14 to 15 pt, regular or semibold.
- Metadata, captions, timestamps, helper text: 10 to 13 pt, muted gray.
- Long service titles wrap naturally across two to three lines and keep a strong left edge.

Do not use marketing-scale hero type inside service screens. Forms rely on one readable centered prompt, then underlined fields or rows. Request/status screens use bold service titles and small labeled data blocks. With Dynamic Type, preserve row order and let metadata wrap; do not shrink text to fit dense tables.

# Screen composition

Home-like screens stack compact modules from top to bottom: a rounded search field, horizontal banners, a document strip or shortcuts, an icon grid, informational banners, then list rows. The outer gutter is typically 12 to 16 pt, with modules spanning nearly full width. The reference uses many shallow sections rather than a few large cards.

Document screens use a standard top bar with back and settings/share controls, a segmented control, a horizontal carousel of document cards occupying the upper middle, then a short list of related documents. The bottom area can hold a pale full-width action and a small help button.

Service catalog screens use a header with search and close/back controls, a grid of two-column category rows with blue circular icons, a row of colorful horizontal banners, pill filters, and service rows. Detail and request screens are much quieter: white background, one title, form rows or radio choices, then a full-width blue submit/sign action.

Profile screens are dense grouped lists. A small user header sits above long rows with blue circular icons and chevrons; lower settings/support rows switch to dark neutral circular icons. The bottom bar stays visible unless a modal or native share/authentication surface takes focus.

# Navigation appearance

Navigation bars are visually light: white background, small back chevron in a pale square or plain back control, centered title, and occasional close/settings/help icon. The bottom bar is white with five small icon-plus-label items; selected state is blue, inactive state is gray. It should look flatter and more utilitarian than a glassy custom tab bar.

Modal and native system surfaces are part of the observed style. Permission alerts dim or blur the app and keep iOS default rounded alert cards. Share sheets and Face ID/passcode overlays should remain native, while underlying app screens preserve the white civic layout.

# Components

Primary actions are full-width blue rounded rectangles, about 44 to 50 pt high, with centered white semibold text. Disabled actions become pale blue or pale gray with low-contrast labels. Secondary actions are pale blue fields with blue text.

Service rows use a blue circular icon at the left, a concise title, optional muted metadata, and a small gray chevron. Category rows in the services grid are compact white rows, usually two columns, with the blue icon circle and right chevron.

Document cards are visual assets, not simple cards: they show a soft, official ID/passport/license surface, rounded corners, and realistic document color fields. Keep the carousel partially peeking to the sides.

Inputs vary by context. Login fields use underlines and centered layout; search uses a rounded filled field; request forms use plain rows/radio controls. Radio buttons and checkboxes use blue when selected. Rating uses outline blue stars.

Banners are rectangular with small corner radii and embedded imagery or official artwork. Preserve their raster character, embedded copy areas, and color variety; they are the main source of visual energy on otherwise white administrative screens.

# Imagery and icons

The app relies on three image types: official/logo marks, document previews, and informational banners. Treat them as required visual content when those modules appear. Institution shortcuts use exact logo-like marks on white; service categories use simplified blue circular pictograms; documents use realistic pastel cards; banners can include photography, certificates, badges, or illustrated objects.

Do not substitute SF Symbols for branded logos, document graphics, or banner artwork. SF Symbols are acceptable only for generic app chrome when styled to match size, weight, and color.

# States

Observed states include notification permission prompts, language selection, login forms with keyboard, SMS confirmation, Digital ID permission, document sharing via native share sheet, Face ID/passcode signing, approved service status with green success strip, downloadable document rows, profile/settings lists, and AI chat messages.

Across states, white canvas, compact typography, blue actions, and thin separators remain stable. Loading/authentication should not become a branded full-screen animation unless fresh source screens prove it; observed authentication is mostly native iOS over the app.

# iOS adaptation

Respect the status bar and home indicator. Use scroll views for dense home, service, status, and profile screens; keep the bottom bar above the safe area with a white background. Keep all tappable rows, tabs, close/back controls, and CTAs at least 44 pt high even when visual content looks compact.

For keyboard screens, let the keyboard occupy the lower half and preserve the focused field and primary action above it. For permission and authentication transitions, allow native iOS alerts/sheets, but avoid restyling app-owned controls into default `Form` rows.

Support compact widths by preserving the module order and allowing row text to wrap. Dynamic Type may increase vertical height, but document carousel cards, service icon circles, and bottom navigation should keep their recognizable proportions.

# Anti-generic checklist

- Do not replace the civic blue system with default SwiftUI blue.
- Do not render the home as generic rounded cards on a gray grouped background.
- Do not remove official logos, document imagery, or banner artwork while waiting for final assets.
- Do not use icon-only service grids; labels are part of the visual density.
- Do not use unstyled `Form`, `List`, `TabView`, or default segmented controls where the reference uses custom compact rows and pale controls.
- Do not turn request/status screens into marketing pages.
- Do not use arbitrary SF Symbols for official documents, institutions, or service category pictograms.
- Do not apply one universal large corner radius; the reference mixes small controls, medium cards, native sheets, and pill filters.

</design-context>
