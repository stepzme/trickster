# Overview

Wibes lets a person enter a content feed, move from a post to its author or linked product, act on content, and return without losing the surrounding feed context. Actions that require an account are intercepted at the moment of intent. Recovery and empty states keep the next action explicit.

# Navigation

- Four peer destinations remain available across the primary experience; Create starts the creation path rather than passive browsing.
- A horizontal rail above the feed opens short editorial or educational items and returns to the same primary context.
- Tapping an author opens a profile; tapping a post or editorial item opens focused content; tapping an attached product opens product detail or an external purchase destination.
- Focused content uses close or back to return to the originating feed, article, profile, or product context.
- The target product should preserve this distinction between primary destinations, focused content, and external handoff without copying Wibes' literal destination names.

# Core Flows

## Personalize the first feed

1. The user enters topic selection and can dismiss it or choose categories.
2. Each choice updates the selected state and the visible count; the save action remains unavailable until the stated requirement is met.
3. After the requirement is satisfied, the user saves and enters the feed.
4. The app may explain notification value and then hands permission to the iOS system prompt; either response continues to content.

## Browse content and open a linked item

1. The user advances through feed items or opens an item from the editorial rail.
2. The user can open the author, expand focused content, or select a product attached to that content.
3. A product selection opens product information and its purchase action; an external marketplace handoff leaves a clear route back to Wibes.
4. Closing or returning restores the previous browsing context.

## Engage when signed out

1. The user attempts a gated action such as following, commenting, creating, saving, or purchasing.
2. The app explains the capabilities unlocked by signing in and offers one sign-in action plus a way to leave the gate.
3. Empty comments show that no comments exist and keep sign-in as the available action instead of accepting input that cannot be submitted.
4. Canceling returns to the same content; choosing sign-in continues into authentication.

## Recover the feed after a connection failure

1. The app replaces unavailable content with a connection-error state.
2. The state explains the likely connectivity condition and offers a retry action.
3. Retry reloads the content in place; failure keeps the same state available rather than navigating elsewhere.

# Interaction Patterns

- Selection feedback is immediate: topic tiles, counts, and action availability update together.
- Feed actions stay attached to the current item; opening a detail does not redefine it as a primary destination.
- Authentication is contextual and dismissible. It does not silently discard the post, product, or creation intent that caused it.
- System permission prompts follow an app-owned explanation and return to the pending context regardless of the user's choice.
- Empty, disabled, loading, and connection-error states expose the next valid action and do not invent content.
- External purchase handoff is distinct from in-app navigation and should preserve a predictable return path.
