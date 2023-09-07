const form = document.getElementById('form');
const cityInput = document.querySelector('.search-input');
const cardContainer = document.querySelector('.card-container');
const searchMsg = document.querySelector('.search-msg');

// Función para redondear un numero al entero mas cercano

const roundNumber = (number) => Math.round(number);

// Función para chequear el input no este vacio
const isEmptyInput = () =>{
    return cityInput.value.trim() === ""
}

// Función que va a revisar que la ciudad exista
const isInvalidCity = (cityData) =>{
    return !cityData.id
}

// Función que adapta la data que recibimos de la api sobre la ciudad buscada

const getCityData = (cityData) => {
  return {
    cityName: cityData.name,
    imageName: cityData.weather[0].icon,
    cityWeatherInfo: cityData.weather[0].description,
    cityTemp: roundNumber(cityData.main.temp),
    cityST: roundNumber(cityData.main.feels_like),
    cityMaxTemp: roundNumber(cityData.main.temp_max),
    cityMinTemp: roundNumber(cityData.main.temp_min),
    cityHumidity: cityData.main.humidity,
  };
};

// Función que va a renderizar cada card del clima

const createCityTemplate = (cityData) => {
  const {
    cityName,
    imageName,
    cityWeatherInfo,
    cityTemp,
    cityST,
    cityMaxTemp,
    cityMinTemp,
    cityHumidity,
  } = getCityData(cityData);

  return `
  <div class="weather-card animate">
    <div class="weather-info-container">
            <h2 class="weather-title">${cityName}</h2>
            <p class="weather-description">${cityWeatherInfo}</p>
            <div class="weather-temp-container">
              <span class="weather-temp">${cityTemp}°</span>
              <span class="weather-st">${cityST}° ST</span>
            </div>
          </div>
          <div class="weather-img-container">
          <img src="./assets/img/${imageName}.png" alt="weather image"/>
          </div>
          <div class="weather-extra-container">
            <div class="weather-minmax-container">
              <span class="weather-span"
                ><i class="fa-solid fa-arrow-up-long"></i>Max: ${cityMaxTemp}º</span
              >
              <span class="weather-span"
                ><i class="fa-solid fa-arrow-down-long"></i>Min: ${cityMinTemp}º</span>
       </div>
     <span class="weather-humidity">${cityHumidity}% Humedad</span>
  </div>
  </div>
  `;
};

// Función renderizar la card de la city en el html

const renderCityCard = (cityData) =>{
    cardContainer.innerHTML = createCityTemplate(cityData)

}

// Función cambiar el mensaje de busqueda de city por el nombre de la city buscada

const changeSearchMsg = (cityData) =>{
    const cityName = cityData.name
    searchMsg.innerHTML = `Así esta el clima en ${cityName}, ¿Querés ver el clima de otra ciudad?`
}

// Función que va a CONSULTAR la ciudad en la Api
const searchCity = async (e) =>{
    e.preventDefault()

    if(isEmptyInput()){
        alert("Por favor ingrese una ciudad")
        return;
    }
    const fetchedCity = await requestCity(cityInput.value)

    if(isInvalidCity(fetchedCity)){
        alert("La ciudad ingresada no existe")
        form.reset()
        return;
    }

    renderCityCard(fetchedCity)
    changeSearchMsg(fetchedCity)
    form.reset()
    return;
}

const init = () =>{
    form.addEventListener("submit", searchCity)
}


init()