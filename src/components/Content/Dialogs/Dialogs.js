import React from 'react';
import Chates from './Chates/Chates';
import Messages from './Messages/Messages';

import styles from './dialog.module.css';



let Dialogs = (props) =>{
  return(
          <div className={styles.dialogs}>
            <Chates/>
            <Messages/>
          </div>
  );
}

export default Dialogs;