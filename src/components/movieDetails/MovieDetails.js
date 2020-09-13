import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { getMovieDetails } from '../../services/GetFetch';
import  Styles from './MovieDetailsStyles.module.css';

class MovieDetails extends Component{
    state={
        title:'',
        releaseYear:'',
        score:'',
        overview:'',
        genres:[],
        posterSrc:'',
        
    }

    async componentDidMount(){
        // console.log(this.props);
        // console.log(this.props.match.params.movieId);
        const id = this.props.match.params.movieId

        await getMovieDetails(id).then(({data})=>{
            // const releaseYear = new Date (`${data.release_date}`).getFullYear()
            // console.log(data);
this.setState({
    title:data.title,
    releaseYear:new Date (`${data.release_date}`).getFullYear(),
        score:data.vote_average,
        overview:data.overview,
        genres:data.genres,
        posterSrc:data.poster_path,

})
        })
    }
    render(){
const{title,releaseYear,score,overview,genres,posterSrc} = this.state
        return (
          <div className={Styles.movieWrapper}>
              <div className={Styles.moviePosterImg}>
            <img src={`https://image.tmdb.org/t/p/original/${posterSrc}`} alt={title} width='250'/>

              </div>
            <div className={Styles.movieDescription}>
        <h2>{title}({releaseYear})</h2>
        <ul className={Styles.movieList}>
            <li className={Styles.movieListItem}>
                <p className={Styles.movieListItemTitle} >User Score:</p>
        <p>{score}</p>
            </li>
            <li className={Styles.movieListItem}>
                <p className={Styles.movieListItemTitle}>Overview:</p>
        <p>{overview}</p>
            </li>
            <li className={Styles.movieListItem}>
                <p className={Styles.movieListItemTitle}>Genres:</p>
        <p>
            {genres.map(genre=>(
                <span key={genre.id} className={Styles.movieListItemSpan}>{genre.name}</span>
            ))}
        </p>
            </li>
        </ul>

            </div>
          </div>
        )
    }
}
export default withRouter(MovieDetails)