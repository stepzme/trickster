<design-context>
---
version: 1
platform: iOS
name: ATTO-design-analysis
description: "ATTO uses a bright teal service shell, white rounded sheets, deep indigo transport cards, green and blue payment tiles, compact bold SF typography, and soft 3D transport objects on onboarding and service surfaces."
colors:
  canvas: "#F3F6FA"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EAF0F6"
  accent-primary: "#28B86B"
  accent-secondary: "#302A8F"
  text-primary: "#07132E"
  text-secondary: "#697386"
  divider: "#E2E7EE"
  destructive: "#EF3F4E"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 800, lineHeight: 36}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 30}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 14
  control-gap: 12
rounded:
  control: 14
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.surface-primary}", typography: "{typography.label}", rounded: "{rounded.control}"}
  secondary-action: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", typography: "{typography.label}", rounded: "{rounded.control}"}
  primary-card: {backgroundColor: "{colors.accent-secondary}", textColor: "{colors.surface-primary}", typography: "{typography.body}", rounded: "{rounded.card}"}
  navigation: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-secondary}", selectedColor: "{colors.accent-secondary}", typography: "{typography.caption}"}
---

# Overview

ATTO alternates between two visible visual environments. The public service surfaces use a teal-to-blue gradient header behind a large white rounded sheet filled with soft 3D transport and city-service objects. The signed-in transport surfaces switch to a pale blue-gray canvas, deep indigo virtual-card panels, white action cards, and saturated green, blue, and violet payment tiles.

The reference does not look like a plain grouped SwiftUI app: the largest visible objects are rendered vehicles, a dark virtual card, map panes, or payment result amounts. Text is compact and bold, controls are heavily rounded, and most screens avoid borders in favor of shadows, soft fills, and clear color blocks.

# Non-negotiable visual invariants

- A teal-blue gradient shell appears on onboarding and the public service hub, with a white rounded sheet rising from the lower portion of the screen.
- Onboarding pairs one large soft 3D transport or city object above a white copy panel with oversized dark navy headline text.
- Signed-in transport screens use a pale gray-blue canvas with a dark indigo virtual card near the top and a two-column grid of payment tiles below it.
- Primary payment success screens use a saturated green curved header, a centered white check mark disk, and one huge numeric amount on a pale canvas.
- Map screens are full-screen map or diagram surfaces with floating white pill controls and small circular shadowed buttons, not card stacks.
- Bottom sheets are white, high-radius panels over a dark scrim, with a small drag handle, bold title, and large rounded rows or actions.
- Selected bottom navigation states use a dark violet icon/indicator while inactive items stay muted gray.

# Color and surfaces

The public shell is a vertical teal-to-blue gradient that remains visible above and around the rounded white service sheet. White is the dominant foreground surface for onboarding copy panels, service grids, menu sheets, bottom sheets, map controls, and modal cards. Signed-in transport screens replace the gradient with a very pale blue-gray canvas that lets the indigo card and colored actions stand forward.

The strongest recurring color block is the deep indigo transport card, sometimes with faint geometric linework. Green marks purchase, top-up success, positive actions, and some 3D vehicle bodies. Bright blue appears on NFC actions and map-adjacent controls. Violet/indigo anchors virtual cards, selected navigation, small icons, and some top-up/payment surfaces. Dividers are very light gray and used sparingly; the app more often separates rows with whitespace and surface changes. Destructive or error states appear as red alert/toast surfaces with white error marks.

Generic iOS blue as the only accent would break the reference because ATTO visibly depends on separated green purchase states, blue NFC/map states, and dark indigo card/navigation states.

# Typography

Typography is system-like but heavier than default. Onboarding headlines use large, tightly stacked SF Pro Display in dark navy, usually occupying the upper half of the white copy panel. Screen titles use centered or left-aligned bold SF Pro Text/Display around 20 to 24 points. Tile labels are short, dark, and semibold; captions are small gray text.

Numbers receive strong emphasis: balances on cards are large and white, top-up and tariff success amounts are huge dark navy figures, and monetary units remain small and close to the number. Menu rows and sheet choices use compact body text with single-line labels where possible. At larger Dynamic Type sizes, the visual hierarchy should preserve big numeric/payment emphasis first, then card title or sheet title, then supporting copy.

# Screen composition

Onboarding uses a full-height illustration field on top, a white rounded sheet on the lower half, then small pill controls near the bottom safe area. The home/service hub keeps the gradient header and puts a large white sheet below it; inside, a large transport tile occupies the left column while smaller object tiles, a QR strip, and service tiles create a dense rounded grid.

The signed-in transport hub uses a top navigation title, a horizontally paged indigo card, small biometric enable pills, and a two-column payment grid. Later transport states extend the same screen downward with tariff cards while retaining the bottom tab bar. Menu screens use a sparse two-column grid of white cards on the same pale canvas. Card detail screens place the virtual card high, then three compact action tiles and list rows.

Map screens are not framed by app cards: the map or metro diagram fills almost the entire viewport, with controls floating above it and a bottom search strip or pill row near the safe area. Bottom sheets rise from the lower edge with a large radius and often cover half to two-thirds of the screen.

# Navigation appearance

The public home screen shows a hamburger button on the left, centered ATTO wordmark, and a white support/chat icon on the right over the gradient. Signed-in transport screens use a simple iOS-style back chevron and centered bold title on the pale canvas.

The bottom tab bar is white and low-contrast with four compact icon+caption items. The selected item is dark violet with a short top stroke or filled icon emphasis plus a small green dot below; inactive items are gray. Map screens replace the bottom tab bar with floating map controls and bottom pill choices. Sheets use close buttons as pale circular controls with a dark x.

# Components

Transport card: a wide rounded rectangle, deep indigo fill, white name/balance/card number, ATTO virtual mark, occasional AV badge, and subtle geometric pattern. It sits close to the top and defines the signed-in transport visual language.

Payment tiles: two-column rounded cards with soft shadows. Top-up is violet, buy tariff is green, NFC is bright blue, and QR is white with a blue QR icon and gray subtitle. Text sits low-left with generous internal padding.

Service tiles: rounded white or very pale gray tiles with isolated 3D objects centered above a short label. The primary transport tile is larger and cropped tighter than the smaller ticket, scooter, card, cinema, parking, green ticket, and eSIM tiles.

Bottom sheets and modals: white panels with a small gray handle, bold title, dark body text, rounded rows, and green or blue primary buttons. Confirmation dialogs sit inside the sheet as rounded white cards over a dimmed background.

Map controls: white floating pills and circles with subtle shadows, dark icons, and compact labels. The metro map uses a clean white field, colored route lines, and zoom buttons stacked on the right.

# Imagery and icons

Imagery is central on onboarding and service discovery screens. The visible style is soft 3D rendering with smooth plastic-like surfaces, gentle shadows, and bright transport colors. Large vehicles and city objects are cropped by their tile or screen edge, but the defining silhouette remains readable.

Icons in functional screens are simple outline symbols, often dark violet or blue, with minimal decorative detail. Payment and navigation icons are small relative to labels, while onboarding and service imagery can dominate a quarter to half of the visible screen. Map imagery stays as map content; decorative 3D objects do not appear over map labels or transport diagrams.

# States

Observed signed-out access uses a dim scrim over the menu and a white bottom modal with card imagery, green register action, and blue login action. Observed selection states use colored tabs, small checkmarks, highlighted virtual cards, and selected segmented controls.

Observed success states use a green curved header, centered check mark, huge amount, pale background, and one green bottom action. Observed error states include a red toast-style banner over an NFC/payment screen. Observed dark appearance uses a very dark canvas, dark cards, cyan/blue selected outlines, and retains the same rounded card proportions.

# iOS adaptation

Preserve the iPhone-safe-area composition: status bar floats over the top visual field, bottom controls sit above the home indicator, and sheets maintain the large rounded top corners visible in the reference. Use scroll containers where the service grid, tariff grid, or menu rows exceed the viewport; the visual priority should remain top card or hero object first, then primary action tiles, then supporting rows.

Controls should keep iOS-sized touch targets while preserving the observed compact labels and rounded geometry. Dynamic Type can wrap supporting labels, but the main transport card, large payment amount, sheet title, and selected navigation state should remain visually dominant. Light appearance is the default across most screens; dark appearance is visible only as an app theme surface with darker cards and high-contrast selected outlines.

# Anti-generic checklist

- Do not replace the teal public shell and white rounded service sheet with a plain white home screen.
- Do not turn the signed-in transport hub into a default `Form` or a uniform list of system rows.
- Do not flatten the dark indigo virtual card into a generic bank-card rectangle without pattern, ATTO mark, or large balance.
- Do not recolor all actions with default iOS blue; keep green, blue, violet, and indigo roles visually distinct.
- Do not use an unstyled `TabView`; selected tabs need the dark violet emphasis and inactive gray treatment.
- Do not substitute onboarding and service 3D objects with arbitrary SF Symbols or flat monochrome icons.
- Do not remove the green curved success header or the oversized numeric amount from payment result screens.

</design-context>
