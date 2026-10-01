<design-context>
---
version: 1
platform: iOS
name: ChatGPT-design-analysis
description: "A sparse native-iOS conversational workspace with white and pale-gray canvases, black system typography and actions, a persistent rounded bottom composer, compact monochrome icon controls, and content-driven color confined to generated media, avatars, and the soft blue voice orb."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F3F3"
  accent-primary: "#111111"
  accent-secondary: "#6E6E73"
  text-primary: "#111111"
  text-secondary: "#6F6F73"
  divider: "#E6E6E6"
  destructive: "#D84A4A"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 24}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 10
rounded:
  control: 16
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#111111", foreground: "#FFFFFF", shape: "rounded-rectangle-or-circle"}
  secondary-action: {fill: "#F3F3F3", foreground: "#111111", shape: "pill-or-icon"}
  primary-card: {fill: "#FFFFFF", foreground: "#111111", shape: "content-dependent"}
  navigation: {fill: "#FFFFFF", foreground: "#111111", iconStyle: "small-monochrome-line"}
---

# Overview

ChatGPT is visually defined by a quiet conversation canvas and a persistent composer rather than a decorative shell. White and very pale gray fill most screens; black text, black primary controls, restrained gray grouping, and small line icons create the hierarchy. Long-form responses, user prompts, generated images, external avatars, or voice visualization are allowed to become the main content mass, while surrounding UI remains almost monochrome and native to iOS.

# Non-negotiable visual invariants

- White or very pale gray occupies the viewport; black is the recurring primary action and text color rather than default iOS blue.
- Conversation screens preserve a wide, mostly unframed reading column and a persistent rounded composer above the bottom safe area.
- The composer combines a leading circular add control, open text region, compact microphone, and a black circular send or voice control.
- Icons are small monochrome line glyphs with generous touch targets and little surrounding chrome.
- State feedback is lightweight and local: toast, inline progress, contextual menu, or rounded bottom sheet rather than a new dashboard.
- Secondary and account screens use native grouped-list geometry, compact chevrons, switches, and destructive rows.
- Strong color belongs to generated or attached content, external avatars, widgets, or the blue voice orb; it does not decorate the application background.
- Sheets preserve large top corners, a subtle grab handle, and visible dimmed context beneath.

# Color and surfaces

White is the dominant conversation, library, marketplace, onboarding, and settings surface. Very pale gray distinguishes the composer, prompt chips, grouped rows, selected attachments, and some user-content regions. Black carries headings, body text, primary buttons, send/voice controls, and important icons. Medium gray carries placeholders, timestamps, metadata, inactive options, and separators. Native green appears in enabled switches and red in destructive account or confirmation actions. Saturated media, avatars, home-screen widgets, and the soft blue voice visualization remain isolated content elements. Default blue CTA styling, colorful gradients, tinted chat backgrounds, or glass-heavy cards would break the observed shell.

# Typography

Typography is SF Pro-like and content-first. Onboarding and settings use large bold titles; conversation uses regular 17-point-class body text with comfortable line height; section and list titles use semibold weight; metadata and helper copy are smaller gray text. User and assistant content avoid ornamental display styling. Button and chip labels remain compact and medium or semibold. Under Dynamic Type, messages, settings rows, and sheet content should grow and wrap vertically while the composer expands to multiple lines; title, body, and caption roles must remain visibly distinct.

# Screen composition

Empty conversation archetypes use a compact top navigation row, a large open center with minimal prompt or loading content, and the rounded composer fixed at the bottom. Populated conversations become a continuous vertical scroll of text and media with generous horizontal insets and minimal message framing; the composer remains visually separated only by its pale rounded field. Mode or attachment chips appear directly above or within this bottom region and use compact removable pills.

Onboarding and subscription archetypes use centered or upper-centered titles, concise supporting copy, and one or two wide black actions near the lower safe area. Settings and marketplace archetypes use compact top bars and continuous grouped rows, sometimes with circular avatars. Media results occupy a large contained rectangle in the conversation and may open into a full-screen review. Tool pickers, model menus, attachment choices, confirmations, and account actions appear as contextual menus or rounded bottom sheets over dimmed content. Native share, photo, file, subscription, permission, keyboard, and widget-gallery surfaces retain their system proportions.

# Navigation appearance

Top navigation is compact and nearly borderless: a small hamburger or back chevron at the leading edge, a short centered title, and edit, search, close, or overflow icons at the trailing edge. Selected model or mode controls appear as compact text-and-chevron elements, not large tabs. Bottom sheets use white surfaces, large top corners, and a subtle handle. Grouped settings rows use native chevrons, toggles, and section spacing. There is no persistent bottom tab bar in the sampled primary application screens.

# Components

The composer is a wide pale-gray rounded rectangle with a circular add button, flexible multiline input, compact microphone, and black circular send/voice/stop state. Mode chips are small pale pills with a line icon, short label, and removable close glyph. Primary actions are black rounded rectangles or black circles with white content; secondary actions are text, outline icons, or pale pills. Conversation actions such as copy, listen, feedback, and share use small monochrome glyphs without large containers. Settings use grouped white or pale rows, fine dividers, chevrons, green switches, and red destructive labels. Marketplace rows combine circular avatar, title, short gray description, and restrained disclosure.

# Imagery and icons

Generated images, user attachments, GPT avatars, product marks, and external content are treated as content, not shell decoration. Generated images are large enough to inspect, retain their natural crop, and may expand full screen; their color must not leak into the surrounding UI. The voice surface uses a large soft blue abstract orb as a singular focal object on an otherwise restrained field. The knot mark, Plus sparkle, tutorial assets, and widget previews are isolated brand or product elements. They do not establish a repeatable authored illustration system across states, so do not extrapolate them into decorative scenes or characters.

# States

Observed states include system permission and authentication surfaces, loading, empty home, typed prompt, long response, copy and feedback toasts, audio playback, share sheet, attachment menu, photo and file pickers, generated-image progress and result, removable mode chips, subscription confirmation, empty library, marketplace lists, settings toggles, empty memory, and destructive account confirmations. White/pale surfaces, black hierarchy, compact icons, rounded composer, and native sheets remain stable. Progress is expressed inline or with restrained spinners and labels; destructive choices switch to red without recoloring the full screen.

# iOS adaptation

Keep the conversation in a vertical scroll container and pin or safe-area-inset the composer above the home indicator and keyboard. Let the composer grow for multiline input without covering the latest content. Preserve at least 44-point touch areas around small glyphs, chips, sheet rows, and circular controls. On compact widths, keep a single readable content column and allow sheets, media, and grouped rows to span the available width inside 16-point-class insets. VoiceOver order should follow top controls, conversation in reading order, active state feedback, then composer controls; generated media and mode state need explicit labels. Native permission, file, photo, share, subscription, and keyboard transitions should remain system-owned. The sampled shell is light-first; dark system overlays do not demonstrate a full dark appearance.

# Anti-generic checklist

- Do not turn responses into a stack of elevated white cards or speech bubbles with heavy borders.
- Do not replace black primary actions with default blue tint.
- Do not crowd the composer with always-visible labels, large tool buttons, or multiple competing rows.
- Do not add a persistent `TabView`, colorful navigation bar, or decorative chat background.
- Do not use generated images, avatars, the voice orb, or the Plus sparkle as general-purpose shell decoration.
- Do not apply one radius to composer, sheets, media, grouped rows, circles, and chips.
- Do not replace lightweight toasts and inline progress with full-screen status cards.
- Do not expose unstyled `Form` spacing when it breaks the compact grouped-list hierarchy.

</design-context>
