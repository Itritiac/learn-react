import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Header from './Header/Header';
import Nav from './Nav/Nav';
import Content from './Content/Content.js';



let  AppWrapper = () => {
  return (
    <BrowserRouter>
      <div className = 'app-wrapper'>
         <Header />
         <Nav />
       	<Content />
      </div>
     </BrowserRouter>


  );
}

export default AppWrapper;