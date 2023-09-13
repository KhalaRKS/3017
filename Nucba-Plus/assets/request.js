const KEY = "4bf37a006026ff5c85b0ad03ea399347";

const TRENDING = `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}&language=en-US`;
const TOPRATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US`;
const UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=en-US`;


const fetchMovies = async (searchUrl, page = 1) => {
    const response = await fetch(searchUrl + `&page=${page}`)
    const data = await response.json()
    return data;
}

