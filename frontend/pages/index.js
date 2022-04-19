import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'
export default function Home() {
  const router = useRouter()
  const { pid } = router.query
  return (
    <div className={styles.container}>
      <Head>
        <title>Chat App</title>
      </Head>
      <Link href={`/room/420`}>
        <a>this page!</a>
      </Link>
    </div>
  )
}
