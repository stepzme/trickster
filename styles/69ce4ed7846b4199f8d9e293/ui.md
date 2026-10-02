<design-context>
---
version: 1
platform: iOS
name: Not-Boring-Habits-design-analysis
description: "A theatrical near-black interface centered on one large tactile 3D habit object, with white and yellow-orange hierarchy, sparse floating controls, condensed technical labels, and collectible material skins that turn each screen into a dark stage."
colors:
  canvas: "#000000"
  surface-primary: "#1F1D21"
  surface-secondary: "#2B292E"
  accent-primary: "#FFB300"
  accent-secondary: "#5DD9E5"
  text-primary: "#FFFFFF"
  text-secondary: "#8D8A91"
  divider: "#3D3A40"
  destructive: "#E92735"
typography:
  hero: {fontFamily: "SF Pro Rounded", fontSize: 40, fontWeight: 700, lineHeight: 44}
  title: {fontFamily: "SF Pro Rounded", fontSize: 30, fontWeight: 700, lineHeight: 35}
  section: {fontFamily: "Avenir Next Condensed", fontSize: 22, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Mono", fontSize: 11, fontWeight: 500, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 32
  card-padding: 16
  control-gap: 12
rounded:
  control: 16
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {background: "#FFB300", foreground: "#000000", radius: 999, minHeight: 56}
  secondary-action: {background: "#FFFFFF", foreground: "#000000", radius: 999, minHeight: 52}
  primary-card: {background: "#1F1D21", radius: 18, padding: 16}
  navigation: {background: "transparent or charcoal circular controls", radius: 999, minTarget: 44}
---

# Overview

(Not Boring) Habits stages one habit or milestone at a time against near-black. A large rendered sphere, object, or miniature world normally occupies the center, while a few circular controls and a compact lower date rail frame it. White type and yellow-orange selection provide clarity; collectible graphite, glass, opal, cyan, rainbow, and industrial materials provide visual variety without changing the dark shell.

# Non-negotiable visual invariants

- One authored 3D object or sphere occupies roughly 55–70% of the screen width and remains the primary focal point.
- The near-black stage extends through the safe areas and preserves large areas of negative space around the object.
- Yellow-orange marks the current day, active toggle, selected option, progress, or premium emphasis; default blue is absent.
- Home-like screens use sparse floating circular controls and a compact bottom date rail rather than a conventional tab bar.
- Typography combines large rounded statements with narrow condensed or monospaced technical labels; these roles do not collapse into one generic system style.
- Completion, progress, skin, and achievement states change the authored object or material while keeping the surrounding shell stable.
- Utility, premium, and account content may use dark rounded cards or sheets, but the central ritual remains an open stage.

# Color and surfaces

Black is the dominant full-screen canvas, with charcoal `#1F1D21` and `#2B292E` for sheets, cards, and recessed controls. White carries primary type and high-contrast completion marks; gray subordinates metadata. Yellow-orange from `#FFB300` to `#FFC400` provides the consistent active and selected signal. Red is reserved for destructive account actions.

Collectible imagery introduces local material palettes: graphite gray, bright cyan, opal pink-blue, saturated rainbow magenta/cyan/blue, and industrial orange. These colors belong to the 3D object or poster-like skin, not to generic interface chrome. Dividers are quiet charcoal. Default light grouped surfaces, system blue, or indiscriminate gradients would visibly break the reference.

# Typography

Large rounded SF Pro Rounded text carries onboarding statements, habit names, and major numeric feedback. Avenir Next Condensed is an iOS-safe substitute for narrow all-caps titles, skin names, steps, and compact technical labels. SF Pro Text carries utility copy, while SF Mono suits tiny metadata. Numbers in daily progress and statistics are large, isolated, and tabular.

Hierarchy is created through substantial scale contrast and vertical isolation: one 30–40-point statement or number, then 14–16-point utility copy, then 11-point metadata. Dynamic Type should expand cards and sheets and wrap explanatory copy while protecting the central object, active value, and bottom date rail from overlap.

# Screen composition

The principal composition is a vertical dark stage: two sparse circular controls near the top corners, a centered title, one large object in the middle, and a compact horizontal date rail near the bottom safe area. The object owns most of the visible width, with 16-point edge insets for chrome and generous vertical breathing room.

Observed archetypes include:

- Centered onboarding statements or a single object on black, with one low pill action.
- A main dark stage with a large habit sphere or sculpted object, sparse top controls, and a bottom date rail.
- A completion state that preserves the stage but changes the sphere into a glassy checked object.
- A story or step screen with a title and short paragraph above one low-poly object and a compact lower step strip.
- A sparse calendar view made from a year label and dot matrix rather than a white calendar card.
- Dark one-column profile or settings screens composed from restrained grouped cards.
- A premium sheet with stacked rounded pricing choices and a persistent pill action.
- A full-bleed poster-like skin showcase with a lower carousel of alternative material thumbnails.

Dense utility content scrolls, but the central habit stage remains fixed and compositionally open.

# Navigation appearance

No conventional tab bar was observed. Primary chrome consists of a floating plus circle at the upper-left, a profile or settings circle at the upper-right, a centered title, a compact lower date rail, and a vertical-ellipsis control near the lower-right. Detail screens use a circular back control. Sheets have broad rounded tops; skin selection uses a low horizontal carousel. Selected dates and options use yellow-orange emphasis. This section defines appearance only.

# Components

The central habit control is a large authored sphere or object, not a conventional rectangular button. Its unchecked and completed forms preserve size and position while changing material, checkmark, light, or internal treatment. Visible supporting controls are circular with quiet charcoal fills or outlines and at least 44-point targets.

The date rail uses evenly spaced compact day labels and circular date or check states, with yellow-orange marking the current or selected item. Daily progress appears in a dark rounded sheet with a very large central number and symmetric minus/plus controls. Achievement content uses dark square cards with authored silhouettes, rings, and reduced-contrast locked states.

Premium choices are stacked 16-point-radius dark cards; selection is expressed with a yellow outline or fill, not layout movement. Primary actions are 52–60-point pills. Settings toggles use yellow for on. Skin thumbnails form a compact carousel and preserve stable dimensions while the central poster changes.

# Imagery and icons

Authored 3D objects are indispensable: faceted quest objects, glassy checked spheres, collectible material skins, sculpted badges, and achievement silhouettes create the product's main hierarchy. Central objects are contained with their silhouette, shadow, and specular or rim light intact. Poster-like skin art may fill the screen, but still leaves the lower selector legible.

The imagery cannot be omitted while final assets are pending. A temporary or generated asset must preserve the object's 55–70% width, dark-stage contrast, lighting direction, material character, and full shadow. Functional icons remain small and quiet; SF Symbols are not substitutes for the central object, skin, or badge artwork.

# States

The unchecked and completed habit states preserve composition while changing the central sphere, checkmark, and illumination. A daily-progress modal introduces a large numeric value with minus/plus controls. The current date uses yellow-orange; completed dates use concise check states. Calendar history retains the sparse dot matrix. Locked achievements reduce silhouette contrast and show progress rings. Selected premium options gain a yellow outline. Skin selection changes the central material or full-screen poster while keeping the lower carousel stable. Native purchase and keyboard sheets may overlay the app temporarily.

# iOS adaptation

Extend black through the safe areas. Keep top circular controls below the status region and the date rail above the home indicator. On smaller iPhones, preserve the central object's silhouette and primary action; reduce surrounding gaps or move secondary detail into a sheet before shrinking the object into insignificance.

Use internal scrolling for profile, premium, achievements, and settings when Dynamic Type grows. Every small circular, date, carousel, stepper, and back control needs a 44-point hit area. VoiceOver should announce the habit or object state, current date, progress, then available actions. System purchase, permission, and keyboard UI remain native. Preserve the dark appearance; do not invent a light version. Reduce Motion may simplify object transitions but must retain the authored raster states.

# Anti-generic checklist

- Do not replace the central authored object with a generic progress ring, checkmark button, or emoji.
- Do not turn the dark stage into a dashboard of metric cards.
- Do not introduce default blue tint, a stock `TabView`, or a light grouped `Form`.
- Do not crop the sphere, quest object, shadow, or material focal point.
- Do not use arbitrary SF Symbols for skins, achievements, or central states.
- Do not flatten rounded display type, condensed labels, and monospaced metadata into one hierarchy.
- Do not fill the stage with explanatory prose or mood copy.
- Do not apply collectible skin colors to all surrounding interface chrome.

</design-context>
