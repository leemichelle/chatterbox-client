var MessagesView = {

  $chats: $('#chats'),
  $message: $('#message'),

  initialize: function() {
    $('.username').click(function() {
      Friends.toggleStatus();
    });
  },

  render: function(){
  },
  
  renderMessage: function(dataObj){
          this.$chats.append(MessageView.render(dataObj));
        // this.$chats.append(MessageView.render(data));
  }
  
  

};