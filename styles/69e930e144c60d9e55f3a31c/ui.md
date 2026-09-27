<design-context>
---
version: alpha
name: Simbank-design-analysis
description: "A playful mobile bank built from pastel lime, peach, lilac, and sand gradients; black circular actions; oversized balance numerals; and white rounded content sheets. Emoji-rich language and small cartoon finance objects make serious tasks feel informal without changing the clear transaction structure."

colors:
  primary: "#0B0B0C"
  on-primary: "#FFFFFF"
  accent-lime: "#B8FF98"
  accent-peach: "#FFB6A8"
  accent-lilac: "#B9B5FF"
  accent-sand: "#F2DDB4"
  ink: "#111113"
  ink-muted: "#6F7075"
  ink-subtle: "#A2A3A8"
  canvas: "#FFFDFB"
  surface-1: "#FFFFFF"
  surface-2: "#F3F2F3"
  hairline: "#E6E3E5"
  semantic-success: "#24B867"
  semantic-warning: "#F0A92F"
  semantic-danger: "#E64C55"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 42px, fontWeight: 500, lineHeight: 1.0, letterSpacing: -1px }
  display-lg: { fontFamily: System Sans, fontSize: 34px, fontWeight: 600, lineHeight: 1.05, letterSpacing: -0.6px }
  display-md: { fontFamily: System Sans, fontSize: 27px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 22px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 12px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 18px, xl: 26px, xxl: 32px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px }
  action-circle: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 12px }
  finance-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  story-circle: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 3px }
  contact-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 10px 0 }
  input-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 62px }
---

## Overview

Simbank is a playful bank where changing pastel gradients frame a clear black-and-white transaction system. Large balance numerals, black circular shortcuts, white rounded sheets, emoji, and friendly illustrations make the product informal while preserving financial hierarchy.

**Key Characteristics:**
- Pastel gradient backdrop changes by product area.
- Black is the main action color.
- White sheets contain lists, transfers, payments, and savings.
- Stories use black circles with thin multicolor rings.
- Emoji and small cartoons add personality to finance copy.

## Colors

### Brand & Accent

- **Black** ({colors.primary}) carries decisive actions, cards, and shortcut circles.
- Lime, peach, lilac, and sand are contextual atmospheres rather than competing CTA colors.

### Surface

- **Canvas** ({colors.canvas}) is the neutral base beneath gradients.
- **Surface 1** ({colors.surface-1}) carries sheets and transaction content.
- **Surface 2** ({colors.surface-2}) supports fields and segmented controls.

### Text

- **Ink** ({colors.ink}) carries balances and titles.
- **Muted** ({colors.ink-muted}) carries metadata.
- **Subtle** ({colors.ink-subtle}) is for disabled and placeholder text.

### Semantic

Green marks incoming value and completion; amber and red remain warnings or failures. Contextual pastels must never substitute for semantic feedback.

## Typography

### Font Family

Use a neutral system sans. Oversized light-to-medium balance numerals contrast with bold screen titles and regular transaction copy.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| `{typography.display-xl}` | 42px | 500 | Balance |
| `{typography.display-lg}` | 34px | 600 | Amount or onboarding claim |
| `{typography.display-md}` | 27px | 700 | Screen title |
| `{typography.headline}` | 22px | 700 | Sheet heading |
| `{typography.card-title}` | 16px | 600 | Service or transaction title |
| `{typography.body}` | 14px | 400 | Default finance content |
| `{typography.caption}` | 10px | 400 | Date, fee, and navigation |

### Principles

- Keep balances large and calm.
- Use emoji as punctuation, not replacement for meaning.
- Keep amount and fee information explicit.
- Avoid decorative fonts inside financial tasks.

### Note on Font Substitutes

Use SF Pro or Inter with clear numerals. Preserve generous balance sizing and compact list copy.

## Layout

### Spacing System

Use a 4px base, 16px gutters, 10–12px row gaps, and 24px between balance, shortcuts, and the main sheet.

### Grid & Container

Home stacks balance, three circular shortcuts, card, and a large rounded sheet. Payments and transfers use one-column lists; savings may combine action circles with a sheet.

### Whitespace Philosophy

Keep the gradient header spacious and the white sheet dense. Large empty areas around balances are intentional.

## Elevation & Depth

Depth comes from gradient atmosphere and the sheet overlapping it. Shadows remain soft; black cards create strong planar contrast.

### Decorative Depth

Use tilted black cards, multicolor story rings, and small cartoons. Avoid glass effects or multiple shadow layers.

## Shapes

### Border Radius Scale

- Main sheets use 26px top corners.
- Inputs and controls use 12px corners.
- Shortcuts, avatars, and stories are circular.
- Primary buttons are full pills.

### Photography & Illustration Geometry

User-postcard imagery can fill the viewport. Product illustrations remain centered on white sheets with ample space and simple silhouettes.

## Components

### Buttons

Primary buttons and circular shortcuts are black with white labels or icons. Secondary controls use pale gray. Native controls must inherit black actions and the package geometry.

### Pricing Tabs

Savings rules and analytics use compact segmented controls. Selection is black with white text; inactive values remain pale gray.

### Cards & Containers

The payment card is black and minimal. White sheets group stories, checklists, transactions, services, or savings education under the balance.

### Inputs & Forms

Transfer search, phone, card, and goal fields use pale rounded inputs. Keep amount, source, commission, and confirmation in one linear sequence.

### Status & Build Page

Transfer detail exposes recipient, amount, note, receipt, split, repeat, and help. Success may expand into a full-screen personal postcard while retaining close and transaction context.

### Navigation

Use five bottom destinations for Home, Payments, Savings, Cashback, and More. Active state is black; contextual gradients continue behind the current section.

### Footer

There is no footer. Product screens end at the persistent navigation or a safe-area-aware black confirmation action.

## Do's and Don'ts

### Do

- Keep black as the action anchor.
- Use one pastel atmosphere per screen.
- Preserve the white overlapping sheet.
- Keep finance data explicit.
- Use emoji and cartoons sparingly.

### Don't

- Do not turn pastel colors into competing CTAs.
- Do not hide fees behind playful language.
- Do not over-round list rows inside sheets.
- Do not mix several gradients on one screen.
- Do not expose default blue controls.

## Responsive Behavior

### Breakpoints

Keep transaction flows single-column. Wider layouts may center the balance and sheet while preserving overlap.

### Touch Targets

Circular actions, story items, rows, segments, and bottom navigation require at least 44px targets.

### Collapsing Strategy

Allow story circles and analytics controls to scroll horizontally. Keep the confirmation button pinned in long transfer or savings setup flows.

### Image Behavior

Use `cover` for personal receipt imagery and `contain` for finance cartoons. Maintain text contrast over gradient backgrounds.

## Iteration Guide

Start with the contextual gradient, large balance, black shortcuts, white sheet, and bottom navigation. Add transfers, payments, savings, and analytics before playful receipt imagery.

## Known Gaps

The reviewed scenarios cover onboarding, home, cards, transfers, payments, savings, goals, cashback, and More. Tablet layouts, dark mode, accessibility scaling, and every failure state were not visible.
