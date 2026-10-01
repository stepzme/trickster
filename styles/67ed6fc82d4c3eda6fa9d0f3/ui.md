<design-context>
---
version: 1
platform: iOS
name: MAX-design-analysis
description: "A compact white messenger with black commitment controls, restrained blue interaction accents, circular identity imagery, a pale illustrated conversation field, and separate dark stages for calls, capture, and media review."

colors:
  brand-blue: "#1295F3"
  brand-violet: "#6A43F4"
  action: "#080809"
  on-action: "#FFFFFF"
  text-primary: "#171719"
  text-secondary: "#7C7C82"
  text-tertiary: "#B0B0B5"
  canvas: "#FFFFFF"
  grouped-canvas: "#F1F2F5"
  control-fill: "#F1F1F2"
  outgoing-message: "#E9F8FF"
  conversation-blue: "#A9DCF7"
  divider: "#ECECEF"
  call-stage: "#18191D"
  call-control: "#303238"
  positive: "#22B95C"
  destructive: "#D94C68"
  overlay: "#000000"

typography:
  screen-title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29, letterSpacing: -0.3}
  page-title: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 600, lineHeight: 23, letterSpacing: -0.1}
  nav-title: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 600, lineHeight: 22, letterSpacing: 0}
  row-title: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20, letterSpacing: 0}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20, letterSpacing: 0}
  message: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20, letterSpacing: 0}
  metadata: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16, letterSpacing: 0}
  caption: {fontFamily: "SF Pro Text", fontSize: 10, fontWeight: 400, lineHeight: 13, letterSpacing: 0}
  button: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 500, lineHeight: 20, letterSpacing: 0}

spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  section: 32

rounded:
  compact: 8
  field: 12
  bubble: 12
  card: 14
  sheet: 20
  action: 13
  pill: 999

components:
  primary-action: {height: 54, backgroundColor: "{colors.action}", textColor: "{colors.on-action}", typography: "{typography.button}", rounded: "{rounded.action}"}
  text-field: {height: 48, backgroundColor: "{colors.control-fill}", textColor: "{colors.text-primary}", typography: "{typography.body}", rounded: "{rounded.field}", padding: [0, 14]}
  chat-row: {minHeight: 56, backgroundColor: "{colors.canvas}", textColor: "{colors.text-primary}", typography: "{typography.body}", padding: [8, 12]}
  outgoing-bubble: {backgroundColor: "{colors.outgoing-message}", textColor: "{colors.text-primary}", typography: "{typography.message}", rounded: "{rounded.bubble}", padding: [8, 10]}
  incoming-bubble: {backgroundColor: "{colors.canvas}", textColor: "{colors.text-primary}", typography: "{typography.message}", rounded: "{rounded.bubble}", padding: [8, 10]}
  call-tray: {height: 60, backgroundColor: "{colors.call-control}", textColor: "{colors.on-action}", rounded: "{rounded.pill}", padding: [8, 10]}
  bottom-navigation: {height: 58, backgroundColor: "{colors.canvas}", selectedColor: "{colors.brand-blue}", unselectedColor: "{colors.text-secondary}"}
---

# Overview

MAX separates expressive identity from routine communication. Most working screens are compact white lists, plain forms, or grouped settings with blue reserved for active destinations, links, online status, selection, and message affordances. Black owns large commitment actions and circular creation controls. Conversations add a recognizable pale-blue illustrated field, while calls, camera, annotation, and media review move into near-black immersive stages. Onboarding alone becomes fully branded and luminous.

# Non-negotiable visual invariants

- Routine contact, chat, invitation, and setup screens use a flat white canvas with compact rows and minimal card framing.
- A bright blue accent marks active tabs, links, online presence, unread counts, and selection; it does not tint every control.
- Wide create, continue, share, and completion actions are near-black with white labels, while disabled actions become solid gray.
- Conversation screens use a pale-blue illustrated field with white incoming and very light blue outgoing message bubbles.
- Identity is consistently circular: contact photos, generated avatars, service marks, call participants, and group images use round crops.
- Calls, capture, annotation, and media viewing switch to a near-black stage with controls anchored near the bottom.
- Onboarding centers a large translucent blue-violet speech mark over a dark radiating background rather than extending that glow into utility screens.

# Color and surfaces

White is the dominant operational canvas. Search and text inputs use very light neutral gray. Settings and group administration may use a pale cool-gray page with white grouped sections, but chat and contact lists remain mostly unboxed. Dividers are faint and used only where spacing cannot establish row boundaries.

Blue is the interaction accent: active underline, active tab icon, link, online label, unread circle, selected radio, send control, and map marker. Near-black is the commitment color for full-width actions and the circular new-chat control. The chat field combines sky blue with a low-contrast line pattern; message surfaces remain white or almost-white blue. Green reports online or completed presence; muted rose-red is reserved for ending a call, leaving, deleting, or other destructive actions.

Onboarding introduces saturated blue and violet against black. Calls and media tools use deep charcoal and black surfaces so participant imagery or captured content becomes the primary mass. These are authored modes, not a global dark theme for lists and settings.

# Typography

Use SF Pro Text and Display. The operational hierarchy is compact: a top-level list title is approximately 24 points bold; setup questions and page titles are 17–18 points semibold; chat names and important rows are 15 points semibold; messages and form content are 15 points regular. Timestamps, presence, file size, delivery, and bottom-navigation labels sit around 10–12 points.

Names take precedence over previews: keep identity labels on one line where possible, truncate the secondary message or status first, and align timestamps and unread counts at trailing. Conversation text wraps naturally and retains readable line height. Onboarding can use a larger centered claim, but it should not introduce display typography into contacts or settings.

# Screen composition

Use 12–16-point horizontal insets, 8–12 points within rows, and 20–32 points between setup groups or grouped settings. Top-level chat and contact screens place the title at leading, overflow and black create controls at trailing, a compact segment directly below, and the list beneath. The four-item bottom navigation stays visually quiet and pinned below content.

Setup screens use a centered question in the upper third, one or two pale fields, supporting feedback near the field, and a wide bottom or keyboard-adjacent action. Profile-avatar selection uses a large current circular avatar followed by a horizontal category selector and a dense four-column grid of circular choices.

Conversation headers combine back, circular identity, name, presence, call, and overflow. The message column grows upward from the composer. Date and unread dividers sit inside the stream; media, voice, location, link previews, reactions, and files occupy the same column without gaining separate page chrome. The composer remains a single compact bottom row.

Contact and service profiles center a large avatar or mark, then place a short row of equal actions and grouped information below. QR identity uses a large centered code and one wide action. Group creation and management use a centered circular avatar, plain fields, member rows, and grouped permission or destructive actions.

Calls use a dark full-screen field with one dominant participant avatar, an optional smaller self-view, and a bottom pill containing speaker, microphone, video, overflow, and end controls. Capture and media review similarly dedicate most of the screen to content and keep tools in a black lower region.

# Navigation appearance

The observed root shell has four destinations: Contacts, Calls, Chats, and Settings. Each uses a line icon with a short label; the active destination turns blue. This literal set belongs to the messenger, so an adapted product should preserve the compact four-item treatment without copying destinations that do not exist in its own architecture.

Drill-down screens use a plain back chevron, centered title, and an optional trailing action. Conversations place identity at leading-center and calling plus overflow at trailing. Bounded tasks such as forwarding, choosing chats, inviting, or entering a phone number can appear as rounded top-level sheets over a dimmed context. Self-contained camera, media, and call stages use close or collapse rather than forcing a long back stack.

# Components

The primary action is a full-width near-black rounded rectangle approximately 52–54 points high. Disabled state is a solid mid-gray control with low-contrast label. Blue is used for inline links and compact direct actions, not as the default fill of every large button. The new-chat control is a black circle with a white plus beside a pale overflow circle.

Chat rows use a 40–44-point circular avatar, name and preview in the center, then time and unread count at trailing. Presence is a tiny green dot attached to the avatar or a blue/green status line under the name. Contact rows can end in a small gray invite pill or blue audio and video actions.

Message bubbles are compact and content-sized. Incoming bubbles are white; outgoing bubbles are pale blue and include small time and delivery feedback. Voice messages add a circular play control and waveform, locations embed a map preview, links use a bounded preview, and reactions attach immediately below the related item. The composer contains attachment, text entry, emoji, and microphone; send state replaces the trailing affordance when appropriate.

Pale rounded fields use no visible border until focused. Compact segmented controls rely on a blue underline rather than a heavy filled track. Grouped settings use white containers on cool gray, with icons, labels, values, disclosures, and destructive rows. Confirmation uses an app sheet or native alert according to the scope of the action.

# Imagery and icons

Identity imagery is central but disciplined. User photos, generated animal avatars, service marks, and group avatars appear as circular crops at consistent sizes. Shared photography and files remain rectangular inside conversations and use their natural aspect ratio. QR codes are contained on white with generous quiet space.

The conversation background is a low-contrast blue line pattern of communication and space motifs. It must stay subordinate to message text. Functional icons are thin, mostly monochrome, and familiar: back, phone, video, attachment, microphone, emoji, disclosure, share, QR, close, and overflow. Authored avatar and sticker families are product imagery, not substitutes for navigation or settings icons.

# States

Observed states include notification and photo permission, incomplete and valid phone number, code entry and resend countdown, empty and completed identity fields, generated or user-photo avatar, empty and populated chat lists, all and new chat segments, online and read status, unread counts, message delivery, voice recording and playback, reply, reaction, media and file attachment, location share, forward selection, contact-not-found invitation, new group with disabled and enabled creation, grouped permissions, incoming and outgoing calls, audio and video call stages, capture, annotation, copied media, empty search, empty blocked list, and system, light, or dark conversation appearance selection.

Feedback stays attached to the changed object: the primary action enables only when input is valid; resend shows a countdown; unread state updates its segment and badge; message checks sit with the outgoing bubble; online state sits with identity; recording exposes duration and cancel; copy shows a local confirmation; selections use a blue check; and destructive actions use explicit confirmation. Native permissions and sharing remain system-owned.

# iOS adaptation

Use safe-area-aware custom lists and scroll views with default separators and backgrounds removed where they conflict with the flat reference. Reserve the bottom safe area for the four-item navigation or message composer. Keep the conversation header stable while the stream scrolls, and move the composer with the keyboard without covering the latest message. Media, camera, and call stages may extend edge-to-edge while preserving reachable controls.

Every row, avatar action, tab, call control, attachment affordance, and compact icon needs at least a 44-point hit area. VoiceOver should announce chat identity, presence, preview, time, and unread state as one coherent row; messages should include sender, content type, time, delivery, and reaction without reading decorative background motifs. Call controls require explicit labels and selected or muted state.

Dynamic Type should wrap setup copy, settings labels, messages, and button titles. Allow rows to grow and move secondary values below rather than shrinking text. Preserve circular avatar geometry, keep message bubbles within a readable maximum width, and let attachment grids change column count when needed. Use native phone, photo, notification, share, and keyboard interfaces when they take control.

# Anti-generic checklist

- Do not turn routine messenger screens into a stack of elevated cards; lists and forms are predominantly flat.
- Do not use luminous blue-violet glow outside onboarding or other deliberate brand moments.
- Do not fill every large action blue; the observed commitment controls are near-black.
- Do not remove the pale illustrated conversation field or make it compete with message legibility.
- Do not replace generated avatar and sticker families with arbitrary SF Symbols or unrelated stock illustrations.
- Do not copy Contacts, Calls, Chats, and Settings when the adapted product has different top-level destinations.
- Do not lighten immersive call, capture, or media stages into the ordinary white application shell.

</design-context>
