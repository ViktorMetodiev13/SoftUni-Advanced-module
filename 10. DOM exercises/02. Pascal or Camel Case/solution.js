function solve() {
  let text = document.getElementById('text').value;
  let namingConvetion = document.getElementById('naming-convention').value;

  let result = '';

  let words = text.split(' ');
  
  if (namingConvetion == "Camel Case") {
    for (let index = 0; index < words.length; index++) {
      words[index] = words[index].toLowerCase();
      if (index != 0) {
        words[index] = words[index].charAt(0).toUpperCase() + words[index].substring(1);
      }
    }
  } else if(namingConvetion == "Pascal Case") {
    for (let index = 0; index < words.length; index++) {
      words[index] = words[index].toLowerCase();
      words[index] = words[index].charAt(0).toUpperCase() + words[index].substring(1);
    }
  } else {
    return document.getElementById('result').textContent = 'Error!';
  }

  result = words.join('');
  document.getElementById('result').textContent = result;
}