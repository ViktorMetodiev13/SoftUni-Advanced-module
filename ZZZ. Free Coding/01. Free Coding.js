function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(b => b.addEventListener('click', toggle));

    function toggle(event) {
        const profile = event.target.parentElement;
        const isActive = document.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isActive) {
            let div = profile.querySelector('div');

            if (event.target.textContent == 'Show more') {
                event.target.textContent = 'Hide it';
                div.style.display = 'block';
            } else {
                event.target.textContent = 'Show more';
                div.style.display = '';
            }
        }
    }
}