<design-context>
---
version: 1
platform: iOS
name: Ostrovok-design-analysis
description: "A dense but bright travel interface combining a saturated lime search header, royal-blue booking actions, white and pale-gray cards, large hotel photography, green rating badges, map overlays, and a labeled five-item blue-selected tab bar."
colors:
  canvas: "#F4F4F6"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEF1F2"
  accent-primary: "#0752E8"
  accent-secondary: "#97EF72"
  text-primary: "#222222"
  text-secondary: "#8E8E93"
  divider: "#E2E4E7"
  destructive: "#E1121B"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 34}
  title: {fontFamily: "SF Pro Display", fontSize: 27, fontWeight: 700, lineHeight: 32}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 12
  card: 16
  sheet: 22
  pill: 999
components:
  primary-action: {fill: "royal blue", text: "white semibold", height: 50, shape: "rounded rectangle"}
  secondary-action: {fill: "white or pale gray", text: "royal blue", border: "none", shape: "rounded rectangle"}
  primary-card: {fill: "white", radius: 16, padding: 14, media: "wide hotel photography"}
  navigation: {fill: "white", selected: "blue icon and label", inactive: "gray icon and label", items: 5}
---

# Overview

Ostrovok is a bright, information-dense travel interface whose strongest visual signature is the combination of saturated lime brand areas and decisive royal-blue actions. Search and home surfaces introduce large green fields and broad white input cards; result, booking, account, and support screens settle onto a pale-gray canvas with white grouped cards. Real hotel and destination photography carries most of the emotion and comparison value.

The interface stays utilitarian even when visual. Large photos lead property and destination cards, while ratings, dates, prices, policy, and next actions are arranged in compact text blocks beneath or beside them. Blue buttons and selected navigation consistently identify commitment; green numeric badges identify quality rather than functioning as a general success tint.

# Non-negotiable visual invariants

- A saturated lime field is a major visual mass on brand and search-entry screens, paired with white controls rather than used as a minor decorative accent.
- Royal blue is the dominant action and selected-navigation color across search, booking, payment, filters, maps, and account surfaces.
- Hotel and destination photography remains large and comparison-ready; it cannot be collapsed into small thumbnails or omitted while assets are pending.
- Search results and booking content use broad white cards on a light-gray canvas with compact 12-point gutters and 8–12-point vertical gaps.
- Property cards keep rating, review context, price, and key metadata visually grouped beneath or beside the image, with price and primary action carrying the strongest type contrast.
- The bottom bar is white with five labeled destinations, blue selected content, and gray inactive content.
- Map screens preserve the map as the full visual canvas, with compact price markers, a blue radius overlay, and floating white or blue controls above it.
- Focused decisions appear in white bottom sheets with large top corners over a dimmed context; destructive confirmation stays explicitly red.

# Color and surfaces

Light gray `#F4F4F6` is the default background behind result lists, forms, settings, trips, and support. White carries cards, search controls, sheets, top and bottom bars, and form groups. A slightly darker secondary gray separates nested controls and disabled areas without adding heavy borders. Dividers are pale and largely confined to dense row groups.

Saturated lime around `#97EF72` owns splash and home/search identity. Royal blue around `#0752E8` marks primary buttons, active tabs, links, selected map/filter controls, and booking commitment. Near-black `#222222` carries titles, property names, dates, totals, and decision-critical text; cool gray `#8E8E93` supports location, guests, reviews, policy, and helper copy. Green rating badges, orange payment warnings, and red destructive controls remain semantically bounded. Generic iOS blue without the observed geometry and hierarchy would not be sufficient.

Large lime areas should remain flat and confident rather than becoming soft gradients. White cards use little or no shadow; separation comes from background contrast, radius, and spacing.

# Typography

Use SF Pro Display for major travel and section headings and SF Pro Text for controls, dense property facts, and metadata. Major headings are about 26–30 points bold. Centered navigation titles are roughly 16–17 points semibold. Card titles and important dates sit around 15–17 points semibold; body content is 14–16 points; ratings, policies, distance, and tab labels use 10–13 points.

Hierarchy is built through weight and alignment more than custom typography. Prices, totals, destination, property name, and booking state must remain more prominent than surrounding detail. Dense metadata can wrap into two lines but should not become visually equal to the title or CTA. Numeric ratings appear compact and bold inside colored badges.

Dynamic Type should increase card and form height while preserving the order of destination/property, dates or context, price/status, and action. Do not keep all rows artificially single-line by shrinking below readable iOS sizes.

# Screen composition

The status safe area is followed by one of three top treatments: a lime brand/search field with broad white controls, a compact white navigation bar with centered title and back action, or a condensed search-summary strip above results. The middle is dominated by large photo cards, compact white form groups, map content, or bottom-sheet content. The lower region commonly contains the five-item tab bar or a sticky white price/action zone with a full-width blue button.

Search-entry screens use a large lime upper field with stacked white destination/date/guest controls and a prominent blue action. Results form a single vertical list of broad property cards: a wide rounded photo leads, followed by rating, location, benefit, and price information. Detail screens expand photography into a hero or gallery area with circular floating utility buttons, then stack white information sections. Room selection uses white cards with media and dense two-column rate options, each retaining a clear blue selection action.

Booking and transfer forms use broad white groups with aligned labels, values, underlined or lightly framed fields, and persistent commitment actions. Trips, profile, menu, support, and settings use quieter single-column cards or row groups. Map screens allow map tiles and a blue radius overlay to occupy nearly all available height while price markers and floating controls remain compact. Modal login, cancellation, payment, profile editing, and card-entry states use a white sheet with roughly 16–22-point top corners.

Outer gutters are commonly about 12 points, internal card padding around 14 points, and repeated-card gaps 8–12 points. Major sections separate by about 24 points. Scroll content must clear sticky lower actions and the home indicator.

# Navigation appearance

The bottom navigation is a white full-width bar with five icon-and-label items. The selected icon and label are royal blue; inactive items are gray. Labels remain compact but visible, and the bar respects the home-indicator safe area without becoming a floating decorative capsule.

Top bars use a standard compact back chevron, centered semibold title, and occasional trailing share, search, favorite, or utility icons. Property-detail utilities may appear as small white circular buttons above photography. Modal decisions use rounded bottom sheets over a dimmed screen. Product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Primary buttons are royal blue rounded rectangles about 50 points high with white semibold labels. Pressed state darkens the blue without changing geometry. Secondary actions use white or pale-gray fill with blue labels. Disabled actions retain their size and radius with reduced contrast. Destructive actions use explicit red text or fill and remain visually isolated from ordinary blue actions.

Property cards are broad white containers with 10–16-point corners. A large wide photograph sits above compact facts; a heart may float in a small white chip over the image. Green numeric rating badges are compact, strongly rounded, and paired with review context. Price and available action anchor the lower part of the card. Room and transfer cards keep media, option facts, and CTA aligned rather than splitting into unrelated generic rows.

Search fields are white, 10–12-point rounded rectangles on lime or pale surfaces. Filter and map controls use blue or white floating pills/buttons. Booking forms use lightly separated text fields and grouped payment/prepayment cards. Settings and profile rows use simple chevrons and toggles. Sheets use a visible rounded top and clear action grouping.

# Imagery and icons

Real destination and hotel photography is the primary image language. Search and property cards use wide cover crops that retain a recognisable room, building, landscape, or amenity focal point. Detail headers may devote a large fraction of the upper viewport to photography; image galleries and room cards preserve consistent crops for comparison. Transfer cards use realistic vehicle cutouts on clean fields.

Icons are simple line symbols in blue, gray, or white and remain subordinate to photos and decisions. Map pins and price markers are compact high-contrast overlays. Occasional promotional game or travel-object art is a bounded campaign exception, not a broad illustration system; do not use it to replace photography in ordinary search, property, booking, or trip surfaces. If final photos are pending, placeholders must retain the observed dimensions and focal role.

# States

Observed states include splash and populated home/search, result lists with applied filters, map radius selection, property detail, room choice, booking entry, confirmation and prepayment, transfer options and order, and logged-out or populated trip surfaces. Empty favorites and empty support chat stay light and sparse without changing the blue/lime identity.

Modal states include authentication provider selection, login, booking cancellation, profile editing, bank-card entry with keyboard, and account deletion. Calling can show a system permission alert over the app. Payment deadlines use a bounded orange warning; destructive deletion and confirmation use red. Native alerts and sheets remain visually distinct but the underlying white/gray/blue hierarchy stays visible.

# iOS adaptation

Use safe-area-aware vertical scrolling for search, result, detail, booking, trip, profile, and support surfaces. The lime header may extend beneath the status area while its controls remain within readable safe bounds. Sticky price and action zones should use safe-area insets rather than fixed coordinates. Map overlays must avoid status, tab-bar, and home-indicator regions.

Keep tab items, photo utility buttons, hearts, filter pills, map controls, row actions, and compact chevrons within at least 44-point hit regions. VoiceOver should announce property image and title, rating/review, key policy, price, then action. Map markers need accessible labels independent of their visual price text. Keyboard-visible login, profile, payment, and support forms must keep focused fields and their relevant action visible.

On compact widths, allow metadata and price groups to wrap or stack before shrinking photographs below comparison usefulness. Dynamic Type should grow card and sheet height while retaining the visual priority of title, state, total, and action. The observed product is predominantly light; if a dark appearance is required without reference evidence, adapt contrast deliberately rather than automatically inverting photographs or lime brand fields.

# Anti-generic checklist

- Do not shrink hotel and destination photography into list thumbnails or omit it while waiting for assets.
- Do not replace the lime search field with a generic white navigation header.
- Do not use default blue controls without the observed full-width CTA, selected navigation, and floating map/filter treatment.
- Do not turn result, room, booking, and trip information into identical `Form` rows with no price or rating hierarchy.
- Do not ship an unstyled `TabView`; preserve the labeled five-item white bar and blue selected state.
- Do not put a heavy shadow around every white card; use the pale canvas, spacing, and radius for separation.
- Do not use one corner radius for photo cards, controls, sheets, pills, and circular utilities.
- Do not spread the occasional promotional illustration style across ordinary hotel, map, transfer, and booking screens.

</design-context>
