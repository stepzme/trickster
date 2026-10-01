# Overview

hh business keeps recruiter work stateful: vacancy status, candidate identity, and the next contact or payment action remain explicit.

# Navigation

Vacancies, Search, Chats, Favorites, and Profile represent the main work modes; list tabs separate vacancy lifecycle states.

# Core Flows

## Review a candidate

1. Search or open a candidate from a vacancy.
2. Review identity, active-search status, and fit details.
3. Unlock or open contact information.
4. Save, message, or return to the preserved list.

# Interaction Patterns

- Show restrictions before the user attempts an action.
- Keep vacancy and candidate state visible.
- Preserve list filters and scroll position.
- Put recovery next to payment or verification failures.

# System Access Timing

No system-access request timing or denial recovery was documented in the reviewed source.

# Known Gaps

- Permission-denial recovery and unobserved secondary flows were not documented.
