import { useSession } from 'next-auth/react'
import Layout from '../components/layout'

export default function Page () {
  const { data: session, status } = useSession<any>()


  return (
    <Layout>
      {session?<h1>{session.user?.name}</h1>:null}
      
      <p>
        This is an example site to demonstrate how to use <a href={`https://next-auth.js.org`}>NextAuth.js</a> for authentication.
      </p>
    </Layout>
  )
}