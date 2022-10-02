import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import Layout from '../components/layout'

export default function Page() {
  const { data: session, status } = useSession<any>()
  
useEffect(()=>{
  setTimeout(()=>{
    console.log(process.env.TEST)
  },500)
})

  return (
    <Layout>
      <h1>{process.env.TEST}</h1>

    </Layout>
  )
}