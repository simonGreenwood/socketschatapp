import { useColorMode, Center, Heading, Input, Stack, Button } from "@chakra-ui/react"
import { useState } from "react"

const Create = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [error,setError] = useState(false)
  const handleSubmit = () => {
    console.log('user has submitted')
  }
  return (
    <div>
      <Center>
        <Stack direction={'column'} spacing='24px'>
          <Center>
            <Heading>Create a Room</Heading>
          </Center> 
          <Input placeholder='Enter a name' focusBorderColor={error ? colorMode === 'light' ? 'teal.500' : 'teal.100' : 'red.500'} width='420px' height='60px'/>
          <Button colorScheme='teal' width='420px' height='60px' onClick={() => handleSubmit()}>Create a Room</Button>
        </Stack>
      </Center>
    </div>
  )
}
export default Create