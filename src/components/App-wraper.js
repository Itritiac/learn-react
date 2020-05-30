import React from 'react';

import Header from './Header';
import Nav from './Nav';
import Content from './Content';

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