const express = require('express');
const app = express();
const socketio = require('socket.io')
const http = require('http')
const httpServer = http.createServer(app);
const io = new socketio.Server(httpServer,{
    cors: {
        origin: "*"
    }
  });

io.on('connection', (socket) => {
    console.log('a user connected');
});
const PORT = process.env.PORT || 3001
app.listen(3001,() => {
    console.log(`Connected on port ${PORT}`)
})
