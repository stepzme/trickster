<design-context>
---
version: 1
platform: iOS
name: Grok-design-analysis
description: "A dark-first AI workspace built from near-black negative space, unboxed conversational text, charcoal floating controls, a heavy bottom composer, and generated media as the main source of color."
colors:
  canvas: "#000000"
  surface-primary: "#171717"
  surface-secondary: "#292929"
  accent-primary: "#F4F4F4"
  accent-secondary: "#2E72FF"
  text-primary: "#F4F4F4"
  text-secondary: "#999999"
  divider: "#343434"
  destructive: "#EF5A5A"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 650, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 650, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 23}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 550, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 14
  control-gap: 10
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#F4F4F4", textColor: "#000000", cornerRadius: 999, minHeight: 44}
  secondary-action: {fill: "#292929", textColor: "#F4F4F4", cornerRadius: 999, minHeight: 44}
  primary-card: {fill: "#171717", borderColor: "#343434", cornerRadius: 20, padding: 14}
  navigation: {fill: "#000000", selectedColor: "#F4F4F4", unselectedColor: "#999999"}
---

# Overview

Grok is sparse and deliberately dark. Near-black negative space, a muted centered brand mark, a compact mode switch, and a substantial bottom composer define the home surface. Conversation content is largely unboxed text; charcoal pills and circular controls appear only where interaction requires them. Generated images and user content provide most of the color.

# Non-negotiable visual invariants

- Pure or near-black fills the entire viewport, including safe areas.
- Conversation answers remain unboxed on the canvas instead of being placed in white or elevated cards.
- The bottom composer is the heaviest persistent surface, using dark charcoal and broad rounding.
- Modes and secondary tools use compact floating pills or circular controls with tonal selection.
- White/off-white carries primary text and actions; gray supplies the secondary hierarchy.
- Generated media may be vivid, but permanent interface chrome remains almost monochrome.
- The empty state preserves substantial black negative space around a subdued central mark.

# Color and surfaces

The main field is black. Dark charcoal distinguishes composer, suggestions, user-message bubbles, settings groups, and menus without relying on shadow. Off-white is both the primary text color and the fill for the strongest action. Medium gray supports helper copy, inactive modes, and secondary icons. Electric blue appears only for isolated premium emphasis, not as the default tint. Red is local to destructive or error states. Light cards, atmospheric permanent gradients, and default grouped-form gray would visibly break the reference.

# Typography

Use SF Pro. Empty-state and mode titles are restrained rather than theatrical; long answers use comfortable 16-point body text with open line spacing. Labels and metadata are compact and medium-weight. Hierarchy comes mostly from luminance, spacing, and a few weight changes, not many sizes. At larger Dynamic Type sizes, allow answer text and composer input to grow vertically, preserve the message order, and keep mode/send controls at accessible fixed minimum sizes.

# Screen composition

The top safe area is black and contains a minimal shell: menu/control at one side, a compact Ask/Imagine switch near the center, and a contextual action opposite. Empty home leaves the middle largely open with a muted mark and a few suggestion controls, while the composer anchors the bottom above the home indicator. Conversation screens use a single scrolling text column with compact inline actions beneath responses. Imagine uses a dense media grid whose content reaches closer to screen edges. Settings use one-column charcoal grouped cells on black.

Visible archetypes include sparse onboarding; empty assistant home; populated text conversation; voice/speaking mode with enlarged central control; generated-media grids and detail; and grouped dark settings.

# Navigation appearance

There is no visually dominant bottom tab bar. The black top shell uses compact circular or pill controls, and the Ask/Imagine selector uses tonal contrast rather than a bright underline. Side/menu destinations and settings appear on dark surfaces. Back, close, and overflow controls remain ordinary in scale, circular when contained, and off-white/gray. Modal surfaces retain dark charcoal with large rounded corners over black.

# Components

The composer is a broad dark rounded container with multiline input and compact add, model/tool, microphone, voice, send, or stop controls. The strongest enabled action may be an off-white circle or pill with black content. Suggestions and tool choices use charcoal pills with white labels; selected modes gain stronger light contrast. User messages may use a charcoal bubble, while assistant answers stay unboxed. Generated media uses rounded frames with restrained hairlines and small overlay actions. Settings rows are dark grouped cells with clear leading labels and trailing values/toggles. Disabled controls keep geometry and fade toward gray.

# Imagery and icons

The subdued Grok mark is a brand anchor, not an illustration system. Generated images appear as heterogeneous user/content output and should preserve their own aspect ratios and color rather than impose a house illustration style. The interface uses minimal monochrome icons with consistent stroke/weight and ample hit areas. Do not invent decorative graphics or treat the media grid as evidence for a repeatable authored illustration language.

# States

Observed states include empty assistant, typed conversation, active voice/speak mode, generated-media browsing, and dark settings. Sending/stopping changes the composer’s primary control while the black/charcoal hierarchy remains stable. Selected modes strengthen off-white contrast. Media-loading or active generation should preserve layout and use restrained tonal progress rather than bright skeleton cards. Errors use localized red; premium emphasis may use rare blue.

# iOS adaptation

Extend black beneath both safe areas and pin the keyboard-aware composer above the keyboard or home indicator. Keep the conversation in a single vertical scroll container and ensure new content does not hide behind the composer. Maintain 44-point hit areas for visually compact top, tool, feedback, and send controls. VoiceOver order should read current mode, conversation content, inline actions, then composer tools and input. At compact widths, collapse optional suggestion/tool labels before reducing answer readability. Dynamic Type expands message and settings rows. Preserve a dark appearance for app-owned surfaces and use native system permission transitions without introducing a light flash.

# Anti-generic checklist

- Do not replace the black canvas with grouped system gray or white cards.
- Do not box every assistant answer in a rounded container.
- Do not make blue the general action tint.
- Do not use an unstyled `Form`, `TabView`, or default text-field appearance.
- Do not add decorative gradients or illustrations to fill negative space.
- Do not replace the large dark composer with a small standard iOS field.
- Do not let generated-media color leak into permanent navigation chrome.

</design-context>
