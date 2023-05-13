const outputContainer = document.createElement('div');
outputContainer.setAttribute('id', 'output');

fetch('https://restcountries.com/v3.1/currency/USD')
  .then(response => response.json())
  .then(data => {
    const countriesWithUSD = data;
    
    const table = document.createElement('table');
    table.setAttribute('class','table table-dark table-striped');  

    const tableHeader = document.createElement('tr');
    
    const nameHeader = document.createElement('th');
    nameHeader.textContent = 'Countries:';
    tableHeader.appendChild(nameHeader);
    
    table.appendChild(tableHeader);
    
    countriesWithUSD.forEach(country => {
      const tableRow = document.createElement('tr');
      
      const nameCell = document.createElement('td');
      nameCell.textContent = country.name.common;
      tableRow.appendChild(nameCell);
      
      table.appendChild(tableRow);
    });
    
    outputContainer.appendChild(table);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

document.body.appendChild(outputContainer);


