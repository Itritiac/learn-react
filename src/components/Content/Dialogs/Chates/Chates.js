import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './chates.module.css';
import ChatItem from './ChatItem/ChatItem.js';


let Chates = (props) =>{

  let dataChat = [
    {id:1, name: 'Stas Rusnac', status: 'Last seen 5 minute ago'},
    {id:2, name: 'Vadim Surugiu', status: 'Last seen 20 minute ago'},
    {id:3, name: 'Ion Moraru', status: 'Last seen error'}
  ]

  let dataElements = dataChat
  .map( dataChat => <ChatItem  name={dataChat.name} id={dataChat.id} status={dataChat.status}/>);



  return(
          <div className={styles.chates}>
            {dataElements}
          </div>
  );
}

export default Chates;