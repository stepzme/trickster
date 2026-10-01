<design-context>
---
version: 1
platform: iOS
name: Messages-design-analysis
description: "A native iOS communication interface defined by white and grouped-gray system surfaces, large black list titles, Apple-blue actions and outgoing bubbles, gray incoming bubbles, compact centered chat headers, and a highly adaptive bottom composer."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F2F7"
  accent-primary: "#0A84FF"
  accent-secondary: "#34C759"
  text-primary: "#111114"
  text-secondary: "#777981"
  divider: "#E5E6E9"
  destructive: "#FF3B30"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 8
rounded:
  control: 10
  card: 16
  sheet: 20
  pill: 999
components:
  primary-action: {fill: "Apple blue", text: "white or blue label", shape: "contextual system control", minimumTarget: 44}
  secondary-action: {fill: "grouped light gray", text: "black or blue", border: "none", shape: "rounded rectangle"}
  primary-card: {fill: "conversation row or grouped settings section", radius: 0, padding: 16, divider: "one-pixel gray"}
  navigation: {fill: "white or translucent system chrome", selected: "Apple blue", inactive: "gray", title: "large leading or compact centered"}
---

# Overview

Messages is a native iOS communication system whose identity comes from spatial restraint and context-sensitive controls rather than custom cards. White conversation and chat surfaces, grouped light-gray settings, black SF typography, Apple-blue actions and outgoing bubbles, gray incoming bubbles, large circular avatars, and thin separators define the visual grammar.

The lower part of the viewport is unusually important. Depending on context it may contain a minimal composer, the keyboard, an app strip, media picker, voice affordance, Digital Touch canvas, action sheet, translation sheet, or location card. The design remains recognisably consistent by preserving native spacing, material, corner treatment, and blue selection across these variants.

# Non-negotiable visual invariants

- Conversation and chat canvases remain white with native translucent or white chrome; grouped settings may use `#F2F2F7` but do not become decorative card feeds.
- Apple blue identifies compose, links, back/actions, selection, and outgoing messages; incoming messages use neutral gray with black text.
- Message bubbles are content-sized, fully rounded, and directionally shaped with compact tails; they are not uniform full-width cards.
- List screens use a large bold leading title, while chat and modal screens use compact centered titles with blue edge actions.
- The composer is anchored immediately above the keyboard or home indicator and adapts without losing its rounded field, attachment/app access, and send affordance.
- Conversation rows align large circular avatars, primary identity/message text, trailing time/state, and thin separators in a sparse full-width list.
- Context menus, tapbacks, action sheets, bottom sheets, permission alerts, and share sheets retain native blur, dimming, and layered system appearance.
- Real content—media thumbnails, maps, Memoji, app cards, music, effects—remains inside message or service surfaces and is not replaced by decorative illustration.

# Color and surfaces

White is the dominant canvas and primary surface. System grouped gray `#F2F2F7` appears behind settings, contact details, service lists, sheets, and inactive controls. Thin dividers `#E5E6E9` separate full-width rows. Translucent blur and dim overlays establish modal depth without heavy shadows.

Apple blue `#0A84FF` is the main interactive and outgoing-message color. Gray incoming bubbles sit near the grouped background but remain distinct from the white conversation canvas. Black `#111114` carries primary copy; gray `#777981` carries timestamps, read receipts, previews, placeholders, and helper text. Green is reserved for enabled system toggles or location-related confirmation; red marks deletion and destructive action. These are platform-semantic colors and should not be replaced with a product palette.

Dark inverse surfaces appear temporarily in effects, Digital Touch, media, or context presentation, but do not redefine the main light application shell.

# Typography

Use SF Pro throughout. Conversation-list titles are 28–34 points bold and left aligned. Compact navigation titles and contact names are around 17 points semibold and often centered. Message text is approximately 17 points regular with comfortable native line height. Conversation previews, timestamps, read receipts, attachment labels, service captions, and settings detail use 12–15 points in gray.

Hierarchy is deliberately familiar: identity outranks preview, message content outranks delivery metadata, and sheet titles outrank actions. Avoid introducing a branded display face. Text inside bubbles wraps naturally and determines bubble width up to a readable maximum. Dynamic Type should increase bubble, row, composer, and grouped-table height rather than reducing text or forcing a fixed layout.

# Screen composition

Conversation-list screens place the status area above a large leading title and trailing compose/edit action, followed by a rounded search field and full-width rows. Empty variants leave most of the middle white with one restrained system icon and concise explanation. Edit or pin mode keeps the same list geometry while adding selection or pinned-row treatment.

Chat screens use a compact top bar with back control, circular avatar, centered name/status, and optional utility action. The middle is an open white timeline with bubbles clustered by sender and abundant unused space when conversation density is low. The bottom holds a rounded composer and contextual controls; when the keyboard is visible, it directly attaches below the composer. Service, app, media, voice, Memoji, music, and Digital Touch modes expand this lower work area rather than creating unrelated full-screen visual systems.

New-message and contact-selection screens use centered modal titles, leading cancel, recipient token field, searchable contact rows, and alphabet index. Profile and contact-detail screens use large circular identity imagery above grouped settings tables on light gray. Location may use a map as the middle canvas with a white card or bottom sheet. Translation, delete, and contextual actions appear in rounded sheets or menus over blurred/dimmed chat content.

Horizontal insets commonly follow native 16-point rhythm; bubbles can approach an edge while preserving sender-side margins. List separators align to text rather than the avatar edge. Content must clear the home indicator, keyboard, and any presented sheet.

# Navigation appearance

List screens use large-title navigation with blue edit/compose actions. Chat headers are compact and centered, combining a circular avatar with name and optional status. Leading back chevrons and edge actions such as cancel, done, edit, or select remain blue and text- or icon-based rather than filled buttons.

Modal pages use centered compact titles and blue leading/trailing actions. Context menus float near selected content with rounded dark or light material. Bottom sheets use native rounded top corners and dimmed background. Product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Conversation rows are full-width white cells with circular avatar, bold or semibold name, one- or two-line gray preview, trailing timestamp or state, and a thin inset separator. Search uses a soft-gray rounded system field. Recipient entry combines a plain field with blue contact tokens and a compact add control.

Outgoing bubbles use blue fill and white body text; incoming bubbles use light gray and black text. Both have near-pill corners with a directional tail and content-driven width. Delivery/read labels are small and gray. Media keeps rounded masking matched to bubble placement. Reply markers, tapbacks, and reaction strips attach closely to the source message.

The composer is a rounded light field with attachment/app control, placeholder or entered text, and contextual send, voice, or effect affordance. App/services appear as a horizontal strip of rounded icon tiles. Profile and settings use grouped native rows, toggles, reorder handles, chevrons, and destructive red actions. Location cards combine map, pin, and compact action. Native action sheets, share sheets, permission alerts, and keyboards remain platform-authentic.

# Imagery and icons

The visual content comes from conversation data and system services: avatars, photos, video thumbnails, maps, app icons, Memoji, music artwork, reaction glyphs, Digital Touch strokes, and send effects. Maintain their native aspect ratios and place them inside rounded message/media frames or dedicated service areas. Profile avatars remain large circles.

Onboarding may use Apple/system collage artwork and effects may temporarily fill the screen, but the sampled product does not establish a separate reusable authored illustration language. Use platform-consistent symbols and actual content rather than inventing decorative art. If media is pending, preserve the message frame's size and aspect ratio with an honest placeholder.

# States

Observed list states include onboarding, empty and populated inbox, edit/pin selection, and new-message/contact picking. Chat states include idle, keyboard visible, entered text, sent and read, reply marker, tapback/context menu, translate sheet, deletion selection and confirmation, and undo-send feedback.

Composer/service states include send effects, app drawer, media grid, app/game preview, voice recording, Memoji, empty music, Digital Touch, and reordered service list. Profile and contact states include view, edit, avatar actions, toggles, and grouped detail. Location states include permission prompt, loading, picker/list, map card, and sent location. Across them, native blue, white/gray material, SF type, and compact corner treatment remain stable.

# iOS adaptation

Use native safe-area-aware navigation, lists, chat scrolling, sheets, keyboards, and context menus where possible. A chat timeline should maintain its bottom anchor as composer and keyboard heights change, preserve scroll position, and clear the home indicator. Large list titles collapse according to native navigation behavior. Media pickers, maps, and service panels must not cover the compact chat header.

All edge actions, avatar/header controls, rows, tapbacks, message menu targets, app tiles, composer buttons, and attachment controls require at least 44-point effective targets. VoiceOver order should follow header, messages chronologically, message metadata/actions, then composer. Bubble direction and read state need accessible labels independent of color or position.

Dynamic Type expands rows and bubbles and can move trailing metadata below preview text. On compact widths, cap bubble width while preserving a readable opposite-side margin; service strips scroll horizontally rather than shrinking icon labels. The observed style follows system appearance, so light/dark adaptation should use current semantic system colors rather than hard-coded inversion, while maintaining outgoing/incoming contrast.

# Anti-generic checklist

- Do not replace message bubbles with full-width generic cards or equal-width chat rows.
- Do not invent a branded accent that displaces Apple blue, system gray, green toggles, and destructive red.
- Do not style conversation lists as floating rounded cards with heavy shadows.
- Do not use a generic form field in place of the adaptive composer and its service, voice, effect, and keyboard states.
- Do not replace avatars, maps, media, Memoji, app cards, or message effects with decorative SF Symbols.
- Do not ignore native blur, dimming, action-sheet, share-sheet, permission-alert, and context-menu material.
- Do not apply one uniform radius to bubbles, media, search, app tiles, sheets, and avatars.
- Do not crowd sparse chat and empty-list states with mood copy or unrelated imagery.

</design-context>
