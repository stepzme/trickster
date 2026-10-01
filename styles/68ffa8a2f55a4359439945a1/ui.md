<design-context>
---
version: 1
platform: iOS
name: Teremok-design-analysis
description: "A white-first restaurant and loyalty interface where burgundy-red controls and active navigation meet warm peach reward cards, bold compact type, flat low-shadow surfaces, real food photography, and recurring hand-drawn pancake characters in red-yellow-cream brand scenes."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F5F5F6"
  accent-primary: "#B3132F"
  accent-secondary: "#E7A62A"
  text-primary: "#171719"
  text-secondary: "#747579"
  divider: "#E5E3E4"
  destructive: "#D83C49"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 12
  card: 16
  sheet: 26
  pill: 999
components:
  primary-action: {fill: "#B3132F", text: "#FFFFFF", height: 52, radius: 12}
  loyalty-card: {fill: "#F6C79F", text: "#171719", radius: 16, padding: 16}
  menu-card: {fill: "#FFFFFF", radius: 14, imageRatio: "1:1"}
  navigation: {fill: "#FFFFFF", selected: "#B3132F", unselected: "#85868A"}
---

# Overview

Teremok is a white-first restaurant interface that separates practical ordering from a warm illustrated loyalty layer. Burgundy red marks primary actions, active navigation, links, and strong brand identity; yellow is reserved for rewards and attention. Functional screens use flat white surfaces, thin gray dividers, low-shadow rounded cards, and bold compact type. Real food photography dominates menus, while hand-drawn pancake and food characters recur across onboarding, loyalty, coupons, promotions, achievements, status, and help.

# Non-negotiable visual invariants

- Keep functional screens predominantly white, using thin gray dividers and flat low-shadow rounded surfaces rather than a heavy card stack.
- Reserve burgundy red for primary actions, active navigation, important links, selected states, and direct brand identity.
- Use yellow or warm wheat only for reward, achievement, coupon, or emphasis moments, not as a second general action color.
- Preserve recurring hand-drawn pancake and food-character scenes as the brand layer across loyalty, promotion, achievement, status, and onboarding contexts.
- Use real food photography for menu and product cards; never replace purchasable food with mascot art.
- Keep the fixed five-item bottom bar visually light, with thin line icons and burgundy selected state.
- Use sticky burgundy bottom actions on ordering and form surfaces, with plain vertical content spacing above them.
- Present loyalty and progress in warm peach cards with badges, concise numeric emphasis, and more breathing room than dense menu grids.

# Color and surfaces

White is the full-screen canvas and primary surface. Light gray (`#F5F5F6`) supports fields, inactive controls, and secondary groups, while thin gray dividers separate rows. Burgundy red (`#B3132F`) carries buttons, active navigation, links, outlines, checks, and cart actions. Yellow or warm amber marks rewards, achievements, coupons, and attention. Warm peach (`#F6C79F`) creates the large loyalty card and other friendly identity moments. Primary text is near-black; secondary labels are medium gray.

Red is both a brand color and potentially destructive, so deletion or error meaning must be explicit in icon and copy rather than color alone. Green appears only for genuine positive order progress or confirmation. Large color fields belong to loyalty, promotions, or authored illustration banners; checkout and settings remain mostly white. Default iOS blue, bright generic green purchase buttons, heavy gray grouped backgrounds, or random pastel cards would break the system.

# Typography

Page and campaign titles use bold SF Pro Display at roughly 28–34 points. Section headings are around 20–22 points, product names and loyalty labels 15–17 points, body and form text 14–15 points, and navigation or metadata 10–12 points. Buttons sometimes use compact bold or uppercase labels. Prices, bonus totals, order numbers, and reward progress use clear bold numerals with tabular figures where alignment matters.

Use SF Pro Display and SF Pro Text for the interface. Handwritten or hand-drawn lettering belongs only inside approved illustration assets, never in functional labels, price data, forms, or navigation. Dynamic Type should expand rows, product cards, and sheets, let names and restaurant context wrap, and keep total/action hierarchy intact. Copy should communicate product, price, state, condition, or action without adding mood-setting restaurant prose.

# Screen composition

Standard horizontal gutters are about 16 points. A representative home composition uses a compact centered title and profile control, a large peach loyalty card, a coupon section with illustrated character, promotional tiles, an achievement strip, and a fixed five-item bottom bar. Menu and ordering screens are denser: horizontal category labels lead into a two-column food grid or vertical form, with a sticky burgundy action near the lower safe area.

Observed visual archetypes include:

- **Loyalty-led home:** compact header, large warm-peach card with level or value, illustrated coupon and promotion blocks, achievement strip, then the light bottom navigation.
- **Menu or search:** top title/search and horizontal category tabs, followed by a two-column photo-led product grid with name, price, and concise add control.
- **Product or combo choice:** food photography and item title lead into vertically stacked options, ingredient checkboxes, quantity or choice controls, and a lower red action.
- **Cart and checkout:** plain white one-column form with product rows, totals, payment or restaurant choices, and a fixed full-width burgundy CTA.
- **Map or restaurant selection:** map or structured list occupies the main field, with compact search/filter controls and a white sheet or selected-row treatment.
- **Loyalty, coupon, or achievement:** warm peach/yellow/red authored art, badge-like progress, large numeric emphasis, and more negative space than ordering surfaces.
- **Order status or completion:** white vertical timeline or summary, concise state emphasis, occasional character illustration, and a focused rating or confirmation modal.
- **Help, profile, or feedback:** simple white row lists and forms with thin dividers, red links/actions, and native-feeling attachment or choice sheets.

Long functional screens scroll vertically. Promotional and category rails may scroll horizontally. Sticky actions and the bottom bar must reserve the home-indicator area rather than cover the final rows.

# Navigation appearance

The persistent bottom bar is white and full width, with five thin line icons and compact labels. Inactive items are gray; the selected icon and label become burgundy red. It is flat and lightweight, not a translucent floating pill. This appearance can be adapted, but the source application's destination structure must not be copied.

Top bars use a centered or left-aligned bold title, ordinary back chevron, and compact profile, search, or utility control. Category tabs use simple text with red selected emphasis. Modals and bottom sheets use a dimmed backdrop, white fill, large rounded corners, direct action rows, and a compact close or back control. System attachment sheets can remain native. Avoid default blue navigation tint and unstyled tab icons.

# Components

- **Primary action:** approximately 52 points high, full width or nearly full width, burgundy fill, 12-point radius, centered semibold white label, and a deeper-red pressed state. Disabled state becomes neutral gray.
- **Loyalty card:** large warm-peach rounded surface with 16-point padding, bold numeric value or level, concise support text, badge or progress treatment, and optional authored character art.
- **Menu card:** flat white 14-point-radius card led by square food photography, followed by compact product name, price, and a red add or choice control. Keep grid baselines aligned.
- **Category tab:** short text label in a horizontal row, with gray inactive text and burgundy selected text or underline.
- **Choice or ingredient row:** white vertical row with clear label, optional price, and trailing checkbox/radio using red selected emphasis; dividers are thin.
- **Order row:** small food thumbnail or status mark, concise product/state text, aligned quantity and price, and minimal surrounding chrome.
- **Sticky purchase action:** full-width burgundy control above the home indicator, often paired with total or cart state, separated from content by white space or a faint divider.
- **Modal card or sheet:** white surface with about 26-point radius over a dimmed backdrop, concise title, direct options or rating control, and one clearly prioritized red action.

# Imagery and icons

Use real, appetizing food photography for menu items, combos, and purchasable products. Crops are square or compact landscape, bright, and close enough to make ingredients legible. Do not substitute mascots, stock food icons, or generic placeholders when product imagery is compositionally expected. Maps remain functional and should preserve labels and locations.

The separate hand-drawn illustration system uses pancake and food characters, badges, keys, handwritten brand lettering, and warm red-yellow-cream scenes. It appears in onboarding, coupons, promotions, achievements, loyalty, order status, and help or identity moments; follow `illustrations.md`. Operational icons remain thin and simple, turning burgundy when active. Do not omit either food photography or authored illustration while waiting for final assets when its role is visible in the composition.

# States

Observed states include login and registration, onboarding, populated loyalty home, achievement and bonus-card detail, QR scanner, promotion and news content, map/restaurant choice, coupon and order entry, search, combo selection, ingredient choices, cart and payment forms, loading, changing order status, completed order detail, rating modal, newly earned achievement, profile, help, feedback form, and native attachment sheet. White functional surfaces, burgundy actions, compact bold type, thin dividers, and the split between food photography and character illustration remain consistent.

Progress can use green only when meaning is genuinely positive. Reward or achievement state uses yellow/peach rather than generic success green. Modal states preserve context under a dim layer. Do not invent dark-mode, permission, error, or empty-state treatments not visible in the sample.

# iOS adaptation

Keep white continuous through the status and bottom safe areas. Use vertical scrolling for home, order, help, and feedback; lazy two-column grids for menus; horizontal scroll for category and promotion rails; and a dedicated map surface where needed. Keep the sticky burgundy action and tab bar above the home indicator. When the keyboard appears, move active fields and validation into view while preserving the final action and order total.

All navigation items, category labels, checkboxes, QR controls, add buttons, and compact icons require 44-point targets. VoiceOver should announce product name, price, options, quantity, reward value, status, and action in visible order; keep distinct controls separate. Dynamic Type should let product names, help rows, and form labels wrap, increasing card height or reducing grid columns before clipping content. On compact widths, preserve food-image legibility and 16-point margins. Only light appearance is observed; do not claim an independent dark theme.

# Anti-generic checklist

- Do not replace burgundy red with default iOS blue or use yellow as a universal primary action color.
- Do not turn functional screens into a dense set of floating shadow cards; retain the white canvas and thin dividers.
- Do not replace real food photography with mascot art, SF Symbols, emoji, or generic food icons.
- Do not omit the hand-drawn character layer from loyalty, coupon, achievement, and promotion compositions where it carries identity.
- Do not use handwritten lettering for prices, settings, form labels, navigation, or other functional UI.
- Do not ship an unstyled `TabView`, generic `Form`, default blue checks, or mixed icon families.
- Do not insert mascots into dense checkout fields merely as decoration.
- Do not add redundant or mood-setting copy that repeats product, loyalty, order, or restaurant context.

</design-context>
