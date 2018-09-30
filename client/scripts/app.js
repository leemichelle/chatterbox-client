var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Friends.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      data.results.forEach(function(el){
        if(el.username && el.text  && el.roomname && App.validateString(el.roomname)){
          MessagesView.renderMessage(el);
          RoomsView.renderRoom(el.roomname);
        }
      });
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },
  
  validateString: function(string) {
    var validity = true;
    if( string == '' ) { 
      validity = false; 
    }
    if( string.match(/[|<|>|\?|\/|:|;|"|'|{|\[|}|\]|\||\\|~|`|@|#|\$|%|\^|&|\*|\(|\)|_|\-|\+|=]+/ ) != null) {
        validity = false;
    }
    return validity;
  }
};

setInterval(function(){
  MessagesView.$chats.empty();
  RoomsView.$roomnamesArray = [];
  App.fetch();
}, 10000);


