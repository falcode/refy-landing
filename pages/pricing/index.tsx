import Head from "next/head";
import type { NextPage } from "next";
import { Price } from "./types/card.type";
import { useTranslation } from "next-i18next";
import { CardCenter, CardLeft, CardRight } from "./components/card";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Pricing: NextPage = () => {
  const { t } = useTranslation("pricing");

  const CardProperties = (option: string): Price => {
    return {
      title: t(`card.${option}.title`),
      currency: t(`card.currency`),
      price: t(`card.${option}.price`),
      frequency: t(`card.frequency`),
      options: t(`card.${option}.options`, { returnObjects: true }),
    };
  };

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta property="og:title" content={t('title')} key={t('title')} />
      </Head>
      <div className="w-full px-10 py-12 bg-gray-50 flex items-center justify-center">
        <div className="w-full relative rounded-lg ring-1 ring-gray-900 ring-opacity-5">
          <div className="w-full h-96 bg-rose-400 rounded-t-lg flex flex-col items-center pt-7">
            <h1 className="text-white font-bold text-4xl">
              {t("banner.title")}
            </h1>
            <span className="text-gray-100 text-xl">
              {t("banner.subtitle")}
            </span>
          </div>
          <div className="absolute top-32 w-full flex items-center justify-center">
            <CardLeft {...CardProperties("left")}></CardLeft>
            <CardCenter {...CardProperties("center")}></CardCenter>
            <CardRight {...CardProperties("right")}></CardRight>
          </div>
          <div className="w-full h-60 bg-white rounded-b-lg"></div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: { ...(await serverSideTranslations(locale, ["common" ,"pricing"])) },
});

export default Pricing;
