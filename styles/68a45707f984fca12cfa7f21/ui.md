<design-context>
---
version: 1
platform: iOS
name: Auto-ru-design-analysis
description: "A dense light automotive marketplace where white utility surfaces, bold black pricing, restrained red branding, pale-gray filter groups, persistent tab chrome, and large vehicle photography create a compact information-first hierarchy."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#F3F3F5"
  surface-secondary: "#E8E8EB"
  accent-primary: "#F20D0D"
  accent-secondary: "#31C55B"
  text-primary: "#111111"
  text-secondary: "#777777"
  divider: "#DEDEE2"
  destructive: "#E23535"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 17}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 12
  card: 14
  sheet: 26
  pill: 999
components:
  primary-action: {fill: "black", text: "white", height: 52, radius: 12}
  contact-action: {fill: "green", text: "white", height: 52, radius: 12}
  vehicle-card: {fill: "white", image: "landscape photography", radius: 12}
  filter-chip: {fill: "light gray", text: "near-black", radius: 999}
  navigation: {fill: "white", active: "near-black or red", inactive: "gray"}
---

# Overview

Auto.ru is a utilitarian light marketplace in which vehicle photography, model, price, year, and mileage carry the screen. Most surfaces are white, grouped controls are pale gray, and the interface stays dense without becoming ornamental. Red identifies the product, black advances high-priority tasks, and green is a narrow trust/contact accent. Its recognisable quality comes from compact automotive information and image-led listings rather than generic rounded dashboard cards.

# Non-negotiable visual invariants

- White occupies most list, form, and detail screens; pale-gray groups organize controls without becoming elevated cards.
- Landscape vehicle photography is the dominant content mass in results and the upper part of detail screens.
- Model and bold price outrank year, mileage, location, and other compact gray metadata.
- Primary progression uses wide black controls; red remains brand/selection emphasis and green is reserved for trust or contact.
- Search and results remain information-dense, using chips, concise rows, and narrow gaps rather than spacious editorial composition.
- Persistent navigation is a white bottom bar with thin glyphs and a restrained selected state aligned to the home-indicator safe area.
- Long filters and entry forms use one scanning column with grouped rows and a sticky bottom action.
- Sheets and menus use a dimmed backdrop, high light panel, and rounded upper corners rather than a separate decorative page.

# Color and surfaces

White is the canvas and largest visual mass. Light neutral gray groups filters, service panels, empty-state regions, and secondary controls; slightly darker gray handles disabled or nested areas. Dividers are thin and quiet. Near-black carries headings, prices, and primary actions, while medium gray carries specifications and supporting copy.

Red is a compact brand and selection signal rather than the universal CTA fill. Green identifies contact, positive trust, or availability-like information. Small blue or orange pictograms may distinguish service tools, but these colors do not take over the interface. Default blue links, colored gradients, dark panels, and strong shadows would visibly disrupt the reference.

# Typography

Use an SF Pro-compatible sans with an efficient, system-like character. Large screen titles are bold, but most of the product works with compact label and caption sizes. Within listings, vehicle identity and price are semibold or bold; year, mileage, location, and status are smaller gray rows. Technical facts remain aligned and scannable rather than displayed as oversized metrics.

Buttons use concise semibold labels. Avoid all-caps decoration. Dynamic Type should wrap headings and form explanations while preserving price prominence; secondary metadata can move to a new line before the card image or price is reduced. Do not allow every row to expand into the same oversized hierarchy.

# Screen composition

The marketplace archetype begins below a minimal safe-area top bar with search and utility controls, then uses a compact filter/chip region and either a two-column image grid or full-width listing rows. Cards sit close together with narrow gutters; photography occupies roughly the upper half of each tile and concise metadata follows directly below.

Detail pages place a large vehicle gallery at the top, then stack price, identity, facts, trust/report rows, and supporting sections on white. A sticky high-contrast action group stays above the home indicator. Filters and listing creation switch to a single column of pale grouped rows, selectors, toggles, and short explanations, with progress or title above and a full-width black CTA below.

Empty favorites or messages use generous white space and one small supportive graphic or concise panel, not a marketing hero. Menus rise as tall light sheets with rounded tops and compact service tiles or rows. All archetypes retain visible iOS status and bottom safe areas.

# Navigation appearance

The bottom bar is white, separated by a subtle line or tonal edge, and uses thin familiar glyphs with compact labels. Inactive items are gray; active treatment is darker or carries restrained red emphasis. Top bars are minimal: centered or left-aligned title, ordinary back/close controls, and small search, favorite, filter, or overflow icons.

Sheets have a dim scrim and large rounded upper corners. Selected chips or segmented options use filled pale surfaces, stronger text, a check, or red detail. This describes only the visual shell; product routes and section structure come from project requirements.

# Components

Vehicle cards combine a rounded landscape image with badge, bold price, model, and compact specifications. Full-width variants give imagery more horizontal weight; two-column variants tighten metadata without removing the price. Favorite controls float over photos as small high-contrast circles.

Filter chips are compact pale pills. Form rows use light grouped surfaces, concise values, chevrons, and iOS-like switches. Primary actions are black, wide, and approximately control-height; contact/trust actions may be green. Sticky bars use a white base above the home indicator. Menu service tiles use small colored square pictograms but keep labels and geometry quiet.

Observed states support disabled/enabled actions, selected regions and chips, toggles, unread badges, and empty content. Pressed controls should darken or slightly compress their existing fill rather than adopt a new accent.

# Imagery and icons

Real vehicle photography is essential. Use landscape aspect-fill crops that keep the vehicle recognisable and avoid cutting away condition-relevant areas. Detail galleries may become the largest block on screen; list images remain consistent enough for quick comparison. Do not recolor, stylize, or replace photographs with symbols while final assets are pending.

Icons are simple line or filled utility glyphs for search, filter, favorite, posting, messages, menu, close, and disclosure. Bright service pictograms are supporting navigation markers, not a standalone illustration system. Occasional key, flag, or pencil graphics in empty/intro states are isolated functional assets and should not be generalized into a character or scene language.

# States

Observed states include populated feeds, selected search parameters, result lists, vehicle detail, a listing-intro state, a phone/form step with selected value and toggles, empty favorites, empty and unread-message lists, and an open menu sheet. Across them, the white/gray surface hierarchy, compact black type, restrained red identity, and fixed bottom-safe-area treatment remain stable.

Empty states remove density but do not enlarge decorative copy or illustration into a dominant campaign. Form states preserve row geometry and sticky action placement as values, selections, or keyboard conditions change.

# iOS adaptation

Use vertical scrolling for feeds, detail, filters, and forms, with independently scrolling compact chip rows where needed. Keep the bottom bar and sticky actions clear of the home indicator and the top controls below the status area. On compact widths, retain two listing columns only while price and model remain readable; otherwise use full-width rows rather than shrinking photography beyond recognition.

Maintain 44-point hit targets around small icons and chips, logical VoiceOver order from image and identity through specifications to action, descriptive labels for icon-only controls, and keyboard avoidance for entry forms. Dynamic Type can increase row height and wrap secondary text. Preserve the observed light appearance; do not invent an unverified dark palette.

# Anti-generic checklist

- Do not replace vehicle photography and compact specifications with a generic white card dashboard.
- Do not use red as the fill for every primary action or default blue for links and selection.
- Do not apply large shadows, glass blur, or oversized radii to dense marketplace rows.
- Do not crop cars beyond recognition or omit the gallery footprint while assets are pending.
- Do not collapse explicit filters and form values into ambiguous icon-only controls.
- Do not use an unstyled `TabView`, default grouped `Form`, or arbitrary mixed-weight SF Symbols.
- Do not make empty-state artwork larger or more important than the actual marketplace content.
- Do not flatten price, model, specifications, and helper copy into nearly identical text sizes.

</design-context>
