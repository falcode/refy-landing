import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

function Translate(text: string, array?: boolean): string {
  const {t} = useTranslation("common");
  return array ? t(text, {returnObjects: true}) : t(text);
}

const Terms: NextPage = () => {
  return (
    <>
      <Head>
        <title>{Translate("footer.terms") + ' | Refy'}</title>
        <meta property="og:title" content={Translate("footer.terms")} key={Translate("footer.terms")}/>
      </Head>
      <div className="pt-16">

      </div>
    </>
  );
};

export const getStaticProps = async ({locale}: { locale: string }) => ({
  props: {...(await serverSideTranslations(locale, ["common"]))},
});

export default Terms;