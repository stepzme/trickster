# Stage 10. Finalization

## Gate

Do not begin cleanup until all applicable conditions are met:

1. the master issued `APP ACCEPTED` according to `acceptance.md`;
2. the storyboard, every store frame, and the complete set received their required approvals, or the stage is verifiably `N/A`;
3. the approved icon and product assets are preserved in the accepted build;
4. the master showed the complete result and received explicit final confirmation.

Without confirmation, leave temporary data in place and report that finalization is awaiting the user. Requested changes return to the owning stage and invalidate only dependent evidence and approvals.

## Cleanup

After confirmation:

1. Delete `/tmp/trickster/<run-id>/`, including candidate documents, DerivedData, caches, and intermediate build output.
2. Delete temporary project artifacts only from exact paths recorded for this run. Remove the ASO-seeded app data or dedicated Simulator container recorded for this run without resetting unrelated devices or user data. Never perform broad cleanup or remove unknown or user-owned files.
3. Preserve code, Xcode project, final `trickster/design/`, product contract, review, evidence, approved icon, approved product assets, ASO seed manifest, accepted-build screenshots, and store exports.
4. Record final confirmation and exact deleted paths in `review.md`.

Cleanup cannot change the accepted app, design composition, approvals, or evidence.
