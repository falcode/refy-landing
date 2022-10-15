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
  const { t } = useTranslation("terms");
  return array ? t(text, { returnObjects: true }) : t(text);
}

const Legal: NextPage = () => {
  return (
    <>
      <Head>
        <title>{TranslateCommon("footer.terms") + ' | Refy'}</title>
        <meta property="og:title" content={TranslateCommon("footer.terms")} key={TranslateCommon("footer.terms")} />
      </Head>
      <Container bgColor="white">
        <h1 className="font-title mt-10">{TranslateCookies("title")}</h1>
        <p dangerouslySetInnerHTML={{ __html: TranslateCookies("description") }}></p>
        <p>{TranslateCookies("subtitle")}</p>
        <ol className="mt-5 list-disc space-y-5">
          <li>{TranslateCookies("point1")}</li>
          <li>{TranslateCookies("point2")}</li>
          <li>{TranslateCookies("point3")}</li>
          <li>{TranslateCookies("point4")}</li>
        </ol>

        <h1 className="font-title mt-10">{TranslateCookies("title2")}</h1>
        <p className="font-subtitle">{TranslateCookies("subtitle2")}</p>
        <ol className="mt-5 list-disc space-y-5">
          <li>{TranslateCookies("owner")}</li>
          <li>{TranslateCookies("direction")}</li>
          <li>{TranslateCookies("nif")}</li>
          <li>{TranslateCookies("email")}</li>
          <li>{TranslateCookies("phone")}</li>
        </ol>

        <h1 className="font-title mt-10">{TranslateCookies("title3")}</h1>
        <p>{TranslateCookies("description3")}</p>
        <p>{TranslateCookies("list-title3")}</p>
        <ol className="mt-5 list-disc space-y-5">
          <li>{TranslateCookies("point3-1")}</li>
          <li>{TranslateCookies("point3-2")}</li>
          <li>{TranslateCookies("point3-3")}</li>
          <li>{TranslateCookies("point3-4")}</li>
          <li>{TranslateCookies("point3-5")}</li>
          <li>{TranslateCookies("point3-6")}</li>
          <li>{TranslateCookies("point3-7")}</li>
          <li>{TranslateCookies("point3-8")}</li>
          <li>{TranslateCookies("point3-9")}</li>
          <li>{TranslateCookies("point3-10")}</li>

        </ol>

        <h1 className="font-title mt-10">{TranslateCookies("title4")}</h1>
        <ol className="mt-5 space-y-5">
          <li>{TranslateCookies("description4-1")}</li><br />
          <li>{TranslateCookies("description4-2")}</li><br />
          <li>{TranslateCookies("description4-3")}</li>
        </ol>

        <h1 className="font-title mt-10">{TranslateCookies("title5")}</h1>
        <p>{TranslateCookies("description5")}</p>

        <h1 className="font-title mt-10">{TranslateCookies("title6")}</h1>
        <p>{TranslateCookies("description6")}</p>

        <h1 className="font-title mt-10">{TranslateCookies("title7")}</h1>
        <p>{TranslateCookies("description7")}</p>

        <h1 className="font-title mt-10">{TranslateCookies("title8")}</h1>
        <p>{TranslateCookies("description8")}</p>
        <ol className="mt-5 list-disc">
          <li>{TranslateCookies("point8-1")}</li><br />
          <li>{TranslateCookies("point8-2")}</li><br />
          <li>{TranslateCookies("point8-3")}</li>
        </ol>

        <h1 className="font-title mt-10">{TranslateCookies("title9")}</h1>
        <p>{TranslateCookies("description9")}</p>

        <h1 className="font-title mt-10">{TranslateCookies("title10")}</h1>
        <p>{TranslateCookies("description10")}</p>
      </Container>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: { ...(await serverSideTranslations(locale, ["common", "terms"])) },
});

export default Legal;