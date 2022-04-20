import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'
export default function Home() {
  const router = useRouter()
  const handleJoinClicked = () => {
    router.push('/room/doge')
  }
  const handleCreateClicked = () => {}
  return (
    <div className=''>
      <h1 className='text-3xl blue'>Chatapp</h1>
    </div>
  )
}
