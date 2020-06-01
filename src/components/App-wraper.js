import React from 'react';

import Header from './Header/Header';
import Nav from './Nav/Nav';
import Content from './Content/Profile/Content';



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