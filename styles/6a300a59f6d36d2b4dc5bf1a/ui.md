<design-context>
---
version: 1
platform: iOS
name: Janymda-design-analysis
description: "A bright iOS telecom super-app combining white modular surfaces, yellow commercial actions, violet selected states, a raised central launcher, dense service grids, and friendly authored imagery."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F3F6"
  accent-primary: "#FFD429"
  accent-secondary: "#6548E8"
  text-primary: "#17171C"
  text-secondary: "#6A6B73"
  divider: "#E7E8EC"
  destructive: "#D94A50"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 18
  sheet: 28
  pill: 999
components:
  service-icon-grid: {}
  yellow-commercial-action: {}
  floating-violet-launcher: {}
  dark-account-card: {}
  promotional-media-rail: {}
---

# Overview

Janymda is a bright, dense super-app whose white and pale-gray foundation keeps a broad service catalog readable. Yellow marks decisive commercial actions, while violet and blue identify selections, tabs, and the elevated central launcher. Dark account and wallet cards create strong local contrast. Glossy service objects, authored login illustrations, product photography, and promotional media make imagery an essential part of the modular feed rather than optional decoration.

# Non-negotiable visual invariants

- White remains the dominant viewport field, with pale gray grouping surfaces rather than a continuous colored background.
- Yellow is reserved for major purchase, top-up, cart, or connect actions; violet/blue carries selection and navigation emphasis.
- The main bottom bar has five compact destinations and a visibly raised circular violet center launcher.
- Service discovery uses a dense, regular icon grid with friendly glossy objects and short centered labels.
- Account and wallet summaries may switch to broad black or charcoal cards with large white numeric values.
- Promotional modules and media rails use strong imagery but remain bounded by consistent gutters and rounded crops.
- Detail and settings screens simplify into flat lists or sparse forms while retaining the same yellow/violet hierarchy.
- Standalone login illustrations remain substantial authored raster imagery and must not be replaced by symbols.

# Color and surfaces

The canvas and primary surface are white. Pale cool gray groups inputs, list rows, catalog areas, and inactive controls. `accent-primary` is saturated Beeline yellow for decisive commercial actions and selected utility moments. `accent-secondary` is violet, often paired with blue in gradients for active navigation, segmented underlines, toggles, and the floating center launcher. Primary copy is near-black and secondary copy is gray. Red is limited to error, destructive, and unread-badge states; green communicates success or availability.

Black and charcoal create local account, telecom, or wallet cards with white text. Purple-blue gradients may appear in the center launcher and bounded promotional surfaces, but ordinary buttons and cards remain flat. Default iOS blue for every action, yellow applied to all navigation, or colorful backgrounds behind every module would destroy the observed separation of roles.

# Typography

Use SF Pro as the iOS-safe family. Onboarding and product-detail headings are large, bold, and often left aligned. Centered navigation titles are smaller and medium weight. Section headings are bold and left aligned; service labels are short, compact, and centered beneath imagery. Prices, balances, data allowances, and tariff values use oversized bold numerals. Supporting descriptions and legal text are gray and distinctly smaller.

Dynamic Type should let descriptions, plan details, and settings metadata wrap while preserving the visual gap between value, title, label, and caption. Dense service grids may reduce columns or grow vertically, but labels must not truncate into ambiguity. Use tabular figures for aligned prices and account metrics. Avoid mood copy and do not repeat visible product context in secondary text.

# Screen composition

Screens use roughly 16-point horizontal gutters and safe-area-aware vertical scrolling. Main feeds combine a custom header, dark or light account summary, horizontally scrolling promo/media modules, a regular service grid, and additional commercial cards above the bottom bar. Detail screens use a minimal centered navigation title, then one dominant product or tariff value and stacked sections. Forms are comparatively sparse, with pale fields and a bottom action. Bottom sheets occupy most of the width with a large rounded top and drag handle.

Observed archetypes:

- **Super-app home:** custom top header, broad account summary, promotional rail, dense service modules, and five-item bottom navigation.
- **Service catalog:** large white or pale sheet with regular icon grid, clear section grouping, and vertical scrolling.
- **Telecom account:** dark summary card with large balance or allowance values, compact quick actions, and supporting service rows.
- **Tariff or product detail:** strong heading/value, benefit sections, compact selectors, and a clear yellow commercial action.
- **Payment form:** pale rounded inputs, card-entry or numeric keyboard state, large quiet middle, and yellow bottom action.
- **Settings or messages:** segmented heading where needed, then flat rows, toggles, badges, or compact chat actions.
- **Shop feed:** product photography in rounded cards or horizontal rails with short price labels and yellow cart actions.

# Navigation appearance

The top-level bottom bar is white with five evenly spaced icon-label items; the center item rises as a circular violet or blue-violet launcher and carries more visual weight than adjacent tabs. Inactive items are gray, while active states become dark or violet. Inner screens use a simple left chevron, centered title, and occasional trailing action. Segmented views may use a thin violet underline. Bottom sheets use a dimmed scrim, white surface, drag handle, and large top corners. Navigation appearance should not be copied as product architecture.

# Components

- **Service icon grid:** regular multi-column layout, one glossy object or controlled mark per cell, short centered label, little surrounding chrome, and a minimum 44-point hit area.
- **Yellow commercial action:** saturated yellow rounded rectangle, dark semibold label, 50–54 point height, and full or near-full width; disabled state is visibly muted but retains geometry.
- **Floating violet launcher:** raised circular center control with violet/blue gradient, high-contrast grid mark, and expanded close state where observed.
- **Dark account card:** broad black or charcoal rounded surface, large white value, compact gray/white metadata, and tightly grouped actions.
- **Promotional media rail:** horizontally scrolling rounded banners or cards with controlled crop, strong image mass, concise text, and consistent inter-card spacing.
- **Input field:** pale gray rounded surface with dark value, gray placeholder or helper text, and minimal border.
- **Settings row:** flat white row with leading monochrome icon, dark label, gray value, trailing chevron or toggle, and light divider.
- **Product card:** rounded image crop, concise title and price, and a compact yellow cart/action control.

# Imagery and icons

Imagery carries substantial visual weight. Glossy 3D service objects sit inside catalog cells; product photos fill shop cards; phones and offer imagery dominate promotional banners; wallet/card graphics anchor financial modules. Functional settings and detail icons are smaller monochrome line symbols and should remain visually distinct from the richer service imagery.

Standalone authored illustrations appear in login and identity-entry contexts: simplified human figures or hands, soft rounded geometry, large colored circles, and generous white negative space. They occupy a significant portion of the upper or middle viewport and cannot be omitted or replaced with SF Symbols. New equivalents must use approved generated raster assets following `illustrations.md`.

# States

Login states include selection, phone input, and OTP boxes while retaining white space and authored imagery where present. Selected tabs, segmented settings views, violet/yellow toggles, and the center launcher preserve unmistakable active states. Account bottom sheets and catalog sheets retain the white rounded surface over a dim scrim. Payment progress keeps field geometry stable through input, keyboard, loading, and outcome states. Notification and chat sections use compact red badges or sent-message distinction without changing the base palette. Dark account/wallet modules retain their local inversion inside otherwise light screens.

# iOS adaptation

Use safe-area-aware vertical scrolling, horizontal rails with bounded card widths, and `safeAreaInset(edge: .bottom)` for the custom bottom bar and fixed commercial actions. The raised center launcher must clear the home indicator and adjacent 44-point targets. At compact widths, reduce service-grid columns before shrinking labels or imagery. Keep active fields visible above the keyboard and allow sheets to use native detents with custom observed surface styling.

VoiceOver should read each service image with its label as one element, announce prices and units together, and place the raised launcher in logical navigation order. Dynamic Type may increase row height and convert dense modules to fewer columns. The sampled base system is light-first with local dark cards; do not invent a global dark appearance or automatically invert photography, authored illustrations, banners, or glossy service objects.

# Anti-generic checklist

- Do not render the bottom bar as an unstyled `TabView` without the raised violet center launcher.
- Do not replace the service-object grid with arbitrary SF Symbols in identical white cards.
- Do not use default blue as the universal action color; preserve yellow commercial and violet selected roles.
- Do not turn every module into a shadowed card or every control into the same radius.
- Do not omit promotional imagery, product photography, or authored login art where they define the composition.
- Do not flatten dark account summaries into pale generic balance cards.
- Do not make title, price, service label, body, and legal copy nearly equal in size.
- Do not add decorative text that duplicates the visible service, value, state, or action.
</design-context>
