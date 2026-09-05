# Chaturanga Enhancements and Fixes Implementation Plan

This plan outlines the steps to implement the new Announcement system, Player Chat improvements, Gemini Chatbot updates, library content expansion, and build/performance fixes.

## User Review Required

> [!IMPORTANT]
> The `/Announcement` command will now trigger a UI popup for subject and body entry. This will be available only to the first user who "claims" the announcer role using the secret password.

> [!NOTE]
> Gemini model updates will be handled via a hardcoded list for now, as there is no official "Google Release API" to fetch these specific model names automatically in real-time. A weekly check reminder will be added.

## Proposed Changes

### Build and CI/CD Fixes

#### [MODIFY] [proguard-rules.pro](file:///C:/Users/alok4/StudioProjects/Chaturanga%201.1.3/app/proguard-rules.pro)
* Ensure R8 optimizations don't break Firebase or WebView components.
* Fix the "missing file" error by verifying the file presence and correct pathing in `build.gradle.kts`.

#### [MODIFY] [android_build.yml](file:///C:/Users/alok4/StudioProjects/Chaturanga%201.1.3/.github/workflows/android_build.yml)
* Verify the project path and file paths to ensure the GitHub Actions runner can find the ProGuard rules.

---

### Announcement System

#### [MODIFY] [FeedbackContext.tsx](file:///C:/Users/alok4/StudioProjects/Chaturanga%201.1.3/src/context/FeedbackContext.tsx)
* Update `Announcement` interface to include `subject`.
* Modify `postAnnouncement` to accept both subject and body.
* Update `addComment` to trigger a state change that opens the announcement modal when `/Announcement` is typed by an authorized user.

#### [MODIFY] [FeedbackPage.tsx](file:///C:/Users/alok4/StudioProjects/Chaturanga%201.1.3/src/components/feedback/FeedbackPage.tsx)
* Implement the `/Announcement` popup modal.
* Update the Announcements tab to display Subject, Body, and the author's profile (Username + Avatar).
* Ensure only one account can claim the announcer role via Firestore.

---

### Player Chat

#### [MODIFY] [PlayerChat.tsx](file:///C:/Users/alok4/StudioProjects/Chaturanga%201.1.3/src/components/chat/PlayerChat.tsx)
* Add logic to detect `@username` at the start of the message input.
* Automatically switch the active chat to the specified username when `@username` is used.

---

### Gemini Chatbot

#### [MODIFY] [GeminiChatbot.tsx](file:///C:/Users/alok4/StudioProjects/Chaturanga%201.1.3/src/components/chat/GeminiChatbot.tsx)
* Add a model selection dropdown.
* Include all requested models: Gemini 3.7 Flash, 3.6 Flash, 3.5 Flash, 3.5 Flash-Lite, 3.1 Flash-Lite, 2.5 Flash, 2.5 Flash-Lite, 2.5 Pro, and the "Nano Banana" series.
* Implement a command list popup that appears when `/` is typed.
* Add a simulated "weekly check" indicator or logic.

---

### Library Expansion

#### [MODIFY] [LibraryPage.tsx](file:///C:/Users/alok4/StudioProjects/Chaturanga%201.1.3/src/components/library/LibraryPage.tsx)
* Add ChessKid and Chess.com lesson URLs.
* Add a new section for "Famous Players & Titles" (GMs, IMs, FMs, CMs) with placeholder profile pictures.
* Include a list of FIDE Rated players.

---

### Performance

#### [MODIFY] [App.tsx](file:///C:/Users/alok4/StudioProjects/Chaturanga%201.1.3/src/App.tsx)
* Optimize loading speed by refining `Suspense` fallbacks and component pre-loading.

## Verification Plan

### Automated Tests
* Run `npm run build` to ensure the web project compiles.
* Run `./gradlew assembleDebug` to verify the Android build and R8 configuration.

### Manual Verification
1.  **Announcement System**: Sign in, type secret password in feedback comments, verify "Announcer" status. Type `/Announcement`, fill in popup, and check the Announcements tab.
2.  **Player Chat**: Type `@username` and verify it switches the chat target.
3.  **Chatbot**: Open Gemini, change the model, type `/` to see commands.
4.  **Library**: Check the new sections and links.
5.  **Build**: Verify GitHub Actions workflow passes.
