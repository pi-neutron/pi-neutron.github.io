console.log("[LOG] Loaded 'js/visualizer.js'");

let audioCtx, analyser, dataArray;
let isInitialized = false;

if (!isInitialized) {
    audioCtx = new(window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 2048;

    const source = audioCtx.createMediaElementSource(audioBgm);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    const bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
    isInitialized = true;
    draw();
}

window.addEventListener('click', () => {
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}, { once: true });

function draw() {
    requestAnimationFrame(draw);

    if (!analyser) return;

    analyser.getByteFrequencyData(dataArray);

    ctx.fillStyle = 'rgba(13, 13, 13, 0.2)'
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const barWidth = (canvas.width / dataArray.length) * 2.5;
    let x = 0;

    for (let i = 0; i < dataArray.length; i++) {
        const barHeight = (dataArray[i] / 255) * canvas.height * 0.8;

        const red = dataArray[i] + 25;
        const green = 150;
        const blue = 255;

        ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
        ctx.fillRect(x, 0, barWidth, barHeight / 2); // from top
        ctx.fillRect(x, canvas.height - (barHeight / 2), barWidth, barHeight / 2); // from bottom

        x += barWidth + 2;
    }
}
