export function initSockets(io) {
  var allClients = [];
  // console.log('init socket');
  io.on('connection', function (socket) {
    //, ip:socket.request.client._peername.address
    allClients.push(socket.id);
    io.emit('receiveAllClients', allClients);

    socket.on('mouseEvent', function (data) {
      if (data.id) {

        console.log('mouseEvent %s', JSON.stringify(data));

        io.emit('drawMouse', data);
      }
    })




    socket.on('disconnect', function() {
      console.log('Got disconnect!');
      console.log(allClients.length);

      var i = allClients.indexOf(socket.id);
      allClients.splice(i, 1);
      console.log(allClients.length);
    });

  });



}
