<design-context>
---
version: 1
platform: iOS
name: Airbnb-design-analysis
description: "A bright photography-led marketplace with a white canvas, bold black titles, coral-pink actions, pill search surfaces, generously rounded cards and sheets, minimal line icons, and a clean persistent tab bar."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#F7F7F7"
  surface-secondary: "#EBEBEB"
  accent-primary: "#FF385C"
  accent-secondary: "#222222"
  text-primary: "#222222"
  text-secondary: "#6A6A6A"
  divider: "#DDDDDD"
  destructive: "#C13515"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 600, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 23}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 20
  section-gap: 32
  card-padding: 20
  control-gap: 12
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "{colors.accent-primary}", text: "#FFFFFF", height: 52, radius: "{rounded.control}"}
  secondary-action: {fill: "#FFFFFF", text: "{colors.text-primary}", border: "{colors.text-primary}", height: 48, radius: "{rounded.control}"}
  primary-card: {fill: "#FFFFFF", radius: "{rounded.card}", imagery: "large cover photograph"}
  navigation: {fill: "#FFFFFF", active: "{colors.accent-primary}", inactive: "{colors.text-secondary}", divider: "{colors.divider}"}
  search-pill: {fill: "#FFFFFF", radius: "{rounded.pill}", shadow: "soft ambient"}
  bottom-sheet: {fill: "#FFFFFF", radius: "{rounded.sheet}", overlay: "dim neutral scrim"}
---

# Overview

Airbnb lets real place and experience photography carry the screen while interface chrome stays bright, restrained, and highly rounded. White occupies most of the viewport, black type creates a crisp hierarchy, and coral-pink appears in focused actions and selected navigation. Search pills, photo cards, floating controls, and large bottom sheets distinguish it from a generic SwiftUI list.

# Non-negotiable visual invariants

- Keep white as the dominant canvas; gray is secondary surface, shadow, divider, or modal scrim.
- Let large real photography form the primary non-white mass on browse and detail screens.
- Reserve coral-pink for primary actions, saved emphasis, and selected traveler navigation.
- Use bold black titles with compact gray supporting metadata and clear scale contrast.
- Give cards, search surfaces, controls, and sheets generous but role-specific corner radii.
- Keep task-critical primary actions large and bottom-owned, with adequate price or context beside them when present.
- Present modal content as a white sheet with large rounded top corners over a dimmed background.
- Use thin, minimal monochrome line icons except where selection or action requires coral emphasis.

# Color and surfaces

The base surface is clean white extending through safe areas. Very pale neutral gray separates secondary controls, disabled areas, search backdrops, and grouped regions; hairline gray divides flat rows. Near-black drives headings, prices, and selected controls, while medium gray supports dates, explanations, and metadata. Coral-pink is a small but high-contrast action color, not a section background. Destructive actions use a distinct dark red with an explicit label. Success may use a restrained green status accent, but it does not become a large decorative field. Default iOS blue or a permanent grouped-gray canvas would visibly break the reference.

# Typography

Typography is a friendly neutral sans with bold, compact titles and quieter regular body copy. Use the licensed brand face when available; otherwise SF Pro Display and SF Pro Text are the iOS-safe substitutes. Headings are sentence case, usually left aligned, and make a clear jump from metadata. Prices, dates, and selected values use semibold weight rather than oversized display type. Long descriptive content is divided by strong section headings and fine rules. Under Dynamic Type, supporting metadata wraps before the primary title, price, or action loses its role; fixed bottom actions may stack their context above the button when one horizontal row no longer fits.

# Screen composition

Typical content uses 16–20 point horizontal insets, 12–16 point gaps inside repeated units, and about 24–32 points between major sections. The top may hold a floating search pill, a bold page title, or edge-to-edge photography. The middle is a vertical stream of image cards, flat content sections, or rounded form/search modules. The bottom contains either a visually light tab bar or a fixed white action surface above the home indicator.

The observed visual archetypes are:

- Photography browse: prominent search surface and compact category row above large rounded photo cards with a tight title, metadata, rating, and value cluster.
- Immersive detail: a wide photo header followed by a white editorial stack of title, facts, sections, dividers, and a bottom-owned primary action.
- Layered search: several large white rounded modules stacked over a pale or dimmed background, with pills, segmented choices, calendar grids, and one clear confirmation action.
- Map results: map as the full visual field with high-contrast rounded value pins and one lifted photo preview card near the bottom.
- Utility list: large title followed by spacious flat rows or lightly grouped cards with line icons, labels, secondary text, and chevrons.
- Choice/onboarding: one large prompt above a small set of broad rounded options, sometimes supported by compact pictorial marks, with strong bottom progress/action treatment.
- Modal confirmation: concise content inside a full-width bottom sheet, with a close control, explicit destructive or confirm action, and dimmed context behind it.

Long content scrolls vertically. Photo cards remain wide enough for recognizable subjects; fixed tabs and actions reserve bottom inset rather than covering the final section.

# Navigation appearance

The persistent tab bar is white with a fine top separation, compact line icons, small labels, gray inactive states, and coral selected emphasis. Top navigation is visually sparse: black back/close controls sit in small circular or plain touch targets over white or photography. Search appears as a lifted pill rather than a standard navigation search field. Sheets use large rounded top corners and a top-edge close control. Navigation appearance may shift between content contexts, but this document does not prescribe destinations or product hierarchy.

# Components

Primary actions are coral-filled rounded rectangles about 52 points high with white semibold labels; task-critical actions sit in a fixed white bottom region. Secondary actions are white or pale-gray with black text and, when needed, a thin dark border. Disabled actions keep the same geometry with reduced contrast.

Listing cards lead with a large rounded cover photograph and keep title, metadata, rating, and value in a compact block below it. Search controls use elevated white pills or broad bordered rounded modules. Selection rows combine black labels, gray supporting text, and radio, segmented, or check treatments. Map values appear in small white shadowed pills. Bottom sheets are full-width, white, and heavily rounded at the top, with concise internal spacing. Icon-only controls and overlays retain at least 44-point targets.

# Imagery and icons

Real accommodation, destination, experience, and service photography is the strongest visual carrier. Browse cards use landscape or near-square cover crops with rounded corners; detail screens allow broader, more immersive crops. Important rooms, people, and landmarks must remain visible within the crop. Small authored category or onboarding pictograms act as labels, not as the primary screen mass or a broad illustration system. Functional icons are thin, black, and visually quiet. Photography is compositionally mandatory: temporary assets must preserve the eventual image area, crop, subject scale, and color weight.

# States

Observed loading states keep the white composition and use restrained progress dots or neutral placeholders. Selected tabs, saved controls, and primary choices gain coral or dark emphasis without changing layout. Disabled bottom actions remain in place with muted fill. Sparse or reduced-content states preserve generous white space rather than adding decorative filler. Booking and identity states use explicit text panels; payment may hand off to a native Apple Pay sheet. Destructive confirmation appears in a rounded bottom sheet over a dim scrim. No separate dark appearance was established in the sampled screens.

# iOS adaptation

Extend white, photography, or modal scrims through the appropriate safe areas, while keeping text and card content within 16–20 point compact-width insets. Use lazy vertical stacks or grids for long photography feeds and vertical scroll containers for detail, settings, and search modules. Fixed tab bars and action regions must add content inset for the home indicator. Lift or scroll focused inputs above the keyboard; native payment and permission surfaces may interrupt, then return to the same visual context. Maintain 44-point targets for hearts, close buttons, map pins, selectors, and tabs. VoiceOver order follows title, image description, core metadata, then action. Dynamic Type may stack value/action rows and widen cards to one column before imagery becomes unrecognizable.

# Anti-generic checklist

- Do not replace the photography-led composition with a stack of uniform text cards.
- Do not use default blue tint; coral is the focused action and selection color.
- Do not render the tab bar as an unstyled `TabView` with stock selected treatment.
- Do not shrink, omit, or obscure the primary property/experience photography.
- Do not turn coral into a full-screen gradient or large decorative background.
- Do not use heavy borders and shadows on every row; most utility content remains flat.
- Do not collapse search pills, photo cards, sheets, circular controls, and buttons to one radius.
- Do not add decorative copy or generic illustration where photography or sparse whitespace carries the screen.

</design-context>
