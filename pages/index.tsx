import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import logo from "../assets/svg/logo-primary.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/pro-solid-svg-icons";
import Container from "../layout/container";



const Home: NextPage = () => {
  const { t } = useTranslation("home");
  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta property="og:title" content={t("title")} key={t("title")} />
      </Head>
      <div className="pt-16">
        {/* Banner 1 */}
        <Container bgColor="white" classes="flex items-center">
          <div className="flex flex-col flex-1">
            <h1 className="font-big-title mb-10">{t("first.title")}</h1>
            <p className="font-subtitle mb-8">{t("first.subtitle")}</p>
            <button className="button-primary">{t("first.button")}</button>
            <p className="font-hint mt-4">{t("first.hint")}</p>
          </div>
          <div className="flex flex-1 mobile:hidden">Image here</div>
        </Container>

        {/* Banner 2 */}
        <Container bgColor="gray-100" classes="flex flex-col items-center">
          <h1 className="font-title text-center mb-10">{t("second.title")}</h1>
          <SliderCards
            {...{ cards: ["fidelity", "money", "mix"] }}
          ></SliderCards>
        </Container>

        {/* Banner 3 */}
        <Container
          bgColor="primary"
          classes="flex flex-col items-center justify-center"
        >
          <h1 className="font-title--white mb-10">{t("third.title")}</h1>
          <div className="flex items-center justify-center mobile:flex-col mobile:space-x-0 mobile:space-y-5">
            <Image src={logo} alt={logo} className="bg-white"></Image>
            <Image src={logo} alt={logo} className="bg-white"></Image>
            <Image src={logo} alt={logo} className="bg-white"></Image>
          </div>
        </Container>

        {/* Banner 4 */}
        <Container
          bgColor="white"
          classes="flex flex-col items-center justify-center"
        >
          {/* Section 1 */}
          <div className="flex mobile:flex-col">
            <div className="flex-1 p-10">
              <h1 className="font-big-title mb-10">
                {t("fourth.first.title")}
              </h1>
              <p className="font-hint mb-8">{t("fourth.first.hint")}</p>
              <p className="font-subtitle mb-4">{t("fourth.first.text-1")}</p>
              <p className="font-subtitle mb-4">{t("fourth.first.text-2")}</p>
              <p className="font-subtitle">{t("fourth.first.text-3")}</p>
            </div>
            <div className="flex p-10 flex-col flex-1 items-center justify-between">
              <div>cajita</div>
              <div className="flex flex-col justify-between p-4 w-80 h-48 bg-white rounded-xl drop-shadow-md">
                <FontAwesomeIcon
                  icon={faSliders}
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "10px",
                    color: "#FE6680",
                  }}
                ></FontAwesomeIcon>
                {(
                  t("fourth.first.card.options", { returnObjects: true }) as []
                ).map((option, i) => (
                  <div key={i} className="flex justify-between">
                    <p className="font-hint">{option}</p>
                    <p className="font-hint">
                      {t(`fourth.first.card.points.${i}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex mobile:flex-col">
            <div className="flex-1 p-10"></div>
            <div className="flex-1 p-10">
              <h1 className="font-big-title mb-10">
                {t("fourth.second.title")}
              </h1>
              <p className="font-subtitle mb-4">{t("fourth.second.text-1")}</p>
              <p className="font-subtitle mb-4">{t("fourth.second.text-2")}</p>
              <p className="font-subtitle">{t("fourth.second.text-3")}</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex mobile:flex-col">
            <div className="flex-1 p-10">
              <h1 className="font-big-title mb-10">
                {t("fourth.third.title")}
              </h1>
              <p className="font-subtitle mb-4">{t("fourth.third.text-1")}</p>
              <p className="font-subtitle mb-4">{t("fourth.third.text-2")}</p>
              <p className="font-subtitle">{t("fourth.third.text-3")}</p>
            </div>
            <div className="flex-1 p-10"></div>
          </div>

          {/* Section 4 */}
          <div className="flex mobile:flex-col">
            <div className="flex-1 p-10"></div>
            <div className="flex-1 p-10">
              <h1 className="font-big-title mb-10">
                {t("fourth.fourth.title")}
              </h1>
              <p className="font-subtitle mb-4">{t("fourth.fourth.text-1")}</p>
              <p className="font-subtitle mb-4">{t("fourth.fourth.text-2")}</p>
              <p className="font-subtitle mb-4">{t("fourth.fourth.text-3")}</p>
              <p className="font-subtitle">{t("fourth.fourth.text-4")}</p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="flex mobile:flex-col">
            <div className="flex-1 p-10">
              <h1 className="font-big-title mb-10">
                {t("fourth.fifth.title")}
              </h1>
              <p className="font-subtitle mb-4">{t("fourth.fifth.text-1")}</p>
              <p className="font-subtitle mb-4">{t("fourth.fifth.text-2")}</p>
              <p className="font-subtitle">{t("fourth.fifth.text-3")}</p>
            </div>
            <div className="flex-1 p-10"></div>
          </div>
        </Container>
      </div>
    </>
  );
};

type Program = {
  title: string;
  subtitle: string;
  img: string;
};

const SliderCards = ({ cards }: { cards: string[] }) => {
  const [program, setProgram] = useState("fidelity");
  const { t } = useTranslation("home");
  return (
    <>
      <div className="flex bg-white rounded-xl items-center justify-center mb-8 cursor-pointer">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`px-6 h-full flex items-center rounded-xl ${
              program === card ? "bg-primary" : ""
            }`}
            onClick={() => setProgram(card)}
          >
            <p
              className={`font-button-toggle ${
                program === card ? "font-button-toggle-active" : ""
              }`}
            >
              {t(`second.${card}.title`)}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-5 mobile:flex-col mobile:space-x-0 mobile:space-y-5">
        {(t(`second.${program}.cards`, { returnObjects: true }) as []).map(
          (card, i) => (
            <ProgramCard key={i} {...card}></ProgramCard>
          )
        )}
      </div>
    </>
  );
};

const ProgramCard = (card: Program) => {
  return (
    <div className="flex flex-col p-4 w-72 h-96 bg-white rounded-lg drop-shadow-md">
      <div className="w-full h-36"></div>
      <p className="font-title mb-4">{card.title}</p>
      <p className="font-hint">{card.subtitle}</p>
    </div>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: { ...(await serverSideTranslations(locale, ["common", "home"])) },
});

export default Home;
