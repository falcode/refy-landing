import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import Layout from '../layout/layout'
import nextI18NextConfig from '../next-i18next.config.js';

function RefyApp({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default appWithTranslation(RefyApp, nextI18NextConfig)
