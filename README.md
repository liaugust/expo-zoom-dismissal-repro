# usePreventZoomTransitionDismissal repros

Run with `npm install`, then `npx expo run:ios --device` (iOS 26 or later).

## Dismissal bounds never apply

The card screen asks for `usePreventZoomTransitionDismissal({ unstable_dismissalBoundsRect: { maxX: 44 } })`,
so only a swipe that starts within 44 pt of the left edge should dismiss it.

1. Tap a card; the detail zooms in.
2. Swipe right starting from the middle of the screen.

Expected: nothing happens. Actual: the screen is dismissed.

## The hook loops next to `<Stack.Screen options>`

`app/loop/[id].tsx` calls the hook in the same component that renders `<Stack.Screen options={{ title: 'Loop' }} />`.

1. Tap "Open a screen that calls the hook next to its Stack.Screen options".

Expected: the screen opens. Actual: "Maximum update depth exceeded".

The card screen avoids this by calling the hook from a component of its own (`EdgeOnlyDismissal`).
