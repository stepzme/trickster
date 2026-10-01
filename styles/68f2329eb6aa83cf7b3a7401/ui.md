<design-context>
---
version: 1
platform: iOS
name: Simple-design-analysis
description: "A dark wellness interface built from navy-purple full-screen fields, layered slate cards, rounded white type, lavender actions, green progress signals, compact metric visualizations, and a deliberate mix of photography and friendly branded artwork."
colors:
  canvas: "#1D1D29"
  surface-primary: "#292936"
  surface-secondary: "#373746"
  accent-primary: "#A56AFF"
  accent-secondary: "#78D65B"
  text-primary: "#F7F5FA"
  text-secondary: "#B7B3BF"
  divider: "#464655"
  destructive: "#EF657A"
typography:
  hero: {fontFamily: "SF Pro Rounded", fontSize: 30, fontWeight: 700, lineHeight: 35}
  title: {fontFamily: "SF Pro Rounded", fontSize: 27, fontWeight: 700, lineHeight: 32}
  section: {fontFamily: "SF Pro Rounded", fontSize: 19, fontWeight: 700, lineHeight: 24}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.pill}", minHeight: 48}
  tracker-card: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.card}", padding: "{spacing.card-padding}"}
  progress-ring: {trackColor: "{colors.surface-secondary}", progressColor: "{colors.accent-secondary}", textColor: "{colors.text-primary}"}
  media-card: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.card}", padding: 0}
  message-bubble: {incomingColor: "{colors.surface-secondary}", outgoingColor: "{colors.accent-primary}", cornerRadius: "{rounded.control}"}
  navigation: {backgroundColor: "{colors.canvas}", selectedColor: "{colors.text-primary}", unselectedColor: "{colors.text-secondary}"}
---

# Overview

Simple is dominated by a deep navy-purple field with soft violet glow, layered charcoal cards, and bright lavender actions. Rounded bold headings, circular progress graphics, compact health metrics, and friendly media give the interface a softer character than a conventional data dashboard. Photography and authored art are structurally important in content and premium surfaces, while tracking screens remain comparatively restrained.

# Non-negotiable visual invariants

- Near-black indigo fills the full viewport and safe areas; dark slate cards create depth without switching to light panels.
- Lavender-violet is reserved for primary, selected, and premium emphasis, while green marks positive progress rather than general interaction.
- Large rounded headings establish each screen before compact metric cards and controls begin.
- Tracking surfaces combine bold numerals, circular arcs or progress bars, short labels, and small pictograms inside layered rounded modules.
- Cards use several related dark tones and generous radii, but do not all share identical geometry or elevation.
- Photography and authored illustration occupy a substantial portion of content and premium cards and cannot be replaced by text-only blocks.
- Persistent navigation and anchored composers remain dark, compact, and visibly separated from the home indicator.

# Color and surfaces

The default visual field is deep charcoal with a navy-purple bias. A subtle blurred violet glow may soften the upper region, but it does not become a bright gradient background. Primary cards are slightly lighter slate; nested metrics, fields, and incoming messages use a second graphite-purple tone. Lavender fills primary buttons, selected controls, outgoing messages, and premium emphasis. Green is a narrow semantic accent for completed or healthy progress; amber can signal attention, blue can identify information or hydration, and pink-red marks destructive or adverse states. White carries titles and key values, while cool lavender-gray carries explanations and inactive controls. Default white grouped surfaces or generic system-blue controls would visibly break the reference. A light appearance is observed as an optional setting, but it must preserve the same violet accent, rounded hierarchy, and metric structure.

# Typography

Use SF Pro Rounded for prominent titles and card headings, with SF Pro Text for body and metadata. Screen titles are approximately 26–30 points bold; card headings are around 16–20 points; body copy is around 13–15 points; captions and microcopy are around 10–12 points. Primary measurements use bold numerals and should remain easy to scan, with tabular figures where changing values align. Most text is left aligned, while circular metrics and premium benefit panels may center a short value-and-label stack. Dynamic Type should wrap explanations and card labels before reducing the visual prominence of the title or primary metric.

# Screen composition

Most screens use a vertically scrolling dark canvas with a large title or compact translucent top bar, 16-point side insets, stacked rounded sections, and a persistent bottom region. Major sections are separated by roughly 20–24 points; compact controls inside cards use 8–12 point gaps.

Dashboard archetypes place a large greeting or title near the top, followed by one dominant progress module and a mixture of full-width trackers and paired metric tiles. Tracker archetypes stack dark cards containing a progress visualization, current value, goal, status indicator, and compact action. Conversational archetypes use a single message column, gray incoming bubbles, violet outgoing bubbles, a small assistant avatar, and an anchored composer. Content archetypes use horizontal shelves or two-column grids of rounded photography and authored artwork with small locks, labels, or category chips. Premium archetypes use a close control, one large benefit visual, short centered copy, carousel indicators, outlined pricing choices, and a wide violet action. Settings archetypes use grouped dark table cards with leading icons and trailing chevrons or toggles. Sheets are inset from the screen edge and preserve visible safe-area clearance.

# Navigation appearance

Top bars are dark or softly translucent and may carry a lavender back control, compact centered title, or circular profile action. The bottom bar uses a dark continuous surface with four evenly spaced icon-and-label items; active content becomes bright white while inactive items stay muted lavender-gray. Icons are small and optically consistent rather than oversized. Modal sheets use a dark panel with large top corners, a dim overlay, and clear inset spacing. Full-screen premium panels retain the dark field and use a small circular close control.

# Components

Tracker cards are large rounded slate panels with bold metric text, a short label, circular arc or horizontal progress, and one compact pill action. Nested metric tiles use a slightly lighter surface and reduced radius. Primary actions are lavender filled pills with white semibold labels; disabled actions lower saturation and contrast without changing size. Progress rings use a dark track and bright semantic segment with centered numerals. Content cards use large rounded image crops, small lock or video badges, and compact titles below or over a protected dark region. Chat bubbles are asymmetrical rounded blocks: incoming graphite on the left, outgoing violet on the right. The composer is a dark rounded field with compact media controls. Premium choices are outlined dark cards with a stronger selected border, ribbon, or discount badge. Grouped settings rows use simple monochrome or lavender leading icons, thin dividers, and trailing controls.

# Imagery and icons

Photography is dominant in onboarding, exercise, food, recipe, and educational cards, using decisive aspect-fill crops and readable focal subjects. Authored card art includes a recurring fuzzy violet mascot, flat wellness scenes, premium benefit symbols, and campaign-like library artwork. These assets have meaningful visual weight and cannot be omitted while final assets are pending. Contain mascot or flat scenes within their colored card field; use aspect-fill for photography. Functional icons are compact, monochrome or lavender, and visually distinct from the authored art. Subtle glow, carousel dots, and small decorative marks support composition but do not replace imagery.

# States

Active trackers use green or context-specific progress against a dark track; locked metrics retain their layout but add a subdued lock and explanatory action. Selected chips and pricing options receive violet fill or border emphasis, while disabled controls remain structurally visible. Loading states show a small spinner or typing dots without replacing the surrounding dark composition. Permission-blocked states use a focused card and system handoff. Uploaded media appears as a real preview inside the conversation or logging surface. Premium-gated output may blur or obscure content beneath a clear upsell. Logout and other confirmations appear in a dark rounded sheet. No dedicated product error screen was observed; unobserved errors should retain the same surface, hierarchy, and semantic color logic.

# iOS adaptation

Extend the indigo canvas through both safe areas and keep tab bars, composers, and persistent actions above the home indicator. Use vertical scroll containers for dashboards, trackers, premium panels, and settings; keep two-column content grids only while Dynamic Type leaves titles legible. Move composers and confirmation actions with the keyboard and keep media previews reachable. Present system permissions natively, then return to the same dark context. Maintain at least 44-point hit regions around small tracker actions, locks, tabs, back controls, and media buttons. VoiceOver order should follow screen title, primary metric, goal/status, supporting content, then action. At accessibility text sizes, stack paired metric tiles and allow buttons to grow vertically. Preserve the observed dark default and adapt a supported light appearance without changing the violet/green roles.

# Anti-generic checklist

- Do not replace the indigo field with a generic grouped gray background or white card stack.
- Do not use default blue tint for primary, selected, or premium actions.
- Do not flatten progress rings, metrics, and trackers into identical text rows.
- Do not give every card the same fill, radius, and shadow.
- Do not use an unstyled `TabView`, `Form`, or arbitrary mixed-weight SF Symbols.
- Do not remove photography, mascot art, or premium imagery and leave empty text-only cards.
- Do not use green as a general brand color; keep it tied to positive progress.
- Do not make every surface glossy or glass-like; depth comes mainly from related dark tones.

</design-context>
