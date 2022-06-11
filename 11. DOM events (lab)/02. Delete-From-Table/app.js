function deleteByEmail() {
    let value = document.querySelector('input[name="email"]').value;
    
    let isFound = false;
    let rows = document.querySelectorAll('tbody tr');
    for (const row of rows) {
        if (row.children[1].textContent === value) {
            const parent = row.parentElement;
            parent.removeChild(row);
            isFound = true;
        }
    }

    document.getElementById('result').textContent = isFound ? 'Deleted.' : 'Not found.';
}