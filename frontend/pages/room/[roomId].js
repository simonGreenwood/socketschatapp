import {useRouter} from 'next/router'
export default () => {
  const router = useRouter()
  console.log('This is a room!')
  const handleLeave = () => {
    router.push('/')
  }
  return ( 
    <div>
      Room {router.query.roomId}
      <button onClick={() => handleLeave()}>Leave</button>
    </div>
  )
}