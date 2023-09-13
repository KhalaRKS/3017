const btnContainer = document.querySelector('.pagination');
const prevBTN = document.querySelector('.left');
const nextBTN = document.querySelector('.right');
const cardsContainer = document.querySelector('.cards-container');
const pageNumber = document.querySelector('.page-number');
const filterButtons = document.querySelectorAll('.btn');
const filterContainer = document.querySelector('.filter-container');

const ImgBaseUrl = 'https://image.tmdb.org/t/p/original';

// Creamos el objeto AppState

const appState = {
  page: null,
  total: null,
  searchParameter: TRENDING,
};

// Fuciones para mostrar y renderizar peliculas

const showMovies = async () => {
  const movies = await fetchMovies(appState.searchParameter);
  appState.total = movies.total_pages;
  appState.page = movies.page;
  setPaginationState();
  renderCards(movies.results);
};

// Función para setear el estado actual de la páginacion

const setPaginationState = () => {
  pageNumber.innerHTML = appState.page;
  togglePreviousBtn(appState.page);
  toggleNextBtn(appState.page, appState.total);
};

// Función para renderizar el loader

const renderLoader = () => {
  return `
    <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>`;
};

// Función para desabilitar o habilitar el boton previo del paginator
const togglePreviousBtn = (page) => {
  if (page === 1) {
    prevBTN.classList.add('disabled');
  } else {
    prevBTN.classList.remove('disabled');
  }
};

// Función para desabilitar o habilitar el boton siguiente del paginator
const toggleNextBtn = (page, total) => {
  if (page === total) {
    nextBTN.classList.add('disabled');
  } else {
    nextBTN.classList.remove('disabled');
  }
};

// Función para crear el tempalte de la card de las peliculas

const createCardTemplate = (movie) => {
  const { title, poster_path, vote_average, release_date } = movie;
  return `
    <div class="card">
    <img loading="lazy"  src=${
      poster_path ? ImgBaseUrl + poster_path : './assets/img/placeholder.png'
    } alt="${title}}" class="card-img"/>
      <div class="card-popularity">${formatVoteAverage(
        vote_average
      )}% de popularidad</div>
      <div class="card-content">
          <h2>${title}</h2>
          <p>Fecha de estreno: ${formatDate(release_date)}</p>
      </div>
    </div>`;
};

// Función para formatear el vote_average a un numero del 1 al 100

const formatVoteAverage = (voteAverage) => {
  return Math.round(voteAverage * 10); // 66.62 = 67
};

// Función para formatear la fecha de estreno de las peliculas

const formatDate = (date) => {
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
};

// Función para renderizar las cards

const renderCards = (movies) => {
  cardsContainer.innerHTML = movies
    .map((movie) => createCardTemplate(movie))
    .join('');
};

// FUNCIONES PARA CREAR LA PAGINACIÓN

// Función para cambiar a la página siguiente

const nextPage = () => {
  if (appState.page === appState.total) return;

  appState.page += 1;
  changePage();
};

// Función para cambiar a la página previa

const previousPage = () => {
  if (appState.page === 1) return;

  appState.page -= 1;
  changePage();
};

// Función para cambiar de pagina
const changePage = async () => {
  cardsContainer.innerHTML = renderLoader();
  const movies = await fetchMovies(appState.searchParameter, appState.page);
  setPaginationState();
  loadAndShow(movies);
};

// Función para renderizar las cards dando un efecto de carga

const loadAndShow = (movies) => {
  setTimeout(() => {
    renderCards(movies.results);
    filterContainer.scrollIntoView({
      behavior: 'smooth',
    });
  }, 1500);
};

// FUNCIONES PARA MENAJAR EL FILTRADO DE LAS PELICULAS

const changeSearchParameter = (e) => {
  if (isActiveCategoryBtn(e.target)) return;

  const selectedParameter = e.target.dataset.filter;

  appState.searchParameter = parameterSelector(selectedParameter);

  setActiveButton(selectedParameter);
  showMovies();
};

// Función para verificar si el elemento clickeado es un boton de categoria y si esta activo

const isActiveCategoryBtn = (btn) => {
  return !(
    btn.classList.contains('btn') && !btn.classList.contains('btn--active')
  );
};

// Función para seleccionar la categoria de busqueda de la api

const parameterSelector = (filterType) => {
  return filterType === 'TOPRATED'
    ? TOPRATED
    : filterType === 'UPCOMING'
    ? UPCOMING
    : TRENDING;
};

// Función para activar el botón clickeado y desactivar el resto de los botones (filtro)

const setActiveButton = (selectedParameter) => {
  const buttons = [...filterButtons];

  buttons.forEach((btn) => {
    if (btn.dataset.filter !== selectedParameter) {
      btn.classList.remove('btn--active');
    } else {
      btn.classList.add('btn--active');
    }
  });
};

// Función inicializadora

const init = () => {
  window.addEventListener('DOMContentLoaded', showMovies);
  nextBTN.addEventListener('click', nextPage);
  prevBTN.addEventListener('click', previousPage);
  filterContainer.addEventListener('click', changeSearchParameter);
};

init();
