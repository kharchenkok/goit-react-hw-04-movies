import React, { Component, Suspense } from 'react';
// import { getMovieDetails } from '../services/GetFetch';
import { withRouter, Switch, Route } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
// import { getMovieDetails } from './services/GetFetch';
import MovieDetails from '../components/movieDetails/MovieDetails';
import GoBackButton from '../components/goBackButton/GoBackButton';

// class MovieDetailsPage extends Component{
//     state={
//         movie:{},
//         title:'',
//         releaseYear:'',
//         score:'',
//         overview:'',
//         genres:[],
//         posterSrc:'',
//         filmId:'',
//         search:'',
//         from:'',

//     }

//     async componentDidMount(){
//         console.log(this.props);
//         console.log(this.props.match.params.movieId);
//         const id = this.props.match.params.movieId

//         await getMovieDetails(id).then(({data})=>{
//             // const releaseYear = new Date (`${data.release_date}`).getFullYear()
//             console.log(data);
// this.setState({
//     movie:data,
//     title:data.title,
//     releaseYear:new Date (`${data.release_date}`).getFullYear(),
//         score:data.vote_average,
//         overview:data.overview*10,
//         genres:data.genres,
//         posterSrc:data.poster_path,
//         filmId:data.id,

// })
//         })
//     }
//     render(){
// const{movie,title,releaseYear,score,overview,genres,posterSrc,filmId} = this.state
//         return (
//           <>
//             {/* <MovieDetails /> */}
//           </>
//         )
//     }
// }

// export default MovieDetailsPage

class MovieDetailsPage extends Component {
  render() {
    const { match } = this.props;
    const id = match.params.movieId;
    console.log(id);
    console.log('match', match);
    console.log('location', this.props.location);

    return (
      <>
        <GoBackButton {...this.props}/>
        <MovieDetails {...this.props} />
        {/* <AdditionalInfo {...this.props} /> */}
        {/* <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              path={`${match.url}/cast`}
              render={props => <Cast {...props} id={id} />}
            />
            <Route
              path={`${match.url}/reviews`}
              render={props => <Reviews {...props} id={id} />}
            />
          </Switch>
        </Suspense> */}
      </>
    );
  }
}

export default withRouter(MovieDetailsPage);
