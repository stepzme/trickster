<design-context>
---
version: 1
platform: iOS
name: Megamarket-design-analysis
description: "A white high-density marketplace with purple purchase actions, green bonus badges, rounded product-photo cards, saturated campaign banners, and a distinctive dark translucent floating bottom dock whose selected destination sits in a white capsule."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F5F3F7"
  accent-primary: "#8B43D6"
  accent-secondary: "#34A86B"
  text-primary: "#202024"
  text-secondary: "#777981"
  divider: "#E5E6E9"
  destructive: "#D94A55"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 12
  control-gap: 8
rounded:
  control: 12
  card: 16
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "#8B43D6", foreground: "#FFFFFF", shape: "rounded-rectangle"}
  secondary-action: {fill: "#F5F3F7", foreground: "#8B43D6", shape: "pill-or-icon"}
  primary-card: {fill: "#FFFFFF", foreground: "#202024", shape: "rounded-product-card"}
  navigation: {fill: "dark-translucent", inactive: "#FFFFFF", selectedFill: "#FFFFFF"}
---

# Overview

Megamarket is a dense commerce interface in which white space is filled with product photography, prices, bonuses, category objects, and saturated campaign banners rather than large editorial text. Purple drives purchasing and selection, green distinguishes bonus value, and rounded containers keep the high information density approachable. Its strongest shell signature is a dark translucent floating dock near the bottom, where the selected item sits inside a light capsule and the cart may appear as a separate bubble.

# Non-negotiable visual invariants

- White is the default full-screen canvas; purple is the recurring purchase, selected, link, and primary-action color.
- Product content uses rounded image containers and a price-first hierarchy with compact rating, seller, delivery, and bonus metadata.
- Green bonus or loyalty badges remain visually distinct from purple interaction styling.
- The persistent bottom dock is dark, translucent or charcoal, fully rounded, and floated above the home indicator; selected content gains a white capsule.
- Promo and category imagery is highly saturated, rounded, and photographic or polished 3D/rendered rather than generic flat illustration.
- Search uses a wide rounded field with a visible scan affordance and anchors dense discovery surfaces near the top.
- Forms and purchase-focused screens become sparse white single columns with thin dividers and large purple bottom actions.
- Native payment, browser, keyboard, alert, and action-sheet surfaces remain visibly system-owned.

# Color and surfaces

White dominates catalog, product, cart, checkout, profile, and settings screens. Very pale violet-gray groups controls, cards, filters, and empty-state backgrounds. Brand purple is used for CTA fill, links, selected controls, price/action emphasis, and active indicators. Green is reserved for bonuses, loyalty value, payment or positive status. Bright yellow appears in high-visibility campaigns, while red remains destructive or error-related. Dark translucent gray forms the floating dock and creates a strong contrast with the white content field. Campaign imagery may introduce broad saturated color inside bounded banners, but those colors do not tint ordinary forms or product grids. Default blue action styling or beige ecommerce surfaces would break the reference.

# Typography

Typography is a bold rounded or friendly grotesk for display headings, paired with compact SF Pro-like product text. Price is the strongest repeated numeric element, set bold and larger than seller, rating, delivery, or bonus metadata. Section headings are bold but smaller than campaign copy; product titles use medium weight and wrap sparingly; secondary details are small gray text. Purple links and actions remain legible without competing with price. Dynamic Type should increase card and row height, allow titles and form labels to wrap, and preserve price-title-metadata order rather than shrinking all commerce text uniformly.

# Screen composition

Discovery archetypes begin with a top search field, optional horizontal chips, and a vertical sequence of wide rounded promo banners, category rails, or two-column product grids. Product cards allocate their upper majority to a contained or cropped packshot and their lower portion to price, title, rating, seller, delivery, bonus, and compact action. Category pages mix rounded campaign imagery with object tiles and dense scrolling content. Detail archetypes use a large image gallery, compact top overlay icons, stacked product information, and a sticky lower purchase region.

Cart, checkout, address, profile, and settings archetypes use a simpler white single column with thin dividers, list rows, toggles, and large purple actions anchored above the safe area or keyboard. Filters rise in full or partial sheets with chips, sliders, toggles, and a bottom CTA. Empty states center one small branded object or symbol with concise text. The dark floating dock remains over app-native main surfaces but yields to task-specific bottom actions or native external payment/browser chrome.

# Navigation appearance

The signature navigation is a fully rounded dark translucent bottom dock floating above the home indicator. Items use white or muted glyphs and compact labels; the selected destination appears on a white capsule with dark or purple content. A cart control may float as a separate circular bubble. Top bars use a simple back affordance and compact search, share, favorite, or overflow icons. Sheets have white fill, large upper corners, and optional grab handle. Web and payment screens may switch to Safari-like or provider-native bars without being masked by the marketplace shell.

# Components

The primary CTA is a saturated purple rounded rectangle with white semibold text; disabled states recede toward pale gray. Product cards use a white or pale surface, 16-point-class corners, a large image region, bold price, compact metadata stack, heart/share glyphs, and a small purchase control. Bonus badges are green pills or highlighted labels. Search is a wide pale rounded field with leading magnifier and trailing scan icon. Promo banners use high-saturation imagery and intentional typography inside rounded clipping. Filter chips are small pills with clear selected fill or outline. Checkout and settings rows use thin separators, trailing values or toggles, and minimal card framing.

# Imagery and icons

Product photography and campaign artwork are compositionally essential. Packshots should retain recognizable shape and packaging, use `aspectFit` where inspection matters, and use controlled `cover` only for lifestyle scenes. Campaign banners use rounded frames, high saturation, and deliberate focal crops. Category grids include soft polished 3D objects; isolated empty-state and payment art uses different treatments. The evidence does not establish one reusable authored illustration system across states, so do not extrapolate a universal 3D or mascot language from those assets. Generic placeholders cannot replace product photography during design evaluation.

# States

Observed states include splash, dense home feed, benefit and campaign landings, category grids and lists, barcode/search/filter surfaces, populated and empty favorites, product detail and image variants, reviews and questions, compare and share, cart addition and removal, checkout forms, address and recipient editing, points toggles, provider payment, profile and personal data, bonus history, notifications, active and cancelled orders, pending credit, saved cards, interests, and support. White canvas, purple action, green bonus, rounded products, compact metadata, and floating dock remain stable where app-native shell is present.

# iOS adaptation

Respect the top safe area for search and compact icons, and float the dock above the home indicator without covering sticky purchase actions or the last content row. Use vertical scrolling for feeds, grids, details, forms, and filters; horizontal rails may scroll independently. On compact widths, keep two product columns only while price and title remain legible, otherwise collapse to one wider card. Preserve at least 44-point actions around hearts, scan, chips, dock items, cart, toggles, and CTAs. VoiceOver order should announce product image description, price, title, rating/seller, bonus, then action; sale, bonus, selected, and destructive states cannot rely on color alone. Native keyboard, payment, web, and action-sheet transitions should remain system-owned.

# Anti-generic checklist

- Do not replace the floating dark dock with an unstyled `TabView` or a full-width white tab bar.
- Do not replace purple purchasing controls with default blue or merge green bonus meaning into purple.
- Do not turn product cards into uniform text-only white tiles or shrink photography to a decorative thumbnail.
- Do not crop packshots like lifestyle banners or use generic stock photography for products.
- Do not apply the same radius to cards, chips, dock, selected capsule, sheets, and icon buttons.
- Do not fill checkout and forms with nested promotional cards or campaign gradients.
- Do not infer a universal illustration style from isolated 3D category objects, mascot-like empty states, or payment art.
- Do not cover bottom CTAs or content with the floating dock on compact iPhones.

</design-context>
