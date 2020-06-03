import React from 'react';

import Form from './Form/Form';
import Post from './Post/Post';
import UserProfile from './UserProfile/UserProfile';


let Profile = (props) =>{


	let postsElements =
		props.posts.map( p => <Post messsage={p.messsage}  likes={p.likes}/>)

  return(
          <div >
            <UserProfile />
            <Form />
            <div><h2>Posts</h2></div>
            <div>{postsElements}</div>
          </div>
  );
}

export default Profile;