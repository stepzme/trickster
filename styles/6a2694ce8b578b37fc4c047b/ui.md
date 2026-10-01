<design-context>
---
version: 1
platform: iOS
name: Yandex-Practicum-design-analysis
description: "A quiet learning workspace built from white and near-white surfaces, strong black typography, charcoal actions, thin gray structure, and collectible 3D course emblems. The interface gives the current course and next lesson clear priority while catalog, support, and account tools remain restrained."

colors:
  primary: "#242426"
  on-primary: "#FFFFFF"
  primary-pressed: "#0F0F10"
  accent-blue: "#3A9CD6"
  accent-orange: "#FF6A3D"
  ink: "#171719"
  ink-muted: "#6F7074"
  ink-subtle: "#A6A7AB"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F5F5F5"
  surface-3: "#EDEDEE"
  hairline: "#DEDFE1"
  semantic-success: "#2D9C68"
  semantic-warning: "#E3A316"
  semantic-danger: "#DE4848"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: YS Text, fontSize: 36, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: YS Text, fontSize: 30, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.55 }
  display-md: { fontFamily: YS Text, fontSize: 25, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.35 }
  headline: { fontFamily: YS Text, fontSize: 21, fontWeight: 650, lineHeight: 1.2, letterSpacing: -0.2 }
  card-title: { fontFamily: YS Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 15, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11, fontWeight: 450, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0.1 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 20]}
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  course-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16 }
  search-input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [11, 14]}
  progress-bar: { backgroundColor: "{colors.surface-3}", textColor: "{colors.primary}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 0 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

Yandex Practicum is a restrained learning companion where monochrome structure and one tactile course emblem keep attention on progress and the next action.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A quiet learning workspace built from white and near-white surfaces, strong black typography, charcoal actions, thin gray structure, and collectible 3D course emblems.
- The dominant canvas token is #FFFFFF and the primary accent token is #242426.
- The recorded display style is 36 points while the body style is 14 points.
- Navigation uses a four-item bottom bar for Learning, Catalog, Support, and Account.
- The reviewed screens use this hierarchy: The interface gives the current course and next lesson clear priority while catalog, support, and account tools remain restrained.

# Color and surfaces

Use white, near-white, black, and soft gray for the shell. Let each course emblem supply a controlled accent.

### Brand & Accent

Use charcoal for primary actions and Practicum identity; use blue for completion checks and course-specific color only in bounded artwork.

### Surface

Use white pages, very pale section panels, and clean cards with faint separation rather than heavy outlines.

### Text

Use near-black for titles and lessons, medium gray for duration and description, and subtle gray for disabled or completed-secondary information.

### Semantic

Use blue or green checks for completed lessons, amber for deadlines, red for errors, and course colors only for identity.

# Typography

Typography is direct and instructional, with bold course titles and compact curriculum lists.

### Font Family

Use YS Text or a neutral grotesk with clear Cyrillic and long-form readability.

### Principles

Use sentence case, keep lesson names scannable, and pair progress numbers with visual progress rather than color alone.

### Note on Font Substitutes

Use SF Pro or Inter when YS Text is unavailable; preserve generous line-height in lesson content.

# Screen composition

Use one active-course hero, stacked assignment and news sections, filterable catalog lists, and focused curriculum overlays.

### Grid & Container

The phone layout is a single column. Course catalog cards align text left and a compact emblem right.

### Whitespace Philosophy

Give the current course and next action space; keep curriculum lists dense enough to communicate sequence and progress.

# Navigation appearance

Use a four-item bottom bar for Learning, Catalog, Support, and Account. Keep the active course within one tap of launch.

# Components

Native scrolling, keyboard, and messaging behavior are acceptable, but visible controls must inherit Practicum monochrome, radii, and typography.

### Buttons

Use charcoal rectangles for Continue and primary choices, pale gray secondary actions, and text links for low-priority navigation.

Use outlined discipline chips and compact dropdown filters in Catalog; selected states become darker or lightly filled.

### Cards & Containers

Course cards pair program facts with an emblem. Learning cards show progress, Continue, assignment status, and important updates.

### Inputs & Forms

Use white or pale fields with thin borders, compact search, and simple message composition in Support.

### Status & Build Page

Show course progress, completed lessons, assignment availability, archive count, online support, and payment schedule with explicit labels.

### Navigation

Use a four-item bottom bar for Learning, Catalog, Support, and Account. Keep the active course within one tap of launch.

# Imagery and icons

Use subtle card separation, modal overlays, and small artwork shadows. Avoid layered chrome around lesson content.

### Decorative Depth

Use tactile 3D course emblems and small benefit objects as the only pronounced depth; the learning shell remains flat.

# States

Show course progress, completed lessons, assignment availability, archive count, online support, and payment schedule with explicit labels.

# iOS adaptation

Use additional width for navigation and curriculum context rather than oversized cards.

Phones use one column and overlays; larger screens may place course navigation beside lesson content and show a denser catalog grid.

### Touch Targets

Continue, lesson, course, filter, search, support, account row, and bottom navigation targets require at least 44pt.

### Collapsing Strategy

Keep course title, progress, next lesson, Continue, and assignment status; collapse secondary news and long catalog metadata first.

### Image Behavior

Use contain for course emblems and benefit objects, stable square frames in the catalog, and no decorative cropping.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

Prioritize learning continuity and course clarity.

### Do

- Put the next lesson and Continue action first.
- Keep curriculum progress visible.
- Use course emblems consistently.
- Style native controls in the Practicum system.

### Don't

- Do not use default platform blue.
- Do not turn every course into a colorful theme.
- Do not hide completed state behind color alone.
- Do not decorate lesson content unnecessarily.

# Known gaps

Fifty-six available flow structures and representative screens across sign-in, empty and active learning, curriculum, Catalog, Support, and Account were sampled. Video-only transitions and full lesson content were not exhaustively reviewed.

</design-context>
