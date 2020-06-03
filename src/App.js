import React from 'react';

import logo from './logo.svg';
import './App.css';
import AppWrapper from './components/App-wraper';



let  App = (props) => {



  return (
    <AppWrapper posts={props.posts} dataChat={props.dataChat} messagesData={props.messagesData}/>
  );
}





export default App;
