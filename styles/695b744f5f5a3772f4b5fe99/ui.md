<design-context>
---
version: 1
platform: iOS
name: MTBank-Moby-design-analysis
description: "A light native-feeling banking interface anchored by a large electric-blue gradient account stage, rounded white financial cards, blue outline actions, restrained gray forms, realistic card art, and bottom sheets."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F3F4"
  accent-primary: "#1677E8"
  accent-secondary: "#20C7E8"
  text-primary: "#17191C"
  text-secondary: "#697079"
  divider: "#E2E5E8"
  destructive: "#D93B4C"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 14
  card: 22
  sheet: 28
  pill: 999
components:
  primary-action: {background: "#1677E8", foreground: "#FFFFFF", minHeight: 52, cornerRadius: 14}
  secondary-action: {background: "#F2F3F4", foreground: "#1677E8", minHeight: 48, cornerRadius: 14}
  primary-card: {background: "#FFFFFF", foreground: "#17191C", cornerRadius: 22, padding: 16}
  navigation: {background: "#FFFFFF", selected: "#1677E8", unselected: "#969DA6"}
---

# Overview

MTBank Moby combines a mostly native, white iOS banking shell with one distinctive blue account stage. The home composition is dominated by a large electric-blue gradient header containing balance context, quick actions, and overlapping financial cards; task screens become quieter white forms with blue controls, generous spacing, and pinned bottom actions. Realistic card art and compact blue outline icons provide most of the imagery.

# Non-negotiable visual invariants

- The main account overview uses a large blue gradient field across roughly the upper half, ending in broad rounded lower corners.
- Primary actions, back controls, active states, and key icons use saturated bank blue.
- Three equal white quick-action tiles sit visibly against the blue account stage.
- Financial products appear as generously rounded white cards with clear balance, identifier, status, and controlled shadows.
- Task screens remain mostly white, sparse, and vertically composed rather than inheriting the full gradient.
- Primary form actions are broad blue rounded rectangles pinned near the bottom safe area; disabled versions retain geometry in light gray.
- Bottom sheets are tall white rounded panels with a grab handle, blue line icons, and dimmed context.
- Amount, currency, transaction direction, and status retain stronger hierarchy than promotional content.

# Color and surfaces

White is the default canvas for transfers, payments, history, settings, and product details. Cool light gray groups inputs, disabled actions, search, and secondary rows. The account overview introduces a saturated electric-blue gradient as the largest color mass, with white action tiles and cards layered over or below it.

Near-black carries balances, amounts, titles, and form values; medium gray carries subtitles, masked identifiers, timestamps, and inactive navigation. Bright blue defines actions, active navigation, outline icons, and focused controls. Green marks positive amounts and completed outcomes; red is restricted to destructive decisions, failure, or logout. Cyan and magenta appear only in bounded brand or sub-product moments. A generic system palette that spreads blue across all secondary content would flatten the hierarchy.

# Typography

Use SF Pro Display for balance and major financial values and SF Pro Text for titles, rows, inputs, and metadata. Hero balances or state values sit around 30–34 points in bold weight. Page titles are roughly 24–28 points; section headings 18–20 points; standard rows and form values 15–16 points; timestamps, masked identifiers, and helper text 11–13 points.

Amounts use stable, high-contrast numerals with currency visually attached but quieter when appropriate. Green or black communicates direction in transaction lists; labels and conditions remain gray. Titles are plain and usually left aligned, with centered treatment limited to focused confirmation or detail states. Under Dynamic Type, helper text and key-value rows wrap before amounts, selected accounts, or the primary CTA lose priority.

# Screen composition

Task screens use roughly 16-point side insets, 12–16-point control gaps, and 24–32 points between major groups. The native status bar and compact title row sit at the top; form or list content flows vertically; a primary CTA frequently occupies the bottom safe-area region.

Observed archetypes:

- Account overview: blue gradient upper stage, masked balance and identity, three white quick actions, horizontally peeking product cards, promo strip, and persistent bottom tab bar.
- Transfer or payment form: compact blue back control, plain title, source and destination selectors, large amount field, sparse white space, and pinned blue CTA.
- Catalog or product list: search or promotion near the top, flat rows with blue outline icons and chevrons, and occasional floating bottom action.
- Transaction history: date-grouped flat rows with small icon tiles, concise status, and aligned signed amounts.
- Operation detail: centered status icon and amount above key-value facts, followed by two restrained bottom actions.
- Card detail: large realistic card image, compact quick actions, segmented content, and grouped settings rows.
- Bottom decision sheet: large rounded white panel over dimmed content, with handle, title, option rows, and primary button.

Long content scrolls vertically, but bottom actions remain above the home indicator. Promotion remains secondary to accounts and tasks.

# Navigation appearance

Back navigation is a compact blue chevron with a plain text title rather than a heavy custom header. The observed bottom tab bar is a white edge-integrated surface with four icon-and-label items; the selected item uses blue while inactive items remain gray.

Bottom sheets use a small centered handle, pronounced rounded top corners, a dimmed backdrop, and blue outline iconography. Floating action pills appear on some quiet lists but are not the global navigation style. These properties govern appearance only; tab count and route structure belong to the product definition.

# Components

Primary buttons are full-width blue rounded rectangles around 48–52 points high with white semibold labels. Pressed states deepen the blue; disabled states use a light-gray fill and muted label. Secondary actions use white or pale gray with blue text or outline icons.

Account and product cards have 18–24-point radii, white fills, restrained elevation, and internally grouped balance, masked number, badge, and visibility controls. Quick actions are equal white rounded tiles with blue line icons. Amount inputs use large numerals, currency labels, and compact clear or swap controls.

Selectors are broad rounded rows containing account or bank identity, supporting text, and a chevron. History rows use date grouping, small blue icon tiles, and right-aligned signed amounts. Card settings and profile modules use flat grouped rows with native-feeling switches. Confirmation code uses four visible positions above the iOS numeric keyboard. All icons and compact affordances keep at least a 44-point hit area.

# Imagery and icons

The core banking UI uses realistic card previews, payment network marks, compact promo banners, and simple blue outline icons. Card art is contained within generous rounded bounds and never competes with the balance or primary task. No financial data charts were observed.

Onboarding uses polished dark space imagery with a glowing glass-like emblem, while a separate rewards area uses bright cyan and magenta blob characters and confetti. These are distinct branded clusters rather than one coherent app-wide illustration system; do not merge them or extrapolate either into routine forms, histories, or settings.

Functional icons remain small, clear, and secondary to text and amounts. Do not substitute arbitrary mixed SF Symbols when the observed blue outline set is visible. When card or promotion imagery is compositionally present, preserve its scale, crop, and text-safe area while final assets are pending.

# States

Observed states include onboarding, native notification and Face ID permission alerts, populated account overview, selected transfer sources and destinations, amount entry, SMS code with keyboard and timer, payment and product bottom sheets, completed transaction, empty deposit state, blocking missing-account state, populated history, card settings, profile switches, and notifications.

Success uses a green confirmation mark within a white rounded sheet while retaining the blue return action. Empty states use a small centered line icon and muted explanatory text with ample white space. Blocking states use a pale elevated message card and disabled gray CTA rather than a full-screen color change. Across states, blue remains action color, white remains operational canvas, and amounts or status retain the strongest hierarchy.

# iOS adaptation

Extend the blue home stage through the top safe area where the gradient is active; keep balances and controls inside readable insets. White task pages respect the status-bar inset. Use vertical scrolling for forms, history, cards, products, and settings, reserving the bottom safe area for tab bars, sheets, or pinned actions.

Keep account carousels horizontally scrollable and allow cards to peek without shrinking financial text. Present numeric keyboard, notification, Face ID, and other system transitions natively, then return to the same surface. VoiceOver should announce account or transaction identity, amount, currency, status, and action in that order. Dynamic Type may increase rows and cards; compact widths should stack metadata before compressing amounts. The observed package is light-first, with dark imagery limited to onboarding.

# Anti-generic checklist

- Do not extend the cosmic onboarding art or rewards characters across core banking tasks.
- Do not remove the large blue account stage from overview-style compositions.
- Do not replace the three white quick-action tiles with a generic toolbar.
- Do not turn every task page into a blue gradient screen; most forms remain white and sparse.
- Do not use heavy shadows around every card or input.
- Do not replace pinned blue actions with default blue text links or an unstyled `Form`.
- Do not make the tab bar a floating glass capsule when the observed bar is edge-integrated.
- Do not collapse card previews, input fields, sheets, and small icon tiles to one uniform radius.

</design-context>
