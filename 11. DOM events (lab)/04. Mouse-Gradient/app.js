function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMove);
    const result = document.getElementById('result');

    function onMove(event) {
        result.textContent = Math.floor(event.offsetX / gradient.clientWidth * 100) + '%';
    }
}