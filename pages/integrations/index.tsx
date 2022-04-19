import Head from "next/head";
import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Integrations: NextPage = () => {
  const { t } = useTranslation("integrations");

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta property="og:title" content={t('title')} key={t('title')} />
      </Head>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: { ...(await serverSideTranslations(locale, ["common" ,"integrations"])) },
});

export default Integrations;
