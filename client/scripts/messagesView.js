var MessagesView = {

  $chats: $('#chats'),
  $message: $('#message'),

  initialize: function() {
    // $('.username').click(function() {
    //   Friends.toggleStatus();
    // });
  },

  render: function(){

  },
  
  renderMessage: function(dataObj){
    MessagesView.$chats.append(MessageView.render(dataObj));
    // console.log(MessageView.render(dataObj));
    if(Friends.friendsArray.includes(dataObj.username)){
      $('.'+dataObj.username).parent().addClass('friend');
    }
  }
};