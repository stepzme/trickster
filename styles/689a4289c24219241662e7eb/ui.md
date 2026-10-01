<design-context>
---
version: 1
platform: iOS
name: VK-Dating-design-analysis
description: "A photo-dominant dating interface that moves between dark immersive signup media, tall rounded profile cards, and bright white social surfaces, using VK-blue navigation, red-purple-blue reactions, compact system typography, and occasional saturated premium artwork."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F4F7"
  accent-primary: "#248BEF"
  accent-secondary: "#8F35D6"
  text-primary: "#111111"
  text-secondary: "#8A8F99"
  divider: "#E1E4E8"
  destructive: "#D8424B"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 19, fontWeight: 600, lineHeight: 24}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 16
  sheet: 20
  pill: 999
components:
  primary-action: {fill: "VK blue", text: "white semibold", height: 48, shape: "rounded rectangle or pill"}
  secondary-action: {fill: "pale gray", text: "near-black or blue", border: "none", shape: "rounded rectangle"}
  primary-card: {fill: "edge-to-edge photography with lower scrim", radius: 16, padding: 0, text: "white overlay"}
  navigation: {fill: "white", selected: "blue", inactive: "gray outline", badges: "red dot or gray count"}
---

# Overview

VK Dating is led by people and photography. Its most distinctive screen places one tall rounded profile photograph across most of the viewport, with identity and concise metadata readable over a lower scrim and large colored reaction controls attached to the decision area. Around that immersive archetype, the app switches to restrained white and pale-gray surfaces for forms, collections, chats, profile editing, settings, and safety content.

The visual system is energetic without making every screen decorative. VK blue supplies navigation and ordinary action; red, purple, and blue separate dating reactions; orange-yellow and saturated blue-to-pink artwork are reserved for premium or promotional attention. The dark photo-collage signup field and occasional heavy display campaign page are deliberate exceptions to the compact system hierarchy.

# Non-negotiable visual invariants

- Real portrait photography is the dominant visual mass on browsing and collection screens; the primary person card occupies most of the usable height rather than appearing as a small card in a generic feed.
- Profile identity is readable over a controlled lower image scrim, while faces remain unobstructed by text and controls.
- VK blue marks selected navigation, links, toggles, and ordinary primary actions; red, purple, and blue remain distinct reaction colors instead of collapsing into a single accent.
- Most non-media screens use white canvas and pale-gray grouped surfaces with compact 16-point gutters, 12–16-point card corners, and minimal shadow.
- The bottom navigation is a white five-item bar with blue selected content, gray outlined inactive content, and small red-dot or gray-count badges where present.
- Signup may use a dark charcoal full-screen collage, while onboarding uses a top progress indicator, a clear upper question, central options, and a fixed lower action.
- Chips, media cards, bottom sheets, and rounded buttons retain different radii and visual weights; the system is not a stack of identical capsules.
- Premium and safety illustrations remain secondary authored layers; they do not replace the app's central photographic identity.

# Color and surfaces

White `#FFFFFF` is the main canvas and surface. Pale gray `#F2F4F7` groups options, settings, messages, supporting cards, and disabled controls. Near-black `#111111` carries titles and body content; cool gray around `#8A8F99` carries captions, helper text, metadata, and inactive navigation. Dividers are very light and normally used inside otherwise flat groups.

VK blue around `#248BEF`–`#2D9CFF` is the default interactive accent. Reaction areas use a strong red around `#D8424B`, purple around `#8F35D6`, and deeper blue around `#087EEA`. Orange-yellow `#FFAD24` signals premium attention. Some competition or promotional surfaces introduce saturated cyan-blue and hot pink fields. Signup can invert the entire viewport onto dark charcoal around `#111014` with white text.

Do not apply reaction or promotional colors indiscriminately to ordinary controls. Default system blue is close in family but still needs the observed saturation, shape, selected treatment, and surrounding hierarchy rather than being accepted unstyled.

# Typography

The functional typography is SF-like and compact. Centered navigation titles sit around 17–20 points semibold. Person names and key profile headings are larger, about 22–24 points bold. Section titles use 18–19 points semibold; body copy is 14–16 points; metadata and helper text are 11–13 points in gray. Buttons and chips use concise medium or semibold labels.

Photography—not oversized prose—creates hierarchy on ordinary screens. Reserve the 36-point hero treatment for signup or observed campaign moments. Keep profile name, age, status, and short metadata visually separable through weight, spacing, and color rather than writing more copy. Dynamic Type should expand supporting white sections and bottom sheets while leaving the primary name and action hierarchy unmistakable.

# Screen composition

Signup uses a dark full-screen collage of portrait tiles across the upper and middle viewport, with short authentication controls anchored in the lower third. Onboarding screens place progress in the safe upper region, a question or title in the upper middle, selectable cards or fields through the center, and a fixed rounded action near the bottom safe area.

The main media archetype uses a compact top bar, one tall rounded profile card filling most of the middle, a readable lower scrim for identity, reaction controls close to the card bottom, and the persistent tab bar beneath. Profile detail becomes a vertical scroll: large portrait media first, then broad white information sections, chips, and supporting facts. Collection-like screens use occasional wide banners plus two-column portrait cards with short labels. Filters appear either as a white rounded bottom sheet over a dimmed media context or as a spacious full-page list of controls.

Likes and chats return to bright white structure. Chat lists may begin with a horizontal avatar strip, then compact list rows; a conversation leaves generous blank space and anchors a rounded composer above the keyboard or home indicator. Editing and settings screens are simple vertical forms or row groups. Promo and competition pages can use full-width saturated media and unusually heavy display type, but that density does not carry into ordinary settings or forms.

Standard horizontal insets are about 16 points, tightening to 8–12 around large media cards and grids. Card gaps are roughly 12 points and major section gaps about 24 points. Fixed lower actions, reaction zones, and navigation must reserve enough scroll inset to avoid covering content.

# Navigation appearance

The bottom bar is white with five evenly distributed icon-and-label items. Selected content is blue; inactive content is a gray outline and gray label. Small red-dot and compact gray numeric badges attach closely to the relevant icon without expanding the item. The bar respects the home-indicator safe area and does not float inside an oversized decorative capsule.

Top bars use centered semibold titles with compact leading back controls and trailing utility icons such as filter sliders, gear, shield, or close. Icons are simple and consistently weighted. Bottom sheets retain a clear rounded top edge and appear over a dimmed version of the underlying content. Product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

The characteristic primary card is tall portrait photography with 12–16-point corners, an image-cover crop, a lower gradient scrim, and white identity text. Reaction controls are large circular or pill-like buttons with strong red, purple, and blue fills and clear high-contrast symbols. They sit as a visually related set and should not be replaced by tiny toolbar icons.

Ordinary primary buttons are blue, about 48 points high, with white semibold text and a 10–12-point radius or pill geometry depending on context. Disabled actions keep the geometry but use pale gray fill and muted text. Secondary actions are flat pale-gray buttons or blue text actions. Interest and filter chips are capsules with clear selected fill and icon treatment where observed.

Bottom sheets use 20-point top corners, a compact title area, and stacked controls such as sliders, toggles, checkboxes, or actions. Collection cards use rounded portrait imagery with a short text overlay or adjacent label. Chats use circular avatars, restrained row dividers, badges, and a light rounded composer. Feedback may appear as a compact toast. Settings use blue leading icons and native-feeling toggles styled with the same blue accent.

# Imagery and icons

Real portrait photography is indispensable. Profile images use tall `cover` crops with face-aware positioning and sufficient headroom. Collection tiles use rounded portrait crops, while editorial and promotion cards may use wider photography or saturated graphic banners. Privacy blur visible in source captures is not a design treatment to reproduce for normal content.

Text and actions should occupy the darker or deliberately scrimmed lower image region; never cover a face merely to preserve a fixed overlay position. Small icons are consistent, high-contrast, and visually lighter than the photography. A separate authored layer of 3D premium/gift objects and soft safety illustrations appears in upsell, gift, and safety contexts; it should harmonize with blue, orange-yellow, pink, and purple accents without overtaking portrait media. If photography is not final, placeholders must preserve portrait crop, scale, and visual weight.

# States

Observed states include dark and light loading indicators, keyboard-open authentication and editing forms, selected interest chips, on/off toggles, enabled blue and disabled gray actions, empty likes, unread and badge states, saved-change toasts, and content under a dimmed sheet. Filter controls show both collapsed and expanded variants while retaining the same white/pale-gray hierarchy.

Attention and Superlike states use stronger premium color and authored imagery inside modal or sheet geometry. Complaint states use iOS-like action sheets and reason forms with restrained destructive emphasis. Safety articles show loading and populated reading states. Share presentation follows the native sheet appearance without changing the underlying app palette.

# iOS adaptation

Use safe-area-aware vertical containers for onboarding, media browsing, collections, chats, and forms. Tall photography should respond to available height while retaining a useful face-safe crop and leaving room for reactions and the tab bar. On compact iPhones, reduce nonessential spacing and secondary profile facts before shrinking the person card into a thumbnail. Long detail, safety, settings, and edit surfaces should scroll naturally.

Maintain at least 44-point hit regions around reactions, tabs, back and utility icons, chips, list rows, and composer actions. VoiceOver should announce portrait identity and status before reactions, then proceed to supporting details. Do not encode reaction meaning in color alone. Dynamic Type can move overlaid secondary metadata into the following white section when necessary; it must not cover faces or action symbols. Keyboard-visible forms and chats must keep focused controls and submit/composer areas visible.

Use native sheets, keyboards, sharing, and system permission transitions, but style app-owned surfaces to the documented radii and palette. The sampled product is predominantly light with an intentional dark signup/media treatment; do not apply automatic dark inversion to photography or promotional artwork.

# Anti-generic checklist

- Do not replace the tall profile-photo composition with a generic vertical stack of white cards.
- Do not make portrait photography a thumbnail or allow text and controls to cover faces.
- Do not collapse red, purple, and blue reaction actions into identical default buttons.
- Do not use an unstyled `TabView`; preserve blue selected items, gray outlined inactive items, and compact badges.
- Do not render onboarding or filters as default `Form` sections without the observed progress, option-card, sheet, and fixed-action hierarchy.
- Do not use one universal corner radius for photo cards, buttons, chips, and sheets.
- Do not replace photo-led collections with arbitrary SF Symbols or decorative illustrations.
- Do not spread premium gradients and display typography across ordinary chats, settings, and editing screens.

</design-context>
