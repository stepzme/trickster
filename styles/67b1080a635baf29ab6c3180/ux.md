# Overview

memo moves from a conversational setup into repeated learning sessions built around short media, vocabulary collections, and exercises. Users can switch content modes, save or react to material, enter a themed collection, complete a short sequence, and return to their previous browsing context. Subscription and feedback requests are separate tasks that can be completed or dismissed.

# Navigation

Three persistent destinations provide access to the media feed, collection discovery, and the user's account area. The feed can switch between clips and memes without leaving the destination. Collections and account-related pages open as drill-down destinations and return to the originating context.

A lesson is a focused task with progress and an explicit exit. Subscription selection and feedback are also focused tasks and can be closed without stepping through unrelated screens. System permission prompts hand control to iOS and then return to the pending setup step.

# Core Flows

## Complete first-time setup

1. The app introduces the mascot and explains the learning premise through a short conversation.
2. The user chooses a language and answers the requested setup questions.
3. If iOS requests tracking permission, the user makes the system choice and returns to setup.
4. The app completes setup and opens the learning experience with the selected preference retained.

## Learn from media

1. The user opens the feed and chooses clips or memes.
2. The user watches or reads the current item and can reveal captions, control audio or speed, react, or share.
3. When transcript or translation choices are available, the user selects the line that matches the content.
4. The user advances to another item or leaves the feed with the current context preserved.

## Explore and start a collection

1. The user opens discovery and chooses a topic or vocabulary collection.
2. The app opens the collection and presents its learning items.
3. The user can inspect an item, play audio, save a word, or begin the associated exercise sequence.
4. Exiting returns to the collection or discovery context rather than restarting the app.

## Complete an exercise sequence

1. The user starts a lesson and sees progress for the current sequence.
2. The app asks the user to listen, translate, or match vocabulary.
3. The user submits a choice and receives immediate correct or incorrect feedback tied to that choice.
4. The user continues to the next task until the sequence completes, or exits and returns to the previous learning context.

## Start or decline a subscription

1. The app explains the paid benefits and lets the user continue to plan selection or dismiss the offer.
2. The user reviews available plans, billing period, renewal terms, and any trial or discount.
3. The user starts the selected purchase through the platform purchase flow or cancels without changing access.
4. The app returns to the prior context and reflects the resulting entitlement state.

## Send product feedback

1. The user opens the feedback invitation.
2. The user chooses a direct contact option or opens the support conversation.
3. The user sends a message or leaves without sending.
4. Returning closes the focused task and restores the prior app context.

# Interaction Patterns

The product advances one decision at a time. Setup uses short prompts followed by concrete choices. Lessons keep progress visible and evaluate answers immediately. Media controls affect the current item without navigating away, while collections and account details use drill-down navigation.

Feedback stays local: typing indicates an incoming setup message, playback state belongs to the current media item, selection and correctness remain attached to the submitted answer, and progress updates after continuation. An unavailable audio path offers a way to continue. Closing an optional offer, lesson, or feedback task does not commit unfinished work. System permission and purchase UI remain system-owned and return a clear result to the app.
