<design-context>
---
version: 1
platform: iOS
name: Amazon-shopping-design-analysis
description: "A commerce-dense white interface anchored by aqua or deep-green search chrome, compact product facts, image-heavy discovery rails, persistent line-icon navigation, and yellow pill-shaped purchase actions."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#F3F3F3"
  surface-secondary: "#E7E7E7"
  accent-primary: "#FFD814"
  accent-secondary: "#007E59"
  text-primary: "#111111"
  text-secondary: "#565959"
  divider: "#D5D9D9"
  destructive: "#B12704"
typography:
  hero: {fontFamily: "Arial", fontSize: 36, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "Arial", fontSize: 26, fontWeight: 700, lineHeight: 32}
  section: {fontFamily: "Arial", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "Arial", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "Arial", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "Arial", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 12
  control-gap: 8
rounded:
  control: 12
  card: 10
  sheet: 24
  pill: 999
components:
  dominant-search-field: {fill: "white", geometry: "wide rounded field inside colored top chrome"}
  product-tile: {fill: "white", geometry: "dense image-and-facts card"}
  purchase-action: {fill: "yellow", geometry: "full-width or card-width pill"}
  campaign-card: {fill: "saturated photo collage", geometry: "wide promotional panel"}
  bottom-navigation: {fill: "white", geometry: "persistent line-icon bar"}
---

# Overview

Amazon Shopping is a dense retail interface whose visual stability comes from a dominant search field, colored top chrome, literal product imagery, and yellow purchase controls. White feeds hold crowded carousels, product facts, prices, ratings, badges, and delivery metadata. Promotional cards may be highly saturated, but the surrounding interface stays flat and utilitarian.

# Non-negotiable visual invariants

- A wide rounded search field is the dominant top control across browsing, product, cart, category, and account surfaces.
- Top chrome uses pale aqua or deep commerce green while the main content field remains white.
- Yellow pill-shaped controls identify the primary purchase action and do not become general navigation accents.
- Product tiles keep image, title, rating, price, delivery, stock, and badges visually close together.
- The bottom navigation uses simple line icons with restrained teal or aqua selection.
- Discovery sections use horizontal product rails and large seasonal photo or collage panels.
- White sheets and dialogs rise over dimmed commerce content with compact rows and chevrons.

# Color and surfaces

White is the dominant viewport mass. Pale gray bands separate major commerce groups, while card boundaries rely on spacing, hairlines, or slight tonal change rather than heavy shadows. The top region alternates between pale aqua and deep green, always framing the white search field. Yellow is reserved for the principal purchase control; green or teal marks navigation and context; blue may appear as a textual link. Near-black carries price and product facts, gray carries delivery or seller detail, and muted red signals urgency or error. Default iOS blue actions and generic grouped-gray forms would break this palette.

# Typography

Use Arial as an iOS-safe substitute for the observed pragmatic commerce sans. Section headings are medium-large and bold, but most information uses compact body and caption sizes. Prices receive stronger scale or weight; ratings, delivery, stock, seller, and badges remain smaller. Long product titles may wrap for several lines before truncation. Use tabular figures for prices, quantities, and totals. Dynamic Type increases card and row height while keeping price, unit, and purchase action legible before secondary metadata.

# Screen composition

Discovery archetype: color the top safe-area region aqua or green, place the wide search control directly below it, then stack full-width campaign panels, horizontal product rails, and compact category grids. Use narrow 8–12-point gutters to preserve high density.

Product archetype: retain compact search chrome, give the product image a large contained region in the upper half, then stack title, rating, price, delivery, stock, variants, and yellow actions in one vertical column. The image should show the full object or packaging.

Cart or account archetype: use white single-column rows with dense facts and compact secondary actions. Focused choices appear in white rounded sheets over dimmed content. Long screens scroll vertically and keep bottom navigation or purchase actions clear of the home indicator.

# Navigation appearance

The bottom bar is white and uses evenly spaced line icons with muted labels; the selected state gains teal or aqua emphasis without a large capsule. Top navigation is visually subordinate to the persistent colored search area. Back controls are compact and dark. Modal lists use broad white sheets with rounded upper corners. This section defines appearance only; product routes and information architecture come from the consuming product.

# Components

The search field is a wide white rounded rectangle with a dark search symbol, compact placeholder, and optional utility icons. Product tiles use contained photography, small multiline titles, star ratings, bold prices, compact delivery and availability text, and small badges. Yellow purchase buttons use dark semibold labels and pill geometry; pressed states deepen the yellow and disabled states desaturate. Campaign cards combine saturated photography or collage with large display text. White dialog rows use subtle dividers and right chevrons. Quantity and variant controls remain compact but must retain clear selection and 44-point hit areas.

# Imagery and icons

Literal product photography is compositionally essential and cannot be omitted while final assets are pending. Contain product objects and packaging so variant identity remains visible; use cover crops only for lifestyle or seasonal campaign panels. Category imagery consists of recognizable product groups rather than symbolic illustration. Promotional collage styles may vary by campaign. The sampled screens do not establish a stable independent authored illustration language, so do not extrapolate isolated empty-state drawings into a broader system.

# States

Selected navigation stays teal or aqua; purchase readiness remains yellow. Stock, scarcity, delivery, seller, returns, ratings, and cart quantity appear as explicit compact text or badges near the product. Search results preserve the same dense tiles and top search field. Cart and checkout continue the white surface system with totals and yellow actions. Dialogs and bottom sheets retain white rows over dimmed content. Empty states may use a small drawing, but should not displace the persistent commerce chrome.

# iOS adaptation

Extend colored top chrome and white content through their respective safe areas while keeping the search field below status-bar interference. Reserve the lower safe area for navigation or sticky purchase controls. Use vertical scrolling for detail and cart content and horizontal scrolling for rails; compact category grids may reduce columns when Dynamic Type prevents readable labels. Search, variants, quantities, actions, and tab items require at least 44-point targets. Use native keyboard and permission transitions, then return to the same commerce context. VoiceOver order follows search/context, section heading, product image, product facts, actions, then navigation. No unrelated dark appearance was observed.

# Anti-generic checklist

- Do not remove or visually demote the dominant search field.
- Do not replace yellow purchase actions with default iOS blue.
- Do not turn dense product evidence into sparse oversized cards.
- Do not crop product packaging or variant-identifying details.
- Do not use an unstyled `TabView` with generic blue selection.
- Do not merge all campaign imagery into one uniform illustration style.
- Do not hide ratings, price, delivery, stock, or seller facts behind extra navigation.
- Do not apply saturated campaign color to transactional sheets and forms.

</design-context>
