import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import Layout from '../components/layout'

export default function Page() {
  const { data: session, status } = useSession<any>()
  
useEffect(()=>{
  setTimeout(()=>{
    console.log(process.env.NEXT_PUBLIC_TEST)
  },500)
})

  return (
    <Layout>
      <h1>{process.env.NEXT_PUBLIC_TEST}</h1>

    </Layout>
  )
}