// ==UserScript==
// @name         GeoFS Seatbelt Sign Sound
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Play the seatblet sound
// @author       Anda
// @match        https://www.geo-fs.com/geofs.php?v=*
// @match        https://*.geo-fs.com/geofs.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // URL adio for the seatbelt sound
    const seatbeltOnSoundUrl = "https://raw.githubusercontent.com/damianryann/geofs-sounds/master/misc/seatbelt-on.mp3";  // ON sound
    const seatbeltOffSoundUrl = "https://raw.githubusercontent.com/damianryann/geofs-sounds/master/misc/seatbelt-off.mp3"; // OFF sound

    // Create the element for ON and OFF
    let seatbeltOnAudio = new Audio(seatbeltOnSoundUrl);
    let seatbeltOffAudio = new Audio(seatbeltOffSoundUrl);

    seatbeltOnAudio.volume = 1.0;  // ON sound volume
    seatbeltOffAudio.volume = 1.0; // OFF sound volume

    // Seatbelt sign status
    let seatbeltSignOn = false;

    // The function to toggle the sound
    function toggleSeatbeltSign() {
        seatbeltSignOn = !seatbeltSignOn;

        if (seatbeltSignOn) {
            console.log("Seatbelt sign ON");
            seatbeltOnAudio.play(); // Play on sound
        } else {
            console.log("Seatbelt sign OFF");
            seatbeltOffAudio.play(); // Play off sound
        }
    }

    // The event keyboard
    document.addEventListener("keydown", function(event) {
        if (event.key === "f" || event.key === "F") { // Press F for the toggle
            toggleSeatbeltSign();
        }
    });

    console.log("Seatbelt sign script loaded. Press 'F' to toggle.");
})();
