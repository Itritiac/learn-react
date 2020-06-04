import React from 'react';

import styles from './form.module.css';

let Form = (props) => {

	let newPostElement = React.createRef();

	let addPost = () =>{
		let text = newPostElement.current.value;
		props.addPost (text);
		props.updateNewPostText('');
	}

	let onPostChange = () =>{
		let text = newPostElement.current.value;
		props.updateNewPostText();
	}

	return(
		<div className={styles.contactForm}>
					<div className={styles.formName}>
						<input type="text" className={styles.name} name="fname" placeholder="Your Name" /><br />
						<input type="email" className={styles.name} name="fname" placeholder="Your Surname" /><br />
					</div>

					<div>
						<textarea onChange={onPostChange} className={styles.FormText} rows="4" ref={newPostElement} cols="50" name="comment" form={"usrform"} value={props.newPostText} placeholder="Your Post"/>
					</div>
					<button onClick={addPost} className={styles.formButton}>Send message</button>

				</div>

		);
}





export default Form;