---
name: trickster-ios
description: Compatibility alias for existing prompts that invoke the former Trickster iOS skill. New work should use trixter-ios.
---

# Trixter iOS compatibility alias

This skill name is retained only so existing `$trickster-ios` prompts keep working after the Trixter 2.0 rename.

Follow the canonical instructions in the sibling `trixter-ios/SKILL.md`. Resolve bootstrap and doctor commands through this alias's bundled `scripts/` wrappers; they run the canonical Trixter scripts and migrate a legacy `trickster/` project folder to `trixter/` without replacing user-owned `design/` or `artifacts/` files.

For new prompts, use `$trixter-ios`.
