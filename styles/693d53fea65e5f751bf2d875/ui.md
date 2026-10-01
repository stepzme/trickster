<design-context>
---
version: 1
platform: iOS
name: hh-business-design-analysis
description: "A compact recruiter workspace with white operational surfaces, strong black hierarchy, bright blue actions, pale-blue secondary controls, restrained status color, thin-line navigation, rounded utility cards, and occasional hand-drawn human illustrations."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F5F6F7"
  accent-primary: "#087EF5"
  accent-secondary: "#EAF4FF"
  text-primary: "#141414"
  text-secondary: "#777B80"
  divider: "#E0E3E6"
  destructive: "#D95454"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 33}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 19, fontWeight: 600, lineHeight: 24}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 14
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 10
  card: 14
  sheet: 26
  pill: 999
components:
  primary-action: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.surface-primary}", cornerRadius: "{rounded.control}", minHeight: 48}
  secondary-action: {backgroundColor: "{colors.accent-secondary}", textColor: "{colors.accent-primary}", cornerRadius: "{rounded.control}", minHeight: 44}
  vacancy-card: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.card}", padding: "{spacing.card-padding}"}
  status-chip: {backgroundColor: "{colors.accent-secondary}", textColor: "{colors.accent-primary}", cornerRadius: "{rounded.pill}", minHeight: 28}
  candidate-row: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", minHeight: 72}
  navigation: {backgroundColor: "{colors.surface-primary}", selectedColor: "{colors.text-primary}", unselectedColor: "{colors.text-secondary}"}
---

# Overview

hh business is a restrained, operational interface built for scanning vacancies, candidates, forms, chats, and account states. White surfaces, black headings, bright blue calls to action, pale-blue secondary controls, and small semantic notices create the hierarchy. The interface is card-based where records need boundaries, but remains compact and utilitarian; authored human illustration appears only in onboarding and selected empty or gated states.

# Non-negotiable visual invariants

- White fills the viewport and cards; pale gray differentiates grouped controls, inactive regions, and form sections.
- Black titles and record identities lead, with gray metadata and supporting values clearly subordinate.
- Bright blue is reserved for primary contact, progression, payment, or creation actions; pale blue supports secondary actions and status chips.
- Record lists remain compact, with state, identity, metadata, and next action visible in or directly beside each card.
- Forms use explicit labels, progress indication, tag chips, and a sticky bottom action rather than a generic `Form` appearance.
- Semantic notices use green, beige/amber, or red without recoloring the entire record card.
- Bottom navigation uses thin line icons with black selected state and gray inactive state.

# Color and surfaces

The canvas and primary cards are white. Very light gray marks inactive areas, input fills, secondary panels, and list background separation; borders and shadows are subtle. Near-black carries page titles, candidate identity, vacancy names, and active navigation. Bright blue fills the primary CTA and selected creation or contact controls. Pale blue fills secondary actions and informational status chips. Green marks successful or active state, beige/amber marks restrictions and warnings, and red marks verification failures, required-field errors, or destructive action. Default system-blue links without the observed filled-button hierarchy, strong gray card chrome, or colorful record backgrounds would break the reference.

# Typography

Use SF Pro Display and SF Pro Text. Page titles are approximately 22–24 points bold; compact navigation titles are around 17 points; record and section titles sit around 16–19 points semibold; body and form text is around 14–16 points; status, metadata, and helper text is around 12–13 points. Candidate names and vacancy roles are visually stronger than location, dates, and secondary attributes. Text is left aligned and sentence case. Dynamic Type should wrap job titles, candidate details, and warning copy while preserving state chips and primary actions as distinct elements.

# Screen composition

List archetypes use a title bar, horizontal tabs or chips, optional notice, a vertical stack of rounded records, and a bottom tab bar. Side insets are around 12–16 points and card padding around 14 points. Creation archetypes use a full-height one-column form with a slim progress bar, explicit field groups, tag chips, generated-content action, and sticky blue CTA. Candidate archetypes place identity and concise attributes near the top, then a strong contact action and structured information sections. Search archetypes combine a compact field and filters with dense candidate rows. Filter archetypes use full-height lists or rounded bottom sheets with dropdown rows, toggles, and one apply action. Chat and support archetypes use straightforward message lists and input areas. Profile/settings archetypes use grouped white rows on pale backgrounds. Empty or gated archetypes center a concise message, occasional authored illustration, and one action.

# Navigation appearance

The bottom bar is white with five evenly spaced thin-line icons and labels; the selected item becomes black while inactive items remain gray. Top bars use compact black back chevrons, close controls, centered or left titles, and small search, plus, gear, filter, favorite, or overflow symbols. Focused forms may replace the bottom bar with a sticky blue action above the home indicator. Sheets use a dim scrim, white panel with large top corners, concise title, and close or apply control. Toasts appear as compact transient confirmations without restructuring the page.

# Components

Vacancy cards are white rounded rectangles with a semibold title, compact status, metadata lines, optional warning or restriction, and a nearby action or overflow control. Candidate rows use a small avatar or neutral silhouette, bold name or role, concise experience/location information, and selection/favorite action. Primary buttons are full-width bright-blue fills with white semibold labels; secondary actions use pale-blue fill and blue text. Status chips are short pills in blue, green, beige, or red-tinted treatments. Form fields use pale neutral fills or bordered white rows with explicit labels. Progress bars are thin and blue. Tag chips use compact rounded outlines or pale fills. Filters use disclosure rows, toggles, checks, and dropdowns. Candidate contact remains a prominent sticky or full-width action. Disabled actions lower contrast without changing geometry.

# Imagery and icons

Candidate photos and gray placeholder silhouettes are small identity assets and should use contained circular or rounded crops. Authored imagery appears in onboarding and selected empty or gated states as soft hand-drawn human scenes in blue, red, black, and pale-blue fields. It is compositionally important when present and cannot be omitted while final assets are pending. A photographic seasonal splash is a separate campaign asset. Functional icons are simple black or gray line symbols and are not part of the illustration system. Third-party payment and identity marks remain separate brand assets.

# States

Populated vacancy and candidate lists preserve compact cards and clear status. Empty vacancies, chats, and favorites use generous white space, short text, and sometimes a flat human illustration. Draft, active, restricted, paid, contact-locked, or unverified states use explicit chips or notices in context. Email verification failure appears as a red banner; restrictions may use beige warning cards. Required-field errors stay beside the affected input. Sorting, folder selection, skill selection, and support rating use rounded bottom sheets. Folder creation and copied-device information use compact toasts. Payment and contact-gated states retain the same white/blue structure rather than switching to promotional styling.

# iOS adaptation

Extend white through the safe areas and keep tab bars or sticky actions above the home indicator. Use vertical scroll containers for lists, details, forms, chats, and settings. Keep the active field and sticky action visible when the keyboard appears. Present sheets, alerts, toggles, and text entry with native behavior but preserve the documented surfaces, radii, and blue emphasis. Maintain at least 44-point targets around tabs, chips, filters, favorites, overflow controls, avatars, and compact row actions. VoiceOver order should follow identity, state, primary metadata, warning, then action. At accessibility sizes, wrap chips into additional rows and stack compact metadata rather than truncating candidate or vacancy identity. A separate dark appearance was not established and should not be invented.

# Anti-generic checklist

- Do not bury vacancy, candidate, restriction, or verification state below decorative content.
- Do not turn every row into an oversized promotional card.
- Do not use default system blue links in place of the observed filled and pale-blue action hierarchy.
- Do not expose a default `Form` or grouped-list appearance in creation flows.
- Do not use an unstyled `TabView` or arbitrary mixed-weight SF Symbols.
- Do not replace candidate avatars with decorative characters or illustrations.
- Do not omit the authored empty/onboarding art where it provides the central visual mass.
- Do not flatten warnings, status chips, and actions to the same color and weight.

</design-context>
