import Room from '../components/Room'
import { Button, Center, Heading, Stack } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
export default function Join() {
  return (
    <div>
      
      <Center>
        <Stack direction={'column'} spacing='24px'>
          <Center>
            <Heading>Join a Room</Heading>
          </Center>
          <Button leftIcon={<AddIcon />} height='60px'width='420px' colorScheme='teal'>Create</Button>
          <Room roomName='Global' roomMembers={6} roomCode='MNOPQR' />
          <Room roomName='Doge' roomMembers={3} roomCode='GHIJKL' />
          <Room roomName='Simons room' roomMembers={7} roomCode='ABCDEF' />
        </Stack>
      </Center>
    </div>
  )
}