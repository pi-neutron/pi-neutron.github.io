console.log("[LOG] Loaded 'js/lyrics.js'");

const displayLyrics = document.getElementById('display-lyrics');

if (!audioBgm) {
    console.error("[ERROR] Could not find element with id='audioBgm'");
}
if (!displayLyrics) {
    console.error("[ERROR] Could not find element with id='display-lyrics'");
}

const lyrics = [
    { time: 0.0, text: "LYRICS LOADED" },
    { time: 1.0, text: "" },
    { time: 15.0, text: "Bad Apple" },
    { time: 20.0, text: "" },
    { time: 29.0, text: "NAGARATEKU" },
    { time: 30.0, text: "TOKI NO NAKA DE DEMO" },
];

audioBgm.addEventListener('timeupdate', () => {
    console.log("[LOG] Update : current : time :", audioBgm.currentTime);
    const currentTime = audioBgm.currentTime;

    let currentLyric = "";
    for (let i = 0; i < lyrics.length; i++) {
        if (currentTime >= lyrics[i].time) {
            currentLyric = lyrics[i].text;
        } else {
            break;
        }
    }

    displayLyrics.textContent = currentLyric;
    console.log("[LOG] Update : current : lyrics :", currentLyric);
});
