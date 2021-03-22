const SocketServer = require('ws').Server;

const port = process.env.PORT || 8887;

const server = require('express')().listen(port);
const wsServer = new SocketServer({ server });

wsServer.on('connection', (ws) => {
    console.log('connected');

    ws.on('message', (arrayData) => {
        wsServer.clients.forEach(function each(client) {
            if (client.readyState === SocketServer.OPEN) {
              client.send(arrayData);
            }
        });
        console.log(arrayData)
    });
}); 
