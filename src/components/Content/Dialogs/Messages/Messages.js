import React from 'react';

import styles from './message.module.css';




const Message = (props) =>{

	return(
		<div className={styles.message}>
		{props.name}<br/><br/>{props.message}
		</div>
		);

}

let Messages = (props) =>{

			let messagesData = [
				{id: 1, name: 'Sandu Rusnac', message: 'Hi. This message is awesome'}
			]
			
			let messagesElements = messagesData.
			map (messagesData =><Message name={messagesData.name} message={messagesData.message} id={messagesData.id} />); 

			

  return(
  
            	<div className={styles.message}>
            		{messagesElements}
            	</div>
            	
        
  );
}

export default Messages;