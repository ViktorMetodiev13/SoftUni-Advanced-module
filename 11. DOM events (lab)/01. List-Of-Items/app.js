function addItem() {
    let inputField = document.getElementById('newItemText');
    
    let ulElement = document.getElementById('items');
    let liElement = document.createElement('li');
    liElement.textContent = inputField.value;
    ulElement.appendChild(liElement);

    inputField.value = '';
}