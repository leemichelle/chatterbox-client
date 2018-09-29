var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $roomnamesArray: [],

  initialize: function() {

    RoomsView.$button.on('click', Rooms.add());
        
  },

  render: function() {
    
  },
  
  renderRoom: function(roomname){
    if(RoomsView.$roomnamesArray === [] || roomname !== "" && !RoomsView.$roomnamesArray.includes(roomname)){
        RoomsView.$roomnamesArray.push(roomname);
        RoomsView.$select.append('<option value="'+roomname+'">'+roomname+'</option>');
    } 
  }
};
