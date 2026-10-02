<design-context>
---
version: 1
platform: iOS
name: Tutu-design-analysis
description: "A dense travel marketplace framed by a deep-indigo booking field, saturated violet actions, compact white comparison cards, a distinctive oversized central tab symbol, and a photo-led discovery feed below the transactional core."
colors:
  canvas: "#F4F2F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEEBF7"
  accent-primary: "#7054F6"
  accent-secondary: "#1B0B73"
  text-primary: "#17161C"
  text-secondary: "#6F6D77"
  divider: "#E0DDE7"
  destructive: "#D84A57"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 8
rounded:
  control: 12
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "{colors.accent-primary}", text: "#FFFFFF", cornerRadius: 12, minHeight: 48}
  search-panel: {fill: "{colors.surface-primary}", text: "{colors.text-primary}", cornerRadius: 16, padding: 14}
  comparison-card: {fill: "{colors.surface-primary}", text: "{colors.text-primary}", cornerRadius: 18, padding: 16}
  navigation: {fill: "{colors.surface-primary}", selected: "{colors.accent-primary}", unselected: "{colors.text-secondary}", minHeight: 60}
---

# Overview

Tutu is recognisable by the contrast between a large deep-indigo booking zone and a long, colorful travel feed. The upper viewport is dense and task-oriented: category controls, origin and destination, dates, travelers, and a violet action are grouped into one dominant search composition. Results and checkout shift onto pale canvases with compact white cards, while photography and promotional color return below the transactional core. This alternation of branded color mass, dense comparison, and image-led discovery is more important than any single token.

# Non-negotiable visual invariants

- The booking area is a dominant deep-indigo color field, not a white form placed under a small colored header.
- Saturated violet is reserved for primary actions, selected controls, and active navigation; it remains visually distinct from semantic green, orange, and red.
- Search inputs read as one compact compound white panel with clear internal grouping rather than a loose stack of unrelated fields.
- Result screens combine a compact search summary and filter row with vertically stacked white comparison cards containing times, price, conditions, and state together.
- The home composition changes from dense booking controls above to visibly photo-led discovery modules below; imagery cannot be removed from that lower half.
- The persistent bottom bar is white and compact, with a conspicuously enlarged violet flower/star-like central action and smaller surrounding tabs.
- Detail and form screens keep their next action anchored above the lower safe area while the content remains vertically scrollable.

# Color and surfaces

The largest branded mass is a deep navy-indigo search field spanning the top portion of booking screens. White compound forms sit inside it, and bright violet carries conversion actions and selected states. The rest of the product uses a very pale lavender-gray canvas with white cards; separation comes from surface contrast, spacing, and occasional hairlines rather than heavy shadows.

Primary text is near-black. Schedules, policies, review counts, and secondary facts use medium gray. Green appears in cashback, positive value, or success cues; orange and yellow mark warnings or promotional urgency; red is restricted to errors, unavailable inventory, or destructive meaning. Replacing violet with default iOS blue or turning the indigo field into a generic navigation bar would visibly break the reference.

# Typography

The interface uses a compact system-sans hierarchy. Large page or promotional titles are bold and left aligned, but most transactional screens depend on smaller text with strong weight contrast. Route times, fares, and primary names are heavier and larger than conditions, amenities, and review metadata. Numeric information should use tabular figures where comparison matters.

Map the hierarchy to SF Pro Display for large titles and SF Pro Text for interface copy. Preserve the relative priority of price, time, route, and action under Dynamic Type: supporting metadata may wrap or move below, while the principal value remains visually dominant. Avoid making neighboring title, body, and caption styles nearly identical; the reference relies on distinct bold anchors within dense cards.

# Screen composition

Booking screens begin at the top safe area with a deep-indigo field occupying roughly the upper third to half of the initial viewport. Within 16-point side insets, category controls lead into a full-width compound search panel and one full-width violet action. Below, the canvas changes to pale lavender-gray and continues as a vertical scroll of promotional rails, photo cards, editorial tiles, and utility blocks with 16-24 point section gaps.

Results screens keep a compact route or search summary near the top, followed by horizontally scrollable mode, price, and filter controls. Comparison cards fill almost the full width, use 14-16 point internal padding, and repeat at tight 8-12 point intervals. Important warnings remain adjacent to the affected results.

Detail screens use a long single-column scroll. A media block or image carousel can occupy a substantial top portion, followed by rating, facts, conditions, maps, and supporting media; a purchase or selection action remains fixed above the home indicator. Forms use one column of grouped fields with the keyboard or bottom action owning the lower viewport. Selection sheets rise from a dim overlay with a large rounded top edge and compact row choices.

# Navigation appearance

The status bar remains visible over the current screen field. Top bars are visually light: a small back or close control, a compact centered title or search summary, and occasional favorite or menu actions without a heavy navigation-bar container. The bottom bar is a white full-width surface above the home indicator with small icon-label pairs; selected items use violet while inactive items are gray. Its center action is oversized, saturated violet, and flower/star-like, producing a deliberate interruption in the otherwise regular tab rhythm. Sheets use a dimmed backdrop and a white rounded-top panel.

# Components

The compound search panel is a white rounded rectangle containing stacked route, date, traveler, and category rows. Internal dividers and small transport pictograms clarify grouping; the swap control is compact and visually attached to the route fields. The primary action is a wide saturated-violet rectangle, about 48 points high, with white semibold text and moderate rather than pill-like rounding.

Comparison cards use white fill, roughly 18-point corners, compact padding, and a dense hierarchy: departure and arrival times, route or property name, duration and conditions, ratings, availability, and price remain in one surface. Cashback, warning, and unavailable labels sit directly beside the value they qualify. Filter controls are compact pills or chips with light neutral fill and violet selected emphasis.

Media cards clip photography into rounded rectangles or occasional organic masks and pair it with short bold copy. Favorite buttons float over image corners. Seat selection uses a compact grid with clear available, selected, and unavailable differentiation. Account or passenger forms use visibly styled fields, persistent labels, validation, and a bottom-owned action rather than default `Form` rows.

# Imagery and icons

Photography is a major structural material on the home feed and accommodation detail: destination scenes, hotels, trains, travelers, landmarks, and editorial topics appear in rounded portrait and landscape crops. Use cover crops with a clear focal subject, and keep imagery large enough to remain a color mass rather than a thumbnail. Embedded maps are functional tiles within rounded content blocks.

Functional icons are simple transport and utility pictograms in violet, gray, or white: plane, train, bus, bed, car, swap, filter, heart, profile, and information. Promotional art varies between photography, campaign graphics, and occasional glossy objects, so it should not be normalized into one invented illustration system. When a sampled composition includes imagery, a temporary asset must preserve its placement, crop, scale, and approximate visual weight until final media exists.

# States

Observed states keep the same indigo, violet, white, and pale-lavender structure. Selected service tabs, filter chips, favorite controls, and bottom tabs use violet emphasis. Sold-out or absent inventory is stated inside the affected result card; warning banners use warm color without replacing the surrounding card system. Signed-out profile surfaces retain the same composition but substitute a clear authentication prompt for account data.

Disabled actions reduce contrast while preserving geometry. Empty-like constraints such as a missing vehicle plan or unavailable seats remain concise and local to the component. Native tracking and microphone permission alerts appear over the branded screen without custom imitation. Bottom sheets dim the underlying context but keep it visible enough to explain the selection.

# iOS adaptation

Extend the indigo or pale canvas through the top safe area and keep interactive content inside readable horizontal insets. Long booking, results, detail, and discovery compositions belong in vertical scroll containers; reserve bottom content inset equal to any persistent tab bar or sticky action so cards are never hidden behind the home indicator.

Keep fields, chips, result rows, favorites, seat controls, and navigation targets at least 44 points. On compact widths, allow secondary metadata to wrap beneath its primary value instead of shrinking price, time, or route labels. Preserve semantic VoiceOver order from search context through results and next action. Present keyboard and system permission transitions natively, then return to the same styled context. The observed package is light in appearance; do not invent an unrelated dark palette without product requirements.

# Anti-generic checklist

- Do not replace the deep-indigo booking field with a white `Form` under a standard navigation bar.
- Do not use default blue tint for primary actions, selected tabs, or chips.
- Do not render the bottom navigation as an unstyled `TabView`; preserve the enlarged violet central symbol and compact surrounding items.
- Do not flatten route, date, and traveler inputs into unrelated generic rounded rectangles.
- Do not make every result a spacious uniform card that separates price from its route and conditions.
- Do not omit the photo-led discovery portion or reduce its imagery to small icons.
- Do not apply one corner radius to controls, comparison cards, media cards, and sheets.
- Do not substitute arbitrary SF Symbols where transport-specific pictograms or the central branded geometry carry the visual identity.

</design-context>
