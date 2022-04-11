import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta property="og:title" content="Home" key="home" />
      </Head>
      <div className="w-full h-screen bg-rose-400 flex items-center justify-center">
        <h1>Home</h1>
      </div>
    </>
  )
}

export default Home
