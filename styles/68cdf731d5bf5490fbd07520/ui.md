<design-context>
---
version: 1
platform: iOS
name: Perplexity-AI-design-analysis
description: "A quiet warm-white AI search interface where document-like answers, sparse teal actions, small inline citations, photography-led discovery cards, compact icon chrome, and a persistent rounded composer carry more visual weight than decoration."
colors:
  canvas: "#FBFAF7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F1EE"
  accent-primary: "#27A7A4"
  accent-secondary: "#39C7D2"
  text-primary: "#111312"
  text-secondary: "#737572"
  divider: "#E5E2DC"
  destructive: "#D5534F"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 500, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 27, fontWeight: 600, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 24}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 14
  control-gap: 10
rounded:
  control: 16
  card: 14
  sheet: 28
  pill: 999
components:
  composer: {fill: "#FFFFFF", border: "#E5E2DC", radius: 22, action: "teal circular control"}
  source-chip: {fill: "#F2F1EE", text: "#737572", radius: 999}
  discovery-card: {fill: "#FFFFFF", radius: 14, media: "wide rounded crop"}
  navigation: {fill: "visually open or warm-white", icons: "thin near-black line", selected: "teal"}
---

# Overview

Perplexity is visually closer to a calm reading tool than to a dashboard. Warm off-white fills most of the viewport, near-black text supplies the dominant mass, and teal is confined to decisive input and selected-state details. The empty search surface relies on negative space and a floating composer; populated answers become a single document-like reading column with small sources. Discovery screens introduce broad content photography inside quiet rounded cards. A dark subscription surface is the deliberate high-contrast exception.

# Non-negotiable visual invariants

- Warm white or off-white dominates ordinary search, answer, discovery, and settings surfaces.
- Teal is a sparse interactive signal, not a full-screen brand wash.
- The prompt composer remains a rounded bottom anchor on search and chat-like surfaces.
- Long answers read as an open vertical document rather than a stack of equal cards or chat bubbles.
- Sources and citations remain compact, muted, and visually adjacent to the claims or sections they support.
- Navigation chrome uses thin line icons and restrained back controls with little surrounding decoration.
- Photography is substantial inside discovery cards but does not become a background behind answer text.
- Dark charcoal, cyan, and yellow are reserved for the subscription presentation and do not leak into ordinary reading screens.

# Color and surfaces

The main canvas is a warm paper-like off-white, with pure white used for the floating composer, cards, and focused modal surfaces. Pale warm gray separates chips, inactive controls, skeletons, and settings rows. Near-black text carries titles and long-form answers; medium gray carries source names, timestamps, and helper labels. Teal marks send, voice, selected modes, checks, and small active elements. Dividers and borders are warm, thin, and low contrast. Destructive messaging uses a restrained red.

The subscription archetype reverses the ordinary light hierarchy with charcoal surfaces, white type, cyan highlights, and a controlled yellow plan accent. Default iOS blue, cool gray grouped backgrounds, bright multicolor gradients, or a teal fill applied to every card would visibly break the reference.

# Typography

Typography is restrained system sans with moderate rather than dramatic scale contrast. Empty-state titles and subscription statements use medium-large display sizing; answer headings use compact semibold; body text receives generous line height for sustained reading. Sources, citations, and metadata are much smaller and muted but remain legible. Centered text appears on sparse empty and purchase surfaces, while answers, settings, and discovery copy are left aligned.

Use SF Pro Display and SF Pro Text as the iOS-safe family. Preserve hierarchy under Dynamic Type by allowing answer headings and body paragraphs to wrap independently, placing metadata on an additional line before shrinking it, and retaining visible contrast between body and captions. Use tabular numerals for plan prices or other aligned numeric comparisons.

# Screen composition

The empty search archetype places a modest title or mark in a large open middle region, with the composer occupying roughly the bottom 12–18 percent above the home indicator. Answer screens use a compact safe-area header, one vertically scrolling readable column, inline source treatments, and a persistent follow-up composer. Discovery uses compact top tabs followed by a single vertical sequence of wide image-led cards. Horizontal insets are commonly about 16 points, with 12–16 points inside cards and wider vertical pauses between answer sections.

Observed archetypes include the sparse search entry; keyboard-raised prompt entry; long-form answer with sources and related content; discovery feed with broad photography; centered voice or loading treatment; settings rows in light modal sheets; a dark plan comparison and purchase surface; and native purchase confirmation over a dimmed background. Imagery grows dominant only in discovery cards, while text remains dominant in search results.

# Navigation appearance

Top bars are compact and visually open, using small back chevrons and thin utility icons without a heavy filled navigation band. Topic or plan selection uses low-profile horizontal tabs or segments with subtle selected emphasis. Bottom sheets use large top radii and sit over a blurred or dimmed source screen. No persistent multi-item tab bar was visible in the inspected screens. The rounded composer supplies the strongest recurring bottom-edge control.

# Components

The composer is a floating white rounded field with a fine warm-gray edge, compact attachment or mode controls, and a teal circular voice or submit action. It becomes taller for multiline input without losing its bottom anchoring. Source chips are small pale pills with muted type and minimal padding; citations may also appear as tiny inline markers.

Discovery cards pair a wide rounded photographic crop with a concise title, small source information, and quiet icon actions. Answer content stays mostly unboxed, using section spacing instead of repeated card backgrounds. Settings use compact white or warm-gray rows with thin separators, trailing controls, native toggles, and checkmarks. Subscription surfaces use dark rounded cards, segmented plan selection, and a clearly dominant cyan or light action. Pressed and selected states intensify teal or the local plan accent without adding heavy shadows.

# Imagery and icons

Discovery photography is compositionally important on feed cards: preserve its broad crop, rounded corners, and roughly upper-half relationship to the card copy. Product, news, and editorial images are content assets rather than an authored illustration family. Avatars and source marks remain small and subordinate. Ordinary answers should not acquire decorative hero imagery.

Icons are thin, monochrome utility outlines at compact optical size. Teal identifies the active input or selected state; inactive icons remain near-black or gray. Voice visualization is a restrained centered line or waveform rather than a decorative illustration. Branding and App Store purchase symbols are not reusable illustration assets.

# States

Observed states include empty prompt entry, keyboard input, answer loading, populated answer, selected search mode, voice focus, settings toggles on and off, selected subscription plan, empty purchase history, and native App Store confirmation. Loading uses a small restrained spinner or centered progress signal. Modal states blur or dim the underlying warm canvas. Across states, light surfaces, sparse teal emphasis, thin icons, and compact metadata remain constant; the paywall alone switches to a dark high-contrast field.

# iOS adaptation

Keep the top bar and composer within current iPhone safe areas, with answer and discovery content in a vertical scroll container. The composer should follow the keyboard, preserve access to its primary action, and avoid covering the latest response. Use native sheet, keyboard, toggle, and App Store purchase behavior while styling adjacent surfaces to the recorded warmth, radii, and teal emphasis. Maintain at least 44-point targets for icon actions even when glyphs are visually small.

VoiceOver order should move from title and navigation controls through the answer or discovery content, sources, then composer controls. On compact widths, wrap source chips and metadata, reduce secondary recommendations before the primary answer, and keep photography at a stable card aspect rather than compressing it into a strip. Dynamic Type should lengthen the document vertically, not collapse type roles. If a dark appearance is required outside the observed paywall, preserve semantic contrast without importing its promotional cyan-yellow treatment.

# Anti-generic checklist

- Do not turn answers into chat bubbles or a stack of identical elevated cards.
- Do not replace the warm canvas with a cool system-gray grouped background.
- Do not use default blue tint in place of the sparse teal interaction color.
- Do not add a generic persistent tab bar to the observed compact navigation treatment.
- Do not simplify the composer to a plain `TextField` and text button.
- Do not enlarge citations until they compete with answer body text.
- Do not omit discovery photography or replace its broad crops with arbitrary SF Symbols.
- Do not apply the dark subscription palette to ordinary search and reading surfaces.

</design-context>
