import React, { Component } from 'react'
import  Styles from './MovieDetailsStyles.module.css';

export default class MovieDetails extends Component{

    render(){
        const{title,releaseYear,score,overview,genres,posterSrc} = this.props
        return (
          <div className={Styles.movieWrapper}>
              <div className={Styles.moviePosterImg}>
                  {posterSrc&&(

            <img src={`https://image.tmdb.org/t/p/original/${posterSrc}`} alt={title} width='250'/>
                  )}

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
