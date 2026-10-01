<design-context>
---
version: 1
platform: iOS
name: hh-job-design-analysis
description: "A dense white job-search interface with saturated blue actions, compact bordered content cards, pale blue and mint signals, strong black headings, and selective editorial illustration."
colors: {primary: "#087FF5", on-primary: "#FFFFFF", primary-soft: "#EEF7FF", brand-red: "#ED1C24", ink: "#15171A", ink-muted: "#70757C", ink-subtle: "#A4A9AF", canvas: "#FFFFFF", surface: "#F5F7F8", surface-blue: "#EDF8FF", surface-mint: "#EAFBF3", border: "#E3E6E8", selected: "#050505", success: "#35B984", warning: "#F5A623", overlay: "#16181A"}
typography:
  display: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 34, letterSpacing: -0.5}
  title: {fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 26, letterSpacing: -0.2}
  section: {fontFamily: SF Pro Text, fontSize: 18, fontWeight: 700, lineHeight: 23, letterSpacing: 0}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 20, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 19, letterSpacing: 0}
  metadata: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 16, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 13, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 500, lineHeight: 19, letterSpacing: 0}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, section: 32}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, sheet: 22, pill: 9999}
components:
  primary-action: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", minHeight: 48, padding: [12, 16]}
  vacancy-card: {backgroundColor: "{colors.canvas}", borderColor: "{colors.border}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12}
  filter-chip: {backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [8, 12]}
  status-panel: {backgroundColor: "{colors.surface-blue}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12}
  text-input: {backgroundColor: "{colors.canvas}", borderColor: "{colors.border}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  modal-sheet: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", rounded: "{rounded.sheet}", padding: 16}
  primary-navigation: {backgroundColor: "{colors.canvas}", selectedColor: "{colors.selected}", unselectedColor: "{colors.ink-subtle}", typography: "{typography.caption}"}
---

# Overview

The observed hh interface is a high-density marketplace designed for scanning vacancies, application status, messages, and resume performance. White is the dominant mass. Saturated blue is concentrated in actionable controls and links, while black selection, pale blue guidance, and mint activity signals structure dense information without turning every block into a colored card.

The transferable language is the hierarchy, density, surface treatment, and action emphasis. Search, vacancy, resume, employer, and application are source-specific examples, not required entities for an adapted product.

# Non-negotiable visual invariants

- White remains the dominant canvas across browsing, detail, profile, and messaging screens.
- Primary commitments use saturated blue fills; secondary actions are pale blue, outlined, or text-only.
- Repeated records use thin gray outlines and generous radii rather than visible drop shadows.
- Dense cards lead with a bold title, then compact metadata, status cues, and a local action.
- Selected segmented items use black fill with white text while unselected items use pale neutral fill.
- Pale mint marks fresh activity or positive availability; pale blue carries guidance and supporting actions.
- Persistent navigation is visually quiet, with a black selected item and gray unselected items.
- Illustration is reserved for empty, educational, or editorial contexts; core result lists stay text-led.

# Color and surfaces

White occupies almost every full-screen background and most cards. Neutral gray appears in search shells, metadata chips, disabled actions, skeletons, and low-priority containers. Borders are light and thin; elevation is communicated more often through outline, surface contrast, or a dimmed modal backdrop than through shadow.

Blue is the operational accent: primary buttons, links, focused input outlines, selected radio controls, and conversational bubbles. Black is not merely text; it also marks the active destination and selected response filters. Mint surfaces and green text indicate current interest, online presence, successful delivery, or positive status. Orange is local to ratings or attention signals. The red hh mark appears as brand identity or a small subscription accent and should not replace blue as the general action color.

# Typography

The interface uses a neutral iOS sans with strong Cyrillic support and a narrow hierarchy suited to information-heavy screens. Page and modal titles are bold; card titles and important values are semibold; most metadata is regular gray text. Salary and key numbers remain prominent without adopting a separate display style.

Use SF Pro as the implementation substitute. Typical observed relationships are a 22-point bold page title, 18-point section title, 16-point semibold record title, 14-point body, and 10–12-point metadata. Preserve wrapping for long roles and qualifications instead of truncating the meaning. Dynamic Type may increase card height and stack local actions, but must not collapse role, value, organization, status, and action into one undifferentiated text block.

# Screen composition

Primary browsing screens use roughly 12–16-point horizontal insets. A compact search or context row leads into horizontally scrolling utilities or filters, then a vertical feed of outlined records. Records are dense but internally ordered: live signal, title, key value, organization, location or conditions, tags, recency, then action. Empty states replace the feed with one central message, optional illustration, and a direct recovery action.

Detail screens keep the title and compact facts near the top, followed by activity signals, an organization summary, and long-form sections. The main action remains available near the lower safe area while the content scrolls. Profile and resume screens use larger grouped modules for identity, statistics, recommendations, and management links. Focused search, filtering, specialization, and application choices appear as sheets over a dimmed source context; sheets may expand to near full height.

Use whitespace to separate sections, not to make the interface sparse. The product accommodates many visible facts per viewport, but each group has one clear reading path. Skeleton screens preserve the same card silhouettes and density while data loads.

# Navigation appearance

The observed primary shell presents five compact destinations with line icons and short labels. The selected item becomes solid black; the others remain gray. This count and these destinations are not portable requirements—an adapted product should expose only its real top-level destinations while retaining the same restrained treatment and avoiding a dominant colored navigation bar.

Drill-down screens use a plain back chevron and a concise title. Search and selection tasks often use a rounded sheet with a grabber or close control. Application steps use a dimmed detail screen as context and stack focused sheets rather than replacing the underlying task with a visually unrelated page.

# Components

Vacancy-like records are white, rounded, thinly outlined containers. The title and key value carry the highest contrast. Small chips carry requirements or benefits, while live or positive signals use mint. A favorite control stays independent from the primary action. When adapted, preserve this hierarchy for comparable browsable records without copying employment-specific fields.

Primary actions are wide saturated-blue controls with white medium-weight labels. Secondary actions use pale blue fills, blue outlines, or blue text. Disabled actions use neutral gray. Selected filters and compact segments use black capsules; unselected items use pale gray capsules. Form inputs are either white outlined fields or pale filled fields depending on context, with blue focus.

Sheets use large upper radii, white fill, a centered title, and one focused decision: selecting an item, composing supporting text, confirming an action, or showing a result. Success and guidance panels remain local to the task and use mint or pale blue fills. Chat uses pale-blue outgoing message surfaces, compact time/read metadata, and a conventional attachment-and-input composer.

# Imagery and icons

Conventional actions—back, close, search, filter, favorite, share, disclosure, attachment, and overflow—use simple line icons and familiar iOS interaction semantics. Organization marks and avatars remain content, not navigation decoration.

Product imagery appears selectively. Empty messaging uses a flat people scene with a limited blue-red palette. Career content uses rectangular editorial illustrations or photography inside large cards. Small promotional accents may appear inside subscription or guidance modules. Preserve reserved image space and crop when that content role is present; do not insert illustration into dense result or message lists merely to decorate them.

# States

Observed states include first launch, tracking permission, registration choices, focused and disabled fields, loading buttons, skeleton results, empty responses, populated applications, empty and populated chats, selected and unselected filters, saved-search success, application composition, delivered-resume confirmation, post-application guidance, and resume statistics.

Loading preserves the target structure through skeleton cards or an in-control progress indicator. Selection changes the affected control locally. Success appears in a focused sheet or nearby status surface and offers a relevant next action. Empty states explain the absence and provide a way back into discovery. A completed application changes the detail action into status and follow-up actions rather than leaving the original commitment active.

# iOS adaptation

Use safe-area-aware scrolling and custom card containers when default `List` styling would add grouped backgrounds or separators not present in the reference. Sheets should support the system keyboard, interactive dismissal only when it cannot lose a consequential input, and restoration of the underlying scroll context. Keep conventional system permission UI native.

Interactive rows and compact icons need at least 44-point hit areas even when their visible glyphs are smaller. VoiceOver should announce a record as a coherent sequence—title, value, organization, status, then actions—and expose favorite or selection state. Dynamic Type should expand cards, chips, and sheet rows vertically. Preserve sticky primary actions without covering the last scrollable content, and keep keyboard-focused fields visible.

# Anti-generic checklist

- Do not convert every feed item into a shadowed card or apply one gray card style to every section.
- Do not spread brand red across actions; the observed operational action color is blue.
- Do not omit the live-interest, status, or metadata layer that makes dense records scannable.
- Do not copy five destinations when the adapted product has a different information architecture.
- Do not use illustration as filler inside result lists, application histories, or chat threads.
- Do not approve an illustrated empty or editorial state while its required image asset is absent.

</design-context>
