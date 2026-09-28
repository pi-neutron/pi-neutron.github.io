console.log("[LOG] Loaded 'js/char_teleport.js'");

const char = document.getElementById('char');

let lastTeleportTime = 0;
const TELEPORT_INTERVAL = 0.5;

audioBgm.addEventListener('timeupdate', () => {
    const currentTime = audioBgm.currentTime;

    if (currentTime - lastTeleportTime >= TELEPORT_INTERVAL) {
        teleportChar();
        lastTeleportTime = currentTime;
    }
});

function teleportChar() {
    const maxX = window.innerWidth = char.clientWidth;
    const maxY = window.innerHeight = char.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    const randomFlip = Math.random() > 0.5 ? 'scaleX(-1)' : 'scaleX(1)';

    char.style.transform = `translate(${randomX}px, ${randomY}px) scaleX(${randomFlip})`;
    char.style.opacity = '1';
}
