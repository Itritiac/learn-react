import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './chates.module.css';
import ChatItem from './ChatItem/ChatItem.js';


let Chates = (props) =>{

  

  let dataElements = 
  props.dataChat.map( dataChat => <ChatItem  name={dataChat.name} id={dataChat.id} status={dataChat.status}/>);



  return(
          <div className={styles.chates}>
            {dataElements}
          </div>
  );
}

export default Chates;