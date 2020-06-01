import React from 'react';

import Form from './Form/Form';
import Post from './Post/Post';
import UserProfile from './UserProfile/UserProfile';

let Profile = () =>{
  return(
          <div >
            <UserProfile />
            <Form />
            <div><h2>Posts</h2></div>
            <Post name="Tritiac Ion" messsage="It's my first comment."/>
            <Post name="Oprea Dumitru" messsage="It is awesome!"/>
          </div>
  );
}

export default Profile;