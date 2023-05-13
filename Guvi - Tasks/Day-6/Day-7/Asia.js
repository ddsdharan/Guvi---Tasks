const outputContainer = document.createElement('div');
outputContainer.setAttribute('id', 'output');

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const asiaCountries = data.filter(country => country.region === 'Asia');
    
    const table = document.createElement('table');
    table.setAttribute('class','table table-dark table-striped');  
    
    const tableHeader = document.createElement('tr');
    
    const nameHeader = document.createElement('th');
    nameHeader.textContent = 'Name';
    tableHeader.appendChild(nameHeader);
       
    const subregionHeader = document.createElement('th');
    subregionHeader.textContent = 'Sub-region';
    tableHeader.appendChild(subregionHeader);
    
    const populationHeader = document.createElement('th');
    populationHeader.textContent = 'Population';
    tableHeader.appendChild(populationHeader);
    
    table.appendChild(tableHeader);
    
    asiaCountries.forEach(country => {
      const tableRow = document.createElement('tr');
      
      const nameCell = document.createElement('td');
      nameCell.textContent = country.name.common;
      tableRow.appendChild(nameCell);
            
      const subregionCell = document.createElement('td');
      subregionCell.textContent = country.subregion;
      tableRow.appendChild(subregionCell);
      
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