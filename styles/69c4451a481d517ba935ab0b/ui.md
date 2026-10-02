<design-context>
---
version: 1
platform: iOS
name: How-We-Feel-design-analysis
description: "A black editorial wellbeing interface where large serif reflection prompts, quiet sans-serif controls, oversized rounded dark cards, sparse white pill actions, and luminous yellow-green-blue-red emotional geometry dominate a minimal icon-led navigation shell."
colors:
  canvas: "#050505"
  surface-primary: "#171519"
  surface-secondary: "#242126"
  accent-primary: "#55E6A5"
  accent-secondary: "#FFD84D"
  text-primary: "#FAFAF7"
  text-secondary: "#AAA6AA"
  divider: "#363239"
  destructive: "#FF5964"
typography:
  hero: {fontFamily: "Georgia", fontSize: 40, fontWeight: 600, lineHeight: 44}
  title: {fontFamily: "Georgia", fontSize: 30, fontWeight: 600, lineHeight: 35}
  section: {fontFamily: "Georgia", fontSize: 24, fontWeight: 600, lineHeight: 29}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 20
  section-gap: 28
  card-padding: 20
  control-gap: 12
rounded:
  control: 16
  card: 28
  sheet: 30
  pill: 999
components:
  primary-action: {fill: "{colors.text-primary}", text: "{colors.canvas}", cornerRadius: 999, minHeight: 52}
  emotion-control: {fill: "{colors.accent-primary}", text: "{colors.canvas}", cornerRadius: 999, minHeight: 64}
  journal-card: {fill: "{colors.surface-primary}", text: "{colors.text-primary}", cornerRadius: 28, padding: 20}
  navigation: {fill: "{colors.canvas}", selected: "{colors.accent-primary}", unselected: "{colors.text-secondary}", minHeight: 62}
---

# Overview

How We Feel treats near-black as a full-screen stage and uses color as emotional meaning rather than decoration. Large editorial serif questions and reflections sit beside plain system-sans controls. Yellow, green, blue, red, and their intermediate gradients become large circles, organic selected-emotion shapes, progress rings, tool surfaces, and analytic marks. One expressive object usually dominates the center of each screen while navigation and actions stay sparse and quiet.

# Non-negotiable visual invariants

- Near-black extends edge to edge through the safe areas and remains the dominant mass on primary screens.
- Large high-contrast serif questions, quotes, and reflections are paired with compact neutral sans-serif instructions and controls.
- Emotional color appears as substantial geometry—circles, blobs, rings, cards, and chart marks—not merely as small accent dots.
- Yellow, green, blue/purple, and red/orange remain a coherent emotional family reused across selection, entries, tools, history, and analytics.
- Focused flows contain one obvious white pill CTA while secondary controls recede into dark surfaces.
- One primary visual object or group occupies the middle of the screen, surrounded by generous black negative space.
- Rounded cards use visibly large radii and soft dark tonal separation rather than bright borders or heavy shadows.
- The bottom bar remains black and visually minimal, with thin inactive icons and green or multicolor active emphasis.

# Color and surfaces

The canvas is almost pure black. Raised surfaces are charcoal or black-purple, often with very subtle gradients, blurred color glow, or fine texture. Journal, quote, tool, and entry cards use large rounded rectangles; input and action bars may be dark and translucent. White is reserved for important text, outline emphasis, and primary pill actions.

The emotional spectrum supplies the primary color masses: yellow for bright pleasant energy, green for calm or pleasant low energy, blue/purple for low-energy unpleasant states, and red/pink/orange for high-energy unpleasant states. Selected chips and active toggles often use green. Destructive meaning uses red. Generic system blue used as the main tint, or a light grouped canvas, would visibly break the reference.

# Typography

The defining contrast is a high-character editorial serif against a plain iOS sans. Large questions, emotion statements, tool titles, quotes, and analytical headings use the serif in white or emotional color. Reflective first-person statements may use serif italics. Instructions, chips, fields, buttons, settings rows, tabs, and chart labels use SF Pro Text.

Georgia is an iOS-safe substitute for the observed high-contrast display character. Use approximately 30-40 points for hero questions, 24 points for section anchors, 15-16 points for body and actions, and 12 points for metadata. Under Dynamic Type, allow supporting sans copy and chips to wrap before reducing the primary serif statement or central emotion label; cards and list rows grow vertically.

# Screen composition

Home fits a full composition between safe areas: small utility controls at top, a centered serif prompt, a large circular check-in control, a recent-entry card, and a persistent black bottom bar. Focused check-in screens replace the recent content with four large shaded mood circles or a dense colored emotion field; selection grows into an organic glyph and introduces a bottom instruction or confirmation bar.

Entry creation and viewing use a large emotion symbol high in the scroll, compact metadata pills, a dark rounded text card, attachments, and tag groups. Results and analytics center progress rings, colored bubbles, horizontal pill bars, or calendar marks, with short serif interpretations above or below. Tools use a two-column grid of nearly square, highly rounded gradient cards; quotes use one oversized vertical card with centered serif copy.

Settings and notifications become simpler black lists with thin separators and line icons. Modal flows use a minimal close control and no visible bar container. Action sheets may remain native white over a dimmed black screen, while system permission alerts use the current iOS dark appearance.

# Navigation appearance

Top chrome is nearly absent. Back and close controls are plain white glyphs at the safe-area edges; secondary actions are small circular dark buttons or thin icons. Many focused screens read as full-screen modal compositions with a single close control rather than a navigation bar.

The persistent bottom bar merges into the black canvas. Thin white or gray icons sit above small labels; the selected destination uses green or a multicolor emotional mark. It remains low contrast so the central emotion object or card dominates. Sheets use a dimmed backdrop and rounded surface; native white action sheets are allowed where observed.

# Components

The check-in control is a large circular or ring-like object whose fill uses the emotional palette and whose scale makes it the primary viewport mass. Emotion selection begins as colored circular labels in a dense field; selected cells transform into larger abstract silhouettes while retaining their family color.

Primary actions are wide white pills around 52 points high with black semibold labels. Secondary controls are dark pills, outlined circles, or compact icon buttons. Tags are small dark rounded pills; selected tags use green-tinted fill. Journal cards use large corners, dark fill, serif emotional summary, compact metadata, and restrained attachment controls.

Tool cards are near-square, two-column tiles with large radii, subtle gradient/noise fields, and serif titles. Quote cards are oversized rounded rectangles with centered quote and small author. Analytics combine colored bubble fields, progress rings, and horizontal rounded bars. Settings rows use thin monochrome icons, sans labels, separators, and chevrons.

# Imagery and icons

Photography is occasional and secondary, appearing in onboarding media or user journal attachments. It does not define the overall system. Functional controls use thin monochrome icons for navigation, editing, search, camera, microphone, filtering, sharing, and settings. Charts reuse the emotional palette but remain data visualization rather than illustration.

The app also contains a limited authored illustration family of abstract emotion characters and metaphor objects with colored blob bodies and fine white linework. Follow illustrations.md whenever comparable art is required. Central emotion glyphs, logo marks, and charts are separate families. If an observed screen depends on photography or authored art, preserve its placement, scale, and visual weight rather than replacing it with an arbitrary symbol.

# States

Selected emotion cells change scale and silhouette while keeping their palette family. Selected chips become green-tinted; active tabs and toggles use green or multicolor emphasis. Populated journal and analysis states retain the same black canvas and large-radius surfaces while introducing emotional glyphs, cards, and charts.

Notification permission uses a native dark system alert over the current composition. Profile actions can use a native white action sheet over a dim layer. Keyboard and attachment controls appear over the black entry context. Explicit loading and error screens were not observed. An empty-like friends prompt keeps the black field and concise action rather than introducing a generic illustration-heavy blank state.

# iOS adaptation

Extend black through both safe areas and keep expressive color objects within face- and text-safe insets. Use vertical scrolling for entries, results, tools, analytics, friends, and settings; reserve lower inset for the persistent bar or focused pill action. Keep the dominant check-in object visually central across compact and tall iPhones instead of filling extra height with copy.

Mood cells, chips, tool cards, navigation items, close controls, and journal actions need at least 44-point targets. On compact widths, reduce grid columns or stack metadata before shrinking emotion labels or central geometry. Preserve VoiceOver order from prompt through emotion choice, supporting context, and confirmation. Dynamic Type should expand cards and lists. The observed appearance is dark; do not create an unrelated light palette without a separately designed system.

# Anti-generic checklist

- Do not replace the full black field with a grouped gray or white SwiftUI canvas.
- Do not flatten serif questions and reflective statements into the same sans-serif hierarchy as settings.
- Do not reduce emotional color to tiny badges while leaving the viewport mostly neutral cards.
- Do not use default blue tint for selected controls, links, tabs, or toggles.
- Do not turn every screen into a uniform stack of identical dark cards.
- Do not render the bottom navigation as an unstyled tab view with bright generic selection.
- Do not confuse authored illustrations, emotion glyphs, charts, photographs, and functional icons.
- Do not replace compositionally important emotion geometry or authored art with SF Symbols, emoji, or SwiftUI shape approximations.

</design-context>
