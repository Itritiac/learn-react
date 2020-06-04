import {renderEntireTree} from './../render'

let state = {

  profilePage :{
    posts : [
      {id: 1, messsage : "It's my first comment.", likes: 23},
      {id: 2, messsage : "It is awesome!", likes: 12}
    ],

    newPostText: ''
  },

  chatPage : {
    dataChat : [
      {id:1, name: 'Stas Rusnac', status: 'Last seen 5 minute ago'},
      {id:2, name: 'Vadim Surugiu', status: 'Last seen 20 minute ago'},
      {id:3, name: 'Ion Moraru', status: 'Last seen error'}
    ],
  
    messagesData : [
      {id: 1, name: 'Sandu Rusnac', message: 'Hi. This message is awesome'}
    ]
  }


  }
  window.state=state;
  export let addPost = (postMessage) => {
    let newPost = {
      id: 5,
      messsage: postMessage,
      likes: 10
    };

    state.profilePage.posts.push(newPost);
    renderEntireTree(state);

  }

  export let updateNewPostText = (NewText) => {

    state.profilePage.newPostText = NewText;
    renderEntireTree(state);

  }



export default state;