# Parallel branch. App icon

## Applicability and timing

This branch is required for a new app. For an existing app, use it when the user requests a new icon or the approved design revision changes the brand; otherwise record `N/A` with a reason.

Start after `DESIGN COMPOSITION APPROVED`. Research and generation may run in parallel with Core and Full because the visual producer writes only to `trickster/artifacts/<run-id>/app-icon/` before approval. Integrate the applicable approved icon before final Hardening.

## Logoinspo research

Use [Logoinspo App Icons](https://logoinspo.com/icons) as the required source.

1. Find 6–12 icons with comparable purpose or category.
2. Actually inspect their images and record name and URL.
3. Analyze metaphor, silhouette, palette, contrast, detail, depth, and text.
4. Separate shared category conventions from recognizable brand elements. Do not copy another icon.

If images cannot be viewed, the branch remains `UNVERIFIED`; names or text metadata are insufficient.

## Generation model

Use the latest image-generation model available in the active environment at execution time. Do not hard-code a model family in the project instructions and do not silently fall back to an older model. Record the exact model ID, date, prompt, parameters, source image when applicable, and tool in provenance.

## One concept and feedback loop

Create one concept based on the product, approved design composition, and Logoinspo research. Do not generate a grid of unrelated alternatives.

1. Generate one square master without an embedded system mask.
2. Visually inspect the actual output for composition, artifacts, text, originality, small-size silhouette, and alignment with the current design revision.
3. The master shows the image to the user before Xcode integration.
4. If the user gives feedback, continue the same visual producer and refine or regenerate the same concept.
5. Repeat until the user explicitly states `APP ICON APPROVED`.

If the design revision changes, invalidate approval and re-evaluate the concept. Do not integrate an icon approved against an obsolete revision.

## Integration and verification

Before approval, write only to the icon artifact directory. After approval, the implementation owner integrates production files, or the master explicitly transfers the exact app-icon asset path.

Verify:

- originality and fit with the product and final design revision;
- legibility and contrast at small sizes;
- no baked-in mask or rounded corners;
- correct asset-catalog installation;
- appearance in the installed release-candidate build.

## Output

```text
trickster/artifacts/<run-id>/app-icon/
├── references.md
├── concept.md
├── provenance.md
├── feedback.md
└── verification.md
```

`feedback.md` records every shown revision, user response, and the final `APP ICON APPROVED` decision.
