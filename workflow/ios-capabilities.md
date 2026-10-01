# Mandatory iOS capabilities

## Purpose

Every Trickster product includes the same eleven capabilities. The important invariant is that the app invokes the real Apple system access request or authentication challenge from a product-relevant user action. Do not replace that system interaction with a custom dialog.

Use the smallest honest product behavior described below. A complete production subsystem is not required merely to justify a permission.

## Canonical list

Keep these IDs, names, and order exactly. Do not omit, merge, rename, reorder, replace, or mark an item not applicable.

| Order | Stable ID | Canonical capability |
|---|---|---|
| 1 | `bluetooth` | Bluetooth |
| 2 | `downloading-photos` | Downloading Photos |
| 3 | `adding-photos` | Adding Photos |
| 4 | `camera` | Using the Camera |
| 5 | `face-id` | Face ID |
| 6 | `microphone` | Microphone Access |
| 7 | `speech-recognition` | Speech Recognition Access |
| 8 | `contacts` | Contacts Access |
| 9 | `calendar` | Calendar Access |
| 10 | `location` | Location Access |
| 11 | `callkit` | CallKit |

## Shared rules

For each row Research defines a contextual feature, entry action, Apple framework, required purpose string or entitlement, success behavior, denial behavior, and verification environment.

- Ask only after the user starts the relevant action, never as an unexplained launch-time batch.
- Handle an already determined status without pretending that a prompt appeared again.
- Keep the rest of the product usable after denial where the product can reasonably do so.
- Verify prompts from a fresh install, reset permission state, or another controlled state because iOS normally shows them only once.
- A custom permission screen may explain value before the request, but it does not count as the request.
- Simulator limitations do not justify fake evidence. Record what could not be exercised and verify it later on an appropriate device.

## Required behavior

### 1. Bluetooth

Use Core Bluetooth to trigger the real Bluetooth access flow from a relevant action. Discovery results, peripherals, connection, and exchanged data may be mocked. Do not claim that a mock peripheral is physically connected.

### 2. Downloading Photos

Obtain a real image and actually save it to the user's photo library. Use the appropriate Photo Library authorization and purpose string. The saved image may come from a public download, generated product output, or bundled product content when that is honest for the feature; the file and save operation are real.

### 3. Adding Photos

Request the required Photo Library access, let the user select a real photo from the device, and actually use that selected image in the product flow. Do not replace the chosen asset with a fixture. If a picker alone would avoid broad access, Research must still preserve the pipeline's explicit system-access requirement and explain the chosen authorization path.

### 4. Using the Camera

Request real camera authorization, capture a real photo, and use the captured image in the product flow. The Simulator is not evidence for physical camera capture when it cannot supply the required input.

### 5. Face ID

Use Local Authentication for a real device-owner authentication challenge. Protect or confirm a real in-app action. Do not mock success, biometric state, or fallback behavior.

### 6. Microphone Access

Request real microphone access and start and stop real audio capture or measurement. Product-specific processing of the captured audio may be mocked. Clearly distinguish recorded input from a mocked analysis or response.

### 7. Speech Recognition Access

Request real Speech authorization. The transcript or interpreted command may be mocked; label the product result honestly and do not present it as verified recognition output. Live audio input also follows the separate Microphone capability.

### 8. Contacts Access

Request real Contacts access and read or select a real contact for use in the product flow. Do not substitute fixture contacts for the accepted result. Limit fields and access level to what the feature uses.

### 9. Calendar Access

Request real EventKit access and actually create, read, or update the event required by the product feature. Use the narrowest supported access level and do not replace the calendar operation with a local-only confirmation.

### 10. Location Access

Request real Core Location access and obtain a real location for the product flow. A simulated location may be used for development layout checks, but final capability verification must identify it as simulated and must not present it as device location evidence.

### 11. CallKit

CallKit has no user permission prompt. This is the sole exception to the access-request rule. Provide a product-relevant, honest CallKit-facing or call-preparation experience without claiming an established call, remote participant, signaling, media transport, or connected duration. No proprietary calling backend is required.

## Acceptance

The reviewer checks the real framework call, purpose strings and entitlements, the first-use system UI when the framework provides one, allowed and denied paths, and the required result above. Bluetooth peripheral behavior, microphone processing, and speech output may be mocked; the other required results may not. CallKit is checked against its explicit no-permission exception.

## Apple sources

- [User Privacy and Data Use](https://developer.apple.com/app-store/user-privacy-and-data-use/)
- [Core Bluetooth](https://developer.apple.com/documentation/corebluetooth)
- [PhotoKit](https://developer.apple.com/documentation/photokit)
- [AVFoundation capture authorization](https://developer.apple.com/documentation/avfoundation/requesting-authorization-to-capture-and-save-media)
- [Local Authentication](https://developer.apple.com/documentation/localauthentication)
- [Speech](https://developer.apple.com/documentation/speech)
- [Contacts](https://developer.apple.com/documentation/contacts)
- [EventKit](https://developer.apple.com/documentation/eventkit)
- [Core Location authorization](https://developer.apple.com/documentation/corelocation/requesting-authorization-to-use-location-services)
- [CallKit](https://developer.apple.com/documentation/callkit)
