import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './chates.module.css';


const ChatItem = (props) =>{
  let path = `/dialogs/${props.id}`;

  return (
    <div>
    <ul>
    <li className={styles.name}>
      <NavLink to={path} >{props.name}</NavLink>
      </li>
    <li className={styles.status}>
      {props.status}
    </li>
    </ul>
    </div>

    );
}


let Chates = (props) =>{

  let dataChat = [
    {id:1, name: 'Stas Rusnac', status: 'Last seen 5 minute ago'},
    {id:2, name: 'Vadim Surugiu', status: 'Last seen 20 minute ago'},
    {id:3, name: 'Ion Moraru', status: 'Last seen error'}
  ]

  return(
          <div className={styles.chates}>
            <div >
              <ChatItem  name={dataChat[0].name} id={dataChat[0].id} status={dataChat[0].status}/>
              <ChatItem  name={dataChat[1].name} id={dataChat[1].id} status={dataChat[1].status} />
              <ChatItem  name={dataChat[2].name} id={dataChat[2].id} status={dataChat[2].status} />
            
         

          </div>
        </div>
  );
}

export default Chates;