<design-context>
---
version: 1
platform: iOS
name: Skyeng-design-analysis
description: "A bright language-learning interface on a white canvas with saturated cyan actions, gray bottom navigation, rounded learning cards, photo/course banners, and a repeated illustration language of soft 3D blue characters plus flat educational scenes."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#F4F6F8"
  surface-secondary: "#EAFBFF"
  accent-primary: "#12B8EA"
  accent-secondary: "#5A35E8"
  text-primary: "#15171A"
  text-secondary: "#747A82"
  divider: "#E4E7EA"
  destructive: "#EF6175"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 32}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 12
  card: 16
  sheet: 24
  pill: 999
components:
  primary-action: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.canvas}", cornerRadius: "{rounded.control}"}
  secondary-action: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.accent-primary}", cornerRadius: "{rounded.control}"}
  primary-card: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.card}"}
  navigation: {backgroundColor: "{colors.canvas}", textColor: "{colors.text-secondary}", selectedColor: "{colors.accent-primary}"}
---

# Overview

Skyeng's current iOS screens are broad and commercial, but the visual language is consistent: white canvas, saturated cyan controls, large rounded cards, lightweight gray navigation, and frequent authored imagery. Learning content is approachable through soft 3D characters, flat scenes, photos, and colorful promotional/product cards.

The source app card reviewed was the current `skyeng` Screen Gallery card dated 2026-08-25, with latest set to `null`. Freshly inspected screens included onboarding, home, product catalog, course details, practice, lesson preparation, speaking practice, vocabulary, schedule, homework, messages, profile, and settings.

# Non-negotiable visual invariants

- The canvas is white and spacious; color is concentrated in cards, buttons, navigation selection, and illustrations.
- Cyan is the dominant brand action color for primary buttons, selected bottom navigation, links, help bubbles, and add/search emphasis.
- Lesson/practice states introduce a separate violet accent for exercise CTAs, numbered steps, and preparation controls.
- Rounded cards combine text with photos, 3D characters, or flat educational scenes; imagery cannot be omitted while final assets are pending.
- The persistent bottom navigation is visually light: small gray icons/labels, cyan selected state, white background, and a thin top divider.
- Commercial and discovery cards can be dense and colorful; focused learning steps are calmer, with one main task panel per viewport segment.
- Immersive speaking practice switches to a black canvas with a centered 3D head, waveform bubbles, and a glowing microphone action.
- Empty states use simple authored illustration or minimal text, not generic placeholder icons.

# Color and surfaces

Use white as the app canvas. Most text-heavy content sits directly on white, while cards and lesson steps use light gray or tinted surfaces. Cyan is the main action and selection color. Do not substitute default iOS blue; the source cyan is brighter and more branded.

Violet is reserved for active practice and lesson-preparation controls. Green communicates progress, correctness, and selected positive states. Coral/pink, yellow, navy, and black appear in promotional and category cards, not as global UI chrome.

Black is used heavily only in immersive speaking practice and some promotional cards. In ordinary screens, black remains text. Dividers are pale gray and should stay thin. Avoid beige, muted corporate blue, or monochrome-only palettes; the reference depends on a balanced spread of cyan, violet, green, coral, yellow, and dark cards.

# Typography

Use SF Pro as the iOS-safe system substitute. Titles are bold, large, and direct. Section headers such as learning blocks and practice headings use strong weight around 20-22 points. Body copy is compact and readable, usually 14-15 points with generous line height for Russian and English text.

Card titles are semibold and often wrap over one or two lines. Captions handle duration, metadata, navigation labels, and small explanations. Onboarding and questionnaire headings are larger and high contrast, but controls remain compact.

At larger Dynamic Type sizes, preserve the hierarchy by allowing card titles and lesson text to wrap before shrinking images or removing controls. Do not use all-caps as a dominant style.

# Screen composition

Home is a vertical feed with a compact top brand area, top-right circular utilities/avatar, a pill selector, horizontal story cards, and stacked learning/recommendation sections. Content alternates between full-width cards and horizontal strips.

Onboarding starts with full-viewport illustrated/photo hero screens, then shifts into questionnaire pages with a progress bar at the top, large heading, rounded answer rows, and a fixed bottom action.

Catalog and course-detail screens use card-first composition: search/filter controls at top, large rounded product cards with photos, category chips, price areas, and a cyan bottom/action affordance. Detail screens keep the same card image and text but stretch vertically through explanation sections.

Practice and vocabulary screens are more instructional: one-column sections, rounded lesson cards, small duration/status metadata, and clear bottom navigation. Speaking practice is an exception: black full-screen stage, centered character face, transcript/waveform bubbles, and one primary microphone control.

Profile/settings, schedule, homework, and messages are sparse list screens with top titles, simple rows, and bottom navigation. Empty states use centered illustration or concise text with wide white margins.

# Navigation appearance

The bottom navigation is a white bar with five compact icon+label items. Inactive items are gray; the active item is cyan. The bar uses a thin top divider and stays visually subordinate to content.

Top controls are small circular or pill elements: logo, gift/help/profile circles, close buttons, search icons, and dropdown selectors. Back/close controls are plain and light. Avoid heavy navigation bars, large tab chrome, and default blue navigation tint.

# Components

Primary buttons are full-width or card-width cyan rounded rectangles with white semibold text. Practice buttons use violet, especially in lesson preparation and microphone-test flows. Secondary buttons often use pale cyan fills with cyan text.

Answer rows are rounded white cards with light borders, small authored icons, semibold labels, and cyan outline/fill when selected. Progress bars use green fills and compact percentage pills in onboarding.

Learning cards use rounded rectangles with image blocks, bold title, short support copy, and small duration/status metadata. Promo cards can use saturated cyan, coral, black, navy, or gradient-like color fields with illustration or photo crops.

Search fields are rounded white or very light gray fields with left search glyph and placeholder text. Settings rows are simple icon+label+chevron lines on white, not grouped `Form` sections.

Speaking components use dark rounded transcript bubbles, green waveform strokes, playback controls, a glowing mint microphone circle, and compact top role/time controls.

# Imagery and icons

Imagery is central to Skyeng. The inspected screens show repeated soft 3D blue characters in onboarding, recommendation cards, AI teacher cards, speaking practice, and empty/supporting states. Flat educational scenes appear in situation cards, vocabulary, schedule/homework empty states, and promotional content. Tutor/course cards also use photography with turquoise graphic backgrounds.

Icons are rounded, friendly, and often colored. Bottom navigation icons are simple gray/cyan pictograms. Row icons may be blue circular symbols or tiny authored illustrations. Do not replace the authored image system with bare SF Symbols, emoji, SwiftUI shapes, or programmatic placeholders.

# States

Observed selected states include cyan outlined answer rows, green onboarding progress, active cyan bottom navigation, and selected product pills. Disabled actions become pale gray with low-contrast text.

Permission states dim the underlying app and use the iOS system permission card; the app-owned background underneath remains styled. Empty schedule/homework states use centered authored illustration with a short message. Message empty states may be plain text.

Speaking practice states show loading spinner, microphone permission, microphone test, active recording, playback waveform, transcript reveal, and end-conversation confirmation. These states preserve the black stage, centered character, waveform/audio controls, and glowing microphone treatment.

# iOS adaptation

Respect the status bar and home indicator. Keep bottom navigation reachable and visually light. Primary buttons, answer rows, lesson cards, search fields, microphone controls, and bottom tabs require at least 44-point hit targets.

Use vertical scroll containers for feeds, catalog/detail pages, settings, and long lesson content. Horizontal strips should remain horizontally scrollable and not wrap into cramped grids on narrow phones. Preserve card imagery through `cover` crops for photos and `contain` placement for isolated characters or flat scenes.

When the keyboard or system permissions appear, keep app-owned surfaces styled but allow native permission prompts to remain native. At larger Dynamic Type sizes, let text wrap and card height grow; do not shrink key imagery below recognizability. Do not add desktop hover states, web breakpoints, footers, or unverified animation behavior.

# Anti-generic checklist

- Do not replace Skyeng cyan with default iOS blue.
- Do not remove the bottom icon+label navigation styling.
- Do not turn the feed into a generic white-card stack without colorful imagery.
- Do not use `Form` defaults for settings or questionnaires.
- Do not substitute authored illustrations with SF Symbols, emoji, SwiftUI shapes, or programmatic icon art.
- Do not use violet outside practice/lesson contexts as generic decoration.
- Do not flatten speaking practice into a normal light screen.
- Do not describe or implement product navigation scenarios from this style document; this file only defines visual treatment.

</design-context>
