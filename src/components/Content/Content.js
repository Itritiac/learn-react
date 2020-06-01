import React from 'react';

import Profile from './Profile/Profile.js';
import Dialogs from './Dialogs/Dialogs.js';

import styles from './content.module.css';

let Content = () =>{
  return(
          <div className={styles.content}>
          	{/* <Profile} />  */}
          	<Dialogs />
          </div>
  );
}

export default Content;