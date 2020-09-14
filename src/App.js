
import React, { Suspense, lazy } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
// import HomePage from './pages/HomePage'
// import MovieDetailsPage from './pages/MovieDetailsPage';
// import MoviesPage from './pages/MoviesPage';

const AsyncHomePage = lazy(()=>import('./pages/HomePage' /* webpackChunkName: "HomePage" */))
const AsyncMovieDetailsPage = lazy(()=>import('./pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */))
const AsyncMoviesPage = lazy(()=>import('./pages/MoviesPage' /* webpackChunkName: "MoviesPage" */))


export default function App() {
      
    return (
      <>
      <header className='borderStyle'>
         <Navigation />
         </header>
         <main>

      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={AsyncHomePage} />
            <Route path="/movies/:movieId" component={AsyncMovieDetailsPage} />
            <Route path="/movies" component={AsyncMoviesPage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
         </main>
      </>
    );
  
}
