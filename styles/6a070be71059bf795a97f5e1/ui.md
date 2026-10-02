<design-context>
---
version: 1
platform: iOS
name: Gosuslugi-design-analysis
description: "A civic-service visual system using a deep cobalt home header, white administrative cards, saturated blue actions, pale-blue form fields, compact official typography, colorful document cards, restrained line icons, assistant surfaces, and sticky bottom actions. The style makes dense government data readable through grouping, contrast, and stable information hierarchy."
colors:
  primary: "#0D5BD7"
  primary-strong: "#0848AE"
  primary-soft: "#E8F0FF"
  brand-red: "#E83959"
  ink: "#17191D"
  ink-muted: "#666D77"
  ink-subtle: "#9AA1AB"
  canvas: "#FFFFFF"
  pale-canvas: "#F6F8FB"
  auth-canvas: "#EAF1FF"
  surface-1: "#FFFFFF"
  surface-2: "#F2F5FA"
  surface-3: "#E8EDF6"
  hairline: "#E1E6EF"
  inverse-canvas: "#07276B"
  inverse-surface: "#163F91"
  inverse-ink: "#FFFFFF"
  doc-red: "#D70922"
  doc-blue: "#0071C8"
  doc-green: "#00B861"
  doc-orange: "#F07416"
  warning: "#FFF3CF"
  success: "#12A36B"
  danger: "#E13B4B"
typography:
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: 0 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0 }
  title: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  numeric: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, pill: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32 }
components:
  primary-button: { backgroundColor: "{colors.primary}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [15, 18] }
  service-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", rounded: "{rounded.md}", padding: 14 }
  form-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", rounded: "{rounded.xs}", padding: [13, 12] }
  status-chip: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.primary}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [6, 10] }
  document-card: { backgroundColor: "{colors.doc-blue}", textColor: "{colors.inverse-ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 16 }
---

# Overview

Gosuslugi uses official blue authority, white structured content, colorful document identity, and compact typography. The home surface is visually richer, with a deep-blue top region and white card groups; form and document screens become calmer and more administrative.

Fresh Screen Gallery evidence covered onboarding, auth, SMS confirmation, loading, home, assistant/service info, application data review, long forms, document lists/detail, notifications, GovScan, and service listings.

# Non-negotiable visual invariants

- Use saturated cobalt blue for official action, active state, and the home atmosphere.
- Keep most working screens white or near-white; reserve the deep-blue field for home/assistant-style surfaces.
- Use white rounded cards with subtle shadows for grouped service, form, notification, and document content.
- Preserve colorful document cards: red, blue, green, orange, and red variants with faint oversized symbols.
- Keep forms restrained: pale fields, black labels, muted helper text, and one blue bottom action.
- Use compact line icons and small app/service pictograms; do not replace them with generic SF Symbol-only grids.
- Treat warnings as pale yellow blocks inside otherwise white forms.

# Color and surfaces

The system alternates between two modes:

- Official home mode: deep cobalt top area, white cards layered below, colorful shortcut tiles, active blue bottom item.
- Administrative work mode: white canvas, compact top bar, one content column, pale-blue fields, blue bottom action.

The style is crisp and civic, not playful. Use clear grouping and understated depth. Avoid oversized editorial panels, excessive gradients outside the home/assistant context, and decorative illustrations in long data-entry surfaces.

Use approximate sampled colors from the fresh screenshots:

- Primary blue: `#0D5BD7` for primary buttons, links, active visual states, selected actions, and official emphasis.
- Strong blue: `#0848AE` for pressed/active blue and darker home gradients.
- Home cobalt: `#07276B` to `#163F91` for the top background and assistant-like surfaces.
- Auth pale blue: `#EAF1FF` behind authorization cards.
- Field gray-blue: `#F2F5FA` for text inputs and disabled blocks.
- Hairline: `#E1E6EF` for separators and card borders.
- Document colors: red `#D70922`, blue `#0071C8`, green `#00B861`, orange `#F07416`.
- Warning: `#FFF3CF` for data-verification notes.

Surfaces are usually flat white with a very soft shadow. Document cards are saturated and can use faint background silhouettes; normal form cards should not.

# Typography

Use SF Pro Display only for larger screen titles when needed; most text uses SF Pro Text. Letter spacing stays at `0`.

- Main heading: 20-22 pt bold for application/form steps.
- Card/service title: 15-16 pt semibold.
- Body: 13-14 pt regular.
- Captions, dates, category labels: 10-12 pt regular or semibold.
- Primary button: 14 pt semibold.
- Document names: 16 pt semibold in white on saturated cards.

Prioritize legibility for dense Cyrillic text. Keep labels close to their values. Use tabular numerals for dates, codes, document numbers, and timers.

# Screen composition

Use 16 pt side gutters on white screens. Cards use 8-16 pt corner radii depending on scale: form fields are squarer, service cards are softer, bottom sheets are softest. Long forms use one vertical column and a sticky full-width action above the safe area.

Auth screens place a centered white login card on pale blue, with logo at the top, fields stacked vertically, and a single blue button. Onboarding and splash screens are extremely sparse with centered logo/illustration and a bottom action.

Home uses a deep-blue top region with white shortcut cards below. Service/document groups appear as white panels, each item using a compact icon, title, helper text, and chevron or small action label.

Bottom sheets have white backgrounds, a top grabber, large title, close link, and stacked service rows.

# Navigation appearance

Visual chrome only; this section does not define product structure. The bottom bar is white with muted inactive labels, a blue active item, and a stronger central assistant mark when present. Top bars stay compact with black titles, blue text links, and minimal line icons.

# Components

- Primary buttons: saturated blue, white text, 8-10 pt corner radius, full-width on form screens.
- Disabled buttons: pale blue-gray fill with muted text.
- Text fields: pale blue-gray rectangles with low radius; icon affordances such as search/calendar sit at the right.
- SMS code input: six separate pale cells, focused cell with blue stroke.
- Chips: pale blue-gray pills with blue text for filters and status groups.
- Links: blue text without button chrome; keep them smaller than primary actions.
- Service rows: white rounded rectangles, icon at left, title/helper text center, chevron or action label at right.
- Bottom bar: white surface, muted inactive labels, blue active item; the central assistant icon can be visually stronger.

Do not use default iOS blue values, default `Form` row metrics, or unstyled system controls.

Form and data surfaces:

Data review cards use a white panel with personal/document data in labeled rows and a pale yellow warning block. Edit actions are blue text with a small line icon. Field-entry screens use a bold heading, labels above pale fields, helper text below fields, and a single bottom action.

Keep these visual treatments distinct:

- Data review: white card, labels, blurred/private values, warning block, edit row, blue confirmation button.
- Empty/required field: pale rectangular field, muted placeholder space, helper text below.
- Notification list: white background, small category labels, bold title, muted source/date, colored status dot when needed.
- Document stack: saturated overlapping cards with white titles and faint official silhouettes.
- Document detail: one large document card/image area, white page, blue bottom presentation action.
- GovScan/service rows: white cards with blue line icons and chevrons.

# Imagery and icons

Use the verified authored visual families only:

- Gosuslugi red/blue wordmark and outline mark.
- Minimal onboarding hand/gesture artwork with blue accent ribbon.
- Compact assistant robot icon/character in blue tones.
- Colorful document cards with faint oversized symbols.
- Small service pictograms in outlined rounded squares.
- Story/service tiles with restrained flat or lightly dimensional graphics.

Do not add decorative scenes to data forms, legal requirement text, payments, or document detail values.

# States

Visual state treatment only:

- Loading: centered white card, logo, muted message, three-dot indicator.
- Focus: blue stroke around the focused field or SMS cell.
- Disabled: pale blue-gray fill and muted label.
- Warning: pale yellow block within a form card.
- Status in lists: colored dot plus muted secondary line.
- Selected/active item: blue text or icon, not a new arbitrary color.
- Document identity: preserve each document color rather than converting all cards to blue.

# iOS adaptation

Respect top and bottom safe areas. Keep primary bottom actions above the home indicator. Minimum touch target is 44 pt. Allow long legal and administrative copy to scroll while keeping fields, warnings, and the primary action visually stable. Dynamic Type may wrap helper text and row subtitles; it must not overlap values, icons, or bottom actions.

Use native keyboard, sheet, and secure-entry behavior while styling app-owned cards, fields, and actions to match the documented surfaces. Preserve contrast in both deep-blue and white modes.

# Anti-generic checklist

- Do not turn every screen into a plain white iOS settings list.
- Do not use generic SF Symbols as the sole visual language for documents, services, assistant, or onboarding.
- Do not spread document red/green/orange colors into primary actions; blue remains the official action color.
- Do not add gradients to long forms or document detail pages.
- Do not hide administrative warnings, dates, field labels, or status dots behind decorative art.
- Do not flatten document cards into ordinary white rows.
- Do not claim backend identity, government-service behavior, or runtime verification from these screenshots; this file describes appearance only.

</design-context>
