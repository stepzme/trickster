<design-context>
---
version: 1
platform: iOS
name: vc-ru-design-analysis
description: "A dense dark editorial-social interface where near-black reading fields, bold white headlines, subdued metadata, edge-conscious mixed media, blue-violet actions, and restrained rose highlights carry the visual hierarchy."
colors:
  canvas: "#090909"
  surface-primary: "#151515"
  surface-secondary: "#242426"
  accent-primary: "#6684D8"
  accent-secondary: "#C45D7E"
  text-primary: "#F4F4F5"
  text-secondary: "#97999E"
  divider: "#303033"
  destructive: "#D85764"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 35}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 650, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 23}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 14
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 10
  card: 8
  sheet: 24
  pill: 999
components:
  primary-action: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.control}", minHeight: 44}
  article-block: {backgroundColor: "{colors.canvas}", textColor: "{colors.text-primary}", cornerRadius: 0, padding: "{spacing.card-padding}"}
  metadata-row: {backgroundColor: "{colors.canvas}", textColor: "{colors.text-secondary}", minHeight: 32}
  input-field: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.control}", minHeight: 44}
  action-sheet: {backgroundColor: "{colors.surface-primary}", cornerRadius: "{rounded.sheet}", padding: 16}
  navigation: {backgroundColor: "{colors.surface-primary}", selectedColor: "{colors.accent-secondary}", unselectedColor: "{colors.text-secondary}"}
---

# Overview

vc.ru is a dark, content-led interface whose hierarchy comes from bold white editorial headlines, mixed article media, subdued author metadata, and compact reaction controls. Near-black fills dominate the full viewport; graphite fields and sheets provide depth without card-heavy decoration. Blue-violet links and occasional rose accents remain small but highly visible against the dark field.

# Non-negotiable visual invariants

- Black and near-black surfaces occupy almost the entire viewport; light appearance is not substituted into the observed visual system.
- Large white headlines and article media dominate, while author, time, counters, and secondary controls stay visibly quieter.
- Feed content is separated by spacing, tonal shifts, or hairlines rather than floating rounded white cards.
- Blue-violet marks links, back actions, selection, and publishing controls; rose or red-pink appears only as a narrower active or reaction accent.
- Media is content-specific and visually varied, but UI chrome remains flat, dark, and restrained.
- Comment threads preserve visible nesting with compact avatars, connector lines, and aligned reaction controls.
- Native-style alerts and bottom sheets remain dark, rounded, and clearly layered over a dimmed background.

# Color and surfaces

The canvas is nearly black. Primary reading surfaces remain black or shift only slightly toward charcoal; graphite is reserved for fields, grouped rows, menus, players, and modal panels. Dividers are low-contrast dark gray and never become bright outlines. Off-white carries titles and body copy; cool gray carries author metadata, timestamps, counters, placeholders, and disabled controls. Blue-violet is the main interactive accent. Rose provides a selective active-navigation or reaction note, while destructive actions use clearer red. Default light sheets, white `Form` backgrounds, or system-blue-on-white controls would visibly break the reference.

# Typography

Use SF Pro as the iOS-safe neutral sans. Page and utility titles are approximately 22–24 points bold; article headlines sit around 19–22 points in semibold or bold; reading and comment text is around 15–17 points with comfortable line height; metadata remains around 12–13 points. Most text is left aligned and sentence case. Contrast between headline and metadata is produced by weight, size, and color together. Long editorial titles wrap naturally across multiple lines without truncation. Dynamic Type should enlarge reading text while keeping author metadata visually subordinate and preserving the headline-before-media sequence.

# Screen composition

Most screens use a full-width dark scroll field between the status area and a persistent dark bottom bar or input tray. Horizontal content insets are commonly 12–16 points. Internal control gaps are compact, while article groups receive clearer vertical separation.

Feed archetypes stack a top title or segmented control, a sequence of editorial blocks, and a bottom navigation bar. Each block typically begins with a small avatar/logo and metadata row, then a large headline, optional excerpt, wide media, and a compact engagement row. Reading archetypes expand one block into a long single-column article with headline, summary, statistics, large media or embeds, and a reaction/comment area. Thread archetypes use indented text clusters, small avatars, vertical nesting rules, and a fixed composer at the bottom. Search archetypes place a graphite search field above grouped result rows with small logos and concise action buttons. Account and settings archetypes use dark grouped rows with occasional colored functional icon tiles. Editing archetypes are sparse full-height dark canvases with large text fields, a small action toolbar, and a system keyboard. Empty states preserve a large uninterrupted black field rather than inventing decorative cards.

# Navigation appearance

Navigation bars stay dark and visually merge with the canvas. Utility screens use a compact centered title, blue-violet back chevron or text action, and restrained right-side symbols. The bottom bar is a dark fixed strip with evenly spaced outline icons; inactive items are gray and the selected state receives a blue-violet or rose tint. A compose control may appear as a small dark circular button with a light pencil near the lower edge. Bottom sheets use rounded dark panels, blue action labels, red destructive labels, a dim backdrop, and a separately spaced cancel row when present.

# Components

Editorial blocks are flat and nearly edge-to-edge, not elevated cards. Their author row uses a small circular or rounded logo, white name, gray metadata, and an optional compact action. Engagement bars use evenly spaced outline symbols with small counters and subdued default color; selected reactions receive rose or blue emphasis. Search and composer fields are graphite rounded rectangles with pale text and minimal border. Result rows pair a small avatar or square logo with a two-level text stack and a short blue-violet action. Comment rows use compact avatars, multiline text, thin nesting connectors, and small reply/reaction actions. The floating compose control is a dark circle with subtle tonal separation, not a bright oversized button. Grouped settings rows may use small colored square icon fields but otherwise stay flat. Disabled actions lower text and accent contrast without changing layout.

# Imagery and icons

Article media supplies most of the visual variation: photography, screenshots, memes, charts, product images, and embeds can all appear. Wide media is aligned closely to the editorial column and uses a decisive aspect-fill or content-appropriate contained crop; it cannot be omitted when it is the primary mass of an article block. Avatars and community marks remain small and support identification rather than decoration. Functional icons are simple line symbols with consistent stroke and compact optical size. Colored square symbols in settings are functional icon containers, not an illustration language. Do not invent a recurring character or empty-state illustration system.

# States

Selected segments and active navigation use accent color while preserving the dark surface. Followed, saved, liked, or otherwise selected controls change tint rather than growing or gaining shadow. Empty states retain the same bars and large black negative space with concise informational text. Editor focus introduces the native keyboard and leaves the active field readable above it. Thread updates may use a compact accent pill while keeping comment geometry stable. Permission and link-entry prompts appear as native dark dialogs. Action, confirmation, and destructive states use dark sheets with blue-violet ordinary actions and red destructive text. Mini-player or transient controls remain compact graphite overlays above the bottom region.

# iOS adaptation

Keep the status and home-indicator safe areas dark so they merge with the interface. Place feeds, articles, comments, and settings in safe-area-aware scroll containers; allow editorial media to approach the content edges without clipping focal information. Anchor comment composers, players, and navigation above the home indicator and move them with the keyboard where appropriate. Present alerts and sheets with native behavior but preserve the observed dark surfaces, radii, label colors, and spacing. Maintain at least 44-point hit regions around compact reaction, overflow, tab, and back symbols. VoiceOver order should follow author, headline, summary, media description, metadata, then actions. At larger Dynamic Type sizes, wrap action labels and move secondary controls to another line rather than shrinking reading text or turning every content block into a card.

# Anti-generic checklist

- Do not convert the feed into a stack of rounded gray or white cards.
- Do not expose light native sheets, alerts, search fields, keyboards, or `Form` sections against the dark canvas.
- Do not use default system blue as the only accent; preserve the blue-violet and selective rose relationship.
- Do not apply shadows, gradients, or decorative backgrounds to reading surfaces.
- Do not replace varied article media with one generic placeholder illustration.
- Do not flatten headline, body, and metadata to nearly identical sizes or colors.
- Do not use an unstyled `TabView` or mix arbitrary filled and outline SF Symbols.
- Do not remove comment nesting connectors or turn threaded discussion into unrelated cards.

</design-context>
