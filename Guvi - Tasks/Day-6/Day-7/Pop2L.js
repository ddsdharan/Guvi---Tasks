const outputContainer = document.createElement('div');
outputContainer.setAttribute('id', 'output');

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesWithPopulationLessThan2Lakhs = data.filter(country => country.population < 200000);


    
    const table = document.createElement('table');
    const tableHeader = document.createElement('tr');
    
    const nameHeader = document.createElement('th');
    nameHeader.textContent = 'Name';
    tableHeader.appendChild(nameHeader);
    
    const populationHeader = document.createElement('th');
    populationHeader.textContent = 'Population';
    tableHeader.appendChild(populationHeader);
    
    table.appendChild(tableHeader);
    
    countriesWithPopulationLessThan2Lakhs.forEach(country => {
      const tableRow = document.createElement('tr');
      
      const nameCell = document.createElement('td');
      nameCell.textContent = country.name.common;
      tableRow.appendChild(nameCell);
      
      const populationCell = document.createElement('td');
      populationCell.textContent = country.population;
      tableRow.appendChild(populationCell);
      
      table.appendChild(tableRow);
    });
    outputContainer.appendChild(table);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

document.body.appendChild(outputContainer);