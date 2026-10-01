<design-context>
---
version: 1
platform: iOS
name: Burger-King-design-analysis
description: "A warm, high-density food interface built on cream fields, dark chocolate headers, chunky rounded type and cards, orange-red actions, dominant food photography, and vivid illustrated loyalty panels."
colors:
  canvas: "#FFF3E3"
  surface-primary: "#FFF9F0"
  surface-secondary: "#F2E1CF"
  accent-primary: "#F36D21"
  accent-secondary: "#D62316"
  text-primary: "#4B2118"
  text-secondary: "#7C675F"
  divider: "#E2CFBD"
  destructive: "#C92A2A"
typography:
  hero: {fontFamily: "SF Pro Rounded", fontSize: 38, fontWeight: 800, lineHeight: 41}
  title: {fontFamily: "SF Pro Rounded", fontSize: 30, fontWeight: 800, lineHeight: 34}
  section: {fontFamily: "SF Pro Rounded", fontSize: 21, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 14
  card: 22
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "{colors.accent-primary}", text: "#FFFFFF", height: 52, radius: "{rounded.control}"}
  secondary-action: {fill: "{colors.surface-secondary}", text: "{colors.text-primary}", height: 48, radius: "{rounded.control}"}
  primary-card: {fill: "{colors.surface-primary}", radius: "{rounded.card}", border: "none"}
  navigation: {fill: "{colors.canvas}", active: "{colors.text-primary}", inactive: "{colors.text-secondary}"}
  add-control: {fill: "{colors.accent-primary}", text: "#FFFFFF", shape: "circle"}
  promo-card: {fill: "saturated brand field", radius: "{rounded.card}", imagery: "authored illustration"}
---

# Overview

Burger King combines a warm cream environment with dense food commerce and a playful loyalty layer. Dark chocolate headers and text give the screens a strong branded frame; large food photography dominates product areas, while red, orange, yellow, and green appear as purposeful action or campaign masses. Chunky display type and rounded geometry keep even utilitarian forms recognizably branded.

# Non-negotiable visual invariants

- Keep cream as the dominant full-screen canvas instead of neutral white or system grouped gray.
- Use dark chocolate-brown for major headers, primary text, and navigation emphasis.
- Preserve the large scale and heavy rounded character of short headings.
- Let food photography occupy most of each product tile; text and controls remain secondary.
- Use orange circular add controls and orange-red accents locally, not as a full-screen wash.
- Build content from chunky rounded cards and sheets with warm surfaces and little visible border.
- Keep the bottom tab bar visually persistent on primary screens, with brown selected emphasis.
- Give loyalty and promotion modules large saturated color fields with authored brand illustration.

# Color and surfaces

The base is a warm cream field that extends through safe areas. Slightly lighter cream cards and deeper beige secondary controls layer on top without the cold contrast of standard iOS grouped surfaces. Dark chocolate-brown anchors top bars, headings, values, and selected navigation. Orange drives add and primary order actions; red supports promotional emphasis and destructive meaning only when context makes it clear. Green appears on successful payment or confirmation actions, not as a general brand color. Dividers are warm beige and subtle. Default iOS blue, pure white card stacks, and cool gray grouped backgrounds would visibly break the system.

# Typography

Short headings use a broad, heavy, rounded display character with tight line spacing; functional copy, prices, forms, and metadata use SF Pro Text. Use the shipped brand face when available and SF Pro Rounded Heavy as the iOS-safe substitute. Scale contrast is pronounced: page and campaign titles are substantially larger than item labels, while price and total values use strong weight and stay close to their subject. Avoid long uppercase runs. With Dynamic Type, body and metadata wrap first; headings may wrap to two lines, and transactional values must remain visually paired with their labels and actions.

# Screen composition

Most screens use 16-point side insets, 12-point internal gaps, and 24–32 points between major groups. A dark-brown top region or compact warm navigation bar establishes the upper edge; the middle is a scrollable cream content field; bottom navigation or a fixed total/action area occupies the lower safe area.

The observed visual archetypes are:

- Product browsing: dark header, horizontally scrolling rounded category chips, then a dense two-column grid of photography-heavy product cards with price and circular add control.
- Product focus: oversized food image above or beside a bold title/value cluster, followed by warm rounded choice groups and a strong bottom action.
- Transactional form: stacked cream or beige rounded sections for address, payment, items, and totals, ending in a wide high-contrast action above the home indicator.
- Loyalty and promotion: large saturated red, yellow, orange, or brown cards where bold copy and authored illustration share the visual mass, followed by paired utility cards or progress modules.
- Account and settings: chunky title, warm grouped rows, rounded leading icons or avatars, and restrained dividers rather than a default `Form`.
- Conversational support: cream message field with branded brown/orange controls and rounded message surfaces, maintaining the same warm palette.

Food grids and grouped forms scroll vertically. Fixed actions and tabs must reserve bottom inset so content and totals remain fully visible.

# Navigation appearance

Primary screens use a persistent bottom tab bar integrated with the cream field, with dark-brown icon/text emphasis for selection and quieter warm-gray inactive items. Top bars alternate between a strong dark-brown brand block and a compact cream bar with a custom back control; both use rounded, brand-weighted titles rather than default blue navigation. Focused product and checkout screens may replace tabs with a bottom-owned action. Sheets have large warm rounded top corners and a dim overlay. This defines appearance only, not destinations or flow structure.

# Components

Product cards are broad rounded cream surfaces whose upper majority is occupied by an isolated food image or close crop. The lower cluster contains a short semibold name, price/portion metadata, and an orange circular add control. Category selectors are compact rounded chips with filled selected treatment. Primary actions are wide orange or contextually green rounded rectangles about 52 points high, with bold high-contrast labels; secondary actions use beige fill or a brown outline.

Grouped rows sit inside warm rounded containers with chocolate text, small leading icons, quiet chevrons, and subtle warm dividers. Choice controls and quantity steppers inherit orange/brown emphasis. Promo and loyalty cards use much larger color masses and illustration than transactional cards. Pressed states deepen the existing fill; disabled states mute saturation and contrast without reverting to system gray. All targets remain at least 44 points.

# Imagery and icons

Food imagery is the primary visual mass on menu and product screens: use clean cutouts or tightly framed, appetizing photography with strong scale and uncluttered edges. Do not shrink food into small thumbnails inside text-heavy cards. Promotion and loyalty areas use authored illustration with crown, trophy, festive, and character motifs; these assets often occupy roughly one third to one half of their card. Icons are simple and rounded, colored brown or orange, and should not compete with food or campaign art. Both photography and promotional illustration are compositionally required; temporary assets must preserve crop, occupied area, and color weight.

# States

Selected category chips, tabs, and choices use a local warm fill or dark-brown emphasis while preserving geometry. Populated carts and forms retain the cream card language; totals gain weight and a bottom action. Successful payment or completion uses green as a focused CTA or status accent. Empty and inactive areas remain warm and branded rather than becoming default gray system screens. Modal address, payment, and choice states use large rounded sheets over a dim overlay. Error and destructive actions use red with explicit labels. No separate dark appearance was established in the sampled screens; keep the warm light composition unless the product specification requires another appearance.

# iOS adaptation

Extend cream or brown header fields through the relevant safe area and keep scrollable content inside 16-point compact-width insets. Use lazy grids for product collections and vertical scroll containers for long forms; reflow two columns to one when Dynamic Type or compact width makes card text/actions collide. Reserve bottom inset for tabs, totals, or primary actions, and lift focused inputs above the keyboard. System permission UI may remain native, then return to the branded warm surface. Keep 44-point targets, meaningful VoiceOver labels for product imagery and icon-only controls, and reading order from heading through product/options to total/action. On compact heights, reduce promotional height before compressing food imagery or the primary transaction action.

# Anti-generic checklist

- Do not replace the cream/brown field with white cards on a cool gray `Form` background.
- Do not use default blue tint, blue links, or an unstyled `NavigationStack` toolbar.
- Do not render the bottom navigation as a stock `TabView` without the warm palette and selected emphasis.
- Do not shrink or omit food photography in favor of text and SF Symbols.
- Do not substitute emoji, SF Symbols, or SwiftUI shapes for authored loyalty and campaign illustration.
- Do not flatten the heavy rounded heading hierarchy into standard system titles.
- Do not use one uniform radius for product cards, chips, sheets, circular add controls, and buttons.
- Do not spread green across ordinary controls or place campaign art behind prices, totals, or form labels.

</design-context>
