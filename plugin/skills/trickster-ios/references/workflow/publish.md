# Publish

## Goal

Create the final publication materials from the polished app and leave a complete, reviewable export set.

## Start gate

Designer verifies explicit Polish approval for the current app revision. Final materials must represent that revision and its real product behavior.

## Final materials

Designer:

- creates one original final app icon in the approved visual direction and integrates it into the app;
- verifies the installed icon on a current build rather than only in the asset catalog;
- prepares a store-screenshot storyboard from real polished screens;
- creates one final store-screenshot set without fabricating features or states;
- preserves editable sources and exports at the exact required dimensions;
- records source screens, app revision, output paths, and the user's actual approvals in `trickster/artifacts/<run-id>/publish.md` using `trickster/templates/publish.md`.

The user approves the app icon, screenshot storyboard, and final set. Per-frame approval is optional unless requested.

If icon integration or another publication change modifies the app bundle, rerun the affected Polish checks before final confirmation.

## Completion and cleanup

The master presents the complete publication materials with the polished app. After explicit user confirmation, remove only recorded temporary downloads, derived build output, and disposable test media. Preserve source code, approved design sources, Polish evidence, editable icon and screenshot sources, and final exports.
