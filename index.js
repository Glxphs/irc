const SocketServer = require('ws').Server;

const port = process.env.PORT || 8887;

const server = require('express')().listen(port);
const wsServer = new SocketServer({ server });

wsServer.on('connection', (ws) => {
    console.log('connected');
    wsServer.clients.forEach(client => {
        if (client != ws) {
            client.send("User Connected.");
        }
    });

    ws.on('message', (arrayData) => {
        wsServer.clients.forEach(client => {
            client.send(arrayData);
        });
        console.log(arrayData)
    });
}); 
