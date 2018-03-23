const WS = require('ws');

let ws = new WS.Server({ port: 3001});
let clients = []
ws.on('connection', socket => {
  clients.push(socket);
  console.log('hey, new connectee');

  socket.on('message', message => {
    console.log(message);
    clients.forEach((client) => {
      if (client != socket) {
        client.send(message);
      }
    })

  });

});
