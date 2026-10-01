<design-context>
---
version: 1
platform: iOS
name: Rocketbank-design-analysis
description: "An expressive iPhone banking shell built from a full-screen blue-to-pink pastel wash, oversized soft white account cards, ink-black floating pills, extreme display-type contrast, chunky custom glyphs, and large lifestyle photography."
colors:
  canvas: "#E4F3FF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3EDF5"
  accent-primary: "#0A080C"
  accent-secondary: "#E8BFD8"
  text-primary: "#0A080C"
  text-secondary: "#68636C"
  divider: "#DED8E2"
  destructive: "#E45867"
typography:
  hero: {fontFamily: "Arial Black", fontSize: 42, fontWeight: 800, lineHeight: 40}
  title: {fontFamily: "Arial Black", fontSize: 32, fontWeight: 800, lineHeight: 32}
  section: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 17}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 20
  control-gap: 12
rounded:
  control: 20
  card: 34
  sheet: 34
  pill: 999
components:
  primary-action: {fill: "ink black", text: "white", height: 52, radius: 999}
  secondary-action: {fill: "white", text: "ink black", height: 48, radius: 999}
  account-card: {fill: "white", radius: 34, depth: "soft offset layer"}
  floating-dock: {fill: "ink black", icon: "white", radius: 999}
  media-card: {fill: "photography", text: "white overlay", radius: 34}
  navigation: {fill: "floating black pills and circles", active: "white glyph or media"}
---

# Overview

Rocketbank is an authored lifestyle-banking interface rather than a neutral finance dashboard. A pale blue-to-pink atmospheric wash fills most screens; large soft white account surfaces and black floating controls sit above it. Oversized wide display type, compact conversational labels, chunky glyphs, and full-bleed photographic cards create deliberate tension between playful culture product and readable financial utility.

# Non-negotiable visual invariants

- A soft blue-to-pink full-screen wash forms the main shell and reaches through the safe areas without a hard page boundary.
- Primary navigation and high-priority controls are ink-black floating pills or circles with high-contrast white glyphs.
- Account and product surfaces are oversized white forms with very large radii and soft offset layering, not ordinary rectangular bank cards.
- Major headings use unusually wide, heavy display type with tight line height and extreme contrast against small supporting copy.
- Screens preserve large open pastel zones around one focal account, assistant prompt, product selector, or media card.
- The bottom navigation floats above the home indicator as a compact black capsule rather than a standard edge-to-edge tab bar.
- Authentication can switch to an almost full-screen dark field while retaining the same bold type and pill/capsule geometry.
- Lifestyle areas use large singular photography or avatar media; transaction and transfer utilities remain calmer and more typographic.

# Color and surfaces

The signature canvas is an atmospheric pale cyan/blue wash falling into soft pink or lilac. It is a large background mass, not a semantic status gradient. White carries balances, product cards, shortcut pills, and sheets. Near-black is the actual interaction color for the floating dock, assistant entry, round controls, and decisive actions.

Pale pink, blue, or lavender can offset white card layers and quiet secondary panels. Dark charcoal owns phone/code authentication and selected cinematic moments. Green and red remain limited to success and failure. Default banking blue, metallic gradients, gray dashboard chrome, strong borders, and conventional card shadows would break the system.

# Typography

The hierarchy uses a wide heavy geometric display face for major statements, catalog labels, and expressive titles; Arial Black or an optically expanded heavy SF Pro Display is a practical substitute. Functional content, amounts, bank rows, helper text, and settings use SF Pro Text. The signature contrast is extreme: 32–42-point compact-line-height headings beside restrained 12–16-point labels.

Short conversational phrases can be lowercase or visually informal, while amounts remain bold and instantly scannable. Avoid placing several display-size phrases on one card. Dynamic Type should enlarge functional copy independently; expressive titles can wrap over short lines while retaining width and weight, and the surrounding open space or media should yield before type becomes illegible.

# Screen composition

The primary shell is full-bleed pastel. A loose top row floats below the status area: circular avatar or back control, a centered black assistant pill, and a small round utility action. One dominant white account/product card occupies the middle, with compact white shortcut pills nearby and ample gradient visible between zones. A black floating dock sits above the home indicator.

Catalog and assistant archetypes isolate one large selection, prompt, or suggestion group within open pastel space. Transfer and bank-selection screens use large rounded sheets or white rows over the same atmosphere. Authentication replaces pastel with a dark full-screen field, using oversized prompt type, capsule input/code cells, a large custom numeric keypad, and minimal competing chrome.

Lifestyle and profile archetypes use large edge-to-edge rounded photo or avatar cards, sometimes with bold white text over media. The media mass can fill most of the middle viewport while black circles and pills float above it. Sheets overlap the canvas with large top radii rather than introducing standard grouped pages.

# Navigation appearance

The defining navigation element is a black floating bottom capsule containing a small set of white or media-backed glyphs. It has visible clearance from screen edges and the home indicator. Top navigation also floats: black circular back/settings/search controls, a centered assistant pill, or a media avatar circle, rather than an opaque navigation bar.

Sheets use large rounded upper corners and a dim or blurred backdrop. Selected states brighten glyphs, use a filled white/media circle, or change the capsule's internal emphasis. Back controls remain compact circles. These are visual rules only; destinations and product structure come from the approved project artifacts.

# Components

Account cards are large white soft rectangles or blob-like forms with 26–34-point radii, strong amount/title hierarchy, sparse supporting labels, and sometimes a pale offset silhouette beneath. Shortcut controls are compact white or black pills. Primary actions use black fill, white centered labels, and fully pill-shaped ends.

The assistant entry is a prominent black pill with short conversational text. Circular utility controls use chunky high-contrast glyphs. Authentication includes a giant branded numeric keypad, rounded phone/code capsules, and sparse helper text. Transfers and product selection use clean white rows with compact bank/media marks, while settings appear in very large-radius white sheets.

Media cards use one dominant photograph or avatar crop with overlay text and few controls. Disabled or loading-like states preserve the white-card silhouette and pastel field while reducing content contrast; they do not substitute generic skeleton dashboards.

# Imagery and icons

The visual system includes abstract gradient fields, avatars, user/profile imagery, venue and lifestyle photography, bank marks, and chunky custom icon glyphs. Photography is large and singular, commonly filling an entire rounded card with a face or focal subject kept clear of black controls and white overlay text. It cannot be omitted when a screen archetype depends on a media card.

The observed imagery does not establish a repeatable drawn-scene or character illustration system. Rocky is expressed primarily through assistant chrome, naming, avatars, and interface personality; isolated generated-looking or mascot-like images do not justify a separate illustration contract. Do not translate the gradient/card language into arbitrary SwiftUI drawings presented as illustration.

# States

Observed states include gradient splash and permission overlay, dark phone input, SMS-code entry, sparse/loading-like and populated home shells, account/card details, product catalog, transfer permission and bank selection, assistant empty/recent/search suggestions, locked and populated lifestyle content, and profile customization cards.

Native permission dialogs and keyboard states layer over the authored shell without restyling the system prompt. Across functional states, the pastel wash, black pills, soft white shapes, wide type, and floating safe-area geometry remain stable; auth deliberately retains a dark variant.

# iOS adaptation

Let the gradient or dark authentication canvas extend through safe areas while keeping floating controls below the status area and above the home indicator. Build the middle content as a scrollable single expressive column, but pin or safely inset the black dock. On shorter iPhones, reduce open gaps and media height before shrinking the dock, account amount, or primary action.

Maintain 44-point hit areas for pill and circular controls, logical VoiceOver order from top identity/assistant through focal card to actions and dock, and explicit labels for unconventional glyphs. Dynamic Type may increase functional row and sheet height; expressive display headings wrap without colliding with photos. Use keyboard avoidance for auth and transfer inputs. Preserve the full-bleed pastel shell and observed dark auth mode rather than applying a generic automatic light/dark inversion.

# Anti-generic checklist

- Do not replace the pastel full-screen wash with a white or gray banking dashboard.
- Do not use a default edge-to-edge `TabView`; preserve the floating black capsule and safe-area clearance.
- Do not reduce white account surfaces to ordinary medium-radius rectangles with standard shadows.
- Do not flatten expressive display headings, balances, body copy, and captions into one system-size hierarchy.
- Do not fill intentional open gradient space with extra widgets, statistics, or explanatory copy.
- Do not substitute default blue tint or arbitrary SF Symbols for the chunky black-and-white control language.
- Do not crop lifestyle faces or focal subjects beneath overlay text and floating controls.
- Do not invent a repeated character-illustration system from isolated media or assistant imagery.

</design-context>
