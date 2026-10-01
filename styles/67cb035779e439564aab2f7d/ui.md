<design-context>
---
version: 1
platform: iOS
name: setka-design-analysis
description: "A black-first professional social network with near-white geometric type, charcoal content cards, electric violet actions, and glossy purple network imagery. The interface is dense and expressive: bold lowercase headings, segmented white chips, dark post surfaces, and a persistent five-tab shell."

colors:
  primary: "#8E00FF"
  on-primary: "#FFFFFF"
  primary-soft: "#281037"
  ink: "#F6F6F7"
  ink-muted: "#A6A6AB"
  ink-subtle: "#74747A"
  canvas: "#000000"
  surface-1: "#19191A"
  surface-2: "#242426"
  surface-3: "#303033"
  hairline: "#343438"
  semantic-success: "#35C46A"
  semantic-warning: "#FFB020"
  semantic-danger: "#FF4A55"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: Geometric Sans, fontSize: 38, fontWeight: 600, lineHeight: 1.00, letterSpacing: -0.8 }
  display-lg: { fontFamily: Geometric Sans, fontSize: 30, fontWeight: 600, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: Geometric Sans, fontSize: 25, fontWeight: 600, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: Geometric Sans, fontSize: 21, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  button: { fontFamily: Geometric Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 12, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 22
  xxl: 28
  pill: 9999
  full: 9999

spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 32
  xxl: 48
  section: 64

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [13, 18]}
  feed-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12 }
  community-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  filter-chip: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: [8, 12]}
  filter-chip-selected: { backgroundColor: "{colors.ink}", textColor: "{colors.canvas}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: [8, 12]}
  composer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.xs}", padding: 16 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 62 }
---

# Overview

setka is a high-contrast professional network with a pure black canvas, charcoal feeds, wide geometric headings, white selection chips, and electric violet actions. Community content remains dense and media-led, while glossy purple network graphics make onboarding and profile identity distinctive.

**Key Characteristics:**
- Pure black shell with layered charcoal cards.
- Broad geometric lowercase headings.
- Violet gradient reserved for key creation and identity actions.
- White selected chips provide strong binary contrast.
- Five-tab navigation persists across feed, communities, creation, chats, and profile.

# Non-negotiable visual invariants

- Sampled screens consistently use pure black shell with layered charcoal cards.
- The reference consistently shows broad geometric lowercase headings.
- Sampled screens consistently use violet gradient reserved for key creation and identity actions.
- The reference consistently shows white selected chips provide strong binary contrast.
- Five-tab navigation persists across feed, communities, creation, chats, and profile.

# Color and surfaces

### Brand & Accent

- **Electric Violet** ({colors.primary}) marks creation, key profile action, and brand energy.
- **Violet Soft** ({colors.primary-soft}) supports subtle identity and selected states.

### Surface

- **Canvas** ({colors.canvas}) is the dominant app background.
- **Surface 1** ({colors.surface-1}) carries posts, community rows, and navigation.
- **Surface 2** ({colors.surface-2}) carries chips, callouts, and inputs.
- **Surface 3** ({colors.surface-3}) is reserved for pressed or nested states.

### Text

- **Ink** ({colors.ink}) carries headings and primary content.
- **Muted** ({colors.ink-muted}) carries metadata and descriptions.
- **Subtle** ({colors.ink-subtle}) is limited to timestamps and inactive navigation.

### Semantic

Use green, amber, and red only for success, warning, and destructive states. Reaction emoji may introduce color inside content but should not alter the shell.

# Typography

### Font Family

Use a wide geometric sans for screen titles and brand actions, paired with a neutral system sans for posts, comments, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| `{typography.display-xl}` | 38 points | 600 | Onboarding headline |
| `{typography.display-lg}` | 30 points | 600 | Profile name or hero title |
| `{typography.display-md}` | 25 points | 600 | Screen title |
| `{typography.headline}` | 21 points | 600 | Community or post heading |
| `{typography.card-title}` | 16 points | 600 | Author and content title |
| `{typography.body}` | 14 points | 400 | Posts, comments, and descriptions |
| `{typography.caption}` | 10 points | 400 | Time, role, and counts |

### Principles

- Keep branded headings short and mostly lowercase.
- Use neutral body type for long professional content.
- Preserve high contrast without excessive bolding.
- Let hashtags and links use restrained blue or violet emphasis.

### Note on Font Substitutes

Use a wide geometric face for display and SF Pro or Inter for body. Do not apply the display face to long posts or chat messages.

# Screen composition

### Spacing System

Use a 4 points base, 10 points screen gutters, 8 points between feed cards, and 16–24 points between major profile or onboarding groups.

### Grid & Container

The feed is a single column of full-width cards. Community and search results use stacked rows. Profile mixes a centered hero with a three-column metric strip and one-column career cards.

### Whitespace Philosophy

Keep feeds compact and profile headers more spacious. Black canvas between cards is the main separator; do not add redundant outlines everywhere.

Surface hierarchy observed in the source:

Depth comes from charcoal steps, purple glows, full-bleed media, and bottom sheets. Shadows are nearly invisible against black.

### Decorative Depth

Use violet glow, glossy network nodes, and subtle card contrast. Avoid gray gradients that muddy the black shell.

# Navigation appearance

Use the persistent five-tab bar for Feed, Communities, Create, Chats, and Profile. Active state turns white; unread counts use small blue badges.

# Components

### Buttons

Primary creation actions use violet or violet gradient with white type. Secondary actions use charcoal; selected binary controls invert to white with black text. Native controls must inherit this dark, geometric style.

### Cards & Containers

Post cards combine author identity, text, media, reactions, comments, share, and view count. Community cards prioritize avatar, title, subscribers, description, and follow action.

### Inputs & Forms

Search fields are charcoal and compact. The composer uses a black writing canvas, visible formatting tools, and a circular send action. Keep keyboard context and draft state clear.

# Imagery and icons

Use violet glow, glossy network nodes, and subtle card contrast. Avoid gray gradients that muddy the black shell.

User media can fill the card width. Brand illustrations use circular nodes, thin connecting lines, and soft purple glow against black.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Invitations and onboarding hints use dismissible charcoal callouts. Empty chat or community states should retain the black canvas and one direct next action.

# iOS adaptation

### Touch Targets

Filters, reactions, follow, overflow, composer tools, and navigation items require at least 44 points targets.

### Collapsing Strategy

Allow filter rows to scroll horizontally. Keep bottom navigation fixed while feed, profile, and chats scroll independently.

### Image Behavior

Use `cover` for post media and circular crop for avatars. Preserve brand illustration glow against black and never place it on a light card.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Do not lighten the entire interface to gray.
- Do not use violet on every interactive label.
- Do not apply the display font to long content.
- Do not separate every row with bright borders.
- Do not expose default blue iOS controls.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
