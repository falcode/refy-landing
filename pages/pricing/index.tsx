import Head from "next/head";
import type {NextPage} from "next";
import {useTranslation} from "next-i18next";
import {Price, PriceCard} from "./components/price-card";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Container from "../../layout/container";

function Translate(text: string, array?: boolean): string {
  const {t} = useTranslation("pricing");
  return array ? t(text, {returnObjects: true}) : t(text);
}

function TranslateArray(text: string): string[] {
  const {t} = useTranslation("pricing");
  return t(text, {returnObjects: true});
}

function stripHtmlTags(text: string): string {
  return text.replace(/(<([^>]+)>)/gi, "");
}

const Prices = () => {

  const CardProperties = (option: string, popular: boolean): Price => {
    return {
      title: Translate(`prices.${option}.title`),
      price: Translate(`prices.${option}.price`),
      options: TranslateArray(`prices.${option}.options`),
      button: Translate(`prices.button`),
      popular: popular,
    };
  };

  return (
    <Container bgColor="gray-100" classes="flex flex-col">
      <h1 className="font-title text-center">{Translate("banner.title")}</h1>
      <h2 className="font-subtitle text-center mt-5 mb-10" dangerouslySetInnerHTML={{__html: Translate("banner.subtitle")}}></h2>
      <div className="w-full flex mobile:flex-col desktop:space-x-5 mobile:space-y-5">
        <PriceCard {...CardProperties("startup", false)}></PriceCard>
        <PriceCard {...CardProperties("business", true)}></PriceCard>
        <PriceCard {...CardProperties("enterprise", false)}></PriceCard>
      </div>
    </Container>
  );
};

const Pricing: NextPage = () => {
  return (
    <>
      <Head>
        <title>{Translate("title") + ' | Refy'}</title>
        <meta property="og:title" content={Translate("title")} key={Translate("title")}/>
        <meta property="og:description" content={stripHtmlTags(Translate("banner.title"))}/>
      </Head>
      <div className="pt-16">
        <Prices></Prices>
      </div>
    </>
  );
};

export const getStaticProps = async ({locale}: { locale: string }) => ({
  props: {...(await serverSideTranslations(locale, ["common", "pricing"]))},
});

export default Pricing;
