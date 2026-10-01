# Overview

hh supports account entry, guided profile and resume setup, vacancy discovery, filtering, saving searches and vacancies, reviewing details, applying with a chosen resume, following application status, messaging an employer, and managing resumes and career resources. The observed behavior favors progressive disclosure: users begin with a broad destination, narrow the content, open one record, then complete a focused action without losing the originating context.

# Navigation

Five persistent destinations provide access to search, saved vacancies, applications, messages, and profile. Detail screens return to the originating list. Profile links to account data, career resources, resumes, and settings. Focused search, filters, specialization, resume choice, and application composition are presented as temporary tasks that dismiss back to the previous context.

An application can continue into its related chat. Application and message lists also reopen the corresponding vacancy or conversation. Closing a temporary task cancels that unfinished step; completing it updates the source record and exposes the next relevant action.

# Core Flows

## Enter or create an account

1. The user chooses whether to create an account or sign in and selects an available identification method.
2. The user enters the requested credentials or contact details and completes verification.
3. A new user provides the required profile information and continues into guided resume setup; an existing user returns to their saved context.

## Search and narrow vacancies

1. The user opens search, enters a role or keyword, chooses a suggestion or previous query, and receives matching results.
2. The user can change sorting, open filters, choose specializations and other criteria, and apply the selection.
3. Results update while the query remains available for revision; the user can save the search or open a vacancy.

## Review and save a vacancy

1. The user opens a result and reviews the role, conditions, employer information, activity, and requirements.
2. The user can open the employer, save or unsave the vacancy, share it, or return to the same results.
3. Saving updates the vacancy state and makes it available from saved vacancies; saving a search confirms that future matches can be revisited.

## Apply and continue to conversation

1. The user starts an application from a vacancy and chooses one of the eligible resumes.
2. The user optionally adds a message and submits the application.
3. The app confirms delivery, updates the vacancy with the submitted state, and exposes follow-up actions.
4. When conversation is available, the user opens the related chat, sends a message or suggested reply, and can return to the application or vacancy.

## Review applications

1. The user opens applications and switches among the available status groups.
2. The user opens an application to review employer activity and the current response state.
3. The user follows the available next action, such as messaging, declining, or returning to discovery, without losing the selected group.

## Manage a resume

1. The user opens profile and selects a resume.
2. The user reviews visibility, performance, matching vacancies, skills, and additional information.
3. The user edits a section, changes visibility or renewal behavior, and returns to the updated resume.

## Browse career resources

1. The user opens career resources from profile and chooses a goal, tool, course, article, or expert directory.
2. The user opens the selected item and reviews its details or available filters.
3. Returning restores the prior career context rather than restarting at profile.

# Interaction Patterns

Search provides suggestions and history while the user types. Filters and specialization preserve current choices until saved or reset. Lists support local save state and reopen details without discarding the active query or status group.

Consequential actions use a review step and explicit completion feedback. Submission changes the source record to a delivered state and offers a next action instead of silently dismissing. Local guidance may explain a weak response state or recommend another route; dismissing it does not block the underlying task.

Loading preserves the expected content structure. Empty states explain what is missing and offer a recovery action. Failed or incomplete input remains available for correction. Notifications and employer activity update the relevant application or conversation while preserving access to the associated vacancy.
