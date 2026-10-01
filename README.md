# Trickster

Trickster is a project-local workflow for building native iOS apps with AI roles. Its priority is simple: approve the product, prove the design in a running app, then extend that exact build in reviewable blocks.

## Install

Run from an existing Git or Xcode project:

```sh
npx @sgx22/trickster init
```

Trickster is not intended for global installation. Use `trickster doctor` to verify the local kit.

## Five stages

| Stage | Owner | Result |
|---|---|---|
| Research | Product Researcher | Complete product description with all eleven iOS capabilities, explicitly approved by the user |
| Planning | Product Researcher | Approved design MVP and ordered Full Scope blocks |
| Design | Designer | Approved references followed by a running, user-approved Simulator MVP |
| Dev | Implementation Owner | Full Scope implemented and approved one large block at a time |
| Publish | Acceptance Reviewer | Independent final review, final visuals, and controlled cleanup |

The master coordinates these four specialist roles and is the only participant that communicates with the user. Planning and Design reference research may run in parallel after Research approval; app-code ownership remains sequential.

## Design sources

Trickster's repository contains a catalog built from real iOS products. Designer shortlists up to three apps and recommends:

- one `ui.md` source for appearance;
- one `ux.md` source for navigation and interaction;
- an optional `illustrations.md` source for imagery.

The approved files are copied unchanged into the project. Trickster does not synthesize a generalized project `ui.md`, composition report, or provenance narrative. The actual running MVP is the design evidence. A build that compiles but visually falls back to generic cards, default controls, or missing imagery is not ready for design approval.

## Mandatory capabilities

Every app keeps this exact order:

1. Bluetooth
2. Downloading Photos
3. Adding Photos
4. Using the Camera
5. Face ID
6. Microphone Access
7. Speech Recognition Access
8. Contacts Access
9. Calendar Access
10. Location Access
11. CallKit

The first ten invoke real Apple system access or authentication. Bluetooth peripherals/data, microphone processing, and speech output may be mocked. Saving an image, selecting a device photo, using a camera capture, Face ID, Contacts, Calendar, and Location follow real-result requirements. CallKit is the sole exception because it has no permission prompt; it must remain honest about the absence of a calling service.

## Installed structure

```text
trickster/
├── AGENTS.md
├── HARNESS
├── adapters/
├── roles/
├── workflow/
├── templates/
├── design/
└── artifacts/
```

The npm package does not include the full style library. Designer reads the catalog and downloads documents only for the shortlist.

## Requirements

- macOS and Xcode;
- a suitable iOS Simulator runtime;
- physical iPhone access for final checks that Simulator cannot reproduce;
- Node.js 20 or later;
- an agent harness capable of loading the installed instructions and operating the project tools.

License: MIT.
