var Rooms = {
  add: function() {
      console.log('hi');
      RoomsView.$select.append('<option value="'+$('#roomID').val()+'">'+$('#roomID').val()+'</option>');
  }

};