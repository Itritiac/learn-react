import React from 'react';

import Header from './Header/Header';
import Nav from './Nav/Nav';
import Content from './Content/Content.js';



let  AppWrapper = () => {
  return (
    
      <div className = 'app-wrapper'>
         <Header />
         <Nav />
       	<Content />
      </div>


  );
}

export default AppWrapper;