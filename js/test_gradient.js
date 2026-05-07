const box = document.getElementById('gradient-box');
const btn = document.getElementById('change-btn');

btn.addEventListener('click', () => {
    box.style.background = "linear-gradient(135deg, #00f2fe, #4facfe)";
    console.log("Gradient Shift");
});
