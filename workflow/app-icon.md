# Stage 6. App icon

## Applicability

This stage is required for a new app. For changes to an existing app, it applies when the user requests a new icon or the change affects the brand. Otherwise, record `N/A` with a reason.

## Logoinspo research

Use [Logoinspo App Icons](https://logoinspo.com/icons) as the required reference source. The page provides an app-icon catalog with category, color, and style filters.

1. Use available page parsing or browser automation to find apps with a comparable purpose and category.
2. Retrieve and actually inspect 6–12 relevant icons.
3. Save the name and URL of each icon.
4. Record the metaphor, silhouette, color, contrast, detail, depth, and use of text.
5. Separate common category conventions from recognizable elements of a specific brand. Do not copy another app's icon.

If parsing or image viewing is unavailable, the stage remains `UNVERIFIED`; names without images do not constitute research.

## One concept

Formulate one concept based on the product's purpose, confirmed style package, interface, and Logoinspo research. Do not generate a grid of alternatives for the user.

Create one master asset and refine it until it passes verification. Improving readability or export quality does not constitute a new concept.

For a raster concept, use an available image-generation tool. The prompt must specify the metaphor, composition, `ui.md` palette, applicable `illustrations.md`, level of detail, square format, and absence of an embedded system mask. Visually inspect the master asset before adding it to the project.

## Verification

- alignment with the product's purpose and visual language;
- originality relative to references;
- legible silhouette and contrast at small sizes;
- no system mask or rounded corners embedded in the square source asset;
- correct installation in the asset catalog;
- appearance for the installed build in Simulator during the next acceptance stage;
- current technical requirements from official Apple documentation.

## Output

```text
trickster/artifacts/<run-id>/app-icon/
├── references.md
├── concept.md
└── verification.md
```

Production files live in the app's asset catalog. `concept.md` describes the one implemented concept and its creation provenance.
