<design-context>
---
version: 1
platform: iOS
name: Avtoelon-uz-design-analysis
description: "A white, compact automotive marketplace visual system with black price-first typography, bright blue posting and progress actions, green seller-contact controls, dense vehicle photography, light gray taxonomy tiles, and pragmatic form screens."
colors:
  primary: "#0A84FF"
  on-primary: "#FFFFFF"
  primary-soft: "#DCEFFF"
  primary-faint: "#F0F7FF"
  contact-green: "#20C244"
  contact-green-soft: "#DCF8E5"
  badge-green: "#24C846"
  warning-yellow: "#FFE64A"
  alert-red: "#FF3B30"
  ink: "#111111"
  ink-muted: "#6E747A"
  ink-subtle: "#A4A9AF"
  canvas: "#FFFFFF"
  surface-1: "#F4F5F7"
  surface-2: "#EDEFF2"
  field: "#F2F3F5"
  hairline: "#E1E4E8"
  overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 34, fontWeight: 700, lineHeight: 1.08, letterSpacing: 0 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 28, fontWeight: 700, lineHeight: 1.12, letterSpacing: 0 }
  display-md: { fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: 0 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 500, lineHeight: 1.34, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 4, sm: 7, md: 10, lg: 14, xl: 18, xxl: 24, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 28, xxl: 40, section: 56 }
components:
  bottom-action-blue: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18] }
  contact-action-green: { backgroundColor: "{colors.contact-green}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 14] }
  pale-action-blue: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.primary}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: [10, 12] }
  listing-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", padding: 10 }
  category-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8 }
  form-field: { backgroundColor: "{colors.field}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [11, 12] }
---

# Overview

Avtoelon.uz is visually direct and utilitarian: white screens, compact black text, bright blue actions, green seller contact, and real vehicle evidence carry the interface. The researched screens show a marketplace style that avoids brand theatre; it makes price, vehicle photo, location, mileage, fuel, and seller access readable in a narrow iPhone viewport.

**Key Characteristics:**
- White canvas with thin separators and sparse shadows.
- Dense vehicle listings with rectangular photos and right-side facts.
- Bright blue for posting, progress, selected tabs, and links.
- Green for phone contact and good-price feedback.
- Pale gray taxonomy tiles with vehicle artwork.
- Large step titles in selling forms with a slim blue progress line.

# Non-negotiable visual invariants

- Vehicle listings lead with model, price, photo, year, mileage, fuel, and location in one compact vertical unit.
- Primary progress and posting actions are saturated blue and usually full width at the bottom of the screen.
- Seller phone actions are green and must remain visually distinct from blue navigation or form progression.
- Category selection uses pale gray tiles with vehicle or parts artwork, not plain text lists alone.
- Detail screens open with a large vehicle photo gallery and pin Chat plus Call actions above the safe area.
- Posting forms use large black step headings, a thin blue progress indicator, and minimal white space around single-purpose inputs.
- Status badges such as new listing, official dealer, good price, review state, and view counts stay explicit and small.

# Color and surfaces

### Brand & Accent
- **Blue** ({colors.primary}) is the action color for posting, Continue, active tabs, search links, share affordances, and the central bottom-bar button.
- **Green** ({colors.contact-green}) is reserved for seller calls, positive price evaluation, and active binary toggles. Do not use it for generic confirmation if a phone/contact meaning is present.
- **Yellow** ({colors.warning-yellow}) marks credit offers and recommendation labels. Keep it as a small badge or product marker rather than a page wash.
- **Red** ({colors.alert-red}) appears in new-listing markers, notification dots, map/location icons, and destructive or report states.

### Surface
- **Canvas** ({colors.canvas}) is dominant. Most listing, detail, search, and posting screens are white edge to edge.
- **Surface 1** ({colors.surface-1}) supports category tiles, search fields, disabled image placeholders, chips, and account cards.
- **Surface 2** ({colors.surface-2}) is for nested controls, inactive tab bar tracks, and disabled fields.
- **Hairline** ({colors.hairline}) separates list rows and card sections. Use hairlines more often than heavy outlines.

### Text
- **Ink** ({colors.ink}) carries screen titles, model names, and prices.
- **Ink Muted** ({colors.ink-muted}) carries dates, views, specs, section captions, and secondary rows.
- **Ink Subtle** ({colors.ink-subtle}) is for placeholders and disabled hints.

### Semantic
- Success and positive assessment use the green family.
- Warning and credit use yellow.
- Destructive and report affordances use red with plain wording.
- Modal scrims use black overlay only behind a sheet or permission-like interruption.

# Typography

### Font Family

- **SF Pro Display** for large posting headings, screen titles, and major price emphasis.
- **SF Pro Text** for listings, metadata, inputs, chips, and bottom navigation.
- **SF Mono** only for compact identifiers or aligned numeric fragments when needed.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 34 | 700 | Major posting question or empty-state headline |
| `{typography.display-lg}` | 28 | 700 | Detail title or large price block |
| `{typography.headline}` | 22 | 700 | Screen title and form step title |
| `{typography.card-title}` | 16 | 600 | Vehicle model, card title, account item |
| `{typography.body}` | 14 | 400 | Form fields, specs, region, body rows |
| `{typography.body-sm}` | 12 | 400 | Listing facts, date, views, chip text |
| `{typography.caption}` | 10 | 400 | Bottom-bar labels, tiny badges, counters |
| `{typography.button}` | 14 | 600 | Continue, Post, Chat, Call |

### Principles

- Price and model are always stronger than metadata.
- Keep headings heavy but not oversized except in posting steps.
- Let small metadata wrap to two short lines rather than shrinking below caption scale.
- Use blue text only for actions, links, or selected state.
- Keep Uzbek/Russian text readable with system Cyrillic and Latin support.

### Note on Font Substitutes

Use Inter or the platform system sans if SF Pro is unavailable. Preserve numeric alignment for price and mileage.

# Screen composition

### Grid & Container

Use a single-column iPhone layout. Home-style screens stack a compact header, full-width search, a two-row category grid, horizontal quick chips, and vertical listings. Listing rows pair a left photo block with facts on the right; badges and secondary actions sit between rows without large card framing.

Detail screens start with a full-width vehicle photo gallery, then title, price, facts, seller-related sections, recommendations, and similar listings. The photo gallery should feel photographic and evidence-oriented, with count badges on the image.

Posting screens use a one-question-at-a-time layout: title near the top, optional search field, row list or tile grid, and a blue bottom action. The progress line sits below the navigation row and stays thin.

Profile/account screens use light gray background behind white listing-management cards. Buttons inside those cards remain simple, mostly blue on pale blue, with stronger blue for promotion.

### Whitespace Philosophy

Keep marketplace content dense. Do not add large hero gaps, oversized cards, or marketing padding. Use extra whitespace only in empty states, loading states, and one-step forms.

# Navigation appearance

The bottom bar is a white, thin-lined strip with five compact items and small labels. The central post item is a blue circular plus and is visually stronger than the other tab icons. Active tab icons use black or blue depending on context; inactive labels are gray. Respect the home indicator and keep the bar visually attached to the screen bottom.

Top bars are minimal: back arrow on the left, centered or left-aligned title, and a blue text action such as Close, Search, Settings, or share on the right. Search screens use an embedded pale field under the title area.

# Components

### Buttons

- **Primary progress**: blue rectangle, around 7 to 10 corner radius, full width, pinned low when the form is mostly empty.
- **Seller call**: green filled rectangle with phone icon and masked number; paired with blue Chat on detail.
- **Secondary contact**: pale blue strip for Telegram consultation, spanning listing width.
- **Promotion**: saturated blue full-width action inside profile listing cards.
- **Destructive**: icon plus label in blue or red depending on severity, never styled like the green call action.

### Cards & Containers

Listings are not heavy cards. Use white rows with image, text facts, small badges, and hairline spacing. Category tiles are pale gray rectangles with rounded corners and cropped vehicle artwork. Product detail sections can be separated by white blocks and hairlines, but avoid enclosing every fact in its own card.

### Inputs & Forms

Search and posting inputs are pale gray rounded rectangles with subdued placeholder text. Currency controls sit directly beside price fields as compact segmented buttons. Binary choices use row labels with trailing checkboxes or toggles; avoid large custom controls.

Price-quality feedback uses a rounded pale panel with a horizontal green to yellow to red meter and a short label. Loading states can be mostly white with a small blue spinner and centered text.

### Status & Build Page

Badges are small and literal: red new listing, green official dealer, orange or yellow credit, green good price, review labels, published labels, view counters, and phone-view counts. Place badges near the content they qualify, not in a global banner.

### Navigation

Visually, the tab bar remains compact with small icons and labels. Top navigation uses text actions rather than large icon buttons unless the researched screen shows an icon.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Plain white canvas | Search, forms, lists, detail facts |
| 1 | Pale gray rounded block | Category tiles, inputs, chips, placeholders |
| 2 | Real photo rectangle | Vehicle listings, gallery, dealer content |
| 3 | Colored badge or meter | Credit, official dealer, price evaluation |

### Decorative Depth

Depth comes from real vehicle photos and category artwork, not shadows. Keep shadows minimal and only under overlays or profile cards. Vehicle photos should use cover crops that keep the car identifiable; do not crop away condition evidence.

# States

- **Selected tab or active action**: blue icon, blue line, or blue filled button.
- **Disabled action**: pale gray or low-opacity blue while preserving the full button shape.
- **Active toggle**: green track with white knob.
- **Empty chat**: mostly white, single account row or short placeholder, no decorative illustration unless sourced.
- **Filter active**: blue count dot or active chip while keeping the list density.
- **Loading**: centered compact spinner and short text on white.
- **Validation and destructive state**: direct text plus red or muted warning treatment; avoid generic alert cards.

# iOS adaptation

| Context | Width | Treatment |
|---|---|---|
| Narrow iPhone | less than 390 | Keep listing image width stable, wrap model names and specs, shorten chip text before reducing touch targets |
| Standard iPhone | 390 to 430 | Preserve two-column category subgrids and full-width bottom actions |
| Wide iPhone or iPad compact | 431 and above | Allow listing facts more horizontal room, but keep detail and posting forms single column |

### Touch Targets

Maintain at least 44 points for bottom tabs, search rows, category tiles, favorite hearts, filter rows, Chat, Call, and Continue.

### Collapsing Strategy

Remove optional dealer promos, repeated recommendation blocks, or secondary badges before hiding price, location, fuel, mileage, phone, or posting progress. Posting steps should scroll rather than split into multiple columns.

### Image Behavior

Use `scaledToFill` style crops for listing photos and `scaledToFit` or aspect-preserving gallery treatment on detail. Category artwork should be clipped inside pale tiles and never replace actual vehicle photos in listing rows.

On iPhone, respect top and bottom safe areas, allow content to scroll under stable pinned actions only with visible spacing, and preserve reading order for VoiceOver. At larger Dynamic Type sizes, keep price and model first, then wrap facts below.

# Anti-generic checklist

- Do not replace the marketplace blue and call green split with default iOS blue everywhere.
- Do not turn listing rows into large decorative cards with hidden mileage or location.
- Do not use generic car icons where real photos or sourced vehicle category artwork are required.
- Do not remove the central blue post affordance from the bottom bar appearance.
- Do not style posting forms as iOS Settings forms; keep the large step title, thin progress line, and plain white canvas.
- Do not use marketing hero sections, oversized gradients, or abstract automotive decoration.
- Do not hide the small status badges that distinguish new, official dealer, credit, good price, and moderation states.

</design-context>
