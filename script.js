// Grab elements
const rainVideo = document.querySelector(".rain-v");
const windVideo = document.querySelector(".wind-v");
const birdVideo = document.querySelector(".bird-v");
const waterVideo = document.querySelector(".water-v");
const meditationVideo = document.querySelector(".meditation-v");

const rainAudio = document.querySelector(".rain-a");
const windAudio = document.querySelector(".wind-a");
const birdAudio = document.querySelector(".bird-a");
const waterAudio = document.querySelector(".water-a");
const meditationAudio = document.querySelector(".meditation-a");

const rainBtn = document.querySelector(".button-1");
const windBtn = document.querySelector(".button-2");
const birdBtn = document.querySelector(".button-5");
const waterBtn = document.querySelector(".button-6");
const meditationBtn = document.querySelector(".button-7");

const muteBtn = document.querySelector(".button-3");    // mute icon
const unmuteBtn = document.querySelector(".button-4");  // unmute icon

// Helpers
function applyMutedUI(isMuted) {
    muteBtn.style.display = isMuted ? "block" : "none";
    unmuteBtn.style.display = isMuted ? "none" : "block";
}

function setMuted(isMuted) {
    rainAudio.muted = isMuted;
    windAudio.muted = isMuted;
    birdAudio.muted = isMuted;
    waterAudio.muted = isMuted;
    meditationAudio.muted = isMuted;

    applyMutedUI(isMuted);

    if (!isMuted) {
        if (rainVideo.style.display !== "none") rainAudio.play();
        else if (windVideo.style.display !== "none") windAudio.play();
        else if (birdVideo.style.display !== "none") birdAudio.play();
        else if (waterVideo.style.display !== "none") waterAudio.play();
        else meditationAudio.play();
    }
}

function resetBtnColors() {
    rainBtn.style.backgroundColor = "";
    windBtn.style.backgroundColor = "";
    birdBtn.style.backgroundColor = "";
    waterBtn.style.backgroundColor = "";
    meditationBtn.style.backgroundColor = "";
}

// Modes
function playRain() {
    rainVideo.style.display = "block";
    windVideo.style.display = "none";
    birdVideo.style.display = "none";
    waterVideo.style.display = "none";
    meditationVideo.style.display = "none";

    rainVideo.play();
    rainAudio.play();

    windVideo.pause(); windAudio.pause();
    birdVideo.pause(); birdAudio.pause();
    waterVideo.pause(); waterAudio.pause();
    meditationVideo.pause(); meditationAudio.pause();

    windVideo.currentTime = windAudio.currentTime = 0;
    birdVideo.currentTime = birdAudio.currentTime = 0;
    waterVideo.currentTime = waterAudio.currentTime = 0;
    meditationVideo.currentTime = meditationAudio.currentTime = 0;

    resetBtnColors();
    rainBtn.style.backgroundColor = "white";
}

function playWind() {
    windVideo.style.display = "block";
    rainVideo.style.display = "none";
    birdVideo.style.display = "none";
    waterVideo.style.display = "none";
    meditationVideo.style.display = "none";

    windVideo.play();
    windAudio.play();

    rainVideo.pause(); rainAudio.pause();
    birdVideo.pause(); birdAudio.pause();
    waterVideo.pause(); waterAudio.pause();
    meditationVideo.pause(); meditationAudio.pause();

    rainVideo.currentTime = rainAudio.currentTime = 0;
    birdVideo.currentTime = birdAudio.currentTime = 0;
    waterVideo.currentTime = waterAudio.currentTime = 0;
    meditationVideo.currentTime = meditationAudio.currentTime = 0;

    resetBtnColors();
    windBtn.style.backgroundColor = "white";
}

function playBird() {
    birdVideo.style.display = "block";
    rainVideo.style.display = "none";
    windVideo.style.display = "none";
    waterVideo.style.display = "none";
    meditationVideo.style.display = "none";

    birdVideo.play();
    birdAudio.play();

    rainVideo.pause(); rainAudio.pause();
    windVideo.pause(); windAudio.pause();
    waterVideo.pause(); waterAudio.pause();
    meditationVideo.pause(); meditationAudio.pause();

    rainVideo.currentTime = rainAudio.currentTime = 0;
    windVideo.currentTime = windAudio.currentTime = 0;
    waterVideo.currentTime = waterAudio.currentTime = 0;
    meditationVideo.currentTime = meditationAudio.currentTime = 0;

    resetBtnColors();
    birdBtn.style.backgroundColor = "white";
}

function playWater() {
    waterVideo.style.display = "block";
    rainVideo.style.display = "none";
    windVideo.style.display = "none";
    birdVideo.style.display = "none";
    meditationVideo.style.display = "none";

    waterVideo.play();
    waterAudio.play();

    rainVideo.pause(); rainAudio.pause();
    windVideo.pause(); windAudio.pause();
    birdVideo.pause(); birdAudio.pause();
    meditationVideo.pause(); meditationAudio.pause();

    rainVideo.currentTime = rainAudio.currentTime = 0;
    windVideo.currentTime = windAudio.currentTime = 0;
    birdVideo.currentTime = birdAudio.currentTime = 0;
    meditationVideo.currentTime = meditationAudio.currentTime = 0;

    resetBtnColors();
    waterBtn.style.backgroundColor = "white";
}

function playMeditation() {
    meditationVideo.style.display = "block";
    rainVideo.style.display = "none";
    windVideo.style.display = "none";
    birdVideo.style.display = "none";
    waterVideo.style.display = "none";

    meditationVideo.play();
    meditationAudio.play();

    rainVideo.pause(); rainAudio.pause();
    windVideo.pause(); windAudio.pause();
    birdVideo.pause(); birdAudio.pause();
    waterVideo.pause(); waterAudio.pause();

    rainVideo.currentTime = rainAudio.currentTime = 0;
    windVideo.currentTime = windAudio.currentTime = 0;
    birdVideo.currentTime = birdAudio.currentTime = 0;
    waterVideo.currentTime = waterAudio.currentTime = 0;

    resetBtnColors();
    meditationBtn.style.backgroundColor = "white";
}

//space button 
    document.addEventListener("keydown", (e) => {
        if (e.code === "Space") {
            e.preventDefault(); // stops page scroll
            if (rainAudio.muted) {
                setMuted(false); // unmute
            } else {
                setMuted(true);  // mute
            }
        }
    })

// Button events
rainBtn.addEventListener("click", playRain);
windBtn.addEventListener("click", playWind);
birdBtn.addEventListener("click", playBird);
waterBtn.addEventListener("click", playWater);
meditationBtn.addEventListener("click", playMeditation);

// Mute / Unmute
muteBtn.addEventListener("click", () => setMuted(false));
unmuteBtn.addEventListener("click", () => setMuted(true));

// Start: rain playing, muted
window.addEventListener("load", () => {
    playRain();
    setMuted(true);
});
