import React from 'react';

import styles from './../message.module.css';




const MessageItem = (props) =>{

	return(
		<div className={styles.message}>
		{props.name}<br/><br/>{props.message}
		</div>
		);

}

export default MessageItem;