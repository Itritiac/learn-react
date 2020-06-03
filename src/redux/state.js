
let state = {

  profiePage :{
    posts : [
      {id: 1, messsage : "It's my first comment.", likes: 23},
      {id: 2, messsage : "It is awesome!", likes: 12}
    ]
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

export default state;