<design-context>
---
version: 1
platform: iOS
name: RZD-Passengers-design-analysis
description: "A dense rail-booking interface organized by a solid RZD-red application bar, white transactional rows on pale gray, compact timetable typography, modest radii, fixed red actions, and precise seat, route, and ticket diagrams."
colors:
  canvas: "#F1F2F3"
  surface-primary: "#FFFFFF"
  surface-secondary: "#D7DADD"
  accent-primary: "#E33A2D"
  accent-secondary: "#56606A"
  text-primary: "#2F363C"
  text-secondary: "#70777D"
  divider: "#D9DDE0"
  destructive: "#D83B32"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 34}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 19, fontWeight: 700, lineHeight: 24}
  body: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 400, lineHeight: 19}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 12
  section-gap: 20
  card-padding: 12
  control-gap: 8
rounded:
  control: 8
  card: 6
  sheet: 18
  pill: 999
components:
  primary-action: {fill: "RZD red", text: "white bold", height: 50, shape: "full-width pill"}
  secondary-action: {fill: "blue-gray or white", text: "white or dark blue-gray", radius: 4, border: "none"}
  primary-card: {fill: "white", radius: 6, padding: 12, border: "light divider", density: "compact"}
  navigation: {fill: "solid RZD red", icons: "white", title: "centered white", side-panel: "dark blue-gray"}
---

# Overview

RZD Passengers is a utilitarian transaction interface rather than a lifestyle travel product. A solid red top bar repeatedly frames dense white forms, route results, ticket rows, passenger data, seat diagrams, settings, and service screens on a cool pale-gray work surface. The strongest hierarchy comes from red bands and actions, compact timetable values, clear dividers, and fixed commitment controls.

The layout is predominantly rectangular and information-forward. Modest radii distinguish fields and data groups without turning every element into a soft card. Empty screens may use a centered functional line icon, while the booking surfaces stay almost entirely typographic and diagrammatic.

# Non-negotiable visual invariants

- A full-width RZD-red application bar anchors the top of most operational screens, with white title and utility icons inside the same strong color band.
- White transactional surfaces sit on pale cool gray and use thin dividers, compact spacing, and modest 4–8-point radii rather than oversized cards.
- Departure, arrival, duration, route, class, seat, and price values remain dense, aligned, and more prominent than explanatory copy.
- Primary continuation or booking actions are full-width red pills or anchored red controls; default blue is absent from the app-owned action hierarchy.
- Seat selection is shown as a precise carriage grid with small stateful cells, not as a generic list of seat names.
- Drawer and secondary navigation surfaces use dark blue-gray with white content, contrasting the red toolbar and light work area.
- Empty states use restrained dark line icons and generous blank space; they do not introduce decorative illustration or promotional card stacks.
- System dialogs and action sheets may retain iOS geometry, but the underlying screen remains visibly red, white, gray, and compact.

# Color and surfaces

The default canvas is cool light gray `#F1F2F3`. White primary surfaces hold route fields, train rows, passenger data, settings, support messages, ticket lists, and dialogs. Slightly darker gray `#D7DADD` marks inactive areas, separators, and disabled fields. Hairlines are pale but visible enough to structure dense schedules.

RZD red around `#E33A2D` fills the main application bar, primary actions, floating add controls, and selected high-priority affordances. Dark blue-gray around `#56606A` appears in the side panel, secondary anchored controls, text, and icons. Primary content uses `#2F363C`; supporting station, timing, policy, and helper text uses `#70777D`. Green is a bounded selection or route marker, not a general brand accent. Because red performs both identity and action roles, generic iOS blue would visibly break the reference.

Shadows are quiet. Layering is achieved with red and dark bands, white groups, pale-gray gaps, and translucent modal overlays rather than elevated card stacks.

# Typography

Use SF Pro as the iOS-safe compact sans. Screen titles inside the red bar are typically 16–18 points semibold; major content or empty-state titles can reach 23–30 points. Route, date, carriage, passenger, and price labels live mainly between 13 and 16 points, with bold or semibold weight reserved for decision-critical values. Metadata can fall to 10–12 points but must maintain sufficient contrast.

Timetable and monetary numerals require clear, stable alignment. Use tabular numbers where it materially improves departure, arrival, duration, date, seat, and price comparison. Uppercase is appropriate only for short transport or category labels. Long legal, help, and accessibility copy stays regular weight and left aligned.

Dynamic Type should increase row height and let station or policy text wrap; it must not erase the distinction between primary times/prices and secondary detail. Avoid adding a decorative display family—the compact administrative character is part of the reference.

# Screen composition

The typical screen begins with the iOS status area and a solid red app bar containing a centered white title plus leading hamburger or back control and occasional trailing cart, filter, account, or utility icon. The middle is a single vertical work column of fields, train rows, passenger groups, route data, settings, messages, or a seat map. The bottom may contain a fixed red CTA, a floating red add button, a compact chat composer, or simply the home-indicator safe region.

Search-entry screens stack white origin/destination rows, compact date tiles, passenger options, and one obvious red action. Result screens use full-width white train rows separated by hairlines: route times and cities lead, while duration, train/class, availability, and price follow in aligned blocks. Booking detail continues with carriage choices, a precise seat diagram, passenger forms, and fixed continuation controls. Seat grids may occupy most of the middle viewport while a small route or carriage summary remains above.

Profile, cards, tickets, notifications, settings, support, timetable, and assistance screens retain the same single-column density. Empty variants leave a large pale or white middle region with one centered line icon and concise message. The dark side panel overlays or replaces part of the light work area without adopting card styling. iOS alerts and action sheets appear over a dimmed context.

Outer gutters are commonly about 12 points, row gaps about 8 points, and major group separation 16–24 points. Scroll content must clear anchored actions and the home indicator. Large decorative whitespace is reserved for empty states, not inserted between transaction rows.

# Navigation appearance

The primary navigation treatment is the solid red toolbar with white icons and a centered white title. Leading controls are compact hamburger or back icons; trailing controls may include cart, filter, account, or search-related symbols. Selected utility actions remain red or white within this bar rather than introducing a new accent.

A dark blue-gray side panel uses white text and simple leading icons in vertically separated rows. Some content surfaces use compact segmented tabs with a red selected indicator or label. Modal choices use rounded white iOS-style action sheets. Product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

The primary action is a full-width red pill approximately 50 points high with white bold text. A fixed version may anchor the lower edge of a long booking screen. Secondary actions are compact white or dark blue-gray rectangles with small radii and strong labels. Disabled actions retain their placement but reduce contrast.

Route fields are broad white rows with aligned label/value pairs and compact icons. Date choices are small adjacent tiles. Train and ticket rows are flat white groups with thin dividers and almost square corners. Passenger cards add only a little more radius and padding. Checkboxes use clear red or green selected states and an explicit label.

Seat maps use repeated small rectangular cells with color or fill changes for available and selected states; carriage outline and aisle structure remain visible. Floating add actions are red circles. Support chat uses simple message bubbles plus an attachment/send composer. Settings and disclosure rows are compact and minimally styled. Native alert panels and action sheets may be used, but app-owned inputs must not fall back to blue tint.

# Imagery and icons

Operational screens rely on line icons, route markers, the carriage grid, and ticket data rather than photography. Empty cart, favorite, card, timetable, or service states use a single centered functional icon with thin dark strokes. These are supporting symbols, not a broad authored illustration system.

One onboarding state uses a full-screen seasonal train scene as a large background image with protected space for overlaid content. Treat this as a bounded campaign image, not a reusable visual language. Within booking and account screens, do not introduce lifestyle photography. If onboarding imagery is temporarily unavailable, retain the full-viewport image footprint and train focal area with a faithful placeholder.

# States

Observed states include splash and onboarding, logged-out and identified home headers, login and recovery forms, keyboard and captcha/audio assistance, advanced search, validation alert, empty cart, train/carriage results, and seat maps with one or multiple selected seats. Selection retains the same compact geometry and changes fill, border, or marker color.

Profile appears in view, edit, and logout-confirmation states. Cards/subscriptions, archived tickets, search history, support, favorites, timetable, and notifications include both sparse/empty and populated variants. Settings show enabled and disabled permission states with a system alert. Support chat can be empty or contain assistant messages while retaining the white/gray/red shell.

# iOS adaptation

Use safe-area-aware containers so the red application bar extends cleanly beneath or directly below the status area while toolbar content remains readable. Dense route, result, ticket, passenger, settings, and support screens should scroll vertically. Anchored booking actions use bottom safe-area insets and must not cover the final form group. The side panel and modal overlays should preserve standard dismissal and focus behavior.

Every toolbar icon, checkbox, date tile, segmented item, seat cell, disclosure row, floating add button, and chat action needs at least a 44-point effective target even if the visible cell is smaller. VoiceOver should announce route direction, departure and arrival, duration, train/class, price, then available action. Seat cells require explicit carriage/seat/state labels independent of color.

Dynamic Type may expand rows and move metadata below primary values; on compact widths, stack route facts before truncating city, time, seat, or price. Keyboard-visible login, recovery, passenger, and support forms must scroll focused fields above the keyboard. The observed product is light with red/dark navigation; do not apply automatic dark inversion without preserving this hierarchy.

# Anti-generic checklist

- Do not replace the full-width red application bar with a translucent or white navigation bar.
- Do not expose default blue tint in app-owned fields, checkboxes, links, and primary actions.
- Do not turn compact train, ticket, passenger, or settings rows into oversized lifestyle cards.
- Do not round every field, row, seat cell, and navigation surface into identical capsules.
- Do not replace the carriage seat grid with a generic menu of seat buttons.
- Do not use arbitrary decorative illustration or hotel-style travel photography inside transaction screens.
- Do not hide the anchored next action beneath long forms or the home-indicator region.
- Do not flatten times, routes, prices, state, and supporting copy into one uniform text hierarchy.

</design-context>
