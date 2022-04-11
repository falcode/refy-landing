import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta property="og:title" content="Contact" key="contact" />
      </Head>
      <div className="w-full h-screen bg-white flex items-center justify-center">
        <h1>Contact</h1>
      </div>
    </>
  )
}

export default Contact
