<design-context>
---
version: 1
platform: iOS
name: Claude-design-analysis
description: "A warm editorial conversation interface with an ivory paper-like canvas, black ink, large serif brand headings, compact sans-serif prose, restrained terracotta feedback, a floating rounded composer, minimal top chrome, and text-led sheets and artifacts."
colors:
  canvas: "#F8F7F3"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EFEEE9"
  accent-primary: "#D97757"
  accent-secondary: "#191714"
  text-primary: "#1C1A18"
  text-secondary: "#706D68"
  divider: "#DFDDD6"
  destructive: "#C94A47"
typography:
  hero: {fontFamily: "New York", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "New York", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 23}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 16
  card: 20
  sheet: 28
  pill: 999
components:
  composer: {fill: "surface-primary", border: "subtle", radius: 20, position: "floating above safe area"}
  primary-action: {fill: "accent-secondary", text: "white semibold", radius: 12, height: 50}
  message-bubble: {fill: "surface-secondary", radius: 18, role: "user content"}
  artifact-card: {fill: "surface-primary", radius: 16, border: "divider", preview: "document or media"}
  modal-sheet: {fill: "surface-primary", radiusTop: 28, backdrop: "dimmed"}
---

# Overview

Claude presents conversation as a calm editorial workspace. A warm ivory canvas, black ink, large serif brand statements, compact sans-serif prose, fine outline icons, and a substantial floating composer define the shell. Chat answers remain mostly unboxed and document-like, while user messages, attachments, artifacts, drawers, and settings use restrained rounded surfaces and native sheets.

# Non-negotiable visual invariants

- The main canvas is warm ivory rather than pure white or grouped system gray.
- Large brand and onboarding statements use an editorial serif; long conversation text and controls use a highly legible system sans.
- Assistant content reads as a continuous document with paragraphs, headings, lists, and code rather than repeated chat bubbles.
- A large rounded white composer floats above the bottom safe area and remains the strongest persistent control.
- Primary commitment actions are black; terracotta is sparse and belongs to the brand mark, progress, or selected micro-controls.
- Top navigation is minimal, with small edge icons and a compact centered model or title treatment.
- Sheets and drawers use flat white surfaces, large corner radii, fine dividers, and restrained depth.
- User media and artifact previews remain content objects; isolated onboarding graphics do not become a decorative illustration system.

# Color and surfaces

The dominant canvas is warm off-white around `#F8F7F3`. White composer panels, sheets, cards, and drawers sit subtly above it, while secondary fields and user bubbles use warm light gray around `#EFEEE9`. Dividers and borders are fine beige-gray rather than cool system gray.

Near-black carries primary text, voice controls, and major actions. Terracotta around `#D97757` identifies the Claude mark, loading/progress details, or small active controls without flooding the interface. Blue remains native to toggles, checks, and system interactions; red is reserved for destructive actions. Bright gradients, broad brand-color fields, and default blue primary buttons would break the reference.

# Typography

Use New York as an iOS-safe editorial serif substitute for large brand, home, and onboarding headings, with SF Pro Text for conversation, controls, settings, and metadata. Serif statements are approximately 28-34 points bold. Sheet and settings titles sit around 17-20 points semibold; body copy 15-17 points with generous line height; labels 14-16 points; metadata 11-13 points.

Assistant responses use typographic structure—bold inline headings, numbered lists, bullets, and monospaced code—rather than container styling for hierarchy. Text is mostly left-aligned; empty and onboarding brand moments may center. Dynamic Type should preserve the serif-versus-sans distinction, expand response and row height, and keep composer controls clear of wrapping text.

# Screen composition

Empty conversation screens center a brand mark and serif statement in the upper-middle, leaving broad quiet space before a floating composer near the bottom safe area. Active chats become a single narrow scrolling column with 16-20 point side insets, compact top chrome, light user bubbles, unboxed assistant prose, inline attachments or artifact cards, and a persistent composer.

Onboarding uses a centered mark or headline, vertically stacked fields and buttons, fine-print copy, and generous margins. A left drawer occupies most of the width over partially visible dimmed content, combining a large wordmark, icon-label rows, recent-item text, and a bottom identity/settings area. Settings and paywall archetypes use white rounded-top sheets over a dimmed background, centered title, list rows, plan cards, and native system overlays.

Artifact presentation uses a compact pill or preview card in the conversation and may open a bottom viewer with handle, close, and menu controls. Attachment states place image thumbnails or document tiles inside the composer or chat without converting them into page decoration.

# Navigation appearance

Top chrome is sparse: a small hamburger or back affordance on the left, a compact centered title or model label, and one small action on the right. There is no persistent tab bar in the sampled interface. The side drawer is a flat white panel with icon-label rows and minimal separators.

Settings, subscription, and artifact surfaces appear as rounded sheets with dimmed context and compact close or back controls. Native alerts and App Store sheets retain platform appearance. Product destinations and drawer contents must come from approved Research and Planning rather than the reference.

# Components

The composer is a wide white panel with about 20-point radius, subtle border or shadow, multiline text area, compact plus and tool controls, microphone, and a black circular send or voice action. Disabled send remains muted; active micro-state feedback may use terracotta. The composer stays visually separate from the canvas without becoming a heavy toolbar.

User messages use warm-gray rounded bubbles; assistant responses remain unboxed. Image attachments appear as rounded thumbnails, while PDFs or files use compact document tiles. Artifact cards use a white surface, fine border, concise label, preview, and small action icons. Response actions form a quiet row of thin black outline icons.

Primary stacked actions are black rounded rectangles with white labels; secondary actions are white or text-only. Settings use native toggles and divider-led rows. Tool or permission sheets may stack large black actions above white alternatives. Loading uses the terracotta mark or small dotted progress rather than a full-screen spinner.

# Imagery and icons

The Claude mark is the principal brand image. Uploaded photographs, generated media, document previews, and artifacts are user or content imagery and retain contained rounded crops. Connector icons, sparse empty-state line graphics, a microphone onboarding panel, and abstract artifact shapes support isolated states but do not establish a recurring illustration grammar. Required attachment or artifact imagery cannot be omitted; placeholders must preserve its size and role in the conversation.

Icons are mostly thin black outline symbols with compact circular or square hit regions. They should remain visually subordinate to prose and the composer. Do not add stock characters, decorative scenes, or broad image backdrops to the shell.

# States

Observed states include splash, onboarding and authentication fields, empty conversation, populated long-form chat, user bubble, image and file attachment, document preview, artifact pill and viewer, drawer open, settings sheet, app-connection permission sheet, voice onboarding, microphone input, loading marks, disabled and active actions, native permission alert, subscription sheet, destructive confirmation, and native toggles. Warm surfaces, editorial hierarchy, quiet icons, and the bottom composer remain stable.

# iOS adaptation

Respect the status bar, keyboard, home indicator, sheet detents, and bottom safe area. Conversation content should scroll independently above a composer that moves with the keyboard. Drawers and sheets require internal scrolling when Dynamic Type expands rows; artifact viewers should preserve handle and close controls above the home indicator.

Give composer icons, response actions, drawer rows, toggles, and sheet controls at least 44-point hit targets. VoiceOver order should follow top context, conversation chronologically, response actions, attachments or artifacts, then composer controls. On compact widths, collapse secondary response actions into overflow and allow the composer to grow vertically rather than shrinking icons. Preserve light warm materials; dark appearance should only be introduced if the approved product defines it.

# Anti-generic checklist

- Do not replace the warm paper canvas with pure white, blue-gray grouped forms, or glossy gradients.
- Do not render every message and response as an identical chat bubble or card.
- Do not replace serif identity headings with one uniform system-sans hierarchy.
- Do not use terracotta as a full-screen fill or for every action; black remains the principal commitment color.
- Do not shrink the composer into a default text field or standard toolbar.
- Do not add an unstyled tab bar, generic `Form`, or dense card dashboard.
- Do not omit attachment and artifact previews where they carry conversation content.
- Do not infer an illustration package or copy drawer destinations from the sampled product.

</design-context>
