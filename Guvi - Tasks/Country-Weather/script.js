// Function to fetch weather data
async function fetchWeather(latitude, longitude) {
    const Default = '6f471ea2a82dad15d51de17469ed59bf';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${Default}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      const container = document.createElement('div');
      container.classList.add('container');
      const title = document.createElement('h1');
      title.classList.add('text-center');
      title.setAttribute('id','title');
      title.innerText = 'Countries & Current Weather'; 
      data.forEach(country => {
        const row = document.createElement('div');
        row.classList.add('row');
        const col = document.createElement('div');
        col.classList.add('col-sm-6', 'col-md-4', 'col-lg-4', 'col-xl-4');
        const card = document.createElement('div');
        card.classList.add('card', 'h-100');
        const countryInfo = `
          <div class = card-header>
          ${country.name.common}
          </div>
          <img src="${country.flags.png}" class="card-img-top" alt="${country.name.common}Flag">
          <div class = card-body>
          <div class = card-text>
          <p>Capital: ${country.capital}</p>
          <p>Region: ${country.region}</p>
          <p>Country Code: ${country.cca3}</p>
          <p>Latitude: ${country.latlng[0]}</p>
          <p>Longitude: ${country.latlng[1]}</p>
          </div>
          </div>`;
          card.innerHTML = countryInfo;
          const button = document.createElement('button');
          button.setAttribute('class','btn btn-primary');
          button.textContent = 'Click for Weather';
          const backButton = document.createElement('button');
          backButton.setAttribute('class','btn btn-secondary');
          backButton.textContent = 'Back';
          button.addEventListener('click', () => {
            fetchWeather(country.latlng[0], country.latlng[1])
            .then(current => {
              button.style.display = 'none';
              backButton.style.display = 'block';
              const weatherInfo = `
              <div class = card-header>
          ${country.name.common} ${current.weather[0].main}
          </div>
          <img src="http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png" class="card-img-top" alt="${current.weather[0].main}icon">
          <div class = card-body>
          <div class = card-text>
          <p>${current.weather[0].description}</p>
          <p>Teperature: ${current.main.temp}°C</p>
          <p>FeelsLike: ${current.main.feels_like}°C</p>
          <p>Min: ${current.main.temp_min}°C, Max: ${current.main.temp_max}°C</p>
          <p>Humidity: ${current.main.humidity}°C | Pressure: ${current.main.pressure}</p>
          </div>
          </div>`;
          card.innerHTML = weatherInfo;
          card.appendChild(backButton);
        })
        .catch(error => {
          console.log('An error occurred while fetching weather data:', error);
        });
      });
      backButton.addEventListener('click', () => {
        document.location.reload();
      });
      card.appendChild(button);
      col.appendChild(card);
      row.appendChild(col);
      container.appendChild(row);
    });
    document.body.appendChild(title);
    document.body.appendChild(container);
  })
  .catch(error => {
    console.log('An error occurred while fetching country data:', error);
  });