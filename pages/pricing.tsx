import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Pricing: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pricing</title>
        <meta property="og:title" content="Pricing" key="pricing" />
      </Head>
      <div className="w-full h-screen bg-blue-300 flex items-center justify-center">
        <h1>Pricing</h1>
      </div>
    </>
  )
}

export default Pricing
