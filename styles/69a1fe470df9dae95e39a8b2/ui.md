<design-context>
---
version: 1
platform: iOS
name: Zopa-design-analysis
description: "A calm financial interface that contrasts a dark forest-green hero field with overlapping white account cards, mint action tiles, pale gray-lilac hubs, serif-led money and headings, and restrained product-specific campaign imagery."
colors:
  canvas: "#F3F1F6"
  surface-primary: "#FFFFFF"
  surface-secondary: "#E9ECEB"
  accent-primary: "#073B31"
  accent-secondary: "#B8F2DE"
  text-primary: "#14211E"
  text-secondary: "#6F7875"
  divider: "#DDE1DF"
  destructive: "#B83D46"
typography:
  hero: {fontFamily: "Georgia", fontSize: 40, fontWeight: 700, lineHeight: 44}
  title: {fontFamily: "Georgia", fontSize: 30, fontWeight: 700, lineHeight: 36}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 8
  card: 10
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "{colors.accent-primary}", text: "#FFFFFF", cornerRadius: 8, minHeight: 48}
  account-card: {fill: "{colors.surface-primary}", text: "{colors.text-primary}", cornerRadius: 10, padding: 16}
  action-tile: {fill: "{colors.accent-secondary}", text: "{colors.accent-primary}", cornerRadius: 10, minHeight: 48}
  navigation: {fill: "{colors.surface-primary}", selected: "{colors.accent-primary}", unselected: "{colors.text-secondary}", minHeight: 64}
---

# Overview

Zopa balances traditional financial authority with a lighter digital layer. A dark forest-green hero region dominates the home screen, while white account cards overlap into a pale gray-lilac scrolling canvas. Mint action containers and a mixed serif/sans hierarchy keep the product recognisable. Transactional forms are deliberately sparse; product hubs become denser stacks of balances, actions, activity, rates, and offers without turning into a generic card dashboard.

# Non-negotiable visual invariants

- The home composition begins as a substantial dark forest-green field with white account content crossing into the pale lower canvas.
- Major headings and financial amounts use a high-contrast serif, while controls, metadata, navigation, and transaction rows use a compact sans-serif.
- Mint is an active and supportive brand accent used for action containers, profile chips, selected emphasis, and light product surfaces; it is not a universal background.
- Financial hubs use modestly rounded white cards with restrained borders or shadows, never oversized soft cards with excessive empty space.
- Forms keep one large serif question or title above a short vertical field stack and a bottom-owned full-width action.
- Account detail screens place the balance or product representation high, followed by a compact row of circular actions and then activity or benefits.
- The persistent white bottom bar uses small icon-label items and a visibly raised mint central action with compact surrounding tabs.

# Color and surfaces

Dark forest green is the largest branded color mass on home, welcome, primary actions, and some product panels. Mint is the secondary accent for profile chips, icon containers, selected controls, and supportive action tiles. The principal content canvas is a very pale gray-lilac; white cards sit on it with light gray borders or minimal shadow and modest corner radii.

Text is dark green-black rather than pure black, with muted gray for explanatory copy and transaction metadata. Positive values use green; declined or invalid states use red and pale pink; disabled controls become flat pale gray. Peach, lavender, yellow, orange, blue, and purple appear only in individual promotional or score modules. Default iOS blue would disrupt the green/mint brand relationship and should not become the global link or control color.

# Typography

The key hierarchy is mixed-family. Large welcome questions, page headings, balances, and important money values use a sturdy high-contrast serif. Interface labels, paragraphs, fields, buttons, transaction rows, rates, and tab labels use a compact sans-serif. Georgia is an acceptable iOS-safe substitute for the observed serif character; SF Pro Text supports the functional layer.

Use strong scale contrast: roughly 30-40 points for serif hero/title roles, 20 points for section anchors, 15-16 points for controls and body, and 13 points for supporting metadata. Amounts and rates remain more prominent than campaign copy. Under Dynamic Type, allow descriptions and sublabels to wrap before reducing the prominence of a balance, amount, or primary question; transaction rows may grow vertically rather than compressing adjacent values.

# Screen composition

Home extends forest green through the top safe area. A greeting and compact profile treatment sit inside the upper color field, followed by white financial cards that visually bridge into the pale lower canvas. The scroll continues through product summaries, action modules, linked accounts, borrowing or savings tools, and promotional blocks. Side insets are approximately 16 points, with 12-point card gaps and 24-point section breaks; the tab bar remains fixed above the home indicator.

Financial hubs use a pale full-screen canvas and stacked near-full-width white cards. Summary or balance content leads, a compact action row follows, then transaction, rate, benefit, or eligibility modules. Account detail often centers the balance and product representation high in the viewport before three circular actions and a longer vertical content stack.

Forms use a quiet white or pale canvas: minimal top controls, optional slim progress, a large left-aligned serif question, short helper copy, labeled inputs, generous remaining space, and a wide sticky action above the bottom safe area. Loading and redirect screens reduce the composition to a centered spinner, one short message, and broad negative space. Sheets dim the current context and introduce a white rounded-top panel containing compact selectable rows.

# Navigation appearance

Top navigation is minimal and largely transparent to the screen canvas: small back control at left, centered title when needed, and a close control or restrained text action at right. Modal product and form screens commonly use a close icon rather than a visually heavy bar. The persistent bottom navigation is white with compact dark or gray outline icons and small labels; the selected item uses dark forest green. A mint rounded central action rises visually above the regular items and may carry a small status label. Sheets use a gray dim layer and a white panel with a pronounced rounded top edge.

# Components

Primary buttons are full-width dark forest-green rectangles, approximately 48 points high, with white semibold text and modest 8-point rounding. Disabled versions keep the same geometry in pale gray. Inputs are lightly bordered white rectangles with persistent labels; focus can introduce mint or dark-green emphasis. Invalid inputs use a red border and an adjacent pale-pink explanatory message.

Account and savings cards are white, compact, and modestly rounded. They align product identity and supporting information on the left with balance, rate, or state on the right. Transaction rows group by date and combine a small avatar or category pictogram, merchant or person, sublabel, and right-aligned amount; declined state remains visible in the same row.

Action clusters use three compact circular dark-green or mint icons with short sans-serif labels. Payment forms make the amount visually dominant, then stack source and destination selectors before the bottom review action. Selector sheets show a small product icon tile, name, balance or rate, and chevron. Score modules use restrained progress rings, numeric values, task cards, and small severity pills rather than decorative charts.

# Imagery and icons

Photography appears selectively in onboarding and product discovery, either as a clear circular portrait or a rounded rectangular lifestyle crop. Product campaign imagery uses varied object metaphors—cards, plants, savings objects, a rocket or device mockup—but these do not form one stable illustration grammar and should not be homogenized into an invented mascot system.

Functional icons are simple line or filled financial pictograms placed in mint squares, circles, or unframed navigation positions. Their stroke weight and dark-green/mint palette remain consistent even when the metaphor changes. Progress rings are minimal and functional. Where photography or campaign imagery occupies a sampled card or onboarding composition, keep its scale, crop, and color weight with a temporary image rather than replacing it with a SwiftUI shape or arbitrary SF Symbol.

# States

Populated account and savings states preserve the white-card hierarchy while updating balances, rates, activity, and status in place. Selected navigation and action controls use dark green or mint emphasis. Disabled actions become pale gray without changing size or placement. Invalid form input retains the standard field geometry but adds red outline and a pale-pink explanatory surface.

Observed ineligible content remains a normal card with concise state copy rather than a full decorative empty screen. Declined transactions use red status within the regular activity row. Loading and external-redirect states use a centered spinner and short message on a sparse field. Modal account selection keeps the underlying screen visible through a dim overlay. A third-party consent screen may look visually distinct; do not restyle system or provider-owned consent UI to imitate the product.

# iOS adaptation

Extend forest green or the current neutral canvas through the appropriate safe area. Place hub and detail content in vertical scroll containers, and reserve bottom inset for the persistent tab bar or sticky form action so content never disappears behind the home indicator. Forms should adjust for the keyboard while keeping the active field and next action reachable.

Maintain at least 44-point targets for navigation, action clusters, fields, selectors, transaction rows, and sheet choices. On compact widths, allow account metadata and transaction sublabels to wrap or stack while keeping amounts right-aligned and legible. Preserve semantic VoiceOver order from heading to financial state, actions, activity, and primary CTA. Support Dynamic Type by growing cards and rows vertically. The observed system is light; preserve its forest-green and pale-canvas relationship unless a separately designed dark appearance is required.

# Anti-generic checklist

- Do not replace the forest-green home field and overlapping account cards with a plain white navigation header and uniform list.
- Do not flatten serif headings and balances into the same system-sans size as control labels.
- Do not use default blue tint for links, focus, buttons, or selected navigation.
- Do not inflate every financial module into a large soft card with excessive padding and one universal radius.
- Do not implement forms as unstyled `Form` sections or allow the keyboard to cover the bottom action.
- Do not render the bottom navigation as a default `TabView`; preserve its mint central action and compact icon-label rhythm.
- Do not replace observed photography or product art with arbitrary SF Symbols, shape drawings, or decorative gradients.
- Do not let promotional color or imagery outrank balance, rate, transaction state, or the next financial action.

</design-context>
