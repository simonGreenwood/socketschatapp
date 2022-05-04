const express = require('express');
const app = express();
const socketio = require('socket.io')
const http = require('http');
const { randomBytes } = require('crypto');
const httpServer = http.createServer(app);
const io = new socketio.Server(httpServer,{
  cors: {
    origin: "*",
    methods: ["GET","POST"]
  }
});

const rooms = []
/*
{
  "name": name,
  "code": code,
  "online":[]
}
*/
const generateCode = () => {
  const allowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"//abcdefghijklmnopqrstuvwxyz0123456789"
  let text = ''
  for (let i = 0; i<6; i++) {
    text=text.concat(allowed[Math.floor(Math.random()*allowed.length)])
  }
  return text
}
io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('user connect',username => {
    io.emit('user connect',username)
    console.log(username)
  })

  socket.on('message',(author,message) => {
    io.emit('message',author,message)
  })
  
  

  //make sure names meet criteria
  socket.on('verify username',(username) => {
    if ( username.length.trim() < 15 && username.length.trim() > 5) {
      console.log('valid username')
    }
  })

  socket.on('verify room name',(roomName) => {
    if (10 > roomName.length && roomName.length > 5) {
      console.log('room name is valid')
    }
  });



  // room logic
  socket.on('join room',code => {
    console.log(`joining room ${code}`)
    const room = rooms.find(room => room.code === code)
    if (room){
      console.log('we have found the room')
    }
  })
  socket.on('get rooms',() => {
    console.log(rooms)
  })
  socket.on('create room',(name) => {
    rooms.push({
      name:name,
      code:generateCode(),

    })
  })
});



const PORT = process.env.PORT || 3001
httpServer.listen(3001,() => {
  console.log(`Connected on port ${PORT}`);
});
