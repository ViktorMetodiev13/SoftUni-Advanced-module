function addItem() {
    let inputElement = document.getElementById('newItemText');
    let ulElement = document.getElementById('items');
    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    ulElement.appendChild(liElement);

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    liElement.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', onDelete);

    function onDelete(event) {
        event.target.parentElement.remove();
    }

    inputElement.value = '';
}