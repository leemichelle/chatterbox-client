var Rooms = {
  add: function() {
      RoomsView.$select.append('<option value="'+$('#roomID').val()+'" selected="selected">'+$('#roomID').val()+'</option>');
      $('#roomID').val("");
  }
};