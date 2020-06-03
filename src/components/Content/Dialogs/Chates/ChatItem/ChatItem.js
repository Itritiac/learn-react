import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './../chates.module.css';

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

export default ChatItem;