import { useSession } from 'next-auth/react'
import Layout from '../components/layout'

export default function Page () {
  const { data: session, status } = useSession<any>()


  return (
    <Layout>
      {session?<h1>{session.user?.name}</h1>:null}
   
    </Layout>
  )
}