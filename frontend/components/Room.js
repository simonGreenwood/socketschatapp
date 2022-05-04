import { 
  Button,
  Center,
  Flex, 
  Text,
  Box,
  Spacer
} from "@chakra-ui/react";

import { useRouter } from "next/router";

const Room = ({roomName,roomMembers,roomCode}) => {
  const router = useRouter()
  const joinRoom = () => {
    router.push(roomCode)
  }
  return (
    <div>
      <Flex border='1px solid grey' borderRadius='5px' width='420px' height='60px'>
        <Box mr='2' ml='2'>
          <Text fontSize='xl' mb='0' pb='0'fontWeight='bold'>{roomName} ({roomCode})</Text>
          <Text fontSize='sm' mt='0' pt='0'>{roomMembers} members online</Text>
        </Box>
        <Spacer/>
        <Center>
          <Button mr='10px' size='md' onClick={joinRoom} colorScheme='teal'>Join Room</Button>
        </Center>
      </Flex>
    </div>
  )
}
export default Room