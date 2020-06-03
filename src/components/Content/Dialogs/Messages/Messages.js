import React from 'react';

import styles from './message.module.css';
import MessageItem from './MessageItem/MessageItem';






let Messages = (props) =>{

			let messagesData = [
				{id: 1, name: 'Sandu Rusnac', message: 'Hi. This message is awesome'}
			]
			
			let messagesElements = messagesData.
			map (messagesData =><MessageItem name={messagesData.name} message={messagesData.message} id={messagesData.id} />); 

			

  return(
  
            	<div className={styles.message}>
            		{messagesElements}
            	</div>
            	
        
  );
}

export default Messages;