function toggle() {
    let textElement = document.getElementById('extra');
    let button = document.getElementsByClassName('button')[0];

    if (button.textContent == 'More') {
        button.textContent = 'Less';
        textElement.style.display = 'block';
    } else {
        button.textContent = 'More';
        textElement.style.display = 'none';
    }
}