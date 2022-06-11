function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let rows = document.querySelectorAll('tbody tr');
   let input = document.getElementById('searchField');
   function onClick() {
      for (let row of rows) {
         row.className = '';
         if (row.innerHTML.includes(input.value)) {
            row.className = 'select';
         }
      }
   }
}