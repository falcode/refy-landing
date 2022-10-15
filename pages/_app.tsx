import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Layout from "../layout/layout";
import nextI18NextConfig from "../next-i18next.config.js";
import Script from "next/script";

function RefyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
      <Layout>
        <Script id="googleTagManagerJs" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-DTK9CRBM74`} />
        <Script id="googleTagManagerScript" strategy="lazyOnload">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-DTK9CRBM74', {
                    page_path: window.location.pathname,
                    });
                `}
        </Script>
        <Component {...pageProps} />
      </Layout>
  );
}

export default appWithTranslation(RefyApp, nextI18NextConfig);
