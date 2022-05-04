import { useRouter } from "next/router"
import { useState,useEffect } from "react"
import {joinRoom,connect} from '../services/sockets'
const roomId = () => {
    const router = useRouter()
    const [socket,setSocket] = useState(null)
    const [messages,setMessages] = useState(null)
    useEffect(() => {
        connect()
    },[])
    return (
        <button onClick={() => {
            joinRoom(router.query.roomId,connect())
        }}>asdf</button>
    )
}
export default roomId