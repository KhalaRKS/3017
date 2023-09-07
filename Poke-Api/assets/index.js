const pokemonsContainer = document.querySelector('#caja');
const loader = document.querySelector('.pokeballs-container');

// Escribimos el estado de la app

// isLoading <- isFetching <- isActive

const appState = {
  currentUrl: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=8',
  isFetching: false,
};

// Adaptador
// Función para adaptar la información necesario que la vista de la app requiera

const pokemonDataAdapter = (pokemonData) => {
  return {
    id: pokemonData.id,
    name: pokemonData.name.toUpperCase(),
    image: pokemonData.sprites.other.home.front_default,
    height: pokemonData.height / 10,
    weight: pokemonData.weight / 10,
    types: pokemonData.types,
    experience: pokemonData.base_experience,
  };
};

// Función generadora del "pill" para asociar el tipo del pokemon

// ["water", "grass"] "Water"          [Water]
const createTypeCards = (types) => {
  return types
    .map((type) => {
      return `<span class="${type.type.name} poke__type">${type.type.name}</span>`;
    })
    .join('');
};

// Función para crear la card del pokemon

const createPokemonCard = (pokemon) => {
  const { id, name, image, height, weight, types, experience } =
    pokemonDataAdapter(pokemon);

  return `
    <div class="poke">
        <img  src="${image}"/>
        <h2>${name}</h2>
        <span class="exp">EXP: ${experience}</span>
        <div class="tipo-poke">
        ${createTypeCards(types)}
        </div>
        <p class="id-poke">#${id}</p>
        <p class="height">Height: ${height}m</p>
        <p class="weight">Weight: ${weight}Kg</p>
    </div>
    `;
};


// Función para renderizar la lista de los pokemones

const renderPokemonList = (pokemonList) => {
    pokemonsContainer.innerHTML += pokemonList
        .map((pokemon) => createPokemonCard(pokemon)).join("")
}

// Función para renderizar nuevos pokemos cuando se scrollea y mostrar el loader

const renderOnScroll = (pokemonList) =>{
    loader.classList.toggle('show')
    setTimeout(() =>{
        loader.classList.toggle('show')
        renderPokemonList(pokemonList)
        appState.isFetching = false
    }, 1500)
}

// Función para traernos la data de los pokemos que necesitamos renderizar

const getPokemonsData = async () =>{
    const {next, results} = await fetchPokemons(appState.currentUrl)

    appState.currentUrl = next

    const pokemonDataUrls = results.map((pokemon) => pokemon.url)

    const pokemonsData = await Promise.all(
        pokemonDataUrls.map(async (url) => {
            return await fetchPokemons(url);
        })
    )


    return pokemonsData;
}


// Función para obtener la data de los pokemons y renderizarlos
// en base a la función que le pasemos por parametro

const loadAndRenderPokemons = async (renderingFunction) =>{
    const pokemonsData = await getPokemonsData()
    renderingFunction(pokemonsData)
}

// Función para verificar si el usuario hizo scroll hasta el final de página

const isEndOfPage = () =>{
    const {scrollTop, clientHeight, scrollHeight} = document.documentElement
    const bottom = scrollTop + clientHeight >= scrollHeight - 1

    return bottom;
}


// Función para verificar si no esta un llamado asincrono en curso 
// Muchas peticiones http  -> DDOS

const loadNextPokemons = async () => {
    if(isEndOfPage() && !appState.isFetching){
        appState.isFetching = true
        loadAndRenderPokemons(renderOnScroll)
    }
}

// Función init

const init = () =>{
    window.addEventListener(
        "DOMContentLoaded",
        async () => await loadAndRenderPokemons(renderPokemonList)
    )
    window.addEventListener("scroll", async () => {
        await loadNextPokemons()
    })
}


init()
