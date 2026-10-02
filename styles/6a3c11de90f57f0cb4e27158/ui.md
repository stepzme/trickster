<design-context>
---
version: 1
platform: iOS
name: Pi-design-analysis
description: "A calm, dark editorial assistant interface combining a charcoal full-screen field, warm off-white serif conversation type, restrained green identity accents, sparse centered composition, and small framed editorial imagery."
colors:
  canvas: "#1D1D1B"
  surface-primary: "#282824"
  surface-secondary: "#F3F0E8"
  accent-primary: "#35B978"
  accent-secondary: "#9BD7B5"
  text-primary: "#F3F0E8"
  text-secondary: "#AAA79F"
  divider: "#474640"
  destructive: "#D8665D"
typography:
  hero: {fontFamily: "New York", fontSize: 40, fontWeight: 600, lineHeight: 46}
  title: {fontFamily: "New York", fontSize: 30, fontWeight: 600, lineHeight: 37}
  section: {fontFamily: "New York", fontSize: 22, fontWeight: 500, lineHeight: 29}
  body: {fontFamily: "New York", fontSize: 18, fontWeight: 400, lineHeight: 26}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 24
  section-gap: 36
  card-padding: 20
  control-gap: 12
rounded:
  control: 22
  card: 20
  sheet: 30
  pill: 999
components:
  primary-action: {fill: "accent-primary", text: "canvas", shape: "circular or pill"}
  secondary-action: {fill: "surface-primary", text: "text-primary", shape: "pill"}
  primary-card: {fill: "surface-primary", text: "text-primary", shape: "rounded panel"}
  navigation: {fill: "transparent or surface-primary", selected: "accent-primary", unselected: "text-primary"}
---

# Overview

Pi uses a near-black full-screen field, sparse centered layouts, warm serif type, and small green identity moments to make conversation feel editorial and intimate. It avoids a conventional bubble-heavy chat presentation. Large negative space, floating circular controls, and selectively framed images do more work than card stacks or decorative chrome.

# Non-negotiable visual invariants

- Charcoal fills the entire app-owned viewport; content is not placed on a generic light canvas.
- Warm off-white serif text carries brand, headings, greetings, and conversational content.
- Green appears as a concentrated identity and action accent, especially in the Pi mark and circular voice/send controls.
- Primary screens preserve substantial negative space around one focal text block, input, or image.
- Conversation is not rendered as a dense sequence of standard colored chat bubbles.
- Navigation controls are small floating circles or restrained rounded panels rather than a persistent conventional tab bar.
- Sans-serif type is reserved for utility controls, settings rows, authentication, and legal or helper copy.

# Color and surfaces

Dark charcoal is the dominant canvas and often continues behind the status and bottom safe areas. Slightly lighter charcoal creates drawers and modal-like panels without introducing bright cards. Warm off-white is the primary text color, muted warm gray is secondary, and thin dark dividers support settings rows. A fresh medium green marks the Pi identity, microphone, send, and selected controls. Blue appears only where native or third-party authentication requires it. Default bright white forms, default blue tint, or cool slate backgrounds would break the warm editorial contrast.

# Typography

Use New York as the iOS-safe serif for the observed editorial voice and SF Pro Text for controls. Hero and greeting text use approximately 30–40 point semibold serif; conversational statements and prompts use 18–22 point regular serif with relaxed leading; utility buttons, settings, and captions use 13–15 point sans. Keep text centered on sparse entry screens and left-aligned in utility panels. Dynamic Type should preserve the serif/sans role separation, allow generous vertical growth, and avoid shrinking the central statement merely to retain empty space.

# Screen composition

Entry and home screens place a small identity or navigation control near the safe area, one centered greeting or prompt in the middle field, and a rounded composer near the bottom. The open charcoal field is itself the main composition. Chat screens keep content in a readable central column and anchor the input above the home indicator. Call mode emphasizes one central state with circular mute or close controls. Discover can use a top-rounded dark panel with sparse rows or small framed editorial images. Settings, help, and authentication shift to single-column rounded panels or rows while retaining the dark background and broad outer margins of roughly 20–24 points.

# Navigation appearance

Top-level movement is represented by floating circular menu, back, close, or mute controls with dark fill and pale glyphs. A side drawer or top-rounded panel uses a slightly lighter charcoal than the canvas. Selected controls use green sparingly; unselected controls remain off-white or muted gray. There is no requirement for a standard bottom tab bar. Native authentication and permission sheets may enter above the dark app surface without being visually re-created.

# Components

The composer is a wide dark rounded field with restrained border or tonal separation and circular green microphone/send action. Primary voice and send actions are green circles with high-contrast dark or pale glyphs. Secondary actions are charcoal pills or circles with off-white labels. Settings rows use simple text, a trailing chevron, and subtle divider inside a rounded dark panel. Authentication actions use clearly separated full-width pills and may preserve provider identity. Framed content images are small and editorial rather than full-bleed. Pressed states deepen the surface or reduce luminance; disabled actions mute toward gray without losing their outline.

# Imagery and icons

Imagery is selective, not continuous: small framed editorial photographs or decorative spot graphics punctuate onboarding, discovery, and help. They should remain subordinate to the dark field and serif message. The evidence does not define a complete, repeatable illustration grammar, so isolated organic marks and help graphics must not be extrapolated into a new character system. Icons are minimal, rounded, and mostly pale on dark; green is reserved for identity and active voice/conversation controls. Avoid arbitrary symbol mixing or large decorative gradients.

# States

Observed states include onboarding, centered greeting, typed chat with keyboard, voice-call permission and call controls, discover panel, help content, settings rows, and native/social sign-in. The charcoal field, warm type, green action accent, restrained panels, and low information density remain stable. Keyboard presentation compresses the lower composition without replacing the dark app background. Permission and authentication transitions may use native iOS surfaces.

# iOS adaptation

Extend the charcoal background through both safe areas, while keeping floating controls and the composer clear of the status bar and home indicator. Use a scroll container for long conversation and settings content, and move the composer with the keyboard so the latest content remains visible. Maintain 44-point targets for circular menu, back, microphone, send, mute, and close controls. VoiceOver order should follow the active conversation content, composer, then its action controls. At large Dynamic Type, expand the central reading column vertically and allow panels to scroll rather than shrinking serif copy. Preserve the dark appearance intentionally; if a light appearance is ever added, it requires a designed palette rather than automatic inversion.

# Anti-generic checklist

- Do not convert the experience into a white chat screen with colored message bubbles.
- Do not replace the editorial serif hierarchy with one system-sans scale.
- Do not add a standard persistent `TabView` where the reference uses floating controls and panels.
- Do not fill the intentional negative space with explanatory copy, cards, or decorative objects.
- Do not tint all controls default iOS blue; green is the app-owned action and identity accent.
- Do not replace the observed small editorial imagery with emoji, arbitrary SF Symbols, or programmatic illustrations.
- Do not give composer, drawer, settings rows, and modal panels one uniform radius or elevation.

</design-context>
