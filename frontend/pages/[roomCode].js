import { useRouter } from "next/router"
import { useState,useEffect } from "react"
import {joinRoom,connect} from '../services/rooms'
import {Text} from '@chakra-ui/react'
const roomCode = () => {
  const router = useRouter()
  const [socket,setSocket] = useState(null)
  const [messages,setMessages] = useState(null)
  useEffect(() => {
    joinRoom(router.query.roomId)
  },[])
  return (
    <div>
      <Text>{router.query.roomId}</Text>
    </div>
  )
}
export default roomCode