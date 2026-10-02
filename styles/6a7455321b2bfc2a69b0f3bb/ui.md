<design-context>
---
version: 1
platform: iOS
name: Jomo-design-analysis
description: "A friendly screen-time interface built from bright sky-blue fields, white rounded cards, bold black type, compact colorful chips, centered onboarding, and recurring authored mascot spot illustrations."
colors:
  canvas: "#2F8FF3"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEF4FA"
  accent-primary: "#1686F0"
  accent-secondary: "#DCEEFF"
  text-primary: "#111317"
  text-secondary: "#6F757C"
  divider: "#E2E8ED"
  destructive: "#E6545F"
typography:
  hero: {fontFamily: "SF Pro Rounded", fontSize: 38, fontWeight: 700, lineHeight: 43}
  title: {fontFamily: "SF Pro Rounded", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Rounded", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 23}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 20
  section-gap: 28
  card-padding: 18
  control-gap: 12
rounded:
  control: 14
  card: 22
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "black", text: "white semibold", shape: "pill"}
  secondary-action: {fill: "white or pale blue", text: "black or blue semibold", shape: "pill"}
  primary-card: {fill: "white", content: "short prompt, control, optional mascot art", shape: "large rounded"}
  navigation: {fill: "white", selected: "sky blue", accessory: "rounded icon and label"}
---

# Overview

Jomo feels airy, direct, and playful. Bright blue fills large regions, while white rounded cards contain short prompts, app controls, rules, templates, and statistics. Bold rounded headings and authored mascot spots keep utilitarian controls from becoming generic.

# Non-negotiable visual invariants

- Sky blue forms a large background field, not a tiny accent.
- White cards are broad, softly rounded, and separated by generous blue or white breathing space.
- Major headings are bold, rounded, and clearly larger than explanatory text.
- Primary commitment uses a high-contrast black pill.
- Chips and selected controls introduce small, distinct color accents without replacing the blue field.
- Onboarding centers a short prompt and one clear action rather than dense prose.
- Mascot spot art appears at meaningful product moments and must not be replaced by interface symbols.

# Color and surfaces

The dominant field is saturated sky blue, balanced by white primary surfaces and pale blue secondary controls. Black carries decisive type and primary actions; gray carries explanations. Colorful chips may use green, yellow, pink, or purple in small doses. Error red remains semantic. Avoid default iOS blue on a white-only canvas: the recognizable effect comes from the proportion of the blue field.

# Typography

Use SF Pro Rounded for hero, title, and section roles, and SF Pro Text for body and controls. The contrast between bold 28-38 point prompts and 13-17 point support copy is important. Keep writing concise and allow large headings to wrap naturally. Dynamic Type expands cards and steps without flattening the hierarchy.

# Screen composition

Onboarding screens center a title, short support copy, illustration or phone preview, and a bottom action. Home screens use a blue canvas with stacked white cards and a light bottom bar. Rule creation uses focused white sheets with steppers, pickers, app lists, segmented controls, and a pinned action. Profile screens are light, list-led, and punctuated by templates, article thumbnails, or statistics. Respect both safe areas and preserve generous vertical gaps.

# Navigation appearance

Bottom navigation is white and softly separated from the blue canvas; selected icons and labels are blue. Top controls are compact circles or plain back/close symbols. Sheets are white with broad top corners and a dim scrim. The visual appearance is reusable without copying the source navigation map.

# Components

Primary buttons are black pills with white semibold labels. Secondary buttons are white or pale blue pills. Cards use white fill, 22-point corners, and 18-point padding with minimal shadow. Steppers, segmented controls, app rows, and toggles remain compact and friendly; selected states use blue or a colored chip. Disabled states reduce contrast without changing size. Article and template cards may combine a short label with authored art or photography.

# Imagery and icons

Recurring mascot spot illustrations, occasional sky photography, phone mockups, and article thumbnails have distinct roles. Mascot art is compositionally important in onboarding and selected cards and cannot be omitted pending final assets. Icons are simple and rounded; they support controls but never substitute for mascot scenes.

# States

Observed states include onboarding, populated home, rule creation with selected and unselected controls, app selection, templates, statistics, and profile content. Blue/white proportion, bold rounded hierarchy, black primary action, and friendly control geometry stay consistent.

# iOS adaptation

Use safe-area-aware scroll views and keyboard avoidance for rule inputs. Maintain 44-point targets, expand cards for Dynamic Type, and stack segmented or chip content when compact width cannot fit it. VoiceOver order follows prompt, state, control, then action. Native pickers, sheets, and permission transitions remain native in behavior but inherit the blue, white, black, and rounded visual system.

# Anti-generic checklist

- No white-only generic settings screen.
- No default blue button replacing the black primary pill.
- No tiny blue accent where a full blue field is required.
- No uniform card radius applied to pills, sheets, and cards.
- No long mood-setting copy filling open space.
- No arbitrary SF Symbols replacing mascot imagery.
- No omission of authored art from illustration-led moments.
</design-context>
