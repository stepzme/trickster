# Stage 10. Finalization

## Gate

Do not begin cleanup until all of these conditions are met:

1. the master issued the `APP ACCEPTED` decision according to `acceptance.md`;
2. the applicable ASO stage is complete and verified;
3. the master showed the final result to the user and received explicit confirmation that it is accepted.

Without confirmation, leave temporary data in place and report that finalization is awaiting a response. If the user requests changes, return them to the appropriate stage and repeat the affected checks and ASO work. Do not introduce a new app status for this.

## Cleanup

After user confirmation:

1. Delete `/tmp/trickster/<run-id>/`, including unselected-candidate documents, DerivedData, caches, and intermediate build output from the current run.
2. If temporary build artifacts were created inside the project, delete only the exact paths recorded by agents for the current run ID. Do not perform broad cleanup or delete unknown or user-owned files.
3. Ensure that the code and Xcode project, `trickster/design/`, `product.md`, `review.md`, evidence, final screenshots, app icon, and ASO exports are preserved.
4. Record the user's confirmation and exact deleted temporary paths in `review.md`.

Cleanup must not change the app, selected package, or acceptance evidence.
