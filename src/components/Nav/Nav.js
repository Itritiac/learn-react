import React from 'react';
import {NavLink} from "react-router-dom";

import styles from './nav.module.css'

let Nav = () => {
  return(
    <nav className = {styles.nav}>
          <ul>
            <li>
              <NavLink exact activeClassName={styles.active} to="/profile">Profile</NavLink>
            </li>

            <li>
              <NavLink exact activeClassName={styles.active} to="/dialogs">Messages</NavLink>
            </li>

            <li>
              <NavLink exact activeClassName={styles.active} to="/news">News</NavLink>
            </li>

            <li>
              <NavLink exact activeClassName={styles.active} to="/music">Music</NavLink>
            </li>

            <li>
              <NavLink exact activeClassName={styles.active} to="/settings">Settings</NavLink>
            </li>
          </ul>
        </nav>
  );
}

export default Nav;