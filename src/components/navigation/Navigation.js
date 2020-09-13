import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Styles from './NavigationStyles.module.css'
// import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';

function Navigation() {
  return (
      <nav>
        <ul className={Styles.navList}>
          <li>
            <NavLink
              to={{
                pathname: "/",
               
              }}
              className={Styles.navListItem}
              activeClassName={Styles.navListItemActive}
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: "/movies",
                
              }}
              className={Styles.navListItem}
              activeClassName={Styles.navListItemActive}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
  );
}

export default withRouter(Navigation);


