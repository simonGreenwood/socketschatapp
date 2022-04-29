const io = require('socket.io-client')
const socket = io('localhost:3001')
socket.emit('message','yo')
socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });