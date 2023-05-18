const title = document.createElement('h1');
title.classList.add('text-center');
title.setAttribute('id','title');
title.innerText = 'Pagination - JSON';
const paraDiv = document.createElement('div');
paraDiv.classList.add('container-fliud');
const para = document.createElement('p');
para.classList.add('lead');
para.setAttribute('id','description');
para.textContent = 'This webpage is designed to demonstrate Pagination with a table that displays 10 items per page, the pagination is achieved with the buttons named First, Last, Previous and Next. The first button will display the table data on the first page, the Last button will display the data on the last page. The next button will display the respective next page data, the Previous Button will display the last page data.';
const buttonDiv = document.createElement('div');
buttonDiv.classList.add('d-flex','justify-content-center');
buttonDiv.setAttribute('id','buttons');
const tableDiv = document.createElement('div');
tableDiv.classList.add('table','table-responsive', 'table-bordered');
tableDiv.setAttribute('id','table-container');
paraDiv.appendChild(para);
document.body.appendChild(title);
document.body.appendChild(paraDiv);
document.body.appendChild(tableDiv);
document.body.appendChild(buttonDiv);
let currentPage;
fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json')
  .then(response => response.json())
  .then(data => {
    const jsonData = data;
    const itemsPerPage = 10;
    const totalPages = Math.ceil(jsonData.length / itemsPerPage);
    currentPage = 1;
    function displayItems(page) {
      tableDiv.innerHTML = '';
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const itemsToDisplay = jsonData.slice(startIndex, endIndex);
      const table = document.createElement('table');
      table.classList.add('table', 'table-bordered');
      const tHead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      const idHeader = document.createElement('th');
      const tBody = document.createElement('tbody');
      idHeader.textContent = 'ID';
      const nameHeader = document.createElement('th');
      nameHeader.textContent = 'Name';
      const emailHeader = document.createElement('th');
      emailHeader.textContent = 'Email';
      headerRow.appendChild(idHeader);
      headerRow.appendChild(nameHeader);
      headerRow.appendChild(emailHeader);
      tHead.appendChild(headerRow);
      table.appendChild(tHead);
      itemsToDisplay.forEach(item => {
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        idCell.textContent = item.id;
        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        const emailcell = document.createElement('td');
        emailcell.textContent = item.email;
        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(emailcell);
        tBody.appendChild(row);
      });
      table.appendChild(tBody);
      tableDiv.appendChild(table);
    }
    function createPaginationButtons() {
      buttonDiv.innerHTML = '';
      const firstButton = document.createElement('button');
      firstButton.classList.add('btn','btn-dark');
      firstButton.textContent = '1';
      firstButton.addEventListener('click', () => {
        if (currentPage !== 1) {
          currentPage = 1;
          displayItems(currentPage);
        }
      });
      buttonDiv.appendChild(firstButton);
      const previousButton = document.createElement('button');
      previousButton.classList.add('btn', 'btn-dark');
      previousButton.textContent = 'Previous';
      previousButton.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          displayItems(currentPage);
        }
      });
      buttonDiv.appendChild(previousButton);
      const nextButton = document.createElement('button');
      nextButton.classList.add('btn', 'btn-dark');
      nextButton.textContent = 'Next';
      nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
          currentPage++;
          displayItems(currentPage);
        }
      });
      buttonDiv.appendChild(nextButton);
      const lastButton = document.createElement('button');
      lastButton.classList.add('btn','btn-dark');
      lastButton.textContent = totalPages;
      lastButton.addEventListener('click', () => {
        if (currentPage !== totalPages) {
          currentPage = totalPages;
          displayItems(currentPage);
        }
      });
      buttonDiv.appendChild(lastButton);
    }
    displayItems(currentPage);
    createPaginationButtons();
  })
  .catch(error => console.log(error));