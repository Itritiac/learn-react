import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let posts =[
  {id: 1, messsage : "It's my first comment.", likes: 23},
  {id: 2, messsage : "It is awesome!", likes: 12}
]
let dataChat = [
  {id:1, name: 'Stas Rusnac', status: 'Last seen 5 minute ago'},
  {id:2, name: 'Vadim Surugiu', status: 'Last seen 20 minute ago'},
  {id:3, name: 'Ion Moraru', status: 'Last seen error'}
]

let messagesData = [
  {id: 1, name: 'Sandu Rusnac', message: 'Hi. This message is awesome'}
]
ReactDOM.render(
  
  <React.StrictMode>
    
    <App posts={posts} dataChat={dataChat} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
