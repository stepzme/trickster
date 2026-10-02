<design-context>
---
version: 1
platform: iOS
name: yandex-design-analysis
description: "A sparse white iOS search shell with a coral Yandex mark, soft gray rounded controls, compact black navigation, near-black commitment buttons, content-adaptive result surfaces, and a purple assistant accent."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#F5F5F6"
  surface-secondary: "#ECEDEF"
  accent-primary: "#FF5A4F"
  accent-secondary: "#7257F2"
  text-primary: "#171719"
  text-secondary: "#787A80"
  divider: "#E5E6E8"
  destructive: "#E94B50"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 37}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 30}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 14
  control-gap: 10
rounded:
  control: 18
  card: 16
  sheet: 24
  pill: 999
components:
  primary-action: {height: 52, fill: "#2F3034", foreground: "#FFFFFF", radius: 12}
  secondary-action: {height: 44, fill: "#F5F5F6", foreground: "#171719", radius: 14}
  primary-card: {fill: "#FFFFFF", radius: 16, padding: 14}
  navigation: {fill: "#FFFFFF", selected: "#171719", unselected: "#787A80", iconStroke: 1.8}
---

# Overview

The observed screens are built around a mostly white iPhone canvas with very little chrome until content is requested. The start screen leaves a large blank field, places a soft gray universal search capsule around the vertical center, and uses the coral Yandex mark as the strongest recurring anchor. Result and account screens become denser but keep the same neutral surfaces, compact line icons, rounded controls, and black text hierarchy.

Alice and smart camera views add distinct visual layers without replacing the shell. Alice uses purple accents, a bottom composer, and light cards on the same white field. Smart camera screens use a live-photo or dark preview area above a white rounded result panel. Onboarding is the most promotional-looking part: it combines large centered headlines, product mockups or photos, a pale coral glow, and one dark action button.

# Non-negotiable visual invariants

- The primary canvas is plain white, with large unused vertical space on start, loading, account, and assistant empty states.
- The universal search control is a pale rounded capsule with the coral Yandex mark at the leading edge and microphone/camera actions inside the same field.
- Coral is a brand focal point, not a global tint; most controls, icons, text, tabs, and browser navigation remain black, gray, or white.
- Commitment buttons are near-black rounded rectangles with white text, while secondary controls are pale gray or white pills.
- Search/result screens use compact horizontal mode rows, filter pills, and dense content blocks rather than large destination cards.
- Alice keeps a purple assistant accent in chips, composer controls, and send/action affordances while preserving the white shell.
- Camera recognition screens divide the viewport into an upper captured-image preview and a lower rounded white results surface.

# Color and surfaces

White is the dominant color mass across the sampled screens. It fills the launch screen, home shell, empty assistant workspace, identity pages, loading states, and most result pages. Pale gray surfaces carry the search capsule, shortcut tiles, filter controls, browser address field, inactive chips, and soft card backgrounds. Dividers are faint and often replaced by spacing, rounded edges, or subtle shadow.

The coral Yandex mark appears as a compact leading badge, splash identity, and occasional entry-point icon. Yellow appears locally on the sign-in button and small service accents, not as the app-wide action color. Purple belongs to Alice and generated/assistant controls. Near-black is used for primary text, bottom navigation icons, close controls, and full-width actions. Generic iOS blue would visibly break the reference because observed interactive emphasis is coral, black, yellow, gray, or purple depending on the surface.

# Typography

The visual hierarchy is compact and mostly text-led. Large 24-32 point bold headlines appear in onboarding, identity tasks, and assistant prompts. Ordinary result text, controls, filters, and form labels sit closer to 12-16 points, with source metadata and captions reduced further. Numbers in weather, prices, badges, and tab counts are treated as ordinary SF-style text, with importance communicated by size and weight rather than decorative numeric styling.

Text is usually left-aligned inside results and account forms, centered in onboarding, launch, loading, and empty assistant prompts. Cyrillic headlines use heavy weight and tight but readable line lengths. Dynamic Type should preserve the observed hierarchy by allowing rows, filters, result snippets, and titles to wrap vertically; shrinking labels until they become gray texture would lose the reference.

# Screen composition

The start screen has a repeated vertical structure: sparse top utilities near the status bar, a broad empty middle field, the search capsule just below mid-screen, a small group of soft shortcut tiles beneath it, and compact browser navigation near the home indicator. The search capsule is much more important than the surrounding utilities.

Search results move the active query to the top, then stack a mode row, filter chips, and content-specific results. Video results use thumbnail-left rows. Product/camera results use image-led grids. Weather and account panels use full-width vertical sections with rounded sheets and light dividers. Loading and logo states reduce the composition to a centered mark or spinner with one short line of text.

Onboarding uses a top progress strip, a close control, a large bold headline, and an image/mockup block occupying the middle-to-lower half of the viewport. Bottom actions sit above the home indicator. Assistant screens keep an unusually tall calm area above the prompt cards or generated result, then place mode controls and the composer near the bottom edge.

# Navigation appearance

Bottom navigation is a minimal browser-style row with simple black line icons, no labels, and a small rounded-square tab count. The selected state is restrained: the active icon is dark and clear, but there is no large colored tab background. Back and home controls stay compact and visually secondary to the active search, camera, or assistant content.

Top navigation uses light utility glyphs, a small profile/avatar or yellow sign-in button, and occasional close or menu icons. Search modes are text tabs with a short underline and stronger black text for the active mode. Sheets and browser-like pages show rounded top corners or an address pill at the bottom while leaving the underlying content visually present.

# Components

The universal search capsule has a soft gray fill, pill radius, a coral leading mark, centered placeholder or query text, and trailing microphone/camera icons. In result mode it becomes a top search field with a faint outline or white fill, but the internal order remains the same.

Primary actions are full-width near-black buttons with white centered text and medium corner radius. Secondary actions are pale gray pills, small chips, or white list rows with black text. Yellow buttons are visually rare and tied to account/service entry points.

Shortcut modules are compact rounded tiles with soft gray backgrounds, small labels, and tiny embedded product imagery or data previews. Result modules change shape by content: video rows pair thumbnails with blue/black titles and metadata; product grids emphasize image, title, price, and merchant; weather uses a large numeric reading over a map or forecast stack; identity forms use large rounded input fields and simple black labels.

Assistant cards are white rounded rectangles with short bold text, small purple icons, and horizontal paging. The composer is a pale bottom bar with attachment/mode icons, low-contrast placeholder text, and a purple circular action at the trailing edge.

# Imagery and icons

Imagery is mostly functional content. Onboarding uses product mockups, screenshots, or photographic examples with a pale coral glow behind them. Smart camera preserves the captured scene as the dominant upper visual mass. Search results show source thumbnails, product photos, generated images, maps, charts, avatars, and web media at sizes large enough to identify the item.

Icons are simple, small, and mostly monochrome. The Yandex mark is the only recurring saturated red icon. Alice uses a small purple-blue assistant mark or gradient control. Service icons can be colorful in utility lists, but they sit inside compact rows or small tiles and do not turn the app into a colorful launcher grid.

# States

Observed states include launch logo, onboarding, native location permission, empty start, signed-in start, active search results, loading/no-internet, bottom sheets, identity forms, avatar editing, smart camera preview/results, and Alice empty/generated states. Across these states, the white canvas, compact typography, rounded gray controls, and restrained black navigation stay consistent.

Native permission and browser-page states dim or frame the underlying Yandex surface rather than restyling it. Loading states are extremely sparse, often just a spinner or small logo with one centered line. Modal sheets use a white rounded surface over gray dimming and keep choices as plain text pills or rows.

# iOS adaptation

Preserve safe-area breathing room at the top and bottom; the reference relies on visible white space around status-bar utilities, bottom browser controls, and composer/action areas. Controls that are visually small still need native-sized hit targets: the icon may remain compact while the tappable area follows iOS minimums.

Use scroll containers that allow horizontal mode rows, assistant suggestion cards, filter pills, and product grids to keep their proportions on compact widths. Do not replace these surfaces with default `Form` backgrounds, blue tint, or dense system list separators. VoiceOver order should follow the visual order: top utilities or search field, active mode/filter row, primary content, then bottom navigation or composer.

# Anti-generic checklist

- Do not turn the start screen into a dense dashboard, service grid, or generic card stack.
- Do not use default iOS blue for selected tabs, primary buttons, text links, or assistant controls.
- Do not make every action coral-red; the observed dominant action button is near-black.
- Do not force video rows, product grids, weather panels, account forms, and camera results into one reusable card geometry.
- Do not replace the search capsule with a standard `SearchBar` that omits the coral mark and trailing voice/camera controls.
- Do not make Alice a generic chat UI with default bubbles and blue send controls.

</design-context>
