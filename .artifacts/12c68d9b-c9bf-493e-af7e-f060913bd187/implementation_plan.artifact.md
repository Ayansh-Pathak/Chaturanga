# Implementation Plan: Chaturanga v1.5.5 Features & Optimizations

This plan addresses the requirements in the `Chaturanga_v1_5_5_Journey_1.journey.xml` test, focusing on loading performance and a "Play as Guest" experience.

## User Review Required

> [!IMPORTANT]
> The "Play as Guest" feature will generate a temporary username like `Guest1234`. This profile will be stored in `localStorage` but not in Firestore unless the user later "upgrades" to a full account.

> [!NOTE]
> The app loading time verification will be performed on the emulator, but results may vary based on host machine performance.

## Proposed Changes

### Web Application Components

#### [MODIFY] [AuthContext.tsx](file:///C:/Users/alok4/StudioProjects/Chaturanga%201.1.3/src/context/AuthContext.tsx)
- Add `loginAsGuest()` to `AuthContextType`.
- Implement `loginAsGuest()`:
    - Generate a unique username (e.g., `Guest` + random 4-digit number).
    - Create a temporary `UserProfile` object.
    - Set `user` state and save to `localStorage`.
    - Set `loading` to `false`.

#### [MODIFY] [App.tsx](file:///C:/Users/alok4/StudioProjects/Chaturanga%201.1.3/src/App.tsx)
- Update the "Skip to Arena (Guest Mode)" button in the loading screen:
    - Change `onClick={() => setLoading(false)}` to `onClick={() => loginAsGuest()}`.

#### [MODIFY] [AuthModal.tsx](file:///C:/Users/alok4/StudioProjects/Chaturanga%201.1.3/src/components/auth/AuthModal.tsx)
- Add a "Continue as Guest" button below the Login/Signup forms to provide an alternative path for new users.

---

### Android Native Components

#### [MODIFY] [MainActivity.kt](file:///C:/Users/alok4/StudioProjects/Chaturanga%201.1.3/app/src/main/java/com/ayanshcorp/chaturangathegrandchessarenabyayanshpathak/MainActivity.kt)
- Wrap Firebase initialization in a `lifecycleScope.launch(Dispatchers.IO)` block (if safe) or ensure it doesn't block the initial `setContent`.
- Adjust `WebView` settings:
    - Enable `hardwareAcceleration` (already set to `LAYER_TYPE_HARDWARE`).
    - Set `renderPriority` to `HIGH` (deprecated but sometimes helpful on older emulators).

## Verification Plan

### Automated Tests
- Run `gradlew assembleDebug` to verify build integrity.
- Execute unit tests for `AuthContext` logic (if available).

### Manual Verification
1. **Load Time Test**: Deploy to Pixel 6a (or emulator) and measure time from launch to interactive dashboard.
2. **Guest Mode Test**: Click "Play as Guest". Verify the navbar shows a `GuestN` username.
3. **Gemini Test**: Open Gemini Chatbot, use `/model` to switch models, and `/analyze` to get FEN analysis.
4. **Puzzle Test**: Complete a puzzle and verify the $+4$ Elo rating update.
5. **Data Cleanup**: Log out and verify `localStorage` is cleared.
