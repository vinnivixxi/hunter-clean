# HUNTER APP — CLAUDE.md
# Last updated: Session 17 — May 01, 2026

# RULES — NON-NEGOTIABLE
- Read this entire file before responding
- Do not ask clarifying questions already answered here
- If given only one file, state what is missing before touching anything
- Never build on top of unverified broken state — flag it first
- If context is compressed or chat is long — stop, say so, output nothing
- One file output per session at the end. Not mid-session.
- Always tell Vinn exactly what you are about to build before writing code
- Never proceed without confirmation on anything architectural
- Build changes are made one at a time. Vinn manually applies changes and confirms before moving to next.
- Hard rule: never provide instructions to add, remove, or modify code without first reading the actual code provided in the conversation.

# PROJECT
Hunter is a hookup app mockup. Single file SPA. Two files: hunter.html + hunter.css.
Lives as a modal inside the J&B PWA. Nothing hardcoded to J&B — all decisions must scale.
Files: C:UsersvinncDesktophunter-clean
Repo: https://github.com/vinnivixxi/hunter-clean (private)
Subfolders: profile.images/ and hunter.arrows/

# FILE INTEGRITY
hunter.html — Session 17 output. Contains:
- Loading screen with bow/arrow animation
- #screen-browse with Hunt/Track/Browse tab panel system — bottom nav markup removed entirely
- #screen-profile — single dynamic template, Session 15 redesigned
- #screen-chat — dynamic chat template
- PLACEHOLDER_POOL, shuffled(), buildPhotoArray()
- HUNT_Q3_POOL — 27 questions, fully populated by Vinn
- CHARS object with j, b, runnerboy, nightowl — all male, all with vibe field and naughtyPhotos array
- B's realPhotos 6 images, underscore paths: tarab.jpg, tarab_frenchie.png, tarab_couch.png, tarab_coffee.png, tarab_walking.png, tarab_jog.png
- Hunter object: navigate, goToProfile, renderProfile, goToChat, renderChat
- initHuntStack() — touch + mouse click/dblclick handlers, vertical dismiss (changing Session 18)
- initHuntIntake(), initBrowseTabs()
- initCarousel(screenId, char) — dot indicators + lock card, atLock state variable
- initAboutPanel(), initMsgBtn(), initBrowseCards(), initBackButtons(), initChatAvatarTap()
- initDragHandle() — first-open bounce via localStorage
- popstate listener — browser native back gesture
- history.pushState fires on goToProfile
- Escape key handler in initBackButtons()
- Font Awesome kit loaded in head (kit: 5822e1492d)
- vibeMap object in renderProfile — 5 entries (kink, whatevers, anon, romance, collab)
- roleIcons lookup in renderProfile — dynamic FA icon for role stat
- All stat row icons use Font Awesome — no inline SVGs in stat row

hunter.css — Session 17 output. Contains:
- Phone frame removed — width:430px, height:100vh, max-height:932px, border-radius:0, border:none
- Mobile media query — status bar hidden via display:none !important, body padding removed, box-shadow removed
- Status bar visible on desktop, hidden on mobile — correct intended behavior
- Bottom nav styles removed entirely
- Loading screen animations
- Browse grid layout — placeholder flat cards, not yet rebuilt to locked spec
- Tab system, profile template styles, chat styles
- Panel system: .browse-panel, .panel-active
- Hunt intake styles, hunt stack styles — .stack-hints selector fixed Session 17
- Track placeholder styles, SPA router rules
- Slide-up animation: @keyframes profileSlideUp on #screen-profile.active
- Drag handle: .drag-handle, @keyframes dragBounce
- Photo dots: .photo-dots (abs right 12px, top 80px), handedness aware via .phone.lefty
- Lock card: .lock-card (abs, 0-680px, z-index 12, dark overlay, pointer-events:none)
- stat-circle: 42px, icon font-size: 20px, color: #3B6B4A — unified under .stat-circle i
- profile-bottom padding: 0 16px 24px 16px
- .chat-meta selector fixed Session 17 — stray c. prefix removed
- .phone.lefty handedness toggle (CSS ready, UI not built)
- overscroll-behavior: none on body
- Gallery mode state selectors — profile-bottom, header-band, app-header, drag-handle

# CURRENT STATE — CONFIRMED WORKING
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
- Profile screen: lock card pointer-events:none — clicks pass through to heroArea
- Profile screen: gallery mode toggles via heroArea click
- Profile screen: swipe back from lock card returns to last public photo
- Profile screen: Row 1 — username, online dot, message pill inline
- Profile screen: Row 2 — all five FA stat icons, 42px circles, 20px icons
- Profile screen: Row 3 — about panel, tap to expand working
- Profile screen: message button active on B, disabled on J
- Profile screen: Escape key dismisses on desktop
- Profile screen: browser back gesture dismisses on mobile
- App fills full screen on mobile — phone frame removed, edge to edge
- Status bar hidden on mobile, visible on desktop — correct intended behavior
- Bottom nav removed — HTML and CSS both gone
- Chat thread loads correctly from B profile message button
- Back navigation works throughout all screens
- Clock updates in status bar

# BROKEN / PENDING THIS SESSION
- Drag handle bounce does not re-fire if hunter.profile.firstopen already set — clear via DevTools to re-test
- B's naughtyPhotos set to placeholder.bear.png intentionally — lock card must stay visible, no revert
- Gesture system decided but not implemented — all gestures still on old vertical system
- Browse grid decided but not built — browse panel still placeholder flat cards
- Tab functions defined but not wired — Hunt, Track, Browse on prior implementation
- Navigation arc vs bottom bar — decision still pending, must be locked before build starts
- Onboarding first run sequence — decided, not built
- Onboarding tutorial — decided, not built
- Profile data JSON architecture — decided, not built, must be locked before profile pool work begins
- Image subfolder structure — decided, not built, deferred until JSON architecture locked
- Vinn actively creating profile images — dropping into profile.images/ flat with underscore naming until subfolders finalized

# SESSION 18 — BUILD AGENDA
Work in this order. One change at a time. Confirm before moving to next.

1. PROFILE DATA ARCHITECTURE — lock before any other build work
   - Decide JSON file name and location
   - Lock exact JSON structure for profile pool
   - Decide how Hunter loads JSON on startup and merges with CHARS
   - Lock subfolder structure inside profile.images/ or confirm flat
   - J and B stay in CHARS — only pool profiles move to JSON
   - Nothing else gets built until this is locked

2. MOBILE DISPLAY — verify on Pixel 10 before moving forward
   - Phone frame removed, status bar hidden on mobile — confirm working on device

3. GESTURE SYSTEM
   - Horizontal swipe only across entire app
   - Vertical scroll retired
   - Hunt stack dismiss changes from vertical flick to horizontal swipe left/right
   - All gesture handlers updated — no screen left on old system

4. BROWSE GRID
   - Horizontal scroll only
   - Test 3x4 vs 4x5 on Pixel 10 — pick whichever keeps thumbs clearly readable
   - Profile count follows grid dimensions
   - Lazy load next batch as user approaches end of scroll

5. NAVIGATION — ARC VS BOTTOM BAR
   - Lock decision before build begins
   - Tab icons under consideration: Hunt fa-crosshairs, Track fa-map or fa-compass, Browse fa-table-cells

6. TAB WIRING
   - Wire Hunt, Track, Browse per locked definitions
   - Hunt: intake answers → bow fires arrow animation → stack of 5 curated cards
   - Track: Leaflet map, pins within 5-10 miles, city-level only, tap pin to expand profile
   - Browse: horizontal scroll grid, thumb readability drives dimensions, ~16 profiles per load

7. PROFILE DATA GENERATION SCRIPT
   - Generates CHARS-compatible profile objects
   - Randomized handles, stats, bios, vibe assignments
   - Output pastes directly into JSON profile pool
   - Start with one archetype, 5-8 profiles, test end to end

8. ONBOARDING — FIRST RUN SEQUENCE
   - Handedness selection fires before anything else
   - Drives arc nav position, photo dot position, all thumb-zone placement
   - localStorage key: hunter.handedness

9. ONBOARDING TUTORIAL
   - Fires once, never again
   - Reusable for PWA
   - Covers: horizontal swipe, tap to mark interest, double-tap to open profile, nav switching

# ARCHITECTURE — HARD STOPS
These are locked. Do not revisit unless Vinn explicitly opens them.

- All characters are male
- Tab order: HUNT / TRACK / BROWSE — permanent, never change
- Gesture system: horizontal swipe only — vertical scroll retired across entire app
- Hunt subtitle language must never reference distance or "in range" — Hunt is not proximity based
- Track is proximity based — Leaflet.js + OpenStreetMap, city-level only, never block-level, ~5-10 mile radius
- Browse: horizontal scroll grid, thumb readability drives dimensions, ~16 profiles per load
- Image naming: characterkey_index for public (hooty_0.png), characterkey_n_index for naughty (hooty_n_0.png)
- Image folder: profile.images/ flat until subfolder structure locked in Session 18
- Subfolder structure when built: profile.images/characterkey/public/ and profile.images/characterkey/naughty/
- J and B stay in CHARS — narrative critical, never move to JSON pool
- Pool profiles move to separate JSON file — structure locked Session 18
- UUID architecture: crypto.randomUUID(), localStorage as scaffolding only
- localStorage keys in use: hunter.hunt.intake, hunter.profile.firstopen, hunter.handedness, hunter.user.vibe
- Font Awesome kit: 5822e1492d — do not change
- No inline SVGs in stat row — Font Awesome only
- "Whatevers" is intentional regional dialect — do not correct
- J vibe: whatevers — protects narrative, do not change
- B vibe: whatevers
- CHARS model fields: realPhotos[], naughtyPhotos[], bio, stats{distance, age, height, role, vibe}, online, lastActive, canMessage, hasProfile, messages[]
- Stack loops — finite prey pool is narratively justified, do not change
- navigate() always clears .immersive and .gallery-mode on every call
- history.pushState fires on goToProfile — popstate handles back gesture
- One file output per session — hunter.html and hunter.css delivered at end, not mid-session