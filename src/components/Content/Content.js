import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Profile from './Profile/Profile.js';
import Dialogs from './Dialogs/Dialogs.js';
import News from './News/News.js'
import Music from './Music/Music.js';
import Settings from './Settings/Settings.js';


import styles from './content.module.css';

let Content = () =>{
  return(
          <div className={styles.content}>
          	{/* <Profile} />  */}
          	<Route path="/dialogs" component={Dialogs}/>
          	<Route path="/profile" component={Profile}/>
          	<Route path="/news" component={News}/>
          	<Route path="/music" component={Music}/>
          	<Route path="/settings" component={Settings}/>
          </div>
          
  );
}

export default Content;