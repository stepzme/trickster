# Overview

The observed Profi.ru experience moves from phone verification into service discovery and a guided task brief. The user selects a service, answers one question at a time, reviews the assembled brief, publishes it, waits for matching specialists, and can inspect or restore the resulting order.

# Navigation

After entry, the user can search for a service, choose from the catalog, or start a task from the main action. Selecting a service opens a focused task sequence. Back returns to the previous question without discarding prior answers; Next advances only when the current answer is sufficient.

The assembled task can be reviewed and edited before publication. Publishing transitions into order status and specialist results. A hidden order remains recoverable. Temporary keyboards, service selection, and address selection return to the pending task rather than creating unrelated destinations.

# Core Flows

## Verify a phone number

1. The user enters a phone number and submits it when the value is complete.
2. The app requests the received confirmation code and provides a timed resend action.
3. Successful verification continues to the personalized service experience.

## Find a service

1. The user searches for a specialist or service, browses frequently requested categories, or opens the full service catalog.
2. Search suggestions and category choices narrow the request to a concrete service.
3. Selecting the service starts a task brief with the current service context preserved.

## Describe and publish a task

1. The user answers a sequence of single-choice, multiple-choice, numeric, free-text, date, address, budget, and readiness questions.
2. Each completed answer advances to the next relevant question; changing an answer can alter later choices and the available-specialist count.
3. The user reviews the assembled task, edits any incomplete or incorrect item, and adds optional details.
4. The user publishes the task and receives explicit progress followed by a confirmed published state.

## Review matching specialists

1. After publication, the user waits while specialists review the task and opens the specialist results when available.
2. The user scans names, ratings, review counts, and current response status, then opens a relevant specialist.
3. Returning restores the order and its current results rather than restarting task creation.

## Hide and restore an order

1. The user hides an order from its task controls.
2. The app confirms that the order is hidden and explains the consequence for new proposals.
3. The user can publish it again to resume receiving proposals.

# Interaction Patterns

The questionnaire uses progressive disclosure and keeps prior answers available for revision. Selection is immediate, while progression is explicit. Some choices reveal additional explanation or disable incompatible answers. Inputs summon the keyboard appropriate to the requested value, and address entry can hand off to map selection before returning to the task.

The available-specialist count provides feedback as the brief narrows. Publishing is a consequential action with a visible in-progress state and a distinct completion state. Waiting, empty, populated, and hidden order states each explain what is happening and expose the next available action. Failure or correction should preserve the assembled brief rather than sending the user back to service discovery.
