Here is the corrected Session 15 log:

---

HUNTER APP — SESSION LOG

Last updated: April 26, 2026 (Session 15)

# ORIENTATION — READ THIS FIRST AND IN FULL BEFORE RESPONDING

Treat this as a real production app. Every decision must be made as if this will eventually be deployed live. It may be. Shortcuts that work for a mockup but break at scale are not acceptable. Vinn migrated Hunter Session logs from Google Docs to Notion, there were two additional sessions that were not accounted for in the Google doc sessions. All session 11 data should now be session 13. Session 14 began April 19, 2026 with the new session naming convention.

# RULES FOR ALL INSTANCES — NON-NEGOTIABLE

- Read this entire log before responding
- Do not ask clarifying questions already answered in this log
- If given only one file, state what is missing before touching anything
- Never build on top of unverified broken state — flag it first
- If context is compressed or chat is long — stop, say so, output nothing
- Ask questions if unclear. Wait for answers. Then act.
- One file output per session at the end. Not mid-session.
- Always tell Vinn exactly what you are about to build before writing code
- Never proceed without confirmation on anything architectural
- Build changes are made one at a time. Vinn manually applies changes and confirms before moving to the next.

# PROJECT

Hunter is a hookup app mockup that lives as a modal inside a PWA story container for The Ballad of J & B. Unlocks narratively on Thursday night. User experiences it from J's POV.

Long term: Hunter is reskinnable for other stories in the universe (Long Pig, Batz, the Pierces project, Hunter the capstone story). Nothing hardcoded to J&B specifically. All decisions must scale.

Files live in: C:UsersvinncDesktophunter-clean

GitHub repo: https://github.com/vinnivixxi/hunter-clean (private)

Subfolders: profile.images/ and hunter.arrows/

# FILE INTEGRITY — CURRENT STATE

**hunter.html — Session 15 output. Contains:**

- Loading screen with bow/arrow animation
- #screen-browse with Hunt/Track/Browse tab panel system
- #screen-profile — single dynamic template, Session 15 redesigned
- #screen-chat — dynamic chat template
- PLACEHOLDER_POOL, shuffled(), buildPhotoArray()
- HUNT_Q3_POOL — 27 questions, fully populated by Vinn
- CHARS object with j, b, runnerboy, nightowl entries — all with vibe field and naughtyPhotos array. B's realPhotos updated to 6 images.
- Hunter object: navigate, goToProfile, renderProfile, goToChat, renderChat
- initHuntStack() — touch + mouse click/dblclick handlers
- initHuntIntake(), initBrowseTabs()
- initCarousel(screenId, char) — REWRITTEN Session 15: dot indicators + lock card. No rails, no filmstrip. atLock state variable. All gestures preserved.
- initAboutPanel(), initMsgBtn()
- initBrowseCards(), initBackButtons(), initChatAvatarTap()
- initDragHandle() — first-open bounce via localStorage
- popstate listener — browser native back gesture replaces swipe down dismiss
- history.pushState fires on goToProfile
- Escape key handler in initBackButtons()
- Font Awesome kit loaded in head (kit: 5822e1492d)
- #photoDots — static div, direct child of #screen-profile. Populated by initCarousel().
- #lockCard — static div, direct child of #screen-profile. fa-lock + paywall text. Shown via .visible class.
- Inline comments still partially outdated — update Session 16

**hunter.css — Session 15 output. Contains:**

- Loading screen animations
- Browse grid layout (de-fanned, flat cards)
- Tab system
- Profile template styles — Session 15 updated
- Chat styles
- Panel system: .browse-panel, .panel-active
- Hunt intake styles: .hunt-intake, .intake-step, .intake-option
- Hunt stack styles: .stack-card, .stack-card-info, .stack-hints
- Track placeholder styles
- SPA router rules
- Slide-up animation: @keyframes profileSlideUp on #screen-profile.active
- Drag handle: .drag-handle, @keyframes dragBounce
- Photo dots: .photo-dots (abs right 12px, top 80px), .photo-dot (10px white, 0.4 opacity), .photo-dot.active (0.95 white, glow). Handedness aware via .phone.lefty .photo-dots.
- Lock card: .lock-card (abs, 0-680px, z-index 12, dark overlay, pointer-events:none), .lock-card.visible (display:flex), .lock-card i (fa-lock 40px green), .lock-card p (paywall text)
- Profile bottom rows: .profile-bottom-row1, .profile-bottom-row2, .profile-bottom-row3
- Message button: .profile-msg-btn
- Vibe stat styles: .stat-vibe
- Mobile viewport: @media (max-width: 768px) — full screen on mobile, 100svh height
- Gallery mode state: remaining selectors (profile-bottom, header-band, app-header, drag-handle)
- .phone.lefty handedness toggle (CSS ready, UI not built)
- overscroll-behavior: none on body
- REMOVED Session 15: carousel-bar-left/right, carousel-thumb, rail-lock-hint, gallery-filmstrip, filmstrip-thumb, filmstrip-paywall and all associated CSS

# WHERE WE'VE BEEN — COMPLETED WORK

- Session 1 — March 29: CSS extraction, image paths, carousel, chat template
- Session 2 — March 30: Read more truncation, profile rebuilds from template
- Session 3 — March 31: CSS cleanup, action button fix, Phase 1 complete
- Session 4 — April 2: SPA architecture, master hunter.html, all navigation wired, tab architecture locked
- Session 5 — April 3: Adaptive carousel, PLACEHOLDER_POOL, Fisher-Yates shuffle, buildPhotoArray, profile template refactor, CHARS data model expanded, UUID + localStorage architecture locked
- Session 6 — April 5: Hunt tab stack built (gestures, card layout, interest pulse), Hunt intake built (3 questions, localStorage gate, per-tap advance), tab order corrected (Hunt/Track/Browse), intake re-fires on Hunt tab tap if not completed, Track placeholder built, GitHub set up and configured, CSS corruption incident — file rebuilt clean from scratch
- Session 7 — April 5: De-fanned Browse panel, Hunt stack visual polish (cascade trail, centered, green border), profile screen redesign spec locked (drag handle, slide-up animation, thumbnail vertical rail, horizontal gallery scroll, paywall video scaffold, edge swipe gesture system)
- Session 8 — April 5: Profile screen restructured — drag handle added, slide-up entry animation, swipe-down dismiss wired (touch), vertical thumbnail rail built, action buttons moved to absolute right rail, gallery mode built, mouse handlers added to hunt stack for desktop testing
- Session 9 — April 11: Thumbnail rail and filmstrip converted from circles to rounded rectangles (border-radius 8px, portrait proportions). Filmstrip spacing tightened. Rail lock icon wrapped in styled container matching thumb shape. Hero photo navigation fixed on desktop — mouseup moved to document with isDown guard, scroll wheel navigation added. Swipe-down dismiss mouse support added. One build at a time protocol established.
- Session 10 — April 12: Profile header cleaned up — app-header removed, back arrow added (temporary), username anchored in profile-bottom-left, Escape key handler added, header-band reduced, HUNT_Q3_POOL populated with 27 questions by Vinn, "Whatevers" added as intentional regional dialect option. Archetype chat system designed and parked in Phase 3.5.
- Session 11 — April 19: Profile screen fully redesigned — thumbs up/down removed, back arrow removed, read more removed, action column removed. New three-row bottom section: Row 1 username/online dot/message pill, Row 2 stats with vibe icon, Row 3 about panel tap-to-expand. Vibe stat added to CHARS and renderProfile with 6 icon types. initSwipeDownDismiss removed — replaced with history.pushState + popstate listener for native browser back gesture on iOS and Android. Escape key confirmed working on desktop. Mobile viewport fixed — media query at 768px, 100svh height, full screen on Pixel 10. All changes verified working on desktop and Pixel 10.
- Session 14 — April 19, 2026: Dead code cleanup — removed oldToggle block, actMsg block, initActionButtons function and its call from renderProfile. CHARS data model updated — naughtyPhotos[] added to j and b. initCarousel() rewritten — hero not repeated in rail, placeholders removed from profile rail, two-rail split with handedness awareness, dominant rail fills first up to 3 thumbs then overflow to off-hand rail, lock renders only when naughtyPhotos has content. carousel-bar split into carousel-bar-left and carousel-bar-right in HTML and CSS. Font Awesome kit added to HTML head (kit: 5822e1492d). Lock icon converted from inline SVG to Font Awesome fa-lock. Lock visual polish carries to Session 15.
- Session 15 — April 26, 2026: Lock icon visual polish completed — fa-lock sized correctly in both rail (.rail-lock-hint i at 24px) and filmstrip paywall (.filmstrip-paywall i at 26px). Filmstrip paywall SVG replaced with fa-lock for consistency. Filmstrip paywall container styled to match rail lock (background rgba(59,107,74,0.15), border rgba(59,107,74,0.5), box-shadow). Major profile screen photo navigation redesign — both carousel rails and gallery filmstrip removed entirely. Replaced with: photo dot indicators (white, 10px, top:80px right rail, handedness aware via .phone.lefty) and lock card overlay (full-hero dark overlay, pointer-events:none, fa-lock 40px + paywall text, shows as final swipe position when naughtyPhotos has content — gallery mode still toggles via heroArea click when lock card is visible). initCarousel() fully rewritten — atLock boolean state, showLock()/setPhoto() functions, all gesture handlers updated (touch swipe, mouse drag, scroll wheel). Gallery mode toggle unchanged. B's realPhotos expanded to 6 images by Vinn.

# WHERE WE ARE — CURRENT STATE

**CONFIRMED WORKING (verified desktop + Pixel 10):**

- Loading screen with full animation sequence
- Hunt tab: intake fires, advances per tap, saves to localStorage
- Hunt tab: Q3 pool live — 27 questions, random selection confirmed
- Hunt stack: cards visible, touch and mouse gestures working
- Track tab: placeholder displays correctly
- Browse tab: cards visible, tap to select, tap to open profile
- Profile screen: slide-up entry animation
- Profile screen: drag handle visible
- Profile screen: hero image loads
- Profile screen: photo dot indicators rendering — white, 10px, top:80px, right rail
- Profile screen: active dot updates as user navigates through photos
- Profile screen: lock card renders as final swipe position when naughtyPhotos has content
- Profile screen: lock card has pointer-events:none — clicks pass through to heroArea
- Profile screen: gallery mode toggles via heroArea click when lock card is visible
- Profile screen: swipe back from lock card returns to last public photo
- Profile screen: Row 1 — username, online dot, message pill inline
- Profile screen: Row 2 — stats row with vibe icon rendering
- Profile screen: Row 3 — about panel, tap to expand working
- Profile screen: message button active on B, disabled on J
- Profile screen: gallery mode — hero tap enters, dots remain visible
- Profile screen: gallery mode — hero tap exits
- Profile screen: Escape key dismisses on desktop
- Profile screen: browser back gesture dismisses on mobile (iOS + Android)
- App fills full screen on mobile via media query
- Chat thread loads correctly from B profile message button
- Back navigation works throughout all screens
- Clock updates in status bar

**BROKEN / PENDING SESSION 16:**

- Drag handle bounce does not re-fire if hunter.profile.firstopen already set — clear via DevTools to re-test.
- Bottom nav labels still say Browse/Profile/Chats/Search. Deferred.
- Stat icons small — deferred.
- OnlyHoes not yet added to intake Q2 options.
- Anon vibe not yet added — carry to Session 16.
- Inline HTML comments still reference old Session 8/9 rail architecture — update Session 16.
- B's naughtyPhotos set to placeholder.bear.png for testing — revert to empty array when lock card testing is complete.
- B's realPhotos path mismatch — CHARS uses underscores (tarab_frenchie.png) but files on disk use dots (tarab.frenchie.png). Images 2-6 will not load until paths are corrected.
- profile-bottom left padding still set to 68px (legacy from old left rail) — should be reduced now that left rail is gone. Deferred.

# WHERE WE'RE GOING — NEXT BUILD ITEMS IN ORDER

## NEXT SESSION (Session 16)

**B REALPHOTO PATH FIX** — CHARS has underscores (tarab_frenchie.png) but files on disk use dots (tarab.frenchie.png). Fix paths in CHARS.b.realPhotos so images 2-6 actually load.

**INTAKE Q2 UPDATE** — add OnlyHoes option with camera icon. Vibe icon map already has camera icon defined — just needs HTML option added.

**VIBE EXPANSION** — add Anon as new vibe option. Archetype: no face pics, headless profiles, lock-only presentation. Icon: fa-mask from Font Awesome free tier. Add to intake Q2 options and vibe icon map in CHARS and renderProfile.

**STAT ICON SCALE** — stat icons still small. Scale up now that rails are gone and bottom section has more width.

**INLINE COMMENT CLEANUP** — HTML inline comments still reference old Session 8/9 rail architecture. Update to reflect dot indicators, lock card, naughtyPhotos model, and Font Awesome icons.

**PROFILE DATA GENERATION SCRIPT** — Build a script that generates CHARS-compatible profile objects with randomized handles, stats, bios, and vibe assignments. Output pastes directly into the CHARS object. Allows profile pool to be built without waiting for the profile creation UI. Vinn has existing images to use — pick one archetype to start, build 5-8 profiles, 5 images each, test end to end before expanding to other archetypes.

# PHASE 3 REMAINING

**BROWSE LIVING GRID** — when profiles exist (50-100)

- 4x4 grid minimum. Background timer rotates profiles in/out.
- Infinite scroll underneath as safety net.
- Timer = app agency. Scroll = user agency. Tension is intentional.
- Shake to refresh = Easter egg only, not primary feature.
- Deferred until profile pool exists.

**TRACK TAB — Leaflet.js map**

- Leaflet.js + OpenStreetMap. Free. No API key. No backend.
- Location prompt on tab tap. City-level only.
- Pins at stated distances in randomized directions.
- Denial state leans into narrative — not a generic error. Nobody hits a dead end.

# PHASE 3.5 — CHAT SYSTEM & ARCHETYPE POOLS

**ARCHETYPE CHAT SYSTEM** — designed Session 10, build TBD.

**CONCEPT:** User completes intake → vibe stored in localStorage → Hunt stack surfaces profiles from matching archetype pool → incoming messages draw from that archetype's voice pool → user picks from 2-3 response choices → next message flavored by choice → no story consequences, flavor only.

**ARCHETYPES (6):** Daddy, Bro, OnlyHoe, Top, Power Bottom, Kinkster

**VIBE → ARCHETYPE MAPPING:**

- kink → Kinkster pool
- netflix → Bro or Daddy pool
- gymbro → Bro pool
- adventure → TBD
- social → TBD
- whatevers → random across all pools
- onlyhoes → OnlyHoe pool
- anon → TBD

**VIBE ICON MAP — FINAL:**

- Kink → feet icon (Font Awesome pro — use fa-socks free tier substitute)
- Netflix & Chill → couch icon
- Gym Bro → barbell icon
- Adventure → campfire icon
- Social → wine glass icon
- Whatevers → question mark icon
- OnlyHoes → camera icon
- Anon → fa-mask (Font Awesome free) — no face pics, headless profiles, lock-only presentation

NOTE: OnlyHoes and Anon to be added to intake Q2 options in Session 16.

NOTE: "Whatevers" is intentional regional dialect — do not correct.

**CONTENT STRATEGY:**

- Each archetype gets a distinct voice.
- 3-5 conversation cycles per archetype.
- 2-3 user response choices per cycle.
- Source material: real app chats curated by Vinn, anonymized.
- J and B profiles are off limits — no chat system for either.

**PRODUCTION TARGET:**

- Minimum 5-8 profiles per archetype before system feels real.
- 6 archetypes = 30-48 profiles minimum at launch.
- 5 images per profile = 150-240 images total.
- Image workflow: DALL-E, existing Vinn process, ~80-90% consistency acceptable.

**ARCHITECTURE NOTES (to be designed before build):**

- localStorage key needed for hunter.user.vibe
- Hunt stack filter logic based on stored vibe
- Message pool data structure TBD — likely array of cycles per archetype
- Response choice UI TBD — likely appears in chat input area

# PHASE 4

**NARRATIVE UNLOCK SEQUENCE**

Two modal entry states managed by J&B PWA layer:

- ACTIVE: on-rails, reader is J, B's message arrives, scripted. Repeats every time J and B chat in the app — not just the Thursday unlock. Throughout the entire story.
- CLOSED: J closes app, full Hunter opens, Hunt intake available.

Hunter just needs to know which state it's launched in.

**PROFILE CREATION FLOW**

- Form UI — no HTML editing to add profiles.
- UUID via crypto.randomUUID() as key on save.
- Photo addressing: profileUUID_index (e.g. 8f14e45f_0 through _4)
- Profile UUID = parent. Photos = children. Foreign key relationship.
- localStorage as scaffolding — real backend when Hunter goes live.
- Photo storage solution (file path vs base64 vs blob URL, size limits) to be designed before build begins.

**HANDEDNESS TOGGLE ONBOARDING**

- CSS .phone.lefty already exists. Toggle UI = first-run onboarding.
- localStorage: hunter.handedness = 'left' or 'right'
- Default: right-handed.
- Also drives which side photo dots render on.

**PLACEHOLDER ARCHETYPE SELECTION**

- On first run, user selects their placeholder archetype (e.g. Daddy, Twink, Bear, etc.)
- Drives which placeholder image represents them in chat and browse grid.
- More inclusive than defaulting everyone to the same stock image.
- Lives in first-run onboarding alongside handedness toggle.

**VIDEO / MONETIZATION**

- AI-generated video clips for paying members. Vinn's idea — Phase 4 or later.
- Needs dedicated planning session.
- Legal and platform considerations must be addressed before building.

# ARCHITECTURE — SPA

Single file SPA. All screens as div.screen in hunter.html. Hunter.navigate() shows one screen at a time via .active class. No page reloads. Chosen because Hunter lives as modal in J&B PWA.

**Screen inventory:**

- #screen-browse — Hunt/Track/Browse panel container (default)
- #screen-profile — single dynamic profile template
- #screen-chat — dynamic chat template

**Panel inventory inside #screen-browse:**

- #panel-hunt — stack + intake overlay
- #panel-track — placeholder (Leaflet map coming)
- #panel-browse — flat grid (4x4 living grid when profile pool exists)

**Router methods:**

- Hunter.navigate(screenId)
- Hunter.goToProfile(charKey) → renderProfile → navigate('profile')
- Hunter.goToChat(charKey) → renderChat → navigate('chat')
- navigate() also clears .immersive and .gallery-mode on every call.

# CHARS DATA MODEL

Each character entry: key, name, subtitle, avatar, myAvatar

- realPhotos[] — real image paths (empty array = placeholder hero, no dots)
- naughtyPhotos[] — gated content paths. Lock card renders as final swipe position only when this array has content. Empty array = no lock card.
- bio, stats{ distance, age, height, role, vibe }
- vibe maps to icon in profile stats row. Values: kink, netflix, gymbro, adventure, social, whatevers, onlyhoes, anon.
- "Whatevers" is intentional regional dialect — do not correct.
- online, lastActive, canMessage, hasProfile
- messages[]

**Current characters:** j, b, runnerboy, nightowl

- runnerboy and nightowl: hasProfile:false — stub entries, no profiles yet. Will be replaced by real profiles once profile creation flow is built.
- J vibe: whatevers — protects narrative (B's toe pic is a story beat, do not change)
- B vibe: whatevers

# PLACEHOLDER POOL

- PLACEHOLDER_POOL — single source of truth above CHARS in hunter.html.
- buildPhotoArray(realPhotos, count) — still used by hunt stack only as of Session 15.
- shuffled() — Fisher-Yates algorithm. Fires on every load.
- Hunt stack: buildPhotoArray still used — placeholders keep the stack feeling populated.
- Profile hero: first realPhoto or random placeholder if realPhotos is empty. No rail or dots rendered for placeholder hero.
- Placeholders are intentional content, not temporary stand-ins.
- This is a deliberate UX differentiator from Grindr/Scruff/Growlr.
- Placeholder archetype selection (Daddy, Twink, Bear, etc.) planned for Phase 4 onboarding.

# THREE-TAB NARRATIVE ARCHITECTURE — LOCKED

Tab order: HUNT / TRACK / BROWSE. This is permanent. Never change.

- HUNT — Default tab. App hunts for you. 3 intake questions on first use. Curated card stack. Finite, looping. Primary experience. The arrow went out and came back with something.
- TRACK — Close the distance. Map. Geolocation. You stalk your target.
- BROWSE — Fallback. Full population. 4x4 living grid (when built). No curation. You're on your own.

Narrative arc: Select → Find → Close / Hunt → Track → Browse

# HUNT STACK — LOCKED

Stacked cards. One dominant. Back cards peek with offset + rotation. STACK_POSITIONS array in hunter.html — tune y/rot/scale/opacity there.

**Gestures:**

- Flick up/down — dismiss front card, next promotes
- Single tap — interest pulse (green glow, no nav)
- Double tap — open full profile if hasProfile: true
- Desktop — click (pulse) / dblclick (open profile) / drag up-down
- Stack loops — finite prey pool is narratively justified.
- Easter eggs (deferred): shake/spin/wrist flick = force refresh stack.

# PROFILE SCREEN — SESSION 15 STATE

- Entry: slide-up animation from bottom of phone frame (0.35s).
- Drag handle: pill at top center. Bounces once on first ever open. localStorage key: hunter.profile.firstopen
- Dismiss: browser native back gesture (iOS + Android edge swipe). Escape key on desktop. history.pushState fires on profile open, popstate listener navigates back to browse.
- Gallery mode: toggled by tapping hero image. Class on #screen-profile. Enter: hero tap. Exit: hero tap again. navigate() always clears .gallery-mode so it never persists across screens. Gallery mode also toggles when lock card is visible — lock card has pointer-events:none so clicks reach heroArea.

**Photo dot indicators — as of Session 15:**

- Vertical column of dots, right side of hero, top: 80px. z-index: 10. pointer-events: none.
- White dots: rgba(255,255,255,0.4) inactive, rgba(255,255,255,0.95) active with glow.
- 10px diameter, 10px gap. Active dot: box-shadow 0 0 6px rgba(255,255,255,0.5).
- One dot per public photo. Dots visible in both normal and gallery mode.
- Handedness aware: .phone.lefty .photo-dots mirrors to left: 12px.
- Dots render only when photos.length > 1 or naughtyPhotos has content.
- No dot renders active when lock card is visible — updateDots(-1).

**Lock card — as of Session 15:**

- Full-hero dark overlay (rgba(26,26,26,0.92)), positioned absolute top 0 to 680px, z-index: 12, pointer-events: none.
- Shows as final swipe position when naughtyPhotos has content. fa-lock 40px green + paywall text.
- Visible via .lock-card.visible class. Hidden by default (display:none).
- pointer-events:none — clicks pass through to heroArea. Gallery mode toggles normally when lock card is visible.
- atLock boolean in initCarousel() tracks lock card state. Backward gesture from atLock returns to last public photo.

**Photo navigation edge cases:**

- 0 real photos → placeholder hero, no dots, lock card only if naughtyPhotos exist
- 1 real photo → hero only, no dots (nothing to navigate), lock card if naughtyPhotos exist
- 2+ real photos → dots render, lock card appears as final position if naughtyPhotos exist

**Hero photo navigation:**

- Touch: swipe left/right or up/down
- Desktop: scroll wheel up = previous, scroll wheel down = next
- Single click = toggle gallery mode

**Bottom section — three rows:**

- Row 1: Username · online dot · message pill (right side, disabled on J)
- Row 2: Stats icons spread evenly — distance, age, height, role, vibe
- Row 3: About panel — 3 line clamp, tap anywhere to expand

**Gallery mode:** Dots remain visible. Lock card remains accessible via swipe. No filmstrip in gallery mode as of Session 15. Hero fills screen via .gallery-mode CSS.

# THUMB ZONE — LOCKED

All primary actions must live in bottom third of screen. Hunter must be fully usable one-handed with just the thumb. Primary dismiss = browser native back gesture.

# HANDEDNESS TOGGLE — LOCKED

.phone.lefty in hunter.css mirrors photo dots to left side. CSS exists and is ready. Toggle UI is Phase 4 onboarding. localStorage: hunter.handedness = 'left' or 'right'. Default: right.

# TRACK TAB — LOCKED

Leaflet.js + OpenStreetMap. Free. No API key. No backend. City-level location only — never block-level. Pins drop at stated distances in randomized directions. Denial state: card appears with two options, leans into narrative. Nobody hits a dead end.

# MESSAGE MODAL — LOCKED

Existing thread (e.g. B): skip modal, go straight to chat. New conversation: modal fires, user types opener, enters chat. Matches Scruff behavior. Fits POV narrative.

# UUID + STORAGE ARCHITECTURE — LOCKED

- Profile keys: crypto.randomUUID() — built into browser, no library.
- Called once at profile save. Stored as localStorage key.
- Photo addressing: profileUUID_index (e.g. 8f14e45f_0 through _4)
- Profile UUID = parent. Photos = children. Foreign key relationship.
- On load: fetch profile, retrieve all photos under that UUID.
- On delete: remove profile and all photo entries cleanly.
- localStorage = scaffolding only. Real backend when Hunter goes live.
- All current architecture decisions are compatible with that transition.

# LOCALSTORAGE KEYS IN USE

- hunter.hunt.intake — 'done' when intake completed
- hunter.profile.firstopen — 'done' after first profile ever opened
- hunter.handedness — 'left' or 'right' (not yet built)
- hunter.user.vibe — vibe selected in intake Q2 (not yet built)

# GITHUB WORKFLOW

Repo: https://github.com/vinnivixxi/hunter-clean (private)

After every session: git add . / git commit -m "Session N — brief description" / git push

Raw URL fetch is blocked in Claude — use GitHub connector or upload. GitHub solves version control and rollback. Does NOT reduce token cost. Files still load into context window regardless of delivery method.