# Stage 7. Product assets and visual integration

## Gate and planning boundary

Asset requirements are recorded during the product contract, but production images and illustrations are created only after implementation Hardening is complete. This keeps dimensions and integration points predictable without committing to visuals before the real interface stabilizes.

The app icon and store screenshots follow their own workflows.

## Production

For every required asset in `asset-manifest.md`:

1. Reconfirm its product role, screen, dimensions, states, accessibility, localization, licensing, and approved design revision.
2. Prefer typography, layout, or system symbols when they solve the need without custom imagery.
3. Follow final `illustrations.md` when present. Otherwise create one original language that harmonizes with final `ui.md` only when the product genuinely needs imagery.
4. Prepare one prompt covering purpose, subject, composition, palette, framing, dimensions, background or transparency, and prohibited elements.
5. Use the latest suitable image-generation model available in the active environment. Record exact model ID, date, prompt, parameters, source, and terms of use.
6. Produce one candidate per need, visually inspect it, and refine the same solution for artifacts, anatomy, text, crop, or style mismatch.
7. The master shows every substantial generated asset to the user before integration. Continue the same visual producer until the user approves it; silence is not approval.
8. Prepare derivative sizes without changing the approved concept.

If generation or image viewing is unavailable, keep the asset `UNVERIFIED`; do not ship a placeholder as final.

## Integration

The visual producer writes source and derivative artifacts only to the paths granted by the master. The implementation owner integrates approved product assets and the approved app icon, unless the master explicitly transfers an exact non-overlapping asset-catalog path.

After integration, build the app and verify every asset on the real screen, target sizes, themes, and locales where applicable. Record the final app revision and design revision.

## Output

- updated `trickster/artifacts/<run-id>/asset-manifest.md`;
- source and derivative files with provenance;
- user approval records for substantial generated assets;
- screenshots of actual in-app use;
- the release-candidate revision ready for independent acceptance.
