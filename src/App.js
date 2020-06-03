import React from 'react';

import logo from './logo.svg';
import './App.css';
import AppWrapper from './components/App-wraper';



let  App = (props) => {



  return (
    <AppWrapper posts={props.state.profiePage.posts} dataChat={props.state.chatPage.dataChat} messagesData={props.state.chatPage.messagesData}/>
  );
}





export default App;
