<design-context>
---
version: 1
platform: iOS
name: Dzen-design-analysis
description: "A media-heavy editorial interface with immersive black consumer feeds, bold white headlines, orange-red actions, edge-conscious creator imagery, compact engagement chrome, and a contrasting white-and-pale-gray studio mode."
colors:
  canvas: "#000000"
  surface-primary: "#171717"
  surface-secondary: "#29292B"
  accent-primary: "#FF5C35"
  accent-secondary: "#FFFFFF"
  text-primary: "#FFFFFF"
  text-secondary: "#9C9C9F"
  divider: "#303033"
  destructive: "#E05A64"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 37}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 31}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 700, lineHeight: 23}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 12
  control-gap: 8
rounded:
  control: 12
  card: 14
  sheet: 26
  pill: 999
components:
  primary-action: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.pill}", minHeight: 44}
  media-block: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.card}", padding: 0}
  engagement-row: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-secondary}", minHeight: 44}
  search-field: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.control}", minHeight: 44}
  comments-sheet: {backgroundColor: "{colors.surface-primary}", cornerRadius: "{rounded.sheet}", padding: 16}
  navigation: {backgroundColor: "{colors.canvas}", selectedColor: "{colors.text-primary}", unselectedColor: "{colors.text-secondary}"}
---

# Overview

Dzen has a deliberate split visual system. Consumer feeds, video, profiles, search, and comments use an immersive black field with creator media, strong white headlines, subdued gray metadata, and compact orange-red actions. Studio, settings, analytics, and parts of editing switch to white and pale-gray grouped surfaces while retaining the same accent. The contrast between media-dominant dark consumption and restrained light utility screens is more characteristic than any single card style.

# Non-negotiable visual invariants

- Consumer surfaces remain black or deep charcoal from status bar to home indicator, with creator media providing most visual color.
- White headlines and large media dominate; channel metadata and engagement counts stay compact and gray.
- Orange-red is a narrow action accent for subscription, progression, and publishing, not a general surface color.
- Feed items stay tightly grouped around their source, media, headline, and engagement row rather than becoming isolated floating cards.
- Vertical video compositions use full-height dark media with a compact right-side action rail.
- Comments and action choices appear as rounded dark bottom sheets over a dimmed media or feed context.
- Light studio and settings screens use white canvas, pale grouped cards, black text, thin dividers, and the same orange-red primary accent.

# Color and surfaces

Consumer mode uses a true black canvas, near-black content surfaces, and charcoal fields or sheets. Dividers are subtle graphite. White carries headlines, creator names, and primary controls; medium gray carries timestamps, counts, descriptions, and inactive navigation. Orange-red fills or tints concise primary actions and selected progression controls. Destructive actions use a distinct red. Media itself supplies broad color fields and should not be tinted to match the shell. Utility mode inverts to white canvas, pale-gray grouped surfaces, black primary text, gray secondary text, and the same orange-red accent. Generic system blue, bright white cards inside the dark feed, or automatic gray grouped backgrounds across both modes would break the reference.

# Typography

Use SF Pro Display and SF Pro Text. Large page titles are approximately 22–28 points bold; feed headlines are around 16–18 points bold; body and list rows are around 14–16 points; metadata, counters, and tab labels are around 10–13 points. Editing surfaces may use a 30-point or larger title placeholder. Text is predominantly left aligned and sentence case, with compact numeric counters beside engagement symbols. Headlines can wrap over several lines and must remain visibly stronger than descriptions. Dynamic Type should expand headline and body rows while moving engagement controls or metadata to another line before reducing their contrast hierarchy.

# Screen composition

Consumer screens use a vertically scrolling black field, compact top chrome, stacked media-led items, and a dark bottom bar. Horizontal insets are typically 12–16 points, but large media may approach or reach the screen edges. Metadata and engagement controls are tightly spaced around each media item.

Feed archetypes stack a small creator header, large image or video frame, bold title or body excerpt, gray time/view information, and a compact action row. Long-reading archetypes expand text and image groups into a single vertical article. Vertical-video archetypes place media across most of the viewport with a right-side action rail and bottom text overlay. Search archetypes place a dark rounded field and keyboard above compact result rows or a centered empty state. Profile archetypes combine a dark identity header, compact action buttons, counters, and media/content sections. Comment archetypes use a large rounded sheet with centered title, avatar rows, threaded controls, and a bottom composer. Light utility archetypes use centered titles, 16-point insets, 44–56 point rows, grouped pale cards, charts, fields, and generous empty space. Editors may be dark with media tools or light with a large title field and compact formatting toolbar.

# Navigation appearance

Dark top bars are minimal and visually merge with the canvas, using a wordmark or short title plus small search, notification, share, or overflow symbols. Back controls are compact chevrons. The consumer bottom bar is black with evenly spaced outline icons and labels; selected content becomes white while inactive items remain gray. Creation may receive a stronger centered symbol without changing the dark bar. Light utility bars use a centered bold black title, black back control, and occasional trailing action. Bottom sheets use a dim overlay, black panel, large top corners, a centered title, and orange-red primary action when needed.

# Components

Media blocks begin with a compact creator row containing a circular avatar, name, optional verification mark, gray supporting text, overflow symbol, and short orange-red action. Images and video frames are large, decisive crops with duration, mute, or status badges positioned over protected corners. Engagement rows use small monochrome outline icons and counters; selection changes tint rather than adding a container. Search fields are charcoal rounded rectangles with a leading symbol and white input text. Result rows use circular avatars, two-level text, and short orange-red links. Comment sheets use compact avatars, multiline text, gray metadata, reply and reaction controls, and a dark rounded composer. Light settings cards use flat pale fills, thin dividers, simple line icons, chevrons, switches, checks, and dropdown rows. Editor toolbars use compact icons in a single row or vertical rail. Disabled actions lower contrast but keep their geometry.

# Imagery and icons

Creator photography, video frames, thumbnails, screenshots, and editorial graphics form the dominant visual mass. Use aspect-fill for designed feed media, preserve focal subjects, and contain vertical or document-like content when cropping would destroy meaning. Media cannot be omitted while final content is pending; placeholders must retain its scale and crop weight. Avatars and channel marks are small identifiers. Functional icons use a consistent simple line language across navigation, engagement, settings, editors, and sheets. Muted spot art may appear in individual empty states, but no stable reusable character or illustration family is established; do not invent one.

# States

Subscribed, liked, saved, or selected controls change tint or label while keeping the same compact row geometry. Empty search, profile, or comment states center short helper text and may include low-contrast gray spot art against the existing surface. Populated states remain media-led. Editor focus reveals the native keyboard while keeping the title or body field and formatting tools visible. Permission prompts may introduce a task-specific system or 3D-like graphic but do not change the overall visual language. Dark sheets cover action, report, share, or comment states; destructive choices use red. Light utility selection uses checks, toggles, outlined fields, and orange-red progress. No motion states are specified because the source contained no video screen records.

# iOS adaptation

Extend black consumer surfaces and white utility surfaces through their respective safe areas. Keep bottom navigation, comment composers, and action trays above the home indicator; allow full-height video to reach screen edges while keeping controls inside safe margins. Use vertical scroll containers for feeds, articles, profiles, and utility forms. Move composers and editor toolbars with the keyboard and preserve the active field. Present native permissions and alerts in the current appearance, then return to the same dark or light context. Maintain at least 44-point hit regions around small engagement, tab, back, overflow, and editor symbols. VoiceOver order should follow creator identity, headline or description, media description, metadata, then actions. At accessibility text sizes, allow engagement rows to wrap and convert dense horizontal utility controls into stacked rows without turning media into generic cards.

# Anti-generic checklist

- Do not replace the immersive black feed with a light grouped layout or uniform gray cards.
- Do not place rounded containers around every media item or engagement row.
- Do not use default blue tint for subscription, publishing, or selected controls.
- Do not remove creator media or reduce it to small thumbnails beside large text blocks.
- Do not apply the dark consumer treatment blindly to the observed light studio and settings surfaces.
- Do not use an unstyled `TabView`, `Form`, or arbitrary mixed-weight SF Symbols.
- Do not invent a recurring mascot or decorative illustration system from isolated empty-state art.
- Do not crop vertical video, screenshots, or editorial media without respecting their content.

</design-context>
