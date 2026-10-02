<design-context>
---
version: 1
platform: iOS
name: Heros-Journey-design-analysis
description: "A gamified fitness interface that alternates pale native utility screens with vivid pastel journey maps, purple progression actions, rounded stat cards, reward objects, and conventional bottom-tab navigation."
colors:
  canvas: "#F5F5F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#ECECEF"
  accent-primary: "#7A20F4"
  accent-secondary: "#21B979"
  text-primary: "#17171A"
  text-secondary: "#77777F"
  divider: "#DFDFE4"
  destructive: "#E14E64"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 38, fontWeight: 800, lineHeight: 42}
  title: {fontFamily: "SF Pro Display", fontSize: 29, fontWeight: 750, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 650, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 500, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 10
rounded:
  control: 12
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#7A20F4", textColor: "#FFFFFF", cornerRadius: 12, minHeight: 50}
  secondary-action: {fill: "#F0E5FF", textColor: "#7A20F4", cornerRadius: 12, minHeight: 46}
  primary-card: {fill: "#FFFFFF", cornerRadius: 18, padding: 16}
  navigation: {fill: "#FFFFFF", selectedColor: "#7A20F4", unselectedColor: "#77777F"}
---

# Overview

Hero’s Journey combines calm iOS utility surfaces with a much more saturated game layer. Registration, schedules, filters, profile rows, and performance data use white cards on pale gray; the home/program experience introduces a pastel route map, locks/checkmarks, towers, reward currency, fantasy assets, and vivid purple actions. The contrast between utility and progression scenes is central.

# Non-negotiable visual invariants

- Utility screens stay white or pale gray with restrained native-like typography and rounded cards.
- Progression screens devote a large portion of the viewport to a colorful map/route or program-art scene.
- Saturated purple is the primary enrollment, progression, selected, and reward action color.
- Green marks completion or positive training progress rather than replacing purple globally.
- Map nodes, locks, checkmarks, score/currency pills, and reward objects remain visible where progression is shown.
- Bottom navigation is a conventional white bar with compact icon/label treatment and purple selection.
- Stat, leaderboard, schedule, and profile information remains structured and calm beneath the game layer.

# Color and surfaces

Pale system gray is the utility canvas and white is the primary card/form surface. Purple provides large CTAs, selected tabs, progression, and reward emphasis; pale lavender creates disabled and secondary states. Green communicates completion, while small orange/red accents can distinguish individual metrics or warnings. Game scenes add sky blues, greens, golds, and dark violet, but these colors do not flood forms and schedules. Default blue tint or an entirely dark fantasy shell would break the observed split system.

# Typography

Use SF Pro. Program titles and reward/progression headings are bold and centered; schedule, stat, profile, and leaderboard content uses compact system-like text. Primary numbers and ranks receive stronger weight, while labels and metadata remain gray. Preserve visible hierarchy among program title, progress/score, next action, and supporting facts. At Dynamic Type sizes, stack stat rows and expand cards/sheets without reducing the map to an unrecognizable strip.

# Screen composition

Registration uses centered white/pale forms under conventional safe areas. The home/program experience can place a large pastel journey map behind or above floating status pills and a bottom action/sheet. Program detail stacks art/progress, shortcuts, schedule, and goals in one vertical scroll. Schedule, profile, and leaderboard screens use single-column cards/rows; Arena uses rank and avatar-heavy lists. Bottom sheets present filters or activity choices over the current screen. Insets are roughly 16 points on utility surfaces, while map art may run nearly edge to edge.

Visible archetypes include registration; no-program home; map/progression home; program detail; schedule/filter sheet; Arena leaderboard; and profile/stat lists.

# Navigation appearance

The main tab bar is white with compact icons/labels and purple selected emphasis. Top bars use conventional-scale back, close, and utility buttons, usually dark on light surfaces. Map scenes may float controls over art. Modal choices and filters use white rounded-top sheets with a dim scrim. Navigation behavior may remain native, but default blue tint and unstyled system bar backgrounds are not acceptable.

# Components

Primary actions are broad purple rounded rectangles with white semibold text; disabled actions retain lavender fill and lower-contrast labels. White progress/stat cards use medium rounding, compact labels, bars, and numeric emphasis. Map status uses small rounded score/currency pills and distinct nodes. Leaderboard rows combine avatar, name, rank, score, and status. Filters use segmented or pill choices inside white sheets. Profile and schedule rows use light dividers rather than heavy shadow. Icons may remain simple in utility contexts but must match the purple/green state hierarchy.

# Imagery and icons

Game scenes, map nodes, reward objects, fantasy characters, badges, and gym/program thumbnails are compositionally important where observed. They cannot be omitted while assets are pending. However, the inspected material mixes photography, pseudo-3D maps, fantasy character art, badge families, and functional icons too broadly to define one independently repeatable illustration grammar. Use approved/source-specific art for those roles rather than inventing a generalized style package.

# States

Observed states include no program selected, active program/map, locked and completed nodes, enabled and disabled purple actions, empty active-class state, selected tab, filter overlay, expanded icon grid, and multiple leaderboard/profile variants. Purple/green semantics and the white/pale utility surfaces stay stable across them. Errors or destructive actions use local red.

# iOS adaptation

Respect safe areas on forms/lists and allow map art to extend beneath app-owned top chrome when contrast remains sufficient. Use vertical scrolling for program/profile/schedule content and keyboard-aware registration forms. Maintain 44-point targets for map nodes, tabs, filters, avatars, and CTAs. VoiceOver should describe meaningful progression state without reading purely decorative scenery. At compact widths, keep the current node/path and next action legible, collapse optional currency/supporting widgets first, and allow cards to stack. Dynamic Type expands rows and sheets. Preserve the observed light appearance for utility screens.

# Anti-generic checklist

- Do not turn the app into only pale cards and remove the journey/map visual mass.
- Do not replace purple progression with default blue.
- Do not use an unstyled `TabView`, `Form`, `ProgressView`, or leaderboard list.
- Do not flatten program title, progress, rank, and metadata into one text scale.
- Do not substitute arbitrary SF Symbols for authored game assets.
- Do not claim the mixed game/photo assets as one reusable illustration system.
- Do not apply the saturated game palette indiscriminately to utility forms.

</design-context>
