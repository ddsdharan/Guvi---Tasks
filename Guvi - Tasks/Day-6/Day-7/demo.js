const regionSelect = document.getElementById('region-select');
const countryList = document.getElementById('country-list');

// Function to fetch regions from the API and populate the dropdown
function fetchRegions() {
    fetch('https://restcountries.com/v3.1/all?fields=name,region')
        .then(response => response.json())
        .then(data => {
            const regions = new Set();
            data.forEach(country => {
                const region = country.region;
                if (region) {
                    regions.add(region);
                }
            });

            regions.forEach(region => {
                const option = document.createElement('option');
                option.value = region;
                option.textContent = region;
                regionSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.log('Error fetching regions:', error);
        });
}

// Function to fetch countries by region and display them
function fetchCountriesByRegion(region) {
    fetch(`https://restcountries.com/v3.1/region/${region}?fields=name`)
        .then(response => response.json())
        .then(data => {
            countryList.innerHTML = '';

            data.forEach(country => {
                const countryName = country.name.common;
                const countryElement = document.createElement('p');
                countryElement.textContent = countryName;
                countryList.appendChild(countryElement);
            });
        })
        .catch(error => {
            console.log('Error fetching countries:', error);
        });
}

// Event listener for region select change
regionSelect.addEventListener('change', event => {
    const selectedRegion = event.target.value;
    if (selectedRegion) {
        fetchCountriesByRegion(selectedRegion);
    } else {
        countryList.innerHTML = '';
    }
});

// Fetch regions on page load
fetchRegions();
