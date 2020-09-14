import React, { Component } from 'react';

import Styles from './CastStyles.module.css';
import { getMovieCast } from '../../services/GetFetch';

export default class AsyncCast extends Component {
  state = {
    cast: [],
  };
  componentDidMount() {
    const id = this.props.id;
    getMovieCast(id).then(({ data }) =>
      this.setState({
        cast: data.cast,
      }),
    );
  }
  render() {
    const { cast } = this.state;

    return (
      <>
        <ul className={Styles.castList}>
          {cast.map(
            item =>
              item.profile_path && (
                <li key={item.credit_id} className={Styles.castListItem}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${item.profile_path}`}
                    alt={item.name}
                    width="75"
                    className={Styles.castPosterImg}
                  />

                  <p>{item.name}</p>
                  <p>{item.character}</p>
                </li>
              ),
          )}
        </ul>
      </>
    );
  }
}
