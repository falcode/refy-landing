import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Container from "../../layout/container";

function TranslateCommon(text: string, array?: boolean): string {
  const { t } = useTranslation("common");
  return array ? t(text, { returnObjects: true }) : t(text);
}

function TranslateCookies(text: string, array?: boolean): string {
  const { t } = useTranslation("privacy");
  return array ? t(text, { returnObjects: true }) : t(text);
}

const Privacy: NextPage = () => {
  return (
    <>
      <Head>
        <title>{TranslateCommon("footer.privacy") + ' | Refy'}</title>
        <meta property="og:title" content={TranslateCommon("footer.privacy")} key={TranslateCommon("footer.privacy")} />
      </Head>
      <Container bgColor="white">
        <h1 className="font-title mt-10">{TranslateCookies("title")}</h1>
        <p>{TranslateCookies("description")}</p>
        <ul className="mt-5 list-disc space-y-5">
          <li dangerouslySetInnerHTML={{ __html: TranslateCookies("point1-1") }}></li>
          <li>{TranslateCookies("point1-2")}</li>
          <li>{TranslateCookies("point1-3")}</li>
        </ul>
        <h1 className="font-title mt-10">{TranslateCookies("title2")}</h1>
        <p>{TranslateCookies("subtitle")}</p>
        <ul className="mt-5 list-disc space-y-5">
          <li dangerouslySetInnerHTML={{ __html: TranslateCookies("point1") }}></li>
          <li dangerouslySetInnerHTML={{ __html: TranslateCookies("point2") }}></li>
          <li dangerouslySetInnerHTML={{ __html: TranslateCookies("point3") }}></li>
          <li dangerouslySetInnerHTML={{ __html: TranslateCookies("point4") }}></li>
        </ul>
        <h1 className="font-title mt-10">{TranslateCookies("title3")}</h1>
        <p>{TranslateCookies("description3")}</p>
        <h1 className="font-title mt-10">{TranslateCookies("title4")}</h1>
        <p>{TranslateCookies("description4")}</p>
      </Container>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: { ...(await serverSideTranslations(locale, ["common", "privacy"])) },
});

export default Privacy;