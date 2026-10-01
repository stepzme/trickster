<design-context>
---
version: 1
platform: iOS
name: Monese-design-analysis
description: "An airy white fintech interface with saturated blue pill actions, rounded sans-serif hierarchy, pale cyan information surfaces, compact account rows, a restrained bottom bar, and recurring flat-vector objects on soft circular backplates."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F4F8FC"
  accent-primary: "#1688E8"
  accent-secondary: "#7DD8F7"
  text-primary: "#20242B"
  text-secondary: "#777981"
  divider: "#E5E6E9"
  destructive: "#D94D5A"
typography:
  hero: {fontFamily: "SF Pro Rounded", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Rounded", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Display", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
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
  primary-action: {fill: "saturated blue", text: "white semibold", height: 52, radius: 999}
  account-card: {fill: "white or pale cyan", padding: 16, radius: 20, content: "large value and compact details"}
  selection-row: {fill: "white", height: 56, divider: "thin gray", selected: "blue radio or check"}
  navigation: {fill: "white", selected: "blue icon and label", unselected: "muted gray"}
---

# Overview

Monese is an airy, blue-led finance interface. White occupies most of the viewport, while pale cyan and blue-tinted surfaces group information and saturated blue pill actions mark the next decision. Rounded bold headings, compact gray metadata, tall list rows, and large vertical gaps keep forms and account surfaces approachable. A recurring flat-vector language places simplified financial or identity objects on soft circular backplates in onboarding, informational, transfer, and savings contexts.

# Non-negotiable visual invariants

- White remains the dominant full-screen field, with pale cyan or very light blue used for bounded information surfaces rather than the entire background.
- Saturated blue owns primary actions, selected controls, links, and active navigation.
- Primary actions are large pill-like blue controls with centered white labels and clear lower-screen placement.
- Bold rounded headings visibly outrank compact sans-serif labels and gray explanatory text.
- Operational screens use tall clean list rows, thin dividers, and restrained rounded cards rather than stacked decorative panels.
- Authored flat-vector objects sit on pale circular backplates and occupy meaningful open space in introductory or explanatory states.
- Bottom navigation stays light and compact; the selected item turns blue while inactive items remain muted gray.
- Small yellow, green, and red accents remain semantic and never compete with the blue brand field.

# Color and surfaces

The canvas and primary surfaces are white. Pale blue-gray or cyan-tinted secondary surfaces contain information callouts, account cards, accordion groups, and illustration backplates. Thin cool-gray dividers support tall list rows. Modal scrims use muted black, while rounded sheets remain white.

Saturated medium blue fills decisive actions, selected radios or checks, active navigation, chevrons, and key links. Light cyan supports informational emphasis and authored imagery. Near-black carries headings and financial values; medium gray carries helper copy, captions, and inactive controls. Green is limited to positive state, yellow to small attention accents, and red to destructive or failure actions. Default iOS blue used inconsistently, broad purple gradients, heavy shadows, or tinted cards for every section would break the reference.

# Typography

Use SF Pro Rounded as the iOS-safe match for large friendly headings and SF Pro Display/Text for sections, forms, rows, values, and metadata. Hero and onboarding titles sit around 28–34 points, operational page titles around 24–28, section titles around 19–21, body and controls around 14–16, and captions around 11–13.

Introductory titles are often centered above imagery; operational text is primarily left-aligned. Primary values and titles are bold, while helper copy stays regular and gray. Numeric input uses tabular figures and keeps currency or unit visibly attached. With Dynamic Type, rows and cards grow vertically, labels wrap before trailing values, and illustration/title/action groups reflow without overlapping.

# Screen composition

Screens use approximately 16-point horizontal insets, 12–16 points inside cards and controls, and 24–32 points between major groups. Introductory surfaces may devote the upper or middle third to a single authored illustration and open white space. Operational lists use a denser vertical rhythm. White extends through the safe areas; a bottom tab bar or primary action reserves the lower inset.

Observed archetypes include:

- Introductory composition: centered authored illustration on a pale circular field, bold rounded title, short gray copy, carousel indicator where present, and one blue pill action near the bottom.
- Account composition: large value or account context leads, followed by compact circular or pill actions and a one-column stack of cards or transaction rows.
- Selection composition: bold title above tall rows with flag or icon, label, and trailing radio or check; selected state turns blue.
- Amount-entry composition: large numeric field, compact currency or account context, native numeric keyboard, and one lower blue action.
- Information composition: pale cyan callout or rounded feature group combines a small icon or illustration with short explanatory text and a clear link or action.
- Utility-list composition: clean white rows with leading line icons, dark labels, gray secondary values, and trailing switches or chevrons.
- Modal composition: white rounded-top sheet or system prompt over a darkened current screen, retaining the blue action hierarchy.

# Navigation appearance

The primary bottom bar is white with compact icon-and-label items. The selected item becomes saturated blue; inactive items are muted gray. Inner screens use simple leading back or close controls, occasional top-right blue text or icon actions, and concise dark titles. Sheets rise with large white top corners and may leave a dark status-area margin visible. Carousel dots and segmented controls use blue only for the current selection.

# Components

- Primary action: approximately 52 points tall, full or near-full width, saturated-blue fill, pill radius, and centered white semibold label. Pressing darkens the blue; loading or disabled state reduces contrast while preserving size.
- Account card: white or pale-cyan fill, 18–22 point radius, 16-point padding, prominent value, compact account label, and restrained supporting facts.
- Selection row: about 52–60 points tall, white fill, leading flag or icon, dark label, optional gray caption, and trailing blue radio or check when selected.
- Input: white or pale-blue field, 12–14 point radius, dark entry text, gray placeholder, and blue focus or cursor treatment.
- Information callout: pale cyan rounded surface with simplified icon or small authored object, concise dark text, and optional blue link.
- Circular action: 44–52 point blue or pale-cyan circle with simple dark or white icon and short caption below.
- Illustration stage: one flat-vector object or compact scene centered on a soft pale-blue circular backplate, kept separate from text and controls.

# Imagery and icons

The recurring illustration language is flat and softly geometric. Simplified financial, address, identity, transfer, and savings objects use blue, cyan, yellow, and occasional green accents over a pale circular backplate. Shapes have clean edges, minimal internal detail, very limited shading, and a friendly symbolic rather than realistic character. The art is centered and large enough to carry introductory or explanatory composition.

Payment-card mockups preserve their physical ratio; flags remain uncropped; profile, QR, passkey, and social-login marks remain functional. Utility icons are small line symbols in blue, dark gray, or muted gray. The authored illustration cannot be omitted where it occupies the primary visual region. Temporary imagery must preserve the observed scale, circular backing field, palette, and relationship to text.

# States

Observed states include selected radio and check rows, loading or disabled-looking blue actions, partially scrolled sheets, text-field editing with keyboard and selection handles, selected bottom tabs, modal scrims, and account or feature information states. Across them, white remains dominant, blue marks selection and action, and gray carries secondary status.

Loading uses a spinner within the existing action geometry. Selected rows use a clear blue radio or check rather than relying on color alone. Introductory and empty states may use the authored illustration, while dense financial rows remain illustration-free. Destructive actions use red and stay visually separate from the primary blue action.

# iOS adaptation

Extend white through the safe areas and reserve the lower inset for the tab bar or blue action. Use vertical scroll containers for forms, account content, and settings; keep pinned actions clear of native keyboards and final rows. Introductory illustration groups may compress their negative space on short devices but should not shrink into small decorative icons.

All radios, flags, list rows, icon controls, and tab items need at least 44-point targets. VoiceOver should announce the title or primary value first, then context, selected state, and action; decorative backplates should not become separate elements. Preserve native keyboard, permission, sign-in, QR/camera, and sheet transitions. With Dynamic Type or compact widths, stack content and expand rows before reducing type. The sampled system is light-first; do not invent a dark theme unless required by the consuming product.

# Anti-generic checklist

- Do not replace the white and pale-cyan field with a generic grouped gray background.
- Do not use default system-blue controls with inconsistent radii; preserve the saturated-blue pill action language.
- Do not reduce bold rounded headings and body copy to one uniform type level.
- Do not replace the authored flat-vector objects with SF Symbols, emojis, stock people, or unrelated 3D assets.
- Do not color every account card and row blue.
- Do not ship an unstyled `TabView`; preserve the light bar and blue selected state.
- Do not give pills, cards, rows, sheets, and circular backplates one uniform radius.
- Do not place illustration inside dense account-detail or transaction rows.

</design-context>
