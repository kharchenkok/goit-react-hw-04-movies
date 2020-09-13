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
      // .then(({ data }) => data);
  } catch (error) {
    console.log(error);
  }
}
