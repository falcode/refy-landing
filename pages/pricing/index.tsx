import type { NextPage } from 'next'
import Head from 'next/head'
import { CardCenter, CardLeft, CardRight } from './components/card'
import { Price } from './types/card.type'

const freeOption: Price = {
  title: 'Free',
  currency: '€',
  price: '0',
  frequency: 'monthly',
  options: ['Your own company', '5 employee accounts', 'Points system without shop']

}
const mostPopularOption: Price = {
  title: 'Startup',
  currency: '€',
  price: '190',
  frequency: 'monthly',
  options: ['Unlimited employee accounts', 'Custom ATS integration', 'Reward your employees', 'Custom shop']
}
const fullOption: Price = {
  title: 'Company',
  currency: '€',
  price: '300',
  frequency: 'monthly',
  options: ['Startup pack & more', 'Custom features', 'Personal assistance', 'Multiple ATS integration']
}

const Pricing: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pricing</title>
        <meta property="og:title" content="Pricing" key="pricing" />
      </Head>
      <div className="w-full px-10 py-12 bg-gray-50 flex items-center justify-center">
        <div className="w-full relative rounded-lg ring-1 ring-gray-900 ring-opacity-5">
          <div className="w-full h-96 bg-rose-400 rounded-t-lg flex flex-col items-center pt-7">
            <h1 className='text-white font-bold text-4xl'>We are changing the game, no more bloodsuckers</h1>
            <span className="text-gray-100 text-xl">There is no charge for referral, pay once per month. Organic recruitment forever.</span>
          </div>
          <div className="absolute top-32 w-full flex items-center justify-center">
            <CardLeft {...freeOption}></CardLeft>
            <CardCenter {...mostPopularOption}></CardCenter>
            <CardRight {...fullOption}></CardRight>
          </div>
          <div className="w-full h-60 bg-white rounded-b-lg"></div>
        </div>
      </div>
    </>
  )
}

export default Pricing


