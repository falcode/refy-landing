import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import logo from "../assets/svg/logo-primary.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faHeart } from "@fortawesome/pro-solid-svg-icons";
import Container from "../layout/container";

function Translate(text: string, array?: boolean): string {
  const { t } = useTranslation("home");
  return array ? t(text, { returnObjects: true }) : t(text);
}

const Banner1 = () => (
  <Container bgColor="white" classes="flex items-center">
    <div className="flex flex-col flex-1">
      <h1 className="font-big-title mb-10">{Translate("first.title")}</h1>
      <p className="font-subtitle mb-8">{Translate("first.subtitle")}</p>
      <button className="button-primary">{Translate("first.button")}</button>
      <p className="font-hint mt-4">{Translate("first.hint")}</p>
    </div>
    <div className="flex flex-1 mobile:hidden">Image here</div>
  </Container>
);

const Banner2 = () => {
  const SliderCards = ({ cards }: { cards: string[] }) => {
    const [program, setProgram] = useState("fidelity");
    type Program = {
      title: string;
      subtitle: string;
      img: string;
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
    return (
      <>
        <div className="flex bg-white rounded-xl items-center justify-center mb-8 cursor-pointer">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`px-6 h-full flex items-center rounded-xl ${program === card ? "bg-primary" : ""}`}
              onClick={() => setProgram(card)}
            >
              <p className={`font-button-toggle ${program === card ? "font-button-toggle-active" : ""}`}>
                {Translate(`second.${card}.title`)}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center space-x-5 mobile:flex-col mobile:space-x-0 mobile:space-y-5">
          {(Translate(`second.${program}.cards`, true) as unknown as []).map((card, i) => (
            <ProgramCard key={i} {...card}></ProgramCard>
          ))}
        </div>
      </>
    );
  };

  return (
    <Container bgColor="gray-100" classes="flex flex-col items-center">
      <h1 className="font-title text-center mb-10">{Translate("second.title")}</h1>
      <SliderCards {...{ cards: ["fidelity", "money", "mix"] }}></SliderCards>
    </Container>
  );
};

const Banner3 = () => (
  <Container bgColor="primary" classes="flex flex-col items-center justify-center">
    <h1 className="font-title--white mb-10">{Translate("third.title")}</h1>
    <div className="flex items-center justify-center mobile:flex-col mobile:space-x-0 mobile:space-y-5">
      <Image src={logo} alt={logo} className="bg-white"></Image>
      <Image src={logo} alt={logo} className="bg-white"></Image>
      <Image src={logo} alt={logo} className="bg-white"></Image>
    </div>
  </Container>
);

const Banner4 = () => (
  <Container bgColor="white">
    <div className="flex mobile:flex-col">
      <div className="flex-1">
        <h1 className="font-big-title mb-10">{Translate("fourth.first.title")}</h1>
        <p className="font-hint mb-8">{Translate("fourth.first.hint")}</p>
        <p className="font-subtitle mb-4">{Translate("fourth.first.text-1")}</p>
        <p className="font-subtitle mb-4">{Translate("fourth.first.text-2")}</p>
        <p className="font-subtitle">{Translate("fourth.first.text-3")}</p>
      </div>
      <div className="flex flex-col flex-1 items-center justify-between">
        <div className="relative flex w-80 h-80">
          <div className="absolute flex top-24 flex-col justify-between p-4 w-32 h-40 bg-white rounded-xl drop-shadow-md">
            <Image src={logo}></Image>
            <div className="flex items-baseline justify-center">
              <FontAwesomeIcon icon={faHeart} style={{ fontSize: "1.2rem", color: "#FE6680" }}></FontAwesomeIcon>
              <p className="font-big-title--mini ml-2">140</p>
            </div>
          </div>
          <div className="absolute flex right-0 top-24 center flex-col justify-between p-4 w-32 h-40 bg-white rounded-xl drop-shadow-md">
            <Image src={logo}></Image>
            <div className="flex items-baseline justify-center">
              <FontAwesomeIcon icon={faHeart} style={{ fontSize: "1.2rem", color: "#FE6680" }}></FontAwesomeIcon>
              <p className="font-big-title--mini ml-2">140</p>
            </div>
          </div>
          <div className="absolute flex left-0 right-0 ml-auto mr-auto flex-col justify-between p-4 w-32 h-40 bg-white rounded-xl drop-shadow-md">
            <Image src={logo}></Image>
            <div className="flex items-baseline justify-center">
              <FontAwesomeIcon icon={faHeart} style={{ fontSize: "1.2rem", color: "#FE6680" }}></FontAwesomeIcon>
              <p className="font-big-title--mini ml-2">140</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5 justify-between p-4 w-80 bg-white rounded-xl drop-shadow-md">
          <FontAwesomeIcon
            icon={faSliders}
            style={{
              fontSize: "1.2rem",
              marginBottom: "10px",
              color: "#FE6680",
            }}
          ></FontAwesomeIcon>
          {(Translate("fourth.first.card.options", true) as unknown as []).map((option, i) => (
            <div key={i} className="flex justify-between">
              <p className="font-hint">{option}</p>
              <p className="font-hint">{Translate(`fourth.first.card.points.${i}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Container>
);

const Banner5 = () => (
  <Container bgColor="white">
    <div className="flex mobile:flex-col">
      <div className="flex-1"></div>
      <div className="flex-1">
        <h1 className="font-big-title mb-10">{Translate("fourth.second.title")}</h1>
        <p className="font-subtitle mb-4">{Translate("fourth.second.text-1")}</p>
        <p className="font-subtitle mb-4">{Translate("fourth.second.text-2")}</p>
        <p className="font-subtitle">{Translate("fourth.second.text-3")}</p>
      </div>
    </div>
  </Container>
);

const Banner6 = () => (
  <Container bgColor="white">
    <div className="flex mobile:flex-col">
      <div className="flex-1">
        <h1 className="font-big-title mb-10">{Translate("fourth.third.title")}</h1>
        <p className="font-subtitle mb-4">{Translate("fourth.third.text-1")}</p>
        <p className="font-subtitle mb-4">{Translate("fourth.third.text-2")}</p>
        <p className="font-subtitle">{Translate("fourth.third.text-3")}</p>
      </div>
      <div className="flex-1"></div>
    </div>
  </Container>
);

const Banner7 = () => (
  <Container bgColor="white">
    <div className="flex mobile:flex-col">
      <div className="flex-1"></div>
      <div className="flex-1">
        <h1 className="font-big-title mb-10">{Translate("fourth.fourth.title")}</h1>
        <p className="font-subtitle mb-4">{Translate("fourth.fourth.text-1")}</p>
        <p className="font-subtitle mb-4">{Translate("fourth.fourth.text-2")}</p>
        <p className="font-subtitle mb-4">{Translate("fourth.fourth.text-3")}</p>
        <p className="font-subtitle">{Translate("fourth.fourth.text-4")}</p>
      </div>
    </div>
  </Container>
);

const Banner8 = () => (
  <Container bgColor="white">
    <div className="flex mobile:flex-col">
      <div className="flex-1">
        <h1 className="font-big-title mb-10">{Translate("fourth.fifth.title")}</h1>
        <p className="font-subtitle mb-4">{Translate("fourth.fifth.text-1")}</p>
        <p className="font-subtitle mb-4">{Translate("fourth.fifth.text-2")}</p>
        <p className="font-subtitle">{Translate("fourth.fifth.text-3")}</p>
      </div>
      <div className="flex-1"></div>
    </div>
  </Container>
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{Translate("title")}</title>
        <meta property="og:title" content={Translate("title")} key={Translate("title")} />
      </Head>
      <div className="pt-16">
        <Banner1></Banner1>
        <Banner2></Banner2>
        <Banner3></Banner3>

        <Banner4></Banner4>
        <Banner5></Banner5>
        <Banner6></Banner6>
        <Banner7></Banner7>
        <Banner8></Banner8>
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: { ...(await serverSideTranslations(locale, ["common", "home"])) },
});

export default Home;
