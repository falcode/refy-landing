import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Layout from "../layout/layout";
import nextI18NextConfig from "../next-i18next.config.js";
import createEmotionCache from "../components/material-ui/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline } from "@material-ui/core";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function RefyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
}

export default appWithTranslation(RefyApp, nextI18NextConfig);
