import React from 'react';

import styles from './form.module.css';

let Form = () => {
	return(
		<div className={styles.contactForm}>
					<div className={styles.formName}>
						<input type="text" className={styles.name} name="fname" placeholder="Your Name" /><br />
						<input type="email" className={styles.name} name="fname" placeholder="Your Surname" /><br />
					</div>

					<div>
						<textarea className={styles.FormText} rows="4" cols="50" name="comment" form="usrform" placeholder="Your Post"></textarea>
					</div>
					<button className={styles.formButton}>Send message</button>

				</div>

		);
}





export default Form;