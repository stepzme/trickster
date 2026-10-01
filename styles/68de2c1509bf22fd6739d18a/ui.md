<design-context>
---
version: 1
platform: iOS
name: Pomosch-design-analysis
description: "A humane photo-led aid interface with white and pale-lilac surfaces, bright-blue navigation, charcoal commitment actions, lavender progress, compact financial reporting, persistent tab navigation, and large rounded detail sheets."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F0EEF8"
  accent-primary: "#348EF4"
  accent-secondary: "#8C7CF4"
  text-primary: "#171A1C"
  text-secondary: "#6C7075"
  divider: "#E7E8EA"
  destructive: "#E75555"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 500, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 600, lineHeight: 32}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 600, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 12
  card: 18
  sheet: 28
  pill: 999
components:
  photo-card: {fill: "surface-primary", radius: 18, image: "wide documentary crop", content: "progress and amount"}
  primary-action: {fill: "#293331", text: "white medium", radius: 12, height: 52}
  progress-bar: {track: "pale lilac", fill: "accent-secondary or success", radius: 999}
  status-chip: {fill: "semantic tint", radius: 999, label: "compact"}
  bottom-navigation: {fill: "surface-primary", selected: "blue", icons: "thin line"}
---

# Overview

Pomosch is a humane, photo-led aid interface in which documentary images make people and projects concrete while white and pale-lilac surfaces keep amounts, progress, and reports calm. Bright blue identifies navigation and secondary actions, charcoal anchors commitment, and lavender or green communicates collection status. Large rounded cards and full-height detail sheets balance emotional imagery with compact, transparent financial information.

# Non-negotiable visual invariants

- Documentary photography remains the leading visual mass on person, project, onboarding, and detail surfaces.
- White dominates the canvas; pale gray and lilac group progress, reporting, payment, and filter controls.
- Bright blue marks selected navigation, links, active segments, and secondary project actions.
- High-emphasis commitment actions use dark charcoal rather than default blue.
- Aid cards pair a wide photo with person or project identity, amount, progress, status chips, and a nearby action.
- Detail content often appears as a tall white rounded sheet over a darkened background, with a fixed bottom action.
- Progress uses lavender or green bars and explicit amounts rather than celebratory decorative effects.
- Photos, avatars, partner assets, and sparse line decorations remain content-specific; they do not form a standalone illustration system.

# Color and surfaces

The principal canvas and cards are white. Very pale gray or lilac around `#F0EEF8` groups reporting modules, filters, payment controls, and supporting panels. Large sheets use white over a black or dimmed scrim, with subtle surface separation rather than heavy shadow.

Blue around `#348EF4` identifies active navigation, links, selected segments, and secondary actions. Violet around `#8C7CF4` appears in payment or subscription controls and progress. Dark charcoal fills the strongest support action. Soft green communicates reached, collected, or successful states; red and orange flag urgent or destructive conditions. Applying blue to every primary commitment or flooding cards with semantic color would weaken the observed hierarchy.

# Typography

Use SF Pro Display and SF Pro Text with clear Cyrillic support and tabular amounts. Screen titles are roughly 28-32 points medium or semibold, modal and sheet titles 20-24 points, card titles 18-20 points, body 14-16 points, and metadata 11-13 points. Monetary values use selective weight rather than extreme display scale.

Names, needs, amounts, and progress lead; location, cadence, supporter count, and conditions remain gray and compact. Text is mainly left-aligned, with centered titles and status moments in sheets. Dynamic Type should expand cards, report rows, and amount lines while preserving the photo-to-identity-to-progress hierarchy.

# Screen composition

Feed screens use a vertically scrolling series of large rounded photo cards within 16-point gutters above persistent bottom navigation. A wide documentary image occupies the upper portion; identity, concise need, progress bar, amount rows, chips, and action sit below. Horizontal category or filter chips may precede the feed.

Detail archetypes use a full-height or tall white rounded sheet over a dimmed background. The sheet stacks title, photo or avatar, progress, financial summary, reporting evidence, donor rows, and a fixed bottom CTA. Payment and form archetypes use radio lists, amount presets, fields, OTP boxes, toggles, and keyboard-aware bottom actions.

Reports and finance use nearly flat pale modules, compact two-column summaries, document or donor rows, and explicit values. Empty, warning, confirmation, and success states center a concise icon or mark above short text and one clear action without replacing the surrounding surface language.

# Navigation appearance

The persistent bottom bar is white with thin line icons, small labels, gray inactive states, and blue selection. Top bars are minimal: a typographic logo or title at the left or center, small icon actions on the right, and ordinary back or close affordances on detail surfaces. Destination names and order must come from approved product artifacts.

Bottom and full-height sheets use large rounded top corners, a close icon, generous top spacing, dimmed context, and a fixed bottom CTA. Segmented navigation uses a thin underline or concise selected label rather than a heavy filled tab.

# Components

Photo cards use 18-point corners, a wide documentary crop, white information area, clear title, gray metadata, progress bar, amount summary, and compact chips. Progress tracks are pale lavender; active fill is violet or green depending on the visible state. Donor and report rows use avatars or small document assets with aligned amounts and dates.

Primary support actions are approximately 50-54 points high, charcoal-filled, white-labeled, and rounded 12 points. Blue or purple actions remain secondary or context-specific. Filter and category chips are compact pills; segmented tabs use a selected underline. Inputs are pale or white rounded controls with light borders and clear focus.

Payment presets, radio lists, toggles, and OTP boxes retain native interaction but match the palette and spacing. Disabled buttons become pale gray. Warning and success sheets use centered circular red or green icons, concise copy, and an anchored action.

# Imagery and icons

Real documentary photography and portraits dominate. Use respectful wide or portrait crops that keep the person and context readable; do not obscure faces with status UI. Avatars stay circular, and reporting or partner media stays bounded inside compact rows or cards. These photographs cannot be omitted while final assets are pending; placeholders must preserve crop, scale, and emotional weight.

Icons are thin monochrome system-like symbols, with small emoji-like category marks and partner logos where content requires them. Sparse basket, flower, person, or success line drawings are isolated supporting decoration mixed with photos and icons, not a coherent standalone illustration family. Do not generate a reusable character or scene system from them.

# States

Observed states include populated photo feed, selected blue tab, category and filter selection, search, project detail sheet, progress and collected states, urgent warning chips, donor list, report and document rows, payment presets, selected radio row, OTP input, keyboard forms, disabled button, subscription or recurring-help prompt, dimmed warning confirmation, green success sheet, empty state, profile form, and native modal controls. Photography, white surfaces, explicit amounts, and restrained state color remain constant.

# iOS adaptation

Respect status, bottom navigation, home indicator, keyboard, and sheet safe areas. Feed and detail content scroll vertically; fixed CTAs remain above the home indicator or keyboard. Full-height sheets require internal scrolling for reports and Dynamic Type while retaining rounded top geometry and close access.

Cards, filters, tabs, report rows, amount presets, inputs, and bottom actions require at least 44-point hit regions. VoiceOver should follow person or project identity, need, progress and amounts, evidence, then action and navigation. On compact widths, stack financial summaries and allow metadata wrapping before shrinking imagery or controls. Preserve the light authored appearance and adequate contrast over photos.

# Anti-generic checklist

- Do not replace documentary photography with generic illustration, symbols, or blank placeholders.
- Do not gamify urgent need with oversized celebratory art or noisy reward effects.
- Do not make every action blue; charcoal anchors the primary commitment.
- Do not hide amounts, progress, status, fees, or reporting evidence behind promotional copy.
- Do not turn the feed into identical text-only cards or default `Form` sections.
- Do not use an unstyled `TabView`, arbitrary SF Symbols, or one radius everywhere.
- Do not promote sparse line decoration into a standalone illustration package.
- Do not copy the source product's destinations, categories, or contribution flow.

</design-context>
