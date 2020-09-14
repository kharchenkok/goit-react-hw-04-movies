import React, { Component, Suspense, lazy } from 'react';
import { withRouter, Switch, Route, NavLink } from 'react-router-dom';
import Styles from './AdditionalInfoStyles.module.css';
// import Cast from '../cast/Cast';
// import Reviews from '../reviews/Reviews';

const AsyncCast = lazy(() =>
  import('../cast/Cast' /* webpackChunkName: "Cast" */),
);
const AsyncReviews = lazy(() =>
  import('../reviews/Reviews' /* webpackChunkName: "Reviews" */),
);

class AdditionalInfo extends Component {
  render() {
    const { match } = this.props;
    const id = match.params.movieId;

    return (
      <div className={Styles.additionalWrapper}>
        <p className={Styles.additionalTitle}>Additional information</p>
        <div>
          <NavLink
            to={{
              pathname: `${match.url}/cast`,
            }}
            className={Styles.additionalItem}
            activeClassName={Styles.additionalItemActive}
          >
            Cast
          </NavLink>
          <NavLink
            to={{
              pathname: `${match.url}/reviews`,
            }}
            className={Styles.additionalItem}
            activeClassName={Styles.additionalItemActive}
          >
            Reviews
          </NavLink>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              path={`${match.url}/cast`}
              render={props => <AsyncCast {...props} id={id} />}
            />
            <Route
              path={`${match.url}/reviews`}
              render={props => <AsyncReviews {...props} id={id} />}
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}
export default withRouter(AdditionalInfo);
