<design-context>
---
version: 1
platform: iOS
name: Suno-design-analysis
description: "A near-black music interface where full-bleed cover art and video provide most color, warm pink-orange gradients mark creation, compact white type carries dense track metadata, and a persistent mini-player sits above dark bottom navigation."
colors:
  canvas: "#0B0B0C"
  surface-primary: "#171719"
  surface-secondary: "#252527"
  accent-primary: "#F43F74"
  accent-secondary: "#FF9A35"
  text-primary: "#FFFFFF"
  text-secondary: "#A7A7AC"
  divider: "#343438"
  destructive: "#E85C67"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 700, lineHeight: 44}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 10
rounded:
  control: 12
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "warm pink-orange gradient", text: "white semibold", shape: "pill"}
  secondary-action: {fill: "white", text: "near-black semibold", shape: "pill or circle"}
  primary-card: {fill: "charcoal", content: "artwork, title, creator, compact metadata", shape: "medium rounded"}
  navigation: {fill: "near-black", selected: "white or warm accent", accessory: "mini-player above tabs"}
---

# Overview

Suno is a dark, media-led music interface. Cover art, video, and artwork-derived color fields dominate discovery and playback; charcoal creation panels and compact metadata keep the surrounding chrome restrained.

# Non-negotiable visual invariants

- Near-black fills the full viewport rather than appearing only behind isolated cards.
- Cover art or video is a primary visual mass on discovery and playback screens.
- Pink-to-orange color is reserved for creative emphasis, not spread across ordinary controls.
- Track lists remain dense: artwork, identity, metrics, and overflow actions share one compact row.
- Creation controls are grouped into layered charcoal panels, never a default white form.
- The mini-player remains visually attached to the bottom navigation when playback is active.
- White playback controls are higher contrast than secondary creation and metadata controls.

# Color and surfaces

The canvas is almost black, with two visible charcoal steps for panels and inputs. White leads titles and playback; cool gray carries creators, counts, durations, and prompts. The warm pink-orange gradient identifies creation and selected creative states. Green, amber, and red are limited to success, warning, and destructive meanings. Artwork may cast a sampled blur behind the player, but unrelated colored glows would break the system.

# Typography

Large authentication or feature statements use a bold display scale; section titles are compact and strong; track metadata is notably smaller and quieter. Titles may truncate, while prompts and creation fields wrap. Use SF Pro as the iOS-safe face and preserve the contrast between display text, 16-point reading text, and 12-point metadata as Dynamic Type grows.

# Screen composition

Discovery screens combine edge-to-edge dark chrome, horizontal artwork shelves, and vertical track rows. Creation screens stack a small number of wide charcoal panels with a high-contrast action near the bottom. Playback screens give artwork or video most of the upper viewport, then place track identity and large controls below. Library and profile screens remain list-led but retain strong media thumbnails. Respect the top safe area; scrolling content clears both mini-player and bottom safe area.

# Navigation appearance

Bottom navigation is dark, compact, and visually subordinate to content. Selected destinations brighten to white or receive a restrained warm accent. Circular top utilities are monochrome. Deep screens use minimal back controls, and sheets rise as dark rounded surfaces. Product routes and tab labels are not part of this reference.

# Components

Primary creative actions are warm gradient pills with white semibold labels. Playback actions are white circles or pills with near-black symbols. Creation panels use charcoal fill, medium rounding, 16-point insets, and grouped inputs. Track rows pair square rounded artwork with a two-line identity block, compact metrics, and a trailing overflow control. Disabled actions lose contrast without changing geometry; selected pills brighten text or receive a restrained accent fill.

# Imagery and icons

Album covers, video stills, and profile media supply most chromatic variety and cannot be omitted while assets are pending. Use full-bleed crop for playback media and consistent square crops in rows. Icons are compact, filled or plainly stroked, and monochrome except for explicit creative emphasis; arbitrary decorative symbols do not replace real media.

# States

Observed states include authentication, populated discovery, generation in progress, active playback, library content, and profile content. Progress and publication status stay close to the relevant track. Across states, the black canvas, compact metadata, media prominence, and warm creative accent remain constant.

# iOS adaptation

Keep creation and playback single-column at compact width. Use vertical scrolling beneath safe-area-aware bars, horizontal scrolling for shelves and chips, 44-point hit regions around compact icons, and native keyboard avoidance for prompts. At large Dynamic Type, wrap supporting copy and expand rows before shrinking artwork or hiding status. VoiceOver order follows artwork, title, creator, status, then actions. App-owned sheets and controls stay dark even when native behavior is used.

# Anti-generic checklist

- No default blue tint or white `Form` surfaces.
- No generic card stack detached from the black canvas.
- No unstyled `TabView` without the mini-player relationship.
- No removal of cover art or video from media-led layouts.
- No gradient on every button, card, or status.
- No uniform type size for titles, track identity, and metadata.
- No arbitrary SF Symbols used as decorative artwork.
</design-context>
