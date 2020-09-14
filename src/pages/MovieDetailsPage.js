import React, { Component } from 'react';

import MovieDetails from '../components/movieDetails/MovieDetails';
import GoBackButton from '../components/goBackButton/GoBackButton';
import AdditionalInfo from '../components/additionalInfo/AdditionalInfo';
import { getMovieDetails } from '../services/GetFetch';

export default class AsyncMovieDetailsPage extends Component {
  state = {
    title: '',
    releaseYear: '',
    score: '',
    overview: '',
    genres: [],
    posterSrc: '',
    from: '',
    search: '',
  };

  async componentDidMount() {
    const id = this.props.match.params.movieId;
    if (this.props.location.state?.from) {
      this.setState({
        from: this.props.location.state.from.pathname,
        search: this.props.location.state.from.search,
      });
    }

    await getMovieDetails(id).then(({ data }) => {
      this.setState({
        title: data.title,
        releaseYear: new Date(`${data.release_date}`).getFullYear(),
        score: data.vote_average,
        overview: data.overview,
        genres: data.genres,
        posterSrc: data.poster_path,
      });
    });
  }

  render() {
    const { from, search } = this.state;

    return (
      <>
        <GoBackButton from={from} search={search} />
        <MovieDetails {...this.state} />
        <AdditionalInfo {...this.props} />
      </>
    );
  }
}


