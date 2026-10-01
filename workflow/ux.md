# Cross-cutting UX criteria

These rules apply across Research, Planning, Design, Dev, and Publish. Apply each rule only where the product needs it and explain omissions plainly. Final review is performed on a working app, not a mockup.

| ID | Applies when | Verifiable expectation |
|---|---|---|
| UX-01 | All primary screens | The screen's purpose is clear from its content, and the required next action is available. Do not impose one CTA pattern on every screen type. |
| UX-02 | Navigation and modal views | The user can predictably go back or close the view; context and input are preserved where expected. |
| UX-03 | User actions | It is clear whether an action was accepted, is in progress, and how it completed. Repeated taps do not create accidental duplicates. |
| UX-04 | Data and loading | Content and empty-result states are provided; local storage errors are recoverable; loading, error, and offline states are tested where a system or public resource depends on the network. Do not add server assumptions to the local primary path. |
| UX-05 | Forms | Labels and errors are understandable; the keyboard suits the data; input and required actions remain accessible while the keyboard is open. |
| UX-06 | Deletion and loss of work | The consequence is clear; an appropriate confirmation or undo is available. |
| UX-07 | Mandatory system access and capabilities | Each real system request follows a contextual user action and explains its immediate value. Denial, restriction, cancellation, and unavailable hardware or service leave a clear path. Post-access behavior follows the approved Research. |
| UX-08 | All interactive screens | Controls are tappable and unobstructed; safe areas and supported screen sizes are respected. |
| UX-09 | Text and controls | System text enlargement preserves access to functionality; VoiceOver has meaningful labels and a logical order; meaning is not communicated by color alone. |
| UX-10 | Content | Use only text required by the product. Do not create copy to fill space or establish mood, and do not restate context already communicated by the screen, navigation, data, state, or controls. Long strings, real names, units, images, and supported locales are tested; demo text does not conceal layout problems. |
| UX-11 | Animation | Motion helps explain a change and does not delay a required action; Reduce Motion is respected when significant animation is present. |
| UX-12 | State persistence | Data the product promises to retain survives backgrounding, force termination, and restarting. Broken file references fail safely. |

Check specific accessibility parameters and platform constraints against the current [Apple HIG](https://developer.apple.com/design/human-interface-guidelines) for the selected platform. These rules are team criteria, not a claim of Apple certification.

`trickster/design/ui.md` defines the approved visual language, `trickster/design/ux.md` defines navigation and interaction, and optional `trickster/design/illustrations.md` defines imagery. These are unchanged source documents, not a synthesized project design system. Visual wording in `ux.md` has no authority. Product behavior comes from the approved Research and Planning artifacts.

The cross-cutting `launch-screen.md` contract governs the static system launch screen, its transition to the first real frame, and any app-owned splash. Do not use a launch or splash screen to hide avoidable delay or replace onboarding.
