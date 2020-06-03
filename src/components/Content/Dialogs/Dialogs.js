import React from 'react';
import Chates from './Chates/Chates';
import Messages from './Messages/Messages';

import styles from './dialog.module.css';



let Dialogs = (props) =>{
 
  return(
          <div className={styles.dialogs}>
            <Chates dataChat={props.dataChat}/>
            <Messages messagesData={props.messagesData}/>
          </div>
  );
}

export default Dialogs;