import * as _ from 'lodash';


export function initSockets(io) {
  var allClients = [];
  // console.log('init socket');
  io.on('connection', function (socket) {

    //, ip:socket.request.client._peername.address
    allClients.push({
      id:socket.id,
      ip:socket.request.client._peername.address
    });
    console.log('%s connected', socket.id);

    io.emit('receiveAllClients', allClients);

    socket.on('mouseEvent', function (data) {
      if (data.id) {

        //console.log('mouseEvent %s', JSON.stringify(data));

        io.emit('drawMouse', data);
      }
    })

    // socket.on('updateClient')


    socket.on('disconnect', function() {
      console.log('Got disconnect!');
      console.log(allClients.length);
      console.log('socket to pull %s', socket.id)



      var result = _.filter(allClients, function(client) {
        return client.id == socket.id;
      })[0];

      var i = allClients.indexOf(result);
      console.log(i, 'index');
      allClients.splice(i, 1);
      //console.log(allClients.length);
    });

  });



}
