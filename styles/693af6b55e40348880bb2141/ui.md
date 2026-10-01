<design-context>
---
version: 1
platform: iOS
name: My-Rostelecom-design-analysis
description: "A light telecom account interface that alternates pale utility surfaces with large navy-to-violet account fields, using bold black type, thick rounded cards, violet selected navigation, vivid orange primary actions, and mixed campaign imagery."
colors:
  canvas: "#F6F6F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EFEEF2"
  accent-primary: "#8200FF"
  accent-secondary: "#FF5B20"
  text-primary: "#17181C"
  text-secondary: "#6D6E75"
  divider: "#E5E4E8"
  destructive: "#D94A55"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Display", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "orange-red", text: "white semibold", height: 52, radius: 12}
  account-card: {fill: "navy-to-violet gradient", text: "white", padding: 20, radius: 20}
  service-card: {fill: "white", padding: 16, radius: 20, shadow: "minimal or none"}
  navigation: {fill: "light", selected: "violet icon and label", unselected: "light gray"}
---

# Overview

My Rostelecom is a light utility interface organized around dramatic branded account fields. Pale gray and white dominate operational screens, while deep navy-to-violet gradients create large upper or card-sized masses around balances, services, and bonus contexts. Bold black headings, compact gray metadata, thick rounded groups, violet navigation, and orange-red primary actions make the hierarchy immediately visible. Campaign art and photography appear in bounded stories or promotions, but account cards, lists, and controls remain the structural core.

# Non-negotiable visual invariants

- Pale gray fills the full utility canvas, with thick white rounded cards used for grouped account and service information.
- Navy-to-violet gradients form large branded masses rather than small decorative accents.
- Violet identifies selected navigation, focused controls, links, and some confirmation states; orange-red is reserved for the strongest primary or payment action.
- Primary values and section titles use bold black type and clearly outrank compact gray explanatory text.
- The main bottom bar contains four icon-and-label items, with violet selected state and very light inactive items.
- Account and service groups use generous corner radii and internal padding but little visible shadow.
- Campaign imagery stays bounded to splash, story, bonus, or promotional regions and does not replace operational service structure.
- Modal sheets and dialogs preserve the same white, pale-gray, violet, and orange hierarchy over a dimmed background.

# Color and surfaces

The base canvas is a cool very light gray. White primary surfaces form service cards, list groups, fields, and modal content. Slightly darker gray separates disabled controls, secondary groups, and skeleton placeholders. Dividers are quiet and often replaced by internal spacing.

The signature branded field moves from deep navy into saturated violet and may occupy an entire upper stage or large card. Violet marks selection, navigation, focus, and secondary actions. Bright orange-red fills the strongest primary action and appears selectively in payment or commerce emphasis. White text is used on gradient and orange surfaces. Black carries primary facts; medium gray carries explanations, status detail, and inactive elements. Green is limited to positive or active-state confirmation; red is reserved for destructive or error states. Default iOS blue, heavy shadows, or indiscriminate mixing of orange and violet would break the reference.

# Typography

Use SF Pro Display for hero values, page titles, and section headings and SF Pro Text for controls, rows, and metadata. Hero values and prominent states sit around 28–34 points, page and section titles around 21–28, card titles around 16–18, and supporting text around 11–15. Titles are bold and direct; supporting copy is regular and visibly lighter in both scale and color.

Most operational content is left-aligned, while authentication, splash, and some modal states may center a title and action. Numeric balances, prices, and usage values use tabular figures where alignment matters. Secondary details wrap before primary values or action labels lose prominence. With Dynamic Type, card heights expand, two-column choice groups become one column, and long row labels wrap above their secondary value or disclosure control.

# Screen composition

Screens generally use 16-point horizontal insets, 12–16 points inside controls, and 24–32 points between major groups. Light canvas or branded gradient extends through the top safe area according to the screen archetype. Long account, service, offer, and settings surfaces scroll vertically; the four-item tab bar or a lower action reserves the bottom safe area.

Observed archetypes include:

- Account-dashboard composition: a large navy-violet field dominates the upper region, with white balance or service information and compact actions; stacked white cards continue below on pale gray.
- Service composition: bold black title, short muted context, then one-column white cards or a compact two-column offer arrangement with visible state, recurring value, and disclosure.
- Authentication and form composition: large black title over white or pale gray, rounded inputs, segmented or text selectors, and a wide orange or violet action; native keyboard may occupy the lower viewport.
- Bonus and promotional composition: gradient or white stage combines a large value, tabs or pills, and bounded campaign banners, photo cards, or story artwork.
- Utility-list composition: white grouped rows with line icons, compact labels, secondary gray values, toggles, and chevrons on a pale canvas.
- Modal composition: large-radius white bottom sheet or compact centered dialog over dimmed content, with strong title, concise body, and clearly separated confirmation actions.
- Empty or loading composition: the same light field and card geometry remain while content is replaced by skeleton blocks, compact status text, or one centered action.

# Navigation appearance

The primary bottom bar is light and contains four evenly spaced icon-and-label items. The selected item is vivid violet; inactive items are very light gray with lower contrast. Inner surfaces use simple leading back arrows, text cancel actions, or compact close icons, usually with a bold black title. Authentication and bonus contexts may use segmented text tabs with violet selection. Bottom sheets are white with large top corners and a small drag indicator when present; centered dialogs use rounded white panels and minimal shadow.

# Components

- Primary action: approximately 52 points tall, full or near-full width, orange-red fill, 12–14 point radius, and centered white semibold text. Pressing deepens the fill; disabled state becomes gray without changing size.
- Violet action: filled or outlined violet control used for connection, confirmation, focused selection, or secondary priority. It remains distinct from the orange primary action.
- Account card: navy-to-violet gradient, 18–24 point radius, 16–20 point padding, large white value, and smaller white or translucent metadata. Actions are compact and visually grouped below the value.
- Service card: white fill, 18–22 point radius, no heavy shadow, bold title or value, muted supporting details, optional status mark, and clear trailing disclosure or action.
- Input field: white or very light-gray fill, 12–14 point radius, black entry text, gray placeholder, and violet focus or selection treatment.
- Grouped row: line icon, black label, optional gray secondary value, and trailing toggle, chevron, or state. Active switches and selections use violet.
- Story or offer tile: rounded bounded image with saturated campaign art or photography, concise adjacent or overlaid type, and enough contrast to keep the focal subject clear.

# Imagery and icons

Imagery is mixed rather than governed by one standalone authored illustration system. The sample includes a large seasonal splash image, cartoon campaign characters, product and offer photography, story artwork, and graphic bonus banners. These assets may be visually expressive, but they do not establish one reusable medium, line language, or character system across the interface.

Keep campaign images bounded to large story, splash, promotion, or bonus regions with a clear focal subject. Product photography remains recognizable and appropriately cropped. Operational service icons are simple line symbols in violet, gray, or black and should not be replaced by arbitrary decorative artwork. When final imagery is unavailable, a temporary asset must preserve the observed placement, crop, palette intensity, and visual mass.

# States

Observed states include active and inactive services, selected tabs, focused and filled inputs, loading skeletons, disabled gray actions, green positive checks, empty and populated lists, confirmation dialogs, support chat input, story loading, and selected or unselected controls. These states retain the same pale canvas, white card geometry, bold black hierarchy, and violet/orange role separation.

Loading uses neutral gray placeholders within the existing card structure. Active or selected controls use violet; positive outcomes may add green. Destructive confirmation uses red sparingly. Modal focus dims the underlying screen rather than replacing it with a new palette. Native keyboards and payment surfaces appear as system transitions while the surrounding product chrome stays consistent.

# iOS adaptation

Extend the pale canvas or the branded gradient through the top safe area and reserve the lower inset for the tab bar or documented action. Use vertical scroll containers for dashboards, service lists, forms, bonuses, and settings. Bottom sheets and fixed actions must not obscure the final content row or keyboard-focused field.

All icon buttons, tabs, toggles, and compact row actions require at least 44-point targets. VoiceOver should announce the primary account or service value, its state, supporting metadata, and action in that order. Preserve native keyboard, chat, permission, and modal transitions. At compact widths or large Dynamic Type, stack two-column cards and wrap metadata before shrinking type. The observed system is light-first with bounded dark gradients; do not convert the whole product into a dark theme.

# Anti-generic checklist

- Do not replace the navy-to-violet account field with a small decorative gradient strip.
- Do not use default iOS blue where the reference requires violet selection or orange primary action.
- Do not mix violet and orange indiscriminately across every control.
- Do not add heavy shadows to every white card or turn all rows into separate floating panels.
- Do not ship an unstyled `TabView`; preserve the four-item bar and violet selected state.
- Do not force mixed campaign imagery into one invented illustration style.
- Do not give inputs, service cards, sheets, and pills one uniform radius.
- Do not let disabled, loading, and active states lose the documented contrast hierarchy.

</design-context>
