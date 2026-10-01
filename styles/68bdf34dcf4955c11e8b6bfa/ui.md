<design-context>
---
version: 1
platform: iOS
name: Phone-design-analysis
description: "A classic native iOS utility built from white and grouped-gray list surfaces, large SF titles, system-blue navigation, green call controls, red destructive actions, a five-item tab bar, circular keypad geometry, and an immersive blurred in-call layer."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F2F7"
  accent-primary: "#007AFF"
  accent-secondary: "#34C759"
  text-primary: "#111113"
  text-secondary: "#6D6D72"
  divider: "#E5E5EA"
  destructive: "#FF3B30"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 400, lineHeight: 44}
  title: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 41}
  section: {fontFamily: "SF Pro Text", fontSize: 22, fontWeight: 600, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 10
  card: 14
  sheet: 20
  pill: 999
components:
  primary-action: {fill: "system green", text: "white", shape: "large circle", minimumTarget: 64}
  secondary-action: {fill: "system grouped gray", text: "system blue or black", border: "none", shape: "rounded rectangle"}
  primary-card: {fill: "white grouped contact block", radius: 14, padding: 16, divider: "system hairline"}
  navigation: {fill: "white or translucent system chrome", selected: "system blue", inactive: "gray", items: 5}
---

# Overview

Phone is a direct native iOS utility whose visual identity is rooted in platform geometry and action semantics. White list surfaces, grouped light-gray forms, SF typography, blue navigation, green call initiation, red hang-up or deletion, circular keypad controls, and a fixed five-item tab bar make the interface immediately familiar. Active calls deliberately break from the light shell with a full-screen blurred dark color field and translucent circular controls.

The product avoids decorative cards and brand artwork. Lists, forms, segmented controls, wheel pickers, native keyboards, action sheets, and modal contact panels create the structure. Whitespace is often substantial in keypad and empty states, while contact editing becomes compact and row-driven.

# Non-negotiable visual invariants

- Primary utility screens use white canvas and native grouped-gray sections; they do not become a custom card dashboard.
- System blue marks selected tabs, links, information buttons, navigation actions, and editable values; it does not replace semantic green or red.
- The keypad is a centered 3-by-4 grid of large circular keys with a separate large green circular call button below.
- Active call screens fill the viewport with a dark blurred multicolor field and use translucent circular call controls plus a distinct red end-call circle.
- The persistent bottom bar contains five labeled items with blue selected content and gray inactive content.
- Contacts, recents, voicemail, ringtone, and form content use full-width rows, thin dividers, native chevrons, and minimal shadow.
- Contact identity is expressed through large circular photo, Memoji, or initials avatars rather than rectangular profile imagery.
- Empty tabs preserve generous blank space and concise system text; they do not introduce decorative illustrations or promotional copy.

# Color and surfaces

White `#FFFFFF` is the base for keypad, contacts, recents, favorites, voicemail, and detail content. System grouped gray `#F2F2F7` sits behind grouped forms, search, segmented controls, and modal content. Hairlines use `#E5E5EA`; deeper gray is reserved for disabled or pressed native controls.

System blue `#007AFF` identifies navigation, selected tab items, links, edit/add actions, info controls, and current selection. Green `#34C759` is reserved for starting or adding a call-related action. Red `#FF3B30` ends calls and marks delete or remove controls. Primary text is near-black, and secondary values, labels, timestamps, and inactive tabs are gray. These semantic roles are non-interchangeable; a generic single-brand tint would break the reference.

During a call, dark blurred color fills the screen edge to edge and white text/icons sit above translucent dark circles. Modal sheets rise over a dimmed or blurred version of the underlying light screen.

# Typography

Use SF Pro Display and SF Pro Text. Large list-tab titles such as Contacts or Voicemail use approximately 34 points bold and align to the leading content edge. The dialed number can use 28–40 points at regular weight, centered above the keypad. Contact names and major detail headings sit around 20–22 points semibold; list rows and form values use 17 points regular; secondary labels and tab captions use 10–13 points in gray.

Compact modal and sheet titles are centered around 17 points semibold. Navigation actions are blue, regular or semibold, and remain text-based. Phone numbers need clear digit grouping and may use tabular numerals. Dynamic Type should grow list rows, grouped fields, and empty-state text; keypad digits and critical call state must remain visually dominant without clipping.

# Screen composition

The keypad screen places the status area above a large quiet upper field, then the entered number, centered 3-by-4 keypad, green call circle, and five-item tab bar above the home indicator. The keypad occupies the middle rather than filling the entire viewport, allowing large balanced negative space.

List tabs use a large leading title and compact edit/add actions at top, optional search or segmented control beneath, full-width rows or a sparse empty state through the middle, and the tab bar fixed at bottom. Contact-detail screens center a large circular identity image near the top, place round communication/info actions below it, then use rounded white grouped blocks for details. Contact editing appears as a modal sheet or navigation surface with compact stacked rows, inline add/remove controls, keyboards, and wheel pickers.

Active calls replace the tab bar and white canvas entirely. Identity and call state occupy the upper area, two rows of three translucent circular controls sit through the middle/lower area, and a red end-call circle anchors the bottom above the home indicator. Error or wait states preserve this immersive field and may add a large lower dismiss action.

Typical list and form insets follow native 16-point rhythm; row separators align after avatars or icons. Search fields are inset and rounded. Content must clear the bottom bar, keyboard, sheets, and home indicator.

# Navigation appearance

The bottom bar is a white full-width native tab surface with five icon-and-label items. Selected icon and label are blue; inactive content is gray. It is compact and safe-area aware without a floating capsule or custom selection background.

Large-title navigation appears over lists, while contact editing and modal pages use compact centered titles with blue Cancel, Done, Edit, Clear, plus, or back actions at the edges. Contact sheets have rounded top corners above a dimmed or blurred context. Product behavior and information architecture come from approved Research and Planning artifacts.

# Components

Keypad controls are large light-gray circles with centered dark digits and small letter groups; pressed state darkens the fill. The green call control and red hang-up control are larger or visually isolated circles with white phone glyphs. In-call controls use translucent dark circles, white icons and labels, and clear selected fills for mute or speaker.

Search fields are native rounded gray bars. Segmented controls use the standard All/Missed-like compact capsule. List rows use flat white fill, black primary label, gray supporting label, blue info controls or actions, a chevron where needed, and an inset hairline. Contact detail groups are white blocks with about 14-point corners on a grouped-gray canvas.

Editing forms use full-width grouped rows, green plus and red minus circles, native text and number keyboards, a date wheel, ringtone checkmarks, action sheets, and avatar/photo selection panels. Error presentation can use a large full-width dismiss button. Favorites may include a small dismissible helper banner above the list.

# Imagery and icons

The product uses system symbols, circular contact photos, initials avatars, Memoji/avatar selection, and a heavily blurred call background. Photos and Memoji are identity content rather than decoration. Keep avatars circular and preserve face-safe crops. The in-call background must remain full bleed and sufficiently blurred to support white labels and translucent controls.

No repeatable authored illustration system is present. Empty states should use concise text or system symbols rather than invented artwork. If a contact image is absent, use a platform-consistent initials or avatar treatment rather than unrelated stock photography.

# States

Observed keypad states include idle and number entered. Call states include active, waiting, mute selected, speaker selected, error, and dismissed/error recovery. The dark blurred background, white identity/state text, translucent controls, and semantic green/red actions remain consistent.

Contact states include list, empty and filled new-contact form, added email/URL/address/date/related/social/note/phone fields, text and numeric keyboards, wheel date picker, ringtone selection, no-photo media state, and avatar/style chooser. Recents include normal and edit/delete; favorites include empty, helper banner, contact picker, add sheet, and populated list. Voicemail includes empty and calling-keypad presentation.

# iOS adaptation

Use native safe-area-aware navigation, tab bars, grouped tables, sheets, keyboards, wheel pickers, and call presentation. The keypad grid should adapt its vertical spacing to available height while preserving circular keys and a clear separation from tab bar. Active call content must avoid the Dynamic Island/status area and home indicator while keeping the blurred field edge to edge.

Tabs, keypad keys, call controls, list rows, blue edge actions, info buttons, add/remove controls, ringtone choices, and avatar actions require at least 44-point effective targets. VoiceOver should announce keypad digits with letters, entered number, call state, contact identity, and control selection. Semantic green/red meaning needs explicit action labels.

Dynamic Type expands rows and form groups; contact labels can wrap while values remain associated. On compact widths, stack or truncate secondary contact detail before shrinking primary names, numbers, or call controls. Follow current semantic system colors for appearance adaptation rather than manually inverting the light shell; preserve blur and contrast on the active-call layer.

# Anti-generic checklist

- Do not replace the native five-item tab bar with a floating pill or custom card navigation.
- Do not use blue for start-call, end-call, delete, or remove actions; green and red carry explicit semantics.
- Do not turn contact, recent, voicemail, ringtone, or form rows into floating decorative cards.
- Do not replace the centered circular keypad with a grid of rounded rectangles.
- Do not flatten the active call into a white sheet or remove its full-screen blurred field.
- Do not substitute rectangular profile photography for circular contact identity.
- Do not invent onboarding, empty-state, or promotional illustration where the reference uses native content and whitespace.
- Do not apply one radius to keypad circles, grouped contact blocks, search fields, sheets, and avatars.

</design-context>
