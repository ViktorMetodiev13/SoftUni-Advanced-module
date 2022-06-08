function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let rows = document.querySelectorAll('tbody tr');
   let input = document.getElementById('searchField');
   function onClick() {

      for (const row of rows) {
         row.className = '';
      }

      for (let row of rows) {
         if (row.innerHTML.includes(input.value)) {
            row.className = 'select';
         }
      }
   }
}