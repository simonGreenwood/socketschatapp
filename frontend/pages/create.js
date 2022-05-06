import { useColorMode, Center, Heading, Input, Stack, Button } from "@chakra-ui/react"
import React, { useState } from "react"
import { createRoom } from "../services/rooms"
const Create = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [error,setError] = useState(false)
  const [roomName,setRoomName] = useState('')
  const handleSubmit = () => {
    console.log(`creating room ${roomName}`)
    createRoom(roomName)
  }
  return (
    <div>
      <Center>
        <Stack direction={'column'} spacing='24px'>
          <Center>
            <Heading>Create a Room</Heading>
          </Center> 
          <Input placeholder='Enter a name' 
            focusBorderColor={error ? colorMode === 'light' ? 'teal.500' : 'teal.100' : 'red.500'} 
            width='420px' value={roomName} 
            onChange={event => setRoomName(event.target.value)}height='60px'
          />
          <Button colorScheme='teal' width='420px' height='60px' onClick={() => handleSubmit()}>Create a Room</Button>
        </Stack>
      </Center>
    </div>
  )
}
export default Create