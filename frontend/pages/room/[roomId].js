import {useRouter} from 'next/router'
export default () => {
  const router = useRouter()
  console.log('This is a room!')
  return ( 
    <div>
      Room {router.query.roomId}
      <button onClick={router.push('/')}></button>
    </div>
  )
}