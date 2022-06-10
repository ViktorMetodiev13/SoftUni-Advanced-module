function addItem() {
    let input = document.getElementById('newItemText').value;
    let liElement = document.createElement('li');
    liElement.textContent = input;
    document.getElementById('items').appendChild(liElement);

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    liElement.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', onDelete);

    function onDelete(event) {
        event.target.parentElement.remove();
    }

    document.getElementById('newItemText').value = '';
}