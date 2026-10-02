<design-context>
---
version: 1
platform: iOS
name: Brilliant-design-analysis
description: "A spacious white interactive-learning interface with bold rounded headings, bright blue actions, green progress accents, centered educational models, pill navigation, and a fully developed charcoal dark appearance."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F4F5"
  accent-primary: "#4267F5"
  accent-secondary: "#25BFA8"
  text-primary: "#111214"
  text-secondary: "#656A70"
  divider: "#E2E4E6"
  destructive: "#D94A57"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 23}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 17}
spacing:
  screen-horizontal: 20
  section-gap: 32
  card-padding: 18
  control-gap: 12
rounded:
  control: 16
  card: 22
  sheet: 28
  pill: 999
components:
  blue-primary-action: {fill: "#4267F5", text: "#FFFFFF", shape: "wide pill"}
  answer-choice: {fill: "#FFFFFF", border: "pale gray or blue selected", shape: "rounded rectangle"}
  educational-model-card: {fill: "#FFFFFF", imagery: "large centered model", chrome: "minimal"}
  progress-strip: {fill: "pale gray", active: "green or course accent", shape: "short rounded track"}
  pill-tab-bar: {fill: "light or dark translucent surface", selected: "high contrast"}
---

# Overview

Brilliant is a spacious, single-focus learning interface. White or deep charcoal fills the screen, while a bold prompt, one large educational model, and a bottom-anchored action define the reading order. Bright blue drives primary actions and selections; green and course colors communicate progress. Rounded controls and a compact pill tab bar soften the system without turning lessons into generic card stacks.

# Non-negotiable visual invariants

- Each focused learning screen gives one prompt or concept clear visual dominance, with generous empty space around it.
- Custom educational imagery is a primary content mass, centered and large enough to inspect; it cannot be replaced by a small symbol.
- Primary actions use a bright blue, wide pill or rounded control with white text.
- Answer choices are bordered rounded blocks whose selected state gains an unmistakable blue outline or fill treatment.
- Progress is kept near the top as a short, quiet strip, dots, or course-colored indicator rather than a large dashboard widget.
- Headings are bold and rounded in character, clearly separated from compact body and control text.
- Bottom navigation is a compact pill-like surface with three evenly weighted destinations and a high-contrast selected state.
- Dark appearance uses true black or deep charcoal fields, white text, dim separators, and retained blue/green accents rather than simple color inversion.

# Color and surfaces

Light appearance uses a clean white canvas and white primary surfaces, with pale gray for dividers, disabled controls, secondary containers, and answer backgrounds. Bright blue identifies primary actions, selected answers, and active learning controls. Green or teal carries progress and positive feedback. Yellow, purple, and multicolor gradients appear selectively in premium and course imagery. Destructive or incorrect emphasis uses restrained red.

Dark appearance shifts the canvas and main surfaces to black and deep charcoal, while text becomes white or cool gray. Bottom bars and cards become darker translucent layers; blue actions and green progress remain saturated. Default iOS blue is close in family but must not replace the specific bright action color or course accent system. Heavy shadows, beige backgrounds, or decorative gradients on ordinary controls would break the reference.

# Typography

Prompts and screen titles use bold rounded sans-serif forms with short line lengths and strong vertical presence. Body copy, answer labels, and navigation are compact, regular, and highly legible. Progress labels and metadata are smaller and muted. Buttons use semibold centered labels. Numerals in exercises and progress remain clear and direct, while course titles can carry stronger display weight.

Use SF Pro Display as the safe substitute for large headings and SF Pro Text for body and controls. Under Dynamic Type, allow prompts and explanations to wrap and make the learning content scroll before shrinking diagrams or answer labels. Preserve the visible hierarchy between prompt, model, choices, and helper text.

# Screen composition

Focused lesson screens begin with a safe-area-aware top strip containing close/back, progress, and small utilities. A short prompt sits above a large centered educational model or answer area. Choices occupy the middle-to-lower region, and a wide primary action sits above the bottom safe area. Content is usually inset 20 points or more, with generous vertical gaps.

Home archetype: a concise greeting or progress context leads into a prominent recommended lesson or course card, supporting streak or league content, and a rounded three-item bottom bar.

Lesson archetype: compact top progress, bold prompt, dominant manipulable or explanatory visual, answer choices, and one bottom continuation action form a strict vertical hierarchy.

Course-catalog archetype: horizontal category tabs precede stacked rounded course cards with color-coded art and concise progress information.

Leaderboard archetype: a title and status lead into compact ranked rows, with a highlighted current position and a large league or medal visual.

Settings archetype: simple full-width list rows, toggles, chevrons, and a segmented appearance selector use restrained white or dark grouped surfaces.

# Navigation appearance

The main bottom navigation is a rounded pill-like light or dark surface with three icon-label items. The selected state gains stronger text, icon, or local fill contrast. Focused flows replace it with compact circular close or back controls and a slim top progress indicator. Course categories use horizontally scrolling text or pill tabs. Settings rows use standard compact chevrons. Bottom sheets and subscription cards use large corners and clear dimming without oversized navigation chrome.

# Components

Primary actions are wide blue pills or rounded rectangles with white semibold labels; disabled actions use pale gray fill and muted text while retaining geometry. Answer choices are large rounded rectangles with a quiet border; selection uses a clear blue outline and result states add course or semantic color. Multiple-choice grids keep even gaps and equal visual weight.

Course cards combine a large authored visual, short title, progress, and restrained action on a white, colored, or dark surface. Progress bars and dots are thin, rounded, and placed near the screen top. Subscription plan cards use distinct selected borders or fills and may include controlled yellow-purple gradient accents. Toggles, appearance segments, leaderboard rows, CAPTCHA, sign-in controls, and settings lists stay visually quieter than lesson content.

# Imagery and icons

Custom educational imagery is essential and often occupies the center third or more of the viewport. It includes rounded 3D or vector scales, cubes, math objects, course tiles, medal and league objects, abstract models, and a soft mascot-like form. The art uses crisp silhouettes, soft volume, bright conceptual colors, and minimal environmental detail. It remains readable on both white and charcoal canvases.

Navigation and utility icons are compact, simple, and secondary. Do not replace educational models, league objects, mascot art, or course identity visuals with arbitrary SF Symbols or omit them while assets are pending. Preserve complete diagrams and do not crop relationships the learner must see.

# States

Observed states include onboarding progress, disabled continuation, selected answer with blue outline, in-lesson progress, course-tab selection, subscription plan selection, paywall, CAPTCHA, sign-in options, leaderboard highlight, settings toggles, light/auto/dark selection, and complete light and dark home or lesson surfaces. Disabled controls reduce contrast but remain visible; selected and progress states retain the same rounded geometry. The illustration language remains consistent across light and dark appearances, with adjusted surrounding contrast.

# iOS adaptation

Use safe-area-aware vertical containers with the action inset above the home indicator. Focused lessons should scroll as a unit when Dynamic Type or a compact screen cannot fit prompt, model, answers, and action; never crop the model to preserve a fixed height. Horizontal course categories may scroll. Provide at least 44-point targets for close, tabs, choices, toggles, and buttons.

VoiceOver order should follow progress, prompt, meaningful model description or accessible interactive model, choices, feedback, and continuation. Do not convey variable or result meaning through color alone. Native sheets, sign-in, and permission transitions can remain native, but app-owned surfaces must match the rounded, spacious hierarchy. Implement light and dark appearances explicitly, including charcoal surfaces and retained course accents.

# Anti-generic checklist

- Do not replace custom educational models with arbitrary SF Symbols or emoji.
- Do not turn each lesson section into nested generic white cards.
- Do not ship an unstyled `TabView`, `Form`, `List`, or default blue button stack.
- Do not flatten prompt, answer, explanation, and metadata into one text scale.
- Do not crowd the centered model with secondary controls or decorative copy.
- Do not omit light/dark surface differences or mechanically invert the palette.
- Do not apply one corner radius to answer choices, course cards, sheets, and pill navigation.
- Do not crop diagrams, objects, or labels that carry instructional meaning.

</design-context>
