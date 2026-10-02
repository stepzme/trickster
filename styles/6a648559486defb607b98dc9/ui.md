<design-context>
---
version: 1
platform: iOS
name: Bereke-design-analysis
description: "A bright retail-banking interface built from pale gray canvases, white rounded financial groups, saturated green actions, electric-blue campaign blocks, dense SF typography, a persistent rounded tab bar, and authored 3D product objects."
colors:
  canvas: "#F3F5F6"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEF1F3"
  accent-primary: "#06BF4F"
  accent-secondary: "#0648F5"
  text-primary: "#15171A"
  text-secondary: "#73777D"
  divider: "#E2E5E8"
  destructive: "#E5484D"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 30}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 700, lineHeight: 24}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 18
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 18
  sheet: 24
  pill: 999
components:
  primary-action: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.surface-primary}", typography: "{typography.label}", rounded: "{rounded.control}"}
  secondary-action: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", typography: "{typography.label}", rounded: "{rounded.control}"}
  primary-card: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", typography: "{typography.body}", rounded: "{rounded.card}"}
  navigation: {backgroundColor: "{colors.surface-primary}", activeColor: "{colors.accent-primary}", inactiveColor: "{colors.text-secondary}", typography: "{typography.caption}", rounded: "{rounded.sheet}"}
---

# Overview

Bereke uses a quiet light banking shell with most screens on a pale cool-gray canvas and content grouped into white rounded blocks. Green is the only recurring committed-action color, while electric blue appears on promotional banking panels and selected product imagery. The app feels denser than a generic SwiftUI starter because each screen combines compact financial rows, rounded category modules, small line icons, and occasional authored 3D objects inside product or onboarding surfaces.

# Non-negotiable visual invariants

- Most task screens sit on a pale gray canvas with full-width white cards, lists, or form fields inset by roughly 10-16 points.
- Primary commit controls are saturated green rounded rectangles near the bottom edge or inside product cards.
- Promotional and discovery areas use strong blue or turquoise panels with isolated 3D finance objects, not flat illustrations alone.
- Dense finance rows keep black primary labels, gray secondary captions, thin dividers, and small green outline icons aligned at the leading edge.
- The main sections use a white rounded bottom tab bar with green active icons and gray inactive labels.
- Amounts, rates, and balances are large bold SF numerals, while supporting conditions stay compact and gray.
- Modal sheets dim the underlying screen and present a white rounded top sheet with a small centered grab handle.

# Color and surfaces

The base color mass is light: a cool gray canvas surrounds white grouped lists, white cards, white input fields, and white modal sheets. Saturated green marks primary buttons, selected tab icons, checked states, active chips, and positive success marks. Electric blue is reserved for promotional product cards and some authored product objects, so using blue as the default action tint would visibly confuse the hierarchy.

Secondary controls and inactive segmented areas are light gray, close to the canvas but slightly raised through contrast. Dividers are thin pale gray lines inside long lists. Text is near-black for labels and numbers, medium gray for explanations, timestamps, placeholders, and card conditions. Destructive or warning visuals appear sparingly as red symbols or red text inside otherwise neutral rows.

# Typography

The type system is SF-based and compact. Screen titles are small, centered, and bold in the navigation area; section headings inside content are bolder and left-aligned. Product rows use 14-16 point semibold labels with smaller gray captions underneath. Large financial figures and rates use bold display numerals, often taking the first readable position inside a card.

Labels are sentence case, not all caps. Numeric content is set tightly and plainly with currency symbols close to the amount. On compact screens, the hierarchy survives by wrapping secondary captions before reducing the visual size of amounts, rates, primary labels, or bottom actions.

# Screen composition

The recurring composition is a status-bar-safe top area, a short navigation title or back control, a vertically scrolling content field, and either a fixed bottom tab bar or a fixed bottom primary button. Main dashboard screens are denser: a blue promotional card spans nearly the full width near the top, a horizontal shortcut strip follows, then white tiles and product cards stack down the canvas.

Directory screens for transfers, payments, services, and settings are mostly single-column lists. Each row has a small leading icon, two-line text when needed, a trailing chevron or control, and thin internal dividers. Product discovery screens use larger white cards with an illustration on the right and a green or gray action chip near the left. Bottom sheets occupy the lower half to two-thirds of the screen and preserve the rounded white card language over a dimmed background.

# Navigation appearance

The main navigation is a white bottom bar with five evenly spaced icon-and-label items, rounded into the bottom safe area. The selected item turns green and the inactive items remain gray. Main screens show a centered title, a small circular profile mark at the upper left, and a green outline notification icon at the upper right.

Deeper screens remove the tab bar and use a minimal top bar with a green or dark back chevron, centered title, and occasional right-side text or icon action. Segmented tabs are light gray rounded tracks with a white selected segment and green selected text when the section state is active.

# Components

Primary buttons are full-width green rounded rectangles with white centered semibold labels. Smaller green buttons appear inside product cards as rounded pills. Secondary buttons are white or pale gray pills with dark text; disabled-looking fields remain pale gray with subdued text.

Cards use white fills, large rounded corners, and little or no shadow. Product cards may be tall horizontal banners, two-column tiles, or stacked half-height rows, but they keep the same white surface and rounded corners. List rows are compact and separated by hairlines; icons are mostly green outline symbols inside soft green circular or square containers.

Inputs appear as pale-gray rounded rectangles or underline-style fields depending on the flow. Clear controls are small gray x marks. Toggles use the native pill shape but appear muted gray when off. Success states center a green circular check mark above bold result text.

# Imagery and icons

Imagery appears in two stable treatments. The first is polished 3D finance artwork in blue, green, white, and gray: cards, coins, percent signs, safes, calculators, and document-like objects. These objects usually sit on the right side of product cards or above onboarding text and cast soft shadows on white or blue surfaces.

The second treatment is thin line art for identity and instructions, such as a smiling phone or verification drawing. Routine financial lists rely on simple green outline icons rather than large imagery. Icons stay small, rounded, and pictographic; arbitrary filled SF Symbols would look heavier than the observed system.

# States

Observed states keep the same light shell. Empty favorites areas use a white card with a green outline star and gray explanatory text. Completed operations use a centered green check icon, bold success title, and a green bottom action. Form-filled states add clear x controls at the trailing edge of fields and keep the green bottom action.

Modal explanation states dim the full screen and present a white bottom sheet with a rounded top edge and short handle. Selected tabs, chips, and bottom navigation states consistently use green, while inactive choices stay gray or white.

# iOS adaptation

On current iPhone sizes, preserve the top status-bar spacing, the bottom safe-area tab bar or bottom action, and the 16-point horizontal rhythm. Scroll long lists instead of shrinking row height; the reference prefers dense but readable vertical stacks over compressed typography. Large rates and balances should remain visually dominant, with captions wrapping below them.

Native sheets can be used when their visible result matches the observed white rounded sheet over a dim overlay. Forms should keep full-width bottom actions above the safe area. Light appearance is the observed baseline; a dark theme should not be inferred from these screens.

# Anti-generic checklist

- Do not replace Bereke green actions and selected states with default iOS blue.
- Do not use a plain `Form` look with grouped system gray headers; the reference uses custom white cards, compact rows, and green outline icons.
- Do not flatten product discovery into text-only lists; blue and white cards with right-side 3D objects are a visible part of the style.
- Do not remove the rounded white bottom tab bar on main sections.
- Do not apply one radius to every surface; buttons, cards, sheets, and small icon containers have visibly different roundness.
- Do not use oversized marketing typography on routine banking screens; most headings are compact and financial numbers carry the scale.

</design-context>
