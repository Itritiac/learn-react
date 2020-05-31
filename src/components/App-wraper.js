import React from 'react';

import Header from './jsx/Header.js';
import Nav from './jsx/Nav';
import Content from './jsx/Content';



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