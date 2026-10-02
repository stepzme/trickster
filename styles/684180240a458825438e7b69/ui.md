<design-context>
---
version: 1
platform: iOS
name: Okko-design-analysis
description: "A black-first iOS streaming visual system built from cinematic artwork, heavy white editorial hierarchy, charcoal grouped surfaces, compact outline navigation, violet conversion controls, and media assets as the dominant imagery."
colors:
  canvas: "#000000"
  surface-primary: "#151517"
  surface-secondary: "#242428"
  accent-primary: "#6A16F5"
  accent-secondary: "#3A086F"
  text-primary: "#FFFFFF"
  text-secondary: "#A9A6AE"
  divider: "#2B2A30"
  destructive: "#F0525F"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 16
  control-gap: 8
rounded:
  control: 8
  card: 12
  sheet: 24
  pill: 999
components:
  primary-action: {height: 48, fill: "violet gradient", foreground: "#FFFFFF", radius: 8}
  secondary-action: {height: 44, fill: "#242428", foreground: "#FFFFFF", radius: 8}
  primary-card: {fill: "#151517", foreground: "#FFFFFF", radius: 12}
  navigation: {fill: "#000000", selected: "#FFFFFF", unselected: "#8E8B93"}
---

# Overview

Okko reads as a black cinema surface rather than a generic grouped app. The viewport is dominated by film stills, posters, sports photography, channel marks, and content thumbnails; interface chrome stays compact, dark, and low contrast. Recognition comes from the contrast between pure black space, oversized white headings, dense horizontal media rails, rounded charcoal controls, and a saturated violet gradient reserved for primary conversion controls.

# Non-negotiable visual invariants

- The app canvas is pure black from status bar through tab bar; charcoal appears as contained controls, sheets, cards, and settings groups.
- Media artwork carries most color and scale: portrait posters, wide editorial cards, key art, channel marks, team marks, and circular cast/profile imagery cannot be replaced by plain text blocks.
- Headings are heavy white SF Pro Display, left aligned on content pages and centered only on compact top bars; supporting metadata is small gray SF Pro Text.
- Browsing screens use dense horizontal continuation: partially visible next cards, tight rails, and mixed portrait/wide ratios instead of uniform grids.
- Primary paid/account actions use a violet-to-purple gradient bar; secondary actions remain charcoal and selected filter segments invert to light fill with dark text.
- Details and media sheets keep black backgrounds with close controls, sticky or repeated violet actions, chips, metadata rows, and circular utility buttons.
- Full-screen playback states reduce the visual system to black video space, white controls, thin progress lines, and a small violet brand mark.

# Color and surfaces

The dominant color mass is black, including safe areas, scrolling backgrounds, modal backdrops, and persistent bottom navigation. Primary surfaces are near-black grouped cards for settings, sports rows, device prompts, and subscription blocks. Secondary controls use slightly lighter charcoal for filter chips, category shortcuts, circular utilities, and secondary buttons. Dividers are thin and low contrast, usually visible only inside sheets or list groups.

Violet and purple are concentrated in full-width primary actions and small brand marks, often as a horizontal or diagonal gradient. White is used for selected tab icons, selected segmented controls, primary labels, and titles. Gray separates metadata, inactive tabs, explanatory copy, and secondary row text. Local status colors are sparse: green ratings and subscription badges, red/pink live or destructive labels, and occasional small accent chips from source artwork. A generic white grouped background, default blue tint, or bright colored navigation would visibly break the reference.

# Typography

The hierarchy depends on steep type contrast. Major page titles such as account, catalog, and channel screens sit around 34 points, section titles around 22 points, and body/settings rows around 16 points. Labels on chips, buttons, and tab items are compact; captions and metadata sit near 10-12 points and often appear gray. Headings use SF Pro Display with bold weight and tight leading, while labels, rows, metadata, and paragraphs use SF Pro Text.

Text is mostly left aligned, except for top navigation titles and centered button labels. Long descriptions wrap in narrow columns on black with generous line spacing; dense lists use one- or two-line rows with metadata immediately below the title. Dynamic Type should increase row height and body copy first while preserving poster ratios, wide cards, tab legibility, and the oversized heading-to-metadata contrast.

# Screen composition

The repeated iPhone composition is a black full-screen scroll surface with 12-point horizontal insets, compact top controls, and a persistent five-item tab bar at the bottom on top-level browsing surfaces. The primary media feed starts with a large rounded hero artwork or title module, then moves into shortcut chips and stacked horizontal rails. Rail modules leave the next item cropped at the trailing edge to signal continuation, with section headings close to the content and little decorative space.

Catalog-like screens use a large title, a light rounded search field, and either two-column dark category tiles with cropped poster stacks or vertical genre rows. Filter and sorting states appear as dark sheets or top filter rows with charcoal pills and a light selected segment. Detail screens use a full-width key-art header with dark fade, then title, badges, metadata, price text, violet primary action, circular utilities, and dense supporting sections. Channel screens switch to vertical rows with square station marks, title/metadata pairs, and trailing outline actions. Sport screens use wide editorial cards and rounded event rows with time, team marks, and trailing reminder symbols. Account and settings surfaces are sparse black pages with grouped charcoal cards, centered empty imagery, and long text blocks.

# Navigation appearance

The bottom navigation is flat black with five outline icons and very small labels. Selected state is bright white; inactive state is muted gray. Top bars are visually quiet: a back chevron or close circle, a centered title on deeper surfaces, and a small circular account/profile action on browsing screens. Detail and sheet close controls are circular charcoal buttons with white glyphs, placed over black or artwork near the top-right safe area.

Segmented filters use dark rounded rectangles until selected, then invert to a light segment with dark text or a checkmark. Sheets slide over the black canvas as rounded near-black panels; they keep the same white title and gray row treatment as full screens. Playback removes browsing navigation and uses rotated white controls, thin progress tracks, and minimal icons on an otherwise black surface.

# Components

Primary actions are full-width rounded rectangles, about 48 points high, filled with violet/purple gradient and centered white label text. Secondary actions are charcoal rounded rectangles of similar height, while small utility actions are 44-48 point dark circles with outline icons and optional short labels below.

Poster cards keep portrait ratios with small rounded corners and little external text. Wide editorial cards use a 16:9-like crop with overlaid or adjacent titles. Category tiles are near-black rounded rectangles with a short white label at the top and layered poster crops occupying the lower portion. Search fields are intentionally light gray on black with dark placeholder text, rounded corners, and a compact height around 36 points.

Settings and account cards are grouped charcoal surfaces with 12-16 point padding, white row titles, gray supporting text, leading outline icons or avatar imagery, and trailing chevrons. Sport event cards are rounded dark rows with time at left, teams stacked in the center, and reminder icons at the trailing edge. Chips use tight horizontal padding, 8-point corner radii, gray text or white selected text, and sparse dividers only where rows need separation.

# Imagery and icons

Imagery is not decorative: it is the main structure of the interface. Use real or generated raster media for title art, poster thumbnails, channel marks, team marks, profile avatars, cast portraits, and editorial cards. Crops preserve faces, title treatments, and sport subjects; portrait posters stay portrait, editorial/sport cards stay wide, and cast/profile imagery stays circular. Empty states observed in account/search contexts use small purple-blue 3D-style raster art centered above text, but this is not enough evidence for a stable standalone illustration system.

Interface icons are simple white or gray outlines with low visual weight: tab icons, account, search, close, back, bookmark, reminder, share, playback, and settings. They remain subordinate to artwork and text. Do not substitute SF Symbols, emoji, text glyphs, or assembled UI icons for branded media, channel marks, team marks, poster art, or empty-state artwork.

# States

Observed selected states brighten to white or invert to a light segment; inactive states recede to gray on black. Search has idle, keyboard, entered-query, empty-result, and category-grid appearances while retaining the light search field. Empty account/search surfaces keep a black canvas, centered purple-blue raster object, white explanatory title text, and restrained supporting copy.

Modal and sheet states preserve the same black/charcoal palette, large white sheet title, rounded top corners, close circle, and row dividers. Detail states show price, subscription, rating, age, language, genre chips, cast circles, description text, and information rows without changing the underlying dark system. Settings states include active subscription cards, device prompt cards, quality lists with checkmarks, destructive red exit rows, and long legal/explanatory copy. Playback states are almost all black with white controls and thin timeline elements.

# iOS adaptation

Use SwiftUI or UIKit scroll containers that allow black backgrounds to extend through the safe areas while keeping tappable controls inside the safe-area bounds. Preserve the persistent bottom navigation height and leave scroll content enough bottom inset that media rails, sheets, and sticky primary actions are not hidden behind the home indicator or tab bar. Keyboard screens should keep the light search field and visible black/charcoal content above the system keyboard.

Controls that look visually compact still need 44-point touch targets. Dynamic Type may increase row heights, sheet heights, and paragraph wrapping, but should not collapse poster art, channel marks, team marks, or circular portraits into generic rows. For compact-width iPhones, keep the 12-point side inset, let rails scroll horizontally, allow metadata to wrap under titles, and move trailing actions to a second row only when text would collide. VoiceOver order should follow visible hierarchy: page title, primary artwork or grouped card, title/metadata, primary action, then secondary utilities.

# Anti-generic checklist

- Do not replace the pure black canvas with white grouped backgrounds, translucent material stacks, or system `Form` sections.
- Do not use default blue tint, default `TabView` styling, or unstyled iOS segmented controls.
- Do not flatten all content into identical rounded cards; preserve portrait posters, wide editorial cards, channel rows, sport event rows, and circular portraits as distinct geometries.
- Do not spread the violet gradient across every button, chip, icon, or navigation item; it belongs to primary conversion controls and small brand marks.
- Do not omit raster media while waiting for final assets; black text blocks cannot stand in for posters, title art, channel marks, team marks, or empty-state artwork.
- Do not replace observed poster, still, portrait, or sports imagery with decorative symbols or generic placeholder art.

</design-context>
