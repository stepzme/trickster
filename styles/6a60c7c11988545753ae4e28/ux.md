# Overview

GO Club turns steps, water, plans, goals, and daily completion into focused routines with lightweight history and customization.

# Navigation

The app has a small set of persistent habit destinations. Each destination returns the user to the current value and its main action. Deeper history and goal settings are entered from the relevant habit and return to the same context.

# Core Flows

## Review movement

1. Open the movement destination and review the current total and progress.
2. Change the range or open history when more context is needed.
3. Return to the current day without losing the selected habit.

## Log water

1. Open the water destination.
2. Adjust the amount or target.
3. Confirm the entry and return to updated progress.

## Follow a plan

1. Open the current plan.
2. Review its target, duration, and progress.
3. Complete the next action or open plan details, then return to the updated plan state.

# Interaction Patterns

Each habit keeps its current value and main action immediately available. Range and mode changes update the current context without sending the user to a separate settings hierarchy. Logging is short, confirmation is explicit, and completion returns to updated progress. History and customization stay subordinate to the current-day task.

# System Access Timing

Health or movement access belongs after the user enters a feature that uses it. Location belongs to the weather or walking-plan action that needs it. Denial returns to a manual or informational path rather than blocking unrelated habits.

# Known Gaps

Reminder editing, long-term history management, destructive reset behavior, and most permission-denial recovery were not available in the reviewed flows.
