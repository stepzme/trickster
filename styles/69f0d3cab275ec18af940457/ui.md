<design-context>
---
version: 1
platform: iOS
name: Mail-ru-design-analysis
description: "A high-density white mail utility uses crisp blue actions, compact black-and-gray rows, circular sender avatars, hairline structure, native sheets, and sparse glossy onboarding art."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F4F6"
  accent-primary: "#0787F5"
  accent-secondary: "#55C88A"
  text-primary: "#202024"
  text-secondary: "#7B7B83"
  divider: "#E7E8EC"
  destructive: "#E04C55"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 12
  card: 16
  sheet: 26
  pill: 999
components:
  compact-message-row: {}
  blue-compose-control: {}
  message-action-toolbar: {}
  quick-reply-chip: {}
  profile-settings-sheet: {}
---

# Overview

Mail.ru is a dense white productivity utility built for scanning. Message rows, reading content, compose fields, folders, and settings stay flat and structured by hairlines rather than decorative cards. Bright blue identifies creation, links, active navigation, and primary pills. Circular letter avatars, thin outline icons, small gray metadata, and native-feeling sheets create a compact iOS rhythm, while authored 3D art appears only in first-run or interstitial moments.

# Non-negotiable visual invariants

- White is the continuous operational canvas; pale gray is limited to inputs, disabled controls, grouped settings, and selected filters.
- Message lists remain flat, compact, and separated by spacing or hairlines rather than individual rounded cards.
- Bright blue owns compose, primary actions, links, selected filters, and active navigation.
- Sender identity, subject, preview, and time form a consistent descending hierarchy in every message row.
- A floating blue compose control remains visually separate from the dense list beneath it.
- Reading and compose screens keep fixed compact toolbars around a scrollable or keyboard-dominated content region.
- Authored onboarding/interstitial artwork keeps its large white-blue visual mass and is not replaced by a functional icon.

# Color and surfaces

Operational screens are predominantly white, with cool pale gray for search, disabled fields, grouped settings, and small storage surfaces. Near-black carries titles and message content; medium gray carries previews, dates, helper text, and inactive navigation. Mail blue is the primary action and link color. Green marks confirmation or available capacity; red marks destructive or warning actions. Modal sheets are white over a dim gray scrim, with large rounded top corners. Default grouped-gray backgrounds across the inbox, heavy shadows, or competing pastel product colors would break the observed visual hierarchy.

# Typography

Use SF Pro as the iOS-safe face. Large profile/settings titles are 26–30 points bold; screen and section headings 19–22 points semibold; sender and subject labels 14–16 points medium or semibold; previews and body copy 14–16 points regular; dates and metadata 11–13 points gray. Blue text indicates actionable labels. Message reading uses comfortable body leading while inbox rows stay compact. With Dynamic Type, preserve sender and subject before preview, allow message body and compose fields to grow, and truncate secondary preview text before reducing controls below accessible sizes.

# Screen composition

The mailbox fills the safe-area-to-bottom height with a compact top toolbar, optional banner or search area, vertically repeating message rows, a floating blue compose control, and a white bottom tab bar. Each row aligns a circular avatar at left, a dense sender/subject/preview block, and time or state at right.

Reading screens use a fixed back/header row, scrollable sender and message content, compact quick-action chips, and a bottom action toolbar. Compose screens stack address, subject, and body fields with hairline separation while the keyboard occupies much of the lower viewport. Search uses a pale field and compact segmented filters. Folders, contacts, and settings use full-width list rows, outline icons, disclosure indicators, switches, and occasional small pale cards. Profile/settings may appear as a rounded-top sheet over dimmed content. Typical horizontal inset is 12–16 points.

# Navigation appearance

Primary navigation uses a white bottom icon-and-label bar with blue or dark active treatment and light-gray inactive items. Top bars use native-style back chevrons and concise blue or dark text actions such as close or cancel. Reading adds a compact bottom toolbar of monochrome mail actions. Search filters use small rounded or segmented selection. Attachment and overflow actions appear in white bottom sheets. Profile/settings can rise as a large rounded-top modal card. This section defines visual appearance only.

# Components

- **Message row:** flat white row with circular letter/avatar mark, sender and subject hierarchy, one or two preview lines, right-aligned date/state, and hairline separation.
- **Compose control:** blue floating circle or pill with a high-contrast white creation glyph/label and enough separation from the list and tab bar.
- **Reading toolbar:** compact monochrome actions along the bottom safe area, with destructive actions using red only when applicable.
- **Quick-reply chip:** small rounded pale or outlined capsule with compact blue or dark label; selected/active treatment remains restrained.
- **Compose field:** full-width white row with minimal chrome, dark entered text, gray placeholder, and blue cursor or action.
- **Settings row:** white or pale grouped row with leading outline icon/label, optional helper text, and trailing switch, value, or chevron.
- **Modal sheet:** white panel with about 26-point top corners above a dim scrim, using sparse action rows and native spacing.

# Imagery and icons

Operational imagery is limited: circular sender avatars, attachment thumbnails, brand/service marks, and thin functional line icons. Attachment previews use compact rounded crops and remain content, not illustration. A separate authored white-blue 3D mascot/object language appears on splash, onboarding, and notification interstitials; where observed, its large centered or upper crop is compositionally important and cannot be omitted. Ads, campaign media, service logos, app icon variants, charts, progress bars, and attachment photos are separate asset categories.

# States

Observed states include registration input, loading, native permission prompt, populated inbox, message reading, AI summary chip, quick reply, full reply with keyboard, compose, attachment picker, search and filtered search, folders, contact detail, dimmed modal settings, switches, disabled controls, storage progress, and appearance selection. Blue remains the action anchor across these states, while red and green stay semantic. Loading uses a compact spinner rather than a new page composition. No stable authored error scene was observed.

# iOS adaptation

Keep toolbars and list content within safe areas and reserve bottom inset for the tab bar, reading toolbar, floating compose control, and home indicator. Use `List`-like behavior only with custom row density, separators, avatar alignment, and tint; default grouped `Form` appearance is not sufficient. Reading content and mailbox rows scroll vertically. Keyboard avoidance must preserve the active compose/reply field and send action. Present permissions natively and action/settings panels as native-behaving sheets with documented styling. Maintain 44-point targets around compact visible icons, support VoiceOver order from sender to subject, preview, date, and actions, and allow Dynamic Type expansion without overlapping right-side metadata. On compact widths, reduce preview lines before collapsing identity or actions. Preserve evidenced light surfaces unless an appearance option explicitly supplies another treatment.

# Anti-generic checklist

- Do not turn each email into a floating rounded card on a gray dashboard.
- Do not hide sender, subject, preview, or time behind decorative layout.
- Do not use heavy shadows, oversized empty spacing, or marketing-style hero blocks in operational mail screens.
- Do not apply default blue tint indiscriminately to destructive, passive, and metadata elements.
- Do not ship unstyled `TabView`, `Form`, or `List` defaults that change row density, separator rhythm, or compose placement.
- Do not replace attachment thumbnails, avatars, or authored onboarding art with arbitrary SF Symbols.
- Do not use one radius for compose control, chips, cards, and modal sheets.
- Do not add repeated explanatory or mood-setting copy when the sender, content, state, and available action are already clear.

</design-context>
