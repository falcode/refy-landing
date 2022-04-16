import Head from "next/head";
import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Button } from "@material-ui/core";

const Home: NextPage = () => {
  const { t } = useTranslation("home");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta property="og:title" content={t("title")} key={t("title")} />
      </Head>
      <div>
        {/* Banner 1 */}
        <div className="w-full h-128 px-10 bg-white flex items-center">
          <div className="flex flex-col flex-1">
            <h1 className="title mb-10">{t("first.title")}</h1>
            <p className="subtitle mb-10">{t("first.subtitle")}</p>
            <Button>{t("first.button")}</Button>
            <p className="subtitle">{t("first.hint")}</p>
          </div>
          <div className="flex flex-1">Image here</div>
        </div>

        {/* Banner 2 */}

        <div className="w-full h-128 px-10 bg-gray-200 flex items-center">

        </div>

        {/* Banner 3 */}

        <div className="w-full h-80 px-10 bg-primary flex items-center">

        </div>

        {/* Banner 4 */}
      </div>
      {/* </Layout> */}
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: { ...(await serverSideTranslations(locale, ["common", "home"])) },
});

export default Home;
