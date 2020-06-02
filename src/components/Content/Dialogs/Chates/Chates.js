import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './chates.module.css';


const ChatItem = (props) =>{
  let path = `/dialogs/${props.id}`;

  return (
    <div>
      <NavLink to={path} >{props.name}<br/>{props.status}</NavLink>
      
    </div>

    );
}


let Chates = (props) =>{
  return(
          <div className={styles.chates}>
            <div >
            <ul>
              <li className={styles.name}>
                <ChatItem  name="Maria Rosca" id="1"/>
              </li>
              <li className={styles.status}>
                <ChatItem status="was online 5 minute ago" id="1"/>
              </li>
            </ul>

             <ul>
                <li className={styles.name}>
                  <ChatItem  name="Stas Rusnac" id="2"/>
                </li>
                <li className={styles.status}>
                  <ChatItem status="last seen 5 minute ago" id="2"/>
                </li>
              </ul>

              <ul>
                <li className={styles.name}>
                  <ChatItem  name="Vadim Surugiu" id="3"/>
                </li>
                <li className={styles.status}>
                  <ChatItem status="last seen 20 minute ago" id="3"/>
                </li>
              </ul>

              <ul>
                <li className={styles.name}>
                  <ChatItem  name="Ion Moraru" id="4"/>
                </li>
                <li className={styles.status}>
                  <ChatItem status="last seen error" id="4"/>
                </li>
              </ul>
         

          </div>
        </div>
  );
}

export default Chates;