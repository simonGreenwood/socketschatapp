import axios from 'axios';

export const createRoom = (name) => {
    axios.post('http://localhost:3001/api/create',{name:name})
}
export const joinRoom = (code) => {
}