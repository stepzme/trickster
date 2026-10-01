<design-context>
---
version: 1
platform: iOS
name: Litres-design-analysis
description: "A bright, cover-led iPhone bookstore and library with dense editorial shelves, orange navigation emphasis, violet commercial actions, flat white surfaces, and deliberately quieter reader and audio-player modes."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#F7F6FA"
  surface-secondary: "#EEEAF3"
  accent-primary: "#F25A24"
  accent-secondary: "#5147D9"
  text-primary: "#171727"
  text-secondary: "#737386"
  divider: "#E7E4EC"
  destructive: "#D93B45"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 23}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 14
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "violet", text: "white", height: 50, radius: 12}
  secondary-action: {fill: "pale lavender-gray or white", text: "dark navy", height: 46, radius: 12}
  book-tile: {fill: "transparent", cover: "portrait contained", metadata: "compact stacked text"}
  search-field: {fill: "pale gray", text: "dark navy", radius: 12}
  reader-toolbar: {fill: "warm paper or white overlay", icon: "dark neutral"}
  navigation: {fill: "white", active: "orange", inactive: "muted gray"}
---

# Overview

Litres is a bright content marketplace and library in which book covers, not decorative UI cards, supply most color and depth. White canvas, dark navy text, orange brand/navigation emphasis, and violet acquisition controls form the stable shell. Focused modes deliberately change density: the reader becomes a warm paper-like page with serif text, while audio playback becomes a pale minimal control surface around one large cover.

# Non-negotiable visual invariants

- Store and library screens are white, flat, and cover-led; portrait covers form the dominant mass in dense horizontal shelves.
- Orange identifies the service and selected navigation, while violet is reserved for the strongest purchase, subscription, or access action.
- Book tiles are not generic elevated cards: the contained cover and compact metadata sit directly on the canvas.
- Book detail gives one cover a large central role, supported by a blurred cover-derived backdrop and structured metadata.
- Reader mode uses a warm paper canvas, generous margins, long-form serif text, and contextual controls that do not permanently crowd the page.
- Audio mode centers a large cover, chapter information, orange progress, one dominant play/pause control, and symmetric transport utilities.
- Navigation and supporting chrome remain light and quiet so publishing artwork retains color leadership.
- Search, filters, selectors, and settings use pale neutral or lavender-gray fills with modest radii, not shadowed card stacks.

# Color and surfaces

White is the principal storefront and library canvas. Pale cool gray or lavender-gray separates search fields, format choices, selected settings, and secondary control groups; thin light dividers organize longer lists. Dark navy rather than pure black carries titles and primary labels, with neutral gray for authors, duration, format, legal text, and metadata.

Orange is the brand and selected-navigation color and may mark progress or small highlights. Violet/indigo is the strongest filled action for purchase, subscription, or continued access. Warm yellow can appear in ratings and green only in success or availability signals. Heavy shadows, dark dashboard surfaces, default blue tint, and competing orange/violet primary buttons would break the reference.

Reader mode shifts to a warm off-white paper field. Book detail can derive a soft blurred field from the current cover, but the rest of the product should not be flooded with arbitrary gradients.

# Typography

The store UI uses a clean SF Pro-compatible sans. Section headings are bold and clearly larger than compact rows of book title, author, rating, format, duration, and price. Book titles lead tiles; author and metadata are quieter but readable. Controls use short semibold labels and sentence case.

Reader content is the exception: use a comfortable book-like serif with increased line height and stable paragraph measure, while toolbars and settings remain sans. Audio chapter labels and elapsed time are compact and centered around the cover and transport controls.

With Dynamic Type, keep the contrast between section heading, book title, and metadata. Let titles wrap before shrinking covers into insignificance; secondary metadata may truncate conservatively. Reader typography scales independently while preserving horizontal margins and paragraph rhythm.

# Screen composition

Home and catalog archetypes begin below the safe area with a wide pale search field, compact horizontal category strip, and sometimes a broad promotional banner. Circular shortcuts or compact topics can follow, then repeated horizontal shelves of portrait covers. Shelves use 16-point screen gutters, narrow cover gaps, bold left-aligned headings, and minimal container chrome; vertical scrolling reveals more rails.

Book detail is a focused single column. A cover-derived blurred backdrop supports one large contained cover near the top, followed by a compact text/audio format switch, title and author hierarchy, ratings or facts, and flat descriptive sections. High-value actions remain prominent near the lower viewport or in a sticky white action area without covering metadata.

Reader mode uses nearly the full viewport as a page: warm background, generous side margins, serif text, a light top control row, and a bottom progress scrubber or compact controls when revealed. Audio mode places one large cover in the upper half, chapter/title information below it, then orange progress, large central play/pause, symmetric seek controls, and a final row for speed, sleep, and bookmark.

Search suggestions, profile/library lists, subscription management, and saved states are vertically scanning compositions with flat rows or focused empty content. Modal choices and purchase confirmations use compact sheets or system surfaces rather than marketing-page layouts.

# Navigation appearance

The persistent bottom bar is white with simple dark or gray glyphs and an orange selected item; its shadow or divider is subtle. Top bars use a compact title with ordinary back, close, search, share, or overflow controls. Search can take over the top region with the keyboard below, while focused reader and player screens reduce persistent navigation and expose contextual chrome.

Format and category choices appear as compact pills, tabs, or segmented rows using pale fills and a distinct selected state. Sheets have rounded upper corners and light surfaces. Back controls remain standard in scale; this appearance must not import the source product's routes into another product.

# Components

Book tiles use a contained portrait cover with uncropped artwork, then a short stack of title, author, rating, format, or price. Covers may have a subtle shadow to separate them from white, but the surrounding tile stays flat. Horizontal shelves show enough adjacent content to communicate continuation.

The search field is broad, pale, and softly rounded, with a restrained magnifier and placeholder. Violet filled buttons handle the strongest commercial/access action; pale or outlined controls handle samples and secondary choices. Orange is used for selected navigation, brand markers, and progress rather than every button.

Book detail uses a compact format switcher, rating/fact rows, favorite control, and sticky action group. Reader controls include progress, search, appearance/font settings, and compact overlays. The audio player uses a large circular play/pause, symmetric skip controls, thin progress, and compact speed, timer, and bookmark utilities. Native permission, keyboard, subscription confirmation, toggles, and alert surfaces may stay native when their appearance is observed.

# Imagery and icons

Book-cover artwork is the main imagery language. Preserve every cover's portrait ratio and full composition with aspect-fit; do not crop, recolor, or mask several covers into generic thumbnails. A large detail cover can cast a subtle shadow and provide color to a blurred backdrop. Author/article photography and promotional banners support rather than replace covers.

Icons are simple product glyphs with consistent optical weight. Orange or dark neutral gives selected or actionable emphasis. Occasional promotional illustrations were observed, but they do not form a stable independent system and should not be generalized into every empty, subscription, or content state. When final covers are unavailable, placeholders retain the same portrait footprint and varied color mass.

# States

Observed states include search suggestions with keyboard, notification permission, language selection, populated shelves, an empty saved state, book favoriting, compact action sheets, sticky reading or mini-player bars, reader search and appearance controls, font selection, subscription purchase and system confirmation, subscription management/cancellation, and audio loading/playing.

The visual constants are a light shell, restrained dividers, dark-navy hierarchy, orange selection/progress, violet commercial emphasis, and content-led imagery. Reader and audio states keep their focused compositions rather than falling back to the dense storefront.

# iOS adaptation

Place storefront content in a vertical scroll container with independently scrolling horizontal cover rails, safe-area-aware top search, and a bottom inset for navigation. Preserve 16-point outer gutters and tighten rail spacing before reducing covers below recognition size. Use aspect-fit for covers and aspect-fill only for blurred backdrops or banners.

Book detail, reader, audio player, and keyboard search adapt to shorter iPhones without hiding the primary control. Reader text reflows with Dynamic Type and user-selected size while toolbars remain reachable; audio utilities can tighten spacing or wrap below transport. Clear the home indicator with sticky actions and bottom bars, maintain 44-point targets, provide VoiceOver labels, and order cover/title/metadata/action logically. Preserve the sampled light appearance and warm reader surface instead of inventing unsupported dark mode.

# Anti-generic checklist

- Do not replace cover shelves with equal white dashboard cards or a generic two-column app grid.
- Do not crop, recolor, or normalize the visual diversity of book-cover artwork.
- Do not make orange and violet compete as identical primary actions.
- Do not use default blue links, an unstyled `TabView`, or arbitrary SF Symbols with mixed weights.
- Do not add heavy shadows, glass panels, or large radii around every piece of metadata.
- Do not use sans UI body text as the reader's long-form book typography.
- Do not leave permanent dense chrome over the reader or turn the audio player into a settings list.
- Do not introduce a generic illustration system where the observed product relies on publishing artwork.

</design-context>
