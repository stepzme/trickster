# Research

## Goal

Describe the complete product the user asked for. This is product definition, not a development plan and not an MVP exercise.

## Owner and input

The Product Researcher uses the user's prompt, existing product material, existing code when present, and [the capability contract](ios-capabilities.md).

## Output

Create `trickster/artifacts/<run-id>/research.md` from `trickster/templates/research.md`. It must define:

- product purpose, audience, primary tasks, and complete scope;
- screens and product behavior at a product level;
- one contextual use of every canonical iOS capability in the fixed order;
- the real system request or authentication action for each capability;
- which post-access behavior may be mocked under the capability contract;
- local data and external-dependency boundaries;
- genuine contradictions or one material open question, if any.

Do not divide scope into MVP, later phases, or implementation tasks. Do not select references or describe visual styling.

## Approval

The master presents the artifact to the user. Apply corrections through the same Product Researcher. Planning and Design remain blocked until the user explicitly approves the current Research artifact.
