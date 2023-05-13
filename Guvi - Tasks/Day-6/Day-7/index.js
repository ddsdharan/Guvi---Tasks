fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const totalPopulation = data.reduce((accumulator, country) => accumulator + country.population, 0);

    const populationElement = document.getElementById("population");
    populationElement.textContent = "Total population of all countries: " + totalPopulation.toLocaleString();
    })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  const outputContainer = document.getElementById('output');

  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      data.forEach(country => {
        const countryElement = document.createElement('div');
        countryElement.innerHTML = `
     <div class="card text-start text-bg-dark" id = maincard>
    <img src="${country.flags.svg}" alt="Country Flags" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${country.name.common}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Region:${country.region}</li>
      <li class="list-group-item">Sub-region: ${country.subregion}</li>
      <li class="list-group-item">Population: ${country.population}</li>
    </ul>
  </div> `;
        outputContainer.appendChild(countryElement);
      })
    })
    .catch(error => {
      console.error('Error fetching data:', error)
    })
  