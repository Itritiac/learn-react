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

			

  return(
  
            	<Message name={messagesData[0].name} message={messagesData[0].message} id={messagesData[0].id} />
            	
        
  );
}

export default Messages;