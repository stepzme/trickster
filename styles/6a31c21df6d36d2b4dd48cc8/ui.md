<design-context>
---
version: 1
platform: iOS
name: WB-Travel-design-analysis
description: "A photo-led iOS travel marketplace pairing pale booking surfaces with vivid WB magenta actions, bold price hierarchy, pill filters, centered navigation, and immersive destination imagery."
colors:
  canvas: "#F6F5F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F1EFF3"
  accent-primary: "#D900D8"
  accent-secondary: "#8F2BFF"
  text-primary: "#171719"
  text-secondary: "#73737A"
  divider: "#E7E4E9"
  destructive: "#D94C58"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 13
  card: 18
  sheet: 28
  pill: 999
components:
  photo-result-card: {}
  magenta-primary-action: {}
  filter-chip-row: {}
  image-detail-sheet: {}
  fixed-price-action-bar: {}
---

# Overview

WB Travel is a bright, photo-driven travel marketplace. Real destination, hotel, room, and excursion photography supplies most of the color, while the application layer stays white or pale gray and uses vivid magenta-purple for decisive actions and selections. Discovery screens are image-dense and editorial; booking, traveler, payment, and cancellation screens become calmer vertical forms with fixed bottom actions. Heavy titles and prices, compact metadata, and small discount or urgency signals keep commercial facts scannable.

# Non-negotiable visual invariants

- Real travel photography is the dominant visual mass on discovery, result, and detail screens and cannot be replaced by generic illustration.
- Operational content sits on white or very pale gray surfaces; magenta-purple is concentrated in actions, selected controls, pins, and brand cues.
- Detail screens pair a large top photo with a broad white rounded content sheet rising from below it.
- Prices and property or experience titles are bold and visually stronger than gray metadata, rules, and old prices.
- Search, filter, sort, and option controls use compact rounded fields or pills rather than large generic cards.
- Booking and payment screens use a linear single-column form with a fixed full-width magenta action at the bottom safe area.
- Inner navigation remains compact with a centered title, left chevron, and occasional right action.
- Green, pink/red, and orange remain semantic accents for rating/success, discount/error, and urgency; they do not replace the brand action color.

# Color and surfaces

The canvas is a very pale warm gray and the main surface is white. Secondary fields, chips, and quiet groupings use a slightly darker pale gray. `accent-primary` is hot WB magenta for primary actions, selected radio controls, active outlines, map pins, and count badges. `accent-secondary` is violet and can participate in bounded magenta-violet action gradients. Primary text is near-black; descriptions and booking metadata use neutral gray; separators are thin and light. Green identifies favorable ratings, success, refundable options, or selected tariffs; red/pink marks discounts and errors; orange is reserved for scarcity or urgency.

Photography may fill the upper viewport or most of a card, but forms and summary surfaces stay clean. Sheets and floating map cards are white with modest shadow. Generic system blue actions, large colored form backgrounds, or gradients on every small filter would break the reference.

# Typography

Use SF Pro as the iOS-safe system family. Hotel, excursion, article, and destination titles use bold display text; centered navigation titles are smaller and medium weight. Prices and totals are bold with tabular numerals. Old prices are smaller, gray, and struck through; discount chips use compact bold white text. Route, room, baggage, guest, date, and policy metadata uses smaller gray body or caption styles. Filled form values may appear compact and visually emphatic without turning the entire interface into uppercase text.

Dynamic Type should retain the title/price/metadata contrast. Allow long property names, policies, and addresses to wrap; expand result and tariff cards vertically rather than clipping them. Keep price and currency together where possible, and do not use promotional filler copy to occupy image or form whitespace.

# Screen composition

Screens use roughly 16-point horizontal gutters and safe-area-aware vertical scrolling. The home screen places a photo hero beneath the status bar, overlays or follows it with a rounded search control, then uses a horizontal category rail and image-led card feed. Result screens combine compact filter/sort chips with single-column or dense image cards. Detail pages place a large photo at the top, floating back/share controls over the image, and a white rounded sheet containing title, facts, choices, and price. Booking screens strip away most imagery and use stacked fields plus a fixed bottom price/action bar.

Observed archetypes:

- **Discovery feed:** top photo hero, rounded search field, horizontal categories, then image-led destination or editorial cards.
- **Search form:** broad white or pale panel with stacked origin, destination, date, night, and guest rows plus a magenta search action.
- **Results:** compact filter/sort row, repeated photo-led result cards, bold current price, gray old price or metadata, and small discount badges.
- **Detail:** full-width photo hero, floating navigation controls, and a rounded white content sheet that overlaps the image edge.
- **Selection:** repeated room, tariff, or fare cards with explicit selected radio/fill, feature list, and price.
- **Booking/payment:** single-column fields and summary rows with large quiet spacing and fixed magenta continuation bar.
- **Map:** map tiles, magenta price pins, and one floating white result card near the bottom.
- **Article:** large travel image followed by bold editorial title and readable single-column text.

# Navigation appearance

Many screens show a compact centered brand pill or title near the top. Inner navigation uses a left chevron and occasional share, gallery, or close control, often floating as white circular buttons over photography. Centered titles remain visually secondary to destination imagery or price. Sort, filter, payment, and search choices use white bottom sheets over a dim scrim with large top corners. Fixed action bars sit on a white bottom surface above the home indicator. These appearance rules do not prescribe the adopting product's routes.

# Components

- **Photo result card:** rounded white container, large aspect-fill photo, bold title and current price, compact gray facts, optional struck-through old price, and small discount/rating badges.
- **Magenta primary action:** full-width 52–56 point control with hot-magenta or restrained violet-magenta fill, white semibold label, and 13-point rounding; disabled state becomes pale gray without changing size.
- **Filter chip row:** horizontally scrolling compact pills with pale fill, dark label, and magenta outline/count/selection when active.
- **Search field or row:** soft pale rounded rectangle with concise value hierarchy, small category icon, and no heavy border.
- **Image detail sheet:** broad white surface with a large rounded top edge overlapping a photo hero; begins with title/price, then facts and choices.
- **Tariff or room card:** white rounded panel with feature rows, explicit radio/selection state, bold price, and restrained green favorable-state cue.
- **Fixed price action bar:** white bottom surface containing summary amount and a dominant magenta button, separated from scroll content by spacing or a subtle hairline.
- **Map price pin:** compact magenta pill with white price text and a clear selected state tied to the floating result card.

# Imagery and icons

Real travel photography is fundamental: hotels, rooms, beaches, destinations, excursions, regions, and editorial subjects occupy large crops with centered or subject-aware focal points. Use aspect-fill without distorting architecture or people. Maps use real map tiles with controlled overlays. Small functional symbols represent transport, lodging, calendar, guests, baggage, filters, sorting, payment, contact, and map position; keep them consistent and subordinate to photography.

No standalone authored illustration system was confirmed. Logos, category icons, gradients, decorative bubbles, and brand marks do not qualify. Do not create an `illustrations.md` for this package; compositionally important photography still cannot be omitted while final assets are pending.

# States

Search screens preserve the same rounded field system through empty, focused, filled, keyboard, and selection-sheet states. Result filters show active counts or outlines without changing chip geometry. Room/tariff selections use explicit radio or colored panel states. Disabled booking and cancellation actions are pale; enabled actions return to magenta. Loading uses restrained placeholders or spinners within the same white/pale structure. Payment-method and sorting choices appear in white sheets. Processing and confirmation states keep the price hierarchy and focused status treatment. Consent or modal states dim the underlying photo-led screen without altering its composition.

# iOS adaptation

Use safe-area-aware `ScrollView` layouts, subject-aware `scaledToFill` photography, and `safeAreaInset(edge: .bottom)` for fixed price/action bars. Preserve at least 44-point targets for floating image controls, filters, result cards, room/fare selections, and payment choices. Keep active form fields visible above the keyboard and allow native sheets to provide interaction while matching the observed white surface and radius.

VoiceOver order should announce image context, title, core facts, price, selection state, then action. Combine commercial facts logically and announce old/current prices and discount without relying on color. Dynamic Type may turn horizontal fact rows into vertical stacks and increase card height. The sampled system is light-first; do not invent a dark mode or automatically recolor travel photography and maps.

# Anti-generic checklist

- Do not replace travel photography with icons, gradients, or generic scenic illustration.
- Do not use default blue buttons, radios, links, or map pins instead of the magenta-purple action hierarchy.
- Do not build every search field, result, and booking section as the same white card.
- Do not use an unstyled `Form`, picker, sheet, or `TabView` appearance.
- Do not flatten title, price, old price, metadata, and policy text into one scale.
- Do not stretch or inconsistently crop hotel, room, destination, or excursion images.
- Do not extend decorative gradients into linear booking and payment forms.
- Do not add mood-setting travel copy that duplicates visible place, image, price, or state.
</design-context>
