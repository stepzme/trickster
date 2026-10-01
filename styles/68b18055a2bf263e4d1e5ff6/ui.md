<design-context>
---
version: 1
platform: iOS
name: Yandex-Translate-design-analysis
description: "A dense light utility interface combining a cool-gray canvas, white rounded translation cards, large focused text, compact contextual accents, dark selected chips, minimal top chrome, and a five-item icon-and-label tab bar."
colors:
  canvas: "#F5F6FA"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEF0F4"
  accent-primary: "#3D95F3"
  accent-secondary: "#F6D957"
  text-primary: "#111820"
  text-secondary: "#7A8088"
  divider: "#E0E3E8"
  destructive: "#EF5A4D"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 52, fontWeight: 400, lineHeight: 58}
  title: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 600, lineHeight: 27}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 12
  card: 16
  sheet: 28
  pill: 999
components:
  translation-card: {fill: "surface-primary", radius: 16, textArea: "dominant", actions: "compact lower row"}
  language-control: {fill: "surface-primary", height: 44, layout: "paired labels with central swap"}
  selection-chip: {fill: "surface-secondary", selectedFill: "text-primary", selectedText: "white", radius: 999}
  bottom-navigation: {fill: "surface-primary", selected: "filled dark icon", unselected: "gray outline icon"}
  collection-tile: {fill: "contextual saturated color", radius: 14, layout: "two-column"}
---

# Overview

Yandex Translate is a functional, text-dominant interface built from a cool light-gray page and rounded white working surfaces. The central translation card, language controls, and active text receive most of the viewport, while icons and metadata remain compact. Accent color changes by context rather than behaving as one dominant brand wash: blue marks links and actions, yellow marks learning or theme emphasis, green appears in switches, and saturated colors differentiate collection tiles. Decorative imagery is rare and subordinate.

# Non-negotiable visual invariants

- Light operational screens use a cool-gray canvas with distinct white rounded cards and sheets.
- The translation text area remains the largest and quietest content region, with a noticeably larger placeholder or result than surrounding labels.
- Top navigation stays minimal: centered compact title with at most one leading and one trailing control.
- Language controls use paired compact labels with a central swap icon and remain visually tied to the main card.
- Selected chips use a dark fill with light text; unselected chips use pale-gray fill rather than outlines.
- The bottom bar uses five icon-above-label items on white with tiny labels and a darker filled selected icon.
- Functional text and controls dominate; sparse illustration must never displace the primary language content.
- Modal sheets dim the underlying screen, use rounded top corners and a grabber, and retain native iOS alert or keyboard geometry when present.

# Color and surfaces

The main canvas is a very light cool gray around `#F5F6FA`; translation panels, lists, and sheets are white. Pale gray around `#EEF0F4` distinguishes inactive chips, secondary fields, and grouped controls. Primary type is dark slate, secondary labels are medium gray, and dividers are light and unobtrusive.

Blue around `#3D95F3` is used for action, link, or transient emphasis. Yellow around `#F6D957` supports learning and selected themes; green belongs to enabled toggles. Red-orange around `#EF5A4D` appears in destructive or contextual collection accents. Saturated blue, orange, coral, red, and lime can fill collection tiles, but the overall operational field must remain light and neutral. A single global default-blue tint or a dominant orange wash would misrepresent the observed contextual accent system.

# Typography

Use SF Pro with script-appropriate system fallbacks. Centered top titles use roughly 17 point semibold type; page headings use 20-22 point semibold; list and translation body rows use 15-16 point regular; chips, tabs, and small labels use 10-13 points. The empty input placeholder is larger at about 22 points, while focused full-screen translated words can reach approximately 48-56 points at regular weight.

Translated text should use generous line height and wrap naturally inside the dominant card. Preserve native-script glyph coverage and do not force all languages into one fixed line count. Dynamic Type must expand the card and rows while retaining a clear distinction between main text, language labels, actions, and metadata.

# Screen composition

Most portrait screens preserve the status bar, use compact top chrome, and place white rounded content within unusually tight 6-12 point horizontal margins on a pale canvas. The main translation archetype stacks a language row, a large input/output field, and a compact lower action row inside one dominant white card. Supporting results and dictionary regions continue vertically below in additional flat or rounded white sections.

The list archetype uses dense full-width white rows under a centered title, with sparse separators, trailing chevrons or switches, and little decorative padding. The collection archetype uses a two-column grid of square-ish saturated tiles. The modal archetype dims the underlying screen and raises a rounded white half-height sheet with a small grabber. The camera archetype switches to a black full-screen field with a compact top language pill and circular controls near the bottom.

Native keyboard screens give the lower half to the keyboard while keeping the active card and language controls visible above. Avoid turning every subsection into an elevated card; dense utility content should remain scannable and flat.

# Navigation appearance

Top chrome uses a centered 17 point semibold title, one compact leading control such as back or close, and an optional trailing gear or overflow icon. Language selection is a separate paired control with a central swap symbol, not a navigation title. Secondary pages use simple back navigation and sparse actions.

The persistent bottom bar has a white base, five evenly spaced icons above 10-11 point labels, gray inactive items, and a darker or filled selected icon. Bottom sheets use a dim scrim, white rounded panel, and small grabber. The adapted product derives destinations from approved Research and Planning rather than copying the reference's mode labels.

# Components

The translation card is a large white rounded rectangle with about 16 point padding, a compact language row, dominant text area, and small action icons aligned along the lower edge. Input and result text share the same calm surface but use scale, tone, and spacing to separate states.

Selection chips are rounded pills: selected uses near-black fill and white text, while unselected uses pale gray and dark text. Dictionary and grammar cards use dense text, blue linked terms, and small diagrams without heavy shadow. Collection tiles are two-column, square-ish, saturated color blocks with concise high-contrast labels.

Settings rows are white or canvas-level strips with trailing chevrons and native switches. Camera controls are high-contrast circles on black. Disabled actions retain their footprint with pale gray fill and subdued text; alerts and action menus preserve familiar iOS geometry.

# Imagery and icons

The product is text- and symbol-led. Icons are compact line or filled glyphs positioned in top chrome, the translation-card action row, chips, lists, and bottom navigation. Camera previews and photo grids use real imagery with functional crops. Small timelines and diagrams remain crisp and subordinate to language content.

A few rounded pastel vector assets appear in empty, onboarding, dialogue, and widget contexts, but their roles and treatments are too sparse to define a standalone illustration system. Do not expand those isolated assets into a decorative layer across ordinary translation screens. When camera or photo content is required, preserve its real-image area instead of substituting a symbol.

# States

Observed states include splash/loading, empty input, active language selector, keyboard-open entry, translated result, selected dictionary/example/declension chips, correction mode, rounded sheets, native alerts, empty history, search with no results, disabled collection creation, privacy toggle variants, loading spinner, black camera mode, photo picker grid, settings and accent selection, and offline download or delete states. Pale canvas, white working surfaces, compact chrome, and contextual accents remain consistent.

# iOS adaptation

Respect the status and home-indicator safe areas on light, camera, sheet, and tab-bar screens. Translation content, lists, and collection grids require vertical scrolling; bottom sheets should scroll internally when Dynamic Type or the keyboard reduces space. Keep native keyboard, alert, photo picker, and camera transitions native.

Provide at least 44-point targets for language controls, swap, audio, microphone, camera, save, chips, settings actions, and bottom navigation even when visible glyphs are smaller. On compact widths, keep the dominant card full width and let text wrap; move action icons to a second row before shrinking them. VoiceOver should read language direction, main text, result, card actions, supporting results, then persistent navigation. Preserve the observed light appearance unless an approved product requirement defines another theme.

# Anti-generic checklist

- Do not replace the dominant translation card with a generic form or stack of equally sized cards.
- Do not apply one global blue or orange tint to every control; accents are contextual.
- Do not ship an unstyled `TabView`; preserve icon-above-label geometry, tiny labels, and dark filled selection.
- Do not render history, settings, or offline content as default `Form` sections with stock spacing.
- Do not make main translation text the same size as labels, chips, or metadata.
- Do not decorate routine text screens with large invented illustrations or photography.
- Do not replace camera, photo, or language actions with arbitrary symbols that obscure their meaning.
- Do not apply one corner radius to chips, cards, sheets, grid tiles, and camera controls.

</design-context>
