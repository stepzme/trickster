<design-context>
---
version: 1
platform: iOS
name: Sutochno-design-analysis
description: "A photo-led accommodation interface that pairs a black search and commitment layer with white reading surfaces, raspberry selection markers, dense booking facts, and rounded sheets over maps or property imagery."

colors:
  brand: "#E72D62"
  on-brand: "#FFFFFF"
  action: "#181818"
  on-action: "#FFFFFF"
  text-primary: "#171719"
  text-secondary: "#74747A"
  text-tertiary: "#A0A0A6"
  canvas: "#FFFFFF"
  grouped-canvas: "#F4F5F7"
  control-fill: "#F0F0F2"
  divider: "#E5E5E8"
  positive: "#08B957"
  recommendation: "#EAFBF2"
  warning: "#E2AA28"
  destructive: "#D84747"
  overlay: "#000000"

typography:
  screen-title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34, letterSpacing: -0.4}
  page-title: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 27, letterSpacing: -0.2}
  section-title: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25, letterSpacing: -0.1}
  card-title: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 700, lineHeight: 20, letterSpacing: 0}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20, letterSpacing: 0}
  body-strong: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20, letterSpacing: 0}
  metadata: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 17, letterSpacing: 0}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 14, letterSpacing: 0}
  button: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 500, lineHeight: 20, letterSpacing: 0}
  amount: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29, letterSpacing: -0.2}

spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  section: 32

rounded:
  compact-control: 8
  field: 12
  card: 14
  sheet: 20
  action: 13
  pill: 999

components:
  primary-action: {height: 56, backgroundColor: "{colors.action}", textColor: "{colors.on-action}", typography: "{typography.button}", rounded: "{rounded.action}"}
  outline-action: {height: 52, backgroundColor: "{colors.canvas}", textColor: "{colors.text-primary}", borderColor: "{colors.action}", borderWidth: 1.5, rounded: "{rounded.action}"}
  search-field: {height: 44, backgroundColor: "{colors.canvas}", textColor: "{colors.text-primary}", typography: "{typography.body}", rounded: "{rounded.field}", padding: [0, 14]}
  property-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.text-primary}", rounded: "{rounded.card}", padding: 0}
  grouped-section: {backgroundColor: "{colors.canvas}", textColor: "{colors.text-primary}", rounded: "{rounded.sheet}", padding: 16}
  bottom-navigation: {height: 58, backgroundColor: "{colors.canvas}", selectedColor: "{colors.brand}", unselectedColor: "{colors.text-primary}"}
---

# Overview

Sutochno is visually led by real accommodation and destination photography, but booking facts never become secondary decoration. Search starts in a black brand field; results, property details, checkout, messages, and account management move onto white surfaces. Raspberry pink identifies the service, selection, bonuses, and small status accents. Near-black owns high-consequence actions and anchors a deliberately dense hierarchy of prices, dates, ratings, rules, and support information.

# Non-negotiable visual invariants

- Search entry uses a near-black upper field with the white wordmark and a single white rounded destination control.
- Property photos are the largest mass in result cards and detail headers; facts remain directly adjacent rather than hidden behind imagery.
- Raspberry pink is concentrated in brand marks, selected navigation, bonus values, and compact badges, not spread across every control.
- Booking, payment, sign-in, messaging, and recovery actions use wide near-black controls with white labels.
- Long detail and checkout screens are segmented by white rounded sections on a very pale cool-gray grouped canvas.
- Ratings use compact green values and recommendation labels, while prices remain large black numerals.
- Maps keep their native geographic color mass and use white price labels or hollow pins rather than decorative custom scenery.

# Color and surfaces

The largest operational surfaces are white. A pale cool-gray grouped canvas appears between booking, reservation, profile, and cancellation sections, creating separation without card shadows. Search is the exception: its black upper field gives the white wordmark and destination input a strong entry point. Map screens are dominated by the map itself, with white controls and a white results sheet layered above it.

Raspberry pink is a small, high-recognition accent. It marks the persistent mini-wordmark, active tab, bonus and cashback values, some badges, and active switches. The principal action color is not pink but near-black. Green is restricted to rating values, recommendation labels, valid state, and positive status bars. Gold identifies exceptional host or property status. Destructive red belongs to cancellation and account consequences; it must not be confused with the brand accent.

Outlines are used selectively on secondary actions, fields, checkboxes, and radio controls. Most section boundaries rely on background contrast and spacing. Shadows are soft and rare: result cards may lift slightly over the list, while information-heavy grouped sections remain visually flat.

# Typography

Use SF Pro as the iOS implementation face. The reference depends on clear Cyrillic, strong numerals, and frequent shifts between bold decision text and compact supporting facts. Large destination titles and top-level areas sit around 28 points; page and modal titles use 20–22 points; property and section titles use 16–20 points. Body copy is approximately 15 points, with 13-point metadata for locations, dates, occupancy, unit attributes, and timestamps. Bottom navigation and very compact status details can fall to 11 points.

Prices and totals must remain immediately scannable. Use a 24-point bold amount for a section total and 16–18-point bold text where price shares a result card with other facts. Keep ruble values, nightly price, full-stay total, prepayment, and payment-on-arrival labels aligned as separate pieces of information. Do not shrink dense copy to fit: allow descriptions, policies, and support text to wrap vertically.

# Screen composition

Use 12–16-point horizontal screen insets and a 4-point spacing base. Compact rows can repeat every 8–12 points, while distinct booking or profile sections need 20–32 points of separation. The composition changes by task, but the content hierarchy stays explicit.

Home places the black search region above horizontally scrolling destination photography and review-led accommodation cards. Search drill-downs use a compact centered title and a full-width input, followed by plain suggestion rows. Guest selection is intentionally sparse, ending in a bottom-pinned action.

Results alternate between a full map and a vertical photo-card list. On mixed map/list screens, the map fills the upper region and a white sheet starts the results below. Result cards begin with a wide rounded photo, overlay only compact badges and favorite controls, then stack category, property name, location, occupancy, price, and rating beneath.

Property detail begins with a large edge-to-edge gallery and a white rounded information sheet overlapping its lower edge. The reading column then advances through summary facts, sleeping arrangement, description, facilities, reviews, host, and rules. A persistent bottom booking bar keeps total, nightly price, and action together without covering the current section.

Checkout, reservation management, profile, and cancellation use full-width white grouped sections separated by thin bands of cool gray. Sheets rise from the bottom for sorting, contacts, editing, warnings, and alternative actions. Empty account areas use generous open space around one small authored object, a short explanation, and a bottom action.

# Navigation appearance

The observed top-level shell uses five bottom destinations with line icons and short labels. The selected destination turns raspberry pink; unselected items remain near-black or gray on a flat white bar. This count and these literal destinations belong to the source product, so an adapted product should preserve the compact five-item appearance only when its own information architecture supports it.

Drill-down screens use a small back control at leading, a centered title or compact search summary, and optional filter, share, or favorite controls at trailing. Property gallery controls appear as white circular buttons over photography. Modal tasks use a white bottom sheet with a grabber or a close control. Full-screen editors may show a text back label when cancellation needs to be explicit.

# Components

Primary actions are near-black, full-width, approximately 52–56 points high, with white medium-weight text and 12–14-point corners. The action may contain a small contextual symbol, total, or loading indicator, but it remains a single commitment target. Secondary actions are white with a 1–1.5-point black outline. Disabled actions switch to a solid light-gray fill with muted text instead of retaining a black shell at low opacity.

Search controls are white or pale-gray rounded rectangles with concise value summaries. Guest steppers use separate circular minus and plus controls around a centered value. Filter rows use checkboxes, radio circles, toggles, or value disclosures aligned to trailing; the active result count remains in the pinned black action.

Property cards use a wide photographic header with 12–14-point rounding, compact overlaid badges, and an unboxed fact stack below. Detail sections are larger white rounded containers. Review cards can scroll horizontally inside their section, pairing an avatar placeholder, score, metadata, excerpt, and a disclosure to the full review.

Status strips are local to the decision they affect: a pale-green prepayment notice, green check for valid contact data, narrow red or green markers in booking-related chat rows, and a pink unread badge. Chat service messages use outlined white containers and may contain a black action. User input stays as a rounded field with a circular black send action.

# Imagery and icons

Accommodation and destination photography is structural content. Use large `fill` crops for result and gallery images while keeping rooms, beds, or destinations identifiable. Thumbnails for bookings, messages, favorites, and checkout repeat the same source imagery at smaller scale to preserve continuity. A gallery count appears over the image rather than below it.

Icons are thin, compact, mostly monochrome, and literal: back, search, filter, share, favorite, location, bed, facilities, support, phone, and disclosure. Colored service badges remain small. Do not turn those functional symbols into an illustration system. Sparse three-dimensional objects seen in isolated empty states are not enough to define a reusable product-wide illustration language.

# States

Observed states include first entry, location and tracking permission, empty and populated search, map loading, loaded price pins, filters with inactive and active controls, saved and unsaved properties, collapsed and expanded descriptions, booking input, disabled and enabled submission, payment loading, successful booking, missed prepayment, populated and signed-out messages or reservations, active and canceled booking, empty search results, notification permission, recent-search restoration, profile editing, cancellation reasons, and destructive confirmations.

State feedback stays close to its cause. A changed filter updates the count in the pinned action; a valid contact gains a green check; loading replaces action text; a canceled booking becomes a dedicated result sheet; an unread conversation gains a compact badge; and failure or expiry offers a next action without removing the relevant booking context. Native permission and share dialogs remain system-owned.

# iOS adaptation

Build the composition with safe-area-aware custom containers rather than default `Form` styling. Use a bottom inset for the compact tab bar and for persistent booking or confirmation controls. Long property and policy content belongs in a vertical `ScrollView`; review cards, destinations, and similar browseable groups may scroll horizontally. When a map and list share the screen, keep the map interactive and present results as a draggable or fixed lower sheet without making controls unreachable.

Every row control, favorite, stepper, filter, close button, and tab needs a minimum 44-point hit target even when its visible mark is smaller. VoiceOver should read a result card as property identity, location, key attributes, total or nightly price, rating, then available actions. Read checkout totals as coherent phrases and distinguish prepayment from later payment. Dynamic Type may increase section height and stack trailing values, but must not detach a price from its label or cover the persistent action.

Preserve the high photographic mass on narrow devices and use responsive `fill` crops rather than reducing galleries to thumbnails. Let descriptive copy wrap. Use native permission, calendar, keyboard, and share interfaces when they take control; app-owned sheets should retain the package's white surface, generous upper corners, and black decision actions.

# Anti-generic checklist

- Do not replace the black search header with a generic white navigation bar and tinted search field.
- Do not reduce property results to identical text cards or hide photos, totals, ratings, and stay facts behind a disclosure.
- Do not use raspberry pink for every button; wide commitment actions are near-black.
- Do not make every white section float with a shadow; grouped screens separate mostly through pale background bands and spacing.
- Do not copy the source's five literal destinations when the adapted product has a different information architecture.
- Do not omit cancellation terms, split payment, host status, or other consequential facts to make the layout feel cleaner.
- Do not invent a travel illustration system from isolated empty-state objects; real photography remains the defining imagery.

</design-context>
