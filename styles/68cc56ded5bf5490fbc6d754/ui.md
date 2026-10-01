<design-context>
---
version: 1
platform: iOS
name: VK-Calls-design-analysis
description: "A dark-first calling utility built from near-black canvases, charcoal tiles and sheets, white system typography, VK-blue selected states, full-width light primary buttons, and sparse circular call controls over blurred video or participant surfaces."
colors:
  canvas: "#0C0D0E"
  surface-primary: "#191A1C"
  surface-secondary: "#292A2D"
  accent-primary: "#4C8FEF"
  accent-secondary: "#4FCB89"
  text-primary: "#F4F5F6"
  text-secondary: "#9A9CA1"
  divider: "#34363A"
  destructive: "#F05258"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 42}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 23}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 16
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "#F4F5F6", foreground: "#0C0D0E", shape: "rounded-rectangle"}
  secondary-action: {fill: "#292A2D", foreground: "#F4F5F6", shape: "circle-or-tile"}
  primary-card: {fill: "#191A1C", foreground: "#F4F5F6", shape: "rounded-tile"}
  navigation: {fill: "#0C0D0E", inactive: "#66686D", selected: "#4C8FEF"}
---

# Overview

VK Calls uses a nearly continuous dark shell across onboarding, lists, settings, sheets, and call tools. Near-black canvases and charcoal components keep the interface operational, while white type, a small amount of VK blue, green scheduling emphasis, and uniquely red hang-up controls establish hierarchy. During calls, participant video, blurred imagery, or a subdued room field becomes the primary mass, with a compact circular control dock held to the safe edge.

# Non-negotiable visual invariants

- Near-black is the baseline full-screen canvas across ordinary screens; charcoal provides restrained tonal separation for tiles, rows, fields, and sheets.
- Primary non-destructive actions are usually wide light or white rounded rectangles with dark labels, not blue-filled default buttons.
- VK blue is concentrated in selected navigation, switches, icons, and key emphasis; green and red remain semantically distinct.
- Call surfaces preserve a bottom dock of large circular controls, with the hang-up control uniquely red.
- Navigation follows compact iOS geometry: centered titles, back chevrons, close controls, drag handles, bottom sheets, and native alerts in dark appearance.
- Lists use sparse separators, leading labels or avatars, and trailing chevrons, values, radios, or switches without elevated white cards.
- Empty states use one monochrome line icon and short centered copy, leaving most of the dark field untouched.
- Product screenshots, avatars, or participant media appear as contained functional imagery rather than decorative illustration.

# Color and surfaces

Near-black fills the viewport and extends through safe areas. Charcoal surfaces create a shallow hierarchy: slightly lighter tiles, fields, sheets, control circles, and list groups remain clearly within the same dark family. Off-white is used for primary titles and labels, medium gray for helper copy and inactive controls, and subtle dark dividers for list rhythm. VK blue marks selection, switches, focused actions, and active icons. Green marks a distinct positive or scheduled action; red is reserved for ending, deleting, or destructive outcomes. Occasional violet or blue promotional panels remain local. Light generic canvases, blue page washes, gradients across the shell, or glass-heavy panels would break the reference.

# Typography

Typography is SF Pro-like and deliberately plain: bold 28–36-point onboarding or empty-state titles, semibold 20-point section or navigation headings, 15–17-point control and contact labels, and compact gray metadata. Text is predominantly left aligned in lists and centered in empty or permission compositions. Call controls use short verb labels beneath or inside simple glyphs. There is no decorative display face. Dynamic Type should increase row and sheet height, wrap helper copy, and preserve the title-label-caption contrast; control docks may retain compact labels while VoiceOver exposes their complete meaning.

# Screen composition

Onboarding archetypes place a small mark or action near the top safe area, a centered phone-frame product screenshot through the middle, pager dots below it, and two full-width bottom actions above the home indicator. Home and empty archetypes use one or more wide rounded action tiles near the top, a large open center with a monochrome empty-state symbol, and a dark icon-and-label bar along the bottom. List and settings archetypes use a compact centered title, continuous rows, sparse separators, and no large decorative header.

Call archetypes give most of the screen to video, avatar, blur, or a restrained participant field. Status and participant information occupy safe upper edges, while circular mute, camera, route, reaction, and hang-up controls sit in a stable lower dock. Tool pickers, participant lists, reactions, chat, recording options, and settings appear as dark bottom sheets with rounded upper corners and drag handles. Keyboard and native modal overlays consume their expected system regions without creating additional cards.

# Navigation appearance

The application shell uses a dark bottom tab bar with evenly spaced outline icons and small labels; inactive items are muted gray and the selected item gains blue or white emphasis. Top navigation uses centered white titles, iOS back chevrons, and compact close controls. Sheets use dark charcoal fill, a subtle drag handle, and large top corners. Native alerts, broadcast overlays, and permission dialogs retain iOS geometry. The call surface visually separates from the application bar and relies on its own lower circular control dock.

# Components

The primary action is a full-width light rounded rectangle with dark semibold text. Secondary actions use charcoal rounded rectangles, compact pills, or circular icon controls. Home action tiles are rounded squares or short rectangles with a colored icon or fill and brief label. Call controls are evenly sized dark or light circles with monochrome glyphs; active states may invert or gain blue, while hang-up is solid red. List rows use clear leading text or circular avatar, optional gray subtitle, and trailing value, chevron, radio, or switch. Search and text fields use dark graphite fills with subtle borders or tonal contrast. Bottom sheets group rows vertically without nested cards.

# Imagery and icons

Onboarding product screenshots in a phone frame, real avatars, participant video, and blurred call imagery are functional and compositionally important. Phone previews use contained scaling; video uses face-aware `cover`; avatars remain circular. Most icons are thin, familiar monochrome glyphs whose contrast changes by selection. A small number of promotional or mode-specific illustrated assets appears in the sampled screens, but their recurrence is insufficient to define a reusable authored illustration system. Do not replace product previews or participant media with generated decorative art, and do not extrapolate the isolated promo drawings into ordinary empty or settings screens.

# States

Observed states include onboarding pages, native microphone/camera/notification permissions, dark empty and populated call surfaces, join and schedule sheets, active and waiting calls, participant lists, muted or camera-off controls, recording and broadcast modals, filter and reaction pickers, chat with keyboard and action sheets, selected radios and switches, blocked or empty lists, long legal text, and feedback forms. Dark canvas, white hierarchy, blue selection, rounded sheets, and native geometry remain consistent. Active call controls change locally; destructive actions remain red; disabled or secondary content recedes to gray.

# iOS adaptation

Extend the dark canvas through safe areas and keep bottom bars, call docks, and sheet actions above the home indicator. Use scroll containers for lists, settings, chat, legal text, and long sheets; participant video or call canvas should remain full bleed within its region. Keep all tile, row, tab, switch, and circular call targets at least 44 points. On compact widths, preserve the primary full-width action and essential call controls, moving secondary tools into a sheet before shrinking the dock. Dynamic Type may expand rows and sheets. VoiceOver order should announce call status and participant, then primary controls, with muted/camera/destructive state explicit rather than color-only. Native permission and broadcast transitions should remain system-owned. The sampled interface is dark-first; do not introduce light list screens from default UIKit or SwiftUI appearance.

# Anti-generic checklist

- Do not expose white default `Form`, alert, search, or list surfaces inside the dark shell.
- Do not make every primary action a blue-filled button; preserve the wide light action hierarchy.
- Do not use an unstyled `TabView`; retain dark fill, muted icons, compact labels, and blue/white selection.
- Do not reuse red for recording, reactions, or ordinary selection; keep it destructive and hang-up specific.
- Do not replace the circular call dock with a generic toolbar or small text buttons.
- Do not wrap every list group in an elevated card or add ornamental shadows and gradients.
- Do not fill empty states with dense illustration, marketing copy, or unrelated actions.
- Do not omit participant media, avatars, or onboarding product screenshots when they carry the composition.

</design-context>
