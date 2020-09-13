
import React, { Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import HomePage from './pages/HomePage'

// ===============================================================
import { getMovieDetails } from './services/GetFetch';
import MovieDetailsPage from './pages/MovieDetailsPage';


console.log(getMovieDetails(337401));

let newDate = new Date ('2019-09-10')
let year = newDate.getFullYear()
console.log(year);
// =====================================================================


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
            <Route path="/" exact component={HomePage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            {/* <Route path="/movies" component={MoviesPage} /> */}
            {/* <Redirect to="/" /> */}
          </Switch>
        </Suspense>
      </div>
         </main>
      </>
    );
  
}
