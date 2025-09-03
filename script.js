// ==================================================
// 1. ELEMENT SELECTION
// ==================================================

// Videos
const rainVideo = document.querySelector(".rain-v");
const windVideo = document.querySelector(".wind-v");
const birdVideo = document.querySelector(".bird-v");
const waterVideo = document.querySelector(".water-v");
const meditationVideo = document.querySelector(".meditation-v");
const waterRemoveVideo = document.querySelector(".water_remove-v");
const secretVideo = document.querySelector(".secret-v"); // used only in secret section

// Audios
const rainAudio = document.querySelector(".rain-a");
const windAudio = document.querySelector(".wind-a");
const birdAudio = document.querySelector(".bird-a");
const waterAudio = document.querySelector(".water-a");
const meditationAudio = document.querySelector(".meditation-a");
const waterRemoveAudio = document.querySelector(".water_remove-a");

// Buttons
const rainBtn = document.querySelector(".button-1");
const windBtn = document.querySelector(".button-2");
const birdBtn = document.querySelector(".button-5");
const waterBtn = document.querySelector(".button-6");
const meditationBtn = document.querySelector(".button-7");
const waterRemoveBtn = document.querySelector(".button-8");

const muteBtn = document.querySelector(".button-3");    // mute icon
const unmuteBtn = document.querySelector(".button-4");  // unmute icon

// Title
const title = document.getElementById("video-title");


// ==================================================
// 2. MODE CONFIGURATION
// Define all normal modes (video, audio, button, title, highlight color)
// ==================================================
const modes = {
    rain:        { video: rainVideo, audio: rainAudio, btn: rainBtn, title: "RAIN",          color: "white" },
    wind:        { video: windVideo, audio: windAudio, btn: windBtn, title: "WIND",          color: "white" },
    bird:        { video: birdVideo, audio: birdAudio, btn: birdBtn, title: "BIRD",          color: "white" },
    water:       { video: waterVideo, audio: waterAudio, btn: waterBtn, title: "WATER",      color: "white" },
    meditation:  { video: meditationVideo, audio: meditationAudio, btn: meditationBtn, title: "MEDITATION", color: "white" },
    waterRemove: { video: waterRemoveVideo, audio: waterRemoveAudio, btn: waterRemoveBtn, title: "WATER REMOVER", color: "#5cb5e1a4" }

    // 👉 ADD NEW MODE HERE
    // newMode: { video: newVideo, audio: newAudio, btn: newBtn, title: "NEWMODE", color: "white" }
};


// ==================================================
// 3. HELPER FUNCTIONS
// ==================================================


// Reset all button highlight colors
function resetBtnColors() {
    Object.values(modes).forEach(({ btn }) => (btn.style.backgroundColor = ""));
}

// Show animated title
function showTitle(text) {
    title.textContent = text;
    title.classList.remove("show");
    void title.offsetWidth; // reflow to restart animation
    title.classList.add("show");
}

// Toggle mute/unmute button UI
function applyMutedUI(isMuted) {
    muteBtn.style.display = isMuted ? "block" : "none";
    unmuteBtn.style.display = isMuted ? "none" : "block";
}

// ==================================================
// FIXED: Mute/unmute (secret-aware)
// - Normal modes: pause/play audio
// - Secret video: never pauses, only mute/unmute
// ==================================================
function setMuted(isMuted) {
    // Case 1: Secret video is active → only mute/unmute it
    if (secretUnlocked && secretVideo && secretVideo.style.display !== "none") {
        secretVideo.muted = isMuted;
        applyMutedUI(isMuted);
        return;
    }

    // Case 2: Normal modes
    Object.values(modes).forEach(({ video, audio }) => {
        audio.muted = isMuted;
        if (isMuted) {
            audio.pause();
        } else if (video.style.display !== "none") {
            // Only resume the currently visible mode’s audio
            audio.play();
        }
    });

    // Update mute/unmute button UI
    applyMutedUI(isMuted);
}



// ==================================================
// 4. CORE FUNCTION - PLAY A MODE
// ==================================================
function playMode(modeKey) {
    // Stop and hide all modes
    Object.values(modes).forEach(({ video, audio }) => {
        video.style.display = "none";
        video.pause();
        audio.pause();
        video.currentTime = 0;
        audio.currentTime = 0;
    });

    // Reset button highlights
    resetBtnColors();

    // Get selected mode config
    const { video, audio, btn, title, color } = modes[modeKey];

    // Show + play selected mode
    video.style.display = "block";
    video.play();
    audio.play();

    // Highlight button + show title
    btn.style.backgroundColor = color;
    showTitle(title);
}


// ==================================================
// 5. EVENT LISTENERS
// ==================================================

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        e.preventDefault();

        // If secret video is active → toggle only it
        if (secretUnlocked && secretVideo && secretVideo.style.display !== "none") {
            secretVideo.muted = !secretVideo.muted;
            applyMutedUI(secretVideo.muted);
        } else {
            // Otherwise → normal mute/unmute
            setMuted(!rainAudio.muted);
        }
    }

    // Number keys → switch modes
    let modeToPlay = null;
    switch (e.code) {
        case "Digit1": case "Numpad1": modeToPlay = "rain"; break;
        case "Digit2": case "Numpad2": modeToPlay = "wind"; break;
        case "Digit3": case "Numpad3": modeToPlay = "bird"; break;
        case "Digit4": case "Numpad4": modeToPlay = "water"; break;
        case "Digit5": case "Numpad5": modeToPlay = "meditation"; break;
        case "Digit6": case "Numpad6": modeToPlay = "waterRemove"; break;
        // 👉 ADD NEW KEY HERE
        // case "Digit7": modeToPlay = "newMode"; break;
    }

    if (modeToPlay) {
        // If secret was active → transfer mute state
        if (secretUnlocked && secretVideo && secretVideo.style.display !== "none") {
            const wasMuted = secretVideo.muted;

            secretVideo.pause();
            secretVideo.style.display = "none";
            secretUnlocked = false;

            // Apply same mute state to normal audios
            setMuted(wasMuted);
        }
        playMode(modeToPlay);
    }
});

// Button clicks
function handleModeButton(mode) {
    // If secret was active → transfer mute state
    if (secretUnlocked && secretVideo && secretVideo.style.display !== "none") {
        const wasMuted = secretVideo.muted;

        secretVideo.pause();
        secretVideo.style.display = "none";
        secretUnlocked = false;

        // Apply same mute state to normal audios
        setMuted(wasMuted);
    }
    playMode(mode);
}

rainBtn.addEventListener("click", () => handleModeButton("rain"));
windBtn.addEventListener("click", () => handleModeButton("wind"));
birdBtn.addEventListener("click", () => handleModeButton("bird"));
waterBtn.addEventListener("click", () => handleModeButton("water"));
meditationBtn.addEventListener("click", () => handleModeButton("meditation"));
waterRemoveBtn.addEventListener("click", () => handleModeButton("waterRemove"));

// 👉 ADD NEW BUTTON EVENT HERE
// newBtn.addEventListener("click", () => handleModeButton("newMode"));

// Mute/unmute buttons
muteBtn.addEventListener("click", () => {
    if (secretUnlocked && secretVideo && secretVideo.style.display !== "none") {
        secretVideo.muted = false;
        applyMutedUI(false);
    } else {
        setMuted(false);
    }
});

unmuteBtn.addEventListener("click", () => {
    if (secretUnlocked && secretVideo && secretVideo.style.display !== "none") {
        secretVideo.muted = true;
        applyMutedUI(true);
    } else {
        setMuted(true);
    }
});
// ==================================================
// 6. INITIAL SETUP
// ==================================================
window.addEventListener("load", () => {
    playMode("rain");   // default mode
    setMuted(true);     // start muted
});


// ==================================================
// 7. SECRET VIDEO LOGIC (ISOLATED AT BOTTOM)
// ==================================================
let clickCount = 0;
let secretUnlocked = false;
const SECRET_CODE = "edits";
const secretBox = document.getElementById("secret-box");
const input = document.getElementById("secret-input");
const submitBtn = document.getElementById("secret-submit");

// Detect 11 clicks → show input box
document.querySelectorAll("video").forEach(video => {
    video.addEventListener("click", () => {
        if (secretUnlocked) return;
        clickCount++;
        if (clickCount === 1) {
            secretBox.style.display = "block";
            input.value = "";
            input.focus();
        }
    });
});

// Input handlers
submitBtn.addEventListener("click", checkSecret);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkSecret();
});

// Verify secret code
function checkSecret() {
    if (input.value === SECRET_CODE) {
        unlockSecretVideo();
        secretBox.style.display = "none";
    } else {
        clickCount = 0;
        secretBox.style.display = "none";
    }
}

// Device-specific file selection
function getSecretVideoForDevice() {
    const width = window.innerWidth;
    if (width <= 768) return "ASSESTS/secret_mobile.mp4"; // mobile
    if (width <= 1024) return "ASSESTS/secret.mp4";       // tablet
    return "ASSESTS/secret.mp4";                          // desktop
}

// Unlock + play secret video
function unlockSecretVideo() {
  secretUnlocked = true;
  clickCount = 0;

  // Load correct file
  secretVideo.src = getSecretVideoForDevice();
  secretVideo.style.display = "block";
  secretVideo.style.zIndex = -1;

  // Stop ALL other media (videos + audios) and reset their audio positions
  document.querySelectorAll("video").forEach(v => { if (v !== secretVideo) v.pause(); });
  document.querySelectorAll("audio").forEach(a => { a.pause(); a.currentTime = 0; });

  // Make sure the secret video can be heard
  secretVideo.muted = false; // important
  applyMutedUI(false);       // show "unmute" icon state

  resetBtnColors();

  if (window.innerWidth <= 768) {
    // Mobile: keep video visible but do not play audio (your design)
    showTitle("PLEASE ROTATE");
  } else {
    // Desktop/Tablet: play with audio
    showTitle("ENJOY!");
    // Try to start (must be within a user gesture; this is called from the unlock button click)
    secretVideo.play().catch(() => {/* if blocked, user can tap video to start */});
  }
}


// Exit secret mode if any normal button clicked
[rainBtn, windBtn, birdBtn, waterBtn, meditationBtn, waterRemoveBtn].forEach(btn => {
    btn.addEventListener("click", () => {
        if (secretUnlocked) {
            secretVideo.pause();
            secretVideo.style.display = "none";
            secretUnlocked = false;
        }
    });
});
