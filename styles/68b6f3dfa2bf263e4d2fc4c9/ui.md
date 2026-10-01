<design-context>
---
version: 1
platform: iOS
name: Idoo-design-analysis
description: "An airy white city-discovery interface combining wide geometric display type, coral-red pill actions, irregular circular choice fields, very rounded sheets and photo cards, a minimal three-item tab bar, warm gradient fashion illustrations, and large place photography."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F3F8"
  accent-primary: "#FF3945"
  accent-secondary: "#F8C7D0"
  text-primary: "#101014"
  text-secondary: "#87878E"
  divider: "#E4E4E8"
  destructive: "#DD2632"
typography:
  hero: {fontFamily: "Unbounded", fontSize: 38, fontWeight: 400, lineHeight: 42}
  title: {fontFamily: "Unbounded", fontSize: 30, fontWeight: 400, lineHeight: 34}
  section: {fontFamily: "SF Pro Display", fontSize: 23, fontWeight: 700, lineHeight: 28}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "Unbounded", fontSize: 14, fontWeight: 400, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 22
  section-gap: 32
  card-padding: 20
  control-gap: 12
rounded:
  control: 16
  card: 28
  sheet: 36
  pill: 999
components:
  primary-action: {fill: "coral red", text: "white wide-display label", height: 54, shape: "full-width pill"}
  secondary-action: {fill: "white or black", text: "black or white", border: "thin gray or black", shape: "pill"}
  primary-card: {fill: "large place photography or pale editorial surface", radius: 28, padding: 20, shadow: "none"}
  navigation: {fill: "white", selected: "black or coral", inactive: "pale gray", items: 3}
---

# Overview

Idoo feels closer to an independent culture magazine than a conventional route utility. Most product surfaces are spacious white with thin black outlines, wide geometric headlines, irregular fields of circular choices, coral pill actions, and very rounded photo or sheet geometry. Real place photography takes over guide, place, and route content, while a separate fashion-illustration language gives onboarding and empty states a recognisable warm personality.

The composition frequently relies on one dominant element rather than card density: a large headline, a field of bubbles, a full map, a photo hero, or a long editorial article. Controls remain sparse and isolated, with generous margins and minimal shadow.

# Non-negotiable visual invariants

- White occupies most of the viewport, with generous 20–24-point side margins and thin gray or black outlines rather than heavy filled containers.
- Short identity, onboarding, guide, and state titles use a wide geometric display face with low-to-medium weight and deliberate multi-line breaks.
- Coral red is the singular primary action accent and appears in broad pill CTAs, selected emphasis, and occasional active navigation.
- Interest and preference choices form an irregular field of differently sized circular bubbles instead of an equal card grid.
- Guide, place, and route surfaces preserve large rounded photography or map areas; factual place imagery is never replaced by decorative drawings.
- Bottom navigation uses only three labeled items on white, with a small black or coral selected treatment and very pale inactive content.
- Bottom sheets and photo cards use unusually generous 28–36-point radii, while inputs and chips remain visibly smaller and thinner.
- Warm gradient fashion illustrations with cropped walking legs remain a substantial visual mass in onboarding and selected empty/city states.

# Color and surfaces

White is the dominant canvas and primary surface. Pale gray-lavender `#F2F3F8` appears in inactive controls, guide fields, selected option support, and sheets without fragmenting the layout. Thin dividers `#E4E4E8` and black outlines define circles and inputs. A dark inverse surface is used selectively for tags, alternate route decisions, or over-photo contrast.

Coral red around `#FF3945` is the primary action and emphasis color. Soft peach, pink, and lavender support selected bubbles and illustration backgrounds. Near-black `#101014` carries display and body text; cool gray `#87878E` carries placeholders, inactive navigation, progress, and secondary facts. Map greens and blues come from real map content, not the product palette. Generic iOS blue would break the reference's coral-led personality.

Large gradient fields belong mainly to authored illustration states. Ordinary task, guide, profile, and place surfaces remain white and flat with little or no shadow.

# Typography

Use Unbounded or a comparable wide geometric Cyrillic face for short hero titles, guide titles, selected identity labels, and some button labels. Use SF Pro Display/Text for section headings, explanatory copy, route facts, settings, and forms. Heroes sit around 34–38 points regular with compact but not cramped leading; editorial titles sit around 26–30 points. Body copy is 15–17 points regular; captions and route metadata are 11–13 points.

The display face is expressive because of its width and lowercase rhythm, not because of extreme weight. Keep titles short and allow intentional line breaks. Long guide and place descriptions switch to the neutral system sans. Do not make every utility label a display headline.

Dynamic Type should let editorial copy expand and card/sheet height grow. If a display title becomes too wide, add lines or reduce tracking before substituting a condensed font. Preserve contrast between wide identity type and calm system body copy.

# Screen composition

Most screens begin beneath the status safe area with minimal chrome: a plain back arrow, a large heading, or small top-right search/history/share/favorite actions. The middle is dominated by one composition—circular interest field, search result, map, route proposal, guide article, photo hero, profile block, or authored illustration. The bottom may hold the three-item tab bar, a broad coral CTA, a very rounded bottom sheet, the keyboard, a native action sheet, or the share sheet.

Onboarding uses a warm peach-to-pink/lilac gradient, large cropped fashion illustration, oversized display statement, and a broad lower CTA. Choice screens return to white and arrange different-size outlined or softly filled bubbles through the middle. Home-like screens combine a large heading with circular interests or route prompts and sparse top utilities. Route proposals may use full image or map content with bottom decisions and thin progress above.

Guide and place screens form a single editorial column. Guide catalog cards use generous rounded geometry and broad photography; detailed guides can become long text-led scrolls with occasional large images. Place detail begins with a large rounded or edge-filling photo hero and floating circular back/heart/share controls, followed by white content. Maps occupy most of the viewport with a very rounded white bottom action tray. Profile, interests, friends, saved, theme, support, and city selection remain sparse single columns or sheets.

Typical side margins are 20–24 points, with 12-point control gaps and 28–32-point section separation. Long editorial and map surfaces scroll or expand vertically; fixed CTAs and tab bars need explicit safe-area clearance.

# Navigation appearance

The bottom bar is a minimal white surface with three evenly spaced icon-and-label items. Selected content is black or coral depending on context; inactive content is pale gray. The bar is visually light, full width, and safe-area aware rather than a floating capsule.

Top controls are plain black arrow or line icons, often inside minimal or small circular hit regions. Place-detail back, heart, and share controls may float as white circles over photography. Bottom sheets use very large top corners over a dimmed context; native share and action sheets retain iOS appearance. Product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Primary actions are full-width coral pills around 54 points high with white wide-display or semibold labels. Secondary controls use white with thin black/gray outline or inverse black with white text, preserving pill geometry. Disabled states retain shape with pale fill and muted label.

Interest bubbles are different-sized circles with a thin outline, centered short label, and generous invisible hit area. Selected bubbles use soft peach/pink/lavender fill rather than a checkmark. Chips are smaller pills and may scroll horizontally. Search and form inputs are thin-outlined or pale rounded rectangles with little visual weight.

Guide and place cards use large photography, 28-point corners, minimal shadow, short tags, and concise display titles. Route cards combine photo or map visual, facts, progress, and broad decisions without generic white-card framing. Bottom sheets use 36-point top corners and 24-point internal padding. City/theme options use simple radio rows or horizontal preview cards. Map action trays and photo controls remain highly rounded.

# Imagery and icons

Real photography is central for places, guide covers, saved content, and route cards. Images use large rounded cover crops that preserve architecture, people, food, or cultural focal points. Place detail can devote the upper third or more of the viewport to photography. Maps remain factual map imagery with route lines, pins, and location markers.

Authored illustration is separate: cropped walking legs or fashion figures with thin black line work, black/red footwear or clothing accents, and warm peach-pink-lilac gradient fields. The figure may extend beyond the viewport and coexist with oversized display type. Small UI icons remain thin and simple. If final imagery is pending, preserve the full photo/illustration footprint and focal crop rather than replacing it with a symbol.

# States

Observed states include notification and location permission prompts, phone registration with keyboard, skipped registration, interest selection and reset confirmation, city selection, populated home, empty history, active search and empty result, and starting-point map sheet. Route states include card browsing, loading, map view, sharing, and city variants.

Guide and place states include catalog, long editorial detail, collapsed and scrolled place detail, favorite selection, external map handoff, and native sharing. Profile states include view, photo-edit action sheet, friends empty/share CTA, interests, saved places, theme previews, support/about, and city bottom sheet. White canvas, coral action, wide titles, rounded imagery, and sparse chrome remain stable across them.

# iOS adaptation

Use safe-area-aware vertical scroll containers for onboarding, guides, place details, profile, saved, and support. Maps and photo heroes may extend behind top controls while control hit regions remain inside safe bounds. Fixed coral CTAs, sheets, and the three-item tab bar require bottom safe-area insets. Keyboard-visible registration, search, editing, and support states must keep focused controls accessible.

Every bubble, chip, back/search/history/share/favorite icon, tab item, photo card, radio row, and map action needs at least a 44-point effective target. VoiceOver should follow visible hierarchy and announce selected bubble state independently of fill. Photo and map controls need explicit labels, and editorial images need concise content descriptions where informative.

Dynamic Type may increase bubble diameter, transform a bubble field into a looser vertical arrangement, and expand long guide copy. On compact widths, allow chips to scroll and titles to wrap before reducing photo scale or CTA size. The sampled product supports theme settings, so appearance adaptation should preserve coral emphasis, outline contrast, image focal points, and illustration palette rather than merely invert white.

# Anti-generic checklist

- Do not force the irregular circular choice field into equal rectangular cards or a rigid grid.
- Do not replace coral actions with default system blue or multiple competing saturated CTA colors.
- Do not use a generic sans for every title; the wide geometric display voice is structurally important.
- Do not shrink place photography, guide covers, map surfaces, or walking-leg illustration into decorative thumbnails.
- Do not turn guide and place content into a stack of identical white cards with heavy shadows.
- Do not ship an unstyled five-item `TabView`; the observed navigation is sparse, white, and three-item.
- Do not use one radius for pills, bubbles, photo cards, sheets, and floating circles.
- Do not replace real places with illustrations or redraw authored fashion art with SwiftUI shapes.

</design-context>
