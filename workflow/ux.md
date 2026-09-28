# Cross-cutting UX criteria

These rules apply across contract, implementation, and acceptance stages. Determine each rule's applicability to product scenarios. N/A requires a specific reason. Acceptance is performed on a working app, not a mockup.

| ID | Applies when | Verifiable expectation |
|---|---|---|
| UX-01 | All primary screens | The screen's purpose is clear from its content, and the required next action is available. Do not impose one CTA pattern on every screen type. |
| UX-02 | Navigation and modal views | The user can predictably go back or close the view; context and input are preserved where expected. |
| UX-03 | User actions | It is clear whether an action was accepted, is in progress, and how it completed. Repeated taps do not create accidental duplicates. |
| UX-04 | Data and loading | Content and empty-result states are provided; loading, error, and offline states are tested where behavior depends on the network. Do not add network states to a fully local product. |
| UX-05 | Forms | Labels and errors are understandable; the keyboard suits the data; input and required actions remain accessible while the keyboard is open. |
| UX-06 | Deletion and loss of work | The consequence is clear; an appropriate confirmation or undo is available. |
| UX-07 | System permissions | The request is connected to a user action; denial leaves a clear working path. |
| UX-08 | All interactive screens | Controls are tappable and unobstructed; safe areas and supported screen sizes are respected. |
| UX-09 | Text and controls | System text enlargement preserves access to functionality; VoiceOver has meaningful labels and a logical order; meaning is not communicated by color alone. |
| UX-10 | Content | Long strings, real names, units, images, and supported locales are tested; demo text does not conceal layout problems. |
| UX-11 | Animation | Motion helps explain a change and does not delay a required action; Reduce Motion is respected when significant animation is present. |
| UX-12 | State persistence | Primary data and promised input preservation are verified after backgrounding and restarting. |

Check specific accessibility parameters and platform constraints against the current [Apple HIG](https://developer.apple.com/design/human-interface-guidelines) for the selected platform. These rules are team criteria, not a claim of Apple certification.

`trickster/design/ui.md` defines the visual language, `trickster/design/ux.md` defines the character of navigation and interaction, and this document defines verifiable product behavior. Adapt patterns from the selected package to the agreed scope; they do not add features by themselves.
