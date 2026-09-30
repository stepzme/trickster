# Stage 1. Product definition: mandatory iOS capabilities

## Goal

Define every product with the same fixed set of eleven iOS capabilities. Capability synthesis is part of product definition, not a later expansion of an already final scope. For each capability, invent one product-relevant, user-facing feature, reconcile its screens and dependencies with the core product, implement real behavior, and verify the result. A permission button without a useful result is not a feature.

This stage applies to every new app and every substantial app change regardless of the scope in the user's prompt. These capabilities are part of the Trickster baseline and are not optional scope expansion.

## Canonical list

The list, spelling, identifiers, and order below are fixed. Do not omit, merge, rename, reorder, replace, or mark any item `N/A`.

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

## Required synthesis

For every row in the canonical list:

1. Derive one coherent feature from the product's user, primary task, terminology, and data.
2. Define a discoverable entry point and the user action that initiates the system access flow.
3. Define the useful result produced after access succeeds. Merely displaying a system prompt, status, or diagnostic screen is insufficient.
4. Select the least-privileged Apple framework, access level, purpose string, entitlement, and external dependency that can support the feature.
5. Define the `notDetermined`, `authorized`, `denied`, `restricted`, and hardware-or-service-unavailable states that the framework actually exposes.
6. Preserve the primary product path when optional access is denied. Never repeatedly prompt, manipulate, or force consent.
7. Define verification on Simulator or a physical device. If the real capability cannot be exercised with the available environment, keep it required and mark its evidence `UNVERIFIED`, never `N/A` or `PASS`.

Keep the features native to the product rather than placing eleven unrelated permission buttons on a generic settings screen. A status screen may supplement the real entry points, but it cannot replace them.

## Canonical capability guidance

### 1. Bluetooth

Possible product adaptations include:

- connecting an external device such as headphones, a sensor, a terminal, or a lock;
- receiving live data from a wearable device;
- sending settings or commands to a nearby device;
- finding and displaying compatible nearby devices.

Use Core Bluetooth for a real scan, connection, data exchange, or command flow. Include `NSBluetoothAlwaysUsageDescription`. Describe the expected peripheral or protocol in the contract. A fabricated device result is not acceptance evidence; use a physical device or record `UNVERIFIED`.

### 2. Downloading Photos

Possible product adaptations include:

- saving an image from the app to the photo library;
- downloading an original photo for offline viewing;
- saving a generated card, diagram, or processed result;
- downloading multiple selected images to the device.

The required feature must produce an actual image and save or download it. When saving only to Photos, prefer add-only Photo Library access and `NSPhotoLibraryAddUsageDescription`. If the feature saves to Files instead, record the system document flow and explain why no Photo Library prompt exists.

### 3. Adding Photos

Possible product adaptations include:

- choosing an image from the photo library for an avatar or cover;
- attaching multiple photos to a record or form;
- adding a photo as proof of a completed action;
- loading an image for recognition, editing, or analysis.

Prefer the system Photos picker when access only to user-selected assets is sufficient. The picker grants access to the selected items and normally does not display broad Photo Library authorization. Request broader PhotoKit access only when the product feature truly needs to browse or manage the library. Record the correct mechanism rather than manufacturing an unnecessary permission prompt.

### 4. Using the Camera

Possible product adaptations include:

- capturing a photo or video inside the app;
- scanning a QR code or barcode;
- recognizing a document with automatic boundary detection;
- providing augmented reality or object recognition from the camera feed.

Use a real capture or scanning flow and include `NSCameraUsageDescription`. Request access when the user enters that flow, not at launch. Verify unavailable-camera and denied states. Real camera behavior requires a suitable physical device when Simulator cannot provide the required input.

### 5. Face ID

Possible product adaptations include:

- signing in without a password;
- confirming a payment or other sensitive operation;
- opening a protected area with personal data;
- confirming a security-settings change.

Use Local Authentication and include `NSFaceIDUsageDescription`. Define what is protected, when authentication occurs, and the allowed fallback for devices without enrolled Face ID. Do not claim the app reads or stores biometric data.

### 6. Microphone Access

Possible product adaptations include:

- recording a voice message;
- making an audio or video call;
- recording an audio note or comment;
- measuring sound level, tone, or another audio characteristic.

Use a real audio capture or measurement flow and include `NSMicrophoneUsageDescription`. Request access only after the user starts the microphone-dependent action. Provide clear recording state, stop and cancellation behavior, and a denied path.

### 7. Speech Recognition Access

Possible product adaptations include:

- converting a voice note to text;
- searching the app by voice;
- filling a form or message through dictation;
- executing voice commands inside the app.

When the feature uses `SFSpeechRecognizer`, include `NSSpeechRecognitionUsageDescription` and request Speech authorization at first use. Capture of live speech normally also requires Microphone Access as its own canonical capability. Preserve the transcript or command result so recognition has product value beyond displaying the prompt.

### 8. Contacts Access

Possible product adaptations include:

- finding registered users among contacts;
- quickly inviting people to the app;
- choosing a recipient without manually entering a phone number or email;
- filling contact details in a form.

Use Contacts or ContactsUI and include `NSContactsUsageDescription` when broad, limited, read, or write access is requested. Prefer a system contact picker or limited access when the feature only needs user-selected people. Define what contact fields are used and ensure denial does not prevent manual entry where manual entry is viable.

### 9. Calendar Access

Possible product adaptations include:

- adding an event or reminder to the system calendar;
- checking availability before an appointment or booking;
- displaying calendar events inside the app;
- changing or cancelling an event previously created by the app.

Choose the minimum EventKit path. On supported iOS versions, use system event-editing UI without broad access when possible, write-only access for direct event creation, and full access only for features that read existing events. Record the applicable usage key, including `NSCalendarsWriteOnlyAccessUsageDescription` or `NSCalendarsFullAccessUsageDescription`. Do not describe a system editor with no authorization prompt as full Calendar permission.

### 10. Location Access

Possible product adaptations include:

- determining the user's current position;
- finding nearby places, services, or people;
- building a route or providing navigation;
- filling an address or attaching a place to an action.

Prefer When In Use authorization and include `NSLocationWhenInUseUsageDescription`. Request Always authorization only when continuous background behavior is essential to the invented feature and explicitly justified. Provide a manual location or address path when the product can reasonably work without location access.

### 11. CallKit

Possible product adaptations include:

- presenting an incoming internet call as a system call;
- answering a call from the locked screen;
- controlling a call through the system UI, headset, or car system;
- integrating incoming and outgoing internet calls with the system call experience.

CallKit is a system capability, not a permission prompt. It coordinates a real calling service with iOS but does not provide the media transport, signaling, account system, or incoming-call delivery. Define those dependencies in the contract. A screen that only reports a fake CallKit call is not a completed feature. If a real calling service or physical-device path is unavailable, keep the feature required and report it as `UNVERIFIED`.

## Contract gate

During product definition, create all eleven rows in the `Mandatory iOS capabilities` section of `product.md`, then reconcile them with the core scope before reference research. Each row must contain:

- the canonical ID and name;
- the invented product feature;
- its entry point and user action;
- the useful result after access;
- framework, access level, purpose string, entitlement, and external dependency;
- denial, restriction, cancellation, and unavailable behavior;
- Simulator or physical-device verification method.

The master verifies the count, order, completeness, and final scope reconciliation as one gate. Do not proceed to reference research while any row is absent, renamed, merged, lacks a product result, or conflicts with the recorded final scope.

## Platform sources

- [Apple: User Privacy and Data Use](https://developer.apple.com/app-store/user-privacy-and-data-use/)
- [Apple: Core Bluetooth](https://developer.apple.com/documentation/corebluetooth)
- [Apple: Delivering an Enhanced Privacy Experience in Your Photos App](https://developer.apple.com/documentation/photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app)
- [Apple: Requesting Authorization to Capture and Save Media](https://developer.apple.com/documentation/avfoundation/requesting-authorization-to-capture-and-save-media)
- [Apple: Local Authentication](https://developer.apple.com/documentation/localauthentication)
- [Apple: Asking Permission to Use Speech Recognition](https://developer.apple.com/documentation/speech/asking-permission-to-use-speech-recognition)
- [Apple: Contacts](https://developer.apple.com/documentation/contacts)
- [Apple: Accessing the Event Store](https://developer.apple.com/documentation/eventkit/accessing-the-event-store)
- [Apple: Requesting Authorization to Use Location Services](https://developer.apple.com/documentation/corelocation/requesting-authorization-to-use-location-services)
- [Apple: CallKit](https://developer.apple.com/documentation/callkit)
