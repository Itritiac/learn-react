import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Profile from './Profile/Profile.js';
import Dialogs from './Dialogs/Dialogs.js';
import News from './News/News.js'
import Music from './Music/Music.js';
import Settings from './Settings/Settings.js';


import styles from './content.module.css';



let Content = (props) =>{

	
  return(
          <div className={styles.content}>
          
						<Route path="/dialogs" render={ () => <Dialogs dataChat={props.dataChat}
																													 messagesData={props.messagesData}/>}/>
						<Route path="/profile" render={ () => <Profile posts={props.posts} 
																													 addPost={props.addPost}
																													 updateNewPostText={props.updateNewPostText} 
																													 newPostText={props.newPostText}/>}/>
          	<Route path="/news" render={ () => <News/>}/>
          	<Route path="/music" render={ () => <Music/>}/>
          	<Route path="/settings" render={ () => <Settings/>}/>
          </div>
          
  );
}

export default Content;