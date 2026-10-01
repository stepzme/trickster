# Overview

Alice is a chat-first AI assistant with text, reasoning, photo, file, image-generation, and photo-animation modes. The main experience stays deliberately sparse so the conversation and composer remain primary.

# Navigation

The primary navigation opens chat history and starts a new chat. The bottom composer exposes attachments, media, mode chips, and send. Profile and Pro live of the chat list rather than competing with the conversation.

# Core Flows

## Entry and chat

1. Authenticate through Yandex ID.
2. Land in an empty chat with one prompt field.
3. Send text, review a structured answer, then copy, rate, or open sources.

## Modes and attachments

1. The plus menu offers photo, file, image generation, photo animation, and reasoning. Active modes appear as removable chips in the composer so users can see what will affect the next request.

## Generated media

1. Image generation exposes style, aspect ratio, and variant count near results. Photo animation starts from a preview, confirms a prompt, and ends with share, download, or new-video actions.

## History and settings

1. Chat history is a simple chronological list with long-press deletion. Profile contains Pro status, sound, personalization, app information, and logout.

# Interaction Patterns

- Keep the composer visible throughout conversation.
- Put media parameters beside the generated result.
- Keep history actions contextual and reversible where possible.
- Separate Pro upsell from ordinary chat actions.

# System Access Timing

No system-access timing or denial-recovery path was documented in the reviewed source.
