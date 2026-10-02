<design-context>
---
version: 1
platform: iOS
name: WB-Bank-design-analysis
description: "WB Bank is a high-density iOS finance surface with hot magenta ecosystem chrome, pale lavender dashboard canvas, dark green money panels, white rounded product tiles, large black numeric type, charcoal confirmation controls, and recurring glossy 3D banking objects."
colors:
  canvas: "#F2EFF8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F6F5F8"
  accent-primary: "#E500C8"
  accent-secondary: "#007A4D"
  action-primary: "#292832"
  text-primary: "#171719"
  text-secondary: "#6E6E75"
  text-tertiary: "#A3A3AA"
  divider: "#E6E3EA"
  success: "#159266"
  warning: "#E7A73A"
  destructive: "#D94F59"
  overlay: "#000000"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 700, lineHeight: 44, letterSpacing: 0}
  amount: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 400, lineHeight: 40, letterSpacing: 0}
  title: {fontFamily: "SF Pro Text", fontSize: 22, fontWeight: 700, lineHeight: 28, letterSpacing: 0}
  section: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 700, lineHeight: 22, letterSpacing: 0}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20, letterSpacing: 0}
  label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 600, lineHeight: 17, letterSpacing: 0}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 14, letterSpacing: 0}
spacing:
  screen-horizontal: 12
  section-gap: 20
  card-padding: 12
  control-gap: 8
rounded:
  control: 12
  card: 14
  sheet: 18
  pill: 999
components:
  primary-action: {backgroundColor: "{colors.action-primary}", textColor: "{colors.surface-primary}", typography: "{typography.body}", rounded: "{rounded.control}", padding: [15, 18]}
  dashboard-tile: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", typography: "{typography.label}", rounded: "{rounded.card}", padding: 12}
  wallet-panel: {backgroundColor: "{colors.accent-secondary}", textColor: "{colors.surface-primary}", typography: "{typography.amount}", rounded: "{rounded.card}", padding: 16}
  bottom-navigation: {backgroundColor: "{colors.surface-primary}", selectedColor: "{colors.accent-primary}", textColor: "{colors.text-tertiary}", typography: "{typography.caption}"}
---

# Overview

WB Bank appears as the bank section inside a Wildberries iOS shell. The first-launch surfaces are saturated magenta and purple, while the bank home shifts to a pale lavender canvas filled with compact white modules. Money balances use dark green panels or large black numerals, and most transactional screens become sparse white pages with a centered amount, pale form rows, a custom numeric keypad, and one charcoal rounded action button.

# Non-negotiable visual invariants

- A small magenta Wildberries capsule remains centered in the iOS status/navigation chrome on most observed screens.
- The Bank tab is selected with a bright magenta pill in a five-item bottom bar; inactive tab icons are light gray.
- The bank home uses a pale lavender canvas with a dense two-column grid of white rounded tiles below discount, tariff, transfer, and wallet modules.
- Wallet and savings balances occupy prominent top panels: dark green for wallet value, green gradient for savings, and large black numerals on white task screens.
- Product discovery tiles frequently include one glossy 3D banking object, usually clipped to a tile edge or hero panel.
- Transfers, payments, applications, and settings screens reduce the dashboard density into white full-screen forms with thin dividers and charcoal bottom actions.
- Magenta is reserved for ecosystem branding, selected navigation, discount progress, and small badges; it is not used as success, error, or the primary transaction button color.

# Color and surfaces

The dashboard background is a cool pale lavender field. White cards sit directly on it with soft separation, low contrast shadows, and rounded corners. The login and permission path uses a full-bleed magenta-to-violet gradient, including a magenta search area visible behind the iOS tracking permission sheet.

Green is the observed money color: wallet cards are deep green with white text, savings headers use a vertical green gradient, and positive states use small green checks or status fills. Charcoal appears as the decisive action fill on transfer, card, loan, notification, and application screens. Text is near-black for amounts and section titles, medium gray for explanatory lines, and very pale gray for disabled or secondary iconography.

# Typography

The visual hierarchy is numeric first. Amounts such as wallet balance, transfer value, available installments, and savings totals use large, open SF-style numerals with ample white space. Titles are compact, bold, and centered on task screens; dashboard tile labels are smaller and heavier than their descriptions. Supporting copy is regular-weight gray text, often two lines inside tiles or list rows.

The bank home compresses many labels into small type without making every tile equally bold. Transaction screens instead isolate a single amount in the upper half and keep fee, account, recipient, and comment labels visibly subordinate.

# Screen composition

The home composition is modular and dense: top chrome, a discount card paired with tariff/quick-action blocks, a wide green wallet panel, a horizontal promo banner, and a two-column grid of product tiles. The first screen often shows only the start of lower tiles, making vertical scrolling part of the visual rhythm.

Financial task screens use a top back control, centered page title, and large empty white zones. Transfer amount entry places the amount high, the source/recipient block below it, preset amounts and custom keypad in the lower half, and the charcoal action button above the home indicator. Settings and detail pages use stacked full-width rows with subtle dividers and small line icons.

Bottom sheets appear as white panels with rounded top corners over a dimmed page. They keep left-aligned labels and end with the same full-width charcoal confirmation button.

# Navigation appearance

The persistent bottom bar is white and visually light. It uses five small glyphs, gray inactive labels/icons, magenta notification badges, and a bright magenta rounded capsule for the selected Bank tab. Page-level navigation is minimal: a thin back chevron at top left, centered title, and occasional compact right-side glyphs. Dashboard overflow and notification icons are black outline glyphs in the top right.

# Components

Dashboard tiles are white rounded rectangles with one main label, one supporting value or sentence, and occasional small colored product marks. The larger wallet panel is a deep green rounded card with balance text at the left and compact top-up/card controls at the right. Promo banners are pale cyan, pink, or white strips with a single glossy object on one side.

Inputs and selectable rows are pale filled rounded rectangles with thin borders or dividers. Phone transfer selection shows bank logos in a vertical list; account and recipient rows inside amount entry are stacked in a single light container. Primary buttons are wide charcoal rectangles with medium corner radius and centered white text. Toggles use the iOS switch silhouette but sit inside custom white list rows.

# Imagery and icons

Imagery is promotional rather than decorative background. The observed system repeats glossy 3D cards, wallets, coins, calculators, gift-like objects, and small product miniatures. They sit inside product tiles, green or pastel hero panels, and banners, usually occupying the right or lower portion while text remains readable.

Operational screens become flatter: transfer forms, settings, confirmation receipts, and permission sheets use icons, bank logos, small status marks, and plain typography instead of large art. The receipt screen keeps only a small app/bank icon above the amount, with a faint pink-lavender glow near the bottom edge.

# States

Observed states include iOS tracking permission over a magenta marketplace screen, contact permission over the bank list, SMS entry with six pale code boxes, empty installment history, virtual card processing, transfer confirmation sheet, transfer receipt, connected notifications, settings toggles, and a support-topic bottom sheet.

The same visual constants hold across these states: white sheets over dimmed content, charcoal confirmation buttons, magenta brand capsule in the top chrome, pale filled rows, restrained gray secondary copy, and large centered numerals for money outcomes.

# iOS adaptation

The reference is optimized for a narrow iPhone viewport with content under the status bar and a persistent bottom bar above the home indicator. Dashboard pages can scroll through dense cards, but amount entry, receipts, and application pages keep a single primary task centered vertically with the action fixed low in the visible screen.

Compact-width adaptation should preserve the observed proportions: full-width financial forms, two-column dashboard tiles, wide green money panels, and bottom sheets that rise from the safe area. Larger text can wrap in supporting copy, while amounts, page titles, and action buttons should remain visually dominant and uncluttered.

# Anti-generic checklist

- Do not replace WB magenta selection and branding with default iOS blue.
- Do not turn the home screen into a plain white `Form` or uniform card list.
- Do not remove the green wallet/savings panels or flatten them into neutral white cards.
- Do not use a stock unstyled `TabView`; the Bank tab must read as a magenta selected pill in a light marketplace bar.
- Do not substitute generic SF Symbols for observed bank logos, colored product marks, or glossy product objects.
- Do not carry large 3D art into transfer confirmations, settings rows, or receipts where the reference is mostly flat.

</design-context>
