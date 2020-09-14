import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export function getPopular() {
  return axios
    .get(`/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(({ data }) => data.results);
}

export function getMovieDetails(movie_id) {
  return axios.get(
    `/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  );
}
export function getMovieCast(movie_id) {
  return axios.get(
    `/movie/${movie_id}/credits?api_key=${process.env.REACT_APP_API_KEY}`,
  );
}
export function getReviews(movie_id) {
  return axios.get(
    `/movie/${movie_id}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
  );
}
export function searchMovies(query, page = 1) {
    return axios.get(
      `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`,
    )
  
}
