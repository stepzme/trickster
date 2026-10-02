<design-context>
---
version: 1
platform: iOS
name: kolesa-kz-design-analysis
description: "A dense white vehicle marketplace with cobalt actions, photography-led listings, compact factual typography, multicolor transaction accents, and restrained native-like navigation."
colors:
  canvas: "#F5F6F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEF1F5"
  accent-primary: "#2878D4"
  accent-secondary: "#FFD54A"
  text-primary: "#202124"
  text-secondary: "#73777D"
  divider: "#E1E4E8"
  destructive: "#D84A4A"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 650, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 12
  control-gap: 8
rounded:
  control: 10
  card: 14
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "#2878D4", textColor: "#FFFFFF", cornerRadius: 10, minHeight: 48}
  secondary-action: {fill: "#EEF1F5", textColor: "#202124", cornerRadius: 10, minHeight: 44}
  primary-card: {fill: "#FFFFFF", borderColor: "#E1E4E8", cornerRadius: 14, padding: 12}
  navigation: {fill: "#FFFFFF", selectedColor: "#2878D4", unselectedColor: "#73777D"}
---

# Overview

kolesa.kz is a utilitarian marketplace whose identity comes from vehicle photography, compact facts, and a controlled set of transaction colors. White cards sit on a very light gray canvas; cobalt blue drives primary actions, while yellow finance badges, green contact actions, and restrained red warnings give specific meanings. The interface is dense without looking like a default `Form`.

# Non-negotiable visual invariants

- Vehicle photography is the largest element in listing cards and detail headers.
- White content surfaces sit on a faint gray canvas with thin borders or almost no shadow.
- Cobalt blue is the stable primary accent for links, selections, and principal actions.
- Listing price, model/title, year/specification, location, and status are compact and visually adjacent.
- Yellow is limited to finance or promotional emphasis; green is reserved for direct contact or positive availability.
- Filters and form choices use compact chips, segmented controls, or outlined rows rather than oversized tiles.
- Bottom navigation is flat and restrained, with blue selected emphasis.

# Color and surfaces

The viewport alternates a pale gray canvas with white cards, white lists, and white form sheets. Blue supplies the primary interaction and selected state. Yellow badges isolate financing or promotional information, green marks contact and positive actions, and red flags destructive or urgent states. Near-black carries titles and prices; gray supports mileage, location, dates, and labels. Dividers are thin and cool. Large branded gradients, default system blue variations, or heavy shadows would break the observed utilitarian surface system.

# Typography

Use SF Pro. Prices and principal vehicle titles are bold, section headings are semibold, and the numerous specifications use compact body and caption styles. Numeric information needs tabular clarity where possible, with currency, year, distance, and counts kept intact. Avoid reducing every fact to the same size: price leads, title and major specs follow, secondary provenance/location recedes. Dynamic Type should wrap metadata into additional lines or rows rather than shrinking it, while keeping price and primary action prominent.

# Screen composition

The top safe area leads into a compact navigation/search area, followed by filter chips or category controls. Listing screens use a vertical feed of wide white cards: a large landscape vehicle photo above or beside a tight fact stack. Detail screens begin with an edge-to-edge or near-edge photo gallery, then stack price, title, attributes, seller/contact blocks, and related content. Publishing and filter screens use long one-column forms with progress or section labels, chips, and full-width actions. Profile and utility screens use plain grouped rows. Side insets are approximately 16 points and vertical gaps stay economical.

Visible archetypes include onboarding with sparse branded content; browse/search lists; filter sheets with dense selections; photo-led vehicle detail; long publishing forms; and profile/settings lists.

# Navigation appearance

Bottom navigation is a white bar with compact line icons and short labels; blue identifies the selected item. Navigation bars are white or visually merged into the page, with a clear title and conventional-scale back control. Filters and pickers commonly appear as white bottom sheets with rounded top corners over a dark scrim. The visual treatment may be native in behavior, but tint, spacing, and row geometry must match the blue/white system.

# Components

The primary action is a full-width blue rounded rectangle with a white semibold label. Secondary actions use pale gray fill, white with blue text, or an outline. Vehicle cards combine a rounded photo, price, model/name, concise attributes, location/date, badges, and save/overflow affordances. Search fields are pale rounded rectangles. Filter chips use compact pill geometry with blue fill or border when selected. Finance badges are small yellow pills. Contact actions can use saturated green, visually distinct from the main blue. Forms use explicit labels, white rows, thin dividers, and progress cues rather than default `Form` styling.

# Imagery and icons

Real vehicle photography is compositionally indispensable and must not be delayed or replaced by placeholders. Use aspect-fill for gallery/listing photos while preserving the vehicle body; maintain consistent landscape ratios in feeds. Icons are simple and functional, visually lighter than prices and titles. Brand marks and finance badges remain small. No independently repeatable authored illustration system was observed; onboarding decoration does not justify inventing one.

# States

Selected filters turn blue or gain a blue outline/check. Populated listings preserve the same photography-first card structure as saved or promoted states. Long forms use visible progress, completed-field values, and inline validation. Contact, finance, warning, and destructive states keep their distinct green, yellow, and red meanings. Sheets and modals retain white surfaces and strong blue confirmation actions.

# iOS adaptation

Keep top and bottom controls inside safe areas and use vertical scroll containers for lists, details, and publishing forms. Horizontal scrolling is appropriate for chip rows, not primary content. The keyboard must avoid covering the active field or bottom action. Maintain 44-point targets for chips, save, contact, gallery, and tab controls. VoiceOver order for listing cards should be photo description → title/model → price → core specs → status/location → actions. At compact widths, stack photo above facts rather than compressing a split layout. Dynamic Type expands rows and preserves vehicle-photo scale. The observed light appearance should remain primary.

# Anti-generic checklist

- Do not replace vehicle photography with SF Symbols, gradients, or generic car silhouettes.
- Do not turn the feed into oversized shadow cards with sparse information.
- Do not use default blue without the consistent cobalt accent and multicolor semantic roles.
- Do not flatten price, title, specifications, and metadata into one text level.
- Do not use an unstyled `TabView`, `Form`, or `ProgressView`.
- Do not make every chip, card, sheet, and button share one radius.
- Do not introduce a separate illustration aesthetic unsupported by the screens.

</design-context>
