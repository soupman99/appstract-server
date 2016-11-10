

export function initSockets(io) {
  // console.log('init socket');
  io.on('connection', function (socket) {

    console.log("connecting to socket");
    io.emit('news', 'hello world news')

    socket.on('mouseEvent', function(data){
      console.log('mouseEvent %s', JSON.stringify(data));
      io.emit('drawMouse', data);
    })
  });
}
