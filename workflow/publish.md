# Publish

## Goal

Independently verify the completed app, prepare final visual outputs, and leave a clean project.

## Acceptance review

The Acceptance Reviewer first verifies that the current revisions have explicit Research, Planning, Design, and Dev-block approvals. Missing approval blocks publication.

Then independently:

- build, install, and launch the final app;
- exercise the primary flows and each completed Full Scope block;
- compare the live screens with the approved UI source and approved MVP;
- verify navigation and interaction against the UX source;
- verify all eleven capability rows according to `ios-capabilities.md`;
- verify denial, unavailable, and retry behavior that the app claims to support;
- inspect launch behavior, accessibility, supported compact size, persistence promised by the product, and the installed app icon;
- record concrete failures and evidence in `trickster/artifacts/<run-id>/review.md`.

The reviewer does not fix code. Defects return as one concrete batch to the Implementation Owner, then the reviewer retests the changed build.

## Final visuals

If store screenshots were not possible during Design, the Designer returns after the relevant screens pass review. Screenshots must use real screens from the reviewed build. The user approves the storyboard and final set; per-frame approval is optional unless the user asks for it.

## Cleanup

After the user confirms the complete result, remove only recorded temporary downloads, derived build output, and disposable test media. Preserve source code, approved design source documents, review evidence, icon sources, and final store exports.
