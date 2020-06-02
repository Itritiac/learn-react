import React from 'react';

import Form from './Form/Form';
import Post from './Post/Post';
import UserProfile from './UserProfile/UserProfile';


let Profile = (props) =>{

	let posts =[
		{id: 1, messsage : "It's my first comment.", likes: 23},
		{id: 2, messsage : "It is awesome!", likes: 12}
	]

	let postsElements =
		posts.map( p => <Post messsage={p.messsage}  likes={p.likes}/>)

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