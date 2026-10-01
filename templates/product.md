# App contract — completed by the master

- Run ID and toolkit version:
- Original request:
- User, primary task, and expected outcome:
- Final scope status: DEFINED / PARTIAL / CONFLICTING:

## Core product scope

- Explicitly requested functionality:
- Constraints and exclusions:
- Decisions and assumptions:
- Deferred features:

## Mandatory iOS capabilities

Keep all eleven rows in this exact order. Do not rename, merge, remove, reorder, or mark a row `N/A`.

| Stable ID | Canonical capability | Mode: REAL / INTERFACE_ONLY | Product feature | Entry point and action | Useful result | System mechanism, purpose string, entitlement, and dependencies | Denied, restricted, cancelled, or unavailable behavior | Verification environment and method |
|---|---|---|---|---|---|---|---|---|
| `bluetooth` | Bluetooth | REAL | | | | | | |
| `downloading-photos` | Downloading Photos | REAL | | | | | | |
| `adding-photos` | Adding Photos | REAL | | | | | | |
| `camera` | Using the Camera | REAL | | | | | | |
| `face-id` | Face ID | REAL | | | | | | |
| `microphone` | Microphone Access | REAL | | | | | | |
| `speech-recognition` | Speech Recognition Access | REAL | | | | | | |
| `contacts` | Contacts Access | REAL | | | | | | |
| `calendar` | Calendar Access | REAL | | | | | | |
| `location` | Location Access | REAL | | | | | | |
| `callkit` | CallKit | INTERFACE_ONLY | | | | | | |

## Final reconciled scope

- Final required functionality after capability synthesis:
- Added screens, states, dependencies, and device requirements:
- Excluded external infrastructure:
- Master's unresolved material question:
- Reconciliation confirmation that the matrix and final scope agree:

## Local data architecture

- Local data status: PLANNED / LOCAL DATA READY / FAIL:
- Automatic local identity and reset or reinstall semantics:
- SwiftData model version and migration strategy:
- `UserDefaults` preferences only:

| Data | Production storage | Relationships and file references | Lifecycle and deletion | Migration | Failure behavior | Preview or ASO fixture |
|---|---|---|---|---|---|---|

- Release provider and mock-exclusion method:
- Offline primary-flow expectation:
- Intentional bundled sample content, or NONE:

## Launch and splash experience

- First real frame for a fresh install:
- First real or restored frame for a returning user:
- System mechanism: `UILaunchScreen` / `LaunchScreen.storyboard`:
- Static composition shared with the first frame:
- Light/dark, orientation, primary/compact, and declared iPad behavior:
- Transition and launch-data readiness:
- App-owned splash: NONE / REQUIRED, with product purpose and completion condition:
- Splash localization, accessibility, and Reduce Motion:
- Launch or splash assets and asset-manifest entries:
- Core cold-launch review evidence:

## Reference composition

- Shortlisted apps with appId, name, URL, category, and UI/UX/illustration fit:
- UI source:
- UX source:
- Illustration source or NONE:
- Design revision:
- `trickster/design/` path:
- Contributions and conflict resolutions:
- Platform adaptations and coherence rules:
- User decision: DESIGN COMPOSITION APPROVED / PENDING:
- Approval revision and time:

## Screens and states

| Screen | Phase: CORE / FULL / HARDENING | Related feature | User task | Data and actions | Required states |
|---|---|---|---|---|---|

## Required scenarios

| ID | Phase | Feature | Initial data | Actions | Expected result | Verification method |
|---|---|---|---|---|---|---|

## Core UI feedback gate

- Core review surface: main sections, primary flow, and representative states:
- Core app revision:
- Design revision:
- Simulator/device and reviewed screenshots:
- Feedback iterations:
- User decision: CORE UI APPROVED / PENDING:
- Approval time:

## Product assets and store package

- Product asset requirements and manifest status:
- Product asset production status: PLANNED / APPROVED / INTEGRATED / N/A:
- App icon: REQUIRED / N/A and reason:
- App-icon branch write boundary:
- App-icon status: PENDING / APP ICON APPROVED / INTEGRATED / N/A:
- Store screenshots: REQUIRED / N/A and reason:
- Store storyboard and per-frame approval requirements:
- ASO seed/import requirements for real SwiftData and file stores:

## Environment and resources

- Existing stack or justified choice for a new project:
- Xcode/SDK, deployment target, scheme, configuration:
- Primary and compact supported iPhone, iOS version, and UDID:
- Physical iPhone, iOS version, UDID, peripherals, and signing status:
- Language, theme, text size, and other supported configurations:
- Reproducible data, time, and time zone:
- System services used and proprietary backend services excluded:
- Images, icons, fonts, availability, and terms:
- Tools for Simulator interaction and image viewing:
- Delegation mode, app-code owner, Simulator owner, and physical-device owner:
- Run-state path and phase-scoped session policy:
- Simulator preview availability for Core, Full, and Hardening:

## Acceptance plan

| AC criterion | Applicability | Scenario/state | Required artifact |
|---|---|---|---|
