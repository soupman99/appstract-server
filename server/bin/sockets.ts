// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   console.log(socket.id);
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
//
//
//   socket.on("mouseEvent", function(data){
//     data.socket_id = socket.id;
//
//     console.log("Mouse Event Server - %s ", JSON.stringify(data));
//     io.emit('drawMouse', data);
//
//   })
// });

export function initSockets(io) {
  // console.log('init socket');
  io.on('connection', function (socket) {

    console.log("connecting to socket");

  });
}
