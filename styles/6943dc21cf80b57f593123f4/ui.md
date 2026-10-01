<design-context>
---
version: 1
platform: iOS
name: Ohmywishes-design-analysis
description: "An airy white, photography-led wishlist interface with oversized rounded black headings, soft-gray controls, blue pill actions, circular social imagery, and a translucent floating tab bar."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#F3F3F5"
  surface-secondary: "#E8E8EB"
  accent-primary: "#3478F6"
  accent-secondary: "#6BCB77"
  text-primary: "#111113"
  text-secondary: "#74747A"
  divider: "#E3E3E6"
  destructive: "#E5484D"
typography:
  hero: {fontFamily: "SF Pro Rounded", fontSize: 36, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Rounded", fontSize: 30, fontWeight: 700, lineHeight: 35}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
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
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "{colors.accent-primary}", text: "#FFFFFF", height: 52, radius: "{rounded.pill}"}
  secondary-action: {fill: "{colors.surface-primary}", text: "{colors.text-primary}", height: 48, radius: "{rounded.pill}"}
  primary-card: {fill: "{colors.surface-primary}", radius: "{rounded.card}", border: "none"}
  navigation: {fill: "translucent white material", activeFill: "{colors.surface-secondary}", radius: "{rounded.pill}"}
  image-tile: {fill: "photography", radius: 16, columns: 2}
  avatar: {shape: "circle", border: "white or none"}
---

# Overview

Ohmywishes is visually led by generous white space, large friendly black type, and real product or people imagery. Dense content appears mainly in photo grids; the surrounding chrome stays pale, rounded, and quiet. Blue actions and occasional green confirmation surfaces are functional accents rather than a general color wash.

# Non-negotiable visual invariants

- Keep the main canvas white and let content imagery provide most of the color.
- Use oversized, heavy, rounded black headings with a clear scale jump from body copy.
- Build fields, secondary controls, and quiet cards from borderless pale-gray rounded surfaces.
- Present browseable items as image-first rounded tiles, commonly in a two-column grid.
- Use circular crops for people and brand identities; do not substitute square generic avatars.
- Render bottom navigation as a detached translucent rounded bar with a soft filled selected state.
- Reserve saturated blue for primary actions and green for confirmed or successful feedback.
- Preserve the open spacing around identity, creation, and social-content headers.

# Color and surfaces

White is a full-screen field, not merely the background behind a stack of white cards. Pale neutral gray distinguishes inputs, filters, secondary actions, list containers, and inactive navigation without strong borders or shadows. Near-black carries headings and primary values; medium gray carries metadata and placeholders. Blue belongs to primary save, continue, or creation actions. Green is limited to successful or confirmed feedback, and red to destructive actions. A generic grouped-gray iOS canvas or default blue applied to every link would visibly change the reference.

# Typography

The defining contrast is between large, bold, softly rounded display headings and compact system body text. Headings are usually left aligned, short, and allowed to occupy more than one line; product names and values use semibold labels, while metadata is smaller and gray. Use SF Pro Rounded for display roles and SF Pro Text for functional copy. Under Dynamic Type, let supporting copy and item titles wrap before shrinking the main title, value, or action; grids may become a single column when readable tile width can no longer be maintained.

# Screen composition

Screens begin with a compact native-height top area or a generously spaced identity/title block, followed by either a photo-led content field or a small number of broad soft-gray modules. Typical horizontal insets are about 16 points, with 24–32 points between major sections and 8–12 points inside repeated content.

The observed visual archetypes are:

- Image discovery: a large heading or compact filter row above a dense two-column grid of tall rounded photographs with short text beneath or over the lower edge.
- Identity and collection: circular avatar or logo, bold name/title, compact actions, then lists, image tiles, or horizontal category rows.
- Creation and editing: large title above stacked pale-gray rounded fields, sparse inline controls, and one strong blue pill action anchored after the form or near the lower safe area.
- Social grouping: broad rounded modules with circular participant imagery, concise status, and ample negative space rather than a dense settings table.
- Modal choice: a native-feeling rounded sheet or action sheet over a dimmed view, with clear separation between primary, neutral, and destructive choices.

Long grids and forms scroll vertically. The floating navigation or bottom-owned action reserves enough inset that the final item is never hidden behind it.

# Navigation appearance

Primary navigation appears as a floating, translucent white pill above the home indicator, with compact monochrome line icons and a soft gray selected capsule. Top bars are visually light: text actions or small circular icon controls sit directly on the white canvas without a heavy toolbar background. Modal screens use a restrained close or back control and large rounded sheets. This section defines appearance only; destinations and hierarchy come from the product specification.

# Components

Primary actions are full-width or content-width blue pills, about 48–52 points high, with white semibold text and no shadow. Secondary actions are light-gray pills with black text. Inputs are borderless pale-gray rounded rectangles with generous horizontal padding and quiet placeholder text.

Image tiles use large rounded crops as the dominant mass, followed by a compact title/value cluster and small circular or minimal line actions. Avatars and brand marks remain circular. Search and filter controls use rounded white or pale-gray capsules. Context actions appear in compact circular buttons or native-looking action sheets. Selected states use a subtle filled surface; disabled states reduce contrast without changing geometry. Every interactive target remains at least 44 points.

# Imagery and icons

Real product photography, editorial images, brand marks, and people avatars carry the visual identity. Product imagery is tall or near-square, fills most of each tile, and uses consistent rounded crops without stretching. People and brand identities use circular crops. Icons are small, simple, and subordinate to imagery; arbitrary oversized SF Symbols would upset the hierarchy. Imagery is compositionally required: temporary assets must preserve the final crop, occupied area, scale, and color weight rather than leaving empty gray cards.

# States

Observed loading states retain the same grid/card geometry with pale neutral skeleton blocks. Populated states replace those blocks with photography without changing spacing. Selected or saved controls use a local fill or icon change. Successful confirmation uses a green message surface while leaving the white canvas and typography intact. Modal choices dim the underlying screen and preserve rounded sheet geometry. Destructive choices are red and visually isolated. No separate dark appearance was established in the sampled screens; preserve the documented light appearance unless product requirements explicitly add one.

# iOS adaptation

Extend the white canvas through both safe areas, but keep headings, fields, and grids inside 16-point compact-width insets. Use a vertical `ScrollView` or lazy grid for long content and add bottom content inset for the floating tab bar. Forms should lift or scroll the focused field above the keyboard; native permission screens may interrupt the flow, then return to the same white visual context. Maintain 44-point targets, logical VoiceOver order from heading through content to actions, and meaningful labels for image-only controls. Dynamic Type may reflow grid columns and wrap labels but must not collapse the display/body contrast. On compact heights, reduce empty gaps before reducing image or action prominence.

# Anti-generic checklist

- Do not replace the white field with a default grouped-gray `Form` background.
- Do not turn every content group into the same white card with shadow and border.
- Do not use an unstyled `TabView`; preserve the detached translucent pill and selected capsule.
- Do not replace photo-led tiles or circular identities with empty placeholders or arbitrary SF Symbols.
- Do not flatten the oversized rounded heading into standard navigation-title typography.
- Do not apply blue to all text and controls; it is a focused action color.
- Do not force one corner radius onto fields, image tiles, sheets, and navigation.
- Do not add decorative copy, gradients, or illustrations that compete with the real imagery.

</design-context>
