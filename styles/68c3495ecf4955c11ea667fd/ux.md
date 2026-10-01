# Overview

Measure is an augmented-reality utility for placing measurement points on real objects and checking level angle with immediate feedback.

# Navigation

Two primary destinations switch between Measure and Level. The camera view carries contextual guidance, undo, clear, point placement, and current measurement.

# Core Flows

## Measure an object

1. Move the device until a surface is detected.
2. Place the first point with the action.
3. Move to the endpoint and place the second point.
4. Read the value, undo, clear, or start another measurement.

## Check level

1. Switch to Level.
2. Align the device with the target surface.
3. Read the angle and color feedback.
4. Adjust until the centered zero state is reached.

# Interaction Patterns

- Contextual line art teaches device movement in place.

# System Access Timing

No system-access timing or denial-recovery path was documented in the reviewed source.

# Known Gaps

Unobserved flows, denial paths, cancellation behavior, and recovery states remain unspecified.
