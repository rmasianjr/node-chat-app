var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Eric',
    text: 'a message from user'
  });
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});
