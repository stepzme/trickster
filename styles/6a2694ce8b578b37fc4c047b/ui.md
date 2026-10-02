<design-context>
---
version: 1
platform: iOS
name: Yandex-Practicum-design-analysis
description: "A quiet learning workspace built from white and near-white surfaces, strong black editorial hierarchy, charcoal commitment actions, thin gray structure, text-heavy lessons, and isolated tactile course emblems."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F5F5F5"
  accent-primary: "#242426"
  accent-secondary: "#3A9CD6"
  text-primary: "#171719"
  text-secondary: "#6F7074"
  divider: "#DEDFE1"
  destructive: "#DE4848"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 750, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 35}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 650, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 23}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 450, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 30
  card-padding: 16
  control-gap: 10
rounded:
  control: 10
  card: 16
  sheet: 26
  pill: 999
components:
  primary-action: {fill: "#242426", textColor: "#FFFFFF", cornerRadius: 10, minHeight: 50}
  secondary-action: {fill: "#F5F5F5", textColor: "#171719", cornerRadius: 10, minHeight: 46}
  primary-card: {fill: "#FFFFFF", borderColor: "#DEDFE1", cornerRadius: 16, padding: 16}
  navigation: {fill: "#FFFFFF", selectedColor: "#171719", unselectedColor: "#8A8B8F"}
---

# Overview

Yandex Practicum is a restrained, text-first learning product. White and near-white surfaces, strong black headings, charcoal actions, and thin gray structure keep attention on the current course, next lesson, catalog, or exercise. Tactile 3D course emblems appear as isolated catalog/product identity assets, while lessons mix real screenshots, photography, and instructional drawings.

# Non-negotiable visual invariants

- White/near-white fills most of the viewport; color in permanent chrome is minimal.
- Large bold black headings establish a strong editorial reading order.
- Primary commitment actions are charcoal/black with white labels, not default blue.
- Course and lesson content uses long-form vertical composition with generous line spacing.
- Catalog/course cards may feature one large isolated 3D emblem aligned with concise text.
- Bottom navigation is a restrained white four-item bar with black selected state.
- Sticky bottom CTAs remain visually separate from scrollable course/detail content.

# Color and surfaces

White is the canvas and primary surface; near-white and soft gray group cards, fields, and inactive areas. Black/charcoal owns primary text and actions. Course emblems introduce controlled local colors without becoming global UI accents. Green marks correct/selected exercise states, while red marks errors and blue may appear in isolated links/welcome gradients. Large decorative color fields beyond sign-in/welcome would break the restrained learning shell.

# Typography

Use SF Pro when the source face is unavailable. Page/course titles are large and bold; lesson body text is comfortable and text-heavy; helper labels and progress metadata are smaller gray. Maintain obvious separation among title, lesson heading, body, caption, and action. At Dynamic Type sizes, preserve long-form reading, allow course cards and choice rows to grow, and keep the sticky action accessible without covering content.

# Screen composition

Sign-in may use a restrained blue gradient, then the app becomes predominantly white. Main learning screens stack the current-course/next-action region and supporting cards. Catalog uses vertical cards with concise text on the left and a large isolated 3D course emblem on the right. Course detail is a long scroll with chips/tabs, content blocks, and a sticky black CTA. Lessons are editorial one-column pages with close/overflow controls and embedded instructional media. Exercises use grouped answer choices and a bottom action. Support uses standard chat composition.

Visible archetypes include sign-in; empty and active learning home; catalog; course detail/purchase; long-form lesson; single-choice exercise; support chat; and account/profile.

# Navigation appearance

Bottom navigation is a clean white four-item bar with compact icons/labels and strong black selected state. Course detail uses simple top controls plus compact chips/tabs. Lesson screens use close and overflow buttons instead of a large navigation header. Bottom sheets are white with rounded top corners. Sticky CTAs sit on a white bottom surface above the home indicator. Navigation stays quiet and monochrome.

# Components

Primary actions are black rounded rectangles with white semibold labels. Course cards combine a bold title, concise supporting data, and a large isolated emblem. Chips and tabs are compact with black selected treatment. Progress uses thin neutral tracks. Checkout uses step dots, form rows, and bottom sheets. Exercise choices are broad white/gray rows with clear radio/selected state; correct selection may use green. Chat uses conventional message/composer geometry explicitly styled in the neutral palette. Disabled states preserve geometry and mute contrast.

# Imagery and icons

Catalog course emblems are authored 3D product assets, while graduate portraits, screenshots, lesson drawings, and chat content belong to separate content roles. The inspected screens do not establish one independent app-wide illustration system across these mixed media. Preserve the large emblem role in catalog cards and the authenticity of instructional media; do not invent a unifying illustration grammar. Icons are restrained black/gray utility symbols.

# States

Observed states include sign-in, no active course, active course, catalog/filter, course purchase, long-form lesson, answer selection with green selected state, keyboard-active support chat, and account/profile. White/black hierarchy remains constant; local course art or instructional media changes without recoloring the shell. Errors use local red and disabled actions use pale gray.

# iOS adaptation

Respect white safe areas and keep sticky CTAs/bottom navigation above the home indicator. Use vertical scroll containers for catalog/detail/lesson, keyboard-aware chat/forms, and avoid nested scroll conflicts. Maintain 44-point targets for tabs, chips, lesson controls, answer rows, and navigation. VoiceOver should read course/lesson title, progress/state, main content, and action in order; decorative course emblems may have concise identity labels. Dynamic Type expands text-heavy pages and rows. Compact widths keep one-column editorial flow and move card emblems below text if necessary.

# Anti-generic checklist

- Do not replace black commitment actions with default blue.
- Do not turn every lesson or catalog section into a shadowed card.
- Do not flatten title, lesson heading, body, caption, and action into similar sizes.
- Do not use an unstyled `TabView`, `Form`, `ProgressView`, or chat composer.
- Do not omit catalog emblems or instructional media where compositionally present.
- Do not claim mixed emblems, photography, screenshots, and lesson drawings as one illustration system.
- Do not add mood or motivational copy that duplicates the visible course context.

</design-context>
