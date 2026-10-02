<design-context>
---
version: 1
platform: iOS
name: SberBank-Online-design-analysis
description: "A light financial interface built from pale gray and mint atmosphere, modular white cards, strong black numeric hierarchy, restrained green actions, compact transaction rows, and occasional promotional imagery."
colors:
  canvas: "#F1F4F2"
  surface-primary: "#FFFFFF"
  surface-secondary: "#ECEFEE"
  accent-primary: "#16A34A"
  accent-secondary: "#DFF4E6"
  text-primary: "#111315"
  text-secondary: "#707579"
  divider: "#E1E5E3"
  destructive: "#E34B4B"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "Sber green", text: "white semibold", shape: "rounded rectangle"}
  secondary-action: {fill: "light gray", text: "near-black semibold", shape: "rounded rectangle"}
  primary-card: {fill: "white", content: "balance, product identity, rows or controls", shape: "medium rounded"}
  navigation: {fill: "white or pale mint", selected: "green", accessory: "compact icon and label"}
---

# Overview

SberBank Online presents dense financial information as a pale, modular dashboard. White cards and transaction rows carry the work; black balances lead the hierarchy and green is a focused signal for action, selection, and positive value.

# Non-negotiable visual invariants

- Pale gray or mint atmosphere fills the background around white financial modules.
- Balances and major decisions are black, large, and visible before secondary services.
- Green is focused on action, selection, and positive value rather than used as general decoration.
- White cards group related finance content with compact internal rows.
- Service collections use a restrained grid or strip, while transaction history remains list-based.
- Bottom navigation is light and its selected state is unmistakably green.
- Forms preserve the same modular surface language and keep the decisive action near the bottom.

# Color and surfaces

Use a pale gray-green canvas and clean white primary surfaces, with slightly darker gray for nested tiles and inputs. Black carries balances and titles; medium gray carries account metadata and dates. Green is the primary action and selected-state accent, with pale green for soft emphasis. Orange and red stay semantic. Occasional dark confirmation surfaces may invert the palette, but default iOS blue would visibly break the reference.

# Typography

The system uses a neutral iOS sans with strong numeric hierarchy: large bold balances, bold section titles, medium product labels, and compact transaction metadata. Amount signs and status remain legible. Use SF Pro and allow long service labels to wrap; at larger Dynamic Type, expand cards and rows rather than compressing balances into the metadata scale.

# Screen composition

Dashboard screens are vertical feeds of full-width white modules with product strips, two-column service tiles, and compact lists. Wallet and product views lead with a balance or product card, followed by controls and history. Category and tariff screens use orderly grouped lists or grids. QR surfaces may replace most of the viewport with a dark camera region. Forms are focused single columns with a bottom action and safe-area clearance.

# Navigation appearance

Light bottom navigation uses compact icons and labels; the selected destination is green. Top bars are visually quiet, with black titles and small utility controls. Deep screens use standard-position back controls restyled to match the monochrome hierarchy. Sheets are white, generously rounded, and separated by a dim scrim. The reference does not prescribe routes or tab information architecture.

# Components

Primary actions are solid green rounded rectangles with white semibold labels. Secondary actions use light gray fill and dark labels. Financial cards have white fill, medium corners, 16-point padding, and little or no shadow. Transaction rows align identity, metadata, and amount in compact bands divided by pale hairlines. Service tiles pair short labels with a functional icon. Chips and accordions use pale gray tracks; selected states gain green text or pale green fill. Disabled actions reduce contrast while preserving size.

# Imagery and icons

The core system is information- and icon-led. Card art, promotional images, and occasional decorative objects are supporting assets, not a stable illustration language and should not be generalized into one. Keep functional symbols simple, consistently weighted, and aligned within tinted icon containers. QR and camera views remain visually functional rather than decorative.

# States

Observed states include sign-in, populated accounts, tariffs expanded or collapsed, selected categories, QR scanning, notifications, success, and disabled form controls. White modules, black hierarchy, pale canvas, and green action semantics remain stable across them.

# iOS adaptation

Use safe-area-aware vertical scroll views and pin only actions that must remain visible. Maintain two-column tiles only while labels fit; otherwise stack them. Give icons and rows 44-point hit regions, preserve logical VoiceOver order from balance to actions to history, and let Dynamic Type increase card height. Native permission and camera transitions remain native, while app-owned fields, sheets, checks, and progress controls inherit the palette.

# Anti-generic checklist

- No default blue tint.
- No single undifferentiated list replacing modular financial grouping.
- No oversized shadows or floating glass cards.
- No equal emphasis for balances, metadata, and service labels.
- No decorative green applied to every surface.
- No unstyled `Form`, `ProgressView`, or `TabView`.
- No invented illustration system from isolated promo assets.
</design-context>
