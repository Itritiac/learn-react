import React from 'react';

import styles from './../css/form.module.css';

let Form = () => {
	return(
		<form>
		<label>First Name</label><br /><br />
		<input type="text" id="fname" name="fname" placeholder="FirstName"></input><br /><br />

		<label>Second Name</label><br /><br />
		<input type="text" id="sname" name="sname" placeholder="SecondName"></input><br />


		</form>

		);
}





export default Form;