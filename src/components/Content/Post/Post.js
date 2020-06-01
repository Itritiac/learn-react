import React from 'react';

import styles from './post.module.css';

let Post = (props) =>{
  return(
    <div>
      
    <div className={styles.post}>
      <img src="https://www.w3schools.com/howto/img_avatar.png"/>
      <div>
  <div><strong>{props.name}</strong></div>
        <div>{props.messsage}</div>
      </div>
    </div>
    </div>
  );
}

export default Post;