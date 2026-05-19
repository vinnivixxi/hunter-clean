// ── Placeholder pool ──────────────────────────────────────────────────────────
var PLACEHOLDER_POOL = [
  'profile.images/placeholder_bear.png',
  'profile.images/placeholder_daddy.png',
  'profile.images/placeholder_frat.png',
  'profile.images/placeholder_twink.png',
  'profile.images/placeholder.png'
];

function shuffled(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function buildPhotoArray(realPhotos, count) {
  count = count || 5;
  var real = realPhotos.slice(0, count);
  var needed = count - real.length;
  if (needed <= 0) return real;
  var fills = shuffled(PLACEHOLDER_POOL)
    .filter(function(p) { return real.indexOf(p) === -1; })
    .slice(0, needed);
  return real.concat(fills);
}

// ── Q3 question pool ──────────────────────────────────────────────────────────
// One question is randomly selected on each new intake session.
// Format: { question: 'string', options: ['a', 'b', 'c', 'd'] }
// Options: 2-5 items, keep labels short (1-3 words).
// ── PASTE YOUR 20+ QUESTIONS BELOW ───────────────────────────────────────────
var HUNT_Q3_POOL = [
  { question: "Pick the text you'd rather receive at 2 a.m.?", options: ["You up? Also I'm outside your window.", "I'm horny.. also I'm outside your front door.", "We need to talk\u2026 also I'm outside your room door."] },
  { question: "Pick the text you'd rather receive at 2 a.m.?", options: ["You up?", "Get the lube I'm coming over.", "I'm horny and I got new rope."] },
  { question: "Would you rather?", options: ["Be edged for an hour?", "Have your hands tied while you watch?", "Be watched from afar?"] },
  { question: "Which would you rather receive in a message?", options: ["Dick pic?", "Hole pic?", "Feet?"] },
  { question: "Is Netflix and chill code for keep the TV on during?", options: ["Yes", "No"] },
  { question: "I'm asking for a friend, are you the type that:", options: ["Fall fast.", "Pretends not to fall while secretly catching feels"] },
  { question: "Where do you like to jack off?", options: ["Shower", "Bed", "Public"] },
  { question: "How many loads have you taken this week?", options: ["1-5", "5-10", "Lost count, but I need more"] },
  { question: "You more?", options: ["Hook up once, then ghost", "Open to hooking up again", "I bring my toothbrush"] },
  { question: "What would you do if I was standing looking over your shoulder?", options: ["Drop your pants and bend over", "Ask if that's a pickle in your pocket", "Grab the lube and ask what took you so long"] },
  { question: "What's the last thing you Googled at 3 a.m.?", options: ["Something sexy", "Why do I keep dreaming about teeth", "How to get rid of a body"] },
  { question: "Would you rather:", options: ["Have a surprise scene in public", "Cuddle on the couch", "Let's meet in public so you can find out"] },
  { question: "What's your go to flirty text?", options: ["You up?", "A single eggplant emoji followed by the squirt emoji", "Dick/hole/feet pic"] },
  { question: "How do you clean up after?", options: ["Shower", "Wipes", "Why clean up, I'm waiting for the next to get here"] },
  { question: "What's your favorite thing to put in your mouth?", options: ["Dick/Feet/Pits", "Hole", "Boba"] },
  { question: "What's your pick up line?", options: ["You lost? Because heaven is a long way from here", "Nice shoes", "I don't have a pick up line, I just stare"] },
  { question: "Would you rather fight:", options: ["One horse sized french bulldog", "100 french bull dog sized ducks"] },
  { question: "How many hook up apps are on your phone, right now?", options: ["Just this one", "A few - I like variety", "I don't keep track I have a number dispenser next to my bed"] },
  { question: "Can a hole in the wall just be a hole in the wall?", options: ["Yes", "No"] },
  { question: "If I was a person what would be the first thing you want to do to me?", options: ["Say Hi", "Ask my name", "Reach for your zipper"] },
  { question: "What's the one thing you'd take from my place when we hook up?", options: ["Nothing", "Socks", "Wallet"] },
  { question: "Rate your cuddle game:", options: ["Octopus", "Big Spoon", "Little Spoon", "Don't make eye contact"] },
  { question: "What's a secret you'd only share at 3 a.m. in bed with a stranger?", options: ["I still sleep with a stuffed animal", "Some commercials make me cry", "I can see hoes when I open my eyes"] },
  { question: "You accidentally send a dick pic to your boss, who doesn't have your number, do you:", options: ["Roll with in, he's hot", "Never respond back", "Toss your phone out the window"] },
  { question: "Where do you like to cum?", options: ["Inside", "Feet", "Parking lot"] },
  { question: "We're done do you:", options: ["Get dressed and leave", "Stay and cuddle", "Say your down to meet again as your walking out the door putting your shoes on"] },
  { question: "Are you looking for love?", options: ["Yes", "No", "Meh"] }
];
// ─────────────────────────────────────────────────────────────────────────────

// ── Router ────────────────────────────────────────────────────────────────────
var Hunter = {
  currentChar: null,
  selectedCard: null,

  navigate: function(screenId) {
    // Clear immersive mode and gallery mode on any navigation
    document.getElementById('phone').classList.remove('immersive');
    document.getElementById('screen-profile').classList.remove('gallery-mode');
    if (Hunter.selectedCard) {
      Hunter.selectedCard.classList.remove('selected');
      Hunter.selectedCard = null;
    }
    document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
    var next = document.getElementById('screen-' + screenId);
    if (next) next.classList.add('active');
  },

  goToProfile: function(charKey) {
    var char = browseProfiles.find(function(p) { return p.key === charKey; });
    if (!char) return;
    Hunter.currentChar = charKey;
    Hunter.renderProfile(char);
    Hunter.navigate('profile');
    history.pushState({ screen: 'profile' }, '');
    // Bounce drag handle on first ever profile open — localStorage key hunter.profile.firstopen
    initDragHandle();
  },

  renderProfile: function(char) {
    document.getElementById('profileName').textContent = char.name;
    document.getElementById('statDistance').textContent = char.stats.distance;
    document.getElementById('statAge').textContent = char.stats.age;
    document.getElementById('statHeight').textContent = char.stats.height;
    document.getElementById('statRole').textContent = char.stats.role;
    var roleIcons = { top: 'fa-solid fa-arrow-up', bottom: 'fa-solid fa-arrow-down', vers: 'fa-solid fa-arrows-up-down', side: 'fa-solid fa-arrows-left-right' };
    document.getElementById('statRoleIcon').className = roleIcons[(char.stats.role || '').toLowerCase()] || 'fa-solid fa-question';
    document.getElementById('profileLastActive').textContent = char.lastActive;
    document.getElementById('profileOnlineDot').className = 'online-dot' + (char.online ? '' : ' offline');

    // Vibe icon
    // vibeMap — 5 locked vibe options. Labels are final. Do not autocorrect.
    // 'Whatevers' is intentional regional dialect, not a typo.
    var vibeMap = {
      kink:      { cls: 'fa-solid fa-socks',      label: 'Kink' },
      whatevers: { cls: 'fa-solid fa-question',   label: 'Whatevers' },
      anon:    { cls: 'fa-solid fa-mask',   label: 'Anon' },
      romance:   { cls: 'fa-solid fa-wine-glass', label: 'Romance' },
      collab:    { cls: 'fa-solid fa-camera',     label: 'Collab' }
    };
    var vibeKey = (char.stats.vibe || 'whatevers').toLowerCase();
    var vibeIcon = document.getElementById('statVibeIcon');
    var vibeVal = document.getElementById('statVibe');
    var vibeItem = document.getElementById('statVibeItem');
    if (vibeIcon && vibeMap[vibeKey]) {
      vibeIcon.className = vibeMap[vibeKey].cls;
      vibeVal.textContent = vibeMap[vibeKey].label;
      vibeItem.style.display = '';
    } else if (vibeItem) {
      vibeItem.style.display = 'none';
    }

    var bioEl = document.getElementById('profileBio');
    bioEl.textContent = char.bio;
    bioEl.classList.remove('expanded');
    delete bioEl.dataset.rmInit;

    // Clone and replace heroArea to clear all previous event listeners
    var heroArea = document.getElementById('heroArea');
    var freshHero = heroArea.cloneNode(true);
    heroArea.parentNode.replaceChild(freshHero, heroArea);

    initCarousel('screen-profile', char);
    initAboutPanel();
    initMsgBtn(char);
  },

  goToChat: function(charKey) {
    var char = browseProfiles.find(function(p) { return p.key === charKey; });
    if (!char) return;
    Hunter.currentChar = charKey;
    Hunter.renderChat(char);
    Hunter.navigate('chat');
  },

  renderChat: function(char) {
    document.getElementById('chatName').textContent = char.name;
    document.getElementById('chatSubtitle').textContent = char.lastActive + ' · ' + char.stats.distance;
    document.getElementById('chatAvatar').src = char.avatar;
    document.getElementById('chatAvatarLink').dataset.char = char.key;

    var list = document.getElementById('messageList');
    list.innerHTML = '<div class="spacer"></div>';

    char.messages.forEach(function(m) {
      if (m.time) {
        var t = document.createElement('div');
        t.className = 'msg-time';
        t.textContent = m.time;
        list.appendChild(t);
        return;
      }
      var row = document.createElement('div');
      row.className = 'msg-row ' + m.from;
      var avDiv = document.createElement('div');
      avDiv.className = 'msg-av-sm';
      var avImg = document.createElement('img');
      avImg.src = m.from === 'them' ? char.avatar : char.myAvatar;
      avImg.loading = 'lazy';
      avDiv.appendChild(avImg);
      row.appendChild(avDiv);
      if (m.img) {
        var imgWrap = document.createElement('div');
        imgWrap.className = 'bubble-img';
        imgWrap.dataset.img = m.img;
        imgWrap.innerHTML = '<img src="' + m.img + '" alt="" loading="lazy">';
        row.appendChild(imgWrap);
      } else {
        var b = document.createElement('div');
        b.className = 'bubble ' + m.from;
        b.textContent = m.text;
        row.appendChild(b);
      }
      list.appendChild(row);
    });

    list.scrollTop = list.scrollHeight;
    initLightboxItems();
  }
};

// ── Hunt stack ────────────────────────────────────────────────────────────────
// B surfaces first — narrative priority.
// Add char keys here as new profiles are built. All keys must exist in hunter_profiles.json.
var huntStack = [];
var huntFront = 0;       // index of current front card
var huntStackCards = []; // DOM elements, index-parallel to huntStack

// Position configs, index 0 = front card.
// Tune y/rot/scale/opacity here to adjust the look.
var STACK_POSITIONS = [
  { x: 0,  y: 0,  rot: 0, scale: 1,    opacity: 1,    z: 10, events: true  },
  { x: 10, y: 20, rot: 0, scale: 0.97, opacity: 0.80, z: 9,  events: false },
  { x: 20, y: 36, rot: 0, scale: 0.94, opacity: 0.60, z: 8,  events: false },
  { x: 30, y: 50, rot: 0, scale: 0.91, opacity: 0.42, z: 7,  events: false }
];

function applyStackPositions() {
  var n = huntStack.length;
  huntStackCards.forEach(function(card, i) {
    var relPos = (i - huntFront + n) % n;
    var p = STACK_POSITIONS[relPos];
    if (!p) {
      card.style.opacity = '0';
      card.style.zIndex = '1';
      card.style.transform = 'translateY(36px) scale(0.91)';
      card.style.pointerEvents = 'none';
      return;
    }
    card.style.transform = 'translateX(' + p.x + 'px) translateY(' + p.y + 'px) rotate(' + p.rot + 'deg) scale(' + p.scale + ')';
    card.style.opacity = String(p.opacity);
    card.style.zIndex = String(p.z);
    card.style.pointerEvents = p.events ? 'auto' : 'none';
  });
}

function dismissFront(direction) {
  var n = huntStack.length;
  var card = huntStackCards[huntFront];
  if (!card) return;
  card.style.pointerEvents = 'none';

  var offY = direction === 'up' ? -700 : 700;
  var offRot = direction === 'up' ? -14 : 14;
  card.style.transition = 'transform 0.3s ease-in, opacity 0.26s ease-in';
  card.style.transform = 'translateY(' + offY + 'px) rotate(' + offRot + 'deg) scale(0.88)';
  card.style.opacity = '0';

  setTimeout(function() {
    huntFront = (huntFront + 1) % n;
    card.style.transition = 'none';
    card.style.transform = 'translateY(36px) scale(0.91)';
    card.style.opacity = '0';
    card.style.zIndex = '1';
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        huntStackCards.forEach(function(c) { c.style.transition = ''; });
        applyStackPositions();
      });
    });
  }, 330);
}

function showInterestPulse() {
  var card = huntStackCards[huntFront];
  if (!card) return;
  card.classList.remove('stack-interest');
  void card.offsetWidth;
  card.classList.add('stack-interest');
  setTimeout(function() { card.classList.remove('stack-interest'); }, 620);
}

function buildHuntStack() {
  var vibeAnswer = huntIntakeAnswers.q2 || localStorage.getItem('hunter.hunt.vibe') || null;
  var narrative = ['j', 'b'];
  var pool = browseProfiles.filter(function(p) {
    return narrative.indexOf(p.key) === -1;
  });
  var matched = vibeAnswer
    ? pool.filter(function(p) { return p.stats.vibe === vibeAnswer; })
    : [];
  if (matched.length < 3) {
    matched = pool;
  }
  var fills = shuffled(matched).slice(0, 3);
  var narrativeProfiles = browseProfiles.filter(function(p) {
    return narrative.indexOf(p.key) !== -1;
  });
  huntStack = shuffled(narrativeProfiles.concat(fills)).map(function(p) { return p.key; });
  huntFront = 0;
  initHuntStack();
}

function initHuntStack() {
  var container = document.getElementById('huntStackContainer');
  container.innerHTML = '';
  huntStackCards = [];

  huntStack.forEach(function(charKey) {
    var char = browseProfiles.find(function(p) { return p.key === charKey; });
    if (!char) return;

    var card = document.createElement('div');
    card.className = 'stack-card';
    card.dataset.char = charKey;

    var photos = buildPhotoArray(char.realPhotos, 1);
    var img = document.createElement('img');
    img.src = photos[0];
    img.alt = char.name;
    img.loading = 'lazy';
    card.appendChild(img);

    var dot = document.createElement('div');
    dot.className = 'stack-online-dot' + (char.online ? '' : ' offline');
    card.appendChild(dot);

    var info = document.createElement('div');
    info.className = 'stack-card-info';
    var metaParts = [char.stats.distance];
    if (char.stats.age) metaParts.push(char.stats.age);
    if (char.stats.role) metaParts.push(char.stats.role);
    info.innerHTML =
      '<div class="stack-card-name">' + char.name + '</div>' +
      '<div class="stack-card-meta">' + metaParts.join(' &middot; ') + '</div>';
    card.appendChild(info);

    container.appendChild(card);
    huntStackCards.push(card);
  });

  applyStackPositions();

  // ── Gesture handling ───────────────────────────────────────────────────────
  var touchStartY = 0, touchStartX = 0, touchStartTime = 0;
  var lastTapTime = 0;
  var SWIPE_MIN    = 40;
  var TAP_MAX_MOVE = 14;
  var DBL_TAP_MS   = 300;
  var dismissLocked = false;

  function tryDismiss(direction) {
    if (dismissLocked) return;
    dismissLocked = true;
    dismissFront(direction);
    setTimeout(function() { dismissLocked = false; }, 460);
  }

  container.addEventListener('touchstart', function(e) {
    touchStartY = e.touches[0].clientY;
    touchStartX = e.touches[0].clientX;
    touchStartTime = Date.now();
  }, { passive: true });

  container.addEventListener('touchend', function(e) {
    var dy = touchStartY - e.changedTouches[0].clientY;
    var dx = touchStartX - e.changedTouches[0].clientX;
    var absDy = Math.abs(dy);
    var absDx = Math.abs(dx);
    var elapsed = Date.now() - touchStartTime;

    if (absDy > SWIPE_MIN && absDy > absDx) {
      tryDismiss(dy > 0 ? 'up' : 'down');
      return;
    }

    if (absDy < TAP_MAX_MOVE && absDx < TAP_MAX_MOVE && elapsed < 300) {
      var now = Date.now();
      if (now - lastTapTime < DBL_TAP_MS && lastTapTime !== 0) {
        var charKey = huntStack[huntFront];
        var char = browseProfiles.find(function(p) { return p.key === charKey; });
        if (char && char.hasProfile) {
          Hunter.goToProfile(charKey);
        } else {
          showInterestPulse();
        }
        lastTapTime = 0;
      } else {
        showInterestPulse();
        lastTapTime = now;
      }
    }
  });

var mouseStartY = 0, mouseIsDown = false, mouseDragged = false;
  container.addEventListener('mousedown', function(e) {
    mouseStartY = e.clientY;
    mouseIsDown = true;
    mouseDragged = false;
  });
  document.addEventListener('mouseup', function(e) {
    if (!mouseIsDown) return;
    mouseIsDown = false;
    var dy = mouseStartY - e.clientY;
    if (Math.abs(dy) > SWIPE_MIN) {
      mouseDragged = true;
      tryDismiss(dy > 0 ? 'up' : 'down');
    }
  });
  container.addEventListener('click', function(e) {
    if (mouseDragged) { mouseDragged = false; return; }
    showInterestPulse();
  });
  container.addEventListener('dblclick', function(e) {
    var charKey = huntStack[huntFront];
    var char = browseProfiles.find(function(p) { return p.key === charKey; });
    if (char && char.hasProfile) {
      Hunter.goToProfile(charKey);
    } else {
      showInterestPulse();
    }
  });
  document.addEventListener('keydown', function(e) {
    var huntPanel = document.getElementById('panel-hunt');
    var browseScreen = document.getElementById('screen-browse');
    if (!huntPanel || !huntPanel.classList.contains('panel-active')) return;
    if (!browseScreen || !browseScreen.classList.contains('active')) return;
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      tryDismiss(e.key === 'ArrowUp' ? 'up' : 'down');
    }
  });
}

// ── Hunt intake ───────────────────────────────────────────────────────────────
var huntIntakeAnswers = {};

function initHuntIntake() {
  var intake = document.getElementById('huntIntake');
  if (localStorage.getItem('hunter.hunt.intake') === 'done') {
    intake.style.display = 'none';
    return;
  }

  var q3 = HUNT_Q3_POOL[Math.floor(Math.random() * HUNT_Q3_POOL.length)];
  document.getElementById('intakeQ3Text').textContent = q3.question;
  var q3opts = document.getElementById('intakeQ3Options');
  q3opts.innerHTML = '';
  q3.options.forEach(function(opt) {
    var el = document.createElement('div');
    el.className = 'intake-option';
    el.textContent = opt;
    el.dataset.val = opt.toLowerCase().replace(/[\s&]+/g, '-');
    q3opts.appendChild(el);
  });

  document.querySelectorAll('.intake-step').forEach(function(step, stepIdx) {
    step.querySelectorAll('.intake-option').forEach(function(opt) {
      opt.addEventListener('click', function() {
        if (step.dataset.answered) return;
        step.querySelectorAll('.intake-option').forEach(function(o) {
          o.classList.remove('selected');
        });
        opt.classList.add('selected');
        huntIntakeAnswers['q' + (stepIdx + 1)] = opt.dataset.val;
        if (stepIdx === 1) localStorage.setItem('hunter.hunt.vibe', opt.dataset.val);
        step.dataset.answered = 'true';
        setTimeout(function() { advanceIntakeStep(stepIdx); }, 380);
      });
    });
  });
}

function advanceIntakeStep(currentStep) {
  var steps = document.querySelectorAll('.intake-step');
  var dots  = document.querySelectorAll('.intake-dot');

  steps[currentStep].classList.remove('active');
  steps[currentStep].classList.add('exit');
  dots[currentStep].classList.remove('active');

  var nextStep = currentStep + 1;
  setTimeout(function() {
    steps[currentStep].classList.remove('exit');
    if (nextStep < steps.length) {
      steps[nextStep].classList.add('active');
      if (dots[nextStep]) dots[nextStep].classList.add('active');
    } else {
      localStorage.setItem('hunter.hunt.intake', 'done');
      var intake = document.getElementById('huntIntake');
      intake.style.pointerEvents = 'none';
      intake.style.transition = 'opacity 0.5s ease';
      intake.style.opacity = '0';
      setTimeout(function() { intake.style.display = 'none'; }, 540);
    buildHuntStack();
  }
  }, 260);
}

// ── Tab switching ─────────────────────────────────────────────────────────────
function initBrowseTabs() {
  var tabs     = document.querySelectorAll('#screen-browse .tab');
  var panels   = document.querySelectorAll('#screen-browse .browse-panel');

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      var panelId = tab.dataset.panel;
      tabs.forEach(function(t) { t.classList.remove('active'); });
      panels.forEach(function(p) { p.classList.remove('panel-active'); });
      tab.classList.add('active');
      var panel = document.getElementById(panelId);
      if (panel) panel.classList.add('panel-active');

      if (panelId === 'panel-hunt' && localStorage.getItem('hunter.hunt.intake') !== 'done') {
        var intake = document.getElementById('huntIntake');
        intake.style.display = '';
        intake.style.opacity = '1';
      }
    });
  });
}

// ── Carousel — builds photo navigation and lock card for the profile hero.
// Dot indicators on dominant hand side — one per public photo, active updates on navigate.
// Lock card renders as final swipe position when naughtyPhotos has content.
// Thumbnail rails and filmstrip removed. Gestures and gallery mode unchanged.
// Called from renderProfile() each time a profile is opened.
// atLock: boolean tracking whether the lock card is currently the active position.
//   true = lock card visible, heroImg opacity 0. false = real photo showing.
// showLock(): sets atLock true, hides heroImg, shows lock card, clears dot active state.
// setPhoto(i): sets atLock false, loads photos[i], restores heroImg, updates dots.
// heroArea is cloned fresh in renderProfile() before this runs — prevents duplicate listeners.
// _heroMouseUpHandler is assigned to window so the previous listener can be explicitly
//   removed before a new one is added. mouseup fires on document, not heroArea,
//   so it catches drag-release outside the element boundary.
function initCarousel(screenId, char) {
  var screen        = document.getElementById(screenId);
  var heroImg       = screen.querySelector('.hero-full img');
  var heroArea      = screen.querySelector('.hero-full');
  var dotsContainer = document.getElementById('photoDots');
  var lockCard      = document.getElementById('lockCard');
  var current       = 0;
  var atLock        = false;

  var realPhotos    = char.realPhotos || [];
  var naughtyPhotos = char.naughtyPhotos || [];
  var hasNaughty    = naughtyPhotos.length > 0;

  // Hero: first real photo or random placeholder
  var heroSrc = realPhotos.length > 0 ? realPhotos[0] : shuffled(PLACEHOLDER_POOL)[0];
  heroImg.src = heroSrc;
  heroImg.style.opacity = '';

  // Full photo set for gesture navigation
  var photos = realPhotos.length > 0 ? realPhotos : [heroSrc];

  // Reset lock card on every profile open
  lockCard.classList.remove('visible');

  // Build dots — one per public photo, only when more than one photo or lock exists
  dotsContainer.innerHTML = '';
  if (photos.length > 1 || hasNaughty) {
    photos.forEach(function(src, i) {
      var dot = document.createElement('div');
      dot.className = 'photo-dot' + (i === 0 ? ' active' : '');
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots(activeIdx) {
    dotsContainer.querySelectorAll('.photo-dot').forEach(function(dot, i) {
      dot.classList.toggle('active', i === activeIdx);
    });
  }

  function setPhoto(i) {
    current = i;
    atLock = false;
    heroImg.src = photos[i];
    heroImg.style.opacity = '';
    lockCard.classList.remove('visible');
    updateDots(i);
  }

  function showLock() {
    atLock = true;
    heroImg.style.opacity = '0';
    lockCard.classList.add('visible');
    updateDots(-1);
  }

  // Hero horizontal/vertical swipe — photo navigation
  var sx = 0, sy = 0;
  heroArea.addEventListener('touchstart', function(e) {
    sx = e.touches[0].clientX;
    sy = e.touches[0].clientY;
  }, { passive: true });
  heroArea.addEventListener('touchend', function(e) {
    var dx = sx - e.changedTouches[0].clientX;
    var dy = sy - e.changedTouches[0].clientY;
    var absDx = Math.abs(dx);
    var absDy = Math.abs(dy);
    if (absDx > 40 && absDx >= absDy) {
      if (dx > 0) {
        if (!atLock && current < photos.length - 1) { setPhoto(current + 1); e.preventDefault(); }
        else if (!atLock && hasNaughty) { showLock(); e.preventDefault(); }
      } else {
        if (atLock) { setPhoto(photos.length - 1); e.preventDefault(); }
        else if (current > 0) { setPhoto(current - 1); e.preventDefault(); }
      }
    } else if (absDy > 40 && absDy > absDx) {
      if (dy > 0) {
        if (!atLock && current < photos.length - 1) { setPhoto(current + 1); e.preventDefault(); }
        else if (!atLock && hasNaughty) { showLock(); e.preventDefault(); }
      } else {
        if (atLock) { setPhoto(photos.length - 1); e.preventDefault(); }
        else if (current > 0) { setPhoto(current - 1); e.preventDefault(); }
      }
    }
  });

  // Hero mouse drag — desktop photo navigation
  var heroMouseStartY = 0, heroMouseStartX = 0, heroIsDown = false, heroMouseDragged = false;
  if (window._heroMouseUpHandler) {
    document.removeEventListener('mouseup', window._heroMouseUpHandler);
  }
  heroArea.addEventListener('mousedown', function(e) {
    heroMouseStartY = e.clientY;
    heroMouseStartX = e.clientX;
    heroIsDown = true;
    heroMouseDragged = false;
  });
  window._heroMouseUpHandler = function(e) {
    if (!heroIsDown) return;
    heroIsDown = false;
    var dy = heroMouseStartY - e.clientY;
    var dx = heroMouseStartX - e.clientX;
    var absDy = Math.abs(dy);
    var absDx = Math.abs(dx);
    if (absDy > 40 && absDy > absDx) {
      heroMouseDragged = true;
      if (dy > 0) {
        if (!atLock && current < photos.length - 1) setPhoto(current + 1);
        else if (!atLock && hasNaughty) showLock();
      } else {
        if (atLock) setPhoto(photos.length - 1);
        else if (current > 0) setPhoto(current - 1);
      }
    } else if (absDx > 40 && absDx > absDy) {
      heroMouseDragged = true;
      if (dx > 0) {
        if (!atLock && current < photos.length - 1) setPhoto(current + 1);
        else if (!atLock && hasNaughty) showLock();
      } else {
        if (atLock) setPhoto(photos.length - 1);
        else if (current > 0) setPhoto(current - 1);
      }
    }
  };
  document.addEventListener('mouseup', window._heroMouseUpHandler);

  // Hero tap — toggle gallery mode (lock card captures clicks when visible)
  heroArea.addEventListener('click', function() {
    if (heroMouseDragged) { heroMouseDragged = false; return; }
    var profileScreen = document.getElementById('screen-profile');
    var phone = document.getElementById('phone');
    profileScreen.classList.toggle('gallery-mode');
    phone.classList.toggle('immersive');
  });

  // Scroll wheel — desktop photo navigation
  heroArea.addEventListener('wheel', function(e) {
    e.preventDefault();
    if (e.deltaY > 0) {
      if (!atLock && current < photos.length - 1) setPhoto(current + 1);
      else if (!atLock && hasNaughty) showLock();
    } else {
      if (atLock) setPhoto(photos.length - 1);
      else if (current > 0) setPhoto(current - 1);
    }
  }, { passive: false });
}

// ── Drag handle ───────────────────────────────────────────────────────────────
// Fires the bounce animation exactly once per device lifetime.
// localStorage key: hunter.profile.firstopen
// Called from goToProfile() after navigate() so slide-up is already in motion.
// Delay matches slide-up duration so bounce fires after screen settles.
function initDragHandle() {
  var handle = document.getElementById('dragHandle');
  if (!handle) return;
  if (!localStorage.getItem('hunter.profile.firstopen')) {
    localStorage.setItem('hunter.profile.firstopen', 'done');
    setTimeout(function() {
      handle.classList.add('bounce');
      setTimeout(function() { handle.classList.remove('bounce'); }, 700);
    }, 420);
  }
}

// ── About panel tap to expand ─────────────────────────────────────────────────
function initAboutPanel() {
  var panel = document.getElementById('aboutPanel');
  var bio = document.getElementById('profileBio');
  if (!panel || !bio) return;
  panel.onclick = function(e) {
    e.stopPropagation();
    bio.classList.toggle('expanded');
  };
}

// ── Message button ────────────────────────────────────────────────────────────
function initMsgBtn(char) {
  var btn = document.getElementById('profileMsgBtn');
  if (!btn) return;
  if (char.canMessage) {
    btn.classList.remove('disabled');
    btn.onclick = function(e) {
      e.stopPropagation();
      Hunter.goToChat(char.key);
    };
  } else {
    btn.classList.add('disabled');
    btn.onclick = null;
  }
}

// ── Browse cards ──────────────────────────────────────────────────────────────
// initBrowseCards — fetches profiles.json and renders the browse grid dynamically.
// Initial batch: 6 cards. Next batch loads as user approaches end of scroll.
// All profiles including narrative characters live in hunter_profiles.json.
var browseProfiles = [];
var browseOffset = 0;
var BROWSE_BATCH = 6;

function renderBrowseBatch() {
  var grid = document.getElementById('browseGrid');
  var batch = browseProfiles.slice(browseOffset, browseOffset + BROWSE_BATCH);
  batch.forEach(function(profile) {
    var card = document.createElement('div');
    card.className = 'grid-card';
    card.dataset.key = profile.key;

    var img = document.createElement('img');
    img.src = profile.avatar;
    img.alt = profile.name;
    img.loading = 'lazy';
    card.appendChild(img);

    var dot = document.createElement('div');
    dot.className = 'grid-dot ' + (profile.online ? 'online' : 'offline');
    card.appendChild(dot);

    var info = document.createElement('div');
    info.className = 'grid-info';
    info.innerHTML =
      '<div class="grid-name">' + profile.name + '</div>' +
      '<div class="grid-meta">' + profile.stats.distance + ' &middot; ' + profile.stats.age + ' &middot; ' + profile.stats.role + '</div>';
    card.appendChild(info);

    card.addEventListener('click', function() {
      Hunter.goToProfile(profile.key);
    });

    grid.appendChild(card);
  });
  browseOffset += batch.length;
}

function initBrowseCards() {
  fetch('hunter_profiles.json')
    .then(function(res) { return res.json(); })
    .then(function(data) {
      browseProfiles = data;
      renderBrowseBatch();
      var panel = document.getElementById('panel-browse');
      panel.addEventListener('scroll', function() {
        if (panel.scrollTop + panel.clientHeight >= panel.scrollHeight - 100) {
          if (browseOffset < browseProfiles.length) {
            renderBrowseBatch();
          }
        }
      });
    })
    .catch(function(err) {
      console.error('profiles.json failed to load:', err);
    });
}

// ── Back buttons ──────────────────────────────────────────────────────────────
function initBackButtons() {
  document.querySelectorAll('.profile-back').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      Hunter.navigate('browse');
    });
  });
  document.getElementById('chatBackBtn').addEventListener('click', function() {
    Hunter.currentChar ? Hunter.navigate('profile') : Hunter.navigate('browse');
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      var profileScreen = document.getElementById('screen-profile');
      if (profileScreen && profileScreen.classList.contains('active')) {
        Hunter.navigate('browse');
      }
    }
  });
}

// ── Chat avatar tap ───────────────────────────────────────────────────────────
function initChatAvatarTap() {
  document.getElementById('chatAvatarLink').addEventListener('click', function() {
    var charKey = this.dataset.char;
    if (charKey) Hunter.goToProfile(charKey);
  });
}

// ── Lightbox ──────────────────────────────────────────────────────────────────
function initLightboxItems() {
  document.querySelectorAll('.bubble-img').forEach(function(el) {
    if (el.dataset.lbInit) return;
    el.dataset.lbInit = 'true';
    el.addEventListener('click', function() {
      document.getElementById('lightboxImg').src = el.dataset.img || el.querySelector('img').src;
      document.getElementById('lightbox').classList.add('open');
    });
  });
}

// ── Clock ─────────────────────────────────────────────────────────────────────
function updateClock() {
  var now = new Date();
  var h = now.getHours(), m = now.getMinutes(), ap = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  m = m < 10 ? '0' + m : m;
  document.querySelectorAll('.status-time').forEach(function(el) {
    el.textContent = h + ':' + m + ' ' + ap;
  });
}

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  updateClock();
  setInterval(updateClock, 10000);

  setTimeout(function() {
    document.getElementById('loadingScreen').classList.add('done');
  }, 3600);

  initBrowseCards();
  initBackButtons();
  initChatAvatarTap();
  initBrowseTabs();
  if (localStorage.getItem('hunter.hunt.intake') === 'done') {
  buildHuntStack();
} else {
  initHuntStack();
}
  initHuntIntake();

  document.getElementById('lightbox').addEventListener('click', function() {
    document.getElementById('lightbox').classList.remove('open');
  });

  Hunter.navigate('browse');
  window.addEventListener('popstate', function(e) {
    var profileScreen = document.getElementById('screen-profile');
    if (profileScreen && profileScreen.classList.contains('active')) {
      Hunter.navigate('browse');
    }
  });
});