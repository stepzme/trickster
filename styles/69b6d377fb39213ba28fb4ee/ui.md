<design-context>
---
version: 1
platform: iOS
name: Telegram-design-analysis
description: "A native-dense communication interface with white or near-black canvases, Telegram-blue interaction anchors, compact full-width rows, softly rounded grouped surfaces, light floating navigation chrome, media-rich conversations, and authored mascot or premium art reserved for spacious states."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#F4F4F6"
  surface-secondary: "#EAEBED"
  accent-primary: "#229ED9"
  accent-secondary: "#34C759"
  text-primary: "#101114"
  text-secondary: "#7A7D83"
  divider: "#E3E4E7"
  destructive: "#FF3B30"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 600, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#229ED9", text: "#FFFFFF", radius: 999, minHeight: 44}
  secondary-action: {fill: "#F4F4F6", text: "#229ED9", radius: 999, minHeight: 44}
  primary-card: {fill: "#FFFFFF", text: "#101114", radius: 18, padding: 16}
  navigation: {fill: "#F4F4F6", active: "#229ED9", inactive: "#7A7D83", height: 58}
---

# Overview

Telegram combines information-dense native iOS lists with soft, lightweight chrome. Full-width conversations, contacts, settings rows, compact message bubbles, circular avatars, and media grids carry most of the viewport; Telegram blue is the repeated interaction signal. Rounded grouped surfaces and occasional authored character or object art prevent the utility-heavy interface from feeling generic without decorating dense communication screens.

# Non-negotiable visual invariants

- Telegram blue is the sole dominant action and selection color across links, active navigation, unread markers, and primary controls.
- Conversation, contact, call, and settings rows remain compact and predominantly full width; they are not converted into a loose stack of independent cards.
- Circular avatars and media thumbnails provide the principal color mass inside otherwise neutral list screens.
- Message bubbles, search fields, grouped settings surfaces, and sheets use distinct radii rather than one universal rounded-card treatment.
- Light and dark appearances preserve the same density, alignment, and hierarchy while swapping white and near-black canvases for pale gray and graphite surfaces.
- Conversation screens retain a patterned or softly colored wallpaper behind bubbles instead of using a plain grouped-list canvas.
- Authored mascot, premium, and empty-state art appears only where the composition provides substantial open space; it does not enter dense rows.
- Navigation chrome stays visually light and subordinate to content, with blue indicating the selected destination.

# Color and surfaces

Light screens use white as the principal canvas, with pale gray fields and grouped backgrounds separating controls or settings clusters. Dark screens invert the large fields to black and graphite while retaining the blue action hierarchy. Telegram blue should remain saturated and recognizable rather than falling back to generic system tint; green is reserved for active, sent, or confirmatory cues, and red for destructive actions or urgent badges.

Conversation views introduce a larger decorative field: a green-to-yellow or similarly soft gradient wallpaper with faint line motifs behind message bubbles. Message surfaces must remain readable against that field. Hairline dividers are low contrast and used inside dense lists; heavy borders or shadows would visibly break the reference.

# Typography

Typography is compact, native, and functional. Large titles are limited to high-level or promotional contexts; ordinary screens rely on 15-point body copy, 14-point semibold labels, and 12-point metadata. Sender names and row titles lead through weight, while message previews, timestamps, delivery metadata, and secondary values recede through gray color and smaller size.

Use SF Pro Display for the few large titles and SF Pro Text for rows, bubbles, settings, and controls. Numeric counters and timestamps remain tabular-looking and compact without introducing a separate display face. With Dynamic Type, preview and supporting lines may wrap before primary names or actions lose their relative emphasis; dense rows can grow vertically but should retain their leading avatar, central text stack, and trailing metadata alignment.

# Screen composition

Most utility screens begin with compact navigation chrome, then a full-width list or rounded grouped sections, and end above a visually light navigation dock or safe area. Horizontal insets are commonly 12–16 points, while dense rows use smaller internal gaps than promotional or empty states.

The observed archetypes are:

- Dense list: repeated avatar-led rows, a two-line text stack, and right-aligned metadata or status, separated by subtle hairlines rather than card gaps.
- Conversation: compact header, wallpaper filling the content field, asymmetric message bubbles and media, then a low composer attached to the bottom safe area.
- Grouped settings: pale page field with white rounded sections, colorful bounded leading icons, labels, values, toggles, and chevrons aligned on a strict row grid.
- Media and editor: edge-to-edge or tightly gridded imagery, dark or translucent tool chrome, and compact contextual controls that do not compete with the asset.
- Story or channel surface: media or content becomes the visual mass while controls sit as small overlays or restrained bars.
- Empty, onboarding, or premium surface: one authored illustration or object cluster occupies a meaningful central area, followed by short centered copy and a blue action.

Lists and settings scroll vertically; conversation and media surfaces reserve bottom space for their composer or tools. Open space is intentional only on illustration-led states, not injected between utility rows.

# Navigation appearance

Navigation bars are visually quiet, with compact text or circular icon controls and minimal background separation. The observed bottom navigation uses five evenly spaced destinations on a light or dark lifted surface; the active icon and label are Telegram blue and inactive items are neutral gray. Sheets rise with large top corners and retain the current theme. Back, close, search, and edit controls are small in appearance but keep native hit areas. These properties describe appearance only; destinations and navigation structure come from the approved product artifacts.

# Components

- Chat or contact row: flat canvas, circular leading avatar, one or two compact text lines, subtle divider, and trailing time, badge, or state icon. Selected or unread emphasis comes from blue and weight, not a heavy card fill.
- Message bubble: tightly fitted rounded fill with asymmetric grouping at the tail edge, compact internal padding, and low-emphasis timestamp or delivery metadata. Media bubbles preserve the asset ratio.
- Settings group: white or graphite rounded container on a contrasting page field, repeated 44-point-or-larger rows, colorful square or rounded-square leading icons, and hairline separators inset after the icon.
- Search field: pale gray pill with a compact leading search mark and subdued placeholder; focus preserves the shape and introduces blue interaction accents.
- Primary action: blue pill or blue text action with white text when filled. Disabled treatment reduces contrast without changing geometry.
- Composer: low rounded field with compact attachment, media, voice, or send actions placed at the edges; it remains attached to the keyboard and bottom safe area.
- Context menu and sheet: rounded neutral surface with grouped text actions, optional previews or reactions, and red reserved for destructive entries.

# Imagery and icons

Circular avatars, chat media, stories, and shared assets are functional content and often supply the strongest local color. Preserve their source ratios and use cropping only where the observed component is explicitly avatar- or thumbnail-shaped. Icons are compact, visually consistent, and integrated into rows or chrome rather than displayed as oversized decorative symbols.

Authored duck characters, glossy sticker-like objects, premium or stars graphics, emoji assets, and wallpaper doodles form a secondary expressive layer. On empty or promotional screens the art must occupy a real central visual mass and cannot be omitted while waiting for final assets. Use an approved generated image or faithful temporary image asset that preserves scale, crop, palette, and whitespace; do not approximate the art with arbitrary SF Symbols.

# States

Observed populated states distinguish unread, muted, pinned, verified, online, delivered, edited, scheduled, selected, and call-related status close to the affected row or message. Selection and current destination remain blue; active or confirmed cues may use green; destructive actions and urgent badges use red. Empty states replace list density with one centered authored illustration and concise copy. Modal actions use rounded sheets or contextual menus without changing the surrounding theme. Light and dark appearances preserve geometry, density, and emphasis.

# iOS adaptation

Extend white, black, wallpaper, and media fields through the appropriate safe areas while keeping text and touch controls inside native insets. Use lazy vertical containers for dense lists and scrolling grouped content; preserve stable row alignment as widths change. Conversation content must remain visible above the keyboard, with the composer moving with it and the latest message not hidden by the home indicator.

Keep every apparently small navigation, reaction, attachment, and row action at least 44 points tappable. VoiceOver order should follow navigation title, content from top to bottom, composer or primary action, then bottom navigation. Dynamic Type may increase row and bubble height without collapsing avatar, metadata, or trailing-state relationships. Preserve both observed light and dark palettes rather than mechanically inverting colors. On compact widths, allow secondary copy to wrap or truncate before shrinking avatars, actions, or core content below legible sizes.

# Anti-generic checklist

- Do not replace full-width chat and contact rows with a stack of identical white cards.
- Do not use default SwiftUI blue when it visibly differs from Telegram blue.
- Do not ship an unstyled `TabView`, `Form`, `List`, search field, or sheet.
- Do not apply one corner radius to bubbles, settings groups, search, sheets, and navigation.
- Do not use arbitrary SF Symbols as substitutes for authored mascot, premium, wallpaper, sticker, or emoji imagery.
- Do not omit the conversation wallpaper or flatten media into generic placeholders.
- Do not add heavy shadows, thick borders, or excessive vertical spacing to dense utility screens.
- Do not place decorative illustrations inside chat rows, settings rows, or message threads.

</design-context>
