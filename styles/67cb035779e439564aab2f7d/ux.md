# Overview

Setka moves from identity setup into recurring discovery, publishing, conversation, and relationship management. The observed interaction model keeps top-level destinations persistent, opens content and profile tasks as drill-downs, and preserves the current context when a user dismisses a prompt, abandons a draft, or returns from a detail screen.

# Navigation

The observed top-level destinations are Feed, Communities, Create, Chats, and Profile. They are peers; pushed content, search, channel, relationship, and settings pages return to the destination that opened them. The adapted product should use this peer-versus-drill-down model without copying destinations that do not exist in its own scope.

Feed categories switch the active content set without leaving Feed. Search can narrow results by all results, posts, people, networks, or communities. Profile branches into status, relationships, subscriptions, settings, editing, and sharing. Self-contained creation choices and confirmations can be dismissed back to the initiating context.

# Core Flows

## Join and personalize

1. The user reviews the product introduction, chooses to sign in, enters a phone number, and confirms the received code.
2. The user provides a name and photo, then adds current or previous work details.
3. The app proposes colleagues and asks the user to choose relevant channels or communities.
4. The user completes setup and enters a feed informed by the supplied identity and selections.

## Browse and respond to content

1. The user opens Feed and chooses a content category.
2. The user scans posts or questions and opens one for its complete text, media, and responses.
3. The user reacts, comments, shares, follows, or answers as available for that content type.
4. Returning closes the detail and restores the prior feed context.

## Create a post or question

1. The user invokes Create and chooses a post or a question.
2. The user enters content, can add media, and can format selected text where supported.
3. If the user exits before publishing, the app asks whether to preserve the draft or discard it.
4. The user publishes, sees the new item in context, and can continue through reactions or comments.

## Search across the network

1. The user opens Search, enters a query, and optionally selects a result category.
2. The app either reports that nothing matched or groups matching networks, people, communities, and posts.
3. The user opens a result and can return to the same query and category.

## Join or create a community channel

1. The user browses followed or recommended communities and can subscribe to one directly.
2. To create a channel, the user supplies its name, type, and privacy choice, then continues through the remaining setup choices.
3. The app confirms completion and lets the user either continue setup or inspect the created result.
4. When offered, the user can connect an external publishing source and return to the channel after the handoff.

## Continue a direct conversation

1. The user opens Chats and selects a conversation with unread state preserved.
2. The thread shows prior messages and keeps the current reply editable until sent.
3. The user can attach media or send text; leaving the thread returns to the conversation list.

## Manage profile and relationships

1. The user opens Profile and chooses status, relationship, subscription, edit, share, or settings tasks.
2. Status selection applies the chosen availability to the profile; relationship pages reveal mutual context and allow follow actions.
3. Settings and edit tasks apply only after their required confirmation; cancellation leaves the prior profile unchanged.
4. Sharing hands the profile to a system share destination and returns to the profile afterward.

# Interaction Patterns

Filtering and category changes update content in place. Selection is immediate when it only changes viewing context; identity, privacy, publishing, and destructive changes use an explicit continuation or confirmation step.

Feedback remains local: a loading indicator occupies the feed context, unread state stays attached to its conversation, subscription state updates on the affected person or community, and successful creation offers a next step without forcing it. Empty search and empty relationship states explain the absence and provide one relevant recovery action.

Draft content is protected on exit. Keyboard-active composers retain the text and attachment context. App-owned confirmations return to the pending task, while system-owned permissions, media selection, sharing, and rating return control to the same app context when dismissed or completed.
