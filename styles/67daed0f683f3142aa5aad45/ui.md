<design-context>
---
version: 1
platform: iOS
name: Yandex-Travel-design-analysis
description: "A white, photo-led travel interface that combines large destination imagery, compact booking data, pale-gray controls, bright yellow commitment actions, green trust signals, and occasional violet-orange campaign graphics."

colors:
  primary: "#FFD429"
  on-primary: "#161616"
  primary-pressed: "#E6BC17"
  accent-violet: "#7656E8"
  accent-orange: "#FF7148"
  ink: "#171719"
  ink-muted: "#73767B"
  ink-subtle: "#A8ABB0"
  canvas: "#FFFFFF"
  surface-1: "#F5F5F6"
  surface-2: "#ECEDEF"
  hairline: "#E2E3E5"
  semantic-success: "#20B83E"
  semantic-warning: "#F2B829"
  semantic-danger: "#D84E58"
  semantic-overlay: "#00000066"

typography:
  campaign: { fontFamily: Yandex Sans, fontSize: 30, fontWeight: 800, lineHeight: 31, letterSpacing: -0.5 }
  page-title: { fontFamily: Yandex Sans, fontSize: 26, fontWeight: 700, lineHeight: 29, letterSpacing: -0.3 }
  section: { fontFamily: Yandex Sans, fontSize: 20, fontWeight: 650, lineHeight: 24, letterSpacing: 0 }
  card-title: { fontFamily: Yandex Sans, fontSize: 16, fontWeight: 600, lineHeight: 20, letterSpacing: 0 }
  body: { fontFamily: Yandex Sans, fontSize: 14, fontWeight: 400, lineHeight: 19, letterSpacing: 0 }
  body-sm: { fontFamily: Yandex Sans, fontSize: 12, fontWeight: 400, lineHeight: 16, letterSpacing: 0 }
  caption: { fontFamily: Yandex Sans, fontSize: 10, fontWeight: 400, lineHeight: 12, letterSpacing: 0 }
  price: { fontFamily: Yandex Sans, fontSize: 20, fontWeight: 500, lineHeight: 23, letterSpacing: 0 }
  button: { fontFamily: Yandex Sans, fontSize: 15, fontWeight: 600, lineHeight: 18, letterSpacing: 0 }

rounded: { xs: 6, sm: 10, md: 14, lg: 20, xl: 28, sheet: 24, pill: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", height: 48 }
  booking-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  filter-chip: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: [8, 12] }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", height: 48 }
  bottom-sheet: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", rounded: "{rounded.sheet}", padding: 16 }
---

# Overview

Yandex Travel uses two densities inside one white-first system. Discovery is spacious and image-led, with large destination photography and horizontal recommendations. Search, comparison, and booking are denser: pale-gray inputs, compact filters, explicit prices and conditions, and a persistent yellow next action. Branded violet appears mainly in identity and campaigns, not as the default control tint.

# Non-negotiable visual invariants

- White is the dominant reading surface; pale gray groups controls and data without turning every section into an elevated card.
- Destination and property photography carries discovery and comparison, often occupying the upper half of a card or the full-width hero.
- Bright yellow is reserved for the current commitment action: search, apply, choose, book, retry, or continue.
- Price, dates, guest count, payment timing, cancellation terms, and confirmation status remain close to the action they qualify.
- Ratings and favorable booking conditions use concentrated green labels; neutral metadata stays gray.
- Deep tasks use compact top navigation and focused sheets or pushed screens rather than a persistent copied tab structure.
- Illustration and campaign graphics are authored accents; operational hotel lists, forms, and trip detail remain utilitarian.

# Color and surfaces

### Brand & Accent

Use saturated yellow for the one primary action in the current context. Violet identifies brand objects and campaign content; orange may pair with violet in seasonal geometry. Neither violet nor orange replaces yellow in the booking funnel.

### Surface

The canvas and most content cards are white. Inputs, chips, summaries, and secondary actions use `#F5F5F6` or `#ECEDEF`. Adjacent white sections are separated by 8–12 point gray gutters or hairlines rather than large shadows. Bottom sheets are solid white with 24-point upper corners over a dimmed background.

### Text

Use near-black for destination, property, price, field values, and action labels. Secondary descriptions and dates use medium gray; tertiary legal and source text uses lighter gray. White text is limited to placement over darkened photography or campaign fields.

### Semantic

Green marks ratings, recommendations, included services, successful payment, and free cancellation. Yellow indicates action and selected radio controls. Red is local to destructive or failed states. System-owned permission dialogs keep native system colors.

# Typography

### Font Family

Use Yandex Sans where available. Its practical substitute is SF Pro Text/Display with similar width and numeric clarity. Use tabular figures for prices, dates, guest counts, and payment amounts.

### Hierarchy

Use 30 points for campaign statements, 26 points for major page or property titles, 20 points for sections and prices, 16 points for card and field titles, 14 points for body and booking detail, 12 points for metadata and conditions, and 10 points only for tertiary captions.

### Principles

Operational copy is sentence case, left aligned, and compact. Important numbers gain size or weight, not decorative color. A section heading typically precedes grouped content directly; avoid oversized marketing headings in booking forms and lists.

### Note on Font Substitutes

When Yandex Sans is unavailable, use SF Pro with the same point sizes and tune line wrapping rather than widening the layout. Do not use a rounded display face or decorative serif for routine travel data.

# Screen composition

### Spacing System

Use a 4-point base, 16-point horizontal screen insets, 12–16 point internal card padding, 8–12 point gaps between related controls, and 24–32 points between major discovery sections. Yellow bottom actions use 16-point side insets, about 48 points height, and safe-area padding.

### Grid & Container

Home uses a centered title row, a large rounded photographic hero, horizontal recommendation rails, and a floating search field near the bottom safe area. Search uses a compact mode switch above stacked destination, date, and guest fields. Results use a pinned summary and chip row, then single-column photo-led property cards; a map preview can precede the list. Property detail begins with edge-to-edge gallery imagery, then grouped location, offer, amenity, and review sections. Booking replaces imagery with dense full-width sections for guest data, comments, payment, totals, and confirmation.

### Whitespace Philosophy

Discovery leaves broad white margins around photographs and section headings. Comparison is more compressed but still separates each property with a visible white card silhouette and gray gutter. Forms group only related decisions and avoid filling unused space with decorative content.

Surface hierarchy observed in the source:

Use full-width white sections, pale filled controls, rounded photo cards, and sticky bottom actions. Elevation is subtle and local to floating search, map, or action controls; most hierarchy comes from spacing and fill contrast.

### Decorative Depth

Depth is concentrated in photography and the illustration system. Operational UI stays flat. Do not add gradients, glass, or decorative 3D objects to filter sheets, payment forms, or booking summaries.

# Navigation appearance

The observed home screen has no conventional bottom tab bar: identity/profile and favorites sit in the top row, while a floating search entry anchors the lower viewport. Search exposes product modes in a compact horizontal row, then proceeds through focused pushed screens. Results and detail use a back control with a centered search or property summary; share and favorite actions stay trailing. Full-screen search may close, while booking confirmation can close or continue into trips. Reuse these hierarchy cues for the target product's real destinations rather than copying travel categories as mandatory navigation.

# Components

### Buttons

Primary buttons are saturated yellow rounded rectangles, roughly 48 points high, with near-black semibold labels. Sticky actions repeat at the bottom of long property, filter, booking, error, and confirmation screens. Secondary actions use pale-gray fills or plain rows; black floating pills are reserved for map toggles. Disabled actions reduce contrast but retain their layout.

### Cards & Containers

Home heroes use a large 20-point-radius photograph with centered white copy. Property cards combine a wide rounded image, optional recommendation/favorite overlays, title, green rating or condition, location, price, and stay duration. Reviews are compact horizontally scrollable cards. Booking and confirmation use full-width grouped sections with no unnecessary shadow. Trip cards can overlay a destination photo and place the booking summary on a white inset surface.

### Inputs & Forms

Search fields are pale rounded rows with clear labels and values. Destination entry shows recent searches and regional suggestions while the keyboard is active. Guest count uses labeled steppers. Filters use compact selectable chips grouped under expandable headings and one sticky apply action. Booking uses explicit labeled fields, radio choices for payment timing, promo-code disclosure, a prominent total, and native payment handoff when appropriate.

# Imagery and icons

Destination, hotel, room, review, event, and excursion photography uses aspect-fill inside 14–20 point clips. Keep property imagery large enough to compare; do not shrink it into thumbnails except in summaries. Maps are functional images with a clear selected-place marker.

Use quiet monochrome line icons for back, close, share, favorite, location, calendar, guests, amenities, and disclosures. Category and state illustration belongs to `illustrations.md`; do not replace the globe, notification, account, warning, or campaign objects with arbitrary SF Symbols. Preserve the footprint of required imagery while final assets are prepared.

# States

Observed states include app-owned permission explanation followed by native iOS prompts, signed-out and signed-in profile, empty or populated saved places, recent and typed destination search, loading results, list and map entry, active filter selection, recommended and favorited properties, different payment timing and cancellation terms, native payment loading, payment failure with retry, booking confirmation, calendar permission, and a populated trip overview. Selected chips and radio controls update immediately; long-running search or payment keeps the task context visible. Errors replace the affected step with a direct retry instead of clearing the entire funnel.

# iOS adaptation

### Touch Targets

Give search modes, fields, steppers, chips, favorites, gallery actions, map controls, review actions, disclosure rows, and sticky buttons at least 44-point targets. Keep compact glyphs visually small while expanding their hit regions.

### Collapsing Strategy

On compact devices, preserve the search summary, price, dates, guest count, cancellation/payment terms, and current primary action. Let category, filter, offer, review, and event groups scroll horizontally where observed. In booking forms, stack fields and payment choices vertically rather than shrinking labels.

### Image Behavior

Use aspect-fill for destination, property, room, event, and excursion photography; keep the focal subject within the rounded crop. Use aspect-fit for logos, small 3D objects, and campaign illustration. Gallery and hero media may extend under top chrome, but controls and copy must remain within safe regions.

Respect Dynamic Type by allowing field rows, terms, reviews, and confirmation sections to grow. Keep sticky actions above the home indicator and ensure they never cover the last scrollable content. VoiceOver order should follow search context, property identity, rating and conditions, price, then actions. Announce filter counts, loading, payment state, errors, and booking confirmation.

# Anti-generic checklist

- Do not turn every white section into a shadowed floating card.
- Do not use violet or default iOS blue for routine commitment actions.
- Do not hide payment timing, total cost, cancellation terms, or stay duration behind secondary navigation.
- Do not shrink destination photography into decorative thumbnails throughout discovery and comparison.
- Do not decorate filters, guest forms, or payment sections with campaign artwork.
- Do not use a generic tab bar when the target hierarchy does not call for one.
- Do not copy hotels, transport modes, favorites, or trips as required product architecture.
- Do not replace authored brand/state imagery with arbitrary SF Symbols.

</design-context>
