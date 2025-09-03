// Grab elements
const rainVideo = document.querySelector(".rain-v");
const windVideo = document.querySelector(".wind-v");
const birdVideo = document.querySelector(".bird-v");
const waterVideo = document.querySelector(".water-v");
const meditationVideo = document.querySelector(".meditation-v");
const waterRemoveVideo = document.querySelector(".water_remove-v");

const rainAudio = document.querySelector(".rain-a");
const windAudio = document.querySelector(".wind-a");
const birdAudio = document.querySelector(".bird-a");
const waterAudio = document.querySelector(".water-a");
const meditationAudio = document.querySelector(".meditation-a");
const waterRemoveAudio = document.querySelector(".water_remove-a");


const rainBtn = document.querySelector(".button-1");
const windBtn = document.querySelector(".button-2");
const birdBtn = document.querySelector(".button-5");
const waterBtn = document.querySelector(".button-6");
const meditationBtn = document.querySelector(".button-7");
const waterRemoveBtn = document.querySelector(".button-8");

const muteBtn = document.querySelector(".button-3");    // mute icon
const unmuteBtn = document.querySelector(".button-4");  // unmute icon

// Helpers
function applyMutedUI(isMuted) {
    muteBtn.style.display = isMuted ? "block" : "none";
    unmuteBtn.style.display = isMuted ? "none" : "block";
}

// Helpers (update mute function)
function setMuted(isMuted) {
    rainAudio.muted = isMuted;
    windAudio.muted = isMuted;
    birdAudio.muted = isMuted;
    waterAudio.muted = isMuted;
    meditationAudio.muted = isMuted;
    waterRemoveAudio.muted = isMuted;   // NEW

    applyMutedUI(isMuted);

    if (!isMuted) {
        if (rainVideo.style.display !== "none") rainAudio.play();
        else if (windVideo.style.display !== "none") windAudio.play();
        else if (birdVideo.style.display !== "none") birdAudio.play();
        else if (waterVideo.style.display !== "none") waterAudio.play();
        else if (meditationVideo.style.display !== "none") meditationAudio.play();
        else if (waterRemoveVideo.style.display !== "none") waterRemoveAudio.play();  // NEW
    }
}

function resetBtnColors() {
    rainBtn.style.backgroundColor = "";
    windBtn.style.backgroundColor = "";
    birdBtn.style.backgroundColor = "";
    waterBtn.style.backgroundColor = "";
    meditationBtn.style.backgroundColor = "";
    waterRemoveBtn.style.backgroundColor = ""; // NEW
}

//TITLE
function showTitle(text) {
    const title = document.getElementById("video-title");
    title.textContent = text;

    // Restart animation
    title.classList.remove("show");
    void title.offsetWidth; 
    title.classList.add("show");
}



// Modes
function playRain() {
    rainVideo.style.display = "block";
    windVideo.style.display = "none";
    birdVideo.style.display = "none";
    waterVideo.style.display = "none";
    meditationVideo.style.display = "none";
    waterRemoveVideo.style.display = "none";

    rainVideo.play();
    rainAudio.play();

    windVideo.pause(); windAudio.pause();
    birdVideo.pause(); birdAudio.pause();
    waterVideo.pause(); waterAudio.pause();
    meditationVideo.pause(); meditationAudio.pause();
    waterRemoveVideo.pause(); waterRemoveAudio.pause();

    windVideo.currentTime = windAudio.currentTime = 0;
    birdVideo.currentTime = birdAudio.currentTime = 0;
    waterVideo.currentTime = waterAudio.currentTime = 0;
    meditationVideo.currentTime = meditationAudio.currentTime = 0;
    waterRemoveVideo.currentTime = waterRemoveAudio.currentTime = 0;

    resetBtnColors();
    rainBtn.style.backgroundColor = "white";
    showTitle("RAIN");
    
}

function playWind() {
    windVideo.style.display = "block";
    rainVideo.style.display = "none";
    birdVideo.style.display = "none";
    waterVideo.style.display = "none";
    meditationVideo.style.display = "none";
    waterRemoveVideo.style.display = "none";

    windVideo.play();
    windAudio.play();

    rainVideo.pause(); rainAudio.pause();
    birdVideo.pause(); birdAudio.pause();
    waterVideo.pause(); waterAudio.pause();
    meditationVideo.pause(); meditationAudio.pause();
    waterRemoveVideo.pause(); waterRemoveAudio.pause();


    rainVideo.currentTime = rainAudio.currentTime = 0;
    birdVideo.currentTime = birdAudio.currentTime = 0;
    waterVideo.currentTime = waterAudio.currentTime = 0;
    meditationVideo.currentTime = meditationAudio.currentTime = 0;
    waterRemoveVideo.currentTime = waterRemoveAudio.currentTime = 0;

    resetBtnColors();
    windBtn.style.backgroundColor = "white";
    showTitle("WIND");
}

function playBird() {
    birdVideo.style.display = "block";
    rainVideo.style.display = "none";
    windVideo.style.display = "none";
    waterVideo.style.display = "none";
    meditationVideo.style.display = "none";
    waterRemoveVideo.style.display = "none";

    birdVideo.play();
    birdAudio.play();

    rainVideo.pause(); rainAudio.pause();
    windVideo.pause(); windAudio.pause();
    waterVideo.pause(); waterAudio.pause();
    meditationVideo.pause(); meditationAudio.pause();
    waterRemoveVideo.pause(); waterRemoveAudio.pause();

    rainVideo.currentTime = rainAudio.currentTime = 0;
    windVideo.currentTime = windAudio.currentTime = 0;
    waterVideo.currentTime = waterAudio.currentTime = 0;
    meditationVideo.currentTime = meditationAudio.currentTime = 0;
    waterRemoveVideo.currentTime = waterRemoveAudio.currentTime = 0;

    resetBtnColors();
    birdBtn.style.backgroundColor = "white";
    showTitle("BIRD");
}

function playWater() {
    waterVideo.style.display = "block";
    rainVideo.style.display = "none";
    windVideo.style.display = "none";
    birdVideo.style.display = "none";
    meditationVideo.style.display = "none";
    waterRemoveVideo.style.display = "none";

    waterVideo.play();
    waterAudio.play();

    rainVideo.pause(); rainAudio.pause();
    windVideo.pause(); windAudio.pause();
    birdVideo.pause(); birdAudio.pause();
    meditationVideo.pause(); meditationAudio.pause();
    waterRemoveVideo.pause(); waterRemoveAudio.pause();

    rainVideo.currentTime = rainAudio.currentTime = 0;
    windVideo.currentTime = windAudio.currentTime = 0;
    birdVideo.currentTime = birdAudio.currentTime = 0;
    meditationVideo.currentTime = meditationAudio.currentTime = 0;
    waterRemoveVideo.currentTime = waterRemoveAudio.currentTime = 0;

    resetBtnColors();
    waterBtn.style.backgroundColor = "white";
    showTitle("WATER");
}

function playMeditation() {
    meditationVideo.style.display = "block";
    rainVideo.style.display = "none";
    windVideo.style.display = "none";
    birdVideo.style.display = "none";
    waterVideo.style.display = "none";
    waterRemoveVideo.style.display = "none";

    meditationVideo.play();
    meditationAudio.play();

    rainVideo.pause(); rainAudio.pause();
    windVideo.pause(); windAudio.pause();
    birdVideo.pause(); birdAudio.pause();
    waterVideo.pause(); waterAudio.pause();
    waterRemoveVideo.pause(); waterRemoveAudio.pause();

    rainVideo.currentTime = rainAudio.currentTime = 0;
    windVideo.currentTime = windAudio.currentTime = 0;
    birdVideo.currentTime = birdAudio.currentTime = 0;
    waterVideo.currentTime = waterAudio.currentTime = 0;
    waterRemoveVideo.currentTime = waterRemoveAudio.currentTime = 0;

    resetBtnColors();
    meditationBtn.style.backgroundColor = "white";
    showTitle("MEDITATION");
}

// New mode
function playWaterRemove() {
    waterRemoveVideo.style.display = "block";
    rainVideo.style.display = "none";
    windVideo.style.display = "none";
    birdVideo.style.display = "none";
    waterVideo.style.display = "none";
    meditationVideo.style.display = "none";

    waterRemoveVideo.play();
    waterRemoveAudio.play();

    rainVideo.pause(); rainAudio.pause();
    windVideo.pause(); windAudio.pause();
    birdVideo.pause(); birdAudio.pause();
    waterVideo.pause(); waterAudio.pause();
    meditationVideo.pause(); meditationAudio.pause();

    rainVideo.currentTime = rainAudio.currentTime = 0;
    windVideo.currentTime = windAudio.currentTime = 0;
    birdVideo.currentTime = birdAudio.currentTime = 0;
    waterVideo.currentTime = waterAudio.currentTime = 0;
    meditationVideo.currentTime = meditationAudio.currentTime = 0;

    resetBtnColors();
    waterRemoveBtn.style.backgroundColor = "#5cb5e1a4";
    showTitle("WATER REMOVE");
}

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        e.preventDefault(); // stops page scroll
        if (rainAudio.muted) {
            setMuted(false); // unmute
        } else {
            setMuted(true);  // mute
        }
    }

    // Number row + Numpad support
    switch (e.code) {
        case "Digit1":
        case "Numpad1":
            playRain();
            break;
        case "Digit2":
        case "Numpad2":
            playWind();
            break;
        case "Digit3":
        case "Numpad3":
            playBird();
            break;
        case "Digit4":
        case "Numpad4":
            playWater();
            break;
        case "Digit5":
        case "Numpad5":
            playMeditation();
            break;
        case "Digit6":
        case "Numpad6": playWaterRemove(); break;  // NEW
    }
});

// Button events
rainBtn.addEventListener("click", playRain);
windBtn.addEventListener("click", playWind);
birdBtn.addEventListener("click", playBird);
waterBtn.addEventListener("click", playWater);
meditationBtn.addEventListener("click", playMeditation);
waterRemoveBtn.addEventListener("click", playWaterRemove); // NEW

// Mute / Unmute
muteBtn.addEventListener("click", () => setMuted(false));
unmuteBtn.addEventListener("click", () => setMuted(true));

// Start: rain playing, muted
window.addEventListener("load", () => {
    playRain();
    setMuted(true);
});

//SECRET VIDEO 
//SECRET VIDEO 
/*------------------------------------------------------------------------*/
let clickCount = 0;
let secretUnlocked = false;
const SECRET_CODE = "hi";

const secretBox = document.getElementById("secret-box");
const input = document.getElementById("secret-input");
const submitBtn = document.getElementById("secret-submit");
const secretVideo = document.querySelector(".secret-v");

document.querySelectorAll("video").forEach(video => {
    video.addEventListener("click", () => {
        if (secretUnlocked) return;

        clickCount++;

        if (clickCount === 2) {
            secretBox.style.display = "block"; // show inside same div
            input.value = "";
            input.focus();
        }
    });
});

submitBtn.addEventListener("click", checkSecret);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkSecret();
});

function checkSecret() {
    if (input.value === SECRET_CODE) {
        unlockSecretVideo();
        secretBox.style.display = "none";
    } else {
        clickCount = 0;
        secretBox.style.display = "none";
    }
}

function unlockSecretVideo() {
    secretUnlocked = true;
    clickCount = 0;

    secretVideo.src = "ASSESTS/secret.mp4";
    secretVideo.style.display = "block";

    document.querySelectorAll("video").forEach(v => {
        if (v !== secretVideo) {
            v.pause();
            v.style.display = "none";
        }
    });
    document.querySelectorAll("audio").forEach(a => a.pause());

    secretVideo.play();
    showTitle("SECRET");

}

// Array of all normal video buttons
const normalVideoButtons = [rainBtn, windBtn, birdBtn, waterBtn, meditationBtn, waterRemoveBtn];

// Add a listener to hide the secret video when any normal button is clicked
normalVideoButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (secretUnlocked) {
            secretVideo.pause();
            secretVideo.style.display = "none";
            secretUnlocked = false;

             resetBtnColors();
        }
    });
});
