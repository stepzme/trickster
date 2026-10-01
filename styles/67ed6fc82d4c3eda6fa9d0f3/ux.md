# Overview

MAX centers communication around contacts, conversations, calls, invitations, identity sharing, media, and group administration. Root destinations remain stable while focused tasks open as drill-downs, sheets, or self-contained full-screen modes. Input validation, permission requests, delivery state, presence, and confirmation provide feedback without discarding the current communication context.

# Navigation

Four persistent destinations provide access to contacts, calls, chats, and settings. Chats can be filtered between all and new items. A conversation header provides access to audio call, overflow actions, and related identity information. Creation starts from the chats destination and continues into contact or group choices.

Back returns from profiles, invitations, group administration, search, and appearance settings to their originating list or conversation. Close exits forwarding, media, camera, and other self-contained tasks. Sheets handle bounded choices such as finding a person by number, choosing recipients, inviting an unavailable contact, or confirming a destructive action. System permissions and share interfaces return to the task that requested them.

# Core Flows

## Sign in and establish identity

1. The user starts sign-in, enters a phone number, and continues when the input becomes valid.
2. The user enters the received code and can request another code after the countdown.
3. The user provides a name and optionally a surname.
4. The user selects a generated avatar or chooses a personal photo, then enters the communication shell.

## Find or invite a person

1. The user opens contacts or the new-chat action and searches by name or phone number.
2. If a matching person exists, the user can start a conversation or call from the result.
3. If no match exists, the app offers an invitation and lets the user continue through the available share route.
4. Returning preserves the existing chats and contacts state.

## Share identity by QR code or link

1. The user opens an identity or service profile and chooses the QR or share action.
2. The app presents the identity code and related account context before sharing.
3. The user shares through the available system interface or chooses to scan another person's code.
4. Completion returns to the originating profile or chat list.

## Exchange messages and attachments

1. The user opens a conversation and reads the existing stream with presence, unread, time, and delivery feedback.
2. The user sends text, voice, photo, file, sticker, link, or location content from the composer or attachment actions.
3. The user can reply, react, forward, copy, save, or open supported content from the message context.
4. The conversation updates the affected item locally and remains at the current message position.

## Start and manage a call

1. The user starts an audio or video call from a contact or conversation.
2. The call stage presents participant state and controls for speaker, microphone, video, overflow, and ending the call.
3. The user can change call controls while the session continues and can collapse or end according to the current state.
4. When the call ends, the conversation or call history records the result and returns the user to the prior communication context.

## Create and administer a group chat

1. The user starts a new chat, chooses group members, and provides a group name and optional image.
2. The create action enables only when required information is complete.
3. After creation, the owner can open members, administrators, permissions, invitation links, and history controls.
4. Ownership transfer, history clearing, leaving, or other destructive changes require explicit confirmation before the group state changes.

## Change conversation appearance

1. The user opens appearance settings from the relevant settings route.
2. The user chooses a conversation background and system, light, or dark theme.
3. Selection updates immediately in the preview or current conversation context.
4. Back returns with the chosen appearance retained.

# Interaction Patterns

Primary actions enable only after required input is valid. Segments and recipient selections update immediately. Long-running or stateful communication exposes local feedback: code countdown, online presence, unread count, recording duration, playback position, delivery checks, call duration, and copied or selected confirmation. Failures such as a missing contact preserve the entered value and offer invitation or cancellation instead of resetting the task.

Back cancels unfinished drill-down work unless the user has already committed a change. Close exits self-contained media, forwarding, camera, or selection modes. Consequential group and account actions require confirmation. Native notification, media-library, share, and keyboard interfaces remain distinguishable from app-owned tasks and return to the pending context after the user responds.
