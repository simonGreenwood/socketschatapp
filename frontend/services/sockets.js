import {io} from 'socket.io-client'
export const connect = (name,messages,setMessages) => {
    const socket = io('localhost:3001')
    socket.emit('user connect',name)
    socket.on('message',(message,author,timestamp) => {
        console.log(`${author} sent ${message} at ${timestamp}`)
    }) // socket logic goes here
    return socket
}

export const joinRoom = (code,socket) => {
    socket.emit('join room',code)
}