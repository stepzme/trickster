<design-context>
---
version: 1
platform: iOS
name: Simbank-design-analysis
description: "Pastel gradient finance screens place bold balances and black action anchors above large white sheet-like surfaces, with playful mascot art and compact five-item navigation."
colors:
  canvas: "#F5DC75"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F3F3"
  accent-primary: "#111111"
  accent-secondary: "#7657E8"
  text-primary: "#111111"
  text-secondary: "#8A8A8A"
  divider: "#E6E6E6"
  destructive: "#D94B4B"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 700, lineHeight: 44}
  title: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 35}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 17}
spacing:
  screen-horizontal: 20
  section-gap: 28
  card-padding: 20
  control-gap: 12
rounded:
  control: 16
  card: 26
  sheet: 32
  pill: 999
components:
  black-primary-action: {}
  gradient-header-sheet: {}
  circular-action-shortcut: {}
  service-list-row: {}
  five-item-tab-bar: {}
---

# Overview

Simbank is defined by a large, softly blended pastel field at the top and a white rounded sheet that rises into it. Bold centered balances, black circular shortcuts, black pill actions, and an occasional literal black card create high-contrast anchors. Small multicolor service icons and authored mascot scenes keep the finance UI friendly without diluting the strong black-and-white hierarchy.

# Non-negotiable visual invariants

- A pastel gradient occupies the upper context area; the main content surface is a wide white sheet with conspicuously large top corners.
- Black is the functional anchor for primary actions, selected pills, circular shortcuts, active navigation, and card surfaces.
- The primary balance or amount is oversized, bold, and visually isolated rather than embedded in a generic card.
- Major screens use one broad surface transition, not a stack of unrelated floating white cards.
- Service lists use roomy rows, thin separators, and compact colored circular icons.
- Bottom navigation has five quiet icon-and-label items with a black active state and no heavy bar chrome.
- Mascot imagery is retained where the reference uses explanation, offer, or empty-state art; it is not replaced by an SF Symbol.

# Color and surfaces

The canvas changes by context rather than using one universal brand wash: warm yellow-to-peach, fresh green, blue-lavender, pink, and warm beige were all observed as large header fields. White is the dominant content surface, pale gray supports inputs and secondary controls, and black supplies decisive contrast. Small cyan, mint, violet, red, gold, pink, and blue icon disks distribute color through lists. Dividers remain light and narrow. Bright green may be used for transient success feedback; destructive red is reserved for destructive meaning rather than general emphasis. Default iOS blue, flat grouped-gray backgrounds, or uniformly white navigation would erase the reference.

# Typography

Use SF Pro as the iOS-safe face. The strongest contrast is between a 36–44-point bold numeric amount and compact supporting labels. Large screen titles are bold and left aligned; contextual balances may be centered. Section headings are assertive but clearly smaller than the amount. Body and helper copy use regular weight and muted gray. Primary black pills carry medium or semibold white labels. Keep monetary numerals tabular where values update. With Dynamic Type, preserve the amount as the first visual read, allow descriptive copy to wrap, and avoid shrinking action labels below accessible sizes.

# Screen composition

Primary dashboard composition starts below the status area with a sparse pastel header, central balance, a row of black circular shortcuts, and part of a black card before the broad white feed sheet begins. The sheet then holds horizontal promotional media, tasks, or transaction content and scrolls beneath the persistent bottom navigation.

Directory and form archetypes retain the colored or gradient upper field, then place a large white list or form surface beneath an integrated header. Rows fill most of the screen width and use separators instead of individual card containers. Form screens use pale rounded inputs inside a roomy white panel with a black full-width action near the lower edge or keyboard.

Analytical screens may switch to a black canvas with stacked charcoal chart modules and purple or blue data accents. Bottom sheets dim the underlying screen and rise as a sparse white panel with large top corners. Typical horizontal inset is about 20 points; adjacent controls use 10–12 points, while major sections breathe with 24–32 points.

# Navigation appearance

The primary tab bar is visually light: five small monochrome icons with labels, black for the selected item and muted gray for the rest, on a surface that blends with the page. Integrated page headers use either a large left title or a compact centered title. Back is a simple dark arrow near the upper safe area; search, filter, copy, information, and scanner utilities are small line icons without a boxed toolbar. Sheets use a dim scrim and a white rounded top edge. These properties describe appearance only; product destinations come from the approved product artifacts.

# Components

- **Primary action:** full-width black pill, white semibold label, no colored outline; an in-button spinner replaces or accompanies the label while loading.
- **Circular shortcut:** black disk with a centered white functional glyph and a short label below; keep equal diameters and spacing.
- **Gradient-header sheet:** edge-to-edge contextual color above a white surface with roughly 30-point top corners; the overlap is a defining structural transition.
- **Service row:** tall white row with a small colored icon disk, one or two text lines, optional trailing value or chevron, and a hairline separator.
- **Form input:** pale-gray rounded rectangle inside a white panel, with large centered text where the value itself is primary.
- **Black product card:** large-radius near-black card with sparse white metadata; it should read as a physical/digital card, not a generic dark content tile.
- **Selection control:** black filled pill for the selected option and quiet light or text-only alternatives; iOS switches are black when on and gray when off.

# Imagery and icons

The recurring purple-headed mascot is a real compositional layer in onboarding, explanation, offers, savings, and empty states. Use the approved authored raster asset at medium hero scale, generally about 15–30% of viewport height, centered above or alongside concise copy. Functional icons remain simple monochrome line glyphs or compact colored glyphs inside circles. Third-party bank and payment marks stay literal brand assets. Photography is content in media pickers, while charts, story thumbnails, and map visuals keep their own visual grammar. Do not treat any of these categories as interchangeable or omit mascot space while waiting for final art.

# States

Observed states retain the same large color field, white-sheet transition, and black action language. Loading appears inside a black CTA as a compact spinner. Empty content uses the mascot above a short message and action. Permission uses an in-app explanation followed by the native iOS alert. Selection sheets use a checkmark in a white bottom panel. Success may appear as a narrow bright-green top banner. Off toggles are gray. No explicit error treatment was observed, so do not invent a branded error composition from this source.

# iOS adaptation

Keep gradient headers and dark analytical canvases behind the status-bar safe area, while readable content begins below system chrome. Use one vertical `ScrollView` for the dashboard or list surface and reserve bottom inset for the five-item tab bar and home indicator. A custom visual tab treatment is required even if native tab behavior is retained. Forms must move above the keyboard without collapsing the header-to-sheet relationship. Present option panels as native-behaving bottom sheets with the documented white surface and radius. Maintain 44-point targets, logical VoiceOver order from title and amount through actions and content, and Dynamic Type wrapping. On narrower devices, wrap or horizontally scroll shortcut groups rather than shrinking tap targets. Only analytical screens evidenced a dark appearance; do not automatically invert every pastel screen.

# Anti-generic checklist

- Do not replace the gradient-header/white-sheet structure with a grouped `Form` or uniform white card stack.
- Do not apply default blue tint to actions, links, switches, or tab selection.
- Do not ship an unstyled `TabView` with default material and spacing.
- Do not place the main balance inside a small generic dashboard card.
- Do not use one corner radius for sheets, inputs, cards, and pills.
- Do not substitute arbitrary SF Symbols for the mascot or branded service marks.
- Do not flatten every section into the same accent color or invent dark mode for screens not observed in dark appearance.

</design-context>
