import React from 'react';

import styles from './../css/nav.module.css'

let Nav = () => {
  return(
    <nav className = {styles.nav}>
          <ul>
            <li>Profile</li>
            <li>Messages</li>
            <li>News</li>
            <li>Music</li>
            <li> </li>
            <li>Settings</li>
          </ul>
        </nav>
  );
}

export default Nav;