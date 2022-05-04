import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import theme from '../theme'
import {
  ColorModeScript,
  Button,
  
} from '@chakra-ui/react'

import { MoonIcon, SunIcon} from '@chakra-ui/icons'

import { useColorMode } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Home() {
  const {colorMode, toggleColorMode} = useColorMode()
  const router = useRouter()
  const handleJoin = () => {
    router.push('join')
  }
  const handleCreate = () => {
    router.push('create')
  }
  return (
    <div>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Button colorScheme='teal' onClick={() => handleJoin()}>Join a Room</Button>
        <Button colorScheme='teal' onClick={() => handleCreate()}>Create a Room</Button>
    </div>
  )
}
