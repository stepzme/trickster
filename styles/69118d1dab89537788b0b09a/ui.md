<design-context>
---
version: 1
platform: iOS
name: Google-Gemini-design-analysis
description: "A sparse white AI conversation interface with broad negative space, moderate open type, pale blue user surfaces, restrained blue-to-violet brand moments, unboxed reading columns, and a large rounded composer anchored above the bottom safe area."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#F8F9FA"
  surface-secondary: "#EEF3FC"
  accent-primary: "#4285F4"
  accent-secondary: "#7B61FF"
  text-primary: "#1F1F1F"
  text-secondary: "#5F6368"
  divider: "#E4E6E8"
  destructive: "#D93025"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 500, lineHeight: 34}
  title: {fontFamily: "SF Pro Display", fontSize: 25, fontWeight: 600, lineHeight: 31}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 600, lineHeight: 24}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 23}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 500, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 17}
spacing:
  screen-horizontal: 18
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 14
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.canvas}", cornerRadius: "{rounded.pill}", minHeight: 44}
  prompt-chip: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.control}", minHeight: 44}
  user-message: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.card}", padding: "{spacing.card-padding}"}
  composer: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", cornerRadius: 24, minHeight: 56}
  tool-popover: {backgroundColor: "{colors.canvas}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.control}", padding: 12}
  navigation: {backgroundColor: "{colors.canvas}", selectedColor: "{colors.accent-primary}", unselectedColor: "{colors.text-secondary}"}
---

# Overview

Google Gemini uses an expansive white field with little persistent chrome. A blue-to-violet sparkle or gradient greeting provides identity, while prompts, generated answers, source-rich content, and media remain visually quiet. The strongest structural element is a wide rounded composer anchored near the bottom safe area; assistant responses read as an open document rather than a stack of message cards.

# Non-negotiable visual invariants

- White or very slightly off-white fills the full viewport and both safe areas.
- Initial screens preserve substantial negative space above a wide bottom composer.
- User prompts use a pale blue rounded surface, while assistant responses remain largely unboxed in a readable column.
- Blue is the primary interaction accent; blue-to-violet gradient appears only in concise Gemini brand moments.
- The composer combines several compact tools inside one large softly rounded neutral field.
- Response actions, sources, disclaimers, and status controls stay visually subordinate to the answer text.
- Generated images, maps, and user attachments remain content, not permanent interface decoration.

# Color and surfaces

The canvas is white. Pale neutral gray groups the composer, chips, menus, and secondary controls; pale blue distinguishes the user message without becoming a broad page field. Light gray hairlines separate list rows and embedded utility surfaces. Near-black carries prompts, responses, and titles, while medium gray supports model labels, sources, timestamps, and accuracy disclaimers. Google blue marks send, links, active tools, and selected states. Violet participates only in the sparkle or compact brand gradient. Green may confirm success and red is reserved for errors or destructive choices. A generic grouped gray background, saturated gradient panels, or default blue applied to every icon would break the sparse hierarchy.

# Typography

Use SF Pro as an iOS-safe substitute for the observed open geometric sans. Greeting and sheet titles are approximately 24–30 points in medium or semibold weight; navigation titles are around 15–17 points; body and answer text is around 14–16 points; captions and disclaimers are around 11–12 points. Scale and whitespace, rather than heavy weight, create hierarchy. Long answers use comfortable line height and left alignment. Headings inside responses remain modest. Dynamic Type should expand response text, allow chips and actions to wrap, and preserve the prompt-before-answer reading sequence.

# Screen composition

The initial archetype uses a minimal top bar, a large central field of negative space, a compact greeting or prompt suggestions, and the wide composer above the home indicator. Conversation archetypes use one vertical scroll column: a pale-blue user bubble, unboxed assistant content, optional structured sections or media, a compact response action row, sources, and disclaimer. Media archetypes insert a large generated image, map, or attachment card at content width with modest rounding. History and settings archetypes use full-height lists or rounded-top sheets with conventional row spacing. Attachment and account choices appear as popovers, native alerts, or bottom sheets. Embedded web content may use its own compact back, close, and share bar, but stays contained within the iOS frame.

# Navigation appearance

No persistent tab bar is visible. The top bar is minimal, with a small menu or back control, a short centered or left-aligned title, and a circular avatar/account affordance. Controls use thin dark or blue line icons without decorative wells unless a touch target needs a neutral circular background. History, account, and utility surfaces may rise as rounded-top sheets. Native alerts and share sheets use dimmed backdrops; compact popovers have white surfaces, light shadow, and modest corners. Snackbar confirmations use a small black rounded bar above the bottom region.

# Components

The composer is a broad pale-gray rounded rectangle with a multiline text region and compact controls for attachment, tool/model selection, microphone or live input, and send/stop. It grows vertically with text but remains visually anchored. Prompt suggestions are pale or lightly outlined rounded chips. User messages are compact pale-blue bubbles aligned within the reading column. Assistant responses use plain text and structured content directly on white. Response action rows use small outline symbols for playback, feedback, sharing, copying, or more. Sources and model selectors use compact pills or disclosure rows. Attachment menus use white popovers with simple icons and labels. Disabled send states lower contrast; active send becomes blue and generation can replace it with a stop state without shifting layout.

# Imagery and icons

Generated images, maps, uploaded media, photo-picker thumbnails, and embedded web content are visually distinct from interface chrome. Display them at or near the reading-column width, preserve their aspect ratio, and keep captions and actions outside the crop. When media is part of a sampled composition, it cannot be omitted while final content is pending. The Gemini sparkle and gradient word treatment are small brand marks, not a standalone illustration system. Functional icons are simple line symbols with consistent optical weight. Do not infer recurring characters or decorative empty-state art from generated output.

# States

The empty history state is text-only and preserves the same white list surface. User and assistant turns retain their distinct pale-blue versus unboxed treatment. Attached media appears inside the composer or prompt region before submission. Generation changes send to stop and may show subtle status copy without adding a large progress card. Response completion reveals sources, playback, feedback, and share actions. Permission and destructive confirmations use native alerts; attachment choices use a compact popover; successful utility actions may show a black snackbar. No custom error state was observed, so unobserved errors should preserve the same restrained surfaces and use red only at the affected message or action.

# iOS adaptation

Extend white through the safe areas and keep the composer above the home indicator. Use a vertical scroll container for conversations and keep the latest response visible when the keyboard appears. The composer should grow with text, move with the keyboard, and keep its tools reachable. Present photo selection, permissions, share sheets, and alerts natively while returning to the same white context. Maintain at least 44-point hit regions around visually small menu, attachment, model, voice, send, feedback, and account controls. VoiceOver order should follow user prompt, assistant response, media description, sources, response actions, disclaimer, then composer. At accessibility sizes, wrap tool rows or move secondary controls into the overflow rather than compressing answer text. A dark appearance was not established in the sampled reference and should not be invented from system defaults.

# Anti-generic checklist

- Do not wrap each assistant paragraph or response section in a separate card.
- Do not replace the large quiet white field with a grouped gray dashboard.
- Do not use a tab bar or persistent bottom navigation that was not observed.
- Do not turn the blue-to-violet brand gradient into a full-screen background.
- Do not decorate the interface with generated images or treat them as reusable UI art.
- Do not use an unstyled default `TextField`, arbitrary SF Symbols, or default blue across every control.
- Do not collapse all composer tools into equally prominent colored buttons.
- Do not omit sources, disclaimers, media weight, or response actions when they are compositionally present.

</design-context>
