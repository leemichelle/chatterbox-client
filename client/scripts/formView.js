var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$form.on('keypress', function(e){if(e.which == 13){FormView.handleSubmit(e);}});
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var messageObj= {
      "username": App.username, 
      "roomname": RoomsView.$select.val(),
      "text": MessagesView.$message.val()
    };
    Parse.create(messageObj);
    MessagesView.$message.val("");
    MessagesView.$chats.empty();
    RoomsView.$select.empty();
    RoomsView.$roomnamesArray = [];
    App.fetch();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};