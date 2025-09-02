    // Grab elements
    const rainVideo = document.querySelector(".rain-v");
    const windVideo = document.querySelector(".wind-v");
    const birdVideo = document.querySelector(".bird-v");
    const waterVideo = document.querySelector(".water-v");   // NEW ✅

    const rainAudio = document.querySelector(".rain-a");
    const windAudio = document.querySelector(".wind-a");
    const birdAudio = document.querySelector(".bird-a");
    const waterAudio = document.querySelector(".water-a");   // NEW ✅

    const rainBtn = document.querySelector(".button-1");
    const windBtn = document.querySelector(".button-2");
    const muteBtn = document.querySelector(".button-3");
    const unmuteBtn = document.querySelector(".button-4");
    const birdBtn = document.querySelector(".button-5");
    const waterBtn = document.querySelector(".button-6");    // NEW ✅

    // Helpers
    function applyMutedUI(isMuted) {
        muteBtn.style.display = isMuted ? "block" : "none";
        unmuteBtn.style.display = isMuted ? "none" : "block";
    }

    function setMuted(isMuted) {
        rainAudio.muted = isMuted;
        windAudio.muted = isMuted;
        birdAudio.muted = isMuted;
        waterAudio.muted = isMuted;   // NEW ✅
        applyMutedUI(isMuted);

        if (!isMuted) {
            if (rainVideo.style.display !== "none") {
                rainAudio.play();
            } else if (windVideo.style.display !== "none") {
                windAudio.play();
            } else if (birdVideo.style.display !== "none") {
                birdAudio.play();
            } else {
                waterAudio.play();    // NEW ✅
            }
        }
    }

    // Reset button styles
    function resetBtnColors() {
        rainBtn.style.backgroundColor = "";
        windBtn.style.backgroundColor = "";
        birdBtn.style.backgroundColor = "";
        waterBtn.style.backgroundColor = "";   // NEW ✅
    }

    // Source switching
    function playRain() {
        rainVideo.style.display = "block";
        windVideo.style.display = "none";
        birdVideo.style.display = "none";
        waterVideo.style.display = "none";   // NEW ✅

        rainVideo.play();
        rainAudio.play();

        windVideo.pause(); windAudio.pause();
        birdVideo.pause(); birdAudio.pause();
        waterVideo.pause(); waterAudio.pause();  // NEW ✅
        windVideo.currentTime = 0; windAudio.currentTime = 0;
        birdVideo.currentTime = 0; birdAudio.currentTime = 0;
        waterVideo.currentTime = 0; waterAudio.currentTime = 0; // NEW ✅

        resetBtnColors();
        rainBtn.style.backgroundColor = "white";
    }

    function playWind() {
        windVideo.style.display = "block";
        rainVideo.style.display = "none";
        birdVideo.style.display = "none";
        waterVideo.style.display = "none";   // NEW ✅

        windVideo.play();
        windAudio.play();

        rainVideo.pause(); rainAudio.pause();
        birdVideo.pause(); birdAudio.pause();
        waterVideo.pause(); waterAudio.pause();  // NEW ✅
        rainVideo.currentTime = 0; rainAudio.currentTime = 0;
        birdVideo.currentTime = 0; birdAudio.currentTime = 0;
        waterVideo.currentTime = 0; waterAudio.currentTime = 0; // NEW ✅

        resetBtnColors();
        windBtn.style.backgroundColor = "white";
    }

    function playBird() {
        birdVideo.style.display = "block";
        rainVideo.style.display = "none";
        windVideo.style.display = "none";
        waterVideo.style.display = "none";   // NEW ✅

        birdVideo.play();
        birdAudio.play();

        rainVideo.pause(); rainAudio.pause();
        windVideo.pause(); windAudio.pause();
        waterVideo.pause(); waterAudio.pause();  // NEW ✅
        rainVideo.currentTime = 0; rainAudio.currentTime = 0;
        windVideo.currentTime = 0; windAudio.currentTime = 0;
        waterVideo.currentTime = 0; waterAudio.currentTime = 0; // NEW ✅

        resetBtnColors();
        birdBtn.style.backgroundColor = "white";
    }

    function playWater() {   // NEW FUNCTION ✅
        waterVideo.style.display = "block";
        rainVideo.style.display = "none";
        windVideo.style.display = "none";
        birdVideo.style.display = "none";

        waterVideo.play();
        waterAudio.play();

        rainVideo.pause(); rainAudio.pause();
        windVideo.pause(); windAudio.pause();
        birdVideo.pause(); birdAudio.pause();
        rainVideo.currentTime = 0; rainAudio.currentTime = 0;
        windVideo.currentTime = 0; windAudio.currentTime = 0;
        birdVideo.currentTime = 0; birdAudio.currentTime = 0;

        resetBtnColors();
        waterBtn.style.backgroundColor = "white";
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
    waterBtn.addEventListener("click", playWater);   // NEW ✅

    muteBtn.addEventListener("click", () => setMuted(false));
    unmuteBtn.addEventListener("click", () => setMuted(true));

    // Start: rain playing, muted, show mute icon
    window.addEventListener("load", () => {
        playRain();
        setMuted(true);
    });
