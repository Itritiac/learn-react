import React from 'react';

import styles from './message.module.css';

const Message = (props) =>{

	return(
		<div>{props.name}<br/><br/>{props.message}</div>
		)

}

let Messages = (props) =>{
  return(
          <div className={styles.message}>
           
            	<Message name="Sandu Rusnac" message="Hi. this message is awesome" />
            	
            
          </div>
  );
}

export default Messages;