import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Container from "../../layout/container";

function TranslateCommon(text: string, array?: boolean): string {
  const {t} = useTranslation("common");
  return array ? t(text, {returnObjects: true}) : t(text);
}

function TranslateCookies(text: string, array?: boolean): string {
  const {t} = useTranslation("cookies");
  return array ? t(text, {returnObjects: true}) : t(text);
}

const Cookies: NextPage = () => {
  return (
    <>
      <Head>
        <title>{TranslateCommon("footer.cookies") + ' | Refy'}</title>
        <meta property="og:title" content={TranslateCommon("footer.cookies")} key={TranslateCommon("footer.cookies")}/>
      </Head>
      <Container bgColor="white" classes="mt-10">
      <h1 className="font-title">{TranslateCookies("title1")}</h1>
        <p className="pb-5">{TranslateCookies("ad1")}</p>
        <p className="pb-5">{TranslateCookies("ad2")}</p>
        <h1 className="font-title">{TranslateCookies("title")}</h1>
        <p className="pb-10">{TranslateCookies("description")}</p>
        <h1 className="font-title">{TranslateCookies("title2")}</h1>
        <p>{TranslateCookies("description2")}</p>
      </Container>
    </>
  );
};

export const getStaticProps = async ({locale}: { locale: string }) => ({
  props: {...(await serverSideTranslations(locale, ["common","cookies"]))},
});

export default Cookies;