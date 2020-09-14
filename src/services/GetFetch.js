import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export function getPopular() {
  try {
    return axios
      .get(`/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(({ data }) => data.results);
  } catch (error) {
    console.log(error);
  }
}
export function getMovieDetails(movie_id) {
  try {
    return axios
      .get(
        `/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
      )
  } catch (error) {
    console.log(error);
  }
}
export function getMovieCast(movie_id) {
  try {
    return axios
      .get(
        `/movie/${movie_id}/credits?api_key=${process.env.REACT_APP_API_KEY}`,
      )

  } catch (error) {
    console.log(error);
  }
}
export function getReviews(movie_id) {
  try {
    return axios
      .get(
        `/movie/${movie_id}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )

  } catch (error) {
    console.log(error);
  }
}
export function searchMovies (query, page = 1) {
  try {
    return axios
      .get(
        `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
      )

  } catch (error) {
    console.log(error);
  }
}

