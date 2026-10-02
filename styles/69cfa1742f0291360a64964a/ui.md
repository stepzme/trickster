<design-context>
---
version: 1
platform: iOS
name: Duolingo-design-analysis
description: "A white, game-board learning interface with saturated green progression, chunky outlined controls, rounded bold type, persistent compact counters, bottom icon navigation, and large authored mascot art used as the main emotional and instructional visual mass."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F7F7F7"
  surface-disabled: "#E5E5E5"
  accent-primary: "#58CC02"
  accent-secondary: "#1CB0F6"
  accent-purple: "#CE82FF"
  accent-warning: "#FFC800"
  accent-danger: "#FF4B4B"
  text-primary: "#3C3C3C"
  text-secondary: "#777777"
  text-tertiary: "#AFAFAF"
  divider: "#E5E5E5"
  outline: "#D7D7D7"
  overlay: "#000000"
typography:
  hero: {fontFamily: "Nunito Sans", fontSize: 40, fontWeight: 800, lineHeight: 44}
  title: {fontFamily: "Nunito Sans", fontSize: 28, fontWeight: 800, lineHeight: 34}
  section: {fontFamily: "Nunito Sans", fontSize: 22, fontWeight: 800, lineHeight: 27}
  body: {fontFamily: "Nunito Sans", fontSize: 17, fontWeight: 600, lineHeight: 24}
  label: {fontFamily: "Nunito Sans", fontSize: 15, fontWeight: 800, lineHeight: 20}
  caption: {fontFamily: "Nunito Sans", fontSize: 12, fontWeight: 700, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 32
  card-padding: 16
  control-gap: 12
rounded:
  control: 14
  card: 18
  sheet: 24
  pill: 999
components:
  primary-action: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.surface-primary}", typography: "{typography.label}", rounded: "{rounded.control}", padding: [14, 18]}
  secondary-action: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.accent-primary}", typography: "{typography.label}", rounded: "{rounded.control}", borderColor: "{colors.outline}", padding: [13, 18]}
  primary-card: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", typography: "{typography.body}", rounded: "{rounded.control}", borderColor: "{colors.outline}", padding: 14}
  navigation: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-tertiary}", selectedColor: "{colors.accent-secondary}", typography: "{typography.caption}", height: 54}
---

# Overview

Duolingo's sampled iOS screens are built as a friendly game interface rather than a plain form app. White space dominates most screens, while green marks progress, available primary actions, and the active lesson path. The recognisable look comes from rounded bold type, large outlined answer controls, circular lesson nodes with soft shadows, compact resource counters, and authored mascot scenes that carry loading, permission, reward, streak, and profile prompts.

# Non-negotiable visual invariants

- Large areas remain white; color is concentrated in green progression, cyan secondary actions, badges, and character art.
- Primary buttons are full-width rounded blocks with uppercase bold labels and a darker bottom edge or shadow.
- Choice rows and answer tiles use white fills, thick light-gray outlines, rounded corners, and generous vertical spacing.
- The learning path is a centered vertical chain of circular nodes with disabled gray steps and a saturated active node.
- Mascot or cast artwork occupies the visual center of onboarding, loading, completion, streak, reward, and prompt panels.
- Top status areas use compact counters with tiny flags, flames, gems, or energy symbols instead of large headers.
- Bottom navigation uses colorful custom icons with the selected item outlined or filled, not default blue tab styling.

# Color and surfaces

The base canvas is pure white across onboarding, lessons, profile, settings, and ranking screens. Pale gray appears as progress tracks, disabled buttons, locked path nodes, secondary labels, and dividers. Primary green is the dominant action and progress color: start buttons, lesson nodes, progress fills, active course markers, and section banners. Cyan is reserved for secondary positive actions such as reward continuation, profile completion, and upward shortcuts. Purple, pink, yellow, and orange appear as reward, premium, streak, and character-support accents.

Controls rely on visible material separation: answer cards have a white fill with a gray border and a subtle lower shadow; disabled actions turn pale gray with muted text; modal overlays dim the full screen to keep the native or custom sheet in focus. Generic system blue, grouped gray table backgrounds, or borderless text buttons would visibly break the reference.

# Typography

Use a rounded, heavy sans as the primary voice. If the exact rounded brand type is unavailable, use Nunito Sans, Arial Rounded, or SF Pro Rounded rather than default SF Pro alone. Prompts and reward titles are bold and compact, usually 22 to 28 points. Body explanations are medium gray and centered on quiet screens, while answer text is heavier and left aligned inside choices. Button labels are uppercase, centered, and high weight.

Numerals in counters and ranks remain compact and aligned with small icons. Long answer labels wrap inside their tile instead of shrinking into illegibility. With Dynamic Type, keep the prompt, selected answer, and bottom action readable first; supporting counters and secondary explanatory copy may wrap or move lower.

# Screen composition

The common composition uses the iPhone status bar above a narrow top strip: back or close control at the left, a slim progress rail or compact resource counters near the top, then a single main decision area. Onboarding screens use 16 point side gutters, a small mascot bubble near the top of content, stacked rounded choices, and a pinned bottom action. Lesson screens keep the progress bar high, a large prompt near the upper third, one focused answer area in the middle, and a full-width validation button above the home indicator.

Home screens replace a conventional list with a centered vertical game path. A bright rounded module banner sits near the top, the active node floats below it, and disabled nodes step down the page in a loose curve with gray mascot cameos and soft shadows. Profile, leaderboard, course, and settings screens are still white and list-like, but they use the same bold rounded text, custom icons, medal art, outlined rows, and compact dividers. Scroll views should preserve the bottom navigation or bottom action reserve so content never hides under the home indicator.

# Navigation appearance

Top controls are visually light: gray close or back glyphs, slim progress tracks, and compact counters on white. The bottom bar is white with a hairline separator, evenly spaced custom icons, small labels when present, and a bright selected treatment such as a cyan rounded outline, colored fill, or notification dot. Modal and native permission surfaces sit over a dimmed version of the same Duolingo screen rather than switching to a separate visual theme.

# Components

Primary action: full-width rounded rectangle, saturated green or cyan fill, white uppercase bold text, and a subtle darker bottom edge. Disabled action: same geometry, pale gray fill, muted gray uppercase text.

Choice row: white rounded rectangle with gray outline and lower shadow, icon or flag on the left, bold label, and optional right-side checkbox or chevron. Selected and active choices use color on the icon, border, or background while keeping the heavy rounded form.

Lesson node: circular, raised, and centered on the path. Active nodes are green with a white symbol; locked or future nodes are gray with low-contrast symbols and soft drop shadows.

Answer tile: large white card, rounded 8 to 14 points, gray outline, centered label or illustration. Selected cards may use a pale cyan fill and cyan border.

Reward and profile panels: centered illustration, bold multiline title, short gray explanatory copy, and one strong bottom action. Decorative medals, streak dots, and badges may be large, but they must not compete with the action.

Settings rows: white full-width rows on white, bold labels, light gray chevrons, and thin dividers. They should not be rendered as default inset `Form` sections.

# Imagery and icons

Mascot and cast art is compositionally required when visible in the reference. Duo and supporting characters are flat, high-saturation vector-style figures with oversized eyes, soft shadows, simple props, and expressive poses. The art often sits alone in the upper or middle viewport and sets the emotional tone of the screen. Course icons, flags, medals, chests, resource counters, and bottom navigation icons use the same playful custom asset language.

Do not replace these with SF Symbols, emoji, or generic line icons. Temporary assets must preserve the observed scale, centered placement, saturated palette, and rounded silhouette weight until approved raster assets are available.

# States

Observed states include splash, loading, onboarding choices, selected answer, disabled next button, native permission prompt over a dimmed screen, active lesson path, disabled path nodes, completion, streak, achievement, populated leaderboard, profile prompt, store inventory, and settings lists. Across these states, the white canvas, rounded bold type, green/cyan action language, chunky outlines, and custom imagery remain constant.

System permission UI should remain native, but the underlying app state must retain the Duolingo progress bar, mascot prompt, and disabled bottom action. Completion and streak states increase illustration scale and often switch the primary action to cyan while preserving rounded uppercase button treatment.

# iOS adaptation

Extend white or green splash backgrounds into the safe areas. Use vertical `ScrollView` containers for course lists, leaderboards, settings, and long onboarding options. Keep the bottom action or tab bar outside scroll content with safe-area padding, and keep every lesson node, answer tile, chip, counter, tab item, and button at least 44 points tall.

SwiftUI implementations should avoid default `Form`, default `Button`, default `TabView` tint, and unstyled `NavigationStack` bars when they flatten the custom rounded system. Use native permission, keyboard, and alert presentation where needed, then return to the same visual context. VoiceOver order should follow visible order: top progress or counters, prompt, choices or task content, then bottom action. Dynamic Type may increase vertical scroll, but the prompt, selected control, and primary action must keep their hierarchy on compact widths.

# Anti-generic checklist

- Do not replace mascot scenes, medals, flags, or tab art with SF Symbols, emoji, or simple programmatic shapes.
- Do not turn the path into a normal vertical list or timeline.
- Do not use default blue tint, borderless text buttons, or plain SwiftUI `Form` rows.
- Do not remove the thick outlines and lower-edge shadows from answer tiles and buttons.
- Do not make every screen equally colorful; most screens are white with concentrated green, cyan, and authored art.
- Do not crop character faces, hands, props, or reward medals when they are the main visual mass.

</design-context>
