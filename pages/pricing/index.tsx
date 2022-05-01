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
        <title>{t("title") + ' | Refy'}</title>
        <meta property="og:title" content={t("title")} key={t("title")} />
      </Head>
      <div className="mt-28">
        {/* Banner 1 */}
        <div className="w-full px-10 py-12 bg-gray-50 flex items-center justify-center">
          <div className="w-full p-16 bg-primary rounded-lg ring-1 ring-gray-900 ring-opacity-5">
            <div className="pb-10 flex flex-col items-center justify-center">
              <h1 className="text-white font-bold text-4xl">
                {t("banner.title")}
              </h1>
              <span className="text-gray-100 text-xl">
                {t("banner.subtitle")}
              </span>
            </div>
            <div className="w-full flex items-center justify-center mobile:flex-col mobile:space-y-6">
              <CardLeft {...CardProperties("left")}></CardLeft>
              <CardCenter {...CardProperties("center")}></CardCenter>
              <CardRight {...CardProperties("right")}></CardRight>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: { ...(await serverSideTranslations(locale, ["common", "pricing"])) },
});

export default Pricing;
