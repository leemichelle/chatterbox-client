var Friends = {
  friendsArray: [],
  
  initialize: function() {
    $('#chats').on('click', ".username", function(e){
        Friends.toggleStatus.call(this);
    });
  },
     
  toggleStatus: function() {
    var val = $(this).text();
    var parentDiv = $(this).parent('.chat');
    if(!Friends.friendsArray.includes(val)){
      Friends.friendsArray.push(val);
     $('.'+val).parent().addClass('friend');
    }else {
      var index = Friends.friendsArray.indexOf(val);
      Friends.friendsArray.splice(index, 1);
      $('.'+val).parent().removeClass('friend');
    }
  }
};