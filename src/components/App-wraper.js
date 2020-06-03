import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Header from './Header/Header';
import Nav from './Nav/Nav';
import Content from './Content/Content.js';



let  AppWrapper = (props) => {

  


  return (
    <BrowserRouter>
      <div className = 'app-wrapper'>
         <Header />
         <Nav />
       	<Content posts={props.posts} dataChat={props.dataChat} messagesData={props.messagesData}/>
      </div>
     </BrowserRouter>


  );
}

export default AppWrapper;