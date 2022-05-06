const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan');
app.use(bodyParser.json());
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body '));


app.use(express.json())

const cors = require('cors')
app.use(cors())


const socketio = require('socket.io')
const http = require('http');
const httpServer = http.createServer(app);               
const io = new socketio.Server(httpServer,{
  cors: {
    origin: "*",
    methods: ["GET","POST"]
  }
});
const codeLength = 6
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
  for (let i = 0; i<codeLength; i++) {
    text=text.concat(allowed[Math.floor(Math.random()*allowed.length)])
  }
  return text
}

app.post('/api/create',(req,res) => {
  const code = generateCode()
  const roomObject = {
    "name":req.body.name,
    "code":code,
    "online":[]
  }
  rooms.pus
  
})
app.get('/api/rooms',(req,res) => {

})
app.post('/api/join',(req,res) => {

})

io.on('connection', (socket) => {

  console.log('a user connected'); 

  socket.on('user connect',(username,roomCode) => {
    io.emit('user connect',username)
    console.log(username)
  })

  socket.on('message',(author,message) => {
    io.emit('message',author,message)
  })

});




const PORT = process.env.PORT || 3001
httpServer.listen(3001,() => {
  console.log(`Connected on port ${PORT}`);
});
