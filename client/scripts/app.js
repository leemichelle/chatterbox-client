var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      data.results.forEach(function(el){
        if(el.text && App.validateString(el.text)){
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
    if( string.match( /[|<|,|>|\.|\?|\/|:|;|"|'|{|\[|}|\]|\||\\|~|`|!|@|#|\$|%|\^|&|\*|\(|\)|_|\-|\+|=]+/ ) != null ) {
        validity = false;
    }
    return validity;
  }
};


