let store = {

  _state: {

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
  },

  getState() {
      return this._state;
  },

  _renderEntireTree() {
    console.log('state changed');
  },

  addPost(postMessage) {
    debugger;
    let newPost = {
      id: 5,
      messsage: postMessage,
      likes: 10
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._renderEntireTree(this._state);
  },

  updateNewPostText(NewText) {

    this._state.profilePage.newPostText = NewText;
    this._renderEntireTree(this._state);

  },

  subscribe(observer) {
    
    this._renderEntireTree = observer; // this is pattern 

  } 



}

window.store = store;
export default store;