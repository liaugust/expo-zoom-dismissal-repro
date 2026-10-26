# usePreventZoomTransitionDismissal repro

The card screen calls `usePreventZoomTransitionDismissal({ unstable_dismissalBoundsRect: { maxX: 44 } })`,
so only a swipe that starts within 44 pt of the left edge should dismiss it.

1. `npm install`
2. `npx expo run:ios --device` (iOS 26 or later)
3. Tap a card; the detail zooms in.
4. Swipe right starting from the middle of the screen.

Expected: nothing happens. Actual: the screen is dismissed.
