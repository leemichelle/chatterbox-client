var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify({
      "username": App.username, 
      "roomname": RoomsView.$select.val(),
      "text": MessagesView.$message.val()
    }),
      contentType: 'application/json',
      success: function(data){
        console.log('message sent')},
      error: function(error) {
        console.error('chatterbox: Failed to send messages', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: ({ order: '-createdAt'}),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};