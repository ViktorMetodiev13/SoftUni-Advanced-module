function deleteByEmail() {
    const value = document.querySelector('input[name="email"]').value;

    const rows = [...document.querySelectorAll('tbody tr')];
    let isFound = false;
    for (let row of rows) {
        if (row.children[1].textContent == value) {
            row.remove();
            isFound = true;
        }
    }

    document.getElementById('result').textContent = isFound ? 'Deleted.' : 'Not Found.';
}