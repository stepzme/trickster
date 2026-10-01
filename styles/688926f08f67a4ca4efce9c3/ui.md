<design-context>
---
version: 1
platform: iOS
name: Mamba-design-analysis
description: "A dual-mode iPhone system pairing sparse pastel illustrated onboarding with a near-black, portrait-first core built from immersive member photography, coral emphasis, compact utility chrome, and rounded floating actions."
colors:
  canvas: "#0D0B0F"
  surface-primary: "#1C191F"
  surface-secondary: "#2A262E"
  accent-primary: "#FF5A2A"
  accent-secondary: "#29BBD0"
  text-primary: "#FFFFFF"
  text-secondary: "#AAA5AF"
  divider: "#302B34"
  destructive: "#E5484D"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 14
  card: 24
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "coral-orange or black by visual mode", text: "white", height: 52, radius: 14}
  secondary-action: {fill: "white or dark charcoal", text: "near-black or white", height: 48, radius: 999}
  portrait-card: {fill: "member photography", radius: 24, overlay: "bottom black fade", padding: 0}
  circular-reaction: {fill: "white, coral, or cyan", diameter: 56, icon: "high-contrast simple glyph"}
  navigation: {fill: "near-black", active: "white or coral", inactive: "muted gray"}
---

# Overview

Mamba is recognisable through contrast between two authored modes. Introductory screens are airy pastel fields with oversized rounded choices, a thin wandering progress line, and playful spot art. The core turns almost completely dark and lets large member portraits occupy most of the viewport; coral-orange, cyan, white, and small status colors carry the controls. A generic light card stack would miss both halves of the reference.

# Non-negotiable visual invariants

- Core discovery is near-black and photography-first; one portrait card occupies most of the visible height instead of sitting in a dashboard of small cards.
- Profile photography is aspect-fill with faces kept legible, rounded outer corners, and a dark lower fade behind identity text and actions.
- Coral-orange is reserved for attraction, promotion, purchase, or the strongest branded emphasis; cyan remains a distinct secondary utility accent.
- Onboarding uses a full-screen pastel field, generous empty space, one dominant prompt, and one authored illustration or decorative motif near the lower half.
- Primary choices and actions are substantial broad rounded buttons or large circular reaction controls, not scattered default text links.
- Product navigation sits against the dark canvas with compact icons, muted inactive states, and a clearly brighter white or coral selected state.
- Dense utility screens retain the black/charcoal hierarchy instead of switching to default white `Form` styling.
- Photography dominates the core; authored illustration is reserved for onboarding, education, and promotional moments.

# Color and surfaces

The core canvas is black to near-black. Charcoal is used for lists, form rows, sheets, inputs, and secondary panels; boundaries come from tone changes or thin dark dividers rather than bright borders. White carries primary text, with cool gray for metadata and inactive navigation.

Coral-orange is the strongest brand mass and can extend into warm pink in promotional treatments. Cyan marks secondary utilities and verification-like emphasis, while green is used sparingly for presence or success. These accents remain small against the photographic and black field. Default iOS blue as universal tint, large white surfaces inside the core, or several equally loud accents would break the hierarchy.

Onboarding deliberately inverts the density: pale pink, lilac, cream, mint, or light blue can fill the screen, with near-black type and white choice controls. Do not place this pastel palette inside the dark core as arbitrary cards.

# Typography

Use a modern SF Pro hierarchy. Onboarding questions and major state titles are large, bold, and allowed to wrap over two or three short lines. Profile names and ages are bold and prominent over photography; descriptions, location, presence, message previews, and tab labels are much smaller and quieter.

Keep a visible scale jump between title, identity, body, and metadata. Buttons use semibold centered labels rather than all caps. Numbers and verification/status marks sit close to the identity they qualify. With Dynamic Type, let onboarding prompts and supporting copy wrap and move art or controls downward; do not shrink every role until the hierarchy becomes uniform. Preserve a sufficiently opaque lower fade behind enlarged text over photographs.

# Screen composition

Onboarding is single-task: safe-area-aware progress or dismissal at the top, a large prompt in the upper third, optional compact explanation, then broad rounded choices or input controls. The lower third carries an illustration or generous negative space; the strongest CTA sits above the home indicator and stays separate from the art.

Photo discovery is almost edge-to-edge. One large rounded portrait card or stacked deck is the main mass, with concise identity information at its lower edge. Large circular reaction controls float near the bottom of that mass, while persistent navigation occupies a compact strip at the safe area. Profile browsing can tighten into a two-column portrait grid with narrow gaps and minimal chrome.

Profile detail remains image-led, using large media above or behind short information sections. Chat and settings replace the large image with scanning dark rows but keep 16-point insets, restrained dividers, charcoal inputs, and clear section gaps. Filters, purchase prompts, social actions, and selectors appear as rounded dark sheets or panels over context rather than unrelated white pages.

# Navigation appearance

Primary navigation is a dark bottom bar with simple filled or outlined glyphs, compact labels when present, muted gray inactive items, and a white or coral active item. Top bars are visually light: centered title or identity, with back, close, filter, or overflow glyphs at the edges and little container chrome.

Sheets use rounded upper corners and a dimmed backdrop. Back and close controls are ordinary compact icon targets, not oversized branded buttons. Selected filters and choices use coral, cyan, a checkmark, or a filled dark row; this describes appearance only, not product routes.

# Components

Portrait cards have large radii, edge-to-edge photography, and a bottom gradient carrying a bold name/age line plus restrained metadata. Two-column profile tiles reuse the crop and identity treatment at smaller scale.

Reaction controls are large circles with clear silhouettes and deliberately different fills: white for a neutral action, coral for the main positive action, and cyan for a secondary highlighted action. Promotional and purchase actions use broad coral buttons; onboarding may use black CTAs against pastel fields and white pill choices with dark type.

Dark form rows and inputs are full-width flat charcoal surfaces with light text, muted placeholders, and compact selection markers. Checkboxes, OTP cells, date controls, chat composer, badges, toasts, and sheet rows reuse the same restrained radius and accent logic. Disabled CTAs lower contrast without losing size; pressed states darken or compress the existing control rather than adopting default blue.

# Imagery and icons

Real portrait photography is the dominant core asset. Use aspect-fill crops, preserve faces, and never stretch, tint, or cover them with long copy. Where a portrait is the background, use a local black gradient only where text or controls require contrast. Blurred photography can support overlays but remains recognisable as the visual source.

Onboarding and promotional imagery uses authored flat illustrations with playful characters, oversized letters, mail or notification motifs, birds, waves, and lightly surreal objects. Their footprint is compositionally important and cannot be removed while waiting for final assets. Interface icons remain simple high-contrast glyphs; they should not imitate the authored art or substitute for it.

# States

Observed states include enabled and disabled primary actions, selected choices and checkboxes, keyboard-present forms, date and OTP entry, bottom sheets, promotional/paywall panels, match overlays, chat requests, upload confirmation toasts, and active reaction/swipe feedback. The core keeps its black/charcoal base, large rounded geometry, concise white hierarchy, and limited coral/cyan accents.

Onboarding retains its pastel field and illustration-led spacing as prompts, selections, or inputs change. Match and promotion moments may increase coral or graphic weight, but routine lists and chat remain restrained.

# iOS adaptation

Use safe-area-aware full-screen containers: pastel backgrounds and dark photo canvases reach the edges, while prompts, titles, and controls remain inset. Discovery media uses aspect-fill and a face-conscious focal point; preserve the card's dominance on shorter iPhones by reducing secondary copy before shrinking it into a small tile. Two-column grids can remain two columns at compact width while metadata wraps or truncates conservatively.

Use scroll containers for profiles, settings, filters, and keyboard-driven forms, keeping the active field visible. Bottom actions and navigation clear the home indicator. Maintain 44-point hit areas, logical VoiceOver order from identity/content to actions, meaningful labels for reaction icons, and Dynamic Type wrapping. The sampled core is dark and onboarding light/pastel; do not invent automatic inversion that erases this authored contrast.

# Anti-generic checklist

- Do not replace the immersive portrait card with a generic white dashboard card.
- Do not build core screens from default `Form`, grouped list backgrounds, or system-blue links.
- Do not render every action as the same small rounded rectangle; preserve broad CTAs and differentiated circular reactions.
- Do not omit photography, face crops, lower fades, or authored onboarding art.
- Do not mix pastel onboarding panels arbitrarily into the dark product core.
- Do not use random SF Symbols with inconsistent weights or containers in place of the compact icon family.
- Do not flatten titles, names, body copy, and metadata into nearly equal sizes.
- Do not apply one uniform corner radius to portraits, sheets, inputs, pills, and reaction controls.

</design-context>
