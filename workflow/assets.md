# Stage 5. Product images and illustrations

## Goal

Determine whether the app needs images, illustrations, or custom graphics, and prepare exactly one agreed result for each real need.

The app icon and ASO screenshots are not part of this stage; separate documents govern them.

## Need assessment

Create an asset manifest from `trickster/templates/asset-manifest.md` even when no assets are required. For each screen, identify the graphic's purpose; whether typography, layout, or a system symbol can solve the need; whether user-supplied, licensed, or generated material is required; dimensions, aspect ratio, and states; accessibility, localization, and licensing.

Do not add decorative images without a product role. If external assets are unnecessary, record a justified `N/A`.

## Generation

When original graphics are required:

1. If the selected package in `trickster/design/` contains `illustrations.md`, follow it. If it does not, do not treat that as a prohibition: when there is a real product need, create one original illustration language that harmonizes with the colors, shapes, typography, and character of `ui.md`.
2. Prepare one prompt covering purpose, subject, composition, style, palette, background/transparency, framing, dimensions, and prohibited elements.
3. Use an available image-generation tool for raster illustrations. If none is available, do not present a placeholder or arbitrary graphic as a final asset.
4. Create one production candidate, not a series of alternative styles.
5. Visually inspect the source result before integration. Artifacts, anatomy/text defects, poor cropping, or style mismatches require refinement of the same solution.
6. Record the prompt, tool, time, source file, and terms of use.
7. Prepare required derivative sizes without changing the concept.
8. Verify the result on the real app screen, including themes and sizes when applicable.

Quality fixes remain within the selected solution. Do not present an unverified or unrendered asset as complete.

## Output

- `trickster/artifacts/<run-id>/asset-manifest.md`;
- source and derivative files in the project;
- screenshots showing actual in-app use;
- provenance and licenses.
