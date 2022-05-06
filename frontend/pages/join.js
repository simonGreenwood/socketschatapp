import Room from '../components/Room'
import { Button, Center, Heading, Stack } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
export default function Join() {
  const router = useRouter()
  const handleCreate = () => {
      router.push('create')
  }
  return (
    <div>
      
      <Center>
        <Stack direction={'column'} spacing='24px'>
          <Center>
            <Heading>Join a Room</Heading>
          </Center>
          <Button leftIcon={<AddIcon />} onClick={() => handleCreate()} height='60px'width='420px' colorScheme='teal'>Create</Button>
          <Room roomName='Global' roomMembers={6} roomCode='MNOPQR' />
          <Room roomName='Doge' roomMembers={3} roomCode='GHIJKL' />
          <Room roomName='Simons room' roomMembers={7} roomCode='ABCDEF' />
        </Stack>
      </Center>
    </div>
  )
}