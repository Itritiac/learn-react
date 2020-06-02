import React from 'react';

import styles from './chates.module.css';



let Chates = () =>{
  return(
          <div className={styles.chates}>
            <div >
            <ul>
            	<li className={styles.name}>Maria Rosca</li>
            	<li className={styles.dialogs}>was online 5 minute ago</li>
            </ul>

             <ul>
            	<li className={styles.name}>Stas Rusnac</li>
            	<li className={styles.dialogs}>last seen 5 minute ago</li>
            </ul>

            <ul>
            	<li className={styles.name}>Vadim Surugiu</li>
            	<li className={styles.dialogs}>last seen 20 minute ago</li>
            </ul>

            <ul>
            	<li className={styles.name}>Ion Moraru</li>
            	<li className={styles.dialogs}>last seen error</li>
            </ul>
          </div>

          </div>
  );
}

export default Chates;